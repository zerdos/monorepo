import { handleErrors } from "./handleErrors.mjs";
import { RateLimiterClient } from "./rateLimiterClient.mjs";
import DiffMatchPatch from "diff-match-patch";
import Hash from "ipfs-only-hash";
import HTML from "./target.html";
import importMap from "@spike.land/code/js/importmap.json";
import { version } from "@spike.land/code/package.json";

export class Code {
  constructor(state, env) {
    this.state = state;

    this.session = {};

    this.state.blockConcurrencyWhile(async () => {
      let code = await this.state.storage.get("code");

      if (!code) {
        this.session = {
          code: "",
          transpiled: "",
          css: "",
          html: "",
          lastTimestamp: Date.now(),
        };

        return;
      }

      let css = await this.state.storage.get("css");
      let transpiled = await this.state.storage.get("transpiled");
      let html = await this.state.storage.get("html");
      let lastTimestamp = Number(await this.state.storage.get("lastTimestamp") || 0) || Date.now();

      this.session = {
        code,
        transpiled,
        html,
        css,
        lastTimestamp,
        hashOfCode: Hash.of(code),
      };
    });

    this.env = env;
    this.sessions = [];
  }

  async fetch(request) {
    return await handleErrors(request, async () => {
      let url = new URL(request.url);
      const codeSpace = url.searchParams.get("room");

      let path = url.pathname.slice(1).split("/");

      switch (path[0]) {
        case "code": {
          return new Response(this.session.code, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache",
              "Content-Type": "text/html; charset=UTF-8",
            },
          });
        }
        case "js": {
          return new Response(this.session.transpiled, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache",
              "Content-Type": "application/javascript; charset=UTF-8",
            },
          });
        }
        case "html": {
          const htmlContent = this.session.html;
          const css = await this.session.css;

          const html = HTML.replace(
            `<div id="zbody"></div>`,
            `<style>${css}</style><div id="zbody">${htmlContent}</div>`,
          ).replace("$$ROOMNAME", "roomie").replace(
            "$$IMPORTMAP",
            JSON.stringify({
              imports: {
                ...importMap.imports,
                app: `https://code.spike.land/api/room/${codeSpace}/js`,
                ws: `https://code.spike.land/@${version}/dist/ws.mjs`,
              },
            }),
          );

          return new Response(html, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache",
              "Content-Type": "text/html; charset=UTF-8",
            },
          });
        }
        case "env": {
          return new Response(codeSpace, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache",
              "Content-Type": "text/html; charset=UTF-8",
            },
          });
        }
        case "hashOfCode": {
          return new Response(await this.session.hashOfCode, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache",
              "Content-Type": "text/html; charset=UTF-8",
            },
          });
        }
        case "public": {
          const html = HTML.replace(
            "$$IMPORTMAP",
            JSON.stringify({
              imports: {
                ...importMap.imports,
                app: `https://code.spike.land/@${version}/dist/ws.mjs`,
              },
            }),
          );

          return new Response(html, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache",
              "Content-Type": "text/html; charset=UTF-8",
            },
          });
        }

        case "websocket": {
          if (request.headers.get("Upgrade") != "websocket") {
            return new Response("expected websocket", { status: 400 });
          }

          let ip = request.headers.get("CF-Connecting-IP");
          // eslint-disable-next-line no-undef
          let pair = new WebSocketPair();

          await this.handleSession(pair[1], ip);

          return new Response(null, { status: 101, webSocket: pair[0] });
        }

        default:
          return new Response("Not found", { status: 404 });
      }
    });
  }

  async handleSession(webSocket, ip) {
    webSocket.accept();

    let limiterId = this.env.LIMITERS.idFromName(ip);
    let limiter = new RateLimiterClient(
      () => this.env.LIMITERS.get(limiterId),
      (err) => webSocket.close(1011, err.stack),
    );

    let session = { webSocket, blockedMessages: [] };
    this.sessions.push(session);

    this.sessions.forEach((otherSession) => {
      if (otherSession.name) {
        session.blockedMessages.push(
          JSON.stringify({ joined: otherSession.name }),
        );
      }
    });

    // let storage = await this.storage.list({ reverse: true, limit: 100 });
    // let backlog = [...storage.values()];

    // backlog.reverse();
    // backlog.forEach((value) => {
    //   session.blockedMessages.push(value);
    // });

    if (this.session.code) {
      session.blockedMessages.push(
        JSON.stringify({ hashOfCode: await this.session.hashOfCode }),
      );
    }

    let receivedUserInfo = false;
    webSocket.addEventListener("message", async (msg) => {
      try {
        if (session.quit) {
          webSocket.close(1011, "WebSocket broken.");
          return;
        }

        if (!limiter.checkLimit()) {
          webSocket.send(JSON.stringify({
            error: "Your IP is being rate-limited, please try again later.",
          }));
          return;
        }

        let data = JSON.parse(msg.data);

        if (!receivedUserInfo) {
          session.name = "" + (data.name || "anonymous");

          if (session.name.length > 32) {
            webSocket.send(JSON.stringify({ error: "Name too long." }));
            webSocket.close(1009, "Name too long.");
            return;
          }

          // Deliver all the messages we queued up since the user connected.
          session.blockedMessages.forEach((queued) => {
            webSocket.send(queued);
          });
          delete session.blockedMessages;

          // Broadcast to all other connections that this user has joined.
          this.broadcast({ joined: session.name });

          webSocket.send(JSON.stringify({ ready: true }));

          // Note that we've now received the user info message.
          receivedUserInfo = true;

          return;
        }

        // Construct sanitizedlastSeenCode message for storage and broadcast.

        const codeDiff = data.codeDiff;

        let code = data.code;
        let html = data.html;
        let css = data.css;
        let transpiled = data.transpiled;
        let hashOfStarterCode = data.hashOfStarterCode;

        const transpiledDiff = data.transpiledDiff;
        const htmlDiff = data.htmlDiff;
        const cssDiff = data.cssDiff;

        const previousCode = this.session.code;
        const hashOfPreviousCode = await this.session.hashOfCode;

        data = { name: session.name };

        let patched = false;

        if (hashOfStarterCode != hashOfPreviousCode) {
          data.code = this.session.code,
          data.hashOfCode = await this.session.hashOfCode;
        } else if (codeDiff) {
          code = unDiff(previousCode, codeDiff);

          const hashOfCode = await Hash.of( code );

          if (hashOfCode ===  data.hashOfCode ) {
            patched = true;
            this.session.hashOfCode = hashOfCode;
            this.session.code = code;

            data.hashOfCode = hashOfCode;
            data.hashOfPreviousCode = hashOfPreviousCode;
            data.codeDiff = codeDiff;
          }
        }

        // if (data..length > 4096) {
        //   webSocket.send(JSON.stringify({ error: "Message too long." }));
        //   return;
        // }
        
        data.timestamp = Math.max(
          Date.now(),
          this.session.lastTimestamp + 1,
        );
        this.session.lastTimestamp = data.timestamp;

        // Broadcast the message to all other WebSockets.
        let dataStr = JSON.stringify(data);
        this.broadcast(dataStr);

        if (patched) {
          try {
            if (cssDiff) css = unDiff(this.session.css, cssDiff);
            if (transpiledDiff) {
              transpiled = unDiff(this.session.transpiled, transpiledDiff);
            }
            if (htmlDiff) html = unDiff(this.session.html, htmlDiff);
            this.session.css = css;
            this.session.html = html;
            this.session.transpiled = transpiled;
          } catch {
            data.errorUnDiff = true;
          }
        }
        // Save message.
        let key = new Date(this.session.lastTimestamp).toISOString();

        if (patched && code) {
          // await this.state.storage.put(hashOfCode, code);
          await this.state.storage.put("code", code);
        }

        if (html) {
          await this.state.storage.put("html", html);
        }
        if (transpiled) {
          await this.state.storage.put("transpiled", transpiled);
        }
        if (css) {
          await this.state.storage.put("css", css);
        }

        await this.state.storage.put(key, dataStr);
      } catch (err) {
        webSocket.send(JSON.stringify({ error: err.stack }));
      }
    });

    let closeOrErrorHandler = () => {
      session.quit = true;
      this.sessions = this.sessions.filter((member) => member !== session);
      if (session.name) {
        this.broadcast({ quit: session.name });
      }
    };
    webSocket.addEventListener("close", closeOrErrorHandler);
    webSocket.addEventListener("error", closeOrErrorHandler);
  }

  broadcast(message) {
    if (typeof message !== "string") {
      message = JSON.stringify(message);
    }

    let quitters = [];
    this.sessions = this.sessions.filter((session) => {
      if (session.name) {
        try {
          session.webSocket.send(message);
          return true;
        } catch (err) {
          session.quit = true;
          quitters.push(session);
          return false;
        }
      } else {
        session.blockedMessages.push(message);
        return true;
      }
    });

    quitters.forEach((quitter) => {
      if (quitter.name) {
        this.broadcast({ quit: quitter.name });
      }
    });
  }
}

function unDiff(old, diff) {
  const dmp = new DiffMatchPatch();
  const patches = dmp.patch_fromText(diff);
  const patchedCode = (dmp.patch_apply(patches, old)[0]);
  return patchedCode;
}
