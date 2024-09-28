// Updated Service Worker Code

const sw = self as unknown as
  & ServiceWorkerGlobalScope
  & { swVersion: string }
  & { cSessions: { [key: string]: CodeSessionBC } }
  & { files: { [key: string]: string }; fileCacheName: string };

importScripts("/swVersion.js");

// import { importMap } from "@/lib/importmap-utils";
import { serveWithCache } from "@/lib/serve-with-cache";
import { CodeSessionBC } from "./services/CodeSessionBc";

// function addPrefixToImportMap(imap: typeof importMap, prefix: string) {
//   const updatedImports: { [key: string]: string } = {};

//   for (const [key, value] of Object.entries(imap.imports)) {
//     // Ensure correct path concatenation

//     const updatedValue = new URL((value as string).slice(1), "http://example.com" + prefix)
//       .pathname;
//     updatedImports[key] = updatedValue;
//   }

//   return { imports: updatedImports };
// }

// const imap = addPrefixToImportMap(importMap, `/${swVersion}/`);

// Now, self.swVersion and self.files are available
const files = sw.files;
sw.cSessions = sw.cSessions || {};
sw.fileCacheName = `sw-file-cache-v13`; // Updated cache name to avoid conflicts

// Instantiate serveWithCache
const { isAsset, serve } = serveWithCache(
  files,
  async () =>
    await caches.open(
      await fetch("/sw-config.json").then((response) => response.json() as unknown as { version: string }).then((
        config,
      ) => `sw-file-cache-${config.version}`),
    ),
);

sw.oninstall = () => {
  // Activate the new service worker immediately
  sw.skipWaiting();
};
sw.oninstall = (event) => {
  event.waitUntil(
    fetch("/sw-config.json")
      .then((response) => response.json() as Promise<{ killSwitch: boolean; version: "v14" }>)
      .then(async (config) => {
        if (config.killSwitch) {
          await sw.registration.unregister();
          const cacheNames = await caches.keys();
          return await Promise.all(cacheNames.map((cache) => caches.delete(cache)));
        }
        sw.skipWaiting();
        return Promise.resolve(); // Add this line to return a resolved promise
      })
      .catch((error) => {
        console.error("Failed to fetch configuration:", error);

        // Handle fetch error (e.g., proceed with installation or retry)
      }),
  );
};

let lastConfigCheck = 0;
sw.onactivate = (event) => {
  if (Date.now() - lastConfigCheck > 60 * 60 * 1000) { // Check every hour
    lastConfigCheck = Date.now();
    event.waitUntil(
      fetch("/sw-config.json")
        .then((response) => response.json() as Promise<{ killSwitch: boolean; version: "v14" }>)
        .then(async (config) => {
          if (config.killSwitch) {
            return sw.registration.unregister().then(() => {
              return sw.clients.matchAll().then((clients) => {
                (clients as unknown as WindowClient[]).forEach((client) => client.navigate(client.url));
              });
            });
          }
        })
        .catch((error) => {
          console.error("Failed to fetch configuration:", error);
        }),
    );
  }

  event.waitUntil(
    (async () => {
      // Delete old caches if any
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== sw.fileCacheName)
          .map((cacheName) => caches.delete(cacheName)),
      );
      // Claim clients so the service worker takes control immediately
      await sw.clients.claim();
    })(),
  );
};

sw.onmessage = ({ data }) => {
  if (data === "SKIP_WAITING" && data["type"] !== "SKIP_WAITING") {
    sw.skipWaiting();
  }
};
let lastFetch = 0;

sw.onfetch = (event) => {
  event.waitUntil(
    (async () => {
      if (Date.now() - lastFetch < 60_000) {
        return;
      }
      lastFetch = Date.now();

      const response = await fetch("/files.json");
      const data = await response.json() as { [key: string]: string; ASSET_HASH: string };
      if (sw.swVersion !== data.ASSET_HASH) {
        sw.swVersion = data.ASSET_HASH;
        sw.files = data;
        sw.registration.waiting?.postMessage("SKIP_WAITING");
      }
    })(),
  );

  const request = event.request;
  // const url = new URL(request.url);
  // const pathname = url.pathname;

  if (isAsset(request)) {
    // console.log("Its probably a file", request.url);
    event.respondWith(
      serve(
        request,
        (req, waitUntil) => {
          // console.log("Fetching from network", req.url);
          const respPromise = fetch(req, { redirect: "follow" });
          waitUntil(respPromise);
          return respPromise;
        },
        event.waitUntil.bind(event),
      ).catch((error) => {
        console.error("Error in serve", error);
        sw.skipWaiting();
        return fetch(request);
      }),
    );
  }

  //   else if (
  //     pathname.includes("/live/") || pathname in routes
  //   ) {
  //     const codeSpace = useCodeSpace(pathname);

  //     event.respondWith((async () => {
  //       const pathname = new URL(request.url).pathname;

  //       if (!sw.cSessions[codeSpace]) {
  //         const bcSession = new CodeSessionBC(codeSpace);

  //         sw.cSessions[codeSpace] = bcSession;
  //         bcSession.sub((session) => {
  //           sw.cSessions[codeSpace].session = session;
  //         });

  //         await bcSession.init();
  //       }

  //       const session = sw.cSessions[codeSpace].session!;

  //       if (pathname.includes("index.js")) {
  //         return new Response(session?.transpiled || "", {
  //           headers: { "Content-Type": "application/javascript", "Cache-Control": "no-cache" },
  //         });
  //       } else if (pathname.includes("session")) {
  //         return new Response(JSON.stringify(session), {
  //           headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
  //         });
  //       } else if (pathname.includes("index.css")) {
  //         return new Response(session?.css || "", {
  //           headers: { "Content-Type": "text/css", "Cache-Control": "no-cache" },
  //         });
  //       } else if (pathname.includes("index.tsx")) {
  //         return new Response(session?.code || "", {
  //           headers: { "Content-Type": "application/typescript", "Cache-Control": "no-cache" },
  //         });
  //       } else if (
  //         pathname.includes("iframe") || pathname.includes("embed") || pathname.length < 2
  //         || pathname.includes("dehydrated") || pathname in routes || pathname === `/live/${codeSpace}/`
  //         || pathname === `/live/${codeSpace}`
  //       ) {
  //         const HTML = await (await serve(
  //           new Request(location.origin + "/index.html"),
  //           (req, waitUntil) => {
  //             // console.log("Fetching from network", req.url);
  //             const respPromise = fetch(req, { redirect: "follow" });
  //             waitUntil(respPromise);
  //             return respPromise;
  //           },
  //           event.waitUntil.bind(event),
  //         )).text();

  //         const { html } = session;

  //         const respText = HTML.replace(
  //           `<script type="importmap"></script>`,
  //           `<script type="importmap">${JSON.stringify(imap)}</script>`,
  //         ).replace(
  //           `<link rel="preload" href="app/tw-global.css" as="style">`,
  //           `<link rel="preload" href="app/tw-global.css" as="style">
  //                  <link rel="preload" href="/live/${codeSpace}/index.css" as="style">
  //                  <link rel="stylesheet" href="/live/${codeSpace}/index.css">
  //                  `,
  //         ).replace(
  //           "<div id=\"embed\"></div>",
  //           `<div id="embed">${html}</div>`,
  //         ).replace(`<base href="/">`, `<base href="/${swVersion}/">`);

  //         const headers = new Headers({
  //           "Access-Control-Allow-Origin": "*",
  //           "Cross-Origin-Embedder-Policy": "require-corp",
  //           "Cross-Origin-Resource-Policy": "cross-origin",
  //           "Cross-Origin-Opener-Policy": "same-origin",
  //           "Cache-Control": "no-cache",
  //           "Content-Encoding": "gzip",
  //           "Content-Type": "text/html; charset=UTF-8",
  //           "content_hash": md5(respText),
  //         });

  //         return new Response(respText, { headers });
  //       } else {
  //         return fetch(request);
  //       }
  //     })());
  //   } else {
  //     // console.log("Its probably not a file", request.url);
  //     // For non-asset requests, fetch from the network

  //     event.respondWith(fetch(request));
  //   }
};
