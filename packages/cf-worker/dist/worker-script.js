async function arrBuffSha256(msgBuffer) {
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => ("00" + b.toString(16)).slice(-2)).join(
    "",
  );
  return hashHex;
}
(function (i, u) {
  typeof exports == "object" && typeof module != "undefined"
    ? u(exports)
    : typeof define == "function" && define.amd
    ? define([
      "exports",
    ], u)
    : (i = i || self, u(i.Diff = {}));
})(this, function (i) {
  "use strict";
  function u() {
  }
  u.prototype = {
    diff: function (e, n) {
      var t = arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : {},
        r = t.callback;
      typeof t == "function" && (r = t, t = {}), this.options = t;
      var s = this;
      function o(y) {
        return r
          ? (setTimeout(function () {
            r(void 0, y);
          }, 0),
            !0)
          : y;
      }
      e = this.castInput(e),
        n = this.castInput(n),
        e = this.removeEmpty(this.tokenize(e)),
        n = this.removeEmpty(this.tokenize(n));
      var a = n.length,
        l = e.length,
        c = 1,
        d = a + l,
        v = [
          {
            newPos: -1,
            components: [],
          },
        ],
        x = this.extractCommon(v[0], n, e, 0);
      if (v[0].newPos + 1 >= a && x + 1 >= l) {
        return o([
          {
            value: this.join(n),
            count: n.length,
          },
        ]);
      }
      function h() {
        for (var y = -1 * c; y <= c; y += 2) {
          var S = void 0,
            E = v[y - 1],
            k = v[y + 1],
            N = (k ? k.newPos : 0) - y;
          E && (v[y - 1] = void 0);
          var D = E && E.newPos + 1 < a, O = k && 0 <= N && N < l;
          if (!D && !O) {
            v[y] = void 0;
            continue;
          }
          if (
            !D || O && E.newPos < k.newPos
              ? (S = g(k), s.pushComponent(S.components, void 0, !0))
              : (S = E, S.newPos++, s.pushComponent(S.components, !0, void 0)),
              N = s.extractCommon(S, n, e, y),
              S.newPos + 1 >= a && N + 1 >= l
          ) {
            return o(f(s, S.components, n, e, s.useLongestToken));
          }
          v[y] = S;
        }
        c++;
      }
      if (r) {
        (function y() {
          setTimeout(function () {
            if (c > d) return r();
            h() || y();
          }, 0);
        })();
      } else {
        for (; c <= d;) {
          var b = h();
          if (b) return b;
        }
      }
    },
    pushComponent: function (e, n, t) {
      var r = e[e.length - 1];
      r && r.added === n && r.removed === t
        ? e[e.length - 1] = {
          count: r.count + 1,
          added: n,
          removed: t,
        }
        : e.push({
          count: 1,
          added: n,
          removed: t,
        });
    },
    extractCommon: function (e, n, t, r) {
      for (
        var s = n.length, o = t.length, a = e.newPos, l = a - r, c = 0;
        a + 1 < s && l + 1 < o && this.equals(n[a + 1], t[l + 1]);
      ) {
        a++, l++, c++;
      }
      return c && e.components.push({
        count: c,
      }),
        e.newPos = a,
        l;
    },
    equals: function (e, n) {
      return this.options.comparator
        ? this.options.comparator(e, n)
        : e === n ||
          this.options.ignoreCase && e.toLowerCase() === n.toLowerCase();
    },
    removeEmpty: function (e) {
      for (var n = [], t = 0; t < e.length; t++) e[t] && n.push(e[t]);
      return n;
    },
    castInput: function (e) {
      return e;
    },
    tokenize: function (e) {
      return e.split("");
    },
    join: function (e) {
      return e.join("");
    },
  };
  function f(e, n, t, r, s) {
    for (var o = 0, a = n.length, l = 0, c = 0; o < a; o++) {
      var d = n[o];
      if (d.removed) {
        if (
          (d.value = e.join(r.slice(c, c + d.count)),
            c += d.count,
            o && n[o - 1].added)
        ) {
          var v = n[o - 1];
          n[o - 1] = n[o], n[o] = v;
        }
      } else {
        if (!d.added && s) {
          var x = t.slice(l, l + d.count);
          x = x.map(function (b, y) {
            var S = r[c + y];
            return S.length > b.length ? S : b;
          }), d.value = e.join(x);
        } else d.value = e.join(t.slice(l, l + d.count));
        l += d.count, d.added || (c += d.count);
      }
    }
    var h = n[a - 1];
    return (a > 1 && typeof h.value == "string" && (h.added || h.removed) &&
      e.equals("", h.value) && (n[a - 2].value += h.value, n.pop()),
      n);
  }
  function g(e) {
    return {
      newPos: e.newPos,
      components: e.components.slice(0),
    };
  }
  var p = new u();
  function w(e, n, t) {
    return p.diff(e, n, t);
  }
  function m(e, n) {
    if (typeof e == "function") n.callback = e;
    else if (e) for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
    return n;
  }
  var L = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
    j = /\S/,
    F = new u();
  F.equals = function (e, n) {
    return this.options.ignoreCase &&
      (e = e.toLowerCase(), n = n.toLowerCase()),
      e === n || this.options.ignoreWhitespace && !j.test(e) && !j.test(n);
  },
    F.tokenize = function (e) {
      for (
        var n = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), t = 0;
        t < n.length - 1;
        t++
      ) {
        !n[t + 1] && n[t + 2] && L.test(n[t]) && L.test(n[t + 2]) &&
          (n[t] += n[t + 2], n.splice(t + 1, 2), t--);
      }
      return n;
    };
  function B(e, n, t) {
    return (t = m(t, {
      ignoreWhitespace: !0,
    }),
      F.diff(e, n, t));
  }
  function z(e, n, t) {
    return F.diff(e, n, t);
  }
  var M = new u();
  M.tokenize = function (e) {
    var n = [], t = e.split(/(\n|\r\n)/);
    t[t.length - 1] || t.pop();
    for (var r = 0; r < t.length; r++) {
      var s = t[r];
      r % 2 && !this.options.newlineIsToken
        ? n[n.length - 1] += s
        : (this.options.ignoreWhitespace && (s = s.trim()), n.push(s));
    }
    return n;
  };
  function ge(e, n, t) {
    return M.diff(e, n, t);
  }
  function Ae(e, n, t) {
    var r = m(t, {
      ignoreWhitespace: !0,
    });
    return M.diff(e, n, r);
  }
  var ve = new u();
  ve.tokenize = function (e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  function Be(e, n, t) {
    return ve.diff(e, n, t);
  }
  var me = new u();
  me.tokenize = function (e) {
    return e.split(/([{}:;,]|\s+)/);
  };
  function Me(e, n, t) {
    return me.diff(e, n, t);
  }
  function Z(e) {
    return (typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Z = function (n) {
        return typeof n;
      }
      : Z = function (n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol &&
            n !== Symbol.prototype
          ? "symbol"
          : typeof n;
      },
      Z(e));
  }
  function P(e) {
    return Oe(e) || Te(e) || $e(e) || Je();
  }
  function Oe(e) {
    if (Array.isArray(e)) return ne(e);
  }
  function Te(e) {
    if (
      typeof Symbol != "undefined" && Symbol.iterator in Object(e)
    ) {
      return Array.from(e);
    }
  }
  function $e(e, n) {
    if (!e) return;
    if (typeof e == "string") return ne(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === "Object" && e.constructor && (t = e.constructor.name),
        t === "Map" || t === "Set")
    ) {
      return Array.from(e);
    }
    if (
      t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
    ) {
      return ne(e, n);
    }
  }
  function ne(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
    return r;
  }
  function Je() {
    throw new TypeError(
      `Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,
    );
  }
  var We = Object.prototype.toString, V = new u();
  V.useLongestToken = !0,
    V.tokenize = M.tokenize,
    V.castInput = function (e) {
      var n = this.options,
        t = n.undefinedReplacement,
        r = n.stringifyReplacer,
        s = r === void 0
          ? function (o, a) {
            return typeof a == "undefined" ? t : a;
          }
          : r;
      return typeof e == "string"
        ? e
        : JSON.stringify(_(e, null, null, s), s, "  ");
    },
    V.equals = function (e, n) {
      return u.prototype.equals.call(
        V,
        e.replace(/,([\r\n])/g, "$1"),
        n.replace(/,([\r\n])/g, "$1"),
      );
    };
  function ze(e, n, t) {
    return V.diff(e, n, t);
  }
  function _(e, n, t, r, s) {
    n = n || [], t = t || [], r && (e = r(s, e));
    var o;
    for (o = 0; o < n.length; o += 1) if (n[o] === e) return t[o];
    var a;
    if (We.call(e) === "[object Array]") {
      for (
        (n.push(e), a = new Array(e.length), t.push(a), o = 0);
        o < e.length;
        o += 1
      ) {
        a[o] = _(e[o], n, t, r, s);
      }
      return (n.pop(), t.pop(), a);
    }
    if ((e && e.toJSON && (e = e.toJSON()), Z(e) === "object" && e !== null)) {
      n.push(e), a = {}, t.push(a);
      var l = [], c;
      for (c in e) e.hasOwnProperty(c) && l.push(c);
      for ((l.sort(), o = 0); o < l.length; o += 1) {c = l[o],
          a[c] = _(e[c], n, t, r, c);}
      n.pop(), t.pop();
    } else a = e;
    return a;
  }
  var G = new u();
  G.tokenize = function (e) {
    return e.slice();
  },
    G.join = G.removeEmpty = function (e) {
      return e;
    };
  function Ve(e, n, t) {
    return G.diff(e, n, t);
  }
  function X(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = e.split(/\r\n|[\n\v\f\r\x85]/),
      r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      s = [],
      o = 0;
    function a() {
      var d = {};
      for (s.push(d); o < t.length;) {
        var v = t[o];
        if (/^(\-\-\-|\+\+\+|@@)\s/.test(v)) break;
        var x = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(v);
        x && (d.index = x[1]), o++;
      }
      for ((l(d), l(d), d.hunks = []); o < t.length;) {
        var h = t[o];
        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(h)) break;
        if (/^@@/.test(h)) d.hunks.push(c());
        else {
          if (h && n.strict) {
            throw new Error(
              "Unknown line " + (o + 1) + " " + JSON.stringify(h),
            );
          }
          o++;
        }
      }
    }
    function l(d) {
      var v = /^(---|\+\+\+)\s+(.*)$/.exec(t[o]);
      if (v) {
        var x = v[1] === "---" ? "old" : "new",
          h = v[2].split("	", 2),
          b = h[0].replace(/\\\\/g, "\\");
        /^".*"$/.test(b) && (b = b.substr(1, b.length - 2)),
          d[x + "FileName"] = b,
          d[x + "Header"] = (h[1] || "").trim(),
          o++;
      }
    }
    function c() {
      var d = o,
        v = t[o++],
        x = v.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),
        h = {
          oldStart: +x[1],
          oldLines: typeof x[2] == "undefined" ? 1 : +x[2],
          newStart: +x[3],
          newLines: typeof x[4] == "undefined" ? 1 : +x[4],
          lines: [],
          linedelimiters: [],
        };
      h.oldLines === 0 && (h.oldStart += 1),
        h.newLines === 0 && (h.newStart += 1);
      for (
        var b = 0, y = 0;
        o < t.length &&
        !(t[o].indexOf("--- ") === 0 && o + 2 < t.length &&
          t[o + 1].indexOf("+++ ") === 0 && t[o + 2].indexOf("@@") === 0);
        o++
      ) {
        var S = t[o].length == 0 && o != t.length - 1 ? " " : t[o][0];
        if (
          S === "+" || S === "-" || S === " " || S === "\\"
        ) {
          h.lines.push(t[o]),
            h.linedelimiters.push(r[o] || `\n`),
            S === "+" ? b++ : S === "-" ? y++ : S === " " && (b++, y++);
        } else break;
      }
      if (
        (!b && h.newLines === 1 && (h.newLines = 0),
          !y && h.oldLines === 1 && (h.oldLines = 0),
          n.strict)
      ) {
        if (b !== h.newLines) {
          throw new Error(
            "Added line count did not match for hunk at line " + (d + 1),
          );
        }
        if (y !== h.oldLines) {
          throw new Error(
            "Removed line count did not match for hunk at line " + (d + 1),
          );
        }
      }
      return h;
    }
    for (; o < t.length;) a();
    return s;
  }
  function Ue(e, n, t) {
    var r = !0, s = !1, o = !1, a = 1;
    return function l() {
      if (r && !o) {
        if ((s ? a++ : r = !1, e + a <= t)) return a;
        o = !0;
      }
      if (!s) return (o || (r = !0), n <= e - a ? -a++ : (s = !0, l()));
    };
  }
  function we(e, n) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if ((typeof n == "string" && (n = X(n)), Array.isArray(n))) {
      if (n.length > 1) {
        throw new Error("applyPatch only works with a single input.");
      }
      n = n[0];
    }
    var r = e.split(/\r\n|[\n\v\f\r\x85]/),
      s = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      o = n.hunks,
      a = t.compareLine || function (ae, K, ee, W) {
        return K === W;
      },
      l = 0,
      c = t.fuzzFactor || 0,
      d = 0,
      v = 0,
      x,
      h;
    function b(ae, K) {
      for (var ee = 0; ee < ae.lines.length; ee++) {
        var W = ae.lines[ee],
          ue = W.length > 0 ? W[0] : " ",
          rn = W.length > 0 ? W.substr(1) : W;
        if (ue === " " || ue === "-") {
          if (!a(K + 1, r[K], ue, rn) && (l++, l > c)) return !1;
          K++;
        }
      }
      return !0;
    }
    for (var y = 0; y < o.length; y++) {
      for (
        var S = o[y],
          E = r.length - S.oldLines,
          k = 0,
          N = v + S.oldStart - 1,
          D = Ue(N, d, E);
        k !== void 0;
        k = D()
      ) {
        if (b(S, N + k)) {
          S.offset = v += k;
          break;
        }
      }
      if (k === void 0) return !1;
      d = S.offset + S.oldStart + S.oldLines;
    }
    for (var O = 0, U = 0; U < o.length; U++) {
      var H = o[U], C = H.oldStart + H.offset + O - 1;
      O += H.newLines - H.oldLines;
      for (var I = 0; I < H.lines.length; I++) {
        var A = H.lines[I],
          J = A.length > 0 ? A[0] : " ",
          se = A.length > 0 ? A.substr(1) : A,
          Q = H.linedelimiters[I];
        if (J === " ") C++;
        else if (J === "-") r.splice(C, 1), s.splice(C, 1);
        else if (J === "+") r.splice(C, 0, se), s.splice(C, 0, Q), C++;
        else if (J === "\\") {
          var Y = H.lines[I - 1] ? H.lines[I - 1][0] : null;
          Y === "+" ? x = !0 : Y === "-" && (h = !0);
        }
      }
    }
    if (x) for (; !r[r.length - 1];) r.pop(), s.pop();
    else h && (r.push(""), s.push(`\n`));
    for (var R = 0; R < r.length - 1; R++) r[R] = r[R] + s[R];
    return r.join("");
  }
  function Re(e, n) {
    typeof e == "string" && (e = X(e));
    var t = 0;
    function r() {
      var s = e[t++];
      if (!s) return n.complete();
      n.loadFile(s, function (o, a) {
        if (o) return n.complete(o);
        var l = we(a, s, n);
        n.patched(s, l, function (c) {
          if (c) return n.complete(c);
          r();
        });
      });
    }
    r();
  }
  function te(e, n, t, r, s, o, a) {
    a || (a = {}), typeof a.context == "undefined" && (a.context = 4);
    var l = ge(t, r, a);
    l.push({
      value: "",
      lines: [],
    });
    function c(k) {
      return k.map(function (N) {
        return " " + N;
      });
    }
    for (
      var d = [],
        v = 0,
        x = 0,
        h = [],
        b = 1,
        y = 1,
        S = function (k) {
          var N = l[k], D = N.lines || N.value.replace(/\n$/, "").split(`\n`);
          if ((N.lines = D, N.added || N.removed)) {
            var O;
            if (!v) {
              var U = l[k - 1];
              v = b,
                x = y,
                U &&
                (h = a.context > 0 ? c(U.lines.slice(-a.context)) : [],
                  v -= h.length,
                  x -= h.length);
            }
            (O = h).push.apply(
              O,
              P(D.map(function (Y) {
                return (N.added ? "+" : "-") + Y;
              })),
            ), N.added ? y += D.length : b += D.length;
          } else {
            if (v) {
              if (D.length <= a.context * 2 && k < l.length - 2) {
                var H;
                (H = h).push.apply(H, P(c(D)));
              } else {
                var C, I = Math.min(D.length, a.context);
                (C = h).push.apply(C, P(c(D.slice(0, I))));
                var A = {
                  oldStart: v,
                  oldLines: b - v + I,
                  newStart: x,
                  newLines: y - x + I,
                  lines: h,
                };
                if (k >= l.length - 2 && D.length <= a.context) {
                  var J = /\n$/.test(t),
                    se = /\n$/.test(r),
                    Q = D.length == 0 && h.length > A.oldLines;
                  !J && Q && t.length > 0 &&
                  h.splice(A.oldLines, 0, "\\ No newline at end of file"),
                    (!J && !Q || !se) && h.push("\\ No newline at end of file");
                }
                d.push(A), v = 0, x = 0, h = [];
              }
            }
            b += D.length, y += D.length;
          }
        },
        E = 0;
      E < l.length;
      E++
    ) {
      S(E);
    }
    return {
      oldFileName: e,
      newFileName: n,
      oldHeader: s,
      newHeader: o,
      hunks: d,
    };
  }
  function Ke(e) {
    var n = [];
    e.oldFileName == e.newFileName && n.push("Index: " + e.oldFileName),
      n.push(
        "===================================================================",
      ),
      n.push(
        "--- " + e.oldFileName + (typeof e.oldHeader == "undefined"
          ? ""
          : "	" + e.oldHeader),
      ),
      n.push(
        "+++ " + e.newFileName + (typeof e.newHeader == "undefined"
          ? ""
          : "	" + e.newHeader),
      );
    for (var t = 0; t < e.hunks.length; t++) {
      var r = e.hunks[t];
      r.oldLines === 0 && (r.oldStart -= 1),
        r.newLines === 0 && (r.newStart -= 1),
        n.push(
          "@@ -" + r.oldStart + "," + r.oldLines + " +" + r.newStart + "," +
            r.newLines + " @@",
        ),
        n.push.apply(n, r.lines);
    }
    return n.join(`\n`) + `\n`;
  }
  function ye(e, n, t, r, s, o, a) {
    return Ke(te(e, n, t, r, s, o, a));
  }
  function Ze(e, n, t, r, s, o) {
    return ye(e, e, n, t, r, s, o);
  }
  function _e(e, n) {
    return e.length !== n.length ? !1 : re(e, n);
  }
  function re(e, n) {
    if (n.length > e.length) return !1;
    for (var t = 0; t < n.length; t++) if (n[t] !== e[t]) return !1;
    return !0;
  }
  function Ge(e) {
    var n = oe(e.lines), t = n.oldLines, r = n.newLines;
    t !== void 0 ? e.oldLines = t : delete e.oldLines,
      r !== void 0 ? e.newLines = r : delete e.newLines;
  }
  function Xe(e, n, t) {
    e = Se(e, t), n = Se(n, t);
    var r = {};
    (e.index || n.index) && (r.index = e.index || n.index),
      (e.newFileName || n.newFileName) &&
      (xe(e)
        ? xe(n)
          ? (r.oldFileName = q(r, e.oldFileName, n.oldFileName),
            r.newFileName = q(r, e.newFileName, n.newFileName),
            r.oldHeader = q(r, e.oldHeader, n.oldHeader),
            r.newHeader = q(r, e.newHeader, n.newHeader))
          : (r.oldFileName = e.oldFileName,
            r.newFileName = e.newFileName,
            r.oldHeader = e.oldHeader,
            r.newHeader = e.newHeader)
        : (r.oldFileName = n.oldFileName || e.oldFileName,
          r.newFileName = n.newFileName || e.newFileName,
          r.oldHeader = n.oldHeader || e.oldHeader,
          r.newHeader = n.newHeader || e.newHeader)),
      r.hunks = [];
    for (
      var s = 0, o = 0, a = 0, l = 0; s < e.hunks.length || o < n.hunks.length;
    ) {
      var c = e.hunks[s] || {
          oldStart: Infinity,
        },
        d = n.hunks[o] || {
          oldStart: Infinity,
        };
      if (be(c, d)) r.hunks.push(Le(c, a)), s++, l += c.newLines - c.oldLines;
      else if (be(d, c)) {
        r.hunks.push(Le(d, l)), o++, a += d.newLines - d.oldLines;
      } else {
        var v = {
          oldStart: Math.min(c.oldStart, d.oldStart),
          oldLines: 0,
          newStart: Math.min(c.newStart + a, d.oldStart + l),
          newLines: 0,
          lines: [],
        };
        qe(v, c.oldStart, c.lines, d.oldStart, d.lines),
          o++,
          s++,
          r.hunks.push(v);
      }
    }
    return r;
  }
  function Se(e, n) {
    if (typeof e == "string") {
      if (/^@@/m.test(e) || /^Index:/m.test(e)) return X(e)[0];
      if (!n) {
        throw new Error("Must provide a base reference or pass in a patch");
      }
      return te(void 0, void 0, n, e);
    }
    return e;
  }
  function xe(e) {
    return e.newFileName && e.newFileName !== e.oldFileName;
  }
  function q(e, n, t) {
    return n === t ? n : (e.conflict = !0, {
      mine: n,
      theirs: t,
    });
  }
  function be(e, n) {
    return e.oldStart < n.oldStart && e.oldStart + e.oldLines < n.oldStart;
  }
  function Le(e, n) {
    return {
      oldStart: e.oldStart,
      oldLines: e.oldLines,
      newStart: e.newStart + n,
      newLines: e.newLines,
      lines: e.lines,
    };
  }
  function qe(e, n, t, r, s) {
    var o = {
        offset: n,
        lines: t,
        index: 0,
      },
      a = {
        offset: r,
        lines: s,
        index: 0,
      };
    for (
      (Ne(e, o, a), Ne(e, a, o));
      o.index < o.lines.length && a.index < a.lines.length;
    ) {
      var l = o.lines[o.index], c = a.lines[a.index];
      if ((l[0] === "-" || l[0] === "+") && (c[0] === "-" || c[0] === "+")) {
        Qe(e, o, a);
      } else if (l[0] === "+" && c[0] === " ") {
        var d;
        (d = e.lines).push.apply(d, P($(o)));
      } else if (c[0] === "+" && l[0] === " ") {
        var v;
        (v = e.lines).push.apply(v, P($(a)));
      } else {
        l[0] === "-" && c[0] === " "
          ? ke(e, o, a)
          : c[0] === "-" && l[0] === " "
          ? ke(e, a, o, !0)
          : l === c
          ? (e.lines.push(l), o.index++, a.index++)
          : ie(e, $(o), $(a));
      }
    }
    De(e, o), De(e, a), Ge(e);
  }
  function Qe(e, n, t) {
    var r = $(n), s = $(t);
    if (je(r) && je(s)) {
      if (re(r, s) && Fe(t, r, r.length - s.length)) {
        var o;
        (o = e.lines).push.apply(o, P(r));
        return;
      } else if (re(s, r) && Fe(n, s, s.length - r.length)) {
        var a;
        (a = e.lines).push.apply(a, P(s));
        return;
      }
    } else if (_e(r, s)) {
      var l;
      (l = e.lines).push.apply(l, P(r));
      return;
    }
    ie(e, r, s);
  }
  function ke(e, n, t, r) {
    var s = $(n), o = Ye(t, s);
    if (o.merged) {
      var a;
      (a = e.lines).push.apply(a, P(o.merged));
    } else ie(e, r ? o : s, r ? s : o);
  }
  function ie(e, n, t) {
    e.conflict = !0,
      e.lines.push({
        conflict: !0,
        mine: n,
        theirs: t,
      });
  }
  function Ne(e, n, t) {
    for (; n.offset < t.offset && n.index < n.lines.length;) {
      var r = n.lines[n.index++];
      e.lines.push(r), n.offset++;
    }
  }
  function De(e, n) {
    for (; n.index < n.lines.length;) {
      var t = n.lines[n.index++];
      e.lines.push(t);
    }
  }
  function $(e) {
    for (var n = [], t = e.lines[e.index][0]; e.index < e.lines.length;) {
      var r = e.lines[e.index];
      if ((t === "-" && r[0] === "+" && (t = "+"), t === r[0])) {
        n.push(r), e.index++;
      } else break;
    }
    return n;
  }
  function Ye(e, n) {
    for (
      var t = [], r = [], s = 0, o = !1, a = !1;
      s < n.length && e.index < e.lines.length;
    ) {
      var l = e.lines[e.index], c = n[s];
      if (c[0] === "+") break;
      if ((o = o || l[0] !== " ", r.push(c), s++, l[0] === "+")) {
        for (a = !0; l[0] === "+";) {
          t.push(l), l = e.lines[++e.index];
        }
      }
      c.substr(1) === l.substr(1) ? (t.push(l), e.index++) : a = !0;
    }
    if (((n[s] || "")[0] === "+" && o && (a = !0), a)) return t;
    for (; s < n.length;) r.push(n[s++]);
    return {
      merged: r,
      changes: t,
    };
  }
  function je(e) {
    return e.reduce(function (n, t) {
      return n && t[0] === "-";
    }, !0);
  }
  function Fe(e, n, t) {
    for (var r = 0; r < t; r++) {
      var s = n[n.length - t + r].substr(1);
      if (e.lines[e.index + r] !== " " + s) return !1;
    }
    return (e.index += t, !0);
  }
  function oe(e) {
    var n = 0, t = 0;
    return (e.forEach(function (r) {
      if (typeof r != "string") {
        var s = oe(r.mine), o = oe(r.theirs);
        n !== void 0 &&
        (s.oldLines === o.oldLines ? n += s.oldLines : n = void 0),
          t !== void 0 &&
          (s.newLines === o.newLines ? t += s.newLines : t = void 0);
      } else {
        t !== void 0 && (r[0] === "+" || r[0] === " ") && t++,
          n !== void 0 && (r[0] === "-" || r[0] === " ") && n++;
      }
    }),
      {
        oldLines: n,
        newLines: t,
      });
  }
  function en(e) {
    for (var n = [], t, r, s = 0; s < e.length; s++) {
      t = e[s],
        t.added ? r = 1 : t.removed ? r = -1 : r = 0,
        n.push([
          r,
          t.value,
        ]);
    }
    return n;
  }
  function nn(e) {
    for (var n = [], t = 0; t < e.length; t++) {
      var r = e[t];
      r.added ? n.push("<ins>") : r.removed && n.push("<del>"),
        n.push(tn(r.value)),
        r.added ? n.push("</ins>") : r.removed && n.push("</del>");
    }
    return n.join("");
  }
  function tn(e) {
    var n = e;
    return (n = n.replace(/&/g, "&amp;"),
      n = n.replace(/</g, "&lt;"),
      n = n.replace(/>/g, "&gt;"),
      n = n.replace(/"/g, "&quot;"),
      n);
  }
  i.Diff = u,
    i.applyPatch = we,
    i.applyPatches = Re,
    i.canonicalize = _,
    i.convertChangesToDMP = en,
    i.convertChangesToXML = nn,
    i.createPatch = Ze,
    i.createTwoFilesPatch = ye,
    i.diffArrays = Ve,
    i.diffChars = w,
    i.diffCss = Me,
    i.diffJson = ze,
    i.diffLines = ge,
    i.diffSentences = Be,
    i.diffTrimmedLines = Ae,
    i.diffWords = B,
    i.diffWordsWithSpace = z,
    i.merge = Xe,
    i.parsePatch = X,
    i.structuredPatch = te,
    Object.defineProperty(i, "__esModule", {
      value: !0,
    });
});
async function on(i) {
  const u = await crypto.subtle.digest("SHA-256", i),
    f = Array.from(new Uint8Array(u)),
    g = f.map((p) => ("00" + p.toString(16)).slice(-2)).join("");
  return g;
}
const sn = (i) => {
    if (i.length < 10) return !1;
    const u = [
        ...i.slice(0, 8),
      ].filter((g) => g < "0" || g > "f").length === 0,
      f = i.slice(8);
    if (u && f[0] === "[" && f[f.length - 1] === "]") {
      try {
        return JSON.parse(f).length > 1;
      } catch {
        return !1;
      }
    }
    return !1;
  },
  an = (i, u) => {
    const f = JSON.parse(u);
    let g = i.slice(), p = "";
    return f.forEach((w) => {
      if (Number(w) === w) {
        const m = Math.abs(w), L = g.slice(0, m);
        g = g.slice(m), w > 0 && (p += String(L));
      } else p += String(w);
    }),
      p;
  };
async function un(i) {
  const u = new TextEncoder().encode(i), f = await on(u);
  return f.substr(0, 8);
}
const ln = async (i, u) => {
    const f = un(i), g = Diff.diffChars(i, u);
    return {
      b: await f,
      c: g.map((p) => p.added ? p.value : p.removed ? -p.count : p.count),
    };
  },
  fn = (i, u) => u.some((f) => i instanceof f);
let He, Ee;
function cn() {
  return He || (He = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction,
  ]);
}
function dn() {
  return Ee || (Ee = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey,
  ]);
}
const Ie = new WeakMap(),
  le = new WeakMap(),
  Pe = new WeakMap(),
  fe = new WeakMap(),
  ce = new WeakMap();
function hn(i) {
  if (le.has(i)) return;
  const u = new Promise((f, g) => {
    const p = () => {
        i.removeEventListener("complete", w),
          i.removeEventListener("error", m),
          i.removeEventListener("abort", m);
      },
      w = () => {
        f(), p();
      },
      m = () => {
        g(i.error || new DOMException("AbortError", "AbortError")), p();
      };
    i.addEventListener("complete", w),
      i.addEventListener("error", m),
      i.addEventListener("abort", m);
  });
  le.set(i, u);
}
const de = (i) => ce.get(i),
  pn = [
    "get",
    "getKey",
    "getAll",
    "getAllKeys",
    "count",
  ],
  gn = [
    "put",
    "add",
    "delete",
    "clear",
  ],
  he = new Map();
function Ce(i, u) {
  if (!(i instanceof IDBDatabase && !(u in i) && typeof u == "string")) return;
  if (he.get(u)) return he.get(u);
  const f = u.replace(/FromIndex$/, ""), g = u !== f, p = gn.includes(f);
  if (
    !(f in (g ? IDBIndex : IDBObjectStore).prototype) || !(p || pn.includes(f))
  ) {
    return;
  }
  const w = async function (m, ...L) {
    const j = this.transaction(m, p ? "readwrite" : "readonly");
    let F = j.store;
    g && (F = F.index(L.shift()));
    const B = await F[f](...L);
    return (p && await j.done, B);
  };
  return he.set(u, w), w;
}
async function vn(i) {
  const u = await crypto.subtle.digest("SHA-256", i),
    f = Array.from(new Uint8Array(u)),
    g = f.map((p) => ("00" + p.toString(16)).slice(-2)).join("");
  return g;
}
async function mn(i) {
  const u = new TextEncoder().encode(i), f = await vn(u);
  return f.substr(0, 8);
}
const getDbObj = (i, u = !1) => {
  const f = {
    async get(g, p = "string") {
      let w;
      try {
        if (
          (u ? w = await (await i).get("codeStore", g) : w = await i.get(g), !w)
        ) {
          return null;
        }
      } catch (m) {
        return null;
      }
      if (p === "json") return JSON.parse(w);
      if (p === "string") {
        const m = await w;
        if (typeof m == "string" && p === "string") {
          const F = m;
          if (sn(m)) {
            const B = m.slice(0, 8), z = m.slice(8), M = await f.get(B);
            return an(M, z);
          }
          return m;
        }
        const L = new TextDecoder(), j = L.decode(m);
        return j;
      }
      return w;
    },
    async put(g, p) {
      let w;
      try {
        const L = await f.get(g);
        if (
          typeof L == "string" && typeof p == "string" && L.length === 8 &&
          L !== p
        ) {
          const j = await f.get(p), F = await f.get(L);
          if (typeof F == "string") {
            const B = await mn(F);
            if (B === L) {
              const z = await ln(j, F), M = z.b + JSON.stringify(z.c);
              (await i).put("codeStore", M, B);
            }
          }
        }
      } catch {
        w = "";
      }
      if (w !== "" && p === w) return p;
      let m;
      return (typeof p != "string" ? m = new TextDecoder().decode(p) : m = p,
        (await i).put("codeStore", m, g));
    },
    async delete(g) {
      return (await i).delete("codeStore", g);
    },
    async clear() {
      return (await i).clear("codeStore");
    },
    async keys() {
      return (await i).getAllKeys("codeStore");
    },
  };
  return f;
};
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues =
      typeof crypto !== "undefined" && crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto) ||
      typeof msCrypto !== "undefined" &&
        typeof msCrypto.getRandomValues === "function" &&
        msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    }
  }
  return getRandomValues(rnds8);
}
const __default =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && __default.test(uuid);
}
var byteToHex = [];
for (var i1 = 0; i1 < 256; ++i1) {
  byteToHex.push((i1 + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined
    ? arguments[1]
    : 0;
  var uuid =
    (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] +
      byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" +
      byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" +
      byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" +
      byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" +
      byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] +
      byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] +
      byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i1 = 0; i1 < 16; ++i1) {
      buf[offset + i1] = rnds[i1];
    }
    return buf;
  }
  return stringify(rnds);
}
const v41 = () => v4();
var SHAKV;
var USERS;
var API_KEY;
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};
function json(resp) {
  return new Response(JSON.stringify(resp), {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
}
function text(resp) {
  return new Response(resp, {
    headers: {
      ...corsHeaders,
      "Content-Type": "text/html;charset=UTF-8",
    },
  });
}
function handleOptions(request) {
  const headers = request.headers;
  if (
    headers.get("Origin") !== null &&
    headers.get("Access-Control-Request-Method") !== null &&
    headers.get("Access-Control-Request-Headers") !== null
  ) {
    const respHeaders = {
      ...corsHeaders,
      "Access-Control-Allow-Headers": request.headers.get(
        "Access-Control-Request-Headers",
      ),
    };
    return new Response(null, {
      headers: respHeaders,
    });
  } else {
    return new Response(null, {
      headers: {
        Allow: corsHeaders["Access-Control-Allow-Methods"],
      },
    });
  }
}
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashHex = await arrBuffSha256(msgBuffer);
  return hashHex.substr(0, 8);
}
async function handleAdmin(request, searchParams, pathname, SHAKV1) {
  if (pathname === "/keys/") {
    const prefix = searchParams.get("prefix");
    const value = await SHAKV1.list({
      prefix,
    });
    return json(value);
  }
  if (pathname === "/keys/delete/") {
    const hash = searchParams.get("hash");
    const value = await SHAKV1.delete(hash);
    return json(value);
  }
  return json({
    error: "not implemented",
  });
}
async function handleCloudRequest(request) {
  const url = new URL(request.url);
  const { searchParams, pathname } = url;
  const psk = String(request.headers.get("API_KEY") || "");
  if (request.method === "GET" && psk && psk == API_KEY) {
    return handleAdmin(request, searchParams, pathname, SHAKV);
  } else if (request.method === "GET") {
    if (pathname === "/robots.txt") {
      return text("User-agent: * Disallow: /");
    }
    if (pathname === "/connect") {
      const uuid = searchParams.get("uuid") || v41();
      const key = await sha256(uuid);
      await SHAKV.put(
        key,
        JSON.stringify({
          uuid,
          connected: searchParams.get("uuid"),
        }),
        {
          expirationTtl: 60,
        },
      );
      return json({
        key,
      });
    }
    if (pathname === "/check") {
      const key = searchParams.get("key");
      if (key === null) return new Response("500");
      const waitForChange = async () => {
        const data = await SHAKV.get(key, "json");
        if (!data || data.connected) {
          return data;
        }
        return new Promise((resolve) => {
          const clear = setInterval(async () => {
            const data1 = await SHAKV.get(key, "json");
            if (!data1 || data1.connected) {
              clearInterval(clear);
              resolve(data1);
            }
          }, 1000);
        });
      };
      const data = await waitForChange();
      return json({
        expired: data === null,
      });
    }
    if (pathname === "/register") {
      const uuid = v41();
      await USERS.put(
        uuid,
        JSON.stringify({
          uuid,
          registered: Date.now(),
          cf: request.cf,
        }),
      );
      return json({
        uuid,
      });
    }
    const maybeRoute = pathname.substr(1);
    if (maybeRoute) {
      const shaDB = getDbObj(SHAKV);
      const result = shaDB.get(maybeRoute);
      if (result !== null) {
        return text(await result);
      }
    }
    return Response.redirect("https://zed.vision/code", 301);
  } else if (request.method === "POST") {
    const myBuffer = await request.arrayBuffer();
    const hash = await arrBuffSha256(myBuffer);
    const smallerKey = hash.substring(0, 8);
    await SHAKV.put(smallerKey, myBuffer);
    return json({
      hash: smallerKey,
    });
  }
  return new Response("404");
}
addEventListener("fetch", (event) => {
  if (event.request.method === "OPTIONS") {
    event.respondWith(handleOptions(event.request));
  } else {
    event.respondWith(handleCloudRequest(event.request));
  }
});
function wn(i1) {
  const u = new Promise((f, g) => {
    const p = () => {
        i1.removeEventListener("success", w),
          i1.removeEventListener("error", m);
      },
      w = () => {
        f(T(i1.result)), p();
      },
      m = () => {
        g(i1.error), p();
      };
    i1.addEventListener("success", w), i1.addEventListener("error", m);
  });
  return u.then((f) => {
    f instanceof IDBCursor && Ie.set(f, i1);
  }).catch(() => {
  }),
    ce.set(u, i1),
    u;
}
let pe = {
  get(i, u, f) {
    if (i instanceof IDBTransaction) {
      if (u === "done") return le.get(i);
      if (u === "objectStoreNames") return i.objectStoreNames || Pe.get(i);
      if (u === "store") {
        return f.objectStoreNames[1]
          ? void 0
          : f.objectStore(f.objectStoreNames[0]);
      }
    }
    return T(i[u]);
  },
  set(i, u, f) {
    return (i[u] = f, !0);
  },
  has(i, u) {
    return i instanceof IDBTransaction && (u === "done" || u === "store")
      ? !0
      : u in i;
  },
};
function yn(i2) {
  pe = i2(pe);
}
function Sn(i2) {
  return i2 === IDBDatabase.prototype.transaction &&
      !("objectStoreNames" in IDBTransaction.prototype)
    ? function (u, ...f) {
      const g = i2.call(de(this), u, ...f);
      return Pe.set(
        g,
        u.sort ? u.sort() : [
          u,
        ],
      ),
        T(g);
    }
    : dn().includes(i2)
    ? function (...u) {
      return i2.apply(de(this), u), T(Ie.get(this));
    }
    : function (...u) {
      return T(i2.apply(de(this), u));
    };
}
function xn(i2) {
  return typeof i2 == "function"
    ? Sn(i2)
    : (i2 instanceof IDBTransaction && hn(i2),
      fn(i2, cn()) ? new Proxy(i2, pe) : i2);
}
function T(i2) {
  if (i2 instanceof IDBRequest) return wn(i2);
  if (fe.has(i2)) return fe.get(i2);
  const u = xn(i2);
  return u !== i2 && (fe.set(i2, u), ce.set(u, i2)), u;
}
function bn(
  i2,
  u,
  { blocked: f, upgrade: g, blocking: p, terminated: w } = {},
) {
  const m = indexedDB.open(i2, u), L = T(m);
  return g && m.addEventListener("upgradeneeded", (j) => {
    g(T(m.result), j.oldVersion, j.newVersion, T(m.transaction));
  }),
    f && m.addEventListener("blocked", () => f()),
    L.then((j) => {
      w && j.addEventListener("close", () => w()),
        p && j.addEventListener("versionchange", () => p());
    }).catch(() => {
    }),
    L;
}
yn((i2) => ({
  ...i2,
  get: (u, f, g) => Ce(u, f) || i2.get(u, f, g),
  has: (u, f) => !!Ce(u, f) || i2.has(u, f),
}));
