(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{173:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),c=(n(2),n(5)),s=n(28),o=n(0),u=n.n(o),i=n(76),l=n(18),p=n(17);function f(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t){var n,r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return r=e.sent,c=Array.from(new Uint8Array(r)),s=c.map((function(e){return("00"+e.toString(16)).slice(-2)})).join(""),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(){var e="";"undefined"!=typeof window&&(e=new URL(location.href).pathname.substr(1));var t,n=8===e.length&&(t=e,0===Object(s.a)(t.slice(0,8)).filter((function(e){return e<"0"||e>"f"})).length),r=u.a.useState(!1),o=r[0],d=r[1];return u.a.useEffect((function(){"undefined"!=typeof window&&(n?function(){var t=Object(c.a)(a.a.mark((function t(){var n,r,c,s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(i.a)(),t.prev=1,t.next=4,fetch("https://code.zed.vision/"+e);case 4:return n=t.sent,t.next=7,n.text();case 7:if(r=t.sent,console.log({data:r}),c=JSON.parse(r),s=c.uuid,console.log({uuid:s}),!s){t.next=27;break}return t.next=15,f(s);case 15:if(o=t.sent.substring(0,8),console.log({hash:o}),e!==o){t.next=24;break}return t.next=20,fetch("https://code.zed.vision/connect?uuid="+s);case 20:t.sent,location.href="https://zed.vision/code/",t.next=25;break;case 24:d(!0);case 25:t.next=28;break;case 27:d(!0);case 28:t.next=34;break;case 30:t.prev=30,t.t0=t.catch(1),console.error(t.t0),d(!0);case 34:case"end":return t.stop()}}),t,null,[[1,30]])})));return function(){return t.apply(this,arguments)}}()():d(!0))}),[]),u.a.createElement(u.a.Fragment,null,!0===o&&u.a.createElement(l.a,null,u.a.createElement(p.a,{title:"404: Not Found"}),u.a.createElement("h1",null,"This page is not a page: ",e),u.a.createElement("p",null,"Let's say, its a 404 page.")),!1===o&&u.a.createElement("div",null))}}}]);