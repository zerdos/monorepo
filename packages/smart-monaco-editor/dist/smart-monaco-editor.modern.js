function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const t=(e,t=[])=>{if("https://"===e.slice(0,8))return window.document.head.querySelector(`script[src="${e}"]`)||new Promise(function(o,n){const s=window.document.createElement("script");s.src=e,s.type="application/javascript",s.onload=()=>{0===t.length&&o(window);const e={};t.forEach(t=>Object.assign(e,window[t])),o(e)},s.onerror=n,window.document.head.appendChild(s)})};export default async({onChange:o,code:n,language:s,options:i})=>{const{document:a}=window;let d=a.getElementById("container");d||(d=a.createElement("container"),d.id="container",a.body.appendChild(d));const c="typescript"===s?"file:///main.tsx":"file:///main.html";if("undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)){const e=window.document.createElement("div");e.id="ace",window.document.body.appendChild(e),await t("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.min.js"),"typescript"===s?await t("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-typescript.min.js"):await t("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-html.min.js"),await t("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/theme-monokai.min.js"),window.document.getElementById("ace").style.setProperty("display","block"),d.style.setProperty("display","none");const o=window.ace.edit("ace");o.getSession().setMode("ace/mode/typescript");const i=e=>setTimeout(()=>{const t=ace.edit("ace");"ace/theme/monokai "!==t.getTheme()&&(t.setOptions({fontSize:"14pt"}),t.setTheme("ace/theme/monokai"),i(2*e))},e);i(100),o.setValue(n),o.blur()}const r=await(async()=>{const{require:e}=await t("https://unpkg.com/monaco-editor@0.21.2/min/vs/loader.js");return e.config({paths:{vs:"https://unpkg.com/monaco-editor@0.21.2/min/vs"}}),await new Promise(t=>e(["vs/editor/editor.main"],e=>t(e)))})();let p;try{p=r.editor.getModel(c),p.getValue()!==n&&p.setValue(n)}catch(e){p=await r.editor.createModel(n,s,r.Uri.parse(c))}const l={monaco:r,editor:r.editor.create(window.document.getElementById("container"),e({formatOnType:!1,scrollbar:{horizontal:"hidden",verticalHasArrows:!0,verticalScrollbarSize:20},minimap:{enabled:!1},folding:!1,glyphMargin:!1,wordWrap:"off",mouseWheelZoom:!1,wordWrapColumn:80,useTabStops:!1,dragAndDrop:!1,disableLayerHinting:!0,formatOnPaste:!1,disableMonospaceOptimizations:!0,showUnused:!0,automaticLayout:!0,scrollBeyondLastLine:!1,autoIndent:"full",accessibilitySupport:"off",autoClosingQuotes:"beforeWhitespace",padding:{bottom:300},lineNumbers:"on",autoClosingBrackets:"beforeWhitespace",autoClosingOvertype:"auto",suggest:{},codeLens:!0,autoSurround:"languageDefined",trimAutoWhitespace:!1,codeActionsOnSaveTimeout:100,model:p,value:n,language:s,theme:"vs-dark"},i))};if(l.editor.onDidChangeModelContent(()=>o(l.editor.getValue())),aceEditor&&aceEditor.session.on("change",function(){const e=aceEditor.getValue();l.editor.setValue(e),o(e)}),aceEditor&&a.getElementById("container").replaceWith(a.getElementById("ace")),l.monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSuggestionDiagnostics:!0,noSemanticValidation:!0,noSyntaxValidation:!0}),"typescript"===s){const e=[{name:"react",url:"https://unpkg.com/@types/react@17.0.0/index.d.ts",depend:["global","csstype","react-dom","prop-types"]},{name:"global",url:"https://unpkg.com/@types/react@17.0.0/global.d.ts",depend:[]},{name:"prop-types",url:"https://unpkg.com/@types/prop-types@15.7.3/index.d.ts",depend:[]},{name:"react-dom",url:"https://unpkg.com/@types/react-dom@17.0.0/index.d.ts",depend:[]},{name:"csstype",url:"https://unpkg.com/csstype@3.0.5/index.d.ts",depend:[]},{name:"@emotion/styled/base.d.ts",url:"https://unpkg.com/@emotion/styled@11.0.0/types/base.d.ts",depend:["@emotion/react","@emotion/serialize","react"]},{name:"@emotion/styled/index.d.ts",url:"https://unpkg.com/@emotion/styled@11.0.0/types/index.d.ts",depend:["@emotion/react","@emotion/serialize","react"]},{name:"@emotion/cache/index.d.ts",url:"https://unpkg.com/@emotion/cache@11.0.0/types/index.d.ts",depend:["@emotion/utils"]},{name:"@emotion/react/index.d.ts",url:"https://unpkg.com/@emotion/react@11.1.3/types/index.d.ts",depend:["@emotion/cache"]},{name:"@emotion/react/jsx-namespace.d.ts",url:"https://unpkg.com/@emotion/react@11.1.3/types/jsx-namespace.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/css-prop.d.ts",url:"https://unpkg.com/@emotion/react@11.1.3/types/css-prop.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/helper.d.ts",url:"https://unpkg.com/@emotion/react@11.1.3/types/helper.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/theming.d.ts",url:"https://unpkg.com/@emotion/react@11.1.3/types/theming.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/serialize/index.d.ts",url:"https://unpkg.com/@emotion/serialize@1.0.0/types/index.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/utils/index.d.ts",url:"https://unpkg.com/@emotion/utils@1.0.0/types/index.d.ts",depend:[]},{name:"framer-motion",url:"https://unpkg.com/framer-motion@3.1.1/dist/framer-motion.d.ts",depend:[]},{name:"popmotion",url:"https://unpkg.com/popmotion@9.0.2/lib/index.d.ts"},{name:"@zedvision/qrious/index.d.ts",url:"https://unpkg.com/@zedvision/qrious@8.5.7/dist/qrious.d.ts"}].map(({name:e,url:t})=>(async()=>l.monaco.languages.typescript.typescriptDefaults.addExtraLib(await(await fetch(t)).text(),e.includes("@")?`file:///node_modules/${e}`:`file:///node_modules/@types/${e}/index.d.ts`))());return l.monaco.languages.typescript.typescriptDefaults.setCompilerOptions({target:l.monaco.languages.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0,allowUmdGlobalAccess:!0,strict:!0,allowJs:!0,noEmitOnError:!0,allowSyntheticDefaultImports:!0,moduleResolution:l.monaco.languages.typescript.ModuleResolutionKind.Nodejs,module:l.monaco.languages.typescript.ModuleKind.CommonJS,noEmit:!0,typeRoots:["node_modules/@types"],jsx:"react-jsx",esModuleInterop:!0}),await Promise.all(e),l.monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSuggestionDiagnostics:!1,noSemanticValidation:!1,noSyntaxValidation:!1}),l}};
//# sourceMappingURL=smart-monaco-editor.modern.js.map
