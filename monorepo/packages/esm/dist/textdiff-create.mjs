var k=Object.create;var U=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var f=r=>U(r,"__esModule",{value:!0});var H=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports);var d=(r,a,n,g)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of q(a))!y.call(r,e)&&(n||e!=="default")&&U(r,e,{get:()=>a[e],enumerable:!(g=T(a,e))||g.enumerable});return r},x=(r,a)=>d(f(U(r!=null?k(C(r)):{},"default",!a&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var $=H((vr,Z)=>{var S=-1,w=1,I=0;function P(r,a,n,g){if(r===a)return r?[[I,r]]:[];if(n!=null){var e=er(r,a,n);if(e)return e}var l=j(r,a),i=r.substring(0,l);r=r.substring(l),a=a.substring(l),l=z(r,a);var v=r.substring(r.length-l);r=r.substring(0,r.length-l),a=a.substring(0,a.length-l);var h=rr(r,a);return i&&h.unshift([I,i]),v&&h.push([I,v]),K(h,g),h}function rr(r,a){var n;if(!r)return[[w,a]];if(!a)return[[S,r]];var g=r.length>a.length?r:a,e=r.length>a.length?a:r,l=g.indexOf(e);if(l!==-1)return n=[[w,g.substring(0,l)],[I,e],[w,g.substring(l+e.length)]],r.length>a.length&&(n[0][0]=n[2][0]=S),n;if(e.length===1)return[[S,r],[w,a]];var i=ar(r,a);if(i){var v=i[0],h=i[1],u=i[2],t=i[3],c=i[4],D=P(v,u),A=P(h,t);return D.concat([[I,c]],A)}return nr(r,a)}function nr(r,a){for(var n=r.length,g=a.length,e=Math.ceil((n+g)/2),l=e,i=2*e,v=new Array(i),h=new Array(i),u=0;u<i;u++)v[u]=-1,h[u]=-1;v[l+1]=0,h[l+1]=0;for(var t=n-g,c=t%2!==0,D=0,A=0,m=0,F=0,E=0;E<e;E++){for(var b=-E+D;b<=E-A;b+=2){var s=l+b,_;b===-E||b!==E&&v[s-1]<v[s+1]?_=v[s+1]:_=v[s-1]+1;for(var p=_-b;_<n&&p<g&&r.charAt(_)===a.charAt(p);)_++,p++;if(v[s]=_,_>n)A+=2;else if(p>g)D+=2;else if(c){var M=l+t-b;if(M>=0&&M<i&&h[M]!==-1){var o=n-h[M];if(_>=o)return J(r,a,_,p)}}}for(var R=-E+m;R<=E-F;R+=2){var M=l+R,o;R===-E||R!==E&&h[M-1]<h[M+1]?o=h[M+1]:o=h[M-1]+1;for(var O=o-R;o<n&&O<g&&r.charAt(n-o-1)===a.charAt(g-O-1);)o++,O++;if(h[M]=o,o>n)F+=2;else if(O>g)m+=2;else if(!c){var s=l+t-R;if(s>=0&&s<i&&v[s]!==-1){var _=v[s],p=l+_-s;if(o=n-o,_>=o)return J(r,a,_,p)}}}}return[[S,r],[w,a]]}function J(r,a,n,g){var e=r.substring(0,n),l=a.substring(0,g),i=r.substring(n),v=a.substring(g),h=P(e,l),u=P(i,v);return h.concat(u)}function j(r,a){if(!r||!a||r.charAt(0)!==a.charAt(0))return 0;for(var n=0,g=Math.min(r.length,a.length),e=g,l=0;n<e;)r.substring(l,e)==a.substring(l,e)?(n=e,l=n):g=e,e=Math.floor((g-n)/2+n);return V(r.charCodeAt(e-1))&&e--,e}function z(r,a){if(!r||!a||r.slice(-1)!==a.slice(-1))return 0;for(var n=0,g=Math.min(r.length,a.length),e=g,l=0;n<e;)r.substring(r.length-e,r.length-l)==a.substring(a.length-e,a.length-l)?(n=e,l=n):g=e,e=Math.floor((g-n)/2+n);return W(r.charCodeAt(r.length-e))&&e--,e}function ar(r,a){var n=r.length>a.length?r:a,g=r.length>a.length?a:r;if(n.length<4||g.length*2<n.length)return null;function e(A,m,F){for(var E=A.substring(F,F+Math.floor(A.length/4)),b=-1,s="",_,p,M,o;(b=m.indexOf(E,b+1))!==-1;){var R=j(A.substring(F),m.substring(b)),O=z(A.substring(0,F),m.substring(0,b));s.length<O+R&&(s=m.substring(b-O,b)+m.substring(b,b+R),_=A.substring(0,F-O),p=A.substring(F+R),M=m.substring(0,b-O),o=m.substring(b+R))}return s.length*2>=A.length?[_,p,M,o,s]:null}var l=e(n,g,Math.ceil(n.length/4)),i=e(n,g,Math.ceil(n.length/2)),v;if(!l&&!i)return null;i?l?v=l[4].length>i[4].length?l:i:v=i:v=l;var h,u,t,c;r.length>a.length?(h=v[0],u=v[1],t=v[2],c=v[3]):(t=v[0],c=v[1],h=v[2],u=v[3]);var D=v[4];return[h,u,t,c,D]}function K(r,a){r.push([I,""]);for(var n=0,g=0,e=0,l="",i="",v;n<r.length;){if(n<r.length-1&&!r[n][1]){r.splice(n,1);continue}switch(r[n][0]){case w:e++,i+=r[n][1],n++;break;case S:g++,l+=r[n][1],n++;break;case I:var h=n-e-g-1;if(a){if(h>=0&&Y(r[h][1])){var u=r[h][1].slice(-1);if(r[h][1]=r[h][1].slice(0,-1),l=u+l,i=u+i,!r[h][1]){r.splice(h,1),n--;var t=h-1;r[t]&&r[t][0]===w&&(e++,i=r[t][1]+i,t--),r[t]&&r[t][0]===S&&(g++,l=r[t][1]+l,t--),h=t}}if(X(r[n][1])){var u=r[n][1].charAt(0);r[n][1]=r[n][1].slice(1),l+=u,i+=u}}if(n<r.length-1&&!r[n][1]){r.splice(n,1);break}if(l.length>0||i.length>0){l.length>0&&i.length>0&&(v=j(i,l),v!==0&&(h>=0?r[h][1]+=i.substring(0,v):(r.splice(0,0,[I,i.substring(0,v)]),n++),i=i.substring(v),l=l.substring(v)),v=z(i,l),v!==0&&(r[n][1]=i.substring(i.length-v)+r[n][1],i=i.substring(0,i.length-v),l=l.substring(0,l.length-v)));var c=e+g;l.length===0&&i.length===0?(r.splice(n-c,c),n=n-c):l.length===0?(r.splice(n-c,c,[w,i]),n=n-c+1):i.length===0?(r.splice(n-c,c,[S,l]),n=n-c+1):(r.splice(n-c,c,[S,l],[w,i]),n=n-c+2)}n!==0&&r[n-1][0]===I?(r[n-1][1]+=r[n][1],r.splice(n,1)):n++,e=0,g=0,l="",i="";break}}r[r.length-1][1]===""&&r.pop();var D=!1;for(n=1;n<r.length-1;)r[n-1][0]===I&&r[n+1][0]===I&&(r[n][1].substring(r[n][1].length-r[n-1][1].length)===r[n-1][1]?(r[n][1]=r[n-1][1]+r[n][1].substring(0,r[n][1].length-r[n-1][1].length),r[n+1][1]=r[n-1][1]+r[n+1][1],r.splice(n-1,1),D=!0):r[n][1].substring(0,r[n+1][1].length)==r[n+1][1]&&(r[n-1][1]+=r[n+1][1],r[n][1]=r[n][1].substring(r[n+1][1].length)+r[n+1][1],r.splice(n+1,1),D=!0)),n++;D&&K(r,a)}function V(r){return r>=55296&&r<=56319}function W(r){return r>=56320&&r<=57343}function X(r){return W(r.charCodeAt(0))}function Y(r){return V(r.charCodeAt(r.length-1))}function lr(r){for(var a=[],n=0;n<r.length;n++)r[n][1].length>0&&a.push(r[n]);return a}function G(r,a,n,g){return Y(r)||X(g)?null:lr([[I,r],[S,a],[w,n],[I,g]])}function er(r,a,n){var g=typeof n=="number"?{index:n,length:0}:n.oldRange,e=typeof n=="number"?null:n.newRange,l=r.length,i=a.length;if(g.length===0&&(e===null||e.length===0)){var v=g.index,h=r.slice(0,v),u=r.slice(v),t=e?e.index:null;r:{var c=v+i-l;if(t!==null&&t!==c||c<0||c>i)break r;var D=a.slice(0,c),A=a.slice(c);if(A!==u)break r;var m=Math.min(v,c),F=h.slice(0,m),E=D.slice(0,m);if(F!==E)break r;var b=h.slice(m),s=D.slice(m);return G(F,b,s,u)}r:{if(t!==null&&t!==v)break r;var _=v,D=a.slice(0,_),A=a.slice(_);if(D!==h)break r;var p=Math.min(l-_,i-_),M=u.slice(u.length-p),o=A.slice(A.length-p);if(M!==o)break r;var b=u.slice(0,u.length-p),s=A.slice(0,A.length-p);return G(h,b,s,M)}}if(g.length>0&&e&&e.length===0){r:{var F=r.slice(0,g.index),M=r.slice(g.index+g.length),m=F.length,p=M.length;if(i<m+p)break r;var E=a.slice(0,m),o=a.slice(i-p);if(F!==E||M!==o)break r;var b=r.slice(m,l-p),s=a.slice(m,i-p);return G(F,b,s,M)}}return null}function Q(r,a,n){return P(r,a,n,!0)}Q.INSERT=w;Q.DELETE=S;Q.EQUAL=I;Z.exports=Q});var B=H((hr,N)=>{"use strict";var ir=$();N.exports=function(r,a){for(var n=ir(r,a),g=0;g<n.length;g++){var e=n[g];e[0]<1&&(e[1]=e[1].length)}return n}});var L=x(B(),1),cr=L.default;export{cr as default};
