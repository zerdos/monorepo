(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{139:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),s=(n(3),n(5)),c=n(35),o=n(0),i=n.n(o),u=n(18),l=n(17),f=n(46);t.default=function(){var e="";"undefined"!=typeof window&&(e=new URL(location.href).pathname.substr(1));var t,n=8===e.length&&(t=e,0===Object(c.a)(t.slice(0,8)).filter((function(e){return e<"0"||e>"f"})).length),a=i.a.useState(!1),o=a[0],d=a[1];return i.a.useEffect((function(){"undefined"!=typeof window&&(n?function(){var t=Object(s.a)(r.a.mark((function t(){var n,a,s,c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://code.zed.vision/"+e);case 3:return n=t.sent,t.next=6,n.text();case 6:if(a=t.sent,s=JSON.parse(a),c=s.uuid,console.log({uuid:c}),!c){t.next=25;break}return t.next=13,Object(f.sha256)(c);case 13:if(o=t.sent.substring(0,8),console.log({hash:o}),e!==o){t.next=22;break}return t.next=18,fetch("https://code.zed.vision/connect?uuid="+c);case 18:t.sent,location.href="https://zed.vision/code/",t.next=23;break;case 22:d(!0);case 23:t.next=26;break;case 25:d(!0);case 26:t.next=32;break;case 28:t.prev=28,t.t0=t.catch(0),console.error(t.t0),d(!0);case 32:case"end":return t.stop()}}),t,null,[[0,28]])})));return function(){return t.apply(this,arguments)}}()():d(!0))}),[]),i.a.createElement(i.a.Fragment,null,!0===o&&i.a.createElement(u.a,null,i.a.createElement(l.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"This page is not a page: ",e),i.a.createElement("p",null,"Let's say, its a 404 page.")),!1===o&&i.a.createElement("div",null))}},34:function(e,t){e.exports=function(e,t){var n=0,a={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var r=a[n.id];r&&(delete a[n.id],n.error?r[1](Object.assign(Error(n.error.message),n.error)):r[0](n.result))}else{var s=document.createEvent("Event");s.initEvent(n.method,!1,!1),s.data=n.params,e.dispatchEvent(s)}})),t.forEach((function(t){e[t]=function(){var r=arguments;return new Promise((function(s,c){var o=++n;a[o]=[s,c],e.postMessage({type:"RPC",id:o,method:t,params:[].slice.call(r)})}))}}))}},46:function(e,t,n){var a=n(34),r=["sha256"];e.exports=function(){var e=new Worker(n.p+"built-sha256.d0c247.worker.js",{name:"built-sha256.[hash:6].worker.js"});return a(e,r),e}}}]);