self.importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js",
);

const { cid, files, shaSums } = globalThis;

let currentCid = cid;


globalThis.register = () => {
  const { pathname } = self.location;

  if (pathname.indexOf("/ipfs/") !== -1) {
    currentCid = pathname.slice(6, 52);
  }

  // self.workbox.setConfig({
  //     debug: true,
  // });

  self.addEventListener('activate', () => {

    fetch("/cid.json").then((x) => x.json()).then(console.log)
    console.log('V1 now ready to handle fetches!');
  });

  self.workbox.loadModule("workbox-routing");
  self.workbox.loadModule("workbox-precaching");
  self.workbox.loadModule("workbox-strategies");
  self.workbox.loadModule("workbox-cacheable-response");

  const routes = Object.keys(files).filter((x) =>
    x.length && x.indexOf(".") !== -1 && shaSums[x]
  ).map((x) => ({ url: `/${x}`, revision: files[x], integrity: `sha256-${hexToBase64(shaSums[x])}` }));

  self.workbox.precaching.precacheAndRoute(
    routes,
    {
      urlManipulation: ({ url }) => {
        const { pathname } = url;
        if (pathname === "/") url.pathname = "/index.html";
        const fileName = pathname.slice(1);
        const fileCid = files[fileName];


        const urlList = [new URL(`https://code.zed.vision/ipfs/${currentCid}/${fileName}`)];
        if (fileCid) {
          urlList.push(new URL(`https://code.zed.vision/ipfs/${fileCid}`), new URL(`https://cf-ipfs.com/ipfs/${fileCid}`))
        }

        return urlList;
      },
    },
  );


  self.workbox.routing.registerRoute(
    ({ url }) => url.origin.indexOf("zed.vision") === -1,
    new self.workbox.strategies.CacheFirst({
      cacheName: "cdn-cache",
      plugins: [
        new self.workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [200],
        }),
      ],
    }),
  );
}

function hexToBase64(hexstring) {
  return btoa(hexstring.match(/\w{2}/g).map(function (a) {
    return String.fromCharCode(parseInt(a, 16));
  }).join(""));
}
