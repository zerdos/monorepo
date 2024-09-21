// Updated Service Worker Code

const sw = self as unknown as
  & ServiceWorkerGlobalScope
  & { swVersion: string }
  & { cSessions: { [key: string]: CodeSessionBC } }
  & { files: { [key: string]: string }; fileCacheName: string };

importScripts("/swVersion.js");

import { useCodeSpace } from "@/hooks/use-code-space";
import { serveWithCache } from "@/lib/serve-with-cache";
import { CodeSessionBC } from "./services/CodeSessionBc";

// Now, self.swVersion and self.files are available
const files = sw.files;
sw.cSessions = sw.cSessions || {};
sw.fileCacheName = `sw-file-cache-v13`; // Updated cache name to avoid conflicts

// Instantiate serveWithCache
const { isAsset, serve } = serveWithCache(files, () => caches.open(sw.fileCacheName));

sw.oninstall = () => {
  // Activate the new service worker immediately
  sw.skipWaiting();
};

sw.onactivate = (event) => {
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

sw.onfetch = (event) => {
  const request = event.request;

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
      ),
    );
  } else if (request.url.includes("/live/") || request.url.includes("/session")) {
    // console.log("Its probably a file", request.url);
    event.respondWith((async () => {
      const pathname = new URL(request.url).pathname;
      const codeSpace = useCodeSpace(pathname);
      if (!sw.cSessions[codeSpace]) {
        sw.cSessions[codeSpace] = new CodeSessionBC(codeSpace);
        await sw.cSessions[codeSpace].init();
      }

      const session = sw.cSessions[codeSpace].session;

      return new Response(JSON.stringify(session), {
        headers: { "Content-Type": "application/json" },
      });
    })());
  }

  // console.log("Its probably not a file", request.url);
  // For non-asset requests, fetch from the network

  event.respondWith(fetch(request));
};
