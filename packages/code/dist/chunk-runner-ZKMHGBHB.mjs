import{a as q,b as J,d as U}from"./chunk-chunk-6EB5SVPD.mjs";import{c as E,d as C,j as P}from"./chunk-chunk-SOFCA3VV.mjs";import"./chunk-chunk-UOH7ZWVQ.mjs";import"./chunk-chunk-OUNTSVCZ.mjs";import{I as N,Q as X,e as B,y as L}from"./chunk-chunk-T26LWG23.mjs";import{d as M,f as v}from"./chunk-chunk-FCQ733RZ.mjs";v();v();v();function b(F){var g="0123456789abcdef";function y(a){var c,d="";for(c=0;c<=3;c++)d+=g.charAt(a>>c*8+4&15)+g.charAt(a>>c*8&15);return d}function l(a,c){var d=(a&65535)+(c&65535),h=(a>>16)+(c>>16)+(d>>16);return h<<16|d&65535}function f(a,c){return a<<c|a>>>32-c}function w(a,c,d,h,T,x){return l(f(l(l(c,a),l(h,x)),T),d)}function i(a,c,d,h,T,x,S){return w(c&d|~c&h,a,c,T,x,S)}function m(a,c,d,h,T,x,S){return w(c&h|d&~h,a,c,T,x,S)}function u(a,c,d,h,T,x,S){return w(c^d^h,a,c,T,x,S)}function p(a,c,d,h,T,x,S){return w(d^(c|~h),a,c,T,x,S)}function O(a){var c,d=(a.length+8>>6)+1,h=new Array(d*16);for(c=0;c<d*16;c++)h[c]=0;for(c=0;c<a.length;c++)h[c>>2]|=a.charCodeAt(c)<<c%4*8;return h[c>>2]|=128<<c%4*8,h[d*16-2]=a.length*8,h}var s,o=O(F),r=1732584193,t=-271733879,e=-1732584194,n=271733878,A,j,D,H;for(s=0;s<o.length;s+=16)A=r,j=t,D=e,H=n,r=i(r,t,e,n,o[s+0],7,-680876936),n=i(n,r,t,e,o[s+1],12,-389564586),e=i(e,n,r,t,o[s+2],17,606105819),t=i(t,e,n,r,o[s+3],22,-1044525330),r=i(r,t,e,n,o[s+4],7,-176418897),n=i(n,r,t,e,o[s+5],12,1200080426),e=i(e,n,r,t,o[s+6],17,-1473231341),t=i(t,e,n,r,o[s+7],22,-45705983),r=i(r,t,e,n,o[s+8],7,1770035416),n=i(n,r,t,e,o[s+9],12,-1958414417),e=i(e,n,r,t,o[s+10],17,-42063),t=i(t,e,n,r,o[s+11],22,-1990404162),r=i(r,t,e,n,o[s+12],7,1804603682),n=i(n,r,t,e,o[s+13],12,-40341101),e=i(e,n,r,t,o[s+14],17,-1502002290),t=i(t,e,n,r,o[s+15],22,1236535329),r=m(r,t,e,n,o[s+1],5,-165796510),n=m(n,r,t,e,o[s+6],9,-1069501632),e=m(e,n,r,t,o[s+11],14,643717713),t=m(t,e,n,r,o[s+0],20,-373897302),r=m(r,t,e,n,o[s+5],5,-701558691),n=m(n,r,t,e,o[s+10],9,38016083),e=m(e,n,r,t,o[s+15],14,-660478335),t=m(t,e,n,r,o[s+4],20,-405537848),r=m(r,t,e,n,o[s+9],5,568446438),n=m(n,r,t,e,o[s+14],9,-1019803690),e=m(e,n,r,t,o[s+3],14,-187363961),t=m(t,e,n,r,o[s+8],20,1163531501),r=m(r,t,e,n,o[s+13],5,-1444681467),n=m(n,r,t,e,o[s+2],9,-51403784),e=m(e,n,r,t,o[s+7],14,1735328473),t=m(t,e,n,r,o[s+12],20,-1926607734),r=u(r,t,e,n,o[s+5],4,-378558),n=u(n,r,t,e,o[s+8],11,-2022574463),e=u(e,n,r,t,o[s+11],16,1839030562),t=u(t,e,n,r,o[s+14],23,-35309556),r=u(r,t,e,n,o[s+1],4,-1530992060),n=u(n,r,t,e,o[s+4],11,1272893353),e=u(e,n,r,t,o[s+7],16,-155497632),t=u(t,e,n,r,o[s+10],23,-1094730640),r=u(r,t,e,n,o[s+13],4,681279174),n=u(n,r,t,e,o[s+0],11,-358537222),e=u(e,n,r,t,o[s+3],16,-722521979),t=u(t,e,n,r,o[s+6],23,76029189),r=u(r,t,e,n,o[s+9],4,-640364487),n=u(n,r,t,e,o[s+12],11,-421815835),e=u(e,n,r,t,o[s+15],16,530742520),t=u(t,e,n,r,o[s+2],23,-995338651),r=p(r,t,e,n,o[s+0],6,-198630844),n=p(n,r,t,e,o[s+7],10,1126891415),e=p(e,n,r,t,o[s+14],15,-1416354905),t=p(t,e,n,r,o[s+5],21,-57434055),r=p(r,t,e,n,o[s+12],6,1700485571),n=p(n,r,t,e,o[s+3],10,-1894986606),e=p(e,n,r,t,o[s+10],15,-1051523),t=p(t,e,n,r,o[s+1],21,-2054922799),r=p(r,t,e,n,o[s+8],6,1873313359),n=p(n,r,t,e,o[s+15],10,-30611744),e=p(e,n,r,t,o[s+6],15,-1560198380),t=p(t,e,n,r,o[s+13],21,1309151649),r=p(r,t,e,n,o[s+4],6,-145523070),n=p(n,r,t,e,o[s+11],10,-1120210379),e=p(e,n,r,t,o[s+2],15,718787259),t=p(t,e,n,r,o[s+9],21,-343485551),r=l(r,A),t=l(t,j),e=l(e,D),n=l(n,H);return y(r)+y(t)+y(e)+y(n)}X();X();var R=M(q(),1),K=document.createElement("div"),z=B(K),k={},V=({md5Hash:F,children:g})=>{let y;return k[F]=new Promise(l=>y=l),L(()=>{y(!0)},[]),(0,R.jsx)("div",{id:F,children:g})},Q=async(F,g,y)=>{let l="ID"+b(F).slice(0,14),f=await J(g);if(z.render((0,R.jsx)(V,{md5Hash:l,children:(0,R.jsx)(f,{})},l)),await new Promise(i=>N(i,!0)),!k[l]||!await k[l])return null;let w=K.querySelector(`#${l}`)?.innerHTML;return z.unmount(),setTimeout(()=>{let i=E();setTimeout(()=>{if(i!==E())return;let{css:m,html:u,code:p}=C();if("ID"+b(p).slice(0,14)!==l)return;let o=document.getElementById("root-"+y).innerHTML,r=G(o);(m!==r||u!==o)&&P({...C(),html:o,css:r})},50)},100),w?{html:w,css:G(w)}:null},G=F=>{try{let g={};for(let y in document.styleSheets){let l=document.styleSheets[y];l?.cssRules&&Array.from(l.cssRules).forEach(f=>{if(f&&f.cssText&&f.cssText.slice(0,5)===".css-"){let w=f.cssText.slice(1,11);!g[w]&&F.includes(w)&&!f.cssText.slice(10).includes(".css-")&&(g[w]=f.cssText)}})}return Object.keys(g).map(y=>g[y]).join(" ")}catch{return console.error("no css"),""}};var I={i:0,esbuildInit:async()=>await(await await import("./chunk-esbuildEsm-3LCNC2NL.mjs")).init()};async function cr({code:F,counter:g,codeSpace:y}){let l=await I.esbuildInit();if(I.i=g,F!==C().code&&!(I.i>g))try{let f=await l.transform(F,{loader:"tsx",format:"esm",treeShaking:!0,tsconfigRaw:{compilerOptions:{jsx:"react-jsx",jsxImportSource:"@emotion/react"}},target:"es2021"});if(f.code===C().transpiled)return;let w=!1;if(f.code.length>0)try{let i=await Q(F,f.code,y);if(i===null){console.error("COULD NOT RENDER:"),console.error({code:F,transpiled:f.code});return}let{html:m,css:u}=i;await U({code:F,transpiled:f.code,i:g,html:m,css:u});return}catch(i){console.error("EXCEPTION"),console.error(i),w=!0,console.error({restartError:w});return}}catch(f){console.error({error:f})}}export{cr as runner};
