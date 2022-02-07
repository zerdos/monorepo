(()=>{try{self["workbox:core:6.4.1"]&&_()}catch{}var ae=(o,...e)=>{let t=o;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};var Y=ae;var c=class extends Error{constructor(e,t){let r=Y(e,t);super(r);this.name=e,this.details=t}};var f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},S=o=>[f.prefix,o,f.suffix].filter(e=>e&&e.length>0).join("-"),ie=o=>{for(let e of Object.keys(f))o(e)},y={updateDetails:o=>{ie(e=>{typeof o[e]=="string"&&(f[e]=o[e])})},getGoogleAnalyticsName:o=>o||S(f.googleAnalytics),getPrecacheName:o=>o||S(f.precache),getPrefix:()=>f.prefix,getRuntimeName:o=>o||S(f.runtime),getSuffix:()=>f.suffix};function V(o,e){let t=e();return o.waitUntil(t),t}try{self["workbox:precaching:6.4.1"]&&_()}catch{}var ce="__WB_REVISION__";function Q(o){if(!o)throw new c("add-to-cache-list-unexpected-type",{entry:o});if(typeof o=="string"){let n=new URL(o,location.href);return{cacheKey:n.href,url:n.href}}let{revision:e,url:t}=o;if(!t)throw new c("add-to-cache-list-unexpected-type",{entry:o});if(!e){let n=new URL(t,location.href);return{cacheKey:n.href,url:n.href}}let r=new URL(t,location.href),s=new URL(t,location.href);return r.searchParams.set(ce,e),{cacheKey:r.href,url:s.href}}var F=class{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){let s=t.originalRequest.url;r?this.notUpdatedURLs.push(s):this.updatedURLs.push(s)}return r}}};var A=class{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:r})=>{let s=(r==null?void 0:r.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this._precacheController=e}};var E;function X(){if(E===void 0){let o=new Response("");if("body"in o)try{new Response(o.body),E=!0}catch{E=!1}E=!1}return E}async function Z(o,e){let t=null;if(o.url&&(t=new URL(o.url).origin),t!==self.location.origin)throw new c("cross-origin-copy-response",{origin:t});let r=o.clone(),s={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},n=e?e(s):s,a=X()?r.body:await r.blob();return new Response(a,n)}var W=o=>new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),"");function ee(o,e){let t=new URL(o);for(let r of e)t.searchParams.delete(r);return t.href}async function te(o,e,t,r){let s=ee(e.url,t);if(e.url===s)return o.match(e,r);let n=Object.assign(Object.assign({},r),{ignoreSearch:!0}),a=await o.keys(e,n);for(let i of a){let l=ee(i.url,t);if(s===l)return o.match(i,r)}}var K=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var re=new Set;async function oe(){for(let o of re)await o()}function M(o){return new Promise(e=>setTimeout(e,o))}try{self["workbox:strategies:6.4.1"]&&_()}catch{}function x(o){return typeof o=="string"?new Request(o):o}var v=class{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new K,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(let r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,r=x(e);if(r.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){let a=await t.preloadResponse;if(a)return a}let s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(let a of this.iterateCallbacks("requestWillFetch"))r=await a({request:r.clone(),event:t})}catch(a){if(a instanceof Error)throw new c("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}let n=r.clone();try{let a;a=await fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions);for(let i of this.iterateCallbacks("fetchDidSucceed"))a=await i({event:t,request:n,response:a});return a}catch(a){throw s&&await this.runCallbacks("fetchDidFail",{error:a,event:t,originalRequest:s.clone(),request:n.clone()}),a}}async fetchAndCachePut(e){let t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){let t=x(e),r,{cacheName:s,matchOptions:n}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:s});r=await caches.match(a,i);for(let l of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await l({cacheName:s,matchOptions:n,cachedResponse:r,request:a,event:this.event})||void 0;return r}async cachePut(e,t){let r=x(e);await M(0);let s=await this.getCacheKey(r,"write");if(!t)throw new c("cache-put-with-no-response",{url:W(s.url)});let n=await this._ensureResponseSafeToCache(t);if(!n)return!1;let{cacheName:a,matchOptions:i}=this._strategy,l=await self.caches.open(a),w=this.hasCallback("cacheDidUpdate"),m=w?await te(l,s.clone(),["__WB_REVISION__"],i):null;try{await l.put(s,w?n.clone():n)}catch(p){if(p instanceof Error)throw p.name==="QuotaExceededError"&&await oe(),p}for(let p of this.iterateCallbacks("cacheDidUpdate"))await p({cacheName:a,oldResponse:m,newResponse:n.clone(),request:s,event:this.event});return!0}async getCacheKey(e,t){let r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let s=e;for(let n of this.iterateCallbacks("cacheKeyWillBeUsed"))s=x(await n({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[r]=s}return this._cacheKeys[r]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if(typeof t[e]=="function"){let r=this._pluginStateMap.get(t);yield n=>{let a=Object.assign(Object.assign({},n),{state:r});return t[e](a)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(let s of this.iterateCallbacks("cacheWillUpdate"))if(t=await s({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&t.status!==200&&(t=void 0),t}};var d=class{constructor(e={}){this.cacheName=y.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,n=new v(this,{event:t,request:r,params:s}),a=this._getResponse(n,r,t),i=this._awaitComplete(a,n,r,t);return[a,i]}async _getResponse(e,t,r){await e.runCallbacks("handlerWillStart",{event:r,request:t});let s;try{if(s=await this._handle(t,e),!s||s.type==="error")throw new c("no-response",{url:t.url})}catch(n){if(n instanceof Error){for(let a of e.iterateCallbacks("handlerDidError"))if(s=await a({error:n,event:r,request:t}),s)break}if(!s)throw n}for(let n of e.iterateCallbacks("handlerWillRespond"))s=await n({event:r,request:t,response:s});return s}async _awaitComplete(e,t,r,s){let n,a;try{n=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:s,request:r,response:n}),await t.doneWaiting()}catch(i){i instanceof Error&&(a=i)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:r,response:n,error:a}),t.destroy(),a)throw a}};var u=class extends d{constructor(e={}){e.cacheName=y.getPrecacheName(e.cacheName);super(e);this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){let r=await t.cacheMatch(e);return r||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let r,s=t.params||{};if(this._fallbackToNetwork){let n=s.integrity,a=e.integrity,i=!a||a===n;if(r=await t.fetch(new Request(e,{integrity:a||n})),n&&i){this._useDefaultCacheabilityPluginIfNeeded();let l=await t.cachePut(e,r.clone())}}else throw new c("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return r}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let r=await t.fetch(e);if(!await t.cachePut(e,r.clone()))throw new c("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[r,s]of this.plugins.entries())s!==u.copyRedirectedCacheableResponsesPlugin&&(s===u.defaultPrecacheCacheabilityPlugin&&(e=r),s.cacheWillUpdate&&t++);t===0?this.plugins.push(u.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}};u.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:o}){return!o||o.status>=400?null:o}};u.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:o}){return o.redirected?await Z(o):o}};var k=class{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new u({cacheName:y.getPrecacheName(e),plugins:[...t,new A({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let r of e){typeof r=="string"?t.push(r):r&&r.revision===void 0&&t.push(r.url);let{cacheKey:s,url:n}=Q(r),a=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==s)throw new c("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:s});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(s)&&this._cacheKeysToIntegrities.get(s)!==r.integrity)throw new c("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(s,r.integrity)}if(this._urlsToCacheKeys.set(n,s),this._urlsToCacheModes.set(n,a),t.length>0){let i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return V(e,async()=>{let t=new F;this.strategy.plugins.push(t);for(let[n,a]of this._urlsToCacheKeys){let i=this._cacheKeysToIntegrities.get(a),l=this._urlsToCacheModes.get(n),w=new Request(n,{integrity:i,cache:l,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:w,event:e}))}let{updatedURLs:r,notUpdatedURLs:s}=t;return{updatedURLs:r,notUpdatedURLs:s}})}activate(e){return V(e,async()=>{let t=await self.caches.open(this.strategy.cacheName),r=await t.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(let a of r)s.has(a.url)||(await t.delete(a),n.push(a.url));return{deletedURLs:n}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new c("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:t},r.params),this.strategy.handle(r))}};var I,g=()=>(I||(I=new k),I);try{self["workbox:routing:6.4.1"]&&_()}catch{}var U="GET";var N=o=>o&&typeof o=="object"?o:{handle:o};var h=class{constructor(e,t,r=U){this.handler=N(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=N(e)}};var O=class extends h{constructor(e,t,r){let s=({url:n})=>{let a=e.exec(n.href);if(!!a&&!(n.origin!==location.origin&&a.index!==0))return a.slice(1)};super(s,t,r)}};var $=class{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){let{payload:t}=e.data,r=Promise.all(t.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);let n=new Request(...s);return this.handleRequest({request:n,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;let s=r.origin===location.origin,{params:n,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:r}),i=a&&a.handler,l=[],w=e.method;if(!i&&this._defaultHandlerMap.has(w)&&(i=this._defaultHandlerMap.get(w)),!i)return;let m;try{m=i.handle({url:r,request:e,event:t,params:n})}catch(R){m=Promise.reject(R)}let p=a&&a.catchHandler;return m instanceof Promise&&(this._catchHandler||p)&&(m=m.catch(async R=>{if(p)try{return await p.handle({url:r,request:e,event:t,params:n})}catch(J){J instanceof Error&&(R=J)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw R})),m}findMatchingRoute({url:e,sameOrigin:t,request:r,event:s}){let n=this._routes.get(r.method)||[];for(let a of n){let i,l=a.match({url:e,sameOrigin:t,request:r,event:s});if(l)return i=l,(Array.isArray(i)&&i.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(i=void 0),{route:a,params:i}}return{}}setDefaultHandler(e,t=U){this._defaultHandlerMap.set(t,N(e))}setCatchHandler(e){this._catchHandler=N(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new c("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new c("unregister-route-route-not-registered")}};var b,T=()=>(b||(b=new $,b.addFetchListener(),b.addCacheListener()),b);function C(o,e,t){let r;if(typeof o=="string"){let n=new URL(o,location.href),a=({url:i})=>i.href===n.href;r=new h(a,e,t)}else if(o instanceof RegExp)r=new O(o,e,t);else if(typeof o=="function")r=new h(o,e,t);else if(o instanceof h)r=o;else throw new c("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return T().registerRoute(r),r}function se(o,e=[]){for(let t of[...o.searchParams.keys()])e.some(r=>r.test(t))&&o.searchParams.delete(t);return o}function*ne(o,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:r=!0,urlManipulation:s}={}){let n=new URL(o,location.href);n.hash="",yield n.href;let a=se(n,e);if(yield a.href,t&&a.pathname.endsWith("/")){let i=new URL(a.href);i.pathname+=t,yield i.href}if(r){let i=new URL(a.href);i.pathname+=".html",yield i.href}if(s){let i=s({url:n});for(let l of i)yield l.href}}var L=class extends h{constructor(e,t){let r=({request:s})=>{let n=e.getURLsToCacheKeys();for(let a of ne(s.url,t)){let i=n.get(a);if(i){let l=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:l}}}};super(r,e.strategy)}};function H(o){let e=g(),t=new L(e,o);C(t)}function j(o){g().precache(o)}function B(o,e){j(o),H(e)}var G={cacheWillUpdate:async({response:o})=>o.status===200||o.status===0?o:null};var D=class extends d{constructor(e={}){super(e);this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(G)}async _handle(e,t){let r=[],s=t.fetchAndCachePut(e).catch(()=>{}),n=await t.cacheMatch(e),a;if(!n)try{n=await s}catch(i){i instanceof Error&&(a=i)}if(!n)throw new c("no-response",{url:e.url,error:a});return n}};try{self["workbox:cacheable-response:6.4.1"]&&_()}catch{}var P=class{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(r=>e.headers.get(r)===this._headers[r])),t}};var q=class{constructor(e){this.cacheWillUpdate=async({response:t})=>this._cacheableResponse.isResponseCacheable(t)?t:null,this._cacheableResponse=new P(e)}};B([{"revision":"96df67dd1e4212290073c10c16c54816","url":"assets/app.css"},{"revision":"8c608256fb0273e3a36e6b603f71f213","url":"assets/fonts/KFOlCnqEu92Fr1MmEU9fBBc9.ttf"},{"revision":"806854d4422d0bd79e0f8c87c329a568","url":"assets/fonts/KFOlCnqEu92Fr1MmSU5fBBc9.ttf"},{"revision":"96559ffb5be917f1ce9f748bf4f34732","url":"assets/fonts/KFOlCnqEu92Fr1MmWUlfBBc9.ttf"},{"revision":"329ae1c377b1fb667f5be6abd50327fc","url":"assets/fonts/KFOmCnqEu92Fr1Mu4mxP.ttf"},{"revision":"bc73ad379628323dd8b59587bc5494aa","url":"assets/roboto.css"},{"revision":"17e5d7f3a6a57b5c42f1e60a6bc3a658","url":"assets/synthwave.webp"},{"revision":"9004e8a7889a9f9cfd1721e1430fcf8a","url":"assets/triangle-geometry.png"},{"revision":"d71147f38c8eba4b5184eeb97a7a58d4","url":"assets/zed-icon-big.png"},{"revision":"205bdf70392b7b167acf6d7b4a3f86cf","url":"base/browser/ui/codicons/codicon/codicon.ttf"},{"revision":"8fe7867d22a90fea976b0f93ba553679","url":"dist/react.mjs"},{"revision":"39afb5e531981c8cd445d32f22281261","url":"dist/starter.mjs"},{"revision":"200bc348c4834d5bae28ad3106742538","url":"dist/workers/js/appStarter.js"},{"revision":"47e7416739cebe145657847c15c57c4a","url":"dist/workers/monaco-editor/esm/vs/editor/editor.worker.js"},{"revision":"c7d7e6a0fbe65870e2c992a6e813edb6","url":"dist/workers/monaco-editor/esm/vs/language/typescript/ts.worker.js"},{"revision":"bd7afef2da12f2e71a35302f6faa1115","url":"examples/starter_framer.js"},{"revision":"26ccc696f5e0c61a12f1d4bf0023c5ed","url":"formatter.mjs"},{"revision":"6f5c6441134e5cf5809b883ac329e4c1","url":"getWorker.mjs"},{"revision":"d59d4e06002a5b8549c042ca4ce104da","url":"hello-world.js"},{"revision":"82e9f08a28a36928cd3d643bd2ca362f","url":"hydrated.html"},{"revision":"babff72d0edfed8758754b1e36b8e0cb","url":"hydrateRoot.html"},{"revision":"af336271d2c088e3f5a7e016e8862437","url":"importmap.json"},{"revision":"0688f6760164c8d5f9a1f48a33d1207e","url":"importScript.mjs"},{"revision":"dda8edb2f94dc865c33fb086b3900564","url":"index.html"},{"revision":"5069d84913a082f390cb8b6f92585705","url":"quickStart.mjs"},{"revision":"197b3c92bdd1e6ce9f39dddf85d2ab8b","url":"react.mjs"},{"revision":"5acdf78a72072d75a318d2a6a3783b51","url":"starter.mjs"},{"revision":"2651f864dacad7cdc0b4e20133be55a1","url":"test.mjs"},{"revision":"c6fdf2a908f7ea613ea537a2666f6fb5","url":"uidV4.mjs"},{"revision":"812eddae6e39669857456083cb51485c","url":"vendor/monaco/monacoTs.js"},{"revision":"891b54222faeb2953dde97191c7b07c5","url":"workboxLoader.mjs"},{"revision":"790d468074d3632321fe6cc8d6abca7d","url":"workers/babel.worker.js"},{"revision":"77b74e9ad2affbe5f91ae61872e272b9","url":"workers/custom-worker.js"},{"revision":"c6279715ced465ed2728e78659b2270e","url":"workers/esbuild.worker.js"},{"revision":"e611d96e85049c67801e1251d905253b","url":"workers/prettier.worker.js"},{"revision":"4cf33a72d692c18e7678bc795b7966e5","url":"ws.mjs"}]);C(({request:o})=>o.url.includes("unpkg.com")&&o.url.includes("@")||o.url.includes("jspm.io")&&o.url.includes("@")||o.url.includes("/chunks")||o.url.includes("esm.sh")&&o.url.includes("@"),new D({matchOptions:{ignoreVary:!0,ignoreSearch:!0},plugins:[new q({statuses:[0,200]})]}));})();
