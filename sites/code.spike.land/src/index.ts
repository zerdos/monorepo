import { version } from "@spike.land/code/package.json";
import { handleSession } from "./websocket.mjs";
export { Code } from "./code";
export { CodeRateLimiter } from "./rateLimiter.mjs";

export default {
  async fetch(request: Request, env: EventInit) {
    try {
      const url = new URL(request.url);
      const { pathname } = url;

      if (pathname === "/websocket") {
        // The request is to `/api/room/<name>/websocket`. A client is trying to establish a new
        // WebSocket session.
        if (request.headers.get("Upgrade") != "websocket") {
          return new Response("expected websocket", { status: 400 });
        }

        // Get the client's IP address for use with the rate limiter.
        let ip = request.headers.get("CF-Connecting-IP");

        // To accept the WebSocket request, we create a WebSocketPair (which is like a socketpair,
        // i.e. two WebSockets that talk to each other), we return one end of the pair in the
        // response, and we operate on the other end. Note that this API is not part of the
        // Fetch API standard; unfortunately, the Fetch API / Service Workers specs do not define
        // any way to act as a WebSocket server today.
        let pair = new WebSocketPair();

        // We're going to take pair[1] as our end, and return pair[0] to the client.
        await handleSession(pair[1], ip);

        // Now we return the other end of the pair to the client.
        return new Response(null, { status: 101, webSocket: pair[0] });
      }

      // let id = env.CODE.idFromName(pathname.substring(1, 3));
      // let obj = env.CODE.get(id);

      // let response = await obj.fetch(request.url);

      // let count = parseInt(await response.text());

      const uri = (pathname.startsWith("/@")
        ? pathname.substring(1)
        : `@${version}${pathname}`);

      let myCache = await caches.open(`blog-npm:${version}`);
      const cachedResp = await myCache.match(request, {});

      if (cachedResp) {
        return cachedResp;
      }

      let targetPath = uri;

      if (uri.endsWith("/")) {
        targetPath = `${uri}/index.html`;
      }
      const resp = fetch(`https://unpkg.com/@spike.land/code${targetPath}`);

      myCache.put(request, (await resp).clone());

      return resp;
    } catch (Error) {
      return new Response(`Yayy... ${Object.prototype.toString.call(Error)}`);
    }
  },
};
