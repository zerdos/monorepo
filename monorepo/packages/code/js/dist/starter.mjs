import"./chunks/chunk-AH6KKUH7.mjs";import{hydrate as w}from"https://spike.land/dist/react.mjs";function a(t){let e=new Uint8Array(t.length);for(let r=0;r<e.length;r++)e[r]=t.charCodeAt(r);let o=new Uint16Array(e.buffer),i="";for(let r=0;r<o.length;r++)i+=String.fromCharCode(o[r]);return i}import{jsx as b}from"https://spike.land/dist/emotion.mjs";var c,f=new Uint8Array(16);function m(){if(!c&&(c=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(f)}var g=/^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;function h(t){return typeof t=="string"&&g.test(t)}var n=[];for(let t=0;t<256;++t)n.push((t+256).toString(16).slice(1));function y(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase();if(!h(o))throw new TypeError("Stringified UUID is invalid");return o}function d(t,e,o){t=t||{};let i=t.random||(t.rng||m)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){o=o||0;for(let r=0;r<16;++r)e[o+r]=i[r];return e}return y(i)}var s=location.pathname.split("/");window.aniStart=Date.now();var l=(s[1]==="api"&&s[2]==="room"?s[3]:(s.pop()||s.pop()).slice(-12))||"code-main",U=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||d()).slice(0,8),p=async t=>{let e=document.querySelector("#root");w(e,b(t)),console.log("HYDRATED"),globalThis.App=t;let{join:o}=await import("./chunks/ws-FXQ2LBI4.mjs");await C(2e3),o(l,U)},V=async t=>{let e=(await import(u(a(t)))).default;p(e)},j=async()=>{if(globalThis.App)return;let e=await(await fetch(`https://spike.land/api/room/${l}/session`)).json(),o=document.getElementById("root");o.innerHTML=`<style>${e.css}</style><div id="zbody">${e.html}</div>`;let i=(await import(u(e.transpiled))).default;p(i)};function u(t){let e=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(e)}async function C(t){return new Promise(e=>{setTimeout(()=>{e()},t)})}export{V as hydrateBinary,j as run};
