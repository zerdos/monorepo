import"./chunk-YZ6DPRT4.mjs";import"./chunk-UT4UBVWW.mjs";function ur(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function pr(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Re=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pr(this));var a=this.tags[this.tags.length-1];if(!1)var i;if(this.isSpeedy){var c=ur(a);try{c.insertRule(n,c.cssRules.length)}catch(h){}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}();var _="-ms-",K="-moz-",f="-webkit-",se="comm",Y="rule",Z="decl";var $e="@import";var ie="@keyframes";var Ie=Math.abs,H=String.fromCharCode,Me=Object.assign;function Pe(e,r){return(((r<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3)}function ce(e){return e.trim()}function ze(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function j(e,r){return e.indexOf(r)}function k(e,r){return e.charCodeAt(r)|0}function L(e,r,t){return e.slice(r,t)}function O(e){return e.length}function q(e){return e.length}function B(e,r){return r.push(e),e}function De(e,r){return e.map(r).join("")}var fe=1,G=1,Le=0,C=0,v=0,J="";function ee(e,r,t,n,a,i,c){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:fe,column:G,length:c,return:""}}function Q(e,r){return Me(ee("",null,null,"",null,null,0),e,{length:-e.length},r)}function Fe(){return v}function Ve(){return v=C>0?k(J,--C):0,G--,v===10&&(G=1,fe--),v}function N(){return v=C<Le?k(J,C++):0,G++,v===10&&(G=1,fe++),v}function $(){return k(J,C)}function re(){return C}function U(e,r){return L(J,e,r)}function X(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ue(e){return fe=G=1,Le=O(J=e),C=0,[]}function pe(e){return J="",e}function W(e){return ce(U(C-1,Se(e===91?e+2:e===40?e+1:e)))}function He(e){for(;(v=$())&&v<33;)N();return X(e)>2||X(v)>3?"":" "}function Ke(e,r){for(;--r&&N()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return U(e,re()+(r<6&&$()==32&&N()==32))}function Se(e){for(;N();)switch(v){case e:return C;case 34:case 39:e!==34&&e!==39&&Se(v);break;case 40:e===41&&Se(e);break;case 92:N();break}return C}function Ye(e,r){for(;N()&&e+v!==47+10;)if(e+v===42+42&&$()===47)break;return"/*"+U(r,C-1)+"*"+H(e===47?e:N())}function Ze(e){for(;!X($());)N();return U(e,C)}function Ge(e){return pe(le("",null,null,null,[""],e=ue(e),0,[0],e))}function le(e,r,t,n,a,i,c,h,w){for(var S=0,y=0,s=c,E=0,I=0,A=0,l=1,o=1,m=1,b=0,R="",z=a,M=i,T=n,p=R;o;)switch(A=b,b=N()){case 40:if(A!=108&&p.charCodeAt(s-1)==58){j(p+=u(W(b),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:p+=W(b);break;case 9:case 10:case 13:case 32:p+=He(A);break;case 92:p+=Ke(re()-1,7);continue;case 47:switch($()){case 42:case 47:B(lr(Ye(N(),re()),r,t),w);break;default:p+="/"}break;case 123*l:h[S++]=O(p)*m;case 125*l:case 59:case 0:switch(b){case 0:case 125:o=0;case 59+y:I>0&&O(p)-s&&B(I>32?Be(p+";",n,t,s-1):Be(u(p," ","")+";",n,t,s-2),w);break;case 59:p+=";";default:if(B(T=qe(p,r,t,S,y,a,h,R,z=[],M=[],s),i),b===123)if(y===0)le(p,r,T,T,z,i,s,h,M);else switch(E){case 100:case 109:case 115:le(e,T,T,n&&B(qe(e,T,T,0,0,a,h,R,a,z=[],s),M),a,M,s,h,n?z:M);break;default:le(p,T,T,T,[""],M,0,h,M)}}S=y=I=0,l=m=1,R=p="",s=c;break;case 58:s=1+O(p),I=A;default:if(l<1){if(b==123)--l;else if(b==125&&l++==0&&Ve()==125)continue}switch(p+=H(b),b*l){case 38:m=y>0?1:(p+="\f",-1);break;case 44:h[S++]=(O(p)-1)*m,m=1;break;case 64:$()===45&&(p+=W(N())),E=$(),y=s=O(R=p+=Ze(re())),b++;break;case 45:A===45&&O(p)==2&&(l=0)}}return i}function qe(e,r,t,n,a,i,c,h,w,S,y){for(var s=a-1,E=a===0?i:[""],I=q(E),A=0,l=0,o=0;A<n;++A)for(var m=0,b=L(e,s+1,s=Ie(l=c[A])),R=e;m<I;++m)(R=ce(l>0?E[m]+" "+b:u(b,/&\f/g,E[m])))&&(w[o++]=R);return ee(e,r,t,a===0?Y:h,w,S,y)}function lr(e,r,t){return ee(e,r,t,se,H(Fe()),L(e,2,-2),0)}function Be(e,r,t,n){return ee(e,r,t,Z,L(e,0,n),L(e,n+1,-1),n)}function Ae(e,r){switch(Pe(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+K+e+_+e+e;case 6828:case 4268:return f+e+_+e+e;case 6165:return f+e+_+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+_+"flex-$1$2")+e;case 5443:return f+e+_+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+_+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+_+u(e,"shrink","negative")+e;case 5292:return f+e+_+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+_+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+_+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-r>6)switch(k(e,r+1)){case 109:if(k(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+K+(k(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~j(e,"stretch")?Ae(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(k(e,r+1)!==115)break;case 6444:switch(k(e,O(e)-3-(~j(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(k(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+_+"$2box$3")+e}break;case 5936:switch(k(e,r+11)){case 114:return f+e+_+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+_+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+_+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+_+e+e}return e}function F(e,r){for(var t="",n=q(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Xe(e,r,t,n){switch(e.type){case $e:case Z:return e.return=e.return||e.value;case se:return"";case ie:return e.return=e.value+"{"+F(e.children,n)+"}";case Y:e.value=e.props.join(",")}return O(t=F(e.children,n))?e.return=e.value+"{"+t+"}":""}function Je(e){var r=q(e);return function(t,n,a,i){for(var c="",h=0;h<r;h++)c+=e[h](t,n,a,i)||"";return c}}function Qe(e){return function(r){r.root||(r=r.return)&&e(r)}}function Ue(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case Z:e.return=Ae(e.value,e.length);break;case ie:return F([Q(e,{value:u(e.value,"@","@"+f)})],n);case Y:if(e.length)return De(e.props,function(a){switch(ze(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return F([Q(e,{props:[u(a,/:(read-\w+)/,":"+K+"$1")]})],n);case"::placeholder":return F([Q(e,{props:[u(a,/:(plac\w+)/,":"+f+"input-$1")]}),Q(e,{props:[u(a,/:(plac\w+)/,":"+K+"$1")]}),Q(e,{props:[u(a,/:(plac\w+)/,_+"input-$1")]})],n)}return""})}}var hr=function(r,t,n){for(var a=0,i=0;a=i,i=$(),a===38&&i===12&&(t[n]=1),!X(i);)N();return U(r,C)},dr=function(r,t){var n=-1,a=44;do switch(X(a)){case 0:a===38&&$()===12&&(t[n]=1),r[n]+=hr(C-1,t,n);break;case 2:r[n]+=W(a);break;case 4:if(a===44){r[++n]=$()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=H(a)}while(a=N());return r},mr=function(r,t){return pe(dr(ue(r),t))},We=new WeakMap,gr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!We.get(n))&&!a){We.set(r,!0);for(var i=[],c=mr(t,i),h=n.props,w=0,S=0;w<c.length;w++)for(var y=0;y<h.length;y++,S++)r.props[S]=i[w]?c[w].replace(/&\f/g,h[y]):h[y]+" "+c[w]}}},xr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};var yr=[Ue],vr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(l){var o=l.getAttribute("data-emotion");o.indexOf(" ")!==-1&&(document.head.appendChild(l),l.setAttribute("data-s",""))})}var a=r.stylisPlugins||yr,i={},c,h=[];c=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(l){for(var o=l.getAttribute("data-emotion").split(" "),m=1;m<o.length;m++)i[o[m]]=!0;h.push(l)});var w,S=[gr,xr];{var y,s=[Xe,Qe(function(l){y.insert(l)})],E=Je(S.concat(a,s)),I=function(o){return F(Ge(o),E)};w=function(o,m,b,R){y=b,I(o?o+"{"+m.styles+"}":m.styles),R&&(A.inserted[m.name]=!0)}}var A={key:t,sheet:new Re({key:t,container:c,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:w};return A.sheet.hydrate(h),A},je=vr;import{CacheProvider as Tr}from"https://unpkg.com/@spike.land/esm@0.6.171/dist/emotion-react.mjs";import{options as P,Fragment as br}from"https://ga.jspm.io/npm:preact@10.6.5/dist/preact.module.js";var wr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,_r=/[&<>"]/;function er(e){var r=String(e);return _r.test(r)?r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):r}var rr=function(e,r){return String(e).replace(/(\n+)/g,"$1"+(r||"	"))},tr=function(e,r,t){return String(e).length>(r||40)||!t&&String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},nr={};function Er(e){var r="";for(var t in e){var n=e[t];n!=null&&n!==""&&(r&&(r+=" "),r+=t[0]=="-"?t:nr[t]||(nr[t]=t.replace(/([A-Z])/g,"-$1").toLowerCase()),r+=": ",r+=n,typeof n=="number"&&wr.test(t)===!1&&(r+="px"),r+=";")}return r||void 0}function he(e,r){for(var t in r)e[t]=r[t];return e}function Oe(e,r){return Array.isArray(r)?r.reduce(Oe,e):r!=null&&r!==!1&&e.push(r),e}var kr={shallow:!0},Te=[],Sr=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,ar=/[\s\n\\/='"\0<>]/,or=function(){};ne.render=ne;var Ar=function(e,r){return ne(e,r,kr)},sr=[];function ne(e,r,t){r=r||{},t=t||{};var n=P.__s;P.__s=!0;var a=te(e,r,t);return P.__c&&P.__c(e,sr),sr.length=0,P.__s=n,a}function te(e,r,t,n,a,i){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return er(e);var c=t.pretty,h=c&&typeof c=="string"?c:"	";if(Array.isArray(e)){for(var w="",S=0;S<e.length;S++)c&&S>0&&(w+=`
`),w+=te(e[S],r,t,n,a,i);return w}var y,s=e.type,E=e.props,I=!1;if(typeof s=="function"){if(I=!0,!t.shallow||!n&&t.renderRootComponent!==!1){if(s===br){var A=[];return Oe(A,e.props.children),te(A,r,t,t.shallowHighOrder!==!1,a,i)}var l,o=e.__c={__v:e,context:r,props:e.props,setState:or,forceUpdate:or,__h:[]};if(P.__b&&P.__b(e),P.__r&&P.__r(e),s.prototype&&typeof s.prototype.render=="function"){var m=s.contextType,b=m&&r[m.__c],R=m!=null?b?b.props.value:m.__:r;(o=e.__c=new s(E,R)).__v=e,o._dirty=o.__d=!0,o.props=E,o.state==null&&(o.state={}),o._nextState==null&&o.__s==null&&(o._nextState=o.__s=o.state),o.context=R,s.getDerivedStateFromProps?o.state=he(he({},o.state),s.getDerivedStateFromProps(o.props,o.state)):o.componentWillMount&&(o.componentWillMount(),o.state=o._nextState!==o.state?o._nextState:o.__s!==o.state?o.__s:o.state),l=o.render(o.props,o.state,o.context)}else{var z=s.contextType,M=z&&r[z.__c];l=s.call(e.__c,E,z!=null?M?M.props.value:z.__:r)}return o.getChildContext&&(r=he(he({},r),o.getChildContext())),P.diffed&&P.diffed(e),te(l,r,t,t.shallowHighOrder!==!1,a,i)}s=(y=s).displayName||y!==Function&&y.name||function(_e){var Ee=(Function.prototype.toString.call(_e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!Ee){for(var oe=-1,ke=Te.length;ke--;)if(Te[ke]===_e){oe=ke;break}oe<0&&(oe=Te.push(_e)-1),Ee="UnnamedComponent"+oe}return Ee}(y)}var T,p,g="<"+s;if(E){var de=Object.keys(E);t&&t.sortAttributes===!0&&de.sort();for(var me=0;me<de.length;me++){var d=de[me],x=E[d];if(d!=="children"){if(!ar.test(d)&&(t&&t.allAttributes||d!=="key"&&d!=="ref"&&d!=="__self"&&d!=="__source"&&d!=="defaultValue")){if(d==="className"){if(E.class)continue;d="class"}else a&&d.match(/^xlink:?./)&&(d=d.toLowerCase().replace(/^xlink:?/,"xlink:"));if(d==="htmlFor"){if(E.for)continue;d="for"}d==="style"&&x&&typeof x=="object"&&(x=Er(x)),d[0]==="a"&&d[1]==="r"&&typeof x=="boolean"&&(x=String(x));var ge=t.attributeHook&&t.attributeHook(d,x,r,t,I);if(ge||ge==="")g+=ge;else if(d==="dangerouslySetInnerHTML")p=x&&x.__html;else if(s==="textarea"&&d==="value")T=x;else if((x||x===0||x==="")&&typeof x!="function"){if(!(x!==!0&&x!==""||(x=d,t&&t.xml))){g+=" "+d;continue}if(d==="value"){if(s==="select"){i=x;continue}s==="option"&&i==x&&(g+=" selected")}g+=" "+d+'="'+er(x)+'"'}}}else T=x}}if(c){var xe=g.replace(/\n\s*/," ");xe===g||~xe.indexOf(`
`)?c&&~g.indexOf(`
`)&&(g+=`
`):g=xe}if(g+=">",ar.test(s))throw new Error(s+" is not a valid HTML tag name in "+g);var ae,fr=Sr.test(s)||t.voidElements&&t.voidElements.test(s),D=[];if(p)c&&tr(p)&&(p=`
`+h+rr(p,h)),g+=p;else if(T!=null&&Oe(ae=[],T).length){for(var ye=c&&~g.indexOf(`
`),Ce=!1,ve=0;ve<ae.length;ve++){var be=ae[ve];if(be!=null&&be!==!1){var V=te(be,r,t,!0,s==="svg"||s!=="foreignObject"&&a,i);if(c&&!ye&&tr(V)&&(ye=!0),V)if(c){var Ne=V.length>0&&V[0]!="<";Ce&&Ne?D[D.length-1]+=V:D.push(V),Ce=Ne}else D.push(V)}}if(c&&ye)for(var we=D.length;we--;)D[we]=`
`+h+rr(D[we],h)}if(D.length||p)g+=D.join("");else if(t&&t.xml)return g.substring(0,g.length-1)+" />";return!fr||ae||p?(c&&~g.indexOf(`
`)&&(g+=`
`),g+="</"+s+">"):g=g.replace(/>$/," />"),g}ne.shallowRender=Ar;var ir=ne;import{h as cr}from"https://ga.jspm.io/npm:preact@10.6.5/dist/preact.module.js";var ft=e=>{let t=je({key:"css"}),n="";t.sheet.insert=c=>{n+=c},globalThis.renderToString=!0;let a=ir(cr(Tr,{value:t},cr(e,null)));globalThis.renderToString=!1;let i=`
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="UTF-8">
        <style>${n}</style>
    </head>
    <body>
        <div>${a}</div>
    </body>
  </html>
`;return{html:a,css:n}};export{ft as getHtmlAndCss};
