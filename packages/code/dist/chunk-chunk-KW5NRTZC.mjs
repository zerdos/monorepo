import{a as z,c as A,d as O,e as R,f as k,g as F,h as L,i as M,j as B}from"./chunk-chunk-AWGDGW7T.mjs";import{W as I,X as P}from"./chunk-chunk-DXSWH7CM.mjs";import{b as C,e as j,j as E}from"./chunk-chunk-UURPA34U.mjs";var q=C(m=>{"use strict";E();Object.defineProperty(m,"__esModule",{value:!0});var v=(P(),j(I));A();var i=B();O();z();R();k();var w=F(),p=L(),b=M(),x=function(e,t){var r=arguments;if(t==null||!i.hasOwnProperty.call(t,"css"))return v.createElement.apply(void 0,r);var a=r.length,n=new Array(a);n[0]=i.Emotion,n[1]=i.createEmotionProps(e,t);for(var s=2;s<a;s++)n[s]=r[s];return v.createElement.apply(null,n)},G=i.withEmotionCache(function(f,e){var t=f.styles,r=p.serializeStyles([t],void 0,v.useContext(i.ThemeContext));if(!i.isBrowser){for(var a,n=r.name,s=r.styles,u=r.next;u!==void 0;)n+=" "+u.name,s+=u.styles,u=u.next;var h=e.compat===!0,y=e.insert("",{name:n,styles:s},e.sheet,h);return h?null:v.createElement("style",(a={},a["data-emotion"]=e.key+"-global "+n,a.dangerouslySetInnerHTML={__html:y},a.nonce=e.sheet.nonce,a))}var c=v.useRef();return b.useInsertionEffectWithLayoutFallback(function(){var o=e.key+"-global",l=new e.sheet.constructor({key:o,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),g=!1,d=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return e.sheet.tags.length&&(l.before=e.sheet.tags[0]),d!==null&&(g=!0,d.setAttribute("data-emotion",o),l.hydrate([d])),c.current=[l,g],function(){l.flush()}},[e]),b.useInsertionEffectWithLayoutFallback(function(){var o=c.current,l=o[0],g=o[1];if(g){o[1]=!1;return}if(r.next!==void 0&&w.insertStyles(e,r.next,!0),l.tags.length){var d=l.tags[l.tags.length-1].nextElementSibling;l.before=d,l.flush()}e.insert("",r,l,!1)},[e,r.name]),null});function S(){for(var f=arguments.length,e=new Array(f),t=0;t<f;t++)e[t]=arguments[t];return p.serializeStyles(e)}var H=function(){var e=S.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},N=function f(e){for(var t=e.length,r=0,a="";r<t;r++){var n=e[r];if(n!=null){var s=void 0;switch(typeof n){case"boolean":break;case"object":{if(Array.isArray(n))s=f(n);else{s="";for(var u in n)n[u]&&u&&(s&&(s+=" "),s+=u)}break}default:s=n}s&&(a&&(a+=" "),a+=s)}}return a};function D(f,e,t){var r=[],a=w.getRegisteredStyles(f,r,t);return r.length<2?t:a+e(r)}var V=function(e){var t=e.cache,r=e.serializedArr,a=b.useInsertionEffectAlwaysWithSyncFallback(function(){for(var s="",u=0;u<r.length;u++){var h=w.insertStyles(t,r[u],!1);!i.isBrowser&&h!==void 0&&(s+=h)}if(!i.isBrowser)return s});if(!i.isBrowser&&a.length!==0){var n;return v.createElement("style",(n={},n["data-emotion"]=t.key+" "+r.map(function(s){return s.name}).join(" "),n.dangerouslySetInnerHTML={__html:a},n.nonce=t.sheet.nonce,n))}return null},J=i.withEmotionCache(function(f,e){var t=!1,r=[],a=function(){for(var y=arguments.length,c=new Array(y),o=0;o<y;o++)c[o]=arguments[o];var l=p.serializeStyles(c,e.registered);return r.push(l),w.registerStyles(e,l,!1),e.key+"-"+l.name},n=function(){for(var y=arguments.length,c=new Array(y),o=0;o<y;o++)c[o]=arguments[o];return D(e.registered,a,N(c))},s={css:a,cx:n,theme:v.useContext(i.ThemeContext)},u=f.children(s);return t=!0,v.createElement(v.Fragment,null,v.createElement(V,{cache:e,serializedArr:r}),u)});m.CacheProvider=i.CacheProvider;m.ThemeContext=i.ThemeContext;m.ThemeProvider=i.ThemeProvider;m.__unsafe_useEmotionCache=i.__unsafe_useEmotionCache;m.useTheme=i.useTheme;Object.defineProperty(m,"withEmotionCache",{enumerable:!0,get:function(){return i.withEmotionCache}});m.withTheme=i.withTheme;m.ClassNames=J;m.Global=G;m.createElement=x;m.css=S;m.jsx=x;m.keyframes=H});var K=C((X,T)=>{"use strict";E();T.exports=q()});export{K as a};
