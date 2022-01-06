var dn = Object.create;
var Se = Object.defineProperty;
var yn = Object.getOwnPropertyDescriptor;
var mn = Object.getOwnPropertyNames;
var gn = Object.getPrototypeOf, bn = Object.prototype.hasOwnProperty;
var wn = (r) => Se(r, "__esModule", { value: !0 });
var m = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
  B = (r, e) => {
    for (var t in e) Se(r, t, { get: e[t], enumerable: !0 });
  },
  xn = (r, e, t, n) => {
    if (e && typeof e == "object" || typeof e == "function") {
      for (let o of mn(e)) {
        !bn.call(r, o) && (t || o !== "default") &&
          Se(r, o, {
            get: () => e[o],
            enumerable: !(n = yn(e, o)) || n.enumerable,
          });
      }
    }
    return r;
  },
  re = (r, e) =>
    xn(
      wn(Se(
        r != null ? dn(gn(r)) : {},
        "default",
        !e && r && r.__esModule
          ? { get: () => r.default, enumerable: !0 }
          : { value: r, enumerable: !0 },
      )),
      r,
    );
var _t = m((ii, Tt) => {
  "use strict";
  var Sn = async (r) => {
    let e = [];
    for await (let t of r) e.push(t);
    return e;
  };
  Tt.exports = Sn;
});
var Xt = m((Wi, Qt) => {
  "use strict";
  async function* ho(r, e = {}) {
    let t = r.getReader();
    try {
      for (;;) {
        let n = await t.read();
        if (n.done) return;
        yield n.value;
      }
    } finally {
      e.preventCancel !== !0 && t.cancel(), t.releaseLock();
    }
  }
  Qt.exports = ho;
});
var We = m((Gi, Kt) => {
  "use strict";
  function Zt(r, e) {
    for (let t in e) {
      Object.defineProperty(r, t, {
        value: e[t],
        enumerable: !0,
        configurable: !0,
      });
    }
    return r;
  }
  function po(r, e, t) {
    if (!r || typeof r == "string") {
      throw new TypeError("Please pass an Error to err-code");
    }
    t || (t = {}), typeof e == "object" && (t = e, e = ""), e && (t.code = e);
    try {
      return Zt(r, t);
    } catch (n) {
      t.message = r.message, t.stack = r.stack;
      let o = function () {};
      return o.prototype = Object.create(Object.getPrototypeOf(r)),
        Zt(new o(), t);
    }
  }
  Kt.exports = po;
});
var er = m((Qi, Yt) => {
  "use strict";
  Yt.exports = yo;
  function yo(r, e) {
    for (
      var t = new Array(arguments.length - 1), n = 0, o = 2, i = !0;
      o < arguments.length;
    ) {
      t[n++] = arguments[o++];
    }
    return new Promise(function (c, a) {
      t[n] = function (u) {
        if (i) {
          if (i = !1, u) a(u);
          else {
            for (
              var w = new Array(arguments.length - 1), T = 0;
              T < w.length;
            ) {
              w[T++] = arguments[T];
            }
            c.apply(null, w);
          }
        }
      };
      try {
        r.apply(e || null, t);
      } catch (f) {
        i && (i = !1, a(f));
      }
    });
  }
});
var or = m((nr) => {
  "use strict";
  var Ce = nr;
  Ce.length = function (e) {
    var t = e.length;
    if (!t) return 0;
    for (var n = 0; --t % 4 > 1 && e.charAt(t) === "=";) ++n;
    return Math.ceil(e.length * 3) / 4 - n;
  };
  var ce = new Array(64), tr = new Array(123);
  for (z = 0; z < 64;) {
    tr[
      ce[z] = z < 26 ? z + 65 : z < 52 ? z + 71 : z < 62 ? z - 4 : z - 59 | 43
    ] = z++;
  }
  var z;
  Ce.encode = function (e, t, n) {
    for (var o = null, i = [], s = 0, c = 0, a; t < n;) {
      var f = e[t++];
      switch (c) {
        case 0:
          i[s++] = ce[f >> 2], a = (f & 3) << 4, c = 1;
          break;
        case 1:
          i[s++] = ce[a | f >> 4], a = (f & 15) << 2, c = 2;
          break;
        case 2:
          i[s++] = ce[a | f >> 6], i[s++] = ce[f & 63], c = 0;
          break;
      }
      s > 8191 &&
        ((o || (o = [])).push(String.fromCharCode.apply(String, i)), s = 0);
    }
    return c && (i[s++] = ce[a], i[s++] = 61, c === 1 && (i[s++] = 61)),
      o
        ? (s && o.push(String.fromCharCode.apply(String, i.slice(0, s))),
          o.join(""))
        : String.fromCharCode.apply(String, i.slice(0, s));
  };
  var rr = "invalid encoding";
  Ce.decode = function (e, t, n) {
    for (var o = n, i = 0, s, c = 0; c < e.length;) {
      var a = e.charCodeAt(c++);
      if (a === 61 && i > 1) break;
      if ((a = tr[a]) === void 0) throw Error(rr);
      switch (i) {
        case 0:
          s = a, i = 1;
          break;
        case 1:
          t[n++] = s << 2 | (a & 48) >> 4, s = a, i = 2;
          break;
        case 2:
          t[n++] = (s & 15) << 4 | (a & 60) >> 2, s = a, i = 3;
          break;
        case 3:
          t[n++] = (s & 3) << 6 | a, i = 0;
          break;
      }
    }
    if (i === 1) throw Error(rr);
    return n - o;
  };
  Ce.test = function (e) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
      .test(e);
  };
});
var sr = m((Zi, ir) => {
  "use strict";
  ir.exports = Ae;
  function Ae() {
    this._listeners = {};
  }
  Ae.prototype.on = function (e, t, n) {
    return (this._listeners[e] || (this._listeners[e] = [])).push({
      fn: t,
      ctx: n || this,
    }),
      this;
  };
  Ae.prototype.off = function (e, t) {
    if (e === void 0) this._listeners = {};
    else if (t === void 0) this._listeners[e] = [];
    else {
      for (var n = this._listeners[e], o = 0; o < n.length;) {
        n[o].fn === t ? n.splice(o, 1) : ++o;
      }
    }
    return this;
  };
  Ae.prototype.emit = function (e) {
    var t = this._listeners[e];
    if (t) {
      for (var n = [], o = 1; o < arguments.length;) n.push(arguments[o++]);
      for (o = 0; o < t.length;) t[o].fn.apply(t[o++].ctx, n);
    }
    return this;
  };
});
var pr = m((Ki, hr) => {
  "use strict";
  hr.exports = ar(ar);
  function ar(r) {
    return typeof Float32Array != "undefined"
      ? function () {
        var e = new Float32Array([-0]),
          t = new Uint8Array(e.buffer),
          n = t[3] === 128;
        function o(a, f, u) {
          e[0] = a,
            f[u] = t[0],
            f[u + 1] = t[1],
            f[u + 2] = t[2],
            f[u + 3] = t[3];
        }
        function i(a, f, u) {
          e[0] = a,
            f[u] = t[3],
            f[u + 1] = t[2],
            f[u + 2] = t[1],
            f[u + 3] = t[0];
        }
        r.writeFloatLE = n ? o : i, r.writeFloatBE = n ? i : o;
        function s(a, f) {
          return t[0] = a[f],
            t[1] = a[f + 1],
            t[2] = a[f + 2],
            t[3] = a[f + 3],
            e[0];
        }
        function c(a, f) {
          return t[3] = a[f],
            t[2] = a[f + 1],
            t[1] = a[f + 2],
            t[0] = a[f + 3],
            e[0];
        }
        r.readFloatLE = n ? s : c, r.readFloatBE = n ? c : s;
      }()
      : function () {
        function e(n, o, i, s) {
          var c = o < 0 ? 1 : 0;
          if (c && (o = -o), o === 0) n(1 / o > 0 ? 0 : 2147483648, i, s);
          else if (isNaN(o)) n(2143289344, i, s);
          else if (o > 34028234663852886e22) {
            n(
              (c << 31 | 2139095040) >>> 0,
              i,
              s,
            );
          } else if (o < 11754943508222875e-54) {
            n(
              (c << 31 | Math.round(o / 1401298464324817e-60)) >>> 0,
              i,
              s,
            );
          } else {
            var a = Math.floor(Math.log(o) / Math.LN2),
              f = Math.round(o * Math.pow(2, -a) * 8388608) & 8388607;
            n((c << 31 | a + 127 << 23 | f) >>> 0, i, s);
          }
        }
        r.writeFloatLE = e.bind(null, cr), r.writeFloatBE = e.bind(null, fr);
        function t(n, o, i) {
          var s = n(o, i),
            c = (s >> 31) * 2 + 1,
            a = s >>> 23 & 255,
            f = s & 8388607;
          return a === 255
            ? f ? NaN : c * (1 / 0)
            : a === 0
            ? c * 1401298464324817e-60 * f
            : c * Math.pow(2, a - 150) * (f + 8388608);
        }
        r.readFloatLE = t.bind(null, ur), r.readFloatBE = t.bind(null, lr);
      }(),
      typeof Float64Array != "undefined"
        ? function () {
          var e = new Float64Array([-0]),
            t = new Uint8Array(e.buffer),
            n = t[7] === 128;
          function o(a, f, u) {
            e[0] = a,
              f[u] = t[0],
              f[u + 1] = t[1],
              f[u + 2] = t[2],
              f[u + 3] = t[3],
              f[u + 4] = t[4],
              f[u + 5] = t[5],
              f[u + 6] = t[6],
              f[u + 7] = t[7];
          }
          function i(a, f, u) {
            e[0] = a,
              f[u] = t[7],
              f[u + 1] = t[6],
              f[u + 2] = t[5],
              f[u + 3] = t[4],
              f[u + 4] = t[3],
              f[u + 5] = t[2],
              f[u + 6] = t[1],
              f[u + 7] = t[0];
          }
          r.writeDoubleLE = n ? o : i, r.writeDoubleBE = n ? i : o;
          function s(a, f) {
            return t[0] = a[f],
              t[1] = a[f + 1],
              t[2] = a[f + 2],
              t[3] = a[f + 3],
              t[4] = a[f + 4],
              t[5] = a[f + 5],
              t[6] = a[f + 6],
              t[7] = a[f + 7],
              e[0];
          }
          function c(a, f) {
            return t[7] = a[f],
              t[6] = a[f + 1],
              t[5] = a[f + 2],
              t[4] = a[f + 3],
              t[3] = a[f + 4],
              t[2] = a[f + 5],
              t[1] = a[f + 6],
              t[0] = a[f + 7],
              e[0];
          }
          r.readDoubleLE = n ? s : c, r.readDoubleBE = n ? c : s;
        }()
        : function () {
          function e(n, o, i, s, c, a) {
            var f = s < 0 ? 1 : 0;
            if (f && (s = -s), s === 0) {
              n(0, c, a + o), n(1 / s > 0 ? 0 : 2147483648, c, a + i);
            } else if (isNaN(s)) n(0, c, a + o), n(2146959360, c, a + i);
            else if (s > 17976931348623157e292) {
              n(0, c, a + o), n((f << 31 | 2146435072) >>> 0, c, a + i);
            } else {
              var u;
              if (s < 22250738585072014e-324) {
                u = s / 5e-324,
                  n(u >>> 0, c, a + o),
                  n((f << 31 | u / 4294967296) >>> 0, c, a + i);
              } else {
                var w = Math.floor(Math.log(s) / Math.LN2);
                w === 1024 && (w = 1023),
                  u = s * Math.pow(2, -w),
                  n(u * 4503599627370496 >>> 0, c, a + o),
                  n(
                    (f << 31 | w + 1023 << 20 | u * 1048576 & 1048575) >>> 0,
                    c,
                    a + i,
                  );
              }
            }
          }
          r.writeDoubleLE = e.bind(null, cr, 0, 4),
            r.writeDoubleBE = e.bind(null, fr, 4, 0);
          function t(n, o, i, s, c) {
            var a = n(s, c + o),
              f = n(s, c + i),
              u = (f >> 31) * 2 + 1,
              w = f >>> 20 & 2047,
              T = 4294967296 * (f & 1048575) + a;
            return w === 2047
              ? T ? NaN : u * (1 / 0)
              : w === 0
              ? u * 5e-324 * T
              : u * Math.pow(2, w - 1075) * (T + 4503599627370496);
          }
          r.readDoubleLE = t.bind(null, ur, 0, 4),
            r.readDoubleBE = t.bind(null, lr, 4, 0);
        }(),
      r;
  }
  function cr(r, e, t) {
    e[t] = r & 255,
      e[t + 1] = r >>> 8 & 255,
      e[t + 2] = r >>> 16 & 255,
      e[t + 3] = r >>> 24;
  }
  function fr(r, e, t) {
    e[t] = r >>> 24,
      e[t + 1] = r >>> 16 & 255,
      e[t + 2] = r >>> 8 & 255,
      e[t + 3] = r & 255;
  }
  function ur(r, e) {
    return (r[e] | r[e + 1] << 8 | r[e + 2] << 16 | r[e + 3] << 24) >>> 0;
  }
  function lr(r, e) {
    return (r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]) >>> 0;
  }
});
var dr = m((exports, module) => {
  "use strict";
  module.exports = inquire;
  function inquire(moduleName) {
    try {
      var mod = eval("quire".replace(/^/, "re"))(moduleName);
      if (mod && (mod.length || Object.keys(mod).length)) return mod;
    } catch (r) {}
    return null;
  }
});
var mr = m((yr) => {
  "use strict";
  var Ge = yr;
  Ge.length = function (e) {
    for (var t = 0, n = 0, o = 0; o < e.length; ++o) {
      n = e.charCodeAt(o),
        n < 128
          ? t += 1
          : n < 2048
          ? t += 2
          : (n & 64512) === 55296 && (e.charCodeAt(o + 1) & 64512) === 56320
          ? (++o, t += 4)
          : t += 3;
    }
    return t;
  };
  Ge.read = function (e, t, n) {
    var o = n - t;
    if (o < 1) return "";
    for (var i = null, s = [], c = 0, a; t < n;) {
      a = e[t++],
        a < 128
          ? s[c++] = a
          : a > 191 && a < 224
          ? s[c++] = (a & 31) << 6 | e[t++] & 63
          : a > 239 && a < 365
          ? (a = ((a & 7) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 |
            e[t++] & 63) - 65536,
            s[c++] = 55296 + (a >> 10),
            s[c++] = 56320 + (a & 1023))
          : s[c++] = (a & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63,
        c > 8191 &&
        ((i || (i = [])).push(String.fromCharCode.apply(String, s)), c = 0);
    }
    return i
      ? (c && i.push(String.fromCharCode.apply(String, s.slice(0, c))),
        i.join(""))
      : String.fromCharCode.apply(String, s.slice(0, c));
  };
  Ge.write = function (e, t, n) {
    for (var o = n, i, s, c = 0; c < e.length; ++c) {
      i = e.charCodeAt(c),
        i < 128
          ? t[n++] = i
          : i < 2048
          ? (t[n++] = i >> 6 | 192, t[n++] = i & 63 | 128)
          : (i & 64512) === 55296 &&
              ((s = e.charCodeAt(c + 1)) & 64512) === 56320
          ? (i = 65536 + ((i & 1023) << 10) + (s & 1023),
            ++c,
            t[n++] = i >> 18 | 240,
            t[n++] = i >> 12 & 63 | 128,
            t[n++] = i >> 6 & 63 | 128,
            t[n++] = i & 63 | 128)
          : (t[n++] = i >> 12 | 224,
            t[n++] = i >> 6 & 63 | 128,
            t[n++] = i & 63 | 128);
    }
    return n - o;
  };
});
var br = m((es, gr) => {
  "use strict";
  gr.exports = mo;
  function mo(r, e, t) {
    var n = t || 8192, o = n >>> 1, i = null, s = n;
    return function (a) {
      if (a < 1 || a > o) return r(a);
      s + a > n && (i = r(n), s = 0);
      var f = e.call(i, s, s += a);
      return s & 7 && (s = (s | 7) + 1), f;
    };
  }
});
var xr = m((ts, wr) => {
  "use strict";
  wr.exports = x;
  var ye = Q();
  function x(r, e) {
    this.lo = r >>> 0, this.hi = e >>> 0;
  }
  var Y = x.zero = new x(0, 0);
  Y.toNumber = function () {
    return 0;
  };
  Y.zzEncode = Y.zzDecode = function () {
    return this;
  };
  Y.length = function () {
    return 1;
  };
  var go = x.zeroHash = "\0\0\0\0\0\0\0\0";
  x.fromNumber = function (e) {
    if (e === 0) return Y;
    var t = e < 0;
    t && (e = -e);
    var n = e >>> 0, o = (e - n) / 4294967296 >>> 0;
    return t &&
      (o = ~o >>> 0,
        n = ~n >>> 0,
        ++n > 4294967295 && (n = 0, ++o > 4294967295 && (o = 0))),
      new x(n, o);
  };
  x.from = function (e) {
    if (typeof e == "number") return x.fromNumber(e);
    if (ye.isString(e)) {
      if (ye.Long) e = ye.Long.fromString(e);
      else return x.fromNumber(parseInt(e, 10));
    }
    return e.low || e.high ? new x(e.low >>> 0, e.high >>> 0) : Y;
  };
  x.prototype.toNumber = function (e) {
    if (!e && this.hi >>> 31) {
      var t = ~this.lo + 1 >>> 0, n = ~this.hi >>> 0;
      return t || (n = n + 1 >>> 0), -(t + n * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  x.prototype.toLong = function (e) {
    return ye.Long
      ? new ye.Long(this.lo | 0, this.hi | 0, Boolean(e))
      : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(e) };
  };
  var G = String.prototype.charCodeAt;
  x.fromHash = function (e) {
    return e === go ? Y : new x(
      (G.call(e, 0) | G.call(e, 1) << 8 | G.call(e, 2) << 16 |
        G.call(e, 3) << 24) >>> 0,
      (G.call(e, 4) | G.call(e, 5) << 8 | G.call(e, 6) << 16 |
        G.call(e, 7) << 24) >>> 0,
    );
  };
  x.prototype.toHash = function () {
    return String.fromCharCode(
      this.lo & 255,
      this.lo >>> 8 & 255,
      this.lo >>> 16 & 255,
      this.lo >>> 24,
      this.hi & 255,
      this.hi >>> 8 & 255,
      this.hi >>> 16 & 255,
      this.hi >>> 24,
    );
  };
  x.prototype.zzEncode = function () {
    var e = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0,
      this.lo = (this.lo << 1 ^ e) >>> 0,
      this;
  };
  x.prototype.zzDecode = function () {
    var e = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0,
      this.hi = (this.hi >>> 1 ^ e) >>> 0,
      this;
  };
  x.prototype.length = function () {
    var e = this.lo,
      t = (this.lo >>> 28 | this.hi << 4) >>> 0,
      n = this.hi >>> 24;
    return n === 0
      ? t === 0
        ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4
        : t < 16384
        ? t < 128 ? 5 : 6
        : t < 2097152
        ? 7
        : 8
      : n < 128
      ? 9
      : 10;
  };
});
var Q = m((Qe) => {
  "use strict";
  var l = Qe;
  l.asPromise = er();
  l.base64 = or();
  l.EventEmitter = sr();
  l.float = pr();
  l.inquire = dr();
  l.utf8 = mr();
  l.pool = br();
  l.LongBits = xr();
  l.isNode = Boolean(
    typeof global != "undefined" && global && global.process &&
      global.process.versions && global.process.versions.node,
  );
  l.global = l.isNode && global || typeof window != "undefined" && window ||
    typeof self != "undefined" && self || Qe;
  l.emptyArray = Object.freeze ? Object.freeze([]) : [];
  l.emptyObject = Object.freeze ? Object.freeze({}) : {};
  l.isInteger = Number.isInteger || function (e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  };
  l.isString = function (e) {
    return typeof e == "string" || e instanceof String;
  };
  l.isObject = function (e) {
    return e && typeof e == "object";
  };
  l.isset = l.isSet = function (e, t) {
    var n = e[t];
    return n != null && e.hasOwnProperty(t)
      ? typeof n != "object" ||
        (Array.isArray(n) ? n.length : Object.keys(n).length) > 0
      : !1;
  };
  l.Buffer = function () {
    try {
      var r = l.inquire("buffer").Buffer;
      return r.prototype.utf8Write ? r : null;
    } catch (e) {
      return null;
    }
  }();
  l._Buffer_from = null;
  l._Buffer_allocUnsafe = null;
  l.newBuffer = function (e) {
    return typeof e == "number"
      ? l.Buffer ? l._Buffer_allocUnsafe(e) : new l.Array(e)
      : l.Buffer
      ? l._Buffer_from(e)
      : typeof Uint8Array == "undefined"
      ? e
      : new Uint8Array(e);
  };
  l.Array = typeof Uint8Array != "undefined" ? Uint8Array : Array;
  l.Long = l.global.dcodeIO && l.global.dcodeIO.Long || l.global.Long ||
    l.inquire("long");
  l.key2Re = /^true|false|0|1$/;
  l.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  l.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  l.longToHash = function (e) {
    return e ? l.LongBits.from(e).toHash() : l.LongBits.zeroHash;
  };
  l.longFromHash = function (e, t) {
    var n = l.LongBits.fromHash(e);
    return l.Long ? l.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t));
  };
  function Sr(r, e, t) {
    for (var n = Object.keys(e), o = 0; o < n.length; ++o) {
      (r[n[o]] === void 0 || !t) && (r[n[o]] = e[n[o]]);
    }
    return r;
  }
  l.merge = Sr;
  l.lcFirst = function (e) {
    return e.charAt(0).toLowerCase() + e.substring(1);
  };
  function Er(r) {
    function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      Object.defineProperty(this, "message", {
        get: function () {
          return t;
        },
      }),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, e)
          : Object.defineProperty(this, "stack", {
            value: new Error().stack || "",
          }),
        n && Sr(this, n);
    }
    return (e.prototype = Object.create(Error.prototype)).constructor = e,
      Object.defineProperty(e.prototype, "name", {
        get: function () {
          return r;
        },
      }),
      e.prototype.toString = function () {
        return this.name + ": " + this.message;
      },
      e;
  }
  l.newError = Er;
  l.ProtocolError = Er("ProtocolError");
  l.oneOfGetter = function (e) {
    for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
    return function () {
      for (var o = Object.keys(this), i = o.length - 1; i > -1; --i) {
        if (t[o[i]] === 1 && this[o[i]] !== void 0 && this[o[i]] !== null) {
          return o[i];
        }
      }
    };
  };
  l.oneOfSetter = function (e) {
    return function (t) {
      for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]];
    };
  };
  l.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 };
  l._configure = function () {
    var r = l.Buffer;
    if (!r) {
      l._Buffer_from = l._Buffer_allocUnsafe = null;
      return;
    }
    l._Buffer_from = r.from !== Uint8Array.from && r.from || function (t, n) {
      return new r(t, n);
    },
      l._Buffer_allocUnsafe = r.allocUnsafe || function (t) {
        return new r(t);
      };
  };
});
var rt = m((ns, Tr) => {
  "use strict";
  Tr.exports = p;
  var O = Q(), Xe, Be = O.LongBits, Dr = O.base64, vr = O.utf8;
  function me(r, e, t) {
    this.fn = r, this.len = e, this.next = void 0, this.val = t;
  }
  function Ze() {}
  function bo(r) {
    this.head = r.head,
      this.tail = r.tail,
      this.len = r.len,
      this.next = r.states;
  }
  function p() {
    this.len = 0,
      this.head = new me(Ze, 0, 0),
      this.tail = this.head,
      this.states = null;
  }
  var kr = function () {
    return O.Buffer
      ? function () {
        return (p.create = function () {
          return new Xe();
        })();
      }
      : function () {
        return new p();
      };
  };
  p.create = kr();
  p.alloc = function (e) {
    return new O.Array(e);
  };
  O.Array !== Array && (p.alloc = O.pool(p.alloc, O.Array.prototype.subarray));
  p.prototype._push = function (e, t, n) {
    return this.tail = this.tail.next = new me(e, t, n), this.len += t, this;
  };
  function Ke(r, e, t) {
    e[t] = r & 255;
  }
  function wo(r, e, t) {
    for (; r > 127;) e[t++] = r & 127 | 128, r >>>= 7;
    e[t] = r;
  }
  function Ye(r, e) {
    this.len = r, this.next = void 0, this.val = e;
  }
  Ye.prototype = Object.create(me.prototype);
  Ye.prototype.fn = wo;
  p.prototype.uint32 = function (e) {
    return this.len += (this.tail = this.tail.next = new Ye(
      (e = e >>> 0) < 128
        ? 1
        : e < 16384
        ? 2
        : e < 2097152
        ? 3
        : e < 268435456
        ? 4
        : 5,
      e,
    )).len,
      this;
  };
  p.prototype.int32 = function (e) {
    return e < 0 ? this._push(et, 10, Be.fromNumber(e)) : this.uint32(e);
  };
  p.prototype.sint32 = function (e) {
    return this.uint32((e << 1 ^ e >> 31) >>> 0);
  };
  function et(r, e, t) {
    for (; r.hi;) {
      e[t++] = r.lo & 127 | 128,
        r.lo = (r.lo >>> 7 | r.hi << 25) >>> 0,
        r.hi >>>= 7;
    }
    for (; r.lo > 127;) e[t++] = r.lo & 127 | 128, r.lo = r.lo >>> 7;
    e[t++] = r.lo;
  }
  p.prototype.uint64 = function (e) {
    var t = Be.from(e);
    return this._push(et, t.length(), t);
  };
  p.prototype.int64 = p.prototype.uint64;
  p.prototype.sint64 = function (e) {
    var t = Be.from(e).zzEncode();
    return this._push(et, t.length(), t);
  };
  p.prototype.bool = function (e) {
    return this._push(Ke, 1, e ? 1 : 0);
  };
  function tt(r, e, t) {
    e[t] = r & 255,
      e[t + 1] = r >>> 8 & 255,
      e[t + 2] = r >>> 16 & 255,
      e[t + 3] = r >>> 24;
  }
  p.prototype.fixed32 = function (e) {
    return this._push(tt, 4, e >>> 0);
  };
  p.prototype.sfixed32 = p.prototype.fixed32;
  p.prototype.fixed64 = function (e) {
    var t = Be.from(e);
    return this._push(tt, 4, t.lo)._push(tt, 4, t.hi);
  };
  p.prototype.sfixed64 = p.prototype.fixed64;
  p.prototype.float = function (e) {
    return this._push(O.float.writeFloatLE, 4, e);
  };
  p.prototype.double = function (e) {
    return this._push(O.float.writeDoubleLE, 8, e);
  };
  var xo = O.Array.prototype.set
    ? function (e, t, n) {
      t.set(e, n);
    }
    : function (e, t, n) {
      for (var o = 0; o < e.length; ++o) t[n + o] = e[o];
    };
  p.prototype.bytes = function (e) {
    var t = e.length >>> 0;
    if (!t) return this._push(Ke, 1, 0);
    if (O.isString(e)) {
      var n = p.alloc(t = Dr.length(e));
      Dr.decode(e, n, 0), e = n;
    }
    return this.uint32(t)._push(xo, t, e);
  };
  p.prototype.string = function (e) {
    var t = vr.length(e);
    return t ? this.uint32(t)._push(vr.write, t, e) : this._push(Ke, 1, 0);
  };
  p.prototype.fork = function () {
    return this.states = new bo(this),
      this.head = this.tail = new me(Ze, 0, 0),
      this.len = 0,
      this;
  };
  p.prototype.reset = function () {
    return this.states
      ? (this.head = this.states.head,
        this.tail = this.states.tail,
        this.len = this.states.len,
        this.states = this.states.next)
      : (this.head = this.tail = new me(Ze, 0, 0), this.len = 0),
      this;
  };
  p.prototype.ldelim = function () {
    var e = this.head, t = this.tail, n = this.len;
    return this.reset().uint32(n),
      n && (this.tail.next = e.next, this.tail = t, this.len += n),
      this;
  };
  p.prototype.finish = function () {
    for (
      var e = this.head.next, t = this.constructor.alloc(this.len), n = 0;
      e;
    ) {
      e.fn(e.val, t, n), n += e.len, e = e.next;
    }
    return t;
  };
  p._configure = function (r) {
    Xe = r, p.create = kr(), Xe._configure();
  };
});
var Cr = m((os, Or) => {
  "use strict";
  Or.exports = U;
  var _r = rt();
  (U.prototype = Object.create(_r.prototype)).constructor = U;
  var X = Q();
  function U() {
    _r.call(this);
  }
  U._configure = function () {
    U.alloc = X._Buffer_allocUnsafe,
      U.writeBytesBuffer =
        X.Buffer && X.Buffer.prototype instanceof Uint8Array &&
          X.Buffer.prototype.set.name === "set"
          ? function (e, t, n) {
            t.set(e, n);
          }
          : function (e, t, n) {
            if (e.copy) e.copy(t, n, 0, e.length);
            else for (var o = 0; o < e.length;) t[n++] = e[o++];
          };
  };
  U.prototype.bytes = function (e) {
    X.isString(e) && (e = X._Buffer_from(e, "base64"));
    var t = e.length >>> 0;
    return this.uint32(t), t && this._push(U.writeBytesBuffer, t, e), this;
  };
  function So(r, e, t) {
    r.length < 40
      ? X.utf8.write(r, e, t)
      : e.utf8Write
      ? e.utf8Write(r, t)
      : e.write(r, t);
  }
  U.prototype.string = function (e) {
    var t = X.Buffer.byteLength(e);
    return this.uint32(t), t && this._push(So, t, e), this;
  };
  U._configure();
});
var it = m((is, Lr) => {
  "use strict";
  Lr.exports = b;
  var P = Q(), nt, Ar = P.LongBits, Eo = P.utf8;
  function I(r, e) {
    return RangeError(
      "index out of range: " + r.pos + " + " + (e || 1) + " > " + r.len,
    );
  }
  function b(r) {
    this.buf = r, this.pos = 0, this.len = r.length;
  }
  var Br = typeof Uint8Array != "undefined"
      ? function (e) {
        if (e instanceof Uint8Array || Array.isArray(e)) return new b(e);
        throw Error("illegal buffer");
      }
      : function (e) {
        if (Array.isArray(e)) return new b(e);
        throw Error("illegal buffer");
      },
    zr = function () {
      return P.Buffer
        ? function (t) {
          return (b.create = function (o) {
            return P.Buffer.isBuffer(o) ? new nt(o) : Br(o);
          })(t);
        }
        : Br;
    };
  b.create = zr();
  b.prototype._slice = P.Array.prototype.subarray || P.Array.prototype.slice;
  b.prototype.uint32 = function () {
    var e = 4294967295;
    return function () {
      if (
        e = (this.buf[this.pos] & 127) >>> 0,
          this.buf[this.pos++] < 128 ||
          (e = (e | (this.buf[this.pos] & 127) << 7) >>> 0,
            this.buf[this.pos++] < 128) ||
          (e = (e | (this.buf[this.pos] & 127) << 14) >>> 0,
            this.buf[this.pos++] < 128) ||
          (e = (e | (this.buf[this.pos] & 127) << 21) >>> 0,
            this.buf[this.pos++] < 128) ||
          (e = (e | (this.buf[this.pos] & 15) << 28) >>> 0,
            this.buf[this.pos++] < 128)
      ) {
        return e;
      }
      if ((this.pos += 5) > this.len) throw this.pos = this.len, I(this, 10);
      return e;
    };
  }();
  b.prototype.int32 = function () {
    return this.uint32() | 0;
  };
  b.prototype.sint32 = function () {
    var e = this.uint32();
    return e >>> 1 ^ -(e & 1) | 0;
  };
  function ot() {
    var r = new Ar(0, 0), e = 0;
    if (this.len - this.pos > 4) {
      for (; e < 4; ++e) {
        if (
          r.lo = (r.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0,
            this.buf[this.pos++] < 128
        ) {
          return r;
        }
      }
      if (
        r.lo = (r.lo | (this.buf[this.pos] & 127) << 28) >>> 0,
          r.hi = (r.hi | (this.buf[this.pos] & 127) >> 4) >>> 0,
          this.buf[this.pos++] < 128
      ) {
        return r;
      }
      e = 0;
    } else {
      for (; e < 3; ++e) {
        if (this.pos >= this.len) throw I(this);
        if (
          r.lo = (r.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0,
            this.buf[this.pos++] < 128
        ) {
          return r;
        }
      }
      return r.lo = (r.lo | (this.buf[this.pos++] & 127) << e * 7) >>> 0, r;
    }
    if (this.len - this.pos > 4) {
      for (; e < 5; ++e) {
        if (
          r.hi = (r.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0,
            this.buf[this.pos++] < 128
        ) {
          return r;
        }
      }
    } else {
      for (; e < 5; ++e) {
        if (this.pos >= this.len) throw I(this);
        if (
          r.hi = (r.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0,
            this.buf[this.pos++] < 128
        ) {
          return r;
        }
      }
    }
    throw Error("invalid varint encoding");
  }
  b.prototype.bool = function () {
    return this.uint32() !== 0;
  };
  function ze(r, e) {
    return (r[e - 4] | r[e - 3] << 8 | r[e - 2] << 16 | r[e - 1] << 24) >>> 0;
  }
  b.prototype.fixed32 = function () {
    if (this.pos + 4 > this.len) throw I(this, 4);
    return ze(this.buf, this.pos += 4);
  };
  b.prototype.sfixed32 = function () {
    if (this.pos + 4 > this.len) throw I(this, 4);
    return ze(this.buf, this.pos += 4) | 0;
  };
  function Ir() {
    if (this.pos + 8 > this.len) throw I(this, 8);
    return new Ar(ze(this.buf, this.pos += 4), ze(this.buf, this.pos += 4));
  }
  b.prototype.float = function () {
    if (this.pos + 4 > this.len) throw I(this, 4);
    var e = P.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, e;
  };
  b.prototype.double = function () {
    if (this.pos + 8 > this.len) throw I(this, 4);
    var e = P.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, e;
  };
  b.prototype.bytes = function () {
    var e = this.uint32(), t = this.pos, n = this.pos + e;
    if (n > this.len) throw I(this, e);
    return this.pos += e,
      Array.isArray(this.buf)
        ? this.buf.slice(t, n)
        : t === n
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, t, n);
  };
  b.prototype.string = function () {
    var e = this.bytes();
    return Eo.read(e, 0, e.length);
  };
  b.prototype.skip = function (e) {
    if (typeof e == "number") {
      if (this.pos + e > this.len) throw I(this, e);
      this.pos += e;
    } else {
      do if (this.pos >= this.len) throw I(this); while (
        this.buf[this.pos++] & 128
      );
    }
    return this;
  };
  b.prototype.skipType = function (r) {
    switch (r) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        for (; (r = this.uint32() & 7) !== 4;) this.skipType(r);
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + r + " at offset " + this.pos);
    }
    return this;
  };
  b._configure = function (r) {
    nt = r, b.create = zr(), nt._configure();
    var e = P.Long ? "toLong" : "toNumber";
    P.merge(b.prototype, {
      int64: function () {
        return ot.call(this)[e](!1);
      },
      uint64: function () {
        return ot.call(this)[e](!0);
      },
      sint64: function () {
        return ot.call(this).zzDecode()[e](!1);
      },
      fixed64: function () {
        return Ir.call(this)[e](!0);
      },
      sfixed64: function () {
        return Ir.call(this)[e](!1);
      },
    });
  };
});
var Fr = m((ss, jr) => {
  "use strict";
  jr.exports = ee;
  var Nr = it();
  (ee.prototype = Object.create(Nr.prototype)).constructor = ee;
  var Mr = Q();
  function ee(r) {
    Nr.call(this, r);
  }
  ee._configure = function () {
    Mr.Buffer && (ee.prototype._slice = Mr.Buffer.prototype.slice);
  };
  ee.prototype.string = function () {
    var e = this.uint32();
    return this.buf.utf8Slice
      ? this.buf.utf8Slice(
        this.pos,
        this.pos = Math.min(this.pos + e, this.len),
      )
      : this.buf.toString(
        "utf-8",
        this.pos,
        this.pos = Math.min(this.pos + e, this.len),
      );
  };
  ee._configure();
});
var Pr = m((as, Ur) => {
  "use strict";
  Ur.exports = ge;
  var st = Q();
  (ge.prototype = Object.create(st.EventEmitter.prototype)).constructor = ge;
  function ge(r, e, t) {
    if (typeof r != "function") throw TypeError("rpcImpl must be a function");
    st.EventEmitter.call(this),
      this.rpcImpl = r,
      this.requestDelimited = Boolean(e),
      this.responseDelimited = Boolean(t);
  }
  ge.prototype.rpcCall = function r(e, t, n, o, i) {
    if (!o) throw TypeError("request must be specified");
    var s = this;
    if (!i) return st.asPromise(r, s, e, t, n, o);
    if (!s.rpcImpl) {
      setTimeout(function () {
        i(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return s.rpcImpl(
        e,
        t[s.requestDelimited ? "encodeDelimited" : "encode"](o).finish(),
        function (a, f) {
          if (a) return s.emit("error", a, e), i(a);
          if (f === null) {
            s.end(!0);
            return;
          }
          if (!(f instanceof n)) {
            try {
              f = n[s.responseDelimited ? "decodeDelimited" : "decode"](f);
            } catch (u) {
              return s.emit("error", u, e), i(u);
            }
          }
          return s.emit("data", f, e), i(null, f);
        },
      );
    } catch (c) {
      s.emit("error", c, e),
        setTimeout(function () {
          i(c);
        }, 0);
      return;
    }
  };
  ge.prototype.end = function (e) {
    return this.rpcImpl &&
      (e || this.rpcImpl(null, null, null),
        this.rpcImpl = null,
        this.emit("end").off()),
      this;
  };
});
var qr = m((Rr) => {
  "use strict";
  var Do = Rr;
  Do.Service = Pr();
});
var $r = m((fs, Vr) => {
  "use strict";
  Vr.exports = {};
});
var Wr = m((Hr) => {
  "use strict";
  var v = Hr;
  v.build = "minimal";
  v.Writer = rt();
  v.BufferWriter = Cr();
  v.Reader = it();
  v.BufferReader = Fr();
  v.util = Q();
  v.rpc = qr();
  v.roots = $r();
  v.configure = Jr;
  function Jr() {
    v.util._configure(),
      v.Writer._configure(v.BufferWriter),
      v.Reader._configure(v.BufferReader);
  }
  Jr();
});
var Qr = m((ls, Gr) => {
  "use strict";
  Gr.exports = Wr();
});
var en = m((gs, Yr) => {
  "use strict";
  function To(r) {
    let [e, t] = r[Symbol.asyncIterator]
        ? [r[Symbol.asyncIterator](), Symbol.asyncIterator]
        : [r[Symbol.iterator](), Symbol.iterator],
      n = [];
    return {
      peek: () => e.next(),
      push: (o) => {
        n.push(o);
      },
      next: () => n.length ? { done: !1, value: n.shift() } : e.next(),
      [t]() {
        return this;
      },
    };
  }
  Yr.exports = To;
});
var ti = re(_t(), 1);
var Ot = (r) => {
    let { name: e, message: t, stack: n, code: o, detail: i } = r;
    return { name: e, message: t, stack: n, code: o, detail: i };
  },
  ne = (r) => {
    if (r instanceof Error) return r;
    {
      let { name: e, message: t, stack: n, code: o } = r;
      return Object.assign(En(e, t), { name: e, stack: n, code: o });
    }
  },
  En = (r, e) => {
    switch (r) {
      case "RangeError":
        return new RangeError(e);
      case "ReferenceError":
        return ReferenceError(e);
      case "SyntaxError":
        return new SyntaxError(e);
      case "TypeError":
        return new TypeError(e);
      case "URIError":
        return new URIError(e);
      default:
        return new Error(e);
    }
  };
var je = class extends Error {
    get name() {
      return this.constructor.name;
    }
  },
  Fe = class extends Error {
    get name() {
      return this.constructor.name;
    }
  },
  Ue = class extends Error {
    get name() {
      return this.constructor.name;
    }
  };
var H = class {
  constructor(e) {
    this.port = null,
      this.id = Math.random().toString(32).slice(2),
      this.nextID = 0,
      this.queries = Object.create(null),
      e && this.connect(e);
  }
  execute(e) {
    let t = `${this.id}@${this.nextID++}`;
    return this.queries[t] = e,
      e.timeout > 0 && e.timeout < 1 / 0 &&
      (e.timerID = setTimeout(H.timeout, e.timeout, this, t)),
      e.signal &&
      e.signal.addEventListener("abort", () => this.abort(t), { once: !0 }),
      this.port && H.postQuery(this.port, t, e),
      e.result;
  }
  connect(e) {
    if (this.port) throw new Error("Transport is already open");
    this.port = e,
      this.port.addEventListener("message", this),
      this.port.start();
    for (let [t, n] of Object.entries(this.queries)) H.postQuery(e, t, n);
  }
  disconnect() {
    let e = new Ue();
    for (let [t, n] of Object.entries(this.queries)) n.fail(e), this.abort(t);
    this.port &&
      (this.port.removeEventListener("message", this), this.port.close());
  }
  static timeout(e, t) {
    let { queries: n } = e, o = n[t];
    o &&
      (delete n[t],
        o.fail(new je("request timed out")),
        e.port && e.port.postMessage({ type: "abort", id: t }));
  }
  abort(e) {
    let { queries: t } = this, n = t[e];
    n &&
      (delete t[e],
        n.fail(new Fe()),
        this.port && this.port.postMessage({ type: "abort", id: e }),
        n.timerID != null && clearTimeout(n.timerID));
  }
  static postQuery(e, t, n) {
    e.postMessage({
      type: "query",
      namespace: n.namespace,
      method: n.method,
      id: t,
      input: n.toJSON(),
    }, n.transfer());
  }
  handleEvent(e) {
    let { id: t, result: n } = e.data, o = this.queries[t];
    o &&
      (delete this.queries[t],
        n.ok ? o.succeed(n.value) : o.fail(ne(n.error)),
        o.timerID != null && clearTimeout(o.timerID));
  }
};
var Pe = class {
  constructor(e, t, n) {
    this.result = new Promise((o, i) => {
      this.succeed = o,
        this.fail = i,
        this.signal = n.signal,
        this.input = n,
        this.namespace = e,
        this.method = t,
        this.timeout = n.timeout == null ? 1 / 0 : n.timeout,
        this.timerID = null;
    });
  }
  toJSON() {
    return this.input;
  }
  transfer() {
    return this.input.transfer;
  }
};
var Re = class {
  constructor(e, t, n) {
    this.transport = n;
    let o = this;
    for (let i of t) {
      o[i] = (s) => this.transport.execute(new Pe(e, i.toString(), s));
    }
  }
};
var q = class {
  constructor(e, t, n) {
    this.remote = new Re(e, t, n);
  }
};
var Dn = At, Ct = 128, vn = 127, kn = ~vn, Tn = Math.pow(2, 31);
function At(r, e, t) {
  e = e || [], t = t || 0;
  for (var n = t; r >= Tn;) e[t++] = r & 255 | Ct, r /= 128;
  for (; r & kn;) e[t++] = r & 255 | Ct, r >>>= 7;
  return e[t] = r | 0, At.bytes = t - n + 1, e;
}
var _n = qe, On = 128, Bt = 127;
function qe(r, n) {
  var t = 0, n = n || 0, o = 0, i = n, s, c = r.length;
  do {
    if (i >= c) throw qe.bytes = 0, new RangeError("Could not decode varint");
    s = r[i++], t += o < 28 ? (s & Bt) << o : (s & Bt) * Math.pow(2, o), o += 7;
  } while (s >= On);
  return qe.bytes = i - n, t;
}
var Cn = Math.pow(2, 7),
  An = Math.pow(2, 14),
  Bn = Math.pow(2, 21),
  zn = Math.pow(2, 28),
  In = Math.pow(2, 35),
  Ln = Math.pow(2, 42),
  Nn = Math.pow(2, 49),
  Mn = Math.pow(2, 56),
  jn = Math.pow(2, 63),
  Fn = function (r) {
    return r < Cn
      ? 1
      : r < An
      ? 2
      : r < Bn
      ? 3
      : r < zn
      ? 4
      : r < In
      ? 5
      : r < Ln
      ? 6
      : r < Nn
      ? 7
      : r < Mn
      ? 8
      : r < jn
      ? 9
      : 10;
  },
  Un = { encode: Dn, decode: _n, encodingLength: Fn },
  Pn = Un,
  le = Pn;
var he = (r) => [le.decode(r), le.decode.bytes],
  oe = (r, e, t = 0) => (le.encode(r, e, t), e),
  ie = (r) => le.encodingLength(r);
var bi = new Uint8Array(0);
var zt = (r, e) => {
    if (r === e) return !0;
    if (r.byteLength !== e.byteLength) return !1;
    for (let t = 0; t < r.byteLength; t++) if (r[t] !== e[t]) return !1;
    return !0;
  },
  V = (r) => {
    if (
      r instanceof Uint8Array && r.constructor.name === "Uint8Array"
    ) {
      return r;
    }
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r)) {
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };
var It = (r) => new TextEncoder().encode(r),
  Lt = (r) => new TextDecoder().decode(r);
var De = (r, e) => {
    let t = e.byteLength, n = ie(r), o = n + ie(t), i = new Uint8Array(o + t);
    return oe(r, i, 0), oe(t, i, n), i.set(e, o), new pe(r, t, e, i);
  },
  Mt = (r) => {
    let e = V(r),
      [t, n] = he(e),
      [o, i] = he(e.subarray(n)),
      s = e.subarray(n + i);
    if (s.byteLength !== o) throw new Error("Incorrect length");
    return new pe(t, o, s, e);
  },
  jt = (r, e) =>
    r === e
      ? !0
      : r.code === e.code && r.size === e.size && zt(r.bytes, e.bytes),
  pe = class {
    constructor(e, t, n, o) {
      this.code = e, this.size = t, this.digest = n, this.bytes = o;
    }
  };
var Ve = {};
B(Ve, { base58btc: () => j, base58flickr: () => Hn });
function Rn(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
  for (var o = 0; o < r.length; o++) {
    var i = r.charAt(o), s = i.charCodeAt(0);
    if (t[s] !== 255) throw new TypeError(i + " is ambiguous");
    t[s] = o;
  }
  var c = r.length,
    a = r.charAt(0),
    f = Math.log(c) / Math.log(256),
    u = Math.log(256) / Math.log(c);
  function w(y) {
    if (
      y instanceof Uint8Array ||
      (ArrayBuffer.isView(y)
        ? y = new Uint8Array(y.buffer, y.byteOffset, y.byteLength)
        : Array.isArray(y) && (y = Uint8Array.from(y))),
        !(y instanceof Uint8Array)
    ) {
      throw new TypeError("Expected Uint8Array");
    }
    if (y.length === 0) return "";
    for (var E = 0, Z = 0, C = 0, L = y.length; C !== L && y[C] === 0;) {
      C++, E++;
    }
    for (var N = (L - C) * u + 1 >>> 0, _ = new Uint8Array(N); C !== L;) {
      for (
        var M = y[C], J = 0, A = N - 1;
        (M !== 0 || J < Z) && A !== -1;
        A--, J++
      ) {
        M += 256 * _[A] >>> 0, _[A] = M % c >>> 0, M = M / c >>> 0;
      }
      if (M !== 0) throw new Error("Non-zero carry");
      Z = J, C++;
    }
    for (var R = N - Z; R !== N && _[R] === 0;) R++;
    for (var xe = a.repeat(E); R < N; ++R) xe += r.charAt(_[R]);
    return xe;
  }
  function T(y) {
    if (typeof y != "string") throw new TypeError("Expected String");
    if (y.length === 0) return new Uint8Array();
    var E = 0;
    if (y[E] !== " ") {
      for (var Z = 0, C = 0; y[E] === a;) Z++, E++;
      for (var L = (y.length - E) * f + 1 >>> 0, N = new Uint8Array(L); y[E];) {
        var _ = t[y.charCodeAt(E)];
        if (_ === 255) return;
        for (var M = 0, J = L - 1; (_ !== 0 || M < C) && J !== -1; J--, M++) {
          _ += c * N[J] >>> 0, N[J] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        }
        if (_ !== 0) throw new Error("Non-zero carry");
        C = M, E++;
      }
      if (y[E] !== " ") {
        for (var A = L - C; A !== L && N[A] === 0;) A++;
        for (var R = new Uint8Array(Z + (L - A)), xe = Z; A !== L;) {
          R[xe++] = N[A++];
        }
        return R;
      }
    }
  }
  function pn(y) {
    var E = T(y);
    if (E) return E;
    throw new Error(`Non-${e} character`);
  }
  return { encode: w, decodeUnsafe: T, decode: pn };
}
var qn = Rn, Vn = qn, Ft = Vn;
var Ut = class {
    constructor(e, t, n) {
      this.name = e, this.prefix = t, this.baseEncode = n;
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  },
  Pt = class {
    constructor(e, t, n) {
      this.name = e, this.prefix = t, this.baseDecode = n;
    }
    decode(e) {
      if (typeof e == "string") {
        switch (e[0]) {
          case this.prefix:
            return this.baseDecode(e.slice(1));
          default:
            throw Error(
              `Unable to decode multibase string ${
                JSON.stringify(e)
              }, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`,
            );
        }
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return qt(this, e);
    }
  },
  Rt = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return qt(this, e);
    }
    decode(e) {
      let t = e[0], n = this.decoders[t];
      if (n) return n.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${
          JSON.stringify(e)
        }, only inputs prefixed with ${
          Object.keys(this.decoders)
        } are supported`,
      );
    }
  },
  qt = (r, e) =>
    new Rt({
      ...r.decoders || { [r.prefix]: r },
      ...e.decoders || { [e.prefix]: e },
    }),
  Vt = class {
    constructor(e, t, n, o) {
      this.name = e,
        this.prefix = t,
        this.baseEncode = n,
        this.baseDecode = o,
        this.encoder = new Ut(e, t, n),
        this.decoder = new Pt(e, t, o);
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  ke = ({ name: r, prefix: e, encode: t, decode: n }) => new Vt(r, e, t, n),
  W = ({ prefix: r, name: e, alphabet: t }) => {
    let { encode: n, decode: o } = Ft(t, e);
    return ke({ prefix: r, name: e, encode: n, decode: (i) => V(o(i)) });
  },
  $n = (r, e, t, n) => {
    let o = {};
    for (let u = 0; u < e.length; ++u) o[e[u]] = u;
    let i = r.length;
    for (; r[i - 1] === "=";) --i;
    let s = new Uint8Array(i * t / 8 | 0), c = 0, a = 0, f = 0;
    for (let u = 0; u < i; ++u) {
      let w = o[r[u]];
      if (w === void 0) throw new SyntaxError(`Non-${n} character`);
      a = a << t | w, c += t, c >= 8 && (c -= 8, s[f++] = 255 & a >> c);
    }
    if (c >= t || 255 & a << 8 - c) {
      throw new SyntaxError("Unexpected end of data");
    }
    return s;
  },
  Jn = (r, e, t) => {
    let n = e[e.length - 1] === "=", o = (1 << t) - 1, i = "", s = 0, c = 0;
    for (let a = 0; a < r.length; ++a) {
      for (c = c << 8 | r[a], s += 8; s > t;) s -= t, i += e[o & c >> s];
    }
    if (s && (i += e[o & c << t - s]), n) for (; i.length * t & 7;) i += "=";
    return i;
  },
  g = ({ name: r, prefix: e, bitsPerChar: t, alphabet: n }) =>
    ke({
      prefix: e,
      name: r,
      encode(o) {
        return Jn(o, n, t);
      },
      decode(o) {
        return $n(o, n, t, r);
      },
    });
var j = W({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  Hn = W({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var $e = {};
B($e, {
  base32: () => se,
  base32hex: () => Xn,
  base32hexpad: () => Kn,
  base32hexpadupper: () => Yn,
  base32hexupper: () => Zn,
  base32pad: () => Gn,
  base32padupper: () => Qn,
  base32upper: () => Wn,
  base32z: () => eo,
});
var se = g({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  Wn = g({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  Gn = g({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  Qn = g({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  Xn = g({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  Zn = g({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  Kn = g({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  Yn = g({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  eo = g({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var d = class {
    constructor(e, t, n, o) {
      this.code = t,
        this.version = e,
        this.multihash = n,
        this.bytes = o,
        this.byteOffset = o.byteOffset,
        this.byteLength = o.byteLength,
        this.asCID = this,
        this._baseCache = new Map(),
        Object.defineProperties(this, {
          byteOffset: _e,
          byteLength: _e,
          code: Te,
          version: Te,
          multihash: Te,
          bytes: Te,
          _baseCache: _e,
          asCID: _e,
        });
    }
    toV0() {
      switch (this.version) {
        case 0:
          return this;
        default: {
          let { code: e, multihash: t } = this;
          if (e !== de) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (t.code !== oo) {
            throw new Error(
              "Cannot convert non sha2-256 multihash CID to CIDv0",
            );
          }
          return d.createV0(t);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          let { code: e, digest: t } = this.multihash, n = De(e, t);
          return d.createV1(this.code, n);
        }
        case 1:
          return this;
        default:
          throw Error(
            `Can not convert CID version ${this.version} to version 0. This is a bug please report`,
          );
      }
    }
    equals(e) {
      return e && this.code === e.code && this.version === e.version &&
        jt(this.multihash, e.multihash);
    }
    toString(e) {
      let { bytes: t, version: n, _baseCache: o } = this;
      switch (n) {
        case 0:
          return ro(t, o, e || j.encoder);
        default:
          return no(t, o, e || se.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes,
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(e) {
      return so(/^0\.0/, ao), !!(e && (e[Jt] || e.asCID === e));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error(
        '"codec" property is deprecated, use integer "code" property instead',
      );
    }
    get buffer() {
      throw new Error(
        "Deprecated .buffer property, use .bytes to get Uint8Array instead",
      );
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(e) {
      if (e instanceof d) return e;
      if (e != null && e.asCID === e) {
        let { version: t, code: n, multihash: o, bytes: i } = e;
        return new d(t, n, o, i || $t(t, n, o.bytes));
      } else if (e != null && e[Jt] === !0) {
        let { version: t, multihash: n, code: o } = e, i = Mt(n);
        return d.create(t, o, i);
      } else return null;
    }
    static create(e, t, n) {
      if (typeof t != "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (e) {
        case 0: {
          if (t !== de) {
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${de}) block encoding`,
            );
          }
          return new d(e, t, n, n.bytes);
        }
        case 1: {
          let o = $t(e, t, n.bytes);
          return new d(e, t, n, o);
        }
        default:
          throw new Error("Invalid version");
      }
    }
    static createV0(e) {
      return d.create(0, de, e);
    }
    static createV1(e, t) {
      return d.create(1, e, t);
    }
    static decode(e) {
      let [t, n] = d.decodeFirst(e);
      if (n.length) throw new Error("Incorrect length");
      return t;
    }
    static decodeFirst(e) {
      let t = d.inspectBytes(e),
        n = t.size - t.multihashSize,
        o = V(e.subarray(n, n + t.multihashSize));
      if (o.byteLength !== t.multihashSize) throw new Error("Incorrect length");
      let i = o.subarray(t.multihashSize - t.digestSize),
        s = new pe(t.multihashCode, t.digestSize, i, o);
      return [
        t.version === 0 ? d.createV0(s) : d.createV1(t.codec, s),
        e.subarray(t.size),
      ];
    }
    static inspectBytes(e) {
      let t = 0,
        n = () => {
          let [w, T] = he(e.subarray(t));
          return t += T, w;
        },
        o = n(),
        i = de;
      if (
        o === 18 ? (o = 0, t = 0) : o === 1 && (i = n()), o !== 0 && o !== 1
      ) {
        throw new RangeError(`Invalid CID version ${o}`);
      }
      let s = t, c = n(), a = n(), f = t + a, u = f - s;
      return {
        version: o,
        codec: i,
        multihashCode: c,
        digestSize: a,
        multihashSize: u,
        size: f,
      };
    }
    static parse(e, t) {
      let [n, o] = to(e, t), i = d.decode(o);
      return i._baseCache.set(n, e), i;
    }
  },
  to = (r, e) => {
    switch (r[0]) {
      case "Q": {
        let t = e || j;
        return [j.prefix, t.decode(`${j.prefix}${r}`)];
      }
      case j.prefix: {
        let t = e || j;
        return [j.prefix, t.decode(r)];
      }
      case se.prefix: {
        let t = e || se;
        return [se.prefix, t.decode(r)];
      }
      default: {
        if (e == null) {
          throw Error(
            "To parse non base32 or base58btc encoded CID multibase decoder must be provided",
          );
        }
        return [r[0], e.decode(r)];
      }
    }
  },
  ro = (r, e, t) => {
    let { prefix: n } = t;
    if (n !== j.prefix) {
      throw Error(`Cannot string encode V0 in ${t.name} encoding`);
    }
    let o = e.get(n);
    if (o == null) {
      let i = t.encode(r).slice(1);
      return e.set(n, i), i;
    } else return o;
  },
  no = (r, e, t) => {
    let { prefix: n } = t, o = e.get(n);
    if (o == null) {
      let i = t.encode(r);
      return e.set(n, i), i;
    } else return o;
  },
  de = 112,
  oo = 18,
  $t = (r, e, t) => {
    let n = ie(r), o = n + ie(e), i = new Uint8Array(o + t.byteLength);
    return oe(r, i, 0), oe(e, i, n), i.set(t, o), i;
  },
  Jt = Symbol.for("@ipld/js-cid/CID"),
  Te = { writable: !1, configurable: !1, enumerable: !0 },
  _e = { writable: !1, enumerable: !1, configurable: !1 },
  io = "0.0.0-dev",
  so = (r, e) => {
    if (r.test(io)) console.warn(e);
    else throw new Error(e);
  },
  ao =
    `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
var k = (r, e) => (e && e.add(r.multihash.bytes.buffer), r),
  D = (r) => {
    let e = r;
    return e._baseCache ||
      Object.defineProperty(e, "_baseCache", { value: new Map() }),
      e.asCID || Object.defineProperty(e, "asCID", { get: () => e }),
      Object.setPrototypeOf(e.multihash.digest, Uint8Array.prototype),
      Object.setPrototypeOf(e.multihash.bytes, Uint8Array.prototype),
      Object.setPrototypeOf(e.bytes, Uint8Array.prototype),
      Object.setPrototypeOf(e, d.prototype),
      Object.defineProperty(e, Symbol.for("@ipld/js-cid/CID"), { value: !0 }),
      e;
  };
var Ht = (r, e) => (e && e.add(r.buffer), r);
var K = class extends q {
  constructor(e) {
    super("block", ["put", "get", "rm", "stat"], e);
  }
};
K.prototype.get = async function (e, t = {}) {
  let { transfer: n } = t,
    { block: o } = await this.remote.get({ ...t, cid: k(e, n) });
  return o;
};
K.prototype.put = async function (e, t = {}) {
  let { transfer: n } = t;
  delete t.progress;
  let o = await this.remote.put({
    ...t,
    block: e instanceof Uint8Array ? e : Ht(e, n),
  });
  return D(o.cid);
};
K.prototype.rm = async function* (e, t = {}) {
  let { transfer: n } = t;
  yield* (await this.remote.rm({
    ...t,
    cids: Array.isArray(e) ? e.map((i) => k(i, n)) : [k(e, n)],
  })).map(co);
};
K.prototype.stat = async function (e, t = {}) {
  let { transfer: n } = t, o = await this.remote.stat({ ...t, cid: k(e, n) });
  return { ...o, cid: D(o.cid) };
};
var co = (r) => {
  let e = D(r.cid);
  return r.error ? { cid: e, error: ne(r.error) } : { cid: e };
};
var Wt = ({ dagNode: r, cids: e }) => {
    for (let t of e) D(t);
    return r;
  },
  Gt = (r, e) => {
    let t = [];
    return Je(r, t, e), { dagNode: r, cids: t };
  },
  Je = (r, e, t) => {
    if (r != null && typeof r == "object") {
      let n = d.asCID(r);
      if (n) e.push(n), k(n, t);
      else if (r instanceof ArrayBuffer) t && t.add(r);
      else if (ArrayBuffer.isView(r)) t && t.add(r.buffer);
      else if (Array.isArray(r)) for (let o of r) Je(o, e, t);
      else for (let o of Object.values(r)) Je(o, e, t);
    }
  };
var ae = class extends q {
  constructor(e) {
    super("dag", ["put", "get", "resolve"], e);
  }
};
ae.prototype.put = async function (e, t = {}) {
  let n = await this.remote.put({ ...t, dagNode: Gt(e, t.transfer) });
  return D(n);
};
ae.prototype.get = async function (e, t = {}) {
  let { value: n, remainderPath: o } = await this.remote.get({
    ...t,
    cid: k(e, t.transfer),
  });
  return { value: Wt(n), remainderPath: o };
};
ae.prototype.resolve = async function (e, t = {}) {
  let { cid: n, remainderPath: o } = await this.remote.resolve({
    ...t,
    cid: fo(e, t.transfer),
  });
  return { cid: D(n), remainderPath: o };
};
var fo = (r, e) => typeof r == "string" ? r : k(r, e);
var Oe = async function* ({ port: r }, e) {
    let t = (s) => {},
      n = () => new Promise((s) => t = s),
      o = () => (r.postMessage({ method: "next" }), n());
    r.onmessage = (s) => t(s.data);
    let i = !1;
    try {
      for (; !i;) {
        let { done: s, value: c, error: a } = await o();
        if (i = s, a != null) throw ne(a);
        c != null && (yield e(c));
      }
    } finally {
      i || r.postMessage({ method: "return" }), r.close();
    }
  },
  F = (r, e, t) => {
    let { port1: n, port2: o } = new MessageChannel(), i = uo(r), s = new Set();
    return n.onmessage = async ({ data: { method: c } }) => {
      switch (c) {
        case "next": {
          try {
            let { done: a, value: f } = await i.next();
            if (a) n.postMessage({ type: "next", done: !0 }), n.close();
            else {
              s.clear();
              let u = e(f, s);
              lo(n, { type: "next", done: !1, value: u }, s);
            }
          } catch (a) {
            n.postMessage({ type: "throw", error: Ot(a) }), n.close();
          }
          break;
        }
        case "return": {
          n.close(), i.return && i.return();
          break;
        }
        default:
          break;
      }
    },
      n.start(),
      t.add(o),
      { type: "RemoteIterable", port: o };
  },
  uo = (r) => {
    if (r != null) {
      if (typeof r[Symbol.asyncIterator] == "function") {
        return r[Symbol.asyncIterator]();
      }
      if (typeof r[Symbol.iterator] == "function") return r[Symbol.iterator]();
    }
    throw TypeError("Value must be async or sync iterable");
  },
  He = (r, e) => {
    let { port1: t, port2: n } = new MessageChannel();
    return t.onmessage = ({ data: o }) => r.apply(null, o),
      e.add(n),
      { type: "RemoteCallback", port: n };
  };
var lo = (r, e, t) => r.postMessage(e, t);
var Ie = re(Xt(), 1);
var Xr = re(We(), 1);
var $ = re(Qr(), 1),
  fe = $.default.Reader,
  at = $.default.Writer,
  h = $.default.util,
  S = $.default.roots["ipfs-unixfs"] || ($.default.roots["ipfs-unixfs"] = {}),
  vo = S.Data = (() => {
    function r(e) {
      if (this.blocksizes = [], e) {
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
          e[t[n]] != null && (this[t[n]] = e[t[n]]);
        }
      }
    }
    return r.prototype.Type = 0,
      r.prototype.Data = h.newBuffer([]),
      r.prototype.filesize = h.Long ? h.Long.fromBits(0, 0, !0) : 0,
      r.prototype.blocksizes = h.emptyArray,
      r.prototype.hashType = h.Long ? h.Long.fromBits(0, 0, !0) : 0,
      r.prototype.fanout = h.Long ? h.Long.fromBits(0, 0, !0) : 0,
      r.prototype.mode = 0,
      r.prototype.mtime = null,
      r.encode = function (t, n) {
        if (
          n || (n = at.create()),
            n.uint32(8).int32(t.Type),
            t.Data != null && Object.hasOwnProperty.call(t, "Data") &&
            n.uint32(18).bytes(t.Data),
            t.filesize != null && Object.hasOwnProperty.call(t, "filesize") &&
            n.uint32(24).uint64(t.filesize),
            t.blocksizes != null && t.blocksizes.length
        ) {
          for (var o = 0; o < t.blocksizes.length; ++o) {
            n.uint32(32).uint64(t.blocksizes[o]);
          }
        }
        return t.hashType != null &&
          Object.hasOwnProperty.call(t, "hashType") &&
          n.uint32(40).uint64(t.hashType),
          t.fanout != null && Object.hasOwnProperty.call(t, "fanout") &&
          n.uint32(48).uint64(t.fanout),
          t.mode != null && Object.hasOwnProperty.call(t, "mode") &&
          n.uint32(56).uint32(t.mode),
          t.mtime != null && Object.hasOwnProperty.call(t, "mtime") &&
          S.UnixTime.encode(t.mtime, n.uint32(66).fork()).ldelim(),
          n;
      },
      r.decode = function (t, n) {
        t instanceof fe || (t = fe.create(t));
        for (
          var o = n === void 0 ? t.len : t.pos + n, i = new S.Data();
          t.pos < o;
        ) {
          var s = t.uint32();
          switch (s >>> 3) {
            case 1:
              i.Type = t.int32();
              break;
            case 2:
              i.Data = t.bytes();
              break;
            case 3:
              i.filesize = t.uint64();
              break;
            case 4:
              if (
                i.blocksizes && i.blocksizes.length || (i.blocksizes = []),
                  (s & 7) === 2
              ) {
                for (var c = t.uint32() + t.pos; t.pos < c;) {
                  i.blocksizes.push(t.uint64());
                }
              } else {
                i.blocksizes.push(t.uint64());
              }
              break;
            case 5:
              i.hashType = t.uint64();
              break;
            case 6:
              i.fanout = t.uint64();
              break;
            case 7:
              i.mode = t.uint32();
              break;
            case 8:
              i.mtime = S.UnixTime.decode(t, t.uint32());
              break;
            default:
              t.skipType(s & 7);
              break;
          }
        }
        if (!i.hasOwnProperty("Type")) {
          throw h.ProtocolError(
            "missing required 'Type'",
            { instance: i },
          );
        }
        return i;
      },
      r.fromObject = function (t) {
        if (t instanceof S.Data) return t;
        var n = new S.Data();
        switch (t.Type) {
          case "Raw":
          case 0:
            n.Type = 0;
            break;
          case "Directory":
          case 1:
            n.Type = 1;
            break;
          case "File":
          case 2:
            n.Type = 2;
            break;
          case "Metadata":
          case 3:
            n.Type = 3;
            break;
          case "Symlink":
          case 4:
            n.Type = 4;
            break;
          case "HAMTShard":
          case 5:
            n.Type = 5;
            break;
        }
        if (
          t.Data != null && (typeof t.Data == "string"
            ? h.base64.decode(
              t.Data,
              n.Data = h.newBuffer(h.base64.length(t.Data)),
              0,
            )
            : t.Data.length && (n.Data = t.Data)),
            t.filesize != null &&
            (h.Long
              ? (n.filesize = h.Long.fromValue(t.filesize)).unsigned = !0
              : typeof t.filesize == "string"
              ? n.filesize = parseInt(t.filesize, 10)
              : typeof t.filesize == "number"
              ? n.filesize = t.filesize
              : typeof t.filesize == "object" &&
                (n.filesize = new h.LongBits(
                  t.filesize.low >>> 0,
                  t.filesize.high >>> 0,
                ).toNumber(!0))),
            t.blocksizes
        ) {
          if (!Array.isArray(t.blocksizes)) {
            throw TypeError(".Data.blocksizes: array expected");
          }
          n.blocksizes = [];
          for (var o = 0; o < t.blocksizes.length; ++o) {
            h.Long
              ? (n.blocksizes[o] = h.Long.fromValue(t.blocksizes[o])).unsigned =
                !0
              : typeof t.blocksizes[o] == "string"
              ? n.blocksizes[o] = parseInt(t.blocksizes[o], 10)
              : typeof t.blocksizes[o] == "number"
              ? n.blocksizes[o] = t.blocksizes[o]
              : typeof t.blocksizes[o] == "object" &&
                (n.blocksizes[o] = new h.LongBits(
                  t.blocksizes[o].low >>> 0,
                  t.blocksizes[o].high >>> 0,
                ).toNumber(!0));
          }
        }
        if (
          t.hashType != null && (h.Long
            ? (n.hashType = h.Long.fromValue(t.hashType)).unsigned = !0
            : typeof t.hashType == "string"
            ? n.hashType = parseInt(t.hashType, 10)
            : typeof t.hashType == "number"
            ? n.hashType = t.hashType
            : typeof t.hashType == "object" &&
              (n.hashType = new h.LongBits(
                t.hashType.low >>> 0,
                t.hashType.high >>> 0,
              ).toNumber(!0))),
            t.fanout != null && (h.Long
              ? (n.fanout = h.Long.fromValue(t.fanout)).unsigned = !0
              : typeof t.fanout == "string"
              ? n.fanout = parseInt(t.fanout, 10)
              : typeof t.fanout == "number"
              ? n.fanout = t.fanout
              : typeof t.fanout == "object" &&
                (n.fanout = new h.LongBits(
                  t.fanout.low >>> 0,
                  t.fanout.high >>> 0,
                ).toNumber(!0))),
            t.mode != null && (n.mode = t.mode >>> 0),
            t.mtime != null
        ) {
          if (typeof t.mtime != "object") {
            throw TypeError(".Data.mtime: object expected");
          }
          n.mtime = S.UnixTime.fromObject(t.mtime);
        }
        return n;
      },
      r.toObject = function (t, n) {
        n || (n = {});
        var o = {};
        if ((n.arrays || n.defaults) && (o.blocksizes = []), n.defaults) {
          if (
            o.Type = n.enums === String ? "Raw" : 0,
              n.bytes === String
                ? o.Data = ""
                : (o.Data = [],
                  n.bytes !== Array && (o.Data = h.newBuffer(o.Data))),
              h.Long
          ) {
            var i = new h.Long(0, 0, !0);
            o.filesize = n.longs === String ? i.toString() : n.longs === Number
              ? i.toNumber()
              : i;
          } else o.filesize = n.longs === String ? "0" : 0;
          if (h.Long) {
            var i = new h.Long(0, 0, !0);
            o.hashType = n.longs === String
              ? i.toString()
              : n.longs === Number
              ? i.toNumber()
              : i;
          } else o.hashType = n.longs === String ? "0" : 0;
          if (h.Long) {
            var i = new h.Long(0, 0, !0);
            o.fanout = n.longs === String
              ? i.toString()
              : n.longs === Number
              ? i.toNumber()
              : i;
          } else o.fanout = n.longs === String ? "0" : 0;
          o.mode = 0, o.mtime = null;
        }
        if (
          t.Type != null && t.hasOwnProperty("Type") &&
          (o.Type = n.enums === String ? S.Data.DataType[t.Type] : t.Type),
            t.Data != null && t.hasOwnProperty("Data") &&
            (o.Data = n.bytes === String
              ? h.base64.encode(t.Data, 0, t.Data.length)
              : n.bytes === Array
              ? Array.prototype.slice.call(t.Data)
              : t.Data),
            t.filesize != null && t.hasOwnProperty("filesize") &&
            (typeof t.filesize == "number"
              ? o.filesize = n.longs === String
                ? String(t.filesize)
                : t.filesize
              : o.filesize = n.longs === String
                ? h.Long.prototype.toString.call(t.filesize)
                : n.longs === Number
                ? new h.LongBits(t.filesize.low >>> 0, t.filesize.high >>> 0)
                  .toNumber(!0)
                : t.filesize),
            t.blocksizes && t.blocksizes.length
        ) {
          o.blocksizes = [];
          for (var s = 0; s < t.blocksizes.length; ++s) {
            typeof t.blocksizes[s] == "number"
              ? o.blocksizes[s] = n.longs === String
                ? String(t.blocksizes[s])
                : t.blocksizes[s]
              : o.blocksizes[s] = n.longs === String
                ? h.Long.prototype.toString.call(t.blocksizes[s])
                : n.longs === Number
                ? new h.LongBits(
                  t.blocksizes[s].low >>> 0,
                  t.blocksizes[s].high >>> 0,
                ).toNumber(!0)
                : t.blocksizes[s];
          }
        }
        return t.hashType != null && t.hasOwnProperty("hashType") &&
          (typeof t.hashType == "number"
            ? o.hashType = n.longs === String ? String(t.hashType) : t.hashType
            : o.hashType = n.longs === String
              ? h.Long.prototype.toString.call(t.hashType)
              : n.longs === Number
              ? new h.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0)
                .toNumber(!0)
              : t.hashType),
          t.fanout != null && t.hasOwnProperty("fanout") &&
          (typeof t.fanout == "number"
            ? o.fanout = n.longs === String ? String(t.fanout) : t.fanout
            : o.fanout = n.longs === String
              ? h.Long.prototype.toString.call(t.fanout)
              : n.longs === Number
              ? new h.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0)
                .toNumber(!0)
              : t.fanout),
          t.mode != null && t.hasOwnProperty("mode") && (o.mode = t.mode),
          t.mtime != null && t.hasOwnProperty("mtime") &&
          (o.mtime = S.UnixTime.toObject(t.mtime, n)),
          o;
      },
      r.prototype.toJSON = function () {
        return this.constructor.toObject(this, $.default.util.toJSONOptions);
      },
      r.DataType = function () {
        let e = {}, t = Object.create(e);
        return t[e[0] = "Raw"] = 0,
          t[e[1] = "Directory"] = 1,
          t[e[2] = "File"] = 2,
          t[e[3] = "Metadata"] = 3,
          t[e[4] = "Symlink"] = 4,
          t[e[5] = "HAMTShard"] = 5,
          t;
      }(),
      r;
  })(),
  hs = S.UnixTime = (() => {
    function r(e) {
      if (e) {
        for (
          var t = Object.keys(e), n = 0;
          n < t.length;
          ++n
        ) {
          e[t[n]] != null && (this[t[n]] = e[t[n]]);
        }
      }
    }
    return r.prototype.Seconds = h.Long ? h.Long.fromBits(0, 0, !1) : 0,
      r.prototype.FractionalNanoseconds = 0,
      r.encode = function (t, n) {
        return n || (n = at.create()),
          n.uint32(8).int64(t.Seconds),
          t.FractionalNanoseconds != null &&
          Object.hasOwnProperty.call(t, "FractionalNanoseconds") &&
          n.uint32(21).fixed32(t.FractionalNanoseconds),
          n;
      },
      r.decode = function (t, n) {
        t instanceof fe || (t = fe.create(t));
        for (
          var o = n === void 0 ? t.len : t.pos + n, i = new S.UnixTime();
          t.pos < o;
        ) {
          var s = t.uint32();
          switch (s >>> 3) {
            case 1:
              i.Seconds = t.int64();
              break;
            case 2:
              i.FractionalNanoseconds = t.fixed32();
              break;
            default:
              t.skipType(s & 7);
              break;
          }
        }
        if (!i.hasOwnProperty("Seconds")) {
          throw h.ProtocolError("missing required 'Seconds'", { instance: i });
        }
        return i;
      },
      r.fromObject = function (t) {
        if (t instanceof S.UnixTime) return t;
        var n = new S.UnixTime();
        return t.Seconds != null &&
          (h.Long
            ? (n.Seconds = h.Long.fromValue(t.Seconds)).unsigned = !1
            : typeof t.Seconds == "string"
            ? n.Seconds = parseInt(t.Seconds, 10)
            : typeof t.Seconds == "number"
            ? n.Seconds = t.Seconds
            : typeof t.Seconds == "object" &&
              (n.Seconds = new h.LongBits(
                t.Seconds.low >>> 0,
                t.Seconds.high >>> 0,
              ).toNumber())),
          t.FractionalNanoseconds != null &&
          (n.FractionalNanoseconds = t.FractionalNanoseconds >>> 0),
          n;
      },
      r.toObject = function (t, n) {
        n || (n = {});
        var o = {};
        if (n.defaults) {
          if (h.Long) {
            var i = new h.Long(0, 0, !1);
            o.Seconds = n.longs === String
              ? i.toString()
              : n.longs === Number
              ? i.toNumber()
              : i;
          } else o.Seconds = n.longs === String ? "0" : 0;
          o.FractionalNanoseconds = 0;
        }
        return t.Seconds != null && t.hasOwnProperty("Seconds") &&
          (typeof t.Seconds == "number"
            ? o.Seconds = n.longs === String ? String(t.Seconds) : t.Seconds
            : o.Seconds = n.longs === String
              ? h.Long.prototype.toString.call(t.Seconds)
              : n.longs === Number
              ? new h.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0)
                .toNumber()
              : t.Seconds),
          t.FractionalNanoseconds != null &&
          t.hasOwnProperty("FractionalNanoseconds") &&
          (o.FractionalNanoseconds = t.FractionalNanoseconds),
          o;
      },
      r.prototype.toJSON = function () {
        return this.constructor.toObject(this, $.default.util.toJSONOptions);
      },
      r;
  })(),
  ps = S.Metadata = (() => {
    function r(e) {
      if (e) {
        for (
          var t = Object.keys(e), n = 0;
          n < t.length;
          ++n
        ) {
          e[t[n]] != null && (this[t[n]] = e[t[n]]);
        }
      }
    }
    return r.prototype.MimeType = "",
      r.encode = function (t, n) {
        return n || (n = at.create()),
          t.MimeType != null && Object.hasOwnProperty.call(t, "MimeType") &&
          n.uint32(10).string(t.MimeType),
          n;
      },
      r.decode = function (t, n) {
        t instanceof fe || (t = fe.create(t));
        for (
          var o = n === void 0 ? t.len : t.pos + n, i = new S.Metadata();
          t.pos < o;
        ) {
          var s = t.uint32();
          switch (s >>> 3) {
            case 1:
              i.MimeType = t.string();
              break;
            default:
              t.skipType(s & 7);
              break;
          }
        }
        return i;
      },
      r.fromObject = function (t) {
        if (t instanceof S.Metadata) return t;
        var n = new S.Metadata();
        return t.MimeType != null && (n.MimeType = String(t.MimeType)), n;
      },
      r.toObject = function (t, n) {
        n || (n = {});
        var o = {};
        return n.defaults && (o.MimeType = ""),
          t.MimeType != null && t.hasOwnProperty("MimeType") &&
          (o.MimeType = t.MimeType),
          o;
      },
      r.prototype.toJSON = function () {
        return this.constructor.toObject(this, $.default.util.toJSONOptions);
      },
      r;
  })();
var ds = parseInt("0644", 8), ys = parseInt("0755", 8);
function Zr(r) {
  if (r != null) {
    return typeof r == "number"
      ? r & 4095
      : (r = r.toString(),
        r.substring(0, 1) === "0"
          ? parseInt(r, 8) & 4095
          : parseInt(r, 10) & 4095);
  }
}
function Kr(r) {
  if (r == null) return;
  let e;
  if (
    r.secs != null && (e = { secs: r.secs, nsecs: r.nsecs }),
      r.Seconds != null &&
      (e = { secs: r.Seconds, nsecs: r.FractionalNanoseconds }),
      Array.isArray(r) && (e = { secs: r[0], nsecs: r[1] }),
      r instanceof Date
  ) {
    let t = r.getTime(), n = Math.floor(t / 1e3);
    e = { secs: n, nsecs: (t - n * 1e3) * 1e3 };
  }
  if (!!Object.prototype.hasOwnProperty.call(e, "secs")) {
    if (e != null && e.nsecs != null && (e.nsecs < 0 || e.nsecs > 999999999)) {
      throw (0, Xr.default)(
        new Error("mtime-nsecs must be within the range [0,999999999]"),
        "ERR_INVALID_MTIME_NSECS",
      );
    }
    return e;
  }
}
var tn = re(en(), 1),
  rn = re(We(), 1),
  te = class extends q {
    constructor(e) {
      super("core", ["add", "addAll", "cat", "ls"], e);
    }
  };
te.prototype.addAll = async function* (e, t = {}) {
  let { timeout: n, signal: o } = t,
    i = t.transfer || new Set(),
    s = t.progress ? He(t.progress, i) : void 0,
    c = await this.remote.addAll({
      ...t,
      input: Ao(e, i),
      progress: void 0,
      progressCallback: s,
      transfer: i,
      timeout: n,
      signal: o,
    });
  yield* Oe(c.data, nn);
};
te.prototype.add = async function (e, t = {}) {
  let { timeout: n, signal: o } = t,
    i = t.transfer || new Set(),
    s = t.progress ? He(t.progress, i) : void 0,
    c = await this.remote.add({
      ...t,
      input: await Co(e, i),
      progress: void 0,
      progressCallback: s,
      transfer: i,
      timeout: n,
      signal: o,
    });
  return nn(c.data);
};
te.prototype.cat = async function* (e, t = {}) {
  let n = d.asCID(e),
    o = n ? k(n) : e,
    i = await this.remote.cat({ ...t, path: o });
  yield* Oe(i.data, Oo);
};
te.prototype.ls = async function* (e, t = {}) {
  let n = d.asCID(e),
    o = n ? k(n) : e,
    i = await this.remote.ls({ ...t, path: o });
  yield* Oe(i.data, _o);
};
var nn = ({ path: r, cid: e, mode: t, mtime: n, size: o }) => ({
    path: r,
    cid: D(e),
    mode: t,
    mtime: n,
    size: o,
  }),
  _o = ({ name: r, path: e, size: t, cid: n, type: o, mode: i, mtime: s }) => ({
    cid: D(n),
    type: o,
    name: r,
    path: e,
    mode: i,
    mtime: s,
    size: t,
  }),
  Oo = (r) => r,
  Co = async (r, e) => {
    if (r instanceof Blob) return r;
    if (typeof r == "string") return r;
    if (r instanceof ArrayBuffer) return r;
    if (ArrayBuffer.isView(r)) return r;
    {
      let t = ut(r);
      if (t) return F(await dt(t), ct, e);
      let n = lt(r);
      if (n) return F(await dt(n), ue, e);
      let o = ht(r);
      if (o) return F(await dt((0, Ie.default)(o)), ue, e);
      let i = pt(r);
      if (i) return ft(i, e);
      throw TypeError("Unexpected input: " + typeof r);
    }
  },
  Ao = (r, e) => {
    let t = ut(r);
    if (t) return F(t, ct, e);
    let n = lt(r);
    if (n) return F(n, ue, e);
    let o = ht(r);
    if (o) return F((0, Ie.default)(o), ue, e);
    throw TypeError("Unexpected input: " + typeof r);
  },
  ue = (r, e) => {
    if (r instanceof ArrayBuffer) return r;
    if (ArrayBuffer.isView(r)) return r;
    if (r instanceof Blob) return { path: "", content: r };
    if (typeof r == "string") return { path: "", content: r };
    {
      let t = pt(r);
      if (t) return ft(t, e);
      throw TypeError("Unexpected input: " + typeof r);
    }
  },
  ct = (r, e) => {
    if (typeof r == "number") {
      throw TypeError("Iterable of numbers is not supported");
    }
    if (r instanceof ArrayBuffer) return r;
    if (ArrayBuffer.isView(r)) return r;
    if (r instanceof Blob) return { path: "", content: r };
    if (typeof r == "string") return { path: "", content: r };
    {
      let t = pt(r);
      if (t) return ft(t, e);
      throw TypeError("Unexpected input: " + typeof r);
    }
  },
  ft = ({ path: r, mode: e, mtime: t, content: n }, o) => {
    let i = { path: r, mode: Zr(e), mtime: Kr(t) };
    return n && (i.content = Bo(n, o)), i;
  },
  Bo = (r, e) => {
    if (r == null) return "";
    if (r instanceof ArrayBuffer || ArrayBuffer.isView(r)) return r;
    if (r instanceof Blob) return r;
    if (typeof r == "string") return r;
    {
      let t = ut(r);
      if (t) return F(t, ct, e);
      let n = lt(r);
      if (n) return F(n, ue, e);
      let o = ht(r);
      if (o) return F((0, Ie.default)(o), ue, e);
      throw TypeError("Unexpected input: " + typeof r);
    }
  },
  ut = (r) => {
    let e = r;
    return e && typeof e[Symbol.iterator] == "function" ? e : null;
  },
  lt = (r) => {
    let e = r;
    return e && typeof e[Symbol.asyncIterator] == "function" ? e : null;
  },
  ht = (r) => r && typeof r.getReader == "function" ? r : null,
  pt = (r) => typeof r == "object" && (r.path || r.content) ? r : null,
  dt = async (r) => {
    let e = (0, tn.default)(r), { value: t, done: n } = await e.peek();
    if (n) return [];
    if (
      e.push(t),
        Number.isInteger(t) || zo(t) || typeof t == "string" ||
        t instanceof String
    ) {
      return e;
    }
    throw (0, rn.default)(
      new Error(
        "Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead",
      ),
      "ERR_UNEXPECTED_INPUT",
    );
  };
function zo(r) {
  return ArrayBuffer.isView(r) || r instanceof ArrayBuffer;
}
var Le = class extends q {
  constructor(e) {
    super("files", ["stat"], e);
  }
};
Le.prototype.stat = async function (e, t = {}) {
  let { size: n, hash: o, withLocal: i, timeout: s, signal: c } = t,
    { stat: a } = await this.remote.stat({
      path: Io(e),
      size: n,
      hash: o,
      withLocal: i,
      timeout: s,
      signal: c,
    });
  return Lo(a);
};
var Io = (r) => d.asCID(r) ? `/ipfs/${r.toString()}` : r.toString(),
  Lo = (r) => ({ ...r, cid: D(r.cid) });
var be = class extends te {
  constructor(e) {
    super(e);
    this.transport = e,
      this.dag = new ae(this.transport),
      this.files = new Le(this.transport),
      this.block = new K(this.transport);
  }
  static attach(e, t) {
    e.transport.connect(t);
  }
  static detached() {
    return new be(new H(void 0));
  }
  static from(e) {
    return new be(new H(e));
  }
};
var No = ["https://ipfs.io/ipfs/:hash", "https://cf-ipfs.com/ipfs/:hash"];
function Mo(r) {
  let e = 0;
  return new Promise((t, n) =>
    r.forEach((o) =>
      o.then(t).catch(() => {
        ++e === r.length && n();
      })
    )
  );
}
function on(r, e) {
  e || (e = r.reduce((o, i) => o + i.length, 0));
  let t = new Uint8Array(e), n = 0;
  for (let o of r) t.set(o, n), n += o.length;
  return t;
}
var yt = {};
B(yt, { identity: () => jo });
var jo = ke({
  prefix: "\0",
  name: "identity",
  encode: (r) => Lt(r),
  decode: (r) => It(r),
});
var mt = {};
B(mt, { base2: () => Fo });
var Fo = g({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var gt = {};
B(gt, { base8: () => Uo });
var Uo = g({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var bt = {};
B(bt, { base10: () => Po });
var Po = W({ prefix: "9", name: "base10", alphabet: "0123456789" });
var wt = {};
B(wt, { base16: () => Ro, base16upper: () => qo });
var Ro = g({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  qo = g({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var xt = {};
B(xt, { base36: () => Vo, base36upper: () => $o });
var Vo = W({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  $o = W({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var St = {};
B(St, {
  base64: () => Jo,
  base64pad: () => Ho,
  base64url: () => Wo,
  base64urlpad: () => Go,
});
var Jo = g({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  Ho = g({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  Wo = g({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  Go = g({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var Et = {};
B(Et, { sha256: () => Qo, sha512: () => Xo });
var we = ({ name: r, code: e, encode: t }) => new sn(r, e, t),
  sn = class {
    constructor(e, t, n) {
      this.name = e, this.code = t, this.encode = n;
    }
    async digest(e) {
      if (e instanceof Uint8Array) {
        let t = await this.encode(e);
        return De(this.code, t);
      } else throw Error("Unknown type, must be binary type");
    }
  };
var cn = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e)),
  Qo = we({ name: "sha2-256", code: 18, encode: cn("SHA-256") }),
  Xo = we({ name: "sha2-512", code: 19, encode: cn("SHA-512") });
var Dt = {};
B(Dt, { identity: () => Zo });
var Zo = we({ name: "identity", code: 0, encode: (r) => V(r) });
var Xs = new TextEncoder(), Zs = new TextDecoder();
var vt = { ...yt, ...mt, ...gt, ...bt, ...wt, ...$e, ...xt, ...Ve, ...St },
  ta = { ...Et, ...Dt };
function fn(r, e, t, n) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: n },
  };
}
var un = fn("utf8", "u", (r) => {
    let e = new TextDecoder("utf8");
    return "u" + e.decode(r);
  }, (r) => new TextEncoder().encode(r.substring(1))),
  kt = fn("ascii", "a", (r) => {
    let e = "a";
    for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
    return e;
  }, (r) => {
    r = r.substring(1);
    let e = new Uint8Array(r.length);
    for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
    return e;
  }),
  ei = {
    utf8: un,
    "utf-8": un,
    hex: vt.base16,
    latin1: kt,
    ascii: kt,
    binary: kt,
    ...vt,
  },
  Ne = ei;
function ln(r, e = "utf8") {
  let t = Ne[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return t.decoder.decode(`${t.prefix}${r}`);
}
function hn(r, e = "utf8") {
  let t = Ne[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return t.encoder.encode(r).substring(1);
}
async function ri(r, e) {
  if (typeof window == "undefined") return;
  let t = typeof e == "number" ? e : 999;
  try {
    let { ipfsClient: n, ipfsCat: o } = globalThis;
    if (t === 0) throw new Error("No more retry");
    let s = (await n.add(r, { onlyHash: !0 })).cid.toString();
    await o(s, { timeout: 1500 });
    let c = r.slice(-8),
      a = await fetch(
        `https://code.spike.land/signal?signal=${c}&securityrandomparam=${
          Math.random() * 1e4
        }`,
      ).then((u) => u.text()),
      f = await fetch(`https://code.spike.land/ipfs/${a}`).then((u) =>
        u.text()
      );
    return () => ni(f);
  } catch (n) {
    if (t > 1) return ri(r, t - 1);
  }
}
function ni(r) {
  try {
    return typeof r != "string" ? r : JSON.parse(r);
  } catch (e) {
    return r;
  }
}
var Me = (r) => {
  typeof r == "string"
    ? console.log(r)
    : typeof r == "object"
    ? console.table({ msg: r })
    : console.log(r);
};
async function Da(r, e) {
  let { ipfsClient: t } = globalThis;
  if (Me(`sending signal: ${r}`), e) {
    Me("sending data as well....");
    let o = typeof e != "string" ? JSON.stringify(e) : e;
    Me(o);
    let i = (await t.add(o)).cid.toString(), { pathname: s } = new URL(r);
    await fetch(
      `https://code.spike.land/signal/?cid=${i}&signal=${s.slice(1)}`,
    ), fetch(`https://code.spike.land/ipfs/${i}`);
  }
  let { path: n } = await t.add(r);
  return Me(`signal sent --- ${n}`), { success: !0 };
}
var export_all = ti.default;
export {
  be as IPFSClient,
  Da as sendSignal,
  export_all as all,
  hn as toString,
  ln as fromString,
  Mo as raceToSuccess,
  No as publicIpfsGateways,
  on as concat,
  ri as fetchSignal,
};
