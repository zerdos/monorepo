(()=>{var xt=Object.create;var De=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var Ct=Object.getOwnPropertyNames;var Lt=Object.getPrototypeOf,It=Object.prototype.hasOwnProperty;var Et=g=>De(g,"__esModule",{value:!0});var Fe=(g=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(g,{get:($,I)=>(typeof require!="undefined"?require:$)[I]}):g)(function(g){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+g+'" is not supported')});var Ot=(g,$,I,C)=>{if($&&typeof $=="object"||typeof $=="function")for(let E of Ct($))!It.call(g,E)&&(I||E!=="default")&&De(g,E,{get:()=>$[E],enumerable:!(C=At($,E))||C.enumerable});return g},C0=(g,$)=>Ot(Et(De(g!=null?xt(Lt(g)):{},"default",!$&&g&&g.__esModule?{get:()=>g.default,enumerable:!0}:{value:g,enumerable:!0})),g);var L0=Fe("https://ga.jspm.io/npm:workbox-window@6.4.2/build/workbox-window.prod.es5.mjs");(function(){let g=!!navigator.userAgent.match(/Edge\/\d+\.\d+/),$=!!window.safari,I=document.baseURI;function C(r,a="text/javascript"){return URL.createObjectURL(new Blob([r],{type:a}))}let E=()=>{};function B(r){try{return new URL(r),!0}catch(a){return!1}}let ue=/\\/g;function D(r,a){if(a=a&&a.split("#")[0].split("?")[0],r.indexOf("\\")!==-1&&(r=r.replace(ue,"/")),r[0]==="/"&&r[1]==="/")return a.slice(0,a.indexOf(":")+1)+r;if(r[0]==="."&&(r[1]==="/"||r[1]==="."&&(r[2]==="/"||r.length===2&&(r+="/"))||r.length===1&&(r+="/"))||r[0]==="/"){let l=a.slice(0,a.indexOf(":")+1),o;if(a[l.length+1]==="/"?l!=="file:"?(o=a.slice(l.length+2),o=o.slice(o.indexOf("/")+1)):o=a.slice(8):o=a.slice(l.length+(a[l.length]==="/")),r[0]==="/")return a.slice(0,a.length-o.length-1)+r;let u=o.slice(0,o.lastIndexOf("/")+1)+r,d=[],h=-1;for(let p=0;p<u.length;p++){if(h!==-1){u[p]==="/"&&(d.push(u.slice(h,p+1)),h=-1);continue}else if(u[p]==="."){if(u[p+1]==="."&&(u[p+2]==="/"||p+2===u.length)){d.pop(),p+=2;continue}else if(u[p+1]==="/"||p+1===u.length){p+=1;continue}}for(;u[p]==="/";)p++;h=p}return h!==-1&&d.push(u.slice(h)),a.slice(0,a.length-o.length)+d.join("")}}function Je(r,a){return D(r,a)||(r.indexOf(":")!==-1?r:D("./"+r,a))}function Be(r,a,l,o){for(let u in r){let d=D(u,l)||u;if(a[d]&&a[d]!==r[d])throw Error(`Rejected map override "${d}" from ${a[d]} to ${r[d]}.`);let h=r[u];if(typeof h!="string")continue;let p=be(o,D(h,l)||h,l);if(p){a[d]=p;continue}console.warn(`Mapping "${u}" -> "${r[u]}" does not resolve`)}}function E0(r,a,l){let o={imports:Object.assign({},l.imports),scopes:Object.assign({},l.scopes)};if(r.imports&&Be(r.imports,o.imports,a,l),r.scopes)for(let u in r.scopes){let d=Je(u,a);Be(r.scopes[u],o.scopes[d]||(o.scopes[d]={}),a,l)}return o}function de(r,a){if(a[r])return r;let l=r.length;do{let o=r.slice(0,l+1);if(o in a)return o}while((l=r.lastIndexOf("/",l-1))!==-1)}function ze(r,a){let l=de(r,a);if(l){let o=a[l];return o===null?void 0:o+r.slice(l.length)}}function be(r,a,l){let o=l&&de(l,r.scopes);for(;o;){let u=ze(a,r.scopes[o]);if(u)return u;o=de(o.slice(0,o.lastIndexOf("/")),r.scopes)}return ze(a,r.imports)||a.indexOf(":")!==-1&&a}let Ke=document.querySelector("script[type=esms-options]"),O=Ke?JSON.parse(Ke.innerHTML):self.esmsInitOptions?self.esmsInitOptions:{},v=!!O.shimMode,Qe=te(v&&O.resolve),We=O.skip?new RegExp(O.skip):null,z=O.nonce;if(!z){let r=document.querySelector("script[nonce]");r&&(z=r.nonce||r.getAttribute("nonce"))}let O0=te(O.onerror||E),R0=O.onpolyfill?te(O.onpolyfill):()=>console.info("OK: ^ TypeError module failure has been polyfilled"),{revokeBlobURLs:Ge,noLoadEventRetriggers:Ve,enforceIntegrity:j0}=O,Xe=O.fetch?te(O.fetch):fetch;function te(r){return typeof r=="string"?self[r]:r}let Ye=Array.isArray(O.polyfillEnable)?O.polyfillEnable:[],he=Ye.includes("css-modules"),pe=Ye.includes("json-modules");function M0(){v=!0}let K;window.addEventListener("error",r=>K=r);function Ze(r,{errUrl:a=r}={}){K=void 0;let l=C(`import*as m from'${r}';self._esmsi=m`),o=Object.assign(document.createElement("script"),{type:"module",src:l});o.setAttribute("nonce",z),o.setAttribute("noshim","");let u=new Promise((d,h)=>{o.addEventListener("error",p),o.addEventListener("load",p);function p(k){document.head.removeChild(o),self._esmsi?(d(self._esmsi,I),self._esmsi=void 0):(h(!(k instanceof Event)&&k||K&&K.error||new Error(`Error loading or executing the graph of ${a} (check the console for ${l}).`)),K=void 0)}});return document.head.appendChild(o),u}let T=Ze,_0=Ze(C("export default u=>import(u)")).then(r=>(r&&(T=r.default),!!r),E),ke=!1,me=!1,we=!1,ye=!1,ge=!1,P0=Promise.resolve(_0).then(r=>{if(!!r)return ge=!0,Promise.all([T(C("import.meta")).then(()=>we=!0,E),he&&T(C('import"data:text/css,{}"assert{type:"css"}')).then(()=>me=!0,E),pe&&T(C('import"data:text/json,{}"assert{type:"json"}')).then(()=>ke=!0,E),new Promise(a=>{self._$s=o=>{document.head.removeChild(l),o&&(ye=!0),delete self._$s,a()};let l=document.createElement("iframe");l.style.display="none",document.head.appendChild(l),l.src=C(`<script type=importmap nonce="${z}">{"imports":{"x":"data:text/javascript,"}}<\/script><script nonce="${z}">import('x').then(()=>1,()=>0).then(v=>parent._$s(v))<\/script>`,"text/html")})])}),x,ve,$e,Q=4194304,T0=new Uint8Array(new Uint16Array([1]).buffer)[0]===1,S,Ue,w;function q0(r,a="@"){if(S=r,Ue=a,S.length>Q||!x){for(;S.length>Q;)Q*=2;ve=new ArrayBuffer(4*Q),x=function(d,h,p){var k=new d.Int8Array(p),c=new d.Int16Array(p),t=new d.Int32Array(p),N=new d.Uint8Array(p),R=new d.Uint16Array(p),L=816;function H(e){e=e|0;var s=0,i=0,n=0,f=0,b=0;b=L,L=L+14336|0,f=b,k[589]=1,c[291]=0,c[292]=0,c[293]=-1,t[15]=t[2],k[590]=0,t[14]=0,k[588]=0,t[16]=b+10240,t[17]=b+2048,k[591]=0,e=(t[3]|0)+-2|0,t[18]=e,s=e+(t[12]<<1)|0,t[19]=s;e:for(;;){if(i=e+2|0,t[18]=i,e>>>0>=s>>>0){n=18;break}t:do switch(c[i>>1]|0){case 9:case 10:case 11:case 12:case 13:case 32:break;case 101:{if((((c[292]|0)==0?U(i)|0:0)?F(e+4|0,120,112,111,114,116)|0:0)?(y0(),(k[589]|0)==0):0){n=9;break e}else n=17;break}case 105:{(U(i)|0?F(e+4|0,109,112,111,114,116)|0:0)&&g0(),n=17;break}case 59:{n=17;break}case 47:switch(c[e+4>>1]|0){case 47:{qe();break t}case 42:{Me(1);break t}default:{n=16;break e}}default:{n=16;break e}}while(0);(n|0)==17&&(n=0,t[15]=t[18]),e=t[18]|0,s=t[19]|0}(n|0)==9?(e=t[18]|0,t[15]=e,n=19):(n|0)==16?(k[589]=0,t[18]=e,n=19):(n|0)==18&&(k[588]|0?e=0:(e=i,n=19));do if((n|0)==19){e:for(;;){if(s=e+2|0,t[18]=s,i=s,e>>>0>=(t[19]|0)>>>0){n=75;break}t:do switch(c[s>>1]|0){case 9:case 10:case 11:case 12:case 13:case 32:break;case 101:{(((c[292]|0)==0?U(s)|0:0)?F(e+4|0,120,112,111,114,116)|0:0)&&y0(),n=74;break}case 105:{(U(s)|0?F(e+4|0,109,112,111,114,116)|0:0)&&g0(),n=74;break}case 99:{((U(s)|0?fe(e+4|0,108,97,115,115)|0:0)?He(c[e+12>>1]|0)|0:0)&&(k[591]=1),n=74;break}case 40:{s=t[15]|0,i=t[17]|0,n=c[292]|0,c[292]=n+1<<16>>16,t[i+((n&65535)<<2)>>2]=s,n=74;break}case 41:{if(e=c[292]|0,!(e<<16>>16)){n=36;break e}n=e+-1<<16>>16,c[292]=n,e=t[11]|0,((e|0)!=0?(t[e+20>>2]|0)==(t[(t[17]|0)+((n&65535)<<2)>>2]|0):0)&&(s=e+4|0,t[s>>2]|0||(t[s>>2]=i),t[e+12>>2]=i,t[11]=0),n=74;break}case 123:{n=t[15]|0,i=t[8]|0,e=n;do if((c[n>>1]|0)==41&(i|0)!=0?(t[i+4>>2]|0)==(n|0):0)if(s=t[9]|0,t[8]=s,s){t[s+28>>2]=0;break}else{t[4]=0;break}while(0);s=c[292]|0,n=s&65535,k[f+n>>0]=k[591]|0,k[591]=0,i=t[17]|0,c[292]=s+1<<16>>16,t[i+(n<<2)>>2]=e,n=74;break}case 125:{if(e=c[292]|0,!(e<<16>>16)){n=49;break e}if(i=e+-1<<16>>16,c[292]=i,s=c[293]|0,e<<16>>16!=s<<16>>16)if(s<<16>>16!=-1&(i&65535)<(s&65535)){n=53;break e}else{n=74;break t}else{i=t[16]|0,n=(c[291]|0)+-1<<16>>16,c[291]=n,c[293]=c[i+((n&65535)<<1)>>1]|0,v0(),n=74;break t}}case 39:{j(39),n=74;break}case 34:{j(34),n=74;break}case 47:switch(c[e+4>>1]|0){case 47:{qe();break t}case 42:{Me(1);break t}default:{s=t[15]|0,i=c[s>>1]|0;s:do if(rt(i)|0)switch(i<<16>>16){case 46:if(((c[s+-2>>1]|0)+-48&65535)<10){n=68;break s}else{n=71;break s}case 43:if((c[s+-2>>1]|0)==43){n=68;break s}else{n=71;break s}case 45:if((c[s+-2>>1]|0)==45){n=68;break s}else{n=71;break s}default:{n=71;break s}}else{switch(i<<16>>16){case 41:if(at(t[(t[17]|0)+(R[292]<<2)>>2]|0)|0){n=71;break s}else{n=68;break s}case 125:break;default:{n=68;break s}}e=R[292]|0,(et(t[(t[17]|0)+(e<<2)>>2]|0)|0?0:(k[f+e>>0]|0)==0)?n=68:n=71}while(0);s:do if((n|0)==68)if(n=0,Y0(s)|0)n=71;else{switch(i<<16>>16){case 0:{n=71;break s}case 47:break;default:{e=1;break s}}k[590]|0?n=71:e=1}while(0);(n|0)==71&&(tt(),e=0),k[590]=e,n=74;break t}}case 96:{v0(),n=74;break}default:n=74}while(0);(n|0)==74&&(n=0,t[15]=t[18]),e=t[18]|0}if((n|0)==36){M(),e=0;break}else if((n|0)==49){M(),e=0;break}else if((n|0)==53){M(),e=0;break}else if((n|0)==75){e=(c[293]|0)==-1&(c[292]|0)==0&(k[588]|0)==0;break}}while(0);return L=b,e|0}function y0(){var e=0,s=0,i=0,n=0,f=0,b=0;f=t[18]|0,b=f+12|0,t[18]=b,s=m(1)|0,e=t[18]|0,((e|0)==(b|0)?!(_e(s)|0):0)||(n=3);e:do if((n|0)==3){t:do switch(s<<16>>16){case 100:{Z(e,e+14|0);break e}case 97:{t[18]=e+10,m(1)|0,e=t[18]|0,n=6;break}case 102:{n=6;break}case 99:{if(fe(e+2|0,108,97,115,115)|0?(i=e+10|0,P(c[i>>1]|0)|0):0){t[18]=i,f=m(1)|0,b=t[18]|0,J(f)|0,Z(b,t[18]|0),t[18]=(t[18]|0)+-2;break e}e=e+4|0,t[18]=e,n=13;break}case 108:case 118:{n=13;break}case 123:{for(t[18]=e+2,e=m(1)|0,i=t[18]|0;;){if(ee(e)|0?(j(e),e=(t[18]|0)+2|0,t[18]=e):(J(e)|0,e=t[18]|0),m(1)|0,e=$0(i,e)|0,e<<16>>16==44&&(t[18]=(t[18]|0)+2,e=m(1)|0),s=i,i=t[18]|0,e<<16>>16==125){n=32;break}if((i|0)==(s|0)){n=29;break}if(i>>>0>(t[19]|0)>>>0){n=31;break}}if((n|0)==29){M();break e}else if((n|0)==31){M();break e}else if((n|0)==32){t[18]=i+2,n=34;break t}break}case 42:{t[18]=e+2,m(1)|0,n=t[18]|0,$0(n,n)|0,n=34;break}default:}while(0);if((n|0)==6){t[18]=e+16,e=m(1)|0,e<<16>>16==42&&(t[18]=(t[18]|0)+2,e=m(1)|0),b=t[18]|0,J(e)|0,Z(b,t[18]|0),t[18]=(t[18]|0)+-2;break}else if((n|0)==13){e=e+4|0,t[18]=e,k[589]=0;t:for(;;){switch(t[18]=e+2,b=m(1)|0,e=t[18]|0,(J(b)|0)<<16>>16){case 91:case 123:{n=15;break t}default:}if(s=t[18]|0,(s|0)==(e|0))break e;switch(Z(e,s),(m(1)|0)<<16>>16){case 61:{n=19;break t}case 44:break;default:{n=20;break t}}e=t[18]|0}if((n|0)==15){t[18]=(t[18]|0)+-2;break}else if((n|0)==19){t[18]=(t[18]|0)+-2;break}else if((n|0)==20){t[18]=(t[18]|0)+-2;break}}else(n|0)==34&&(s=m(1)|0);if(e=t[18]|0,s<<16>>16==102?Ne(e+2|0,114,111,109)|0:0){t[18]=e+8,Re(f,m(1)|0);break}t[18]=e+-2}while(0)}function g0(){var e=0,s=0,i=0,n=0,f=0;f=t[18]|0,s=f+12|0,t[18]=s;e:do switch((m(1)|0)<<16>>16){case 40:{if(s=t[17]|0,i=c[292]|0,c[292]=i+1<<16>>16,t[s+((i&65535)<<2)>>2]=f,(c[t[15]>>1]|0)!=46){switch(je(f,(t[18]|0)+2|0,0,f),t[11]=t[8],t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16){case 39:{j(39);break}case 34:{j(34);break}default:{t[18]=(t[18]|0)+-2;break e}}switch(t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16){case 44:{f=t[18]|0,t[(t[8]|0)+4>>2]=f,t[18]=f+2,m(1)|0,f=t[18]|0,i=t[8]|0,t[i+16>>2]=f,k[i+24>>0]=1,t[18]=f+-2;break e}case 41:{c[292]=(c[292]|0)+-1<<16>>16,i=t[18]|0,f=t[8]|0,t[f+4>>2]=i,t[f+12>>2]=i,k[f+24>>0]=1;break e}default:{t[18]=(t[18]|0)+-2;break e}}}break}case 46:{t[18]=(t[18]|0)+2,(((m(1)|0)<<16>>16==109?(e=t[18]|0,Ne(e+2|0,101,116,97)|0):0)?(c[t[15]>>1]|0)!=46:0)&&je(f,f,e+8|0,2);break}case 42:case 39:case 34:{n=16;break}case 123:{if(e=t[18]|0,c[292]|0){t[18]=e+-2;break e}for(;!(e>>>0>=(t[19]|0)>>>0);){if(e=m(1)|0,ee(e)|0)j(e);else if(e<<16>>16==125){n=31;break}e=(t[18]|0)+2|0,t[18]=e}if((n|0)==31&&(t[18]=(t[18]|0)+2),m(1)|0,e=t[18]|0,!(fe(e,102,114,111,109)|0)){M();break e}if(t[18]=e+8,e=m(1)|0,ee(e)|0){Re(f,e);break e}else{M();break e}}default:(t[18]|0)!=(s|0)&&(n=16)}while(0);do if((n|0)==16){if(c[292]|0){t[18]=(t[18]|0)+-2;break}for(e=t[19]|0,s=t[18]|0;;){if(s>>>0>=e>>>0){n=23;break}if(i=c[s>>1]|0,ee(i)|0){n=21;break}n=s+2|0,t[18]=n,s=n}if((n|0)==21){Re(f,i);break}else if((n|0)==23){M();break}}while(0)}function Re(e,s){e=e|0,s=s|0;var i=0,n=0;switch(i=(t[18]|0)+2|0,s<<16>>16){case 39:{j(39),n=5;break}case 34:{j(34),n=5;break}default:M()}do if((n|0)==5){if(je(e,i,t[18]|0,1),t[18]=(t[18]|0)+2,n=(m(0)|0)<<16>>16==97,s=t[18]|0,n?F(s+2|0,115,115,101,114,116)|0:0){if(t[18]=s+12,(m(1)|0)<<16>>16!=123){t[18]=s;break}e=t[18]|0,i=e;e:for(;;){switch(t[18]=i+2,i=m(1)|0,i<<16>>16){case 39:{j(39),t[18]=(t[18]|0)+2,i=m(1)|0;break}case 34:{j(34),t[18]=(t[18]|0)+2,i=m(1)|0;break}default:i=J(i)|0}if(i<<16>>16!=58){n=16;break}switch(t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16){case 39:{j(39);break}case 34:{j(34);break}default:{n=20;break e}}switch(t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16){case 125:{n=25;break e}case 44:break;default:{n=24;break e}}if(t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16==125){n=25;break}i=t[18]|0}if((n|0)==16){t[18]=s;break}else if((n|0)==20){t[18]=s;break}else if((n|0)==24){t[18]=s;break}else if((n|0)==25){n=t[8]|0,t[n+16>>2]=e,t[n+12>>2]=(t[18]|0)+2;break}}t[18]=s+-2}while(0)}function Y0(e){e=e|0;e:do switch(c[e>>1]|0){case 100:switch(c[e+-2>>1]|0){case 105:{e=Te(e+-4|0,118,111)|0;break e}case 108:{e=ce(e+-4|0,121,105,101)|0;break e}default:{e=0;break e}}case 101:{switch(c[e+-2>>1]|0){case 115:break;case 116:{e=Pe(e+-4|0,100,101,108,101)|0;break e}default:{e=0;break e}}switch(c[e+-4>>1]|0){case 108:{e=Y(e+-6|0,101)|0;break e}case 97:{e=Y(e+-6|0,99)|0;break e}default:{e=0;break e}}}case 102:{if((c[e+-2>>1]|0)==111?(c[e+-4>>1]|0)==101:0)switch(c[e+-6>>1]|0){case 99:{e=S0(e+-8|0,105,110,115,116,97,110)|0;break e}case 112:{e=Te(e+-8|0,116,121)|0;break e}default:{e=0;break e}}else e=0;break}case 110:{e=e+-2|0,Y(e,105)|0?e=1:e=x0(e,114,101,116,117,114)|0;break}case 111:{e=Y(e+-2|0,100)|0;break}case 114:{e=nt(e+-2|0,100,101,98,117,103,103,101)|0;break}case 116:{e=Pe(e+-2|0,97,119,97,105)|0;break}case 119:switch(c[e+-2>>1]|0){case 101:{e=Y(e+-4|0,110)|0;break e}case 111:{e=ce(e+-4|0,116,104,114)|0;break e}default:{e=0;break e}}default:e=0}while(0);return e|0}function v0(){var e=0,s=0,i=0;s=t[19]|0,i=t[18]|0;e:for(;;){if(e=i+2|0,i>>>0>=s>>>0){s=8;break}switch(c[e>>1]|0){case 96:{s=9;break e}case 36:{if((c[i+4>>1]|0)==123){s=6;break e}break}case 92:{e=i+4|0;break}default:}i=e}(s|0)==6?(t[18]=i+4,e=c[293]|0,s=t[16]|0,i=c[291]|0,c[291]=i+1<<16>>16,c[s+((i&65535)<<1)>>1]=e,i=(c[292]|0)+1<<16>>16,c[292]=i,c[293]=i):(s|0)==8?(t[18]=e,M()):(s|0)==9&&(t[18]=e)}function m(e){e=e|0;var s=0,i=0,n=0;i=t[18]|0;e:do{s=c[i>>1]|0;t:do if(s<<16>>16!=47)if(e){if(He(s)|0)break;break e}else{if(ft(s)|0)break;break e}else switch(c[i+2>>1]|0){case 47:{qe();break t}case 42:{Me(e);break t}default:{s=47;break e}}while(0);n=t[18]|0,i=n+2|0,t[18]=i}while(n>>>0<(t[19]|0)>>>0);return s|0}function j(e){e=e|0;var s=0,i=0,n=0,f=0;for(f=t[19]|0,s=t[18]|0;;){if(n=s+2|0,s>>>0>=f>>>0){s=9;break}if(i=c[n>>1]|0,i<<16>>16==e<<16>>16){s=10;break}if(i<<16>>16==92)i=s+4|0,(c[i>>1]|0)==13?(s=s+6|0,s=(c[s>>1]|0)==10?s:i):s=i;else if(A0(i)|0){s=9;break}else s=n}(s|0)==9?(t[18]=n,M()):(s|0)==10&&(t[18]=n)}function je(e,s,i,n){e=e|0,s=s|0,i=i|0,n=n|0;var f=0,b=0;f=t[13]|0,t[13]=f+32,b=t[8]|0,t[((b|0)==0?16:b+28|0)>>2]=f,t[9]=b,t[8]=f,t[f+8>>2]=e;do if((n|0)!=2)if((n|0)==1){t[f+12>>2]=i+2;break}else{t[f+12>>2]=t[3];break}else t[f+12>>2]=i;while(0);t[f>>2]=s,t[f+4>>2]=i,t[f+16>>2]=0,t[f+20>>2]=n,k[f+24>>0]=(n|0)==1&1,t[f+28>>2]=0}function Z0(){var e=0,s=0,i=0;i=t[19]|0,s=t[18]|0;e:for(;;){if(e=s+2|0,s>>>0>=i>>>0){s=6;break}switch(c[e>>1]|0){case 13:case 10:{s=6;break e}case 93:{s=7;break e}case 92:{e=s+4|0;break}default:}s=e}return(s|0)==6?(t[18]=e,M(),e=0):(s|0)==7&&(t[18]=e,e=93),e|0}function U0(e,s,i,n,f,b,y,A){return e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,y=y|0,A=A|0,((((((c[e+12>>1]|0)==A<<16>>16?(c[e+10>>1]|0)==y<<16>>16:0)?(c[e+8>>1]|0)==b<<16>>16:0)?(c[e+6>>1]|0)==f<<16>>16:0)?(c[e+4>>1]|0)==n<<16>>16:0)?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function et(e){switch(e=e|0,c[e>>1]|0){case 62:{e=(c[e+-2>>1]|0)==61;break}case 41:case 59:{e=1;break}case 104:{e=Pe(e+-2|0,99,97,116,99)|0;break}case 121:{e=S0(e+-2|0,102,105,110,97,108,108)|0;break}case 101:{e=ce(e+-2|0,101,108,115)|0;break}default:e=0}return e|0}function $0(e,s){e=e|0,s=s|0;var i=0,n=0;return i=t[18]|0,n=c[i>>1]|0,n<<16>>16==97&&(t[18]=i+4,i=m(1)|0,e=t[18]|0,ee(i)|0?(j(i),s=(t[18]|0)+2|0,t[18]=s):(J(i)|0,s=t[18]|0),n=m(1)|0,i=t[18]|0),(i|0)!=(e|0)&&Z(e,s),n|0}function tt(){var e=0,s=0,i=0;e:for(;;){if(e=t[18]|0,s=e+2|0,t[18]=s,e>>>0>=(t[19]|0)>>>0){i=7;break}switch(c[s>>1]|0){case 13:case 10:{i=7;break e}case 47:break e;case 91:{Z0()|0;break}case 92:{t[18]=e+4;break}default:}}(i|0)==7&&M()}function Me(e){e=e|0;var s=0,i=0,n=0,f=0,b=0;for(f=(t[18]|0)+2|0,t[18]=f,i=t[19]|0;s=f+2|0,!(f>>>0>=i>>>0||(n=c[s>>1]|0,e?0:A0(n)|0));){if(n<<16>>16==42?(c[f+4>>1]|0)==47:0){b=8;break}f=s}(b|0)==8&&(t[18]=s,s=f+4|0),t[18]=s}function st(e,s,i,n,f,b,y){return e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,y=y|0,(((((c[e+10>>1]|0)==y<<16>>16?(c[e+8>>1]|0)==b<<16>>16:0)?(c[e+6>>1]|0)==f<<16>>16:0)?(c[e+4>>1]|0)==n<<16>>16:0)?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function nt(e,s,i,n,f,b,y,A){e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,y=y|0,A=A|0;var _=0,le=0;return le=e+-12|0,_=t[3]|0,(le>>>0>=_>>>0?U0(le,s,i,n,f,b,y,A)|0:0)?(le|0)==(_|0)?_=1:_=P(c[e+-14>>1]|0)|0:_=0,_|0}function _e(e){e=e|0;e:do switch(e<<16>>16){case 38:case 37:case 33:{e=1;break}default:if((e&-8)<<16>>16==40|(e+-58&65535)<6)e=1;else{switch(e<<16>>16){case 91:case 93:case 94:{e=1;break e}default:}e=(e+-123&65535)<4}}while(0);return e|0}function rt(e){e=e|0;e:do switch(e<<16>>16){case 38:case 37:case 33:break;default:if(!((e+-58&65535)<6|(e+-40&65535)<7&e<<16>>16!=41)){switch(e<<16>>16){case 91:case 94:break e;default:}return e<<16>>16!=125&(e+-123&65535)<4|0}}while(0);return 1}function S0(e,s,i,n,f,b,y){e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,y=y|0;var A=0,_=0;return _=e+-10|0,A=t[3]|0,(_>>>0>=A>>>0?st(_,s,i,n,f,b,y)|0:0)?(_|0)==(A|0)?A=1:A=P(c[e+-12>>1]|0)|0:A=0,A|0}function x0(e,s,i,n,f,b){e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0;var y=0,A=0;return A=e+-8|0,y=t[3]|0,(A>>>0>=y>>>0?F(A,s,i,n,f,b)|0:0)?(A|0)==(y|0)?y=1:y=P(c[e+-10>>1]|0)|0:y=0,y|0}function it(e){e=e|0;var s=0,i=0,n=0,f=0;return i=L,L=L+16|0,n=i,t[n>>2]=0,t[12]=e,s=t[3]|0,f=s+(e<<1)|0,e=f+2|0,c[f>>1]=0,t[n>>2]=e,t[13]=e,t[4]=0,t[8]=0,t[6]=0,t[5]=0,t[10]=0,t[7]=0,L=i,s|0}function F(e,s,i,n,f,b){return e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,((((c[e+8>>1]|0)==b<<16>>16?(c[e+6>>1]|0)==f<<16>>16:0)?(c[e+4>>1]|0)==n<<16>>16:0)?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function Pe(e,s,i,n,f){e=e|0,s=s|0,i=i|0,n=n|0,f=f|0;var b=0,y=0;return y=e+-6|0,b=t[3]|0,(y>>>0>=b>>>0?fe(y,s,i,n,f)|0:0)?(y|0)==(b|0)?b=1:b=P(c[e+-8>>1]|0)|0:b=0,b|0}function ce(e,s,i,n){e=e|0,s=s|0,i=i|0,n=n|0;var f=0,b=0;return b=e+-4|0,f=t[3]|0,(b>>>0>=f>>>0?Ne(b,s,i,n)|0:0)?(b|0)==(f|0)?f=1:f=P(c[e+-6>>1]|0)|0:f=0,f|0}function Te(e,s,i){e=e|0,s=s|0,i=i|0;var n=0,f=0;return f=e+-2|0,n=t[3]|0,(f>>>0>=n>>>0?ct(f,s,i)|0:0)?(f|0)==(n|0)?n=1:n=P(c[e+-4>>1]|0)|0:n=0,n|0}function fe(e,s,i,n,f){return e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,(((c[e+6>>1]|0)==f<<16>>16?(c[e+4>>1]|0)==n<<16>>16:0)?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function Y(e,s){e=e|0,s=s|0;var i=0;return i=t[3]|0,(i>>>0<=e>>>0?(c[e>>1]|0)==s<<16>>16:0)?(i|0)==(e|0)?i=1:i=P(c[e+-2>>1]|0)|0:i=0,i|0}function P(e){e=e|0;e:do if((e+-9&65535)<5)e=1;else{switch(e<<16>>16){case 32:case 160:{e=1;break e}default:}e=e<<16>>16!=46&(_e(e)|0)}while(0);return e|0}function qe(){var e=0,s=0,i=0;e=t[19]|0,i=t[18]|0;e:for(;s=i+2|0,!(i>>>0>=e>>>0);)switch(c[s>>1]|0){case 13:case 10:break e;default:i=s}t[18]=s}function J(e){for(e=e|0;!(He(e)|0||_e(e)|0);)if(e=(t[18]|0)+2|0,t[18]=e,e=c[e>>1]|0,!(e<<16>>16)){e=0;break}return e|0}function Z(e,s){e=e|0,s=s|0;var i=0,n=0;i=t[13]|0,t[13]=i+12,n=t[10]|0,t[((n|0)==0?20:n+8|0)>>2]=i,t[10]=i,t[i>>2]=e,t[i+4>>2]=s,t[i+8>>2]=0}function Ne(e,s,i,n){return e=e|0,s=s|0,i=i|0,n=n|0,((c[e+4>>1]|0)==n<<16>>16?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function at(e){return e=e|0,(x0(e,119,104,105,108,101)|0?0:!(ce(e,102,111,114)|0))?e=Te(e,105,102)|0:e=1,e|0}function ot(){var e=0;switch(e=t[(t[6]|0)+20>>2]|0,e|0){case 1:{e=-1;break}case 2:{e=-2;break}default:e=e-(t[3]|0)>>1}return e|0}function ct(e,s,i){return e=e|0,s=s|0,i=i|0,(c[e+2>>1]|0)==i<<16>>16?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function ft(e){switch(e=e|0,e<<16>>16){case 160:case 32:case 12:case 11:case 9:{e=1;break}default:e=0}return e|0}function U(e){return e=e|0,(t[3]|0)==(e|0)?e=1:e=P(c[e+-2>>1]|0)|0,e|0}function lt(){var e=0;return e=t[(t[6]|0)+16>>2]|0,e?e=e-(t[3]|0)>>1:e=-1,e|0}function ut(){var e=0;return e=t[6]|0,e=t[((e|0)==0?16:e+28|0)>>2]|0,t[6]=e,(e|0)!=0|0}function dt(){var e=0;return e=t[7]|0,e=t[((e|0)==0?20:e+8|0)>>2]|0,t[7]=e,(e|0)!=0|0}function bt(e){e=e|0;var s=0;return s=L,L=L+e|0,L=L+15&-16,s|0}function M(){k[588]=1,t[14]=(t[18]|0)-(t[3]|0)>>1,t[18]=(t[19]|0)+2}function He(e){return e=e|0,(e|128)<<16>>16==160|(e+-9&65535)<5|0}function ee(e){return e=e|0,e<<16>>16==39|e<<16>>16==34|0}function ht(){return(t[(t[6]|0)+12>>2]|0)-(t[3]|0)>>1|0}function pt(){return(t[(t[6]|0)+8>>2]|0)-(t[3]|0)>>1|0}function A0(e){return e=e|0,e<<16>>16==13|e<<16>>16==10|0}function kt(){return(t[(t[6]|0)+4>>2]|0)-(t[3]|0)>>1|0}function mt(){return(t[(t[7]|0)+4>>2]|0)-(t[3]|0)>>1|0}function wt(){return(t[t[6]>>2]|0)-(t[3]|0)>>1|0}function yt(){return(t[t[7]>>2]|0)-(t[3]|0)>>1|0}function gt(){return N[(t[6]|0)+24>>0]|0|0}function vt(e){e=e|0,t[3]=e}function $t(){return(k[589]|0)!=0|0}function St(){return t[14]|0}return{ai:lt,e:St,ee:mt,es:yt,f:$t,id:ot,ie:kt,ip:gt,is:wt,p:H,re:dt,ri:ut,sa:it,se:ht,ses:vt,ss:pt,sta:bt}}({Int8Array,Int16Array,Int32Array,Uint8Array,Uint16Array},{},ve),$e=x.sta(2*Q)}let l=S.length+1;x.ses($e),x.sa(l-1),(T0?H0:N0)(S,new Uint16Array(ve,$e,l)),x.p()||(w=x.e(),q());let o=[],u=[];for(;x.ri();){let d=x.is(),h=x.ie(),p=x.ai(),k=x.id(),c=x.ss(),t=x.se(),N;x.ip()&&(N=e0(k===-1?d:d+1,S.charCodeAt(k===-1?d-1:d))),o.push({n:N,s:d,e:h,ss:c,se:t,d:k,a:p})}for(;x.re();){let d=x.es(),h=S.charCodeAt(d);u.push(h===34||h===39?e0(d+1,h):S.slice(x.es(),x.ee()))}return[o,u,!!x.f()]}function N0(r,a){let l=r.length,o=0;for(;o<l;){let u=r.charCodeAt(o);a[o++]=(255&u)<<8|u>>>8}}function H0(r,a){let l=r.length,o=0;for(;o<l;)a[o]=r.charCodeAt(o++)}function e0(r,a){w=r;let l="",o=w;for(;;){w>=S.length&&q();let u=S.charCodeAt(w);if(u===a)break;u===92?(l+=S.slice(o,w),l+=D0(),o=w):(u===8232||u===8233||t0(u)&&q(),++w)}return l+=S.slice(o,w++),l}function D0(){let r=S.charCodeAt(++w);switch(++w,r){case 110:return`
`;case 114:return"\r";case 120:return String.fromCharCode(Se(2));case 117:return function(){let a;return S.charCodeAt(w)===123?(++w,a=Se(S.indexOf("}",w)-w),++w,a>1114111&&q()):a=Se(4),a<=65535?String.fromCharCode(a):(a-=65536,String.fromCharCode(55296+(a>>10),56320+(1023&a)))}();case 116:return"	";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:S.charCodeAt(w)===10&&++w;case 10:return"";case 56:case 57:q();default:if(r>=48&&r<=55){let a=S.substr(w-1,3).match(/^[0-7]+/)[0],l=parseInt(a,8);return l>255&&(a=a.slice(0,-1),l=parseInt(a,8)),w+=a.length-1,r=S.charCodeAt(w),a==="0"&&r!==56&&r!==57||q(),String.fromCharCode(l)}return t0(r)?"":String.fromCharCode(r)}}function Se(r){let a=w,l=0,o=0;for(let u=0;u<r;++u,++w){let d,h=S.charCodeAt(w);if(h!==95){if(h>=97)d=h-97+10;else if(h>=65)d=h-65+10;else{if(!(h>=48&&h<=57))break;d=h-48}if(d>=16)break;o=h,l=16*l+d}else o!==95&&u!==0||q(),o=h}return o!==95&&w-a===r||q(),l}function t0(r){return r===13||r===10}function q(){throw Object.assign(new Error(`Parse error ${Ue}:${S.slice(0,w).split(`
`).length}:${w-S.lastIndexOf(`
`,w-1)}`),{idx:w})}async function F0(r,a){return be(G,D(r,a)||r,a)}async function J0(r,a){let l=D(r,a);return{r:be(G,l||r,a),b:!l&&!B(r)}}let xe=Qe?async(r,a)=>({r:await Qe(r,a,F0),b:!1}):J0,W={};async function s0(r,a){r.b||a[r.u]||(a[r.u]=1,await r.L,await Promise.all(r.d.map(l=>s0(l,a))),r.n||(r.n=r.d.some(l=>l.n)))}let G={imports:{},scopes:{}},se=!1,V,ne=P0.then(()=>{if(!v)if(document.querySelectorAll("script[type=module-shim],script[type=importmap-shim],link[rel=modulepreload-shim]").length)M0();else{let r=!1;for(let a of document.querySelectorAll("script[type=module],script[type=importmap]"))if(!r)a.type==="module"&&(r=!0);else if(a.type==="importmap"){se=!0;break}}if(V=ge&&we&&ye&&(!pe||ke)&&(!he||me)&&!se&&!0,v||!V){new MutationObserver(r=>{for(let a of r)if(a.type==="childList")for(let l of a.addedNodes)l.tagName==="SCRIPT"?(l.type===(v?"module-shim":"module")&&m0(l),l.type===(v?"importmap-shim":"importmap")&&k0(l)):l.tagName==="LINK"&&l.rel===(v?"modulepreload-shim":"modulepreload")&&w0(l)}).observe(document,{childList:!0,subtree:!0}),oe(),d0();return}}),re=ne,n0=!0,X=!0;async function r0(r,a,l,o,u){if(v||(X=!1),await re,!v&&V)return o?null:(await u,T(l?C(l):r,{errUrl:r||l}));let d=u0(r,a,l),h={};if(await s0(d,h),ae=void 0,c0(d,h),await u,l&&!v&&!d.n){let k=await T(C(l),{errUrl:l});return Ge&&i0(Object.keys(h)),k}n0&&!v&&d.n&&o&&(R0(),n0=!1);let p=await T(!v&&!d.n&&o?d.u:d.b,{errUrl:d.u});return d.s&&(await T(d.s)).u$_(p),Ge&&i0(Object.keys(h)),p}function i0(r){let a=0,l=r.length,o=self.requestIdleCallback?self.requestIdleCallback:self.requestAnimationFrame;o(u);function u(){let d=a*100;if(!(d>l)){for(let h of r.slice(d,d+100)){let p=W[h];p&&URL.revokeObjectURL(p.b)}a++,o(u)}}}async function a0(r,a=I,l){return await ne,(X||v||!V)&&(oe(),v||(X=!1)),await re,r0((await xe(r,a)).r||Oe(r,a),{credentials:"same-origin"})}self.importShim=a0,v&&(a0.getImportMap=()=>JSON.parse(JSON.stringify(G)));let o0={};async function B0(r,a=this.url){return(await xe(r,`${a}`)).r||Oe(r,a)}self._esmsm=o0;function ie(r){return`'${r.replace(/'/g,"\\'")}'`}let ae;function c0(r,a){if(r.b||!a[r.u])return;a[r.u]=0;for(let h of r.d)c0(h,a);let[l]=r.a,o=r.S,u=g&&ae?`import '${ae}';`:"";if(!l.length)u+=o;else{let h=0,p=0;for(let{s:k,e:c,se:t,d:N}of l)if(N===-1){let R=r.d[p++],L=R.b;if(!L)(L=R.s)||(L=R.s=C(`export function u$_(m){${R.a[1].map(H=>H==="default"?"$_default=m.default":`${H}=m.${H}`).join(",")}}${R.a[1].map(H=>H==="default"?"let $_default;export{$_default as default}":`export let ${H}`).join(";")}
//# sourceURL=${R.r}?cycle`));else if(R.s){u+=`${o.slice(h,k-1)}/*${o.slice(k-1,t)}*/${ie(L)};import*as m$_${p} from'${R.b}';import{u$_ as u$_${p}}from'${R.s}';u$_${p}(m$_${p})`,h=t,R.s=void 0;continue}u+=`${o.slice(h,k-1)}/*${o.slice(k-1,t)}*/${ie(L)}`,h=t}else N===-2?(o0[r.r]={url:r.r,resolve:B0},u+=`${o.slice(h,k)}self._esmsm[${ie(r.r)}]`,h=t):(u+=`${o.slice(h,N+6)}Shim(${o.slice(k,c)}, ${ie(r.r)}${o.slice(c,t)}`,h=t);u+=o.slice(h)}let d=!1;u=u.replace(z0,(h,p,k)=>(d=!p,h.replace(k,()=>new URL(k,r.r)))),d||(u+=`
//# sourceURL=`+r.r),r.b=ae=C(u),r.S=void 0}let z0=/\n\/\/# source(Mapping)?URL=([^\n]+)\s*((;|\/\/[^#][^\n]*)\s*)*$/,K0=/^(text|application)\/(x-)?javascript(;|$)/,Q0=/^(text|application)\/json(;|$)/,W0=/^(text|application)\/css(;|$)/,G0=/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g,Ae=[],f0=0;function V0(){if(++f0>100)return new Promise(r=>Ae.push(r))}function X0(){f0--,Ae.length&&Ae.shift()()}async function l0(r,a){if(j0&&!a.integrity)throw Error(`No integrity for ${r}`);let l=V0();l&&await l;try{var o=await Xe(r,a)}finally{X0()}if(!o.ok)throw Error(`${o.status} ${o.statusText} ${o.url}`);let u=o.headers.get("content-type");if(K0.test(u))return{r:o.url,s:await o.text(),t:"js"};if(Q0.test(u))return{r:o.url,s:`export default ${await o.text()}`,t:"json"};if(W0.test(u))return{r:o.url,s:`var s=new CSSStyleSheet();s.replaceSync(${JSON.stringify((await o.text()).replace(G0,(d,h="",p,k)=>`url(${h}${Je(p||k,r)}${h})`))});export default s;`,t:"css"};throw Error(`Unsupported Content-Type "${u}"`)}function u0(r,a,l){let o=W[r];if(o&&!l)return o;if(o={u:r,r:l?r:void 0,f:void 0,S:void 0,L:void 0,a:void 0,d:void 0,b:void 0,s:void 0,n:!1,t:null},W[r]){let u=0;for(;W[o.u+ ++u];);o.u+=u}return W[o.u]=o,o.f=(async()=>{if(!l){let u;if({r:o.r,s:l,t:u}=await(Ee[r]||l0(r,a)),u&&!v){if(u==="css"&&!he||u==="json"&&!pe)throw Error(`${u}-modules require <script type="esms-options">{ "polyfillEnable": ["${u}-modules"] }<\/script>`);(u==="css"&&!me||u==="json"&&!ke)&&(o.n=!0)}}try{o.a=q0(l,o.u)}catch(u){console.warn(u),o.a=[[],[]]}return o.S=l,o})(),o.L=o.f.then(async()=>{let u=a;o.d=(await Promise.all(o.a[0].map(async({n:d,d:h})=>{if((h>=0&&!ge||h===2&&!we)&&(o.n=!0),!d)return;let{r:p,b:k}=await xe(d,o.r||o.u);if(k&&(!ye||se)&&(o.n=!0),h===-1)return p||Oe(d,o.r||o.u),We&&We.test(p)?{b:p}:(u.integrity&&(u=Object.assign({},u,{integrity:void 0})),u0(p,u).f)}))).filter(d=>d)}),o}function d0(){for(let r of document.querySelectorAll(v?"script[type=module-shim]":"script[type=module]"))m0(r);for(let r of document.querySelectorAll(v?"link[rel=modulepreload-shim]":"link[rel=modulepreload]"))w0(r)}function oe(){for(let r of document.querySelectorAll(v?'script[type="importmap-shim"]':'script[type="importmap"]'))k0(r)}function b0(r){let a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}let h0=Promise.resolve(),Ce=1;function p0(){--Ce===0&&!Ve&&document.dispatchEvent(new Event("DOMContentLoaded"))}document.addEventListener("DOMContentLoaded",async()=>{await ne,p0(),(v||!V)&&(oe(),d0())});let Le=1;document.readyState==="complete"?Ie():document.addEventListener("readystatechange",async()=>{oe(),await ne,Ie()});function Ie(){--Le===0&&!Ve&&document.dispatchEvent(new Event("readystatechange"))}function k0(r){if(!r.ep&&!(!r.src&&!r.innerHTML)){if(r.ep=!0,r.src){if(!v)return;se=!0}X&&(re=re.then(async()=>{G=E0(r.src?await(await Xe(r.src)).json():JSON.parse(r.innerHTML),r.src||I,G)}).catch(a=>setTimeout(()=>{throw a})),v||(X=!1))}}function m0(r){if(r.ep||r.getAttribute("noshim")!==null||!r.src&&!r.innerHTML)return;r.ep=!0;let a=Le>0,l=Ce>0;a&&Le++,l&&Ce++;let o=r.getAttribute("async")===null&&a,u=r0(r.src||I,b0(r),!r.src&&r.innerHTML,!v,o&&h0).catch(d=>{$?console.error(d):setTimeout(()=>{throw d}),O0(d)});o&&(h0=u.then(Ie)),l&&u.then(p0)}let Ee={};function w0(r){r.ep||(r.ep=!0,!Ee[r.href]&&(Ee[r.href]=l0(r.href,b0(r))))}function Oe(r,a){throw Error("Unable to resolve specifier '"+r+(a?"' from "+a:"'"))}})();(async()=>{window.esmsInitOptions={shimMode:!0,revokeBlobURLs:!0,fetch:g,resolve:($,I)=>I+$,polyfillEnable:["css-modules","json-modules"],onerror:$=>console.log($),noLoadEventRetriggers:!0,skip:/^https?:\/\/(cdn\.skypack\.dev|jspm\.dev)\//};async function g($,I){let C=$.toString(),E=C.substring(-3);if(C.indexOf("monaco")===-1&&["tsx",".ts"].indexOf(E)!==-1){console.log(C);let B=await fetch(C,I);if(!B.ok)return B;let ue=await B.text();return new Response(ue,I)}return fetch(C,I)}try{window.React=await(await import("https://spike.land/dist/react.mjs")).default;let{run:$}=await import("./dist/starter.mjs");$()}catch($){window.React=await(await importShim("react")).default;let{run:I}=await importShim("./dist/starter.mjs");I()}})();var I0=new L0.Workbox("./sw.js");I0.addEventListener("activated",async g=>{g.isUpdate||console.log("Service worker activated for the first time!")});I0.register();})();
