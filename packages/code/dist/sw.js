"use strict";(()=>{var ue=Object.create;var H=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var de=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var ye=(e,t)=>()=>(e&&(t=e(e=0)),t);var W=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var he=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of de(t))!ge.call(e,o)&&o!==r&&H(e,o,{get:()=>t[o],enumerable:!(n=pe(t,o))||n.enumerable});return e};var C=(e,t,r)=>(r=e!=null?ue(me(e)):{},he(t||!e||!e.__esModule?H(r,"default",{value:e,enumerable:!0}):r,e));var l=ye(()=>{});var J=W((St,z)=>{l();var be="Expected a function",X=NaN,we="[object Symbol]",xe=/^\s+|\s+$/g,Ie=/^[-+]0x[0-9a-f]+$/i,Ee=/^0b[01]+$/i,Se=/^0o[0-7]+$/i,Te=parseInt,Re=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,je=typeof self=="object"&&self&&self.Object===Object&&self,ke=Re||je||Function("return this")(),$e=Object.prototype,ve=$e.toString,Oe=Math.max,Pe=Math.min,L=function(){return ke.Date.now()};function Ne(e,t,r){var n,o,c,a,s,f,d=0,R=!1,u=!1,I=!0;if(typeof e!="function")throw new TypeError(be);t=Y(t)||0,q(r)&&(R=!!r.leading,u="maxWait"in r,c=u?Oe(Y(r.maxWait)||0,t):c,I="trailing"in r?!!r.trailing:I);function h(i){var p=n,x=o;return n=o=void 0,d=i,a=e.apply(x,p),a}function j(i){return d=i,s=setTimeout(g,t),R?h(i):a}function $(i){var p=i-f,x=i-d,v=t-p;return u?Pe(v,c-x):v}function b(i){var p=i-f,x=i-d;return f===void 0||p>=t||p<0||u&&x>=c}function g(){var i=L();if(b(i))return y(i);s=setTimeout(g,$(i))}function y(i){return s=void 0,I&&n?h(i):(n=o=void 0,a)}function E(){s!==void 0&&clearTimeout(s),d=0,n=f=o=s=void 0}function w(){return s===void 0?a:y(L())}function m(){var i=L(),p=b(i);if(n=arguments,o=this,f=i,p){if(s===void 0)return j(f);if(u)return s=setTimeout(g,t),h(f)}return s===void 0&&(s=setTimeout(g,t)),a}return m.cancel=E,m.flush=w,m}function q(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function We(e){return!!e&&typeof e=="object"}function Ce(e){return typeof e=="symbol"||We(e)&&ve.call(e)==we}function Y(e){if(typeof e=="number")return e;if(Ce(e))return X;if(q(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=q(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(xe,"");var r=Ee.test(e);return r||Se.test(e)?Te(e.slice(2),r?2:8):Ie.test(e)?X:+e}z.exports=Ne});var te=W((Rt,ee)=>{l();var Z="Expected a function",K=NaN,Le="[object Symbol]",qe=/^\s+|\s+$/g,Me=/^[-+]0x[0-9a-f]+$/i,Fe=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,_e=parseInt,Ue=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,De=typeof self=="object"&&self&&self.Object===Object&&self,Be=Ue||De||Function("return this")(),Ve=Object.prototype,Ge=Ve.toString,He=Math.max,Xe=Math.min,M=function(){return Be.Date.now()};function Ye(e,t,r){var n,o,c,a,s,f,d=0,R=!1,u=!1,I=!0;if(typeof e!="function")throw new TypeError(Z);t=Q(t)||0,P(r)&&(R=!!r.leading,u="maxWait"in r,c=u?He(Q(r.maxWait)||0,t):c,I="trailing"in r?!!r.trailing:I);function h(i){var p=n,x=o;return n=o=void 0,d=i,a=e.apply(x,p),a}function j(i){return d=i,s=setTimeout(g,t),R?h(i):a}function $(i){var p=i-f,x=i-d,v=t-p;return u?Xe(v,c-x):v}function b(i){var p=i-f,x=i-d;return f===void 0||p>=t||p<0||u&&x>=c}function g(){var i=M();if(b(i))return y(i);s=setTimeout(g,$(i))}function y(i){return s=void 0,I&&n?h(i):(n=o=void 0,a)}function E(){s!==void 0&&clearTimeout(s),d=0,n=f=o=s=void 0}function w(){return s===void 0?a:y(M())}function m(){var i=M(),p=b(i);if(n=arguments,o=this,f=i,p){if(s===void 0)return j(f);if(u)return s=setTimeout(g,t),h(f)}return s===void 0&&(s=setTimeout(g,t)),a}return m.cancel=E,m.flush=w,m}function ze(e,t,r){var n=!0,o=!0;if(typeof e!="function")throw new TypeError(Z);return P(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Ye(e,t,{leading:n,maxWait:t,trailing:o})}function P(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Je(e){return!!e&&typeof e=="object"}function Ke(e){return typeof e=="symbol"||Je(e)&&Ge.call(e)==Le}function Q(e){if(typeof e=="number")return e;if(Ke(e))return K;if(P(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=P(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(qe,"");var r=Fe.test(e);return r||Ae.test(e)?_e(e.slice(2),r?2:8):Me.test(e)?K:+e}ee.exports=ze});var ne=W(()=>{l()});l();var le=C(J(),1),fe=C(te(),1);l();l();l();function F(e,t=1,r={}){let{indent:n=" ",includeEmptyLines:o=!1}=r;if(typeof e!="string")throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if(typeof t!="number")throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if(t<0)throw new RangeError(`Expected \`count\` to be at least 0, got \`${t}\``);if(typeof n!="string")throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n}\``);if(t===0)return e;let c=o?/^/gm:/^(?!\s*$)/gm;return e.replace(c,n.repeat(t))}l();var _=C(ne(),1);l();function A(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var re=/\s+at.*[(\s](.*)\)?/,Qe=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,Ze=typeof _.default.homedir>"u"?"":_.default.homedir().replace(/\\/g,"/");function U(e,{pretty:t=!1,basePath:r}={}){let n=r&&new RegExp(`(at | \\()${A(r.replace(/\\/g,"/"))}`,"g");if(typeof e=="string")return e.replace(/\\/g,"/").split(`
`).filter(o=>{let c=o.match(re);if(c===null||!c[1])return!0;let a=c[1];return a.includes(".app/Contents/Resources/electron.asar")||a.includes(".app/Contents/Resources/default_app.asar")||a.includes("node_modules/electron/dist/resources/electron.asar")||a.includes("node_modules/electron/dist/resources/default_app.asar")?!1:!Qe.test(a)}).filter(o=>o.trim()!=="").map(o=>(n&&(o=o.replace(n,"$1")),t&&(o=o.replace(re,(c,a)=>c.replace(a,a.replace(Ze,"~")))),o)).join(`
`)}var et=e=>e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""),O=class extends Error{#e;name="AggregateError";constructor(t){if(!Array.isArray(t))throw new TypeError(`Expected input to be an Array, got ${typeof t}`);t=t.map(n=>n instanceof Error?n:n!==null&&typeof n=="object"?Object.assign(new Error(n.message),n):new Error(n));let r=t.map(n=>typeof n.stack=="string"&&n.stack.length>0?et(U(n.stack)):String(n)).join(`
`);r=`
`+F(r,4),super(r),this.#e=t}get errors(){return this.#e.slice()}};var D=class extends Error{constructor(t){super(),this.name="AbortError",this.message=t}},oe=e=>globalThis.DOMException===void 0?new D(e):new DOMException(e),ie=e=>{let t=e.reason===void 0?oe("This operation was aborted."):e.reason;return t instanceof Error?t:oe(t)};async function B(e,t,{concurrency:r=Number.POSITIVE_INFINITY,stopOnError:n=!0,signal:o}={}){return new Promise((c,a)=>{if(e[Symbol.iterator]===void 0&&e[Symbol.asyncIterator]===void 0)throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);if(typeof t!="function")throw new TypeError("Mapper function is required");if(!((Number.isSafeInteger(r)||r===Number.POSITIVE_INFINITY)&&r>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${r}\` (${typeof r})`);let s=[],f=[],d=new Map,R=!1,u=!1,I=!1,h=0,j=0,$=e[Symbol.iterator]===void 0?e[Symbol.asyncIterator]():e[Symbol.iterator](),b=y=>{R=!0,u=!0,a(y)};o&&(o.aborted&&b(ie(o)),o.addEventListener("abort",()=>{b(ie(o))}));let g=async()=>{if(u)return;let y=await $.next(),E=j;if(j++,y.done){if(I=!0,h===0&&!u){if(!n&&f.length>0){b(new O(f));return}if(u=!0,d.size===0){c(s);return}let w=[];for(let[m,i]of s.entries())d.get(m)!==se&&w.push(i);c(w)}return}h++,(async()=>{try{let w=await y.value;if(u)return;let m=await t(w,E);m===se&&d.set(E,m),s[E]=m,h--,await g()}catch(w){if(n)b(w);else{f.push(w),h--;try{await g()}catch(m){b(m)}}}})()};(async()=>{for(let y=0;y<r;y++){try{await g()}catch(E){b(E);break}if(I||R)break}})()})}var se=Symbol("skip");l();var V=e=>{let t=e[Symbol.asyncIterator]();return new ReadableStream({async pull(r){try{let n=await t.next();n.done?r.close():r.enqueue(n.value)}catch(n){r.error(n)}},cancel(r){e.return&&e.return(r)}})};var tt=async e=>{e.waitUntil(e.target.skipWaiting())},T={},k={};async function G(){let t=await(await fetch("/files.json")).json();t&&(T=t)}var N={},nt=(0,le.default)(G,500),rt=(0,fe.default)(G,6e4),ot=async e=>{console.log("activated");let t=new BroadcastChannel(location.origin);t.onmessage=r=>{console.log(r),r.data.type==="set-mock"&&(N[r.data.filePath]=r.data.content)},e.waitUntil(e.target.clients.claim())},it=async e=>{let t=T[e];if(k[t]&&k[t].ok){let r=await fetch(new URL(t,location.origin));if(r.ok){let n=await r.blob();k[t]=new Response(n,{url:new URL(e,location.origin)})}}};function st(e){e.tag=="get-latest-news"&&e.waitUntil((async()=>{await G(),await B(Object.keys(T),it,{concurrency:2})})())}async function at(e){return new Promise(t=>{setTimeout(()=>{t()},e)})}var ct=e=>{rt();let t=new URL(e.request.url);if(N[e.request.url])return e.respondWith(new Response(N[e.request.url],{headers:{"Content-type:":"application/x-typescript"}}));N[e.request.url];let r=t.pathname.slice(1);if(T[r])return e.respondWith((async()=>{if(!k[T[r]]){let n=await fetch(new URL(T[r],location.origin));if(n.ok||(nt(),await at(1e3),n=await fetch(new URL(T[r],location.origin))),!n.ok)return n.clone();let o=await n.blob();k[T[r]]=new Response(o,{request:e.request,url:e.request.url})}return k[T[r]].clone()})());try{switch(t.origin){case location.origin:{let n=t.pathname.split("/");if(n.length>2){let o=n[1];switch(o){case"ipfs":case"ipns":return e.respondWith(lt(t));case"view":return console.log("VIEW! Fetching the content: "+t.pathname.slice(o.length+1)),ft({event:e,path:t.pathname.slice(o.length+1)});default:return e.respondWith(fetch(e.request).catch(c=>console.log({url:t,event:e})))}}}default:try{let n=e.request.clone();return e.respondWith(fetch(n).catch(o=>console.log({url:t,req:n})))}catch(n){console.log({err2:n}),console.error(t)}}}catch(n){console.log(n),console.error(t)}},lt=async e=>{let t=new Blob([`<html lang="en">
<head>
  <title>${e.pathname}</title>
</head>
<body>
<iframe id="viewer" style="width:100%;height:100%;position:fixed;top:0;left:0;border:none;" src="/view${e.pathname}"></iframe>  
  <script type="module" src="/js/ws.mjs"><\/script>
  </body>
</html>
`],{type:"text/html"});return new Response(t,{status:200})},ft=async({event:e,path:t})=>{let[,r]=t.split("/");switch(r){case"ipns":return e.respondWith(ut({event:e,path:t}));case"ipfs":return e.respondWith(pt({event:e,path:t}));default:let n=await ht(r);return e.respondWith(n)}},ut=async({})=>new Response(`<html>
  <body>
    <h1>IPNS protocol support is not implemented</h1>
    <p>It is left as an excercise to the viewer</p>
  </body>
</html>`,{statusText:"IPNS support is not implemented",status:502}),pt=async({event:e,path:t})=>{console.log("IPFS"),console.log({ipfs});try{switch((await ipfs.files.stat(t)).type){case"file":return await ae(ipfs,t);case"directory":{if(!t.endsWith("/"))return Response.redirect(`${e.request.url}/`);let n=`${t}index.html`;return(await ipfs.files.stat(n).catch(()=>({type:null}))).type==="file"?ae(ipfs,n):await dt(ipfs,t)}default:return Response.redirect(`https://explore.ipld.io/#/explore${t}`)}}catch(r){if(console.error({err3:r}),!(r&&r.message))return;let{message:n}=r;return n.startsWith("no link named")||n.includes("does not exist")?new Response(n,{statusText:n,status:404}):n.includes("invalid")?new Response(n,{statusText:n,status:400}):new Response(n,{statusText:n,status:500})}},ae=async(e,t)=>{let r=e.cat(t),n=V(r),o=t.endsWith(".svg")?{"content-type":"image/svg+xml"}:null;return new Response(n,{status:200,headers:{...o}})},dt=async(e,t)=>new Response(V(mt(e,t)),{headers:{"content-type":"text/html"},status:200}),mt=async function*(e,t,r=64){let n=new TextEncoder;yield n.encode(`<html><h3>Index of ${t}<h3><ul>`);for await(let o of e.ls(t))if(yield n.encode(yt(t,o)),--r<0)break;yield n.encode(`</ul>${r<0?gt:""}</html>`)},gt="<h2>Directory has too many entries</h2><p><mark>Implementing a pagination is left as an excercise to the viewer</mark></p></h2>",yt=(e,t)=>`<li>
  <div class="type-${t.type}"><a href="/view${e}${t.name}">${t.name}<a></div>
  <small>${t.cid.toString()}</small>
  <details><pre>${JSON.stringify(t,null,2)}</pre></details>
</li>`,ht=async e=>new Response(`<html>
    <body>
      <h1>Protocol ${e} is not supported</h1>
    </body>
</html>`,{statusText:`Unsupported protocol ${e}`,status:405});var ce={};var bt=({data:e})=>{if(e){let t=ce[e.id];t!=null&&(delete ce[e.id],e.port instanceof MessagePort?t.resolve(e.port):t.reject(new Error(e.error)))}},wt=e=>{e.addEventListener("install",tt),e.addEventListener("activate",ot),e.addEventListener("fetch",ct),e.onmessage=bt,e.onperiodicsync=st};wt(self);})();
