import{jsx as x}from"https://unpkg.com/@spike.land/esm@0.4.33/dist/emotion-react.mjs";var f,m,y,g,h,p,s,j=async(e,r)=>(s=s||(await import("./session-24ZIX3LN.mjs")).default,s(e,r)),D=async e=>(f=f||(await import("./formatter-DZIXOK54.mjs")).formatter,await f(e));async function E(e){let r=document.getElementById("shadowEditor"),o=await(await import("./startMonaco-4UBCXQJ3.mjs")).default({language:"typescript",container:r,code:e.code,onChange:(a,i)=>C(a,i,e,++e.i)});e.editor=o(),window.monaco.languages.registerOnTypeFormattingEditProvider("typescript",{autoFormatTriggerCharacters:["}","{",")","(",";"],async provideOnTypeFormattingEdits(a){let i=await f(a.getValue());return[{range:a.getFullModelRange(),text:i}]}}),window.sess=e,e.monaco=window.monaco}async function O({monaco:e,editor:r}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=r.getModel(),n=await(await e.languages.typescript.getTypeScriptWorker())(t),a=t.uri.toString(),i=n.getSemanticDiagnostics(a),d=n.getCompilerOptionsDiagnostics(a),c=n.getSyntacticDiagnostics(a),l=await Promise.race([i,d,c]);return console.log(l),[]}async function C(e,r=null,t,o){if(t.changes.push(r),m=m||(await import("./data-NGXH4VJE.mjs")).saveCode,f=f||(await import("./formatter-DZIXOK54.mjs")).formatter,g=g||(await import("./esbuildEsm-J5F7TKTE.mjs")).transform,y=g,window.sendChannel){let a=(await import("https://unpkg.com/@spike.land/esm@0.4.33/dist/ipfs-only-hash.mjs")).default,i=await a.of(e);if(window.hashOfCode===window.hashOfStarterCode&&window.hashOfCode===i)return;window[i]=e;let d=await a.of(t.code);if(window[d]=t.code,window.hashOfCode!==i){let c=t.code,l=(await import("https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-create.mjs")).default,w=k(c,e,l);if(o<t.i)return;window.sendChannel.send({changes:r,i:t.i,hashOfCode:i,prevHash:d,codeDiff:w})}}t.errorText="";let{monaco:n}=t;try{let a=await f(e),i=await y(a),d=!1;if(i.length){if(o<t.i)return;try{if(h=h||(await import("./renderToString-PJKHEY26.mjs")).getHtmlAndCss,o<t.i)return;let l=await R(i),{html:w}=h(l);t.transpiled=i,t.html=w;let u=await v(i);t.setChild(b=>[...b,u]),t.children=u,d=!w,t.codeNonFormatted=e,p=p||(await import("./templates-ZH7YTJ5T.mjs")).getCss,p(t),await m(t,t.i),n.editor.setTheme("vs-dark");return}catch(l){console.log({e:l}),d=!0,console.error({restartError:d})}}if(t.i>o)return;let c=await O(t);if(t.i>o)return;if(d&&c.push({messageText:"Error while starting the app. Check the console!"}),c.length&&console.log({err:c}),c.length===0&&i.length){if(t.i>o)return;t.code=a,t.codeNonFormatted=e,m(t,o)}else{if(console.log({code:e,transpiled:i}),t.i>o)return;if(a.length<1e3&&t.code.length<1e3){let w=await(await import("https://ga.jspm.io/npm:@spike.land/shadb@0.4.15/dist/shaDB.mjs")).diff(t.code,a);if(w.c.length<=3){t.lastErrors=0;return}if(w.c.length==4){t.lastErrors=0,n.editor.setTheme("hc-black");return}}c&&c[0]&&c[0].messageText&&console.error(c[0].messageText.toString());return}n.editor.setTheme("vs-dark")}catch(a){n.editor.setTheme("vs-light"),setTimeout(()=>{n.editor.setTheme("hc-black")},50),t.errorText=a.message,console.error(a.message)}}var F=async({code:e})=>{let r={code:e,i:0,setChild:()=>{}};await C(e,null,r),await S(r)};async function S(e,r,t){e.children=null;let{renderPreviewWindow:o}=await import("./renderPreviewWindow-RKY2A7DC.mjs");if(await o(e,r,t),localStorage&&e){let{code:n,transpiled:a,html:i,css:d,i:c}=e;localStorage.setItem(`state-${e.room}`,JSON.stringify({code:n,transpiled:a,html:i,css:d,i:c}))}t||await E(e)}async function v(e,r="window"){let t=r==="window"?e.replace("body{","#zbody{"):e,o=T(t),n=await import(o);return URL.revokeObjectURL(o),x(n.default)}function k(e,r,t){return JSON.stringify(t(e,r))}function T(e){let r=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(r)}async function R(e,r="window"){let t=r==="window"?e.replace("body{","#zbody{"):e,o=T(t),n=(await import(o)).default;return URL.revokeObjectURL(o),n}export{j as initSession,D as prettier,S as quickStart,F as startFromCode,E as startMonacoWithSession};
//# sourceMappingURL=quickStart.mjs.map
