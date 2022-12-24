import type { Plugin } from "esbuild-wasm";
import { esmTransform } from "./runner";

import { readFile } from "./fs";

let fetchCache: Cache = {
  match: (req: Request) =>
    caches.open("fetchCache").then((fc) => {
      fetchCache = fc;
      return fc.match(req);
    }),
} as unknown as Cache;

// const codeSpace = location.pathname.slice(1).split("/")[1];
// import type * as esbuild from "esbuild-wasm";

export const fetchPlugin: (
  importmapReplace: (
    code: string,
    origin: string,
    relativeUrl: string,
  ) => string,
) => Plugin = (importmapReplace) => ({
  name: "http",
  setup(build) {
    // Intercept import paths starting with "http:" and "https:" so
    // esbuild doesn't attempt to map them to a file system location.
    // Tag them with the "http-url" namespace to associate them with
    // this plugin.
    // build.onResolve({ filter: /^https?:\/\// }, args => ({
    //   path: args.path,
    //   namespace: "http-url",
    // }));

    // We also want to intercept all import paths inside downloaded
    // files and resolve them against the original URL. All of these
    // files will be in the "http-url" namespace. Make sure to keep
    // the newly resolved URL in the "http-url" namespace so imports
    // inside it will also be resolved as URLs recursively.
    build.onResolve({ filter: /.*/, namespace: "http-url" }, (args) => ({
      path: new URL(args.path, args.importer).toString(),
      namespace: "http-url",
    }));
    build.onResolve({ filter: /\.ttf*/, namespace: "http-url" }, (args) => ({
      path: new URL(args.path, args.importer).toString(),
      namespace: "ttf",
    }));

    // build.onResolve({ filter: /^.*/, namespace: "http-url" }, args => ({
    //   path: new URL(args.path, location.origin + "/npm:/").toString(),
    //   namespace: "http-url",
    // }));
    // When a URL is loaded, we want to actually download the content
    // from the internet. This has just enough logic to be able to
    // handle the example import from unpkg.com but in reality this
    // would probably need to be more complex.
    build.onLoad({ filter: /live\/.*.tsx.*/ }, async (args) => {
      const lastPart = args.path.split("/live/").pop();
      const file = await readFile(`/live/${lastPart}`);
      const code = await esmTransform(file as string);
      console.log({ code });
      // if (file) {
      //   return new Response(file);
      // }

      //       if (args.path.indexOf("render.tsx") !== -1) {

      //         const contents = await (`
      //       import {hydrateRoot} from "react-dom/client"
      //       import { CacheProvider } from "@emotion/react";
      //       import createCache from "@emotion/cache";
      //       import {StrictMode} from "react";
      //       import { ErrorBoundary } from "react-error-boundary";

      //       import App from "${location.origin}/live/${codeSpace}/index.js/${mST().i}"

      //       document.body.innerHTML = ${
      //           JSON.stringify(
      //             `<style>${mST().css}</style><div id="root" style="height:100%">${mST().html}</div>`,
      //           )
      //         };

      //   let rootEl = document.getElementById("root");

      //   const codeSpace="${codeSpace}"
      //     const cache = createCache({
      //       key: "${hashCode()}",
      //       container: rootEl,
      //       speedy: false
      //     });

      //    cache.compat = undefined;

      //    const bc = new BroadcastChannel(location.origin);

      //    bc.onmessage = async (event) => {
      //      if (
      //       event.data.codeSpace === codeSpace)
      // {
      //       const App = (await("${location.origin}/live/${codeSpace}/index.js/"+event.data.i)).default;

      //       hydrateRoot(rootEl, <StrictMode><ErrorBoundary
      //         fallbackRender={({ error }) => (
      //           <div role="alert">
      //             <div>Oh n o</div>
      //             <pre>{error.message}</pre>
      //           </div>
      //         )}>
      //         <CacheProvider value={cache}>
      //           <App />
      //         </CacheProvider>
      //         </ErrorBoundary></StrictMode>);
      //         }
      //   }

      //    hydrateRoot(rootEl, <StrictMode><ErrorBoundary
      //     fallbackRender={({ error }) => (
      //       <div role="alert">
      //         <div>Oh n o</div>
      //         <pre>{error.message}</pre>
      //       </div>
      //     )}>
      //     <CacheProvider value={cache}>
      //       <App />
      //     </CacheProvider>
      //     </ErrorBoundary></StrictMode>);
      //       `);
      return {
        contents: code,
      };
      // }
      // return null;
    });

    build.onLoad({ filter: /.*/ }, async (args) => {
      // importShim.resolve(args.path, args.importer)

      const req = new Request(args.path);
      let response = await getRequest(req);

      if (req.url.indexOf(".tsx")) {
        const contents = await esmTransform(await response.text());
        return {
          contents: importmapReplace(contents, location.origin, args.path),
        };
      }

      if (args.namespace === "ttf") {
        let contents = await response.arrayBuffer();
        response = new Response(contents, response);
        return {
          contents: response,
          loader: "dataurl",
        };
      }

      let contents = await response.text();
      response = new Response(contents, response);

      return { contents: response };
    });
  },
});

async function getRequest(req: Request) {
  let response = await fetchCache.match(req);
  if (response) return response;

  response = await fetch(req);
  if (!response || !response.ok) return response;
  response = new Response(response.body, response);

  await fetchCache.put(req, response.clone());
  return response;
}
