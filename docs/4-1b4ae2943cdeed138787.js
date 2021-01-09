(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[4],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sha256", function() { return sha256; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
var sha256=/*#__PURE__*/function(){var _ref=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(x){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=Array;_context.t1=Uint8Array;_context.next=4;return crypto.subtle.digest("SHA-256",typeof x==="string"?new TextEncoder().encode(x):x);case 4:_context.t2=_context.sent;_context.t3=new _context.t1(_context.t2).slice(0,4);return _context.abrupt("return",_context.t0.from.call(_context.t0,_context.t3).map(function(b){return("00"+b.toString(16)).slice(-2);}).join(""));case 7:case"end":return _context.stop();}}},_callee);}));return function sha256(_x){return _ref.apply(this,arguments);};}();

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getDB", function() { return /* binding */ getDB; });

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /home/zed/z/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(2);

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5);

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(12);

// CONCATENATED MODULE: ../shadb/dist/vendor/idb.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(defineProperty["a" /* default */])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var instanceOfAny=function instanceOfAny(object,constructors){return constructors.some(function(c){return object instanceof c;});};var idbProxyableTypes;var cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes||(idbProxyableTypes=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]);}function getCursorAdvanceMethods(){return cursorAdvanceMethods||(cursorAdvanceMethods=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]);}var cursorRequestMap=new WeakMap();var transactionDoneMap=new WeakMap();var transactionStoreNamesMap=new WeakMap();var transformCache=new WeakMap();var reverseTransformCache=new WeakMap();function promisifyRequest(request){var promise=new Promise(function(resolve,reject){var unlisten=function unlisten(){request.removeEventListener("success",success);request.removeEventListener("error",error);};var success=function success(){resolve(wrap1(request.result));unlisten();};var error=function error(){reject(request.error);unlisten();};request.addEventListener("success",success);request.addEventListener("error",error);});promise.then(function(value){if(value instanceof IDBCursor){cursorRequestMap.set(value,request);}}).catch(function(){});reverseTransformCache.set(promise,request);return promise;}function cacheDonePromiseForTransaction(tx){if(transactionDoneMap.has(tx))return;var done=new Promise(function(resolve,reject){var unlisten=function unlisten(){tx.removeEventListener("complete",complete);tx.removeEventListener("error",error);tx.removeEventListener("abort",error);};var complete=function complete(){resolve();unlisten();};var error=function error(){reject(tx.error||new DOMException("AbortError","AbortError"));unlisten();};tx.addEventListener("complete",complete);tx.addEventListener("error",error);tx.addEventListener("abort",error);});transactionDoneMap.set(tx,done);}var idbProxyTraps={get:function get(target,prop,receiver){if(target instanceof IDBTransaction){if(prop==="done")return transactionDoneMap.get(target);if(prop==="objectStoreNames"){return target.objectStoreNames||transactionStoreNamesMap.get(target);}if(prop==="store"){return receiver.objectStoreNames[1]?undefined:receiver.objectStore(receiver.objectStoreNames[0]);}}return wrap1(target[prop]);},set:function set(target,prop,value){target[prop]=value;return true;},has:function has(target,prop){if(target instanceof IDBTransaction&&(prop==="done"||prop==="store")){return true;}return prop in target;}};function replaceTraps(callback){idbProxyTraps=callback(idbProxyTraps);}function wrapFunction(func){if(func===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)){return function(storeNames){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var tx=func.call.apply(func,[unwrap1(this),storeNames].concat(args));transactionStoreNamesMap.set(tx,storeNames.sort?storeNames.sort():[storeNames]);return wrap1(tx);};}if(getCursorAdvanceMethods().includes(func)){return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}func.apply(unwrap1(this),args);return wrap1(cursorRequestMap.get(this));};}return function(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return wrap1(func.apply(unwrap1(this),args));};}function transformCachableValue(value){if(typeof value==="function")return wrapFunction(value);if(value instanceof IDBTransaction)cacheDonePromiseForTransaction(value);if(instanceOfAny(value,getIdbProxyableTypes())){return new Proxy(value,idbProxyTraps);}return value;}function wrap1(value){if(value instanceof IDBRequest)return promisifyRequest(value);if(transformCache.has(value))return transformCache.get(value);var newValue=transformCachableValue(value);if(newValue!==value){transformCache.set(value,newValue);reverseTransformCache.set(newValue,value);}return newValue;}var unwrap1=function unwrap1(value){return reverseTransformCache.get(value);};var u=unwrap1,w=wrap1;function openDB1(name,version,_temp){var _ref=_temp===void 0?{}:_temp,blocked=_ref.blocked,upgrade=_ref.upgrade,blocking=_ref.blocking,terminated=_ref.terminated;var request=indexedDB.open(name,version);var openPromise=wrap1(request);if(upgrade){request.addEventListener("upgradeneeded",function(event){upgrade(wrap1(request.result),event.oldVersion,event.newVersion,wrap1(request.transaction));});}if(blocked)request.addEventListener("blocked",function(){return blocked();});openPromise.then(function(db){if(terminated)db.addEventListener("close",function(){return terminated();});if(blocking)db.addEventListener("versionchange",function(){return blocking();});}).catch(function(){});return openPromise;}function deleteDB1(name,_temp2){var _ref2=_temp2===void 0?{}:_temp2,blocked=_ref2.blocked;var request=indexedDB.deleteDatabase(name);if(blocked)request.addEventListener("blocked",function(){return blocked();});return wrap1(request).then(function(){return undefined;});}var readMethods=["get","getKey","getAll","getAllKeys","count"];var writeMethods=["put","add","delete","clear"];var cachedMethods=new Map();function getMethod(target,prop){if(!(target instanceof IDBDatabase&&!(prop in target)&&typeof prop==="string")){return;}if(cachedMethods.get(prop))return cachedMethods.get(prop);var targetFuncName=prop.replace(/FromIndex$/,"");var useIndex=prop!==targetFuncName;var isWrite=writeMethods.includes(targetFuncName);if(!(targetFuncName in(useIndex?IDBIndex:IDBObjectStore).prototype)||!(isWrite||readMethods.includes(targetFuncName))){return;}var method=/*#__PURE__*/function(){var _ref3=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(storeName){var _target;var tx,target1,_len4,args,_key4,_args=arguments;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:tx=this.transaction(storeName,isWrite?"readwrite":"readonly");target1=tx.store;for(_len4=_args.length,args=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){args[_key4-1]=_args[_key4];}if(useIndex)target1=target1.index(args.shift());_context.next=6;return Promise.all([(_target=target1)[targetFuncName].apply(_target,args),isWrite&&tx.done]);case 6:return _context.abrupt("return",_context.sent[0]);case 7:case"end":return _context.stop();}}},_callee,this);}));return function method(_x){return _ref3.apply(this,arguments);};}();cachedMethods.set(prop,method);return method;}replaceTraps(function(oldTraps){return _objectSpread(_objectSpread({},oldTraps),{},{get:function get(target,prop,receiver){return getMethod(target,prop)||oldTraps.get(target,prop,receiver);},has:function has(target,prop){return!!getMethod(target,prop)||oldTraps.has(target,prop);}});});
// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(28);

