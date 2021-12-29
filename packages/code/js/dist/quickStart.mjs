import{jsx as x}from"https://unpkg.com/@spike.land/esm@0.4.33/dist/emotion-react.mjs";var l,w,y,s,p,f,h,j=async(e,r)=>(h=h||(await import("./session-R5CID66K.mjs")).default,h(e,r)),O=async e=>(l=l||(await import("./formatter-LUAJ56NO.mjs")).formatter,await l(e));async function E(e){let r=document.getElementById("shadowEditor"),a=await(await import("./startMonaco-4UBCXQJ3.mjs")).default({language:"typescript",container:r,code:e.code,onChange:(o,i)=>T(o,i,e,++e.i)});e.editor=a(),window.monaco.languages.registerOnTypeFormattingEditProvider("typescript",{autoFormatTriggerCharacters:["}","{",")","(",";"],async provideOnTypeFormattingEdits(o){let i=await l(o.getValue());return[{range:o.getFullModelRange(),text:i}]}}),window.sess=e,e.monaco=window.monaco}async function k({monaco:e,editor:r}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=r.getModel(),n=await(await e.languages.typescript.getTypeScriptWorker())(t),o=t.uri.toString(),i=n.getSemanticDiagnostics(o),d=n.getCompilerOptionsDiagnostics(o),c=n.getSyntacticDiagnostics(o),g=await Promise.race([i,d,c]);return console.log(g),[]}async function T(e,r=null,t,a){t.changes.push(r),w=w||(await import("./data-NGXH4VJE.mjs")).saveCode,l=l||(await import("./formatter-LUAJ56NO.mjs")).formatter,s=s||(await import("./esbuildEsm-J5F7TKTE.mjs")).transform,y=s,window.sendChannel,t.errorText="";let{monaco:n}=t;try{let o=await l(e),i=await y(o),d=!1;if(i.length){if(a<t.i)return;try{if(p=p||(await import("./renderToString-PJKHEY26.mjs")).getHtmlAndCss,a<t.i)return;let g=await R(i),{html:m}=p(g);t.transpiled=i,t.html=m;let u=await S(i);t.setChild(C=>[...C,u]),t.children=u,d=!m,t.codeNonFormatted=e,f=f||(await import("./templates-ZH7YTJ5T.mjs")).getCss,f(t),await w(t,t.i),n.editor.setTheme("vs-dark");return}catch(g){console.log({e:g}),d=!0,console.error({restartError:d})}}if(t.i>a)return;let c=await k(t);if(t.i>a)return;if(d&&c.push({messageText:"Error while starting the app. Check the console!"}),c.length&&console.log({err:c}),c.length===0&&i.length){if(t.i>a)return;t.code=o,t.codeNonFormatted=e,w(t,a)}else{if(console.log({code:e,transpiled:i}),t.i>a)return;if(o.length<1e3&&t.code.length<1e3){let m=await(await import("https://ga.jspm.io/npm:@spike.land/shadb@0.4.15/dist/shaDB.mjs")).diff(t.code,o);if(m.c.length<=3){t.lastErrors=0;return}if(m.c.length==4){t.lastErrors=0,n.editor.setTheme("hc-black");return}}c&&c[0]&&c[0].messageText&&console.error(c[0].messageText.toString());return}n.editor.setTheme("vs-dark")}catch(o){n.editor.setTheme("vs-light"),setTimeout(()=>{n.editor.setTheme("hc-black")},50),t.errorText=o.message,console.error(o.message)}}var F=async({code:e})=>{let r={code:e,i:0,changes:[],setChild:()=>{}};await T(e,null,r),await v(r)};async function v(e,r,t){e.children=null;let{renderPreviewWindow:a}=await import("./renderPreviewWindow-SSB6Q5ZI.mjs");await a(e,r,t),t||await E(e)}async function S(e,r="window"){let t=r==="window"?e.replace("body{","#zbody{"):e,a=b(t),n=await import(a);return URL.revokeObjectURL(a),x(n.default)}function b(e){let r=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(r)}async function R(e,r="window"){let t=r==="window"?e.replace("body{","#zbody{"):e,a=b(t),n=(await import(a)).default;return URL.revokeObjectURL(a),n}export{j as initSession,O as prettier,v as quickStart,F as startFromCode,E as startMonacoWithSession};
//# sourceMappingURL=quickStart.mjs.map
