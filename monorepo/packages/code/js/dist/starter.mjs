import{c as o}from"./chunks/chunk-6XRSRXUF.mjs";var p=o((_u,Qr)=>{var W=function(r){return r&&r.Math==Math&&r};Qr.exports=W(typeof globalThis=="object"&&globalThis)||W(typeof window=="object"&&window)||W(typeof self=="object"&&self)||W(typeof global=="object"&&global)||function(){return this}()||Function("return this")()});var w=o((Nu,re)=>{re.exports=function(r){try{return!!r()}catch{return!0}}});var x=o((Au,ee)=>{var no=w();ee.exports=!no(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})});var L=o((Bu,te)=>{var oo=w();te.exports=!oo(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})});var k=o((Wu,ne)=>{var io=L(),U=Function.prototype.call;ne.exports=io?U.bind(U):function(){return U.apply(U,arguments)}});var ue=o(ae=>{"use strict";var oe={}.propertyIsEnumerable,ie=Object.getOwnPropertyDescriptor,ao=ie&&!oe.call({1:2},1);ae.f=ao?function(e){var t=ie(this,e);return!!t&&t.enumerable}:oe});var rr=o((ku,se)=>{se.exports=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}}});var b=o((Gu,le)=>{var ce=L(),ve=Function.prototype,uo=ve.bind,er=ve.call,so=ce&&uo.bind(er,er);le.exports=ce?function(r){return r&&so(r)}:function(r){return r&&function(){return er.apply(r,arguments)}}});var tr=o((Ku,pe)=>{var fe=b(),co=fe({}.toString),vo=fe("".slice);pe.exports=function(r){return vo(co(r),8,-1)}});var de=o((Vu,ye)=>{var lo=p(),fo=b(),po=w(),yo=tr(),nr=lo.Object,go=fo("".split);ye.exports=po(function(){return!nr("z").propertyIsEnumerable(0)})?function(r){return yo(r)=="String"?go(r,""):nr(r)}:nr});var or=o(($u,ge)=>{var ho=p(),bo=ho.TypeError;ge.exports=function(r){if(r==null)throw bo("Can't call method on "+r);return r}});var G=o((Yu,he)=>{var mo=de(),qo=or();he.exports=function(r){return mo(qo(r))}});var m=o((zu,be)=>{be.exports=function(r){return typeof r=="function"}});var T=o((Hu,me)=>{var wo=m();me.exports=function(r){return typeof r=="object"?r!==null:wo(r)}});var R=o((Xu,qe)=>{var ir=p(),So=m(),Eo=function(r){return So(r)?r:void 0};qe.exports=function(r,e){return arguments.length<2?Eo(ir[r]):ir[r]&&ir[r][e]}});var Se=o((Ju,we)=>{var Oo=b();we.exports=Oo({}.isPrototypeOf)});var ar=o((Zu,Ee)=>{var xo=R();Ee.exports=xo("navigator","userAgent")||""});var Ce=o((Qu,Te)=>{var je=p(),ur=ar(),Oe=je.process,xe=je.Deno,Ie=Oe&&Oe.versions||xe&&xe.version,Pe=Ie&&Ie.v8,q,K;Pe&&(q=Pe.split("."),K=q[0]>0&&q[0]<4?1:+(q[0]+q[1]));!K&&ur&&(q=ur.match(/Edge\/(\d+)/),(!q||q[1]>=74)&&(q=ur.match(/Chrome\/(\d+)/),q&&(K=+q[1])));Te.exports=K});var sr=o((rs,Re)=>{var Le=Ce(),Io=w();Re.exports=!!Object.getOwnPropertySymbols&&!Io(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Le&&Le<41})});var cr=o((es,Fe)=>{var Po=sr();Fe.exports=Po&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var vr=o((ts,Me)=>{var jo=p(),To=R(),Co=m(),Lo=Se(),Ro=cr(),Fo=jo.Object;Me.exports=Ro?function(r){return typeof r=="symbol"}:function(r){var e=To("Symbol");return Co(e)&&Lo(e.prototype,Fo(r))}});var _e=o((ns,De)=>{var Mo=p(),Do=Mo.String;De.exports=function(r){try{return Do(r)}catch{return"Object"}}});var lr=o((os,Ne)=>{var _o=p(),No=m(),Ao=_e(),Bo=_o.TypeError;Ne.exports=function(r){if(No(r))return r;throw Bo(Ao(r)+" is not a function")}});var Be=o((is,Ae)=>{var Wo=lr();Ae.exports=function(r,e){var t=r[e];return t==null?void 0:Wo(t)}});var Ue=o((as,We)=>{var Uo=p(),fr=k(),pr=m(),yr=T(),ko=Uo.TypeError;We.exports=function(r,e){var t,n;if(e==="string"&&pr(t=r.toString)&&!yr(n=fr(t,r))||pr(t=r.valueOf)&&!yr(n=fr(t,r))||e!=="string"&&pr(t=r.toString)&&!yr(n=fr(t,r)))return n;throw ko("Can't convert object to primitive value")}});var Ge=o((us,ke)=>{ke.exports=!1});var V=o((ss,Ve)=>{var Ke=p(),Go=Object.defineProperty;Ve.exports=function(r,e){try{Go(Ke,r,{value:e,configurable:!0,writable:!0})}catch{Ke[r]=e}return e}});var $=o((cs,Ye)=>{var Ko=p(),Vo=V(),$e="__core-js_shared__",$o=Ko[$e]||Vo($e,{});Ye.exports=$o});var dr=o((vs,He)=>{var Yo=Ge(),ze=$();(He.exports=function(r,e){return ze[r]||(ze[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.22.0",mode:Yo?"pure":"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var Je=o((ls,Xe)=>{var zo=p(),Ho=or(),Xo=zo.Object;Xe.exports=function(r){return Xo(Ho(r))}});var S=o((fs,Ze)=>{var Jo=b(),Zo=Je(),Qo=Jo({}.hasOwnProperty);Ze.exports=Object.hasOwn||function(e,t){return Qo(Zo(e),t)}});var gr=o((ps,Qe)=>{var ri=b(),ei=0,ti=Math.random(),ni=ri(1 .toString);Qe.exports=function(r){return"Symbol("+(r===void 0?"":r)+")_"+ni(++ei+ti,36)}});var it=o((ys,ot)=>{var oi=p(),ii=dr(),rt=S(),ai=gr(),et=sr(),nt=cr(),C=ii("wks"),I=oi.Symbol,tt=I&&I.for,ui=nt?I:I&&I.withoutSetter||ai;ot.exports=function(r){if(!rt(C,r)||!(et||typeof C[r]=="string")){var e="Symbol."+r;et&&rt(I,r)?C[r]=I[r]:nt&&tt?C[r]=tt(e):C[r]=ui(e)}return C[r]}});var ct=o((ds,st)=>{var si=p(),ci=k(),at=T(),ut=vr(),vi=Be(),li=Ue(),fi=it(),pi=si.TypeError,yi=fi("toPrimitive");st.exports=function(r,e){if(!at(r)||ut(r))return r;var t=vi(r,yi),n;if(t){if(e===void 0&&(e="default"),n=ci(t,r,e),!at(n)||ut(n))return n;throw pi("Can't convert object to primitive value")}return e===void 0&&(e="number"),li(r,e)}});var hr=o((gs,vt)=>{var di=ct(),gi=vr();vt.exports=function(r){var e=di(r,"string");return gi(e)?e:e+""}});var mr=o((hs,ft)=>{var hi=p(),lt=T(),br=hi.document,bi=lt(br)&&lt(br.createElement);ft.exports=function(r){return bi?br.createElement(r):{}}});var qr=o((bs,pt)=>{var mi=x(),qi=w(),wi=mr();pt.exports=!mi&&!qi(function(){return Object.defineProperty(wi("div"),"a",{get:function(){return 7}}).a!=7})});var wr=o(dt=>{var Si=x(),Ei=k(),Oi=ue(),xi=rr(),Ii=G(),Pi=hr(),ji=S(),Ti=qr(),yt=Object.getOwnPropertyDescriptor;dt.f=Si?yt:function(e,t){if(e=Ii(e),t=Pi(t),Ti)try{return yt(e,t)}catch{}if(ji(e,t))return xi(!Ei(Oi.f,e,t),e[t])}});var ht=o((qs,gt)=>{var Ci=x(),Li=w();gt.exports=Ci&&Li(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})});var Sr=o((ws,mt)=>{var bt=p(),Ri=T(),Fi=bt.String,Mi=bt.TypeError;mt.exports=function(r){if(Ri(r))return r;throw Mi(Fi(r)+" is not an object")}});var Pr=o(wt=>{var Di=p(),_i=x(),Ni=qr(),Ai=ht(),Y=Sr(),qt=hr(),Bi=Di.TypeError,Er=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Or="enumerable",xr="configurable",Ir="writable";wt.f=_i?Ai?function(e,t,n){if(Y(e),t=qt(t),Y(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Ir in n&&!n[Ir]){var i=Wi(e,t);i&&i[Ir]&&(e[t]=n.value,n={configurable:xr in n?n[xr]:i[xr],enumerable:Or in n?n[Or]:i[Or],writable:!1})}return Er(e,t,n)}:Er:function(e,t,n){if(Y(e),t=qt(t),Y(n),Ni)try{return Er(e,t,n)}catch{}if("get"in n||"set"in n)throw Bi("Accessors not supported");return"value"in n&&(e[t]=n.value),e}});var z=o((Es,St)=>{var Ui=x(),ki=Pr(),Gi=rr();St.exports=Ui?function(r,e,t){return ki.f(r,e,Gi(1,t))}:function(r,e,t){return r[e]=t,r}});var Tr=o((Os,Et)=>{var Ki=b(),Vi=m(),jr=$(),$i=Ki(Function.toString);Vi(jr.inspectSource)||(jr.inspectSource=function(r){return $i(r)});Et.exports=jr.inspectSource});var It=o((xs,xt)=>{var Yi=p(),zi=m(),Hi=Tr(),Ot=Yi.WeakMap;xt.exports=zi(Ot)&&/native code/.test(Hi(Ot))});var Tt=o((Is,jt)=>{var Xi=dr(),Ji=gr(),Pt=Xi("keys");jt.exports=function(r){return Pt[r]||(Pt[r]=Ji(r))}});var Cr=o((Ps,Ct)=>{Ct.exports={}});var _t=o((js,Dt)=>{var Zi=It(),Mt=p(),Lr=b(),Qi=T(),ra=z(),Rr=S(),Fr=$(),ea=Tt(),ta=Cr(),Lt="Object already initialized",Dr=Mt.TypeError,na=Mt.WeakMap,H,F,X,oa=function(r){return X(r)?F(r):H(r,{})},ia=function(r){return function(e){var t;if(!Qi(e)||(t=F(e)).type!==r)throw Dr("Incompatible receiver, "+r+" required");return t}};Zi||Fr.state?(E=Fr.state||(Fr.state=new na),Rt=Lr(E.get),Mr=Lr(E.has),Ft=Lr(E.set),H=function(r,e){if(Mr(E,r))throw new Dr(Lt);return e.facade=r,Ft(E,r,e),e},F=function(r){return Rt(E,r)||{}},X=function(r){return Mr(E,r)}):(P=ea("state"),ta[P]=!0,H=function(r,e){if(Rr(r,P))throw new Dr(Lt);return e.facade=r,ra(r,P,e),e},F=function(r){return Rr(r,P)?r[P]:{}},X=function(r){return Rr(r,P)});var E,Rt,Mr,Ft,P;Dt.exports={set:H,get:F,has:X,enforce:oa,getterFor:ia}});var Bt=o((Ts,At)=>{var _r=x(),aa=S(),Nt=Function.prototype,ua=_r&&Object.getOwnPropertyDescriptor,Nr=aa(Nt,"name"),sa=Nr&&function(){}.name==="something",ca=Nr&&(!_r||_r&&ua(Nt,"name").configurable);At.exports={EXISTS:Nr,PROPER:sa,CONFIGURABLE:ca}});var Kt=o((Cs,Gt)=>{var va=p(),Wt=m(),la=S(),Ut=z(),fa=V(),pa=Tr(),kt=_t(),ya=Bt().CONFIGURABLE,da=kt.get,ga=kt.enforce,ha=String(String).split("String");(Gt.exports=function(r,e,t,n){var i=n?!!n.unsafe:!1,f=n?!!n.enumerable:!1,c=n?!!n.noTargetGet:!1,s=n&&n.name!==void 0?n.name:e,v;if(Wt(t)&&(String(s).slice(0,7)==="Symbol("&&(s="["+String(s).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!la(t,"name")||ya&&t.name!==s)&&Ut(t,"name",s),v=ga(t),v.source||(v.source=ha.join(typeof s=="string"?s:""))),r===va){f?r[e]=t:fa(e,t);return}else i?!c&&r[e]&&(f=!0):delete r[e];f?r[e]=t:Ut(r,e,t)})(Function.prototype,"toString",function(){return Wt(this)&&da(this).source||pa(this)})});var Ar=o((Ls,Vt)=>{var ba=Math.ceil,ma=Math.floor;Vt.exports=function(r){var e=+r;return e!==e||e===0?0:(e>0?ma:ba)(e)}});var Yt=o((Rs,$t)=>{var qa=Ar(),wa=Math.max,Sa=Math.min;$t.exports=function(r,e){var t=qa(r);return t<0?wa(t+e,0):Sa(t,e)}});var Ht=o((Fs,zt)=>{var Ea=Ar(),Oa=Math.min;zt.exports=function(r){return r>0?Oa(Ea(r),9007199254740991):0}});var Jt=o((Ms,Xt)=>{var xa=Ht();Xt.exports=function(r){return xa(r.length)}});var rn=o((Ds,Qt)=>{var Ia=G(),Pa=Yt(),ja=Jt(),Zt=function(r){return function(e,t,n){var i=Ia(e),f=ja(i),c=Pa(n,f),s;if(r&&t!=t){for(;f>c;)if(s=i[c++],s!=s)return!0}else for(;f>c;c++)if((r||c in i)&&i[c]===t)return r||c||0;return!r&&-1}};Qt.exports={includes:Zt(!0),indexOf:Zt(!1)}});var nn=o((_s,tn)=>{var Ta=b(),Br=S(),Ca=G(),La=rn().indexOf,Ra=Cr(),en=Ta([].push);tn.exports=function(r,e){var t=Ca(r),n=0,i=[],f;for(f in t)!Br(Ra,f)&&Br(t,f)&&en(i,f);for(;e.length>n;)Br(t,f=e[n++])&&(~La(i,f)||en(i,f));return i}});var an=o((Ns,on)=>{on.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var sn=o(un=>{var Fa=nn(),Ma=an(),Da=Ma.concat("length","prototype");un.f=Object.getOwnPropertyNames||function(e){return Fa(e,Da)}});var vn=o(cn=>{cn.f=Object.getOwnPropertySymbols});var fn=o((Ws,ln)=>{var _a=R(),Na=b(),Aa=sn(),Ba=vn(),Wa=Sr(),Ua=Na([].concat);ln.exports=_a("Reflect","ownKeys")||function(e){var t=Aa.f(Wa(e)),n=Ba.f;return n?Ua(t,n(e)):t}});var dn=o((Us,yn)=>{var pn=S(),ka=fn(),Ga=wr(),Ka=Pr();yn.exports=function(r,e,t){for(var n=ka(e),i=Ka.f,f=Ga.f,c=0;c<n.length;c++){var s=n[c];!pn(r,s)&&!(t&&pn(t,s))&&i(r,s,f(e,s))}}});var hn=o((ks,gn)=>{var Va=w(),$a=m(),Ya=/#|\.prototype\./,M=function(r,e){var t=Ha[za(r)];return t==Ja?!0:t==Xa?!1:$a(e)?Va(e):!!e},za=M.normalize=function(r){return String(r).replace(Ya,".").toLowerCase()},Ha=M.data={},Xa=M.NATIVE="N",Ja=M.POLYFILL="P";gn.exports=M});var Ur=o((Gs,bn)=>{var Wr=p(),Za=wr().f,Qa=z(),ru=Kt(),eu=V(),tu=dn(),nu=hn();bn.exports=function(r,e){var t=r.target,n=r.global,i=r.stat,f,c,s,v,d,a;if(n?c=Wr:i?c=Wr[t]||eu(t,{}):c=(Wr[t]||{}).prototype,c)for(s in e){if(d=e[s],r.noTargetGet?(a=Za(c,s),v=a&&a.value):v=c[s],f=nu(n?s:t+(i?".":"#")+s,r.forced),!f&&v!==void 0){if(typeof d==typeof v)continue;tu(d,v)}(r.sham||v&&v.sham)&&Qa(d,"sham",!0),ru(c,s,d,r)}}});var En=o((Ks,Sn)=>{var ou=L(),wn=Function.prototype,mn=wn.apply,qn=wn.call;Sn.exports=typeof Reflect=="object"&&Reflect.apply||(ou?qn.bind(mn):function(){return qn.apply(mn,arguments)})});var In=o((Vs,xn)=>{var On=b(),iu=lr(),au=L(),uu=On(On.bind);xn.exports=function(r,e){return iu(r),e===void 0?r:au?uu(r,e):function(){return r.apply(e,arguments)}}});var jn=o(($s,Pn)=>{var su=R();Pn.exports=su("document","documentElement")});var Cn=o((Ys,Tn)=>{var cu=b();Tn.exports=cu([].slice)});var Rn=o((zs,Ln)=>{var vu=p(),lu=vu.TypeError;Ln.exports=function(r,e){if(r<e)throw lu("Not enough arguments");return r}});var Mn=o((Hs,Fn)=>{var fu=ar();Fn.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(fu)});var _n=o((Xs,Dn)=>{var pu=tr(),yu=p();Dn.exports=pu(yu.process)=="process"});var Xr=o((Js,Kn)=>{var h=p(),du=En(),gu=In(),Nn=m(),hu=S(),bu=w(),An=jn(),mu=Cn(),Bn=mr(),qu=Rn(),wu=Mn(),Su=_n(),Yr=h.setImmediate,zr=h.clearImmediate,Eu=h.process,kr=h.Dispatch,Ou=h.Function,Wn=h.MessageChannel,xu=h.String,Gr=0,D={},Un="onreadystatechange",N,j,Kr,Vr;try{N=h.location}catch{}var Hr=function(r){if(hu(D,r)){var e=D[r];delete D[r],e()}},$r=function(r){return function(){Hr(r)}},kn=function(r){Hr(r.data)},Gn=function(r){h.postMessage(xu(r),N.protocol+"//"+N.host)};(!Yr||!zr)&&(Yr=function(e){qu(arguments.length,1);var t=Nn(e)?e:Ou(e),n=mu(arguments,1);return D[++Gr]=function(){du(t,void 0,n)},j(Gr),Gr},zr=function(e){delete D[e]},Su?j=function(r){Eu.nextTick($r(r))}:kr&&kr.now?j=function(r){kr.now($r(r))}:Wn&&!wu?(Kr=new Wn,Vr=Kr.port2,Kr.port1.onmessage=kn,j=gu(Vr.postMessage,Vr)):h.addEventListener&&Nn(h.postMessage)&&!h.importScripts&&N&&N.protocol!=="file:"&&!bu(Gn)?(j=Gn,h.addEventListener("message",kn,!1)):Un in Bn("script")?j=function(r){An.appendChild(Bn("script"))[Un]=function(){An.removeChild(this),Hr(r)}}:j=function(r){setTimeout($r(r),0)});Kn.exports={set:Yr,clear:zr}});var $n=o(()=>{var Iu=Ur(),Pu=p(),Vn=Xr().clear;Iu({global:!0,bind:!0,enumerable:!0,forced:Pu.clearImmediate!==Vn},{clearImmediate:Vn})});var zn=o(()=>{var ju=Ur(),Tu=p(),Yn=Xr().set;ju({global:!0,bind:!0,enumerable:!0,forced:Tu.setImmediate!==Yn},{setImmediate:Yn})});$n();zn();import{hydrate as Fu}from"https://spike.land/dist/react.mjs";function Hn(r){let e=new Uint8Array(r.length);for(let i=0;i<e.length;i++)e[i]=r.charCodeAt(i);let t=new Uint16Array(e.buffer),n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n}import{jsx as Mu}from"https://spike.land/dist/emotion.mjs";try{self["workbox:window:6.5.2"]&&_()}catch{}function Xn(r,e){return new Promise(function(t){var n=new MessageChannel;n.port1.onmessage=function(i){t(i.data)},r.postMessage(e,[n.port2])})}function Jn(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Zn(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Cu(r,e){var t;if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(t=function(i,f){if(i){if(typeof i=="string")return Zn(i,f);var c=Object.prototype.toString.call(i).slice(8,-1);return c==="Object"&&i.constructor&&(c=i.constructor.name),c==="Map"||c==="Set"?Array.from(i):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Zn(i,f):void 0}}(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(t=r[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Jr=function(){var r=this;this.promise=new Promise(function(e,t){r.resolve=e,r.reject=t})};function Zr(r,e){var t=location.href;return new URL(r,t).href===new URL(e,t).href}var A=function(r,e){this.type=r,Object.assign(this,e)};function J(r,e,t){return t?e?e(r):r:(r&&r.then||(r=Promise.resolve(r)),e?r.then(e):r)}function Lu(){}var Ru={type:"SKIP_WAITING"};function Qn(r,e){if(!e)return r&&r.then?r.then(Lu):Promise.resolve()}var ro=function(r){var e,t;function n(v,d){var a,u;return d===void 0&&(d={}),(a=r.call(this)||this).nn={},a.tn=0,a.rn=new Jr,a.en=new Jr,a.on=new Jr,a.un=0,a.an=new Set,a.cn=function(){var y=a.fn,l=y.installing;a.tn>0||!Zr(l.scriptURL,a.sn.toString())||performance.now()>a.un+6e4?(a.vn=l,y.removeEventListener("updatefound",a.cn)):(a.hn=l,a.an.add(l),a.rn.resolve(l)),++a.tn,l.addEventListener("statechange",a.ln)},a.ln=function(y){var l=a.fn,g=y.target,O=g.state,Z=g===a.vn,Q={sw:g,isExternal:Z,originalEvent:y};!Z&&a.mn&&(Q.isUpdate=!0),a.dispatchEvent(new A(O,Q)),O==="installed"?a.wn=self.setTimeout(function(){O==="installed"&&l.waiting===g&&a.dispatchEvent(new A("waiting",Q))},200):O==="activating"&&(clearTimeout(a.wn),Z||a.en.resolve(g))},a.dn=function(y){var l=a.hn,g=l!==navigator.serviceWorker.controller;a.dispatchEvent(new A("controlling",{isExternal:g,originalEvent:y,sw:l,isUpdate:a.mn})),g||a.on.resolve(l)},a.gn=(u=function(y){var l=y.data,g=y.ports,O=y.source;return J(a.getSW(),function(){a.an.has(O)&&a.dispatchEvent(new A("message",{data:l,originalEvent:y,ports:g,sw:O}))})},function(){for(var y=[],l=0;l<arguments.length;l++)y[l]=arguments[l];try{return Promise.resolve(u.apply(this,y))}catch(g){return Promise.reject(g)}}),a.sn=v,a.nn=d,navigator.serviceWorker.addEventListener("message",a.gn),a}t=r,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var i,f,c,s=n.prototype;return s.register=function(v){var d=(v===void 0?{}:v).immediate,a=d!==void 0&&d;try{var u=this;return function(y,l){var g=y();return g&&g.then?g.then(l):l(g)}(function(){if(!a&&document.readyState!=="complete")return Qn(new Promise(function(y){return window.addEventListener("load",y)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),J(u.bn(),function(y){u.fn=y,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var l=u.fn.waiting;return l&&Zr(l.scriptURL,u.sn.toString())&&(u.hn=l,Promise.resolve().then(function(){u.dispatchEvent(new A("waiting",{sw:l,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(y){return Promise.reject(y)}},s.update=function(){try{return this.fn?Qn(this.fn.update()):void 0}catch(v){return Promise.reject(v)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(v){try{return J(this.getSW(),function(d){return Xn(d,v)})}catch(d){return Promise.reject(d)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Xn(this.fn.waiting,Ru)},s.pn=function(){var v=navigator.serviceWorker.controller;return v&&Zr(v.scriptURL,this.sn.toString())?v:void 0},s.bn=function(){try{var v=this;return function(d,a){try{var u=d()}catch(y){return a(y)}return u&&u.then?u.then(void 0,a):u}(function(){return J(navigator.serviceWorker.register(v.sn,v.nn),function(d){return v.un=performance.now(),d})},function(d){throw d})}catch(d){return Promise.reject(d)}},i=n,(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Jn(i.prototype,f),c&&Jn(i,c),n}(function(){function r(){this.Pn=new Map}var e=r.prototype;return e.addEventListener=function(t,n){this.Sn(t).add(n)},e.removeEventListener=function(t,n){this.Sn(t).delete(n)},e.dispatchEvent=function(t){t.target=this;for(var n,i=Cu(this.Sn(t.type));!(n=i()).done;)(0,n.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},r}());"serviceWorker"in navigator&&new ro("/sw.js").register();var B=location.pathname.split("/"),Du=(B[1]==="api"&&B[2]==="room"?B[3]:(B.pop()||B.pop()).slice(-12))||"code-main",eo=async r=>{let e=import("./chunks/editor-J645PHI2.mjs"),t=import("./chunks/renderPreviewWindow-EHT4IEWH.mjs"),n=document.querySelector("#root")||document.createElement("div");if(Fu(n,Mu(r)),console.log("HYDRATED"),location.href.endsWith("hydrated"))return;Object.assign(globalThis,{App:r});let{join:i}=await import("./chunks/ws-RAG5RJAG.mjs");i(r),await Promise.all([e,t])},cc=async r=>{let e=(await import(to(Hn(r)))).default;eo(e)},vc=async()=>{if(globalThis.App)return;let e=await(await fetch(`https://spike.land/api/room/${Du}/session`)).json(),t=document.getElementById("root")||document.createElement("div");t.innerHTML=`<style>${e.css}</style><div id="zbody">${e.html}</div>`;let n=(await import(to(e.transpiled))).default;eo(n)};function to(r){let e=new Blob([r],{type:"application/javascript"});return URL.createObjectURL(e)}export{to as createJsBlob,cc as hydrateBinary,vc as run};
