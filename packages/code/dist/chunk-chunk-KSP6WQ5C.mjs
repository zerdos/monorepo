import{ok as h}from"./chunk-chunk-LTAZOJ6T.mjs";import{j as o}from"./chunk-chunk-UURPA34U.mjs";o();var f=Object.defineProperty,L=Object.getOwnPropertyDescriptor,x=Object.getOwnPropertyNames,E=Object.prototype.hasOwnProperty,_=(e,i,t,r)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of x(i))!E.call(e,s)&&s!==t&&f(e,s,{get:()=>i[s],enumerable:!(r=L(i,s))||r.enumerable});return e},y=(e,i,t)=>(_(e,i,"default"),t&&_(t,i,"default")),D="4.5.5",n={};y(n,h);var l=(e=>(e[e.None=0]="None",e[e.CommonJS=1]="CommonJS",e[e.AMD=2]="AMD",e[e.UMD=3]="UMD",e[e.System=4]="System",e[e.ES2015=5]="ES2015",e[e.ESNext=99]="ESNext",e))(l||{}),p=(e=>(e[e.None=0]="None",e[e.Preserve=1]="Preserve",e[e.React=2]="React",e[e.ReactNative=3]="ReactNative",e[e.ReactJSX=4]="ReactJSX",e[e.ReactJSXDev=5]="ReactJSXDev",e))(p||{}),c=(e=>(e[e.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",e[e.LineFeed=1]="LineFeed",e))(c||{}),b=(e=>(e[e.ES3=0]="ES3",e[e.ES5=1]="ES5",e[e.ES2015=2]="ES2015",e[e.ES2016=3]="ES2016",e[e.ES2017=4]="ES2017",e[e.ES2018=5]="ES2018",e[e.ES2019=6]="ES2019",e[e.ES2020=7]="ES2020",e[e.ESNext=99]="ESNext",e[e.JSON=100]="JSON",e[e.Latest=99]="Latest",e))(b||{}),v=(e=>(e[e.Classic=1]="Classic",e[e.NodeJs=2]="NodeJs",e))(v||{}),g=class{constructor(e,i,t,r){this._onDidChange=new n.Emitter;this._onDidExtraLibsChange=new n.Emitter;this._extraLibs=Object.create(null),this._removedExtraLibs=Object.create(null),this._eagerModelSync=!1,this.setCompilerOptions(e),this.setDiagnosticsOptions(i),this.setWorkerOptions(t),this.setInlayHintsOptions(r),this._onDidExtraLibsChangeTimeout=-1}get onDidChange(){return this._onDidChange.event}get onDidExtraLibsChange(){return this._onDidExtraLibsChange.event}get workerOptions(){return this._workerOptions}get inlayHintsOptions(){return this._inlayHintsOptions}getExtraLibs(){return this._extraLibs}addExtraLib(e,i){let t;if(typeof i=="undefined"?t=`ts:extralib-${Math.random().toString(36).substring(2,15)}`:t=i,this._extraLibs[t]&&this._extraLibs[t].content===e)return{dispose:()=>{}};let r=1;return this._removedExtraLibs[t]&&(r=this._removedExtraLibs[t]+1),this._extraLibs[t]&&(r=this._extraLibs[t].version+1),this._extraLibs[t]={content:e,version:r},this._fireOnDidExtraLibsChangeSoon(),{dispose:()=>{let s=this._extraLibs[t];!s||s.version===r&&(delete this._extraLibs[t],this._removedExtraLibs[t]=r,this._fireOnDidExtraLibsChangeSoon())}}}setExtraLibs(e){for(let i in this._extraLibs)this._removedExtraLibs[i]=this._extraLibs[i].version;if(this._extraLibs=Object.create(null),e&&e.length>0)for(let i of e){let t=i.filePath||`ts:extralib-${Math.random().toString(36).substring(2,15)}`,r=i.content,s=1;this._removedExtraLibs[t]&&(s=this._removedExtraLibs[t]+1),this._extraLibs[t]={content:r,version:s}}this._fireOnDidExtraLibsChangeSoon()}_fireOnDidExtraLibsChangeSoon(){this._onDidExtraLibsChangeTimeout===-1&&(this._onDidExtraLibsChangeTimeout=window.setTimeout(()=>{this._onDidExtraLibsChangeTimeout=-1,this._onDidExtraLibsChange.fire(void 0)},0))}getCompilerOptions(){return this._compilerOptions}setCompilerOptions(e){this._compilerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}getDiagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setWorkerOptions(e){this._workerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setInlayHintsOptions(e){this._inlayHintsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setMaximumWorkerIdleTime(e){}setEagerModelSync(e){this._eagerModelSync=e}getEagerModelSync(){return this._eagerModelSync}},S=D,u=new g({allowNonTsExtensions:!0,target:99},{noSemanticValidation:!1,noSyntaxValidation:!1,onlyVisible:!1},{},{}),O=new g({allowNonTsExtensions:!0,allowJs:!0,target:99},{noSemanticValidation:!0,noSyntaxValidation:!1,onlyVisible:!1},{},{}),d=()=>a().then(e=>e.getTypeScriptWorker()),m=()=>a().then(e=>e.getJavaScriptWorker());n.languages.typescript={ModuleKind:l,JsxEmit:p,NewLineKind:c,ScriptTarget:b,ModuleResolutionKind:v,typescriptVersion:S,typescriptDefaults:u,javascriptDefaults:O,getTypeScriptWorker:d,getJavaScriptWorker:m};function a(){return import("./chunk-tsMode-RELZIAHB.mjs")}n.languages.onLanguage("typescript",()=>a().then(e=>e.setupTypeScript(u)));n.languages.onLanguage("javascript",()=>a().then(e=>e.setupJavaScript(O)));export{u as a};
