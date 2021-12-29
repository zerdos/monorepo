import{jsx as E}from"https://unpkg.com/@spike.land/esm@0.4.33/dist/emotion-react.mjs";var c,f,w,g,p,u,S=async(t,r)=>(u=u||(await import("./session-44UP6OYH.mjs")).default,u(t,r)),L=async t=>(c=c||(await import("./formatter-LUAJ56NO.mjs")).formatter,await c(t));async function x(t){let r=document.getElementById("shadowEditor"),o=await(await import("./startMonaco-4UBCXQJ3.mjs")).default({language:"typescript",container:r,code:t.code,onChange:(n,i)=>y(n,i,t,++t.i)});t.editor=o(),window.monaco.languages.registerOnTypeFormattingEditProvider("typescript",{autoFormatTriggerCharacters:["}","{",")","(",";"],async provideOnTypeFormattingEdits(n){let i=await c(n.getValue());return[{range:n.getFullModelRange(),text:i}]}}),window.sess=t,t.monaco=window.monaco}async function k({monaco:t,editor:r}){if(!t)return[{messageText:"Error with the error checking. Try to reload!"}];let e=r.getModel(),a=await(await t.languages.typescript.getTypeScriptWorker())(e),n=e.uri.toString(),i=a.getSemanticDiagnostics(n),l=a.getCompilerOptionsDiagnostics(n),d=a.getSyntacticDiagnostics(n),s=await Promise.race([i,l,d]);return console.log(s),[]}async function y(t,r=null,e,o){e.changes.push(r),c=c||(await import("./formatter-LUAJ56NO.mjs")).formatter,w=w||(await import("./esbuildEsm-7JIFWDZW.mjs")).transform,f=w,window.sendChannel,e.errorText="";let{monaco:a}=e;try{let n=await c(t),i=await f(n),l=!1;if(i.length){if(o<e.i)return;try{if(g=g||(await import("./renderToString-PJKHEY26.mjs")).getHtmlAndCss,o<e.i)return;let s=await j(i),{html:m}=g(s);e.transpiled=i,e.html=m;let h=await U(i);e.setChild(v=>[...v,h]),e.children=h,l=!m,e.codeNonFormatted=t,p=p||(await import("./templates-VEGXOVRB.mjs")).getCss;let T=p(e),b=n;if(e.i!==o)return;e.saveCode&&await e.saveCode({transpiled:i,code:b,i:o,css:T,html:m}),a.editor.setTheme("vs-dark");return}catch(s){console.error("EXCEPTION"),console.log({e:s}),l=!0,console.error({restartError:l})}}if(e.i>o)return;let d=await k(e);if(e.i>o)return;l&&d.push({messageText:"Error while starting the app. Check the console!"}),d.length&&console.log({err:d}),a.editor.setTheme("vs-dark")}catch(n){a.editor.setTheme("vs-light"),setTimeout(()=>{a.editor.setTheme("hc-black")},50),e.errorText=n.message,console.error(n.message)}}var A=async({code:t})=>{let r={code:t,i:0,changes:[],saveCode:()=>{},setChild:()=>{}};await y(t,null,r),await R(r)};async function R(t,r,e,o){t.saveCode=o,t.children=null;let{renderPreviewWindow:a}=await import("./renderPreviewWindow-SX6AEFRJ.mjs");await a(t,r,e),e||await x(t)}async function U(t,r="window"){let e=r==="window"?t.replace("body{","#zbody{"):t,o=C(e),a=await import(o);return URL.revokeObjectURL(o),E(a.default)}function C(t){let r=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(r)}async function j(t,r="window"){let e=r==="window"?t.replace("body{","#zbody{"):t,o=C(e),a=(await import(o)).default;return URL.revokeObjectURL(o),a}export{S as initSession,L as prettier,R as quickStart,A as startFromCode,x as startMonacoWithSession};
//# sourceMappingURL=quickStart.mjs.map
