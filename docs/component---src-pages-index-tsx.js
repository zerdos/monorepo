(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{231:function(e,t,n){e.exports=n.p+"static/forkMe-1a2bcb7dd2c870c3afe5d50466500c18.png"},249:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return j}));var r=n(8),a=n(0),o=n(15),i=n(56),c=n(23),l=n(18),u=n(28),s=n(10),f=n(231),d=n.n(f),m=n(19),p=n.n(m),b=(n(9),n(20));function h(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname&&"0.0.0.0"!==window.location.hostname||!("serviceWorker"in navigator)){e.next=4;break}return navigator.serviceWorker.getRegistrations().then((function(e){for(var t,n=h(e);!(t=n()).done;){t.value.unregister()}})),e.abrupt("return");case 4:return e.next=6,navigator.serviceWorker.register("/service-worker.js",{updateViaCache:"imports",scope:"/"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Registration failed with "+e.t0);case 11:"serviceWorker"in navigator&&window.addEventListener("load",(function(){return v()}));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function w(){var e=Object(r.a)(["\n  margin-bottom: ",";\n"]);return w=function(){return e},e}function y(){var e=Object(r.a)(['\n  box-shadow: "none";\n']);return y=function(){return e},e}var E=Object(s.a)(o.Link)(y()),x=s.a.h3(w(),Object(u.b)(1/4)),j=(t.default=function(e){var t=e.data.allMdx.edges;return a.useEffect((function(){"undefined"!=typeof window&&v()}),[]),a.createElement(c.a,null,a.createElement(l.a,{title:"This is Zed vision"}),a.createElement("h1",null,"Hi, this is my playground"),a.createElement("a",{href:"https://github.com/zed-vision/monorepo"},a.createElement("img",{loading:"lazy",width:"149",height:"149",src:d.a,style:{position:"absolute",top:0,right:0},alt:"Fork me on GitHub"})),t.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return a.createElement("article",{key:t.fields.slug},a.createElement("header",null,a.createElement(x,null,a.createElement(E,{to:t.fields.slug},n)),a.createElement("small",null,t.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})),a.createElement(i.a,null))},"497448492")},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(8),a=n(0),o=n(10),i=n(28),c=n(57),l=n.n(c);function u(){var e=Object(r.a)(["\n  margin-right: ",";\n  margin-bottom: 0;\n  overflow: hidden;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n"]);return u=function(){return e},e}function s(){var e=Object(r.a)(["\n  margin-top: ",";\n  display: flex;\n  margin-bottom: ",";\n"]);return s=function(){return e},e}var f=o.a.div(s(),Object(i.b)(2.5),Object(i.b)(2.5)),d=o.a.div(u(),Object(i.b)(.5)),m=function(){return a.createElement(f,null,a.createElement(d,null,a.createElement("img",{alt:"Zoltan Erdos",src:l.a})),a.createElement("p",null,"Written by ",a.createElement("strong",null,"Zoltan Erdos"),"developer experience and software quality expert",a.createElement("br",null),a.createElement("a",{href:"https://twitter.com/ZoltanErdos"},"Follow me on Twitter")))}},57:function(e,t,n){e.exports=n.p+"static/zed-profile-pic-cd941e033fafca9e98b23dae7e5a0ccc.jpg"}}]);