/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-typescript version: 4.1.1(6e38d26095a96300916770736f29693752fa0659)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};define("vs/language/typescript/workerManager",["require","exports","./fillers/monaco-editor-core"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerManager=void 0;var r=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=n.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(n.editor.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}();t.WorkerManager=r})),define("vs/language/typescript/lib/lib.index",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.libFileSet=void 0,t.libFileSet={},t.libFileSet["lib.d.ts"]=!0,t.libFileSet["lib.dom.d.ts"]=!0,t.libFileSet["lib.dom.iterable.d.ts"]=!0,t.libFileSet["lib.es2015.collection.d.ts"]=!0,t.libFileSet["lib.es2015.core.d.ts"]=!0,t.libFileSet["lib.es2015.d.ts"]=!0,t.libFileSet["lib.es2015.generator.d.ts"]=!0,t.libFileSet["lib.es2015.iterable.d.ts"]=!0,t.libFileSet["lib.es2015.promise.d.ts"]=!0,t.libFileSet["lib.es2015.proxy.d.ts"]=!0,t.libFileSet["lib.es2015.reflect.d.ts"]=!0,t.libFileSet["lib.es2015.symbol.d.ts"]=!0,t.libFileSet["lib.es2015.symbol.wellknown.d.ts"]=!0,t.libFileSet["lib.es2016.array.include.d.ts"]=!0,t.libFileSet["lib.es2016.d.ts"]=!0,t.libFileSet["lib.es2016.full.d.ts"]=!0,t.libFileSet["lib.es2017.d.ts"]=!0,t.libFileSet["lib.es2017.full.d.ts"]=!0,t.libFileSet["lib.es2017.intl.d.ts"]=!0,t.libFileSet["lib.es2017.object.d.ts"]=!0,t.libFileSet["lib.es2017.sharedmemory.d.ts"]=!0,t.libFileSet["lib.es2017.string.d.ts"]=!0,t.libFileSet["lib.es2017.typedarrays.d.ts"]=!0,t.libFileSet["lib.es2018.asyncgenerator.d.ts"]=!0,t.libFileSet["lib.es2018.asynciterable.d.ts"]=!0,t.libFileSet["lib.es2018.d.ts"]=!0,t.libFileSet["lib.es2018.full.d.ts"]=!0,t.libFileSet["lib.es2018.intl.d.ts"]=!0,t.libFileSet["lib.es2018.promise.d.ts"]=!0,t.libFileSet["lib.es2018.regexp.d.ts"]=!0,t.libFileSet["lib.es2019.array.d.ts"]=!0,t.libFileSet["lib.es2019.d.ts"]=!0,t.libFileSet["lib.es2019.full.d.ts"]=!0,t.libFileSet["lib.es2019.object.d.ts"]=!0,t.libFileSet["lib.es2019.string.d.ts"]=!0,t.libFileSet["lib.es2019.symbol.d.ts"]=!0,t.libFileSet["lib.es2020.bigint.d.ts"]=!0,t.libFileSet["lib.es2020.d.ts"]=!0,t.libFileSet["lib.es2020.full.d.ts"]=!0,t.libFileSet["lib.es2020.intl.d.ts"]=!0,t.libFileSet["lib.es2020.promise.d.ts"]=!0,t.libFileSet["lib.es2020.sharedmemory.d.ts"]=!0,t.libFileSet["lib.es2020.string.d.ts"]=!0,t.libFileSet["lib.es2020.symbol.wellknown.d.ts"]=!0,t.libFileSet["lib.es5.d.ts"]=!0,t.libFileSet["lib.es6.d.ts"]=!0,t.libFileSet["lib.esnext.d.ts"]=!0,t.libFileSet["lib.esnext.full.d.ts"]=!0,t.libFileSet["lib.esnext.intl.d.ts"]=!0,t.libFileSet["lib.esnext.promise.d.ts"]=!0,t.libFileSet["lib.esnext.string.d.ts"]=!0,t.libFileSet["lib.esnext.weakref.d.ts"]=!0,t.libFileSet["lib.scripthost.d.ts"]=!0,t.libFileSet["lib.webworker.d.ts"]=!0,t.libFileSet["lib.webworker.importscripts.d.ts"]=!0,t.libFileSet["lib.webworker.iterable.d.ts"]=!0}));var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};define("vs/language/typescript/languageFeatures",["require","exports","./lib/lib.index","./fillers/monaco-editor-core"],(function(e,t,n,r){"use strict";var i;function o(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var s=0,a=e.next;s<a.length;s++){r+=o(a[s],t,n)}return r}function s(e){return e?e.map((function(e){return e.text})).join(""):""}Object.defineProperty(t,"__esModule",{value:!0}),t.RenameAdapter=t.CodeActionAdaptor=t.FormatOnTypeAdapter=t.FormatAdapter=t.FormatHelper=t.Kind=t.OutlineAdapter=t.ReferenceAdapter=t.DefinitionAdapter=t.OccurrencesAdapter=t.QuickInfoAdapter=t.SignatureHelpAdapter=t.SuggestAdapter=t.DiagnosticsAdapter=t.LibFiles=t.Adapter=t.flattenDiagnosticMessageText=void 0,function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(i||(i={})),t.flattenDiagnosticMessageText=o;var a=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}();t.Adapter=a;var l,u=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!n.libFileSet[e.path.slice(1)])},e.prototype.getOrCreateModel=function(e){var t=r.editor.getModel(e);return t||(this.isLibFile(e)&&this._hasFetchedLibFiles?r.editor.createModel(this._libFiles[e.path.slice(1)],"javascript",e):null)},e.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();t.LibFiles=u,function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(l||(l={}));var c=function(e){function t(t,n,i,o){var s=e.call(this,o)||this;s._libFiles=t,s._defaults=n,s._selector=i,s._disposables=[],s._listener=Object.create(null);var a=function(e){if(e.getModeId()===i){var t,n=e.onDidChangeContent((function(){clearTimeout(t),t=Number(setTimeout((function(){return s._doValidate(e)}),500))}));s._listener[e.uri.toString()]={dispose:function(){n.dispose(),clearTimeout(t)}},s._doValidate(e)}},l=function(e){r.editor.setModelMarkers(e,s._selector,[]);var t=e.uri.toString();s._listener[t]&&(s._listener[t].dispose(),delete s._listener[t])};s._disposables.push(r.editor.onDidCreateModel(a)),s._disposables.push(r.editor.onWillDisposeModel(l)),s._disposables.push(r.editor.onDidChangeModelLanguage((function(e){l(e.model),a(e.model)}))),s._disposables.push({dispose:function(){for(var e=0,t=r.editor.getModels();e<t.length;e++){var n=t[e];l(n)}}});var u=function(){for(var e=0,t=r.editor.getModels();e<t.length;e++){var n=t[e];l(n),a(n)}};return s._disposables.push(s._defaults.onDidChange(u)),s._disposables.push(s._defaults.onDidExtraLibsChange(u)),r.editor.getModels().forEach(a),s}return __extends(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i,o,s,a,l,u,c,d=this;return __generator(this,(function(p){switch(p.label){case 0:return[4,this._worker(e.uri)];case 1:return t=p.sent(),e.isDisposed()?[2]:(n=[],i=this._defaults.getDiagnosticsOptions(),o=i.noSyntaxValidation,s=i.noSemanticValidation,a=i.noSuggestionDiagnostics,o||n.push(t.getSyntacticDiagnostics(e.uri.toString())),s||n.push(t.getSemanticDiagnostics(e.uri.toString())),a||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(l=p.sent())||e.isDisposed()?[2]:(u=l.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),c=u.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?r.Uri.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(c)]);case 3:return p.sent(),e.isDisposed()?[2]:(r.editor.setModelMarkers(e,this._selector,u.map((function(t){return d._convertDiagnostics(e,t)}))),[2])}}))}))},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,i=t.length||1,s=e.getPositionAt(n),a=s.lineNumber,l=s.column,u=e.getPositionAt(n+i),c=u.lineNumber,d=u.column,p=[];return t.reportsUnnecessary&&p.push(r.MarkerTag.Unnecessary),t.reportsDeprecated&&p.push(r.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:l,endLineNumber:c,endColumn:d,message:o(t.messageText,"\n"),code:t.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var n=this;if(t){var i=[];return t.forEach((function(t){var s=e;if(t.file){var a=r.Uri.parse(t.file.fileName);s=n._libFiles.getOrCreateModel(a)}if(s){var l=t.start||0,u=t.length||1,c=s.getPositionAt(l),d=c.lineNumber,p=c.column,f=s.getPositionAt(l+u),g=f.lineNumber,b=f.column;i.push({resource:s.uri,startLineNumber:d,startColumn:p,endLineNumber:g,endColumn:b,message:o(t.messageText,"\n")})}})),i}},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case l.Error:return r.MarkerSeverity.Error;case l.Message:return r.MarkerSeverity.Info;case l.Warning:return r.MarkerSeverity.Warning;case l.Suggestion:return r.MarkerSeverity.Hint}return r.MarkerSeverity.Info},t}(a);t.DiagnosticsAdapter=c;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,i,o){return __awaiter(this,void 0,void 0,(function(){var i,o,s,a,l;return __generator(this,(function(u){switch(u.label){case 0:return i=e.getWordUntilPosition(n),o=new r.Range(n.lineNumber,i.startColumn,n.lineNumber,i.endColumn),s=e.uri,a=e.getOffsetAt(n),[4,this._worker(s)];case 1:return[4,u.sent().getCompletionsAtPosition(s.toString(),a)];case 2:return!(l=u.sent())||e.isDisposed()?[2]:[2,{suggestions:l.entries.map((function(i){var l,u=o;if(i.replacementSpan){var c=e.getPositionAt(i.replacementSpan.start),d=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);u=new r.Range(c.lineNumber,c.column,d.lineNumber,d.column)}var p=[];return-1!==(null===(l=i.kindModifiers)||void 0===l?void 0:l.indexOf("deprecated"))&&p.push(r.languages.CompletionItemTag.Deprecated),{uri:s,position:n,offset:a,range:u,label:i.name,insertText:i.name,sortText:i.sortText,kind:t.convertKind(i.kind),tags:p}}))}]}}))}))},t.prototype.resolveCompletionItem=function(e,n){return __awaiter(this,void 0,void 0,(function(){var n,r,i,o,a;return __generator(this,(function(l){switch(l.label){case 0:return r=(n=e).uri,i=n.position,o=n.offset,[4,this._worker(r)];case 1:return[4,l.sent().getCompletionEntryDetails(r.toString(),o,n.label)];case 2:return(a=l.sent())?[2,{uri:r,position:i,label:a.name,kind:t.convertKind(a.kind),detail:s(a.displayParts),documentation:{value:t.createDocumentationString(a)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case v.primitiveType:case v.keyword:return r.languages.CompletionItemKind.Keyword;case v.variable:case v.localVariable:return r.languages.CompletionItemKind.Variable;case v.memberVariable:case v.memberGetAccessor:case v.memberSetAccessor:return r.languages.CompletionItemKind.Field;case v.function:case v.memberFunction:case v.constructSignature:case v.callSignature:case v.indexSignature:return r.languages.CompletionItemKind.Function;case v.enum:return r.languages.CompletionItemKind.Enum;case v.module:return r.languages.CompletionItemKind.Module;case v.class:return r.languages.CompletionItemKind.Class;case v.interface:return r.languages.CompletionItemKind.Interface;case v.warning:return r.languages.CompletionItemKind.File}return r.languages.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=s(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++){t+="\n\n"+p(r[n])}return t},t}(a);function p(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text.split(" "),r=n[0],i=n.slice(1);t+="`"+r+"`",i.length>0&&(t+=" — "+i.join(" "))}else e.text&&(t+=" — "+e.text);return t}t.SuggestAdapter=d;var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return __extends(t,e),t.prototype.provideSignatureHelp=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,r,i,o;return __generator(this,(function(a){switch(a.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,a.sent().getSignatureHelpItems(n.toString(),r)];case 2:return!(i=a.sent())||e.isDisposed()?[2]:(o={activeSignature:i.selectedItemIndex,activeParameter:i.argumentIndex,signatures:[]},i.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:s(e.documentation)},t.label+=s(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var o=s(n.displayParts),a={label:o,documentation:{value:s(n.documentation)}};t.label+=o,t.parameters.push(a),r<i.length-1&&(t.label+=s(e.separatorDisplayParts))})),t.label+=s(e.suffixDisplayParts),o.signatures.push(t)})),[2,{value:o,dispose:function(){}}])}}))}))},t}(a);t.SignatureHelpAdapter=f;var g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideHover=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,r,i,o,a,l;return __generator(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,u.sent().getQuickInfoAtPosition(n.toString(),r)];case 2:return!(i=u.sent())||e.isDisposed()?[2]:(o=s(i.documentation),a=i.tags?i.tags.map((function(e){return p(e)})).join("  \n\n"):"",l=s(i.displayParts),[2,{range:this._textSpanToRange(e,i.textSpan),contents:[{value:"```typescript\n"+l+"\n```\n"},{value:o+(a?"\n\n"+a:"")}]}])}}))}))},t}(a);t.QuickInfoAdapter=g;var b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,i,o,s=this;return __generator(this,(function(a){switch(a.label){case 0:return n=e.uri,i=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,a.sent().getOccurrencesAtPosition(n.toString(),i)];case 2:return!(o=a.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return{range:s._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?r.languages.DocumentHighlightKind.Write:r.languages.DocumentHighlightKind.Text}}))]}}))}))},t}(a);t.OccurrencesAdapter=b;var h=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return __extends(t,e),t.prototype.provideDefinition=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,i,o,s,a,l,u,c,d;return __generator(this,(function(p){switch(p.label){case 0:return n=e.uri,i=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,p.sent().getDefinitionAtPosition(n.toString(),i)];case 2:return!(o=p.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return r.Uri.parse(e.fileName)})))];case 3:if(p.sent(),e.isDisposed())return[2];for(s=[],a=0,l=o;a<l.length;a++)u=l[a],c=r.Uri.parse(u.fileName),(d=this._libFiles.getOrCreateModel(c))&&s.push({uri:c,range:this._textSpanToRange(d,u.textSpan)});return[2,s]}}))}))},t}(a);t.DefinitionAdapter=h;var m=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return __extends(t,e),t.prototype.provideReferences=function(e,t,n,i){return __awaiter(this,void 0,void 0,(function(){var n,i,o,s,a,l,u,c,d;return __generator(this,(function(p){switch(p.label){case 0:return n=e.uri,i=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,p.sent().getReferencesAtPosition(n.toString(),i)];case 2:return!(o=p.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return r.Uri.parse(e.fileName)})))];case 3:if(p.sent(),e.isDisposed())return[2];for(s=[],a=0,l=o;a<l.length;a++)u=l[a],c=r.Uri.parse(u.fileName),(d=this._libFiles.getOrCreateModel(c))&&s.push({uri:c,range:this._textSpanToRange(d,u.textSpan)});return[2,s]}}))}))},t}(a);t.ReferenceAdapter=m;var _=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentSymbols=function(e,t){return __awaiter(this,void 0,void 0,(function(){var t,n,i,o,s=this;return __generator(this,(function(a){switch(a.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return[4,a.sent().getNavigationBarItems(t.toString())];case 2:return!(n=a.sent())||e.isDisposed()?[2]:(i=function(t,n,o){var a={name:n.text,detail:"",kind:S[n.kind]||r.languages.SymbolKind.Variable,range:s._textSpanToRange(e,n.spans[0]),selectionRange:s._textSpanToRange(e,n.spans[0]),tags:[],containerName:o};if(n.childItems&&n.childItems.length>0)for(var l=0,u=n.childItems;l<u.length;l++){var c=u[l];i(t,c,a.name)}t.push(a)},o=[],n.forEach((function(e){return i(o,e)})),[2,o])}}))}))},t}(a);t.OutlineAdapter=_;var v=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}();t.Kind=v;var S=Object.create(null);S[v.module]=r.languages.SymbolKind.Module,S[v.class]=r.languages.SymbolKind.Class,S[v.enum]=r.languages.SymbolKind.Enum,S[v.interface]=r.languages.SymbolKind.Interface,S[v.memberFunction]=r.languages.SymbolKind.Method,S[v.memberVariable]=r.languages.SymbolKind.Property,S[v.memberGetAccessor]=r.languages.SymbolKind.Property,S[v.memberSetAccessor]=r.languages.SymbolKind.Property,S[v.variable]=r.languages.SymbolKind.Variable,S[v.const]=r.languages.SymbolKind.Variable,S[v.localVariable]=r.languages.SymbolKind.Variable,S[v.variable]=r.languages.SymbolKind.Variable,S[v.function]=r.languages.SymbolKind.Function,S[v.localFunction]=r.languages.SymbolKind.Function;var y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:i.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(a);t.FormatHelper=y;var w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return __awaiter(this,void 0,void 0,(function(){var r,i,o,s,a=this;return __generator(this,(function(l){switch(l.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return[4,l.sent().getFormattingEditsForRange(r.toString(),i,o,y._convertOptions(n))];case 2:return!(s=l.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return a._convertTextChanges(e,t)}))]}}))}))},t}(y);t.FormatAdapter=w;var F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return __awaiter(this,void 0,void 0,(function(){var i,o,s,a=this;return __generator(this,(function(l){switch(l.label){case 0:return i=e.uri,o=e.getOffsetAt(t),[4,this._worker(i)];case 1:return[4,l.sent().getFormattingEditsAfterKeystroke(i.toString(),o,n,y._convertOptions(r))];case 2:return!(s=l.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return a._convertTextChanges(e,t)}))]}}))}))},t}(y);t.FormatOnTypeAdapter=F;var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return __awaiter(this,void 0,void 0,(function(){var r,i,o,s,a,l,u=this;return __generator(this,(function(c){switch(c.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=y._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return[4,c.sent().getCodeFixesAtPosition(r.toString(),i,o,a,s)];case 2:return!(l=c.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:l.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return u._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,o=n.changes;i<o.length;i++)for(var s=0,a=o[i].textChanges;s<a.length;s++){var l=a[s];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,l.span),text:l.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(y);t.CodeActionAdaptor=x;var k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideRenameEdits=function(e,t,n,i){return __awaiter(this,void 0,void 0,(function(){var i,o,s,a,l,u,c,d,p,f;return __generator(this,(function(g){switch(g.label){case 0:return i=e.uri,o=i.toString(),s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return[4,(a=g.sent()).getRenameInfo(o,s,{allowRenameOfImportPath:!1})];case 2:if(!1===(l=g.sent()).canRename)return[2,{edits:[],rejectReason:l.localizedErrorMessage}];if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(o,s,!1,!1,!1)];case 3:if(!(u=g.sent())||e.isDisposed())return[2];for(c=[],d=0,p=u;d<p.length;d++)f=p[d],c.push({resource:r.Uri.parse(f.fileName),edit:{range:this._textSpanToRange(e,f.textSpan),text:n}});return[2,{edits:c}]}}))}))},t}(a);t.RenameAdapter=k})),define("vs/language/typescript/tsMode",["require","exports","./workerManager","./languageFeatures","./fillers/monaco-editor-core"],(function(e,t,n,r,i){"use strict";var o,s;function a(e,t){var o=new n.WorkerManager(t,e),s=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.getLanguageServiceWorker.apply(o,e)},a=new r.LibFiles(s);return i.languages.registerCompletionItemProvider(t,new r.SuggestAdapter(s)),i.languages.registerSignatureHelpProvider(t,new r.SignatureHelpAdapter(s)),i.languages.registerHoverProvider(t,new r.QuickInfoAdapter(s)),i.languages.registerDocumentHighlightProvider(t,new r.OccurrencesAdapter(s)),i.languages.registerDefinitionProvider(t,new r.DefinitionAdapter(a,s)),i.languages.registerReferenceProvider(t,new r.ReferenceAdapter(a,s)),i.languages.registerDocumentSymbolProvider(t,new r.OutlineAdapter(s)),i.languages.registerDocumentRangeFormattingEditProvider(t,new r.FormatAdapter(s)),i.languages.registerOnTypeFormattingEditProvider(t,new r.FormatOnTypeAdapter(s)),i.languages.registerCodeActionProvider(t,new r.CodeActionAdaptor(s)),i.languages.registerRenameProvider(t,new r.RenameAdapter(s)),new r.DiagnosticsAdapter(a,e,t,s),s}Object.defineProperty(t,"__esModule",{value:!0}),t.getTypeScriptWorker=t.getJavaScriptWorker=t.setupJavaScript=t.setupTypeScript=void 0,t.setupTypeScript=function(e){s=a(e,"typescript")},t.setupJavaScript=function(e){o=a(e,"javascript")},t.getJavaScriptWorker=function(){return new Promise((function(e,t){if(!o)return t("JavaScript not registered!");e(o)}))},t.getTypeScriptWorker=function(){return new Promise((function(e,t){if(!s)return t("TypeScript not registered!");e(s)}))}}));