var e=require("through"),r=require("html-tokenize"),t=require("multipipe"),n=require("@zedvision/emotion-css");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e),u=i(r),s=i(t),d=function(e){return function(r){for(var t,n=new RegExp(e.key+"-([a-zA-Z0-9-_]+)","gm"),i={html:r,ids:[],css:""},o={};null!==(t=n.exec(r));)void 0===o[t[1]]&&(o[t[1]]=!0);return i.ids=Object.keys(e.inserted).filter(function(r){if((void 0!==o[r]||void 0===e.registered[e.key+"-"+r])&&!0!==e.inserted[r])return i.css+=e.inserted[r],!0}),i}};function a(e,r,t,n){return'<style data-emotion="'+e+" "+r.substring(1)+'"'+n+">"+t+"</style>"}var c=function(e,r){return function(t){var n=e.inserted,i=e.key,o=e.registered,u=new RegExp("<|"+i+"-([a-zA-Z0-9-_]+)","gm"),s={},d="",c="",l="";for(var f in n)if(n.hasOwnProperty(f)){var v=n[f];!0!==v&&void 0===o[i+"-"+f]&&(l+=v,c+=" "+f)}""!==l&&(d=a(i,c,l,r));for(var y,g="",m="",x=0;null!==(y=u.exec(t));)if("<"!==y[0]){var p=y[1],S=n[p];!0===S||void 0===S||s[p]||(s[p]=!0,m+=S,g+=" "+p)}else""!==g&&(d+=a(i,g,m,r),g="",m=""),d+=t.substring(x,y.index),x=y.index;return d+t.substring(x)}},l=function(e,r){return function(){var t={},n=u.default(),i=o.default(function(n){var i=n[1];if("open"===n[0]){for(var o,u="",s={},d=i.toString(),a=new RegExp(e.key+"-([a-zA-Z0-9-_]+)","gm");null!==(o=a.exec(d));)null!==o&&void 0===t[o[1]]&&(s[o[1]]=!0);Object.keys(e.inserted).forEach(function(r){!0!==e.inserted[r]&&void 0===t[r]&&(!0===s[r]||void 0===e.registered[e.key+"-"+r]&&(s[r]=!0))&&(t[r]=!0,u+=e.inserted[r])}),""!==u&&this.queue('<style data-emotion="'+e.key+" "+Object.keys(s).join(" ")+'"'+r+">"+u+"</style>")}this.queue(i)},function(){this.queue(null)});return s.default(n,i)}},f=function(e){!0!==e.compat&&(e.compat=!0);var r=void 0!==e.nonce?' nonce="'+e.nonce+'"':"";return{extractCritical:d(e),renderStylesToString:c(e,r),renderStylesToNodeStream:l(e,r)}}(n.cache),v=f.renderStylesToString,y=f.renderStylesToNodeStream;exports.extractCritical=f.extractCritical,exports.renderStylesToNodeStream=y,exports.renderStylesToString=v;
//# sourceMappingURL=emotion-server.js.map
