(this.webpackJsonp=this.webpackJsonp||[]).push([[14],{160:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(0),c=n(14),a=n(47),i=n(18),u=n(17),l=n(26),f=n(161),p=n(28),s=n(81),m=n(39);function b(){var t=Object(r.a)(["\n  margin-bottom: ",";\n"]);return b=function(){return t},t}function d(){var t=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  display: block;\n  margin-bottom: ",";\n"]);return d=function(){return t},t}function y(){var t=Object(r.a)(["\n  margin-top: ",";\n  margin-bottom: 0;\n"]);return y=function(){return t},t}var v={pre:function(t){return o.createElement("div",t)},code:s.a},g=p.a.h1(y(),Object(l.b)(1)),O=Object(l.c)(.2),h=O.fontSize,E=O.lineHeight,j=p.a.p(d(),h,E,Object(l.b)(1)),x=p.a.hr(b(),Object(l.b)(1));e.default=function(t){var e=t.data,n=t.pageContext,r=e.mdx,l=n.previous,p=n.next,s=function(){return o.createElement(m.MDXProvider,{components:v},o.createElement(f.MDXRenderer,null,r.body))};return o.createElement(o.Fragment,null,o.createElement(i.a,null,o.createElement(u.a,{title:r.frontmatter.title,description:r.frontmatter.description||r.excerpt}),o.createElement("header",null,o.createElement(g,null,r.frontmatter.title),o.createElement(j,null,r.frontmatter.date)),o.createElement(s,null),o.createElement(x,null),o.createElement("footer",null,o.createElement(a.a,null)),o.createElement("nav",null,o.createElement("ul",null,l&&o.createElement("li",null,o.createElement(c.Link,{to:l.fields.slug,rel:"prev"},"← ",l.frontmatter.title)),p&&o.createElement("li",null,o.createElement(c.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))}},161:function(t,e,n){var r=n(162);t.exports={MDXRenderer:r}},162:function(t,e,n){var r=n(163),o=n(166),c=n(171),a=n(65);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n(0),f=n(39).mdx,p=n(64).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,c=a(t,["scope","children"]),i=p(e),s=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:f},i),e=Object.keys(t),c=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(c)))}),[n,e]);return l.createElement(s,u({},c))}},163:function(t,e,n){var r=n(164),o=n(165);function c(e,n,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c},164:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},165:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},166:function(t,e,n){var r=n(167),o=n(168),c=n(169),a=n(170);t.exports=function(t){return r(t)||o(t)||c(t)||a()}},167:function(t,e,n){var r=n(80);t.exports=function(t){if(Array.isArray(t))return r(t)}},168:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},169:function(t,e,n){var r=n(80);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},170:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},171:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},47:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(10),o=n(0),c=n(28),a=n(26),i=n(48),u=n.n(i);function l(){var t=Object(r.a)(["\n  margin-right: ",";\n  margin-bottom: 0;\n  overflow: hidden;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n"]);return l=function(){return t},t}function f(){var t=Object(r.a)(["\n  margin-top: ",";\n  display: flex;\n  margin-bottom: ",";\n"]);return f=function(){return t},t}var p=c.a.div(f(),Object(a.b)(2.5),Object(a.b)(2.5)),s=c.a.div(l(),Object(a.b)(.5)),m=["a bit less\n  frustrating.","more fun","great again"],b=function(){var t=Math.random();return"undefined"==typeof window&&(t=.4),o.createElement(p,null,o.createElement(s,null,o.createElement("img",{alt:"Zoltan Erdos",src:u.a})),o.createElement("p",null,"Written by ",o.createElement("strong",null,"Zoltan Erdos"),", who is interested to make software development"," "+(m[Math.floor(t*m.length)]||"crazy."),o.createElement("br",null),o.createElement("a",{href:"https://twitter.com/ZoltanErdos"},"Follow me on Twitter")))}},48:function(t,e,n){t.exports=n.p+"static/zed-profile-pic-cd941e033fafca9e98b23dae7e5a0ccc.jpg"},80:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}}}]);