(()=>{var e,r,t,n,o={84034:(e,r,t)=>{"use strict";var n=t(23716);function o(e,r,t,n,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void t(e)}a.done?r(c):Promise.resolve(c).then(n,o)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,i){var u=e.apply(r,t);function a(e){o(u,n,i,a,c,"next",e)}function c(e){o(u,n,i,a,c,"throw",e)}a(void 0)}))}}function u(e){var r,t;function n(r,t){try{var i=e[r](t),u=i.value,a=u instanceof c;Promise.resolve(a?u.wrapped:u).then((function(e){a?n("return"===r?"return":"next",e):o(i.done?"return":"normal",e)}),(function(e){n("throw",e)}))}catch(e){o("throw",e)}}function o(e,o){switch(e){case"return":r.resolve({value:o,done:!0});break;case"throw":r.reject(o);break;default:r.resolve({value:o,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(e,o){return new Promise((function(i,u){var a={key:e,arg:o,resolve:i,reject:u,next:null};t?t=t.next=a:(r=t=a,n(e,o))}))},"function"!=typeof e.return&&(this.return=void 0)}function a(e){return new c(e)}function c(e){this.wrapped=e}function f(e,r){var t={},n=!1;function o(t,o){return n=!0,o=new Promise((function(r){r(e[t](o))})),{done:!1,value:r(o)}}return t["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},t.next=function(e){return n?(n=!1,e):o("next",e)},"function"==typeof e.throw&&(t.throw=function(e){if(n)throw n=!1,e;return o("throw",e)}),"function"==typeof e.return&&(t.return=function(e){return n?(n=!1,e):o("return",e)}),t}function l(e){var r,t,n,o=2;for("undefined"!=typeof Symbol&&(t=Symbol.asyncIterator,n=Symbol.iterator);o--;){if(t&&null!=(r=e[t]))return r.call(e);if(n&&null!=(r=e[n]))return new s(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function s(e){function r(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var r=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:r}}))}return s=function(e){this.s=e,this.n=e.next},s.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(e){var t=this.s.return;return void 0===t?Promise.resolve({value:e,done:!0}):r(t.apply(this.s,arguments))},throw:function(e){var t=this.s.return;return void 0===t?Promise.reject(e):r(t.apply(this.s,arguments))}},new s(e)}u.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},u.prototype.next=function(e){return this._invoke("next",e)},u.prototype.throw=function(e){return this._invoke("throw",e)},u.prototype.return=function(e){return this._invoke("return",e)};var{create:v}=t(42663),{Server:p,IPFSService:y}=t(77728);n.info("hello world");var h=function(){var e=i((function*(){try{var e=d(self,"connect"),r=yield v();yield r.add({content:"hello world"});var t=new y(r),o=new p(t);self.server=o,self.ipfs=r;var i,u=!1,a=!1;try{for(var c,f=l(e);u=!(c=yield f.next()).done;u=!1){var s=c.value.ports[0];s&&o.connect(s)}}catch(e){a=!0,i=e}finally{try{u&&null!=f.return&&(yield f.return())}finally{if(a)throw i}}}catch(e){n.error(e)}}));return function(){return e.apply(this,arguments)}}(),d=function(e,r,t){var n,o=[],c=new Promise((e=>n=e)),s=e=>{o.push(e),n()},v=function(){var e=i((function*(){return yield c,c=new Promise((e=>n=e)),o.splice(0)}));return function(){return e.apply(this,arguments)}}(),p=function(){var n,o=(n=function*(){try{for(;;)yield*f(l(yield a(v())),a)}finally{e.removeEventListener(r,s,t)}},function(){return new u(n.apply(this,arguments))});return function(){return o.apply(this,arguments)}}();return e.addEventListener(r,s,t),p()};h()},10868:()=>{},77695:()=>{},75477:()=>{},67129:()=>{},81740:()=>{},82345:()=>{},55897:()=>{},15215:()=>{},21753:()=>{},35863:()=>{},47573:()=>{},95942:()=>{},74854:()=>{},66602:()=>{}},i={};function u(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={exports:{}};return o[e].call(t.exports,t,t.exports,u),t.exports}u.m=o,u.x=()=>{var e=u.O(void 0,[662,502],(()=>u(84034)));return u.O(e)},e=[],u.O=(r,t,n,o)=>{if(!t){var i=1/0;for(l=0;l<e.length;l++){for(var[t,n,o]=e[l],a=!0,c=0;c<t.length;c++)(!1&o||i>=o)&&Object.keys(u.O).every((e=>u.O[e](t[c])))?t.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var f=n();void 0!==f&&(r=f)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,n,o]},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var i={};r=r||[null,t({}),t([]),t(t)];for(var a=2&n&&e;"object"==typeof a&&!~r.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((r=>i[r]=()=>e[r]));return i.default=()=>e,u.d(o,i),o},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+".js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",(()=>{var e={277:1};u.f.i=(r,t)=>{e[r]||importScripts(u.p+u.u(r))};var r=globalThis.webpackChunkexample_browser_service_worker=globalThis.webpackChunkexample_browser_service_worker||[],t=r.push.bind(r);r.push=r=>{var[n,o,i]=r;for(var a in o)u.o(o,a)&&(u.m[a]=o[a]);for(i&&i(u);n.length;)e[n.pop()]=1;t(r)}})(),n=u.x,u.x=()=>Promise.all([u.e(662),u.e(502)]).then(n),u.x()})();