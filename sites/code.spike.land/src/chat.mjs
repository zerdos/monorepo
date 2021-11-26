import { version } from "@spike.land/code/package.json";
import importMap from "@spike.land/code/js/importmap.json";

import HTML from "./index.html";

import { default as npmAns } from "@spike.land/cf-npm-site";
import { handleErrors } from "./handleErrors.mjs";

export default {
  async fetch(request, env) {
    return await handleErrors(request, async () => {
      // We have received an HTTP request! Parse the URL and route the request.

      let url = new URL(request.url);
      let path = url.pathname.slice(1).split("/");

      if (!path[0]) {
        // Serve our HTML at the root path.

        const html1 = HTML.slice(0, HTML.length - 40) + "*/";
        const html2 = "/*" + HTML.slice(HTML.length - 40);

        const rand = Math.random();
        const injection = `
              console.log(${rand});
          `;

        // Serve our HTML at the root path.
        const regex = /VERSION/ig;
        importMap.imports.app = `./@${version}/js/starter.mjs`;
        return new Response(
          html1.replace("$$IMPORTMAP", JSON.stringify(importMap)).replaceAll(
            regex,
            version,
          ) + injection + html2,
          {
            headers: {
              "Content-Type": "text/html;charset=UTF-8",
              "Cache-Control": "no-cache",
            },
          },
        );
      }

      switch (path[0]) {
        case "api":
          // This is a request for `/api/...`, call the API handler.
          return handleApiRequest(path.slice(1), request, env);

        case "live":
          return new Response("woof", {
            status: 200, 
            headers: {
               "Access-Control-Allow-Origin": "*",
               "Cache-Control": "no-cache",
               "Content-Type": "text/html; charset=UTF-8"
             }
          });

        default:
          return npmAns("@spike.land/code", version)(request, env);
      }
    });
  },
};

async function handleApiRequest(path, request, env) {
  // We've received at API request. Route the request based on the path.

  switch (path[0]) {
    case "room": {

      if (!path[1]) {
        if (request.method === "POST") {
          let id = env.CODE.newUniqueId();
          return new Response(id.toString(), {
            headers: { "Access-Control-Allow-Origin": "*" },
          });
        } else {
          return new Response("Method not allowed", { status: 405 });
        }
      }

      let name = path[1];

      let id;
      if (name.match(/^[0-9a-f]{64}$/)) {
        id = env.CODE.idFromString(name);
      } else if (name.length <= 32) {
        id = env.CODE.idFromName(name);
      } else {
        return new Response("Name too long", { status: 404 });
      }

      let roomObject = env.CODE.get(id);

      let newUrl = new URL(request.url);
      newUrl.pathname = "/" + path.slice(2).join("/");

      return roomObject.fetch(newUrl, request);
    }

    default:
      return new Response("Not found", { status: 404 });
  }
}
