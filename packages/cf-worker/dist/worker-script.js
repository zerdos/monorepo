async function arrBuffSha256(msgBuffer) {
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => ("00" + b.toString(16)).slice(-2)).join(
    "",
  );
  return hashHex;
}
(function (i, a) {
  typeof exports == "object" && typeof module != "undefined"
    ? a(exports)
    : typeof define == "function" && define.amd
    ? define([
      "exports",
    ], a)
    : (i = i || self, a(i.Diff = {}));
})(this, function (i) {
  "use strict";
  function a() {
  }
  a.prototype = {
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
      var u = n.length,
        l = e.length,
        c = 1,
        d = u + l,
        m = [
          {
            newPos: -1,
            components: [],
          },
        ],
        x = this.extractCommon(m[0], n, e, 0);
      if (m[0].newPos + 1 >= u && x + 1 >= l) {
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
            E = m[y - 1],
            k = m[y + 1],
            N = (k ? k.newPos : 0) - y;
          E && (m[y - 1] = void 0);
          var D = E && E.newPos + 1 < u, O = k && 0 <= N && N < l;
          if (!D && !O) {
            m[y] = void 0;
            continue;
          }
          if (
            !D || O && E.newPos < k.newPos
              ? (S = g(k), s.pushComponent(S.components, void 0, !0))
              : (S = E, S.newPos++, s.pushComponent(S.components, !0, void 0)),
              N = s.extractCommon(S, n, e, y),
              S.newPos + 1 >= u && N + 1 >= l
          ) {
            return o(f(s, S.components, n, e, s.useLongestToken));
          }
          m[y] = S;
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
        var s = n.length, o = t.length, u = e.newPos, l = u - r, c = 0;
        u + 1 < s && l + 1 < o && this.equals(n[u + 1], t[l + 1]);
      ) {
        u++, l++, c++;
      }
      return c && e.components.push({
        count: c,
      }),
        e.newPos = u,
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
    for (var o = 0, u = n.length, l = 0, c = 0; o < u; o++) {
      var d = n[o];
      if (d.removed) {
        if (
          (d.value = e.join(r.slice(c, c + d.count)),
            c += d.count,
            o && n[o - 1].added)
        ) {
          var m = n[o - 1];
          n[o - 1] = n[o], n[o] = m;
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
    var h = n[u - 1];
    return (u > 1 && typeof h.value == "string" && (h.added || h.removed) &&
      e.equals("", h.value) && (n[u - 2].value += h.value, n.pop()),
      n);
  }
  function g(e) {
    return {
      newPos: e.newPos,
      components: e.components.slice(0),
    };
  }
  var p = new a();
  function w(e, n, t) {
    return p.diff(e, n, t);
  }
  function v(e, n) {
    if (typeof e == "function") n.callback = e;
    else if (e) for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
    return n;
  }
  var L = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
    j = /\S/,
    F = new a();
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
    return (t = v(t, {
      ignoreWhitespace: !0,
    }),
      F.diff(e, n, t));
  }
  function z(e, n, t) {
    return F.diff(e, n, t);
  }
  var M = new a();
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
    var r = v(t, {
      ignoreWhitespace: !0,
    });
    return M.diff(e, n, r);
  }
  var ve = new a();
  ve.tokenize = function (e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  function Be(e, n, t) {
    return ve.diff(e, n, t);
  }
  var me = new a();
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
  function I(e) {
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
  var We = Object.prototype.toString, V = new a();
  V.useLongestToken = !0,
    V.tokenize = M.tokenize,
    V.castInput = function (e) {
      var n = this.options,
        t = n.undefinedReplacement,
        r = n.stringifyReplacer,
        s = r === void 0
          ? function (o, u) {
            return typeof u == "undefined" ? t : u;
          }
          : r;
      return typeof e == "string"
        ? e
        : JSON.stringify(_(e, null, null, s), s, "  ");
    },
    V.equals = function (e, n) {
      return a.prototype.equals.call(
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
    var u;
    if (We.call(e) === "[object Array]") {
      for (
        (n.push(e), u = new Array(e.length), t.push(u), o = 0);
        o < e.length;
        o += 1
      ) {
        u[o] = _(e[o], n, t, r, s);
      }
      return (n.pop(), t.pop(), u);
    }
    if ((e && e.toJSON && (e = e.toJSON()), Z(e) === "object" && e !== null)) {
      n.push(e), u = {}, t.push(u);
      var l = [], c;
      for (c in e) e.hasOwnProperty(c) && l.push(c);
      for ((l.sort(), o = 0); o < l.length; o += 1) {c = l[o],
          u[c] = _(e[c], n, t, r, c);}
      n.pop(), t.pop();
    } else u = e;
    return u;
  }
  var G = new a();
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
    function u() {
      var d = {};
      for (s.push(d); o < t.length;) {
        var m = t[o];
        if (/^(\-\-\-|\+\+\+|@@)\s/.test(m)) break;
        var x = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(m);
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
      var m = /^(---|\+\+\+)\s+(.*)$/.exec(t[o]);
      if (m) {
        var x = m[1] === "---" ? "old" : "new",
          h = m[2].split("	", 2),
          b = h[0].replace(/\\\\/g, "\\");
        /^".*"$/.test(b) && (b = b.substr(1, b.length - 2)),
          d[x + "FileName"] = b,
          d[x + "Header"] = (h[1] || "").trim(),
          o++;
      }
    }
    function c() {
      var d = o,
        m = t[o++],
        x = m.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),
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
    for (; o < t.length;) u();
    return s;
  }
  function Ue(e, n, t) {
    var r = !0, s = !1, o = !1, u = 1;
    return function l() {
      if (r && !o) {
        if ((s ? u++ : r = !1, e + u <= t)) return u;
        o = !0;
      }
      if (!s) return (o || (r = !0), n <= e - u ? -u++ : (s = !0, l()));
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
      u = t.compareLine || function (ae, K, ee, W) {
        return K === W;
      },
      l = 0,
      c = t.fuzzFactor || 0,
      d = 0,
      m = 0,
      x,
      h;
    function b(ae, K) {
      for (var ee = 0; ee < ae.lines.length; ee++) {
        var W = ae.lines[ee],
          ue = W.length > 0 ? W[0] : " ",
          rn = W.length > 0 ? W.substr(1) : W;
        if (ue === " " || ue === "-") {
          if (!u(K + 1, r[K], ue, rn) && (l++, l > c)) return !1;
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
          N = m + S.oldStart - 1,
          D = Ue(N, d, E);
        k !== void 0;
        k = D()
      ) {
        if (b(S, N + k)) {
          S.offset = m += k;
          break;
        }
      }
      if (k === void 0) return !1;
      d = S.offset + S.oldStart + S.oldLines;
    }
    for (var O = 0, U = 0; U < o.length; U++) {
      var H = o[U], P = H.oldStart + H.offset + O - 1;
      O += H.newLines - H.oldLines;
      for (var C = 0; C < H.lines.length; C++) {
        var A = H.lines[C],
          J = A.length > 0 ? A[0] : " ",
          se = A.length > 0 ? A.substr(1) : A,
          Q = H.linedelimiters[C];
        if (J === " ") P++;
        else if (J === "-") r.splice(P, 1), s.splice(P, 1);
        else if (J === "+") r.splice(P, 0, se), s.splice(P, 0, Q), P++;
        else if (J === "\\") {
          var Y = H.lines[C - 1] ? H.lines[C - 1][0] : null;
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
      n.loadFile(s, function (o, u) {
        if (o) return n.complete(o);
        var l = we(u, s, n);
        n.patched(s, l, function (c) {
          if (c) return n.complete(c);
          r();
        });
      });
    }
    r();
  }
  function te(e, n, t, r, s, o, u) {
    u || (u = {}), typeof u.context == "undefined" && (u.context = 4);
    var l = ge(t, r, u);
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
        m = 0,
        x = 0,
        h = [],
        b = 1,
        y = 1,
        S = function (k) {
          var N = l[k], D = N.lines || N.value.replace(/\n$/, "").split(`\n`);
          if ((N.lines = D, N.added || N.removed)) {
            var O;
            if (!m) {
              var U = l[k - 1];
              m = b,
                x = y,
                U &&
                (h = u.context > 0 ? c(U.lines.slice(-u.context)) : [],
                  m -= h.length,
                  x -= h.length);
            }
            (O = h).push.apply(
              O,
              I(D.map(function (Y) {
                return (N.added ? "+" : "-") + Y;
              })),
            ), N.added ? y += D.length : b += D.length;
          } else {
            if (m) {
              if (D.length <= u.context * 2 && k < l.length - 2) {
                var H;
                (H = h).push.apply(H, I(c(D)));
              } else {
                var P, C = Math.min(D.length, u.context);
                (P = h).push.apply(P, I(c(D.slice(0, C))));
                var A = {
                  oldStart: m,
                  oldLines: b - m + C,
                  newStart: x,
                  newLines: y - x + C,
                  lines: h,
                };
                if (k >= l.length - 2 && D.length <= u.context) {
                  var J = /\n$/.test(t),
                    se = /\n$/.test(r),
                    Q = D.length == 0 && h.length > A.oldLines;
                  !J && Q && t.length > 0 &&
                  h.splice(A.oldLines, 0, "\\ No newline at end of file"),
                    (!J && !Q || !se) && h.push("\\ No newline at end of file");
                }
                d.push(A), m = 0, x = 0, h = [];
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
  function ye(e, n, t, r, s, o, u) {
    return Ke(te(e, n, t, r, s, o, u));
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
      var s = 0, o = 0, u = 0, l = 0; s < e.hunks.length || o < n.hunks.length;
    ) {
      var c = e.hunks[s] || {
          oldStart: Infinity,
        },
        d = n.hunks[o] || {
          oldStart: Infinity,
        };
      if (be(c, d)) r.hunks.push(Le(c, u)), s++, l += c.newLines - c.oldLines;
      else if (be(d, c)) {
        r.hunks.push(Le(d, l)), o++, u += d.newLines - d.oldLines;
      } else {
        var m = {
          oldStart: Math.min(c.oldStart, d.oldStart),
          oldLines: 0,
          newStart: Math.min(c.newStart + u, d.oldStart + l),
          newLines: 0,
          lines: [],
        };
        qe(m, c.oldStart, c.lines, d.oldStart, d.lines),
          o++,
          s++,
          r.hunks.push(m);
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
      u = {
        offset: r,
        lines: s,
        index: 0,
      };
    for (
      (Ne(e, o, u), Ne(e, u, o));
      o.index < o.lines.length && u.index < u.lines.length;
    ) {
      var l = o.lines[o.index], c = u.lines[u.index];
      if ((l[0] === "-" || l[0] === "+") && (c[0] === "-" || c[0] === "+")) {
        Qe(e, o, u);
      } else if (l[0] === "+" && c[0] === " ") {
        var d;
        (d = e.lines).push.apply(d, I($(o)));
      } else if (c[0] === "+" && l[0] === " ") {
        var m;
        (m = e.lines).push.apply(m, I($(u)));
      } else {
        l[0] === "-" && c[0] === " "
          ? ke(e, o, u)
          : c[0] === "-" && l[0] === " "
          ? ke(e, u, o, !0)
          : l === c
          ? (e.lines.push(l), o.index++, u.index++)
          : ie(e, $(o), $(u));
      }
    }
    De(e, o), De(e, u), Ge(e);
  }
  function Qe(e, n, t) {
    var r = $(n), s = $(t);
    if (je(r) && je(s)) {
      if (re(r, s) && Fe(t, r, r.length - s.length)) {
        var o;
        (o = e.lines).push.apply(o, I(r));
        return;
      } else if (re(s, r) && Fe(n, s, s.length - r.length)) {
        var u;
        (u = e.lines).push.apply(u, I(s));
        return;
      }
    } else if (_e(r, s)) {
      var l;
      (l = e.lines).push.apply(l, I(r));
      return;
    }
    ie(e, r, s);
  }
  function ke(e, n, t, r) {
    var s = $(n), o = Ye(t, s);
    if (o.merged) {
      var u;
      (u = e.lines).push.apply(u, I(o.merged));
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
      var t = [], r = [], s = 0, o = !1, u = !1;
      s < n.length && e.index < e.lines.length;
    ) {
      var l = e.lines[e.index], c = n[s];
      if (c[0] === "+") break;
      if ((o = o || l[0] !== " ", r.push(c), s++, l[0] === "+")) {
        for (u = !0; l[0] === "+";) {
          t.push(l), l = e.lines[++e.index];
        }
      }
      c.substr(1) === l.substr(1) ? (t.push(l), e.index++) : u = !0;
    }
    if (((n[s] || "")[0] === "+" && o && (u = !0), u)) return t;
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
  i.Diff = a,
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
  const a = await crypto.subtle.digest("SHA-256", i),
    f = Array.from(new Uint8Array(a)),
    g = f.map((p) => ("00" + p.toString(16)).slice(-2)).join("");
  return g;
}
const sn = (i) => {
    if (i.length < 10) return !1;
    const a = [
        ...i.slice(0, 8),
      ].filter((g) => g < "0" || g > "f").length === 0,
      f = i.slice(8);
    if (a && f[0] === "[" && f[f.length - 1] === "]") {
      try {
        return JSON.parse(f).length > 1;
      } catch {
        return !1;
      }
    }
    return !1;
  },
  an = (i, a) => {
    const f = JSON.parse(a);
    let g = i.slice(), p = "";
    return f.forEach((w) => {
      if (Number(w) === w) {
        const v = Math.abs(w), L = g.slice(0, v);
        g = g.slice(v), w > 0 && (p += String(L));
      } else p += String(w);
    }),
      p;
  };
async function un(i) {
  const a = new TextEncoder().encode(i), f = await on(a);
  return f.substr(0, 8);
}
const ln = async (i, a) => {
    const f = un(i), g = Diff.diffChars(i, a);
    return {
      b: await f,
      c: g.map((p) => p.added ? p.value : p.removed ? -p.count : p.count),
    };
  },
  fn = (i, a) => a.some((f) => i instanceof f);
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
const Ce = new WeakMap(),
  le = new WeakMap(),
  Ie = new WeakMap(),
  fe = new WeakMap(),
  ce = new WeakMap();
function hn(i) {
  if (le.has(i)) return;
  const a = new Promise((f, g) => {
    const p = () => {
        i.removeEventListener("complete", w),
          i.removeEventListener("error", v),
          i.removeEventListener("abort", v);
      },
      w = () => {
        f(), p();
      },
      v = () => {
        g(i.error || new DOMException("AbortError", "AbortError")), p();
      };
    i.addEventListener("complete", w),
      i.addEventListener("error", v),
      i.addEventListener("abort", v);
  });
  le.set(i, a);
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
function Pe(i, a) {
  if (!(i instanceof IDBDatabase && !(a in i) && typeof a == "string")) return;
  if (he.get(a)) return he.get(a);
  const f = a.replace(/FromIndex$/, ""), g = a !== f, p = gn.includes(f);
  if (
    !(f in (g ? IDBIndex : IDBObjectStore).prototype) || !(p || pn.includes(f))
  ) {
    return;
  }
  const w = async function (v, ...L) {
    const j = this.transaction(v, p ? "readwrite" : "readonly");
    let F = j.store;
    g && (F = F.index(L.shift()));
    const B = await F[f](...L);
    return (p && await j.done, B);
  };
  return he.set(a, w), w;
}
async function vn(i) {
  const a = await crypto.subtle.digest("SHA-256", i),
    f = Array.from(new Uint8Array(a)),
    g = f.map((p) => ("00" + p.toString(16)).slice(-2)).join("");
  return g;
}
async function mn(i) {
  const a = new TextEncoder().encode(i), f = await vn(a);
  return f.substr(0, 8);
}
const getDbObj = (i, a = !1) => {
  const f = {
    async get(g, p = "string") {
      let w;
      try {
        if (
          (a ? w = await (await i).get("codeStore", g) : w = await i.get(g), !w)
        ) {
          return null;
        }
      } catch (v) {
        return null;
      }
      if (p === "json") return JSON.parse(w);
      if (p === "string") {
        const v = await w;
        if (typeof v == "string" && p === "string") {
          const F = v;
          if (sn(v)) {
            const B = v.slice(0, 8), z = v.slice(8), M = await f.get(B);
            return an(M, z);
          }
          return v;
        }
        const L = new TextDecoder(), j = L.decode(v);
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
      let v;
      return (typeof p != "string" ? v = new TextDecoder().decode(p) : v = p,
        a ? (await i).put("codeStore", v, g) : await i.put(g, v));
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
    const shaDB = getDbObj(SHAKV);
    const result = await shaDB.put(smallerKey, myBuffer);
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
  const a = new Promise((f, g) => {
    const p = () => {
        i1.removeEventListener("success", w),
          i1.removeEventListener("error", v);
      },
      w = () => {
        f(T(i1.result)), p();
      },
      v = () => {
        g(i1.error), p();
      };
    i1.addEventListener("success", w), i1.addEventListener("error", v);
  });
  return a.then((f) => {
    f instanceof IDBCursor && Ce.set(f, i1);
  }).catch(() => {
  }),
    ce.set(a, i1),
    a;
}
let pe = {
  get(i, a, f) {
    if (i instanceof IDBTransaction) {
      if (a === "done") return le.get(i);
      if (a === "objectStoreNames") return i.objectStoreNames || Ie.get(i);
      if (a === "store") {
        return f.objectStoreNames[1]
          ? void 0
          : f.objectStore(f.objectStoreNames[0]);
      }
    }
    return T(i[a]);
  },
  set(i, a, f) {
    return (i[a] = f, !0);
  },
  has(i, a) {
    return i instanceof IDBTransaction && (a === "done" || a === "store")
      ? !0
      : a in i;
  },
};
function yn(i2) {
  pe = i2(pe);
}
function Sn(i2) {
  return i2 === IDBDatabase.prototype.transaction &&
      !("objectStoreNames" in IDBTransaction.prototype)
    ? function (a, ...f) {
      const g = i2.call(de(this), a, ...f);
      return Ie.set(
        g,
        a.sort ? a.sort() : [
          a,
        ],
      ),
        T(g);
    }
    : dn().includes(i2)
    ? function (...a) {
      return i2.apply(de(this), a), T(Ce.get(this));
    }
    : function (...a) {
      return T(i2.apply(de(this), a));
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
  const a = xn(i2);
  return a !== i2 && (fe.set(i2, a), ce.set(a, i2)), a;
}
function bn(
  i2,
  a,
  { blocked: f, upgrade: g, blocking: p, terminated: w } = {},
) {
  const v = indexedDB.open(i2, a), L = T(v);
  return g && v.addEventListener("upgradeneeded", (j) => {
    g(T(v.result), j.oldVersion, j.newVersion, T(v.transaction));
  }),
    f && v.addEventListener("blocked", () => f()),
    L.then((j) => {
      w && j.addEventListener("close", () => w()),
        p && j.addEventListener("versionchange", () => p());
    }).catch(() => {
    }),
    L;
}
yn((i2) => ({
  ...i2,
  get: (a, f, g) => Pe(a, f) || i2.get(a, f, g),
  has: (a, f) => !!Pe(a, f) || i2.has(a, f),
}));
