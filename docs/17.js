(this.webpackJsonp=this.webpackJsonp||[]).push([[17],{176:function(t,e){var s,i,n,r,o,a,c,f,h,u,l,_,d,v,p,g,k,m,w,M,b;i=(s=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}})((function(t,e){"use strict";var s=function(){},i=Object.prototype.hasOwnProperty,n=Array.prototype.slice;function r(t,e,s){for(var r,o,a=0,c=(s=n.call(arguments,2)).length;a<c;a++)for(r in o=s[a])t&&!i.call(o,r)||(e[r]=o[r])}e.exports=function(t,e,i,n){var o=this;return"string"!=typeof t&&(n=i,i=e,e=t,t=null),"function"!=typeof e&&(n=i,i=e,e=function(){return o.apply(this,arguments)}),r(!1,e,o,n),e.prototype=function(t,e){var i;return"function"==typeof Object.create?i=Object.create(t):(s.prototype=t,i=new s,s.prototype=null),e&&r(!0,i,e),i}(o.prototype,i),e.prototype.constructor=e,e.class_=t||o.class_,e.super_=o,e}})),n=s((function(t,e){"use strict";var s=i();function n(){}n.class_="Nevis",n.super_=Object,n.extend=s,e.exports=n})),r=s((function(t,e){"use strict";e.exports=n()})),o=s((function(t,e){"use strict";var s=r().extend((function(t,e,s){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(s)}),{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,s=e.padding||0,i=Math.floor((e.size-2*s)/t.width);return Math.max(1,i)},getOffset:function(t){var e=this.qrious,s=e.padding;if(null!=s)return s;var i=this.getModuleSize(t),n=Math.floor((e.size-i*t.width)/2);return Math.max(0,n)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}});e.exports=s})),a=s((function(t,e){"use strict";var s=o().extend({draw:function(t){var e,s,i=this.qrious,n=this.getModuleSize(t),r=this.getOffset(t),o=this.element.getContext("2d");for(o.fillStyle=i.foreground,o.globalAlpha=i.foregroundAlpha,e=0;e<t.width;e++)for(s=0;s<t.width;s++)t.buffer[s*t.width+e]&&o.fillRect(n*e+r,n*s+r,n,n)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),s=t.size;e.lineWidth=1,e.clearRect(0,0,s,s),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,s,s)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}});e.exports=s})),c=s((function(t,e){"use strict";var s=r().extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]});e.exports=s})),f=s((function(t,e){"use strict";var s=r().extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}});e.exports=s})),h=s((function(t,e){"use strict";var s=r().extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]});e.exports=s})),u=s((function(t,e){"use strict";var s=r().extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]});e.exports=s})),l=s((function(t,e){"use strict";var s=r(),i=c(),n=f(),o=h(),a=u(),l=s.extend((function(t){var e,s,i,r,o,a=t.value.length;for(this._badness=[],this._level=n.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,i=4*(this._level-1)+16*(this._version-1),r=n.BLOCKS[i++],o=n.BLOCKS[i++],e=n.BLOCKS[i++],s=n.BLOCKS[i],!(a<=(i=e*(r+o)+o-3+(this._version<=9)))););this._dataBlock=e,this._eccBlock=s,this._neccBlock1=r,this._neccBlock2=o;var c=this.width=17+4*this._version;this.buffer=l._createArray(c*c),this._ecc=l._createArray(e+(e+s)*(r+o)+o),this._mask=l._createArray((c*(c+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+c*(c-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(a),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()}),{_addAlignment:function(t,e){var s,i=this.buffer,n=this.width;for(i[t+n*e]=1,s=-2;s<2;s++)i[t+s+n*(e-2)]=1,i[t-2+n*(e+s+1)]=1,i[t+2+n*(e+s)]=1,i[t+s+1+n*(e+2)]=1;for(s=0;s<2;s++)this._setMask(t-1,e+s),this._setMask(t+1,e-s),this._setMask(t-s,e-1),this._setMask(t+s,e+1)},_appendData:function(t,e,s,i){var n,r,a,c=this._polynomial,f=this._stringBuffer;for(r=0;r<i;r++)f[s+r]=0;for(r=0;r<e;r++){if(255!==(n=o.LOG[f[t+r]^f[s]]))for(a=1;a<i;a++)f[s+a-1]=f[s+a]^o.EXPONENT[l._modN(n+c[i-a])];else for(a=s;a<s+i;a++)f[a]=f[a+1];f[s+i-1]=255===n?0:o.EXPONENT[l._modN(n+c[0])]}},_appendEccToData:function(){var t,e=0,s=this._dataBlock,i=this._calculateMaxLength(),n=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,s,i,n),e+=s,i+=n;for(t=0;t<this._neccBlock2;t++)this._appendData(e,s+1,i,n),e+=s+1,i+=n},_applyMask:function(t){var e,s,i,n,r=this.buffer,o=this.width;switch(t){case 0:for(n=0;n<o;n++)for(i=0;i<o;i++)i+n&1||this._isMasked(i,n)||(r[i+n*o]^=1);break;case 1:for(n=0;n<o;n++)for(i=0;i<o;i++)1&n||this._isMasked(i,n)||(r[i+n*o]^=1);break;case 2:for(n=0;n<o;n++)for(e=0,i=0;i<o;i++,e++)3===e&&(e=0),e||this._isMasked(i,n)||(r[i+n*o]^=1);break;case 3:for(s=0,n=0;n<o;n++,s++)for(3===s&&(s=0),e=s,i=0;i<o;i++,e++)3===e&&(e=0),e||this._isMasked(i,n)||(r[i+n*o]^=1);break;case 4:for(n=0;n<o;n++)for(e=0,s=n>>1&1,i=0;i<o;i++,e++)3===e&&(e=0,s=!s),s||this._isMasked(i,n)||(r[i+n*o]^=1);break;case 5:for(s=0,n=0;n<o;n++,s++)for(3===s&&(s=0),e=0,i=0;i<o;i++,e++)3===e&&(e=0),(i&n&1)+!(!e|!s)||this._isMasked(i,n)||(r[i+n*o]^=1);break;case 6:for(s=0,n=0;n<o;n++,s++)for(3===s&&(s=0),e=0,i=0;i<o;i++,e++)3===e&&(e=0),(i&n&1)+(e&&e===s)&1||this._isMasked(i,n)||(r[i+n*o]^=1);break;case 7:for(s=0,n=0;n<o;n++,s++)for(3===s&&(s=0),e=0,i=0;i<o;i++,e++)3===e&&(e=0),(e&&e===s)+(i+n&1)&1||this._isMasked(i,n)||(r[i+n*o]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,s=this._eccBlock,i=this._polynomial;for(i[0]=1,t=0;t<s;t++){for(i[t+1]=1,e=t;e>0;e--)i[e]=i[e]?i[e-1]^o.EXPONENT[l._modN(o.LOG[i[e]]+t)]:i[e-1];i[0]=o.EXPONENT[l._modN(o.LOG[i[0]]+t)]}for(t=0;t<=s;t++)i[t]=o.LOG[i[t]]},_checkBadness:function(){var t,e,s,i,n,r=0,o=this._badness,a=this.buffer,c=this.width;for(n=0;n<c-1;n++)for(i=0;i<c-1;i++)(a[i+c*n]&&a[i+1+c*n]&&a[i+c*(n+1)]&&a[i+1+c*(n+1)]||!(a[i+c*n]||a[i+1+c*n]||a[i+c*(n+1)]||a[i+1+c*(n+1)]))&&(r+=l.N2);var f=0;for(n=0;n<c;n++){for(s=0,o[0]=0,t=0,i=0;i<c;i++)t===(e=a[i+c*n])?o[s]++:o[++s]=1,f+=(t=e)?1:-1;r+=this._getBadness(s)}f<0&&(f=-f);var h=0,u=f;for(u+=u<<2,u<<=1;u>c*c;)u-=c*c,h++;for(r+=h*l.N4,i=0;i<c;i++){for(s=0,o[0]=0,t=0,n=0;n<c;n++)t===(e=a[i+c*n])?o[s]++:o[++s]=1,t=e;r+=this._getBadness(s)}return r},_convertBitStream:function(t){var e,s,i=this._ecc,n=this._version;for(s=0;s<t;s++)i[s]=this._value.charCodeAt(s);var r=this._stringBuffer=i.slice(),o=this._calculateMaxLength();t>=o-2&&(t=o-2,n>9&&t--);var a=t;if(n>9){for(r[a+2]=0,r[a+3]=0;a--;)e=r[a],r[a+3]|=255&e<<4,r[a+2]=e>>4;r[2]|=255&t<<4,r[1]=t>>4,r[0]=64|t>>12}else{for(r[a+1]=0,r[a+2]=0;a--;)e=r[a],r[a+2]|=255&e<<4,r[a+1]=e>>4;r[1]|=255&t<<4,r[0]=64|t>>4}for(a=t+3-(n<10);a<o;)r[a++]=236,r[a++]=17},_getBadness:function(t){var e,s=0,i=this._badness;for(e=0;e<=t;e++)i[e]>=5&&(s+=l.N1+i[e]-5);for(e=3;e<t-1;e+=2)i[e-2]===i[e+2]&&i[e+2]===i[e-1]&&i[e-1]===i[e+1]&&3*i[e-1]===i[e]&&(0===i[e-3]||e+3>t||3*i[e-3]>=4*i[e]||3*i[e+3]>=4*i[e])&&(s+=l.N3);return s},_finish:function(){var t,e;this._stringBuffer=this.buffer.slice();var s=0,i=3e4;for(e=0;e<8&&(this._applyMask(e),(t=this._checkBadness())<i&&(i=t,s=e),7!==s);e++)this.buffer=this._stringBuffer.slice();s!==e&&this._applyMask(s),i=n.FINAL_FORMAT[s+(this._level-1<<3)];var r=this.buffer,o=this.width;for(e=0;e<8;e++,i>>=1)1&i&&(r[o-1-e+8*o]=1,e<6?r[8+o*e]=1:r[8+o*(e+1)]=1);for(e=0;e<7;e++,i>>=1)1&i&&(r[8+o*(o-7+e)]=1,e?r[6-e+8*o]=1:r[7+8*o]=1)},_interleaveBlocks:function(){var t,e,s=this._dataBlock,i=this._ecc,n=this._eccBlock,r=0,o=this._calculateMaxLength(),a=this._neccBlock1,c=this._neccBlock2,f=this._stringBuffer;for(t=0;t<s;t++){for(e=0;e<a;e++)i[r++]=f[t+e*s];for(e=0;e<c;e++)i[r++]=f[a*s+t+e*(s+1)]}for(e=0;e<c;e++)i[r++]=f[a*s+t+e*(s+1)];for(t=0;t<n;t++)for(e=0;e<a+c;e++)i[r++]=f[o+t+e*n];this._stringBuffer=i},_insertAlignments:function(){var t,e,s,n=this._version,r=this.width;if(n>1)for(t=i.BLOCK[n],s=r-7;;){for(e=r-7;e>t-3&&(this._addAlignment(e,s),!(e<t));)e-=t;if(s<=t+9)break;s-=t,this._addAlignment(6,s),this._addAlignment(s,6)}},_insertFinders:function(){var t,e,s,i,n=this.buffer,r=this.width;for(t=0;t<3;t++){for(e=0,i=0,1===t&&(e=r-7),2===t&&(i=r-7),n[i+3+r*(e+3)]=1,s=0;s<6;s++)n[i+s+r*e]=1,n[i+r*(e+s+1)]=1,n[i+6+r*(e+s)]=1,n[i+s+1+r*(e+6)]=1;for(s=1;s<5;s++)this._setMask(i+s,e+1),this._setMask(i+1,e+s+1),this._setMask(i+5,e+s),this._setMask(i+s+1,e+5);for(s=2;s<4;s++)n[i+s+r*(e+2)]=1,n[i+2+r*(e+s+1)]=1,n[i+4+r*(e+s)]=1,n[i+s+1+r*(e+4)]=1}},_insertTimingGap:function(){var t,e,s=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(s-8,e),this._setMask(7,e+s-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+s-8,7),this._setMask(t,s-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,s=this.width;for(t=0;t<s-14;t++)1&t?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+6*s]=1,e[6+s*(8+t)]=1)},_insertVersion:function(){var t,e,s,i,n=this.buffer,r=this._version,o=this.width;if(r>6)for(t=a.BLOCK[r-7],e=17,s=0;s<6;s++)for(i=0;i<3;i++,e--)1&(e>11?r>>e-12:t>>e)?(n[5-s+o*(2-i+o-11)]=1,n[2-i+o-11+o*(5-s)]=1):(this._setMask(5-s,2-i+o-11),this._setMask(2-i+o-11,5-s))},_isMasked:function(t,e){var s=l._getMaskBit(t,e);return 1===this._mask[s]},_pack:function(){var t,e,s,i=1,n=1,r=this.width,o=r-1,a=r-1,c=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<c;e++)for(t=this._stringBuffer[e],s=0;s<8;s++,t<<=1){128&t&&(this.buffer[o+r*a]=1);do{n?o--:(o++,i?0!==a?a--:(i=!i,6==(o-=2)&&(o--,a=9)):a!==r-1?a++:(i=!i,6==(o-=2)&&(o--,a-=8))),n=!n}while(this._isMasked(o,a))}},_reverseMask:function(){var t,e,s=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+s-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+s-7)},_setMask:function(t,e){var s=l._getMaskBit(t,e);this._mask[s]=1},_syncMask:function(){var t,e,s=this.width;for(e=0;e<s;e++)for(t=0;t<=e;t++)this.buffer[t+s*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,s=[];for(e=0;e<t;e++)s[e]=0;return s},_getMaskBit:function(t,e){var s;return t>e&&(s=t,t=e,e=s),s=e,s+=e*e,s>>=1,s+=t},_modN:function(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t},N1:3,N2:3,N3:40,N4:10});e.exports=l})),_=s((function(t,e){"use strict";var s=o().extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}});e.exports=s})),d=s((function(t,e){"use strict";var s=r().extend((function(t,e,s,i){this.name=t,this.modifiable=Boolean(e),this.defaultValue=s,this._valueTransformer=i}),{transform:function(t){var e=this._valueTransformer;return"function"==typeof e?e(t,this):t}});e.exports=s})),v=s((function(t,e){"use strict";var s=r().extend(null,{abs:function(t){return null!=t?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return null!=t?t.toUpperCase():null}});e.exports=s})),p=s((function(t,e){"use strict";var s=r(),i=v(),n=s.extend((function(t){this.options={},t.forEach((function(t){this.options[t.name]=t}),this)}),{exists:function(t){return null!=this.options[t]},get:function(t,e){return n._get(this.options[t],e)},getAll:function(t){var e,s=this.options,r={};for(e in s)i.hasOwn(s,e)&&(r[e]=n._get(s[e],t));return r},init:function(t,e,s){var r,o;for(r in"function"!=typeof s&&(s=i.noop),this.options)i.hasOwn(this.options,r)&&(o=this.options[r],n._set(o,o.defaultValue,e),n._createAccessor(o,e,s));this._setAll(t,e,!0)},set:function(t,e,s){return this._set(t,e,s)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,s,i){var r=this.options[t];if(!r)throw new Error("Invalid option: "+t);if(!r.modifiable&&!i)throw new Error("Option cannot be modified: "+t);return n._set(r,e,s)},_setAll:function(t,e,s){if(!t)return!1;var n,r=!1;for(n in t)i.hasOwn(t,n)&&this._set(n,t[n],e,s)&&(r=!0);return r}},{_createAccessor:function(t,e,s){var i={get:function(){return n._get(t,e)}};t.modifiable&&(i.set=function(i){n._set(t,i,e)&&s(i,t)}),Object.defineProperty(e,t.name,i)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,s){var i="_"+t.name,n=s[i],r=t.transform(null!=e?e:t.defaultValue);return s[i]=r,r!==n}});e.exports=n})),g=s((function(t,e){"use strict";var s=r().extend((function(){this._services={}}),{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}});e.exports=s})),k=s((function(t,e){"use strict";var s=r(),i=a(),n=l(),o=_(),c=d(),f=p(),h=g(),u=v(),k=new f([new c("background",!0,"white"),new c("backgroundAlpha",!0,1,u.abs),new c("element"),new c("foreground",!0,"black"),new c("foregroundAlpha",!0,1,u.abs),new c("level",!0,"L",u.toUpperCase),new c("mime",!0,"image/png"),new c("padding",!0,null,u.abs),new c("size",!0,100,u.abs),new c("value",!0,"")]),m=new h,w=s.extend((function(t){k.init(t,this,this.update.bind(this));var e=k.get("element",this),s=m.getService("element"),n=e&&s.isCanvas(e)?e:s.createCanvas(),r=e&&s.isImage(e)?e:s.createImage();this._canvasRenderer=new i(this,n,!0),this._imageRenderer=new o(this,r,r===e),this.update()}),{get:function(){return k.getAll(this)},set:function(t){k.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new n({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){m.setService(t.getName(),t)}});Object.defineProperties(w.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}}),e.exports=w})),m=s((function(t,e){"use strict";e.exports=k()})),w=s((function(t,e){"use strict";var s=r().extend({getName:function(){}});e.exports=s})),M=s((function(t,e){"use strict";var s=w().extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}});e.exports=s})),b=s((function(t,e){"use strict";var s=M().extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}});e.exports=s})),s((function(t,e){"use strict";var s=m(),i=b();s.use(new i),e.exports=s}))()}}]);