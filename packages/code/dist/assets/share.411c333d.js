import{_ as t}from"./index.52f7a327.js";import{a as e,b as a}from"./codeLoader.b2eaa921.js";import{all as n,ipfsClient as o}from"./ipfsClient.95a66388.js";import"./getWorker.a337a27a.js";const s=async({transpiled:s,code:i,html:r})=>{var c;const d=String(null==(c=window.document.getElementById("zbody"))?void 0:c.getAttribute("class"));let l="";if(window.document.querySelector("head > style[data-emotion=css]"))try{l=Array.from(window.document.querySelector("head > style[data-emotion=css]").sheet.cssRules).map((t=>t.cssText)).filter((t=>{const e=t.substring(5,10),a=-1!==d.indexOf(e),n=-1!==r.indexOf(e);return a||n})).join("\n  ").replace("#zbody","body")}catch(w){console.error({e:w})}if(window.document.querySelector("head > style[data-emotion=css-global]"))try{l+=Array.from(window.document.querySelector("head > style[data-emotion=css-global]").sheet.cssRules).map((t=>t.cssText)).join("\n  ").replace("#zbody","body")}catch(w){console.error({e:w})}const{getHtml:p,getEditorHTML:h}=await t((()=>import("./templates.bb729142.js")),void 0),m=[{path:"/app/index.html",content:p({html:r,css:l})},{path:"/app/app.js",content:s},{path:"/app/app.tsx",content:i},{path:"/app/edit/index.html",content:h()}],u=await e(JSON.stringify(m));let f=await a.get(u,"string");if(null===f){const t=(await async function(t){return(await n(o.addAll(t))).map((t=>{const e=t.cid.toString();return{path:t.path,CID:e}}))}(m)).find((t=>"app"===t.path));if(void 0===t)return null;f=`https://spike.land/ipfs/${t.CID}`;const{pathname:e}=new URL(window.location.href);(e.endsWith("/edit/")||e.endsWith("/edit"))&&history.pushState({},"",`/ipfs/${t.CID}/edit/`),await a.put(u,f)}const y=async(t=3)=>{try{await Promise.all([fetch(`${f}/app.js`).then((t=>t.text())),fetch(`${f}/edit/index.html`).then((t=>t.text())),fetch(f).then((t=>t.text()))])}catch{if(t>0)return y(t-1)}};return y(3),f};export{s as shareItAsHtml};