// CONCATENATED MODULE: ../shadb/dist/diff.js
var diff=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(str1,str2){var _yield$import,diffChars,_yield$import2,sha256,sha1Str1,res;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, 170));case 2:_yield$import=_context.sent;diffChars=_yield$import.diffChars;_context.next=6;return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 165));case 6:_yield$import2=_context.sent;sha256=_yield$import2.sha256;sha1Str1=sha256(str1);res=diffChars(str1,str2);_context.next=12;return sha1Str1;case 12:_context.t0=_context.sent;_context.t1=res.map(function(x){return x.added?x.value:x.removed?-x.count:x.count;});return _context.abrupt("return",{b:_context.t0,c:_context.t1});case 15:case"end":return _context.stop();}}},_callee);}));return function diff(_x,_x2){return _ref.apply(this,arguments);};}();var diff_isDiff=function isDiff(str){if(str.length<10){return false;}var isKey=Object(toConsumableArray["a" /* default */])(str.slice(0,8)).filter(function(x){return x<"0"||x>"f";}).length===0;var maybeInst=str.slice(8);if(isKey&&maybeInst[0]==="["&&maybeInst[maybeInst.length-1]==="]"){try{return JSON.parse(maybeInst).length>1;}catch(_a){return false;}}return false;};var assemble=function assemble(oldValue,instructions){var instArr=JSON.parse(instructions);var old=oldValue.slice();var ret="";instArr.forEach(function(element){if(Number(element)===element){var absNum=Math.abs(element);var currentString=old.slice(0,absNum);old=old.slice(absNum);if(element>0){ret+=String(currentString);}}else{ret+=String(element);}});return ret;};
// EXTERNAL MODULE: ../shadb/dist/sha256.js
var dist_sha256 = __webpack_require__(165);

