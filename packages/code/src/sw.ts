const sw = self as unknown as
  & ServiceWorkerGlobalScope
  & { __WB_DISABLE_DEV_LOGS: boolean }
  & { swVersion: string }
  & { files: { [key: string]: string }; fileCacheName: string };
sw.__WB_DISABLE_DEV_LOGS = true;

import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { registerRoute } from "workbox-routing";
import { CacheOnly, StaleWhileRevalidate } from "workbox-strategies";

importScripts("/swVersion.js");

const CURRENT_CACHE_NAME = `file-cache-${sw.swVersion}`;
const ESM_CACHE_NAME = "esm-cache-124";

// Create a reverse mapping of hashed filenames to their original names
const hashedToOriginal = new Map(
  Object.entries(sw.files).map(([original, hashed]) => [hashed, original]),
);

async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(cacheName =>
    (cacheName.startsWith("file-cache-") && cacheName !== CURRENT_CACHE_NAME)
    || (cacheName.startsWith("esm-cache-") && cacheName !== ESM_CACHE_NAME)
  );
  return Promise.all(oldCaches.map(cacheName => caches.delete(cacheName)));
}

async function copyMatchingFiles(oldCache: Cache, newCache: Cache) {
  const oldFileJsonResponse = await oldCache.match("/files.json");
  if (!oldFileJsonResponse) return;

  const oldFiles: typeof sw.files = await oldFileJsonResponse.json();
  const addedFiles = new Set(["files.json"]);

  await Promise.all(
    Object.entries(sw.files).map(async ([original, hashed]) => {
      if (addedFiles.has(hashed)) return;

      const oldHashed = oldFiles[original];
      if (oldHashed === hashed) {
        const oldResponse = await oldCache.match(`/${oldHashed}`);
        if (oldResponse) {
          await newCache.put(`/${hashed}`, oldResponse.clone());
          addedFiles.add(hashed);
        }
      }
    }),
  );
}

sw.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CURRENT_CACHE_NAME);
      const cacheNames = await caches.keys();
      const fileCaches = cacheNames.filter(cacheName =>
        cacheName.startsWith("file-cache-") && cacheName !== CURRENT_CACHE_NAME
      );

      for (const oldCacheName of fileCaches) {
        const oldCache = await caches.open(oldCacheName);
        await copyMatchingFiles(oldCache, cache);
      }

      await cache.put("/files.json", new Response(JSON.stringify(sw.files)));
      await sw.clients.claim();
      await cleanupOldCaches();

      return cache;
    } catch (e) {
      console.error("Error in activate event:", e);
      return null;
    }
  })());
});

sw.addEventListener("message", async (event) => {
  if (event.data === "skipWaiting") {
    await sw.skipWaiting();
  }
});

sw.addEventListener("install", (event) => {
  event.waitUntil(cleanupOldCaches());
});

const cacheOnlyStrategy = new CacheOnly({
  cacheName: CURRENT_CACHE_NAME,
});

const filesCacheStrategy = new StaleWhileRevalidate({
  cacheName: CURRENT_CACHE_NAME,
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
  ],
});

registerRoute(
  ({ url }) => hashedToOriginal.has(url.pathname.slice(1)),
  ({ request, url }) => {
    // Always use Cache-Only strategy for hashed files
    return cacheOnlyStrategy.handle({ request, url });
  },
);

const esmCacheStrategy = new StaleWhileRevalidate({
  cacheName: ESM_CACHE_NAME,
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
  ],
});

registerRoute(
  ({ url }) =>
    !url.pathname.startsWith("/api/")
    && (url.origin === location.origin || url.origin === "https://cdn.jsdelivr.net")
    && !url.pathname.startsWith("/live/")
    && !hashedToOriginal.has(url.pathname.slice(1)),
  esmCacheStrategy,
);
