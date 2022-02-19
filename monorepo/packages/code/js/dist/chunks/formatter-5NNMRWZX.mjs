import{a as d}from"./chunk-XIWW5LMR.mjs";import"./chunk-YUH35O52.mjs";d();d();d();var M=Symbol("Comlink.proxy"),O=Symbol("Comlink.endpoint"),T=Symbol("Comlink.releaseProxy"),k=Symbol("Comlink.thrown"),P=e=>typeof e=="object"&&e!==null||typeof e=="function",N={canHandle:e=>P(e)&&e[M],serialize(e){let{port1:r,port2:t}=new MessageChannel;return W(e,r),[t,[t]]},deserialize(e){return e.start(),y(e)}},j={canHandle:e=>P(e)&&k in e,serialize({value:e}){let r;return e instanceof Error?r={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:r={isError:!1,value:e},[r,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},R=new Map([["proxy",N],["throw",j]]);function W(e,r=self){r.addEventListener("message",function t(n){if(!n||!n.data)return;let{id:l,type:p,path:s}=Object.assign({path:[]},n.data),i=(n.data.argumentList||[]).map(f),o;try{let a=s.slice(0,-1).reduce((c,g)=>c[g],e),u=s.reduce((c,g)=>c[g],e);switch(p){case"GET":o=u;break;case"SET":a[s.slice(-1)[0]]=f(n.data.value),o=!0;break;case"APPLY":o=u.apply(a,i);break;case"CONSTRUCT":{let c=new u(...i);o=I(c)}break;case"ENDPOINT":{let{port1:c,port2:g}=new MessageChannel;W(e,g),o=U(c,[c])}break;case"RELEASE":o=void 0;break;default:return}}catch(a){o={value:a,[k]:0}}Promise.resolve(o).catch(a=>({value:a,[k]:0})).then(a=>{let[u,c]=E(a);r.postMessage(Object.assign(Object.assign({},u),{id:l}),c),p==="RELEASE"&&(r.removeEventListener("message",t),x(r))})}),r.start&&r.start()}function $(e){return e.constructor.name==="MessagePort"}function x(e){$(e)&&e.close()}function y(e,r){return h(e,[],r)}function w(e){if(e)throw new Error("Proxy has been released and is not useable")}function h(e,r=[],t=function(){}){let n=!1,l=new Proxy(t,{get(p,s){if(w(n),s===T)return()=>m(e,{type:"RELEASE",path:r.map(i=>i.toString())}).then(()=>{x(e),n=!0});if(s==="then"){if(r.length===0)return{then:()=>l};let i=m(e,{type:"GET",path:r.map(o=>o.toString())}).then(f);return i.then.bind(i)}return h(e,[...r,s])},set(p,s,i){w(n);let[o,a]=E(i);return m(e,{type:"SET",path:[...r,s].map(u=>u.toString()),value:o},a).then(f)},apply(p,s,i){w(n);let o=r[r.length-1];if(o===O)return m(e,{type:"ENDPOINT"}).then(f);if(o==="bind")return h(e,r.slice(0,-1));let[a,u]=b(i);return m(e,{type:"APPLY",path:r.map(c=>c.toString()),argumentList:a},u).then(f)},construct(p,s){w(n);let[i,o]=b(s);return m(e,{type:"CONSTRUCT",path:r.map(a=>a.toString()),argumentList:i},o).then(f)}});return l}function H(e){return Array.prototype.concat.apply([],e)}function b(e){let r=e.map(E);return[r.map(t=>t[0]),H(r.map(t=>t[1]))]}var A=new WeakMap;function U(e,r){return A.set(e,r),e}function I(e){return Object.assign(e,{[M]:!0})}function E(e){for(let[r,t]of R)if(t.canHandle(e)){let[n,l]=t.serialize(e);return[{type:"HANDLER",name:r,value:n},l]}return[{type:"RAW",value:e},A.get(e)||[]]}function f(e){switch(e.type){case"HANDLER":return R.get(e.name).deserialize(e.value);case"RAW":return e.value}}function m(e,r,t){return new Promise(n=>{let l=_();e.addEventListener("message",function p(s){!s.data||!s.data.id||s.data.id!==l||(e.removeEventListener("message",p),n(s.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:l},r),t)})}function _(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var C=e=>{let r=new Worker(e),{port1:t,port2:n}=new MessageChannel,l={comlinkInit:!0,port:t};return r.postMessage(l,[t]),y(n)};var v=C(src),G=async e=>{let{formatter:r}=await import("./prettierEsm-GIJB2DT2.mjs");return r(e)};export{G as formatter};