// CONCATENATED MODULE: ../shadb/dist/getDbObj.js
var getDbObj_getDbObj=function getDbObj(db){var dbObj={get:function get(key,format){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var data,allData,text,keyOfDiff,instructions,oldValue;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(format===void 0){format="string";}_context.prev=1;_context.next=4;return db.get(key);case 4:data=_context.sent;if(data){_context.next=7;break;}return _context.abrupt("return",null);case 7:_context.next=12;break;case 9:_context.prev=9;_context.t0=_context["catch"](1);return _context.abrupt("return",null);case 12:if(!(format==="json")){_context.next=14;break;}return _context.abrupt("return",JSON.parse(data));case 14:_context.next=16;return data;case 16:allData=_context.sent;if(!(format==="string")){_context.next=29;break;}if(!(typeof allData==="string"&&format==="string")){_context.next=28;break;}text=allData;if(!diff_isDiff(text)){_context.next=27;break;}keyOfDiff=text.slice(0,8);instructions=text.slice(8);_context.next=25;return dbObj.get(keyOfDiff);case 25:oldValue=_context.sent;return _context.abrupt("return",assemble(oldValue,instructions));case 27:return _context.abrupt("return",allData);case 28:return _context.abrupt("return",new TextDecoder().decode(allData));case 29:return _context.abrupt("return",data);case 30:case"end":return _context.stop();}}},_callee,null,[[1,9]]);}))();},put:function put(key,val){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){var prev,oldKey,actualValue,prevValue,prevSha,diffObj,diffAsStr,str;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return dbObj.get(key);case 3:oldKey=_context2.sent;if(!(typeof oldKey==="string"&&typeof val==="string"&&oldKey.length===8&&oldKey!==val)){_context2.next=22;break;}_context2.next=7;return dbObj.get(val);case 7:actualValue=_context2.sent;_context2.next=10;return dbObj.get(oldKey);case 10:prevValue=_context2.sent;if(!(typeof prevValue==="string")){_context2.next=22;break;}_context2.next=14;return Object(dist_sha256["sha256"])(prevValue);case 14:prevSha=_context2.sent;if(!(prevSha===oldKey)){_context2.next=22;break;}_context2.next=18;return diff(actualValue,prevValue);case 18:diffObj=_context2.sent;diffAsStr=diffObj.b+JSON.stringify(diffObj.c);_context2.next=22;return dbObj.put(prevSha,diffAsStr);case 22:_context2.next=27;break;case 24:_context2.prev=24;_context2.t0=_context2["catch"](0);prev="";case 27:if(!(prev!==""&&val===prev)){_context2.next=29;break;}return _context2.abrupt("return",val);case 29:if(typeof val!=="string"){str=new TextDecoder().decode(val);}else{str=val;}_context2.next=32;return db.put(key,str);case 32:return _context2.abrupt("return",_context2.sent);case 33:case"end":return _context2.stop();}}},_callee2,null,[[0,24]]);}))();},delete:function _delete(key){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(){return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return db.delete(key);case 2:return _context3.abrupt("return",_context3.sent);case 3:case"end":return _context3.stop();}}},_callee3);}))();},clear:function clear(){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(){return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return db.clear();case 2:return _context4.abrupt("return",_context4.sent);case 3:case"end":return _context4.stop();}}},_callee4);}))();},keys:function keys(){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee5(){return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return db.getAllKeys();case 2:return _context5.abrupt("return",_context5.sent);case 3:case"end":return _context5.stop();}}},_callee5);}))();}};return dbObj;};
// CONCATENATED MODULE: ../shadb/dist/shaDB.js
function getDB(storeName){if(storeName===void 0){storeName="defaultStore";}return/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee6(){var dbPromise,keyVal;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:dbPromise=openDB1("zed-vision-alpha",1,{upgrade:function upgrade(db){db.createObjectStore(storeName);},blocked:function blocked(){},blocking:function blocking(){},terminated:function terminated(){}});keyVal={get:function get(key){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return dbPromise;case 2:return _context.abrupt("return",_context.sent.get(storeName,key));case 3:case"end":return _context.stop();}}},_callee);}))();},put:function put(key,val){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return dbPromise;case 2:return _context2.abrupt("return",_context2.sent.put(storeName,val,key));case 3:case"end":return _context2.stop();}}},_callee2);}))();},delete:function _delete(key){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(){return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return dbPromise;case 2:return _context3.abrupt("return",_context3.sent.delete(storeName,key));case 3:case"end":return _context3.stop();}}},_callee3);}))();},clear:function clear(){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(){return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return dbPromise;case 2:return _context4.abrupt("return",_context4.sent.clear(storeName));case 3:case"end":return _context4.stop();}}},_callee4);}))();},keys:function keys(){return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee5(){return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return dbPromise;case 2:return _context5.abrupt("return",_context5.sent.getAllKeys(storeName));case 3:case"end":return _context5.stop();}}},_callee5);}))();}};return _context6.abrupt("return",getDbObj_getDbObj(keyVal));case 3:case"end":return _context6.stop();}}},_callee6);}));}

/***/ })

}]);