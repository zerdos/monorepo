var S,d,O,X,x,R,W,B,U={},$=[],Y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var n in e)t[n]=e[n];return t}function V(t){var e=t.parentNode;e&&e.removeChild(t)}function Z(t,e,n){var o,l,_,s={};for(_ in e)_=="key"?o=e[_]:_=="ref"?l=e[_]:s[_]=e[_];if(arguments.length>2&&(s.children=arguments.length>3?S.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)s[_]===void 0&&(s[_]=t.defaultProps[_]);return P(t,s,o,l,null)}function P(t,e,n,o,l){var _={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++O:l};return l==null&&d.vnode!=null&&d.vnode(_),_}function le(){return{current:null}}function N(t){return t.children}function E(t,e){this.props=t,this.context=e}function C(t,e){if(e==null)return t.__?C(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?C(t):null}function j(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return j(t)}}function L(t){(!t.__d&&(t.__d=!0)&&x.push(t)&&!D.__r++||W!==d.debounceRendering)&&((W=d.debounceRendering)||R)(D)}function D(){for(var t;D.__r=x.length;)t=x.sort(function(e,n){return e.__v.__b-n.__v.__b}),x=[],t.some(function(e){var n,o,l,_,s,u;e.__d&&(s=(_=(n=e).__v).__e,(u=n.__P)&&(o=[],(l=k({},_)).__v=_.__v+1,M(u,_,l,n.__n,u.ownerSVGElement!==void 0,_.__h!=null?[s]:null,o,s==null?C(_):s,_.__h),J(o,_),_.__e!=s&&j(_)))})}function z(t,e,n,o,l,_,s,u,p,a){var r,h,c,i,f,b,v,y=o&&o.__k||$,m=y.length;for(n.__k=[],r=0;r<e.length;r++)if((i=n.__k[r]=(i=e[r])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?P(null,i,null,null,i):Array.isArray(i)?P(N,{children:i},null,null,null):i.__b>0?P(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(c=y[r])===null||c&&i.key==c.key&&i.type===c.type)y[r]=void 0;else for(h=0;h<m;h++){if((c=y[h])&&i.key==c.key&&i.type===c.type){y[h]=void 0;break}c=null}M(t,i,c=c||U,l,_,s,u,p,a),f=i.__e,(h=i.ref)&&c.ref!=h&&(v||(v=[]),c.ref&&v.push(c.ref,null,i),v.push(h,i.__c||f,i)),f!=null?(b==null&&(b=f),typeof i.type=="function"&&i.__k===c.__k?i.__d=p=G(i,p,t):p=q(t,i,c,y,f,p),typeof n.type=="function"&&(n.__d=p)):p&&c.__e==p&&p.parentNode!=t&&(p=C(c))}for(n.__e=b,r=m;r--;)y[r]!=null&&(typeof n.type=="function"&&y[r].__e!=null&&y[r].__e==n.__d&&(n.__d=C(o,r+1)),Q(y[r],y[r]));if(v)for(r=0;r<v.length;r++)K(v[r],v[++r],v[++r])}function G(t,e,n){for(var o,l=t.__k,_=0;l&&_<l.length;_++)(o=l[_])&&(o.__=t,e=typeof o.type=="function"?G(o,e,n):q(n,o,o,l,o.__e,e));return e}function ee(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){ee(n,e)}):e.push(t)),e}function q(t,e,n,o,l,_){var s,u,p;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(n==null||l!=_||l.parentNode==null)e:if(_==null||_.parentNode!==t)t.appendChild(l),s=null;else{for(u=_,p=0;(u=u.nextSibling)&&p<o.length;p+=2)if(u==l)break e;t.insertBefore(l,_),s=_}return s!==void 0?s:l.nextSibling}function te(t,e,n,o,l){var _;for(_ in n)_==="children"||_==="key"||_ in e||T(t,_,null,n[_],o);for(_ in e)l&&typeof e[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===e[_]||T(t,_,e[_],n[_],o)}function F(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Y.test(e)?n:n+"px"}function T(t,e,n,o,l){var _;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||F(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||F(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?o||t.addEventListener(e,_?I:H,_):t.removeEventListener(e,_?I:H,_);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch(s){}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function H(t){this.l[t.type+!1](d.event?d.event(t):t)}function I(t){this.l[t.type+!0](d.event?d.event(t):t)}function M(t,e,n,o,l,_,s,u,p){var a,r,h,c,i,f,b,v,y,m,w,g=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,u=e.__e=n.__e,e.__h=null,_=[u]),(a=d.__b)&&a(e);try{e:if(typeof g=="function"){if(v=e.props,y=(a=g.contextType)&&o[a.__c],m=a?y?y.props.value:a.__:o,n.__c?b=(r=e.__c=n.__c).__=r.__E:("prototype"in g&&g.prototype.render?e.__c=r=new g(v,m):(e.__c=r=new E(v,m),r.constructor=g,r.render=_e),y&&y.sub(r),r.props=v,r.state||(r.state={}),r.context=m,r.__n=o,h=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),g.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=k({},r.__s)),k(r.__s,g.getDerivedStateFromProps(v,r.__s))),c=r.props,i=r.state,h)g.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==c&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(v,m),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(v,r.__s,m)===!1||e.__v===n.__v){r.props=v,r.state=r.__s,e.__v!==n.__v&&(r.__d=!1),r.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(A){A&&(A.__=e)}),r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(v,r.__s,m),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(c,i,f)})}r.context=m,r.props=v,r.state=r.__s,(a=d.__r)&&a(e),r.__d=!1,r.__v=e,r.__P=t,a=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(o=k(k({},o),r.getChildContext())),h||r.getSnapshotBeforeUpdate==null||(f=r.getSnapshotBeforeUpdate(c,i)),w=a!=null&&a.type===N&&a.key==null?a.props.children:a,z(t,Array.isArray(w)?w:[w],e,n,o,l,_,s,u,p),r.base=e.__e,e.__h=null,r.__h.length&&s.push(r),b&&(r.__E=r.__=null),r.__e=!1}else _==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ne(n.__e,e,n,o,l,_,s,p);(a=d.diffed)&&a(e)}catch(A){e.__v=null,(p||_!=null)&&(e.__e=u,e.__h=!!p,_[_.indexOf(u)]=null),d.__e(A,e,n)}}function J(t,e){d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(o){o.call(n)})}catch(o){d.__e(o,n.__v)}})}function ne(t,e,n,o,l,_,s,u){var p,a,r,h=n.props,c=e.props,i=e.type,f=0;if(i==="svg"&&(l=!0),_!=null){for(;f<_.length;f++)if((p=_[f])&&"setAttribute"in p==!!i&&(i?p.localName===i:p.nodeType===3)){t=p,_[f]=null;break}}if(t==null){if(i===null)return document.createTextNode(c);t=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),_=null,u=!1}if(i===null)h===c||u&&t.data===c||(t.data=c);else{if(_=_&&S.call(t.childNodes),a=(h=n.props||U).dangerouslySetInnerHTML,r=c.dangerouslySetInnerHTML,!u){if(_!=null)for(h={},f=0;f<t.attributes.length;f++)h[t.attributes[f].name]=t.attributes[f].value;(r||a)&&(r&&(a&&r.__html==a.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(te(t,c,h,l,u),r)e.__k=[];else if(f=e.props.children,z(t,Array.isArray(f)?f:[f],e,n,o,l&&i!=="foreignObject",_,s,_?_[0]:n.__k&&C(n,0),u),_!=null)for(f=_.length;f--;)_[f]!=null&&V(_[f]);u||("value"in c&&(f=c.value)!==void 0&&(f!==h.value||f!==t.value||i==="progress"&&!f)&&T(t,"value",f,h.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==t.checked&&T(t,"checked",f,h.checked,!1))}return t}function K(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){d.__e(o,n)}}function Q(t,e,n){var o,l;if(d.unmount&&d.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||K(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){d.__e(_,e)}o.base=o.__P=null}if(o=t.__k)for(l=0;l<o.length;l++)o[l]&&Q(o[l],e,typeof t.type!="function");n||t.__e==null||V(t.__e),t.__e=t.__d=void 0}function _e(t,e,n){return this.constructor(t,n)}function re(t,e,n){var o,l,_;d.__&&d.__(t,e),l=(o=typeof n=="function")?null:n&&n.__k||e.__k,_=[],M(e,t=(!o&&n||e).__k=Z(N,null,[t]),l||U,U,e.ownerSVGElement!==void 0,!o&&n?[n]:l?null:e.firstChild?S.call(e.childNodes):null,_,!o&&n?n:l?l.__e:e.firstChild,o),J(_,t)}function oe(t,e){re(t,e,oe)}function ie(t,e,n){var o,l,_,s=k({},t.props);for(_ in e)_=="key"?o=e[_]:_=="ref"?l=e[_]:s[_]=e[_];return arguments.length>2&&(s.children=arguments.length>3?S.call(arguments,2):n),P(t.type,s,o||t.key,l||t.ref,null)}function se(t,e){var n={__c:e="__cC"+B++,__:t,Consumer:function(o,l){return o.children(l)},Provider:function(o){var l,_;return this.getChildContext||(l=[],(_={})[e]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&l.some(L)},this.sub=function(s){l.push(s);var u=s.componentWillUnmount;s.componentWillUnmount=function(){l.splice(l.indexOf(s),1),u&&u.call(s)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}S=$.slice,d={__e:function(t,e){for(var n,o,l;e=e.__;)if((n=e.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(t)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),l=n.__d),l)return n.__E=n}catch(_){t=_}throw t}},O=0,X=function(t){return t!=null&&t.constructor===void 0},E.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},n),this.props)),t&&k(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),L(this))},E.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),L(this))},E.prototype.render=N,x=[],R=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,B=0;export{d as a,X as b,Z as c,le as d,N as e,E as f,ee as g,re as h,oe as i,ie as j,se as k};
