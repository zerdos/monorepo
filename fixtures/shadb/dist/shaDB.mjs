var k = (n, e) => e.some((t) => n instanceof t), C, V;
function _() {
  return C ||
    (C = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function ee() {
  return V ||
    (V = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ]);
}
var j = new WeakMap(),
  F = new WeakMap(),
  J = new WeakMap(),
  D = new WeakMap(),
  E = new WeakMap();
function ne(n) {
  let e = new Promise((t, r) => {
    let i = () => {
        n.removeEventListener("success", s), n.removeEventListener("error", o);
      },
      s = () => {
        t(c(n.result)), i();
      },
      o = () => {
        r(n.error), i();
      };
    n.addEventListener("success", s), n.addEventListener("error", o);
  });
  return e.then((t) => {
    t instanceof IDBCursor && j.set(t, n);
  }).catch(() => {}),
    E.set(e, n),
    e;
}
function te(n) {
  if (F.has(n)) return;
  let e = new Promise((t, r) => {
    let i = () => {
        n.removeEventListener("complete", s),
          n.removeEventListener("error", o),
          n.removeEventListener("abort", o);
      },
      s = () => {
        t(), i();
      },
      o = () => {
        r(n.error || new DOMException("AbortError", "AbortError")), i();
      };
    n.addEventListener("complete", s),
      n.addEventListener("error", o),
      n.addEventListener("abort", o);
  });
  F.set(n, e);
}
var N = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === "done") return F.get(n);
      if (e === "objectStoreNames") return n.objectStoreNames || J.get(n);
      if (e === "store") {
        return t.objectStoreNames[1]
          ? void 0
          : t.objectStore(t.objectStoreNames[0]);
      }
    }
    return c(n[e]);
  },
  set(n, e, t) {
    return n[e] = t, !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0
    : e in n;
  },
};
function R(n) {
  N = n(N);
}
function re(n) {
  return n === IDBDatabase.prototype.transaction &&
      !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...t) {
      let r = n.call(I(this), e, ...t);
      return J.set(r, e.sort ? e.sort() : [e]), c(r);
    }
    : ee().includes(n)
    ? function (...e) {
      return n.apply(I(this), e), c(j.get(this));
    }
    : function (...e) {
      return c(n.apply(I(this), e));
    };
}
function ie(n) {
  return typeof n == "function"
    ? re(n)
    : (n instanceof IDBTransaction && te(n), k(n, _()) ? new Proxy(n, N) : n);
}
function c(n) {
  if (n instanceof IDBRequest) return ne(n);
  if (D.has(n)) return D.get(n);
  let e = ie(n);
  return e !== n && (D.set(n, e), E.set(e, n)), e;
}
var I = (n) => E.get(n);
function $(n, e, { blocked: t, upgrade: r, blocking: i, terminated: s } = {}) {
  let o = indexedDB.open(n, e), f = c(o);
  return r && o.addEventListener("upgradeneeded", (a) => {
    r(c(o.result), a.oldVersion, a.newVersion, c(o.transaction));
  }),
    t && o.addEventListener("blocked", () => t()),
    f.then((a) => {
      s && a.addEventListener("close", () => s()),
        i && a.addEventListener("versionchange", () => i());
    }).catch(() => {}),
    f;
}
var se = ["get", "getKey", "getAll", "getAllKeys", "count"],
  oe = ["put", "add", "delete", "clear"],
  H = new Map();
function q(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string")) return;
  if (H.get(e)) return H.get(e);
  let t = e.replace(/FromIndex$/, ""), r = e !== t, i = oe.includes(t);
  if (
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || se.includes(t))
  ) {
    return;
  }
  let s = async function (o, ...f) {
    let a = this.transaction(o, i ? "readwrite" : "readonly"), l = a.store;
    return r && (l = l.index(f.shift())),
      (await Promise.all([l[t](...f), i && a.done]))[0];
  };
  return H.set(e, s), s;
}
R((n) => ({
  ...n,
  get: (e, t, r) => q(e, t) || n.get(e, t, r),
  has: (e, t) => !!q(e, t) || n.has(e, t),
}));
function w() {}
w.prototype = {
  diff: function (e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = r.callback;
    typeof r == "function" && (i = r, r = {}), this.options = r;
    var s = this;
    function o(u) {
      return i
        ? (setTimeout(function () {
          i(void 0, u);
        }, 0),
          !0)
        : u;
    }
    e = this.castInput(e),
      t = this.castInput(t),
      e = this.removeEmpty(this.tokenize(e)),
      t = this.removeEmpty(this.tokenize(t));
    var f = t.length,
      a = e.length,
      l = 1,
      p = f + a,
      d = [{ newPos: -1, components: [] }],
      v = this.extractCommon(d[0], t, e, 0);
    if (d[0].newPos + 1 >= f && v + 1 >= a) {return o([{
        value: this.join(t),
        count: t.length,
      }]);}
    function g() {
      for (var u = -1 * l; u <= l; u += 2) {
        var h = void 0, y = d[u - 1], m = d[u + 1], b = (m ? m.newPos : 0) - u;
        y && (d[u - 1] = void 0);
        var W = y && y.newPos + 1 < f, z = m && 0 <= b && b < a;
        if (!W && !z) {
          d[u] = void 0;
          continue;
        }
        if (
          !W || z && y.newPos < m.newPos
            ? (h = fe(m), s.pushComponent(h.components, void 0, !0))
            : (h = y, h.newPos++, s.pushComponent(h.components, !0, void 0)),
            b = s.extractCommon(h, t, e, u),
            h.newPos + 1 >= f && b + 1 >= a
        ) {
          return o(ae(s, h.components, t, e, s.useLongestToken));
        }
        d[u] = h;
      }
      l++;
    }
    if (i) {
      (function u() {
        setTimeout(function () {
          if (l > p) return i();
          g() || u();
        }, 0);
      })();
    } else {
      for (; l <= p;) {
        var x = g();
        if (x) return x;
      }
    }
  },
  pushComponent: function (e, t, r) {
    var i = e[e.length - 1];
    i && i.added === t && i.removed === r
      ? e[e.length - 1] = { count: i.count + 1, added: t, removed: r }
      : e.push({ count: 1, added: t, removed: r });
  },
  extractCommon: function (e, t, r, i) {
    for (
      var s = t.length, o = r.length, f = e.newPos, a = f - i, l = 0;
      f + 1 < s && a + 1 < o && this.equals(t[f + 1], r[a + 1]);
    ) {
      f++, a++, l++;
    }
    return l && e.components.push({ count: l }), e.newPos = f, a;
  },
  equals: function (e, t) {
    return this.options.comparator ? this.options.comparator(e, t)
    : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
  },
  removeEmpty: function (e) {
    for (var t = [], r = 0; r < e.length; r++) e[r] && t.push(e[r]);
    return t;
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
function ae(n, e, t, r, i) {
  for (var s = 0, o = e.length, f = 0, a = 0; s < o; s++) {
    var l = e[s];
    if (l.removed) {
      if (
        l.value = n.join(r.slice(a, a + l.count)),
          a += l.count,
          s && e[s - 1].added
      ) {
        var d = e[s - 1];
        e[s - 1] = e[s], e[s] = d;
      }
    } else {
      if (!l.added && i) {
        var p = t.slice(f, f + l.count);
        p = p.map(function (g, x) {
          var u = r[a + x];
          return u.length > g.length ? u : g;
        }), l.value = n.join(p);
      } else l.value = n.join(t.slice(f, f + l.count));
      f += l.count, l.added || (a += l.count);
    }
  }
  var v = e[o - 1];
  return o > 1 && typeof v.value == "string" && (v.added || v.removed) &&
    n.equals("", v.value) && (e[o - 2].value += v.value, e.pop()),
    e;
}
function fe(n) {
  return { newPos: n.newPos, components: n.components.slice(0) };
}
var le = new w();
function P(n, e, t) {
  return le.diff(n, e, t);
}
var K = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
  U = /\S/,
  X = new w();
X.equals = function (n, e) {
  return this.options.ignoreCase && (n = n.toLowerCase(), e = e.toLowerCase()),
    n === e || this.options.ignoreWhitespace && !U.test(n) && !U.test(e);
};
X.tokenize = function (n) {
  for (
    var e = n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), t = 0;
    t < e.length - 1;
    t++
  ) {
    !e[t + 1] && e[t + 2] && K.test(e[t]) && K.test(e[t + 2]) &&
      (e[t] += e[t + 2], e.splice(t + 1, 2), t--);
  }
  return e;
};
var Z = new w();
Z.tokenize = function (n) {
  var e = [], t = n.split(/(\n|\r\n)/);
  t[t.length - 1] || t.pop();
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    r % 2 && !this.options.newlineIsToken
      ? e[e.length - 1] += i
      : (this.options.ignoreWhitespace && (i = i.trim()), e.push(i));
  }
  return e;
};
var ue = new w();
ue.tokenize = function (n) {
  return n.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var de = new w();
de.tokenize = function (n) {
  return n.split(/([{}:;,]|\s+)/);
};
function S(n) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
    ? S = function (e) {
      return typeof e;
    }
    : S = function (e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol &&
          e !== Symbol.prototype
        ? "symbol"
        : typeof e;
    },
    S(n);
}
var ce = Object.prototype.toString, L = new w();
L.useLongestToken = !0;
L.tokenize = Z.tokenize;
L.castInput = function (n) {
  var e = this.options,
    t = e.undefinedReplacement,
    r = e.stringifyReplacer,
    i = r === void 0
      ? function (s, o) {
        return typeof o == "undefined" ? t : o;
      }
      : r;
  return typeof n == "string"
    ? n
    : JSON.stringify(A(n, null, null, i), i, "  ");
};
L.equals = function (n, e) {
  return w.prototype.equals.call(
    L,
    n.replace(/,([\r\n])/g, "$1"),
    e.replace(/,([\r\n])/g, "$1"),
  );
};
function A(n, e, t, r, i) {
  e = e || [], t = t || [], r && (n = r(i, n));
  var s;
  for (s = 0; s < e.length; s += 1) if (e[s] === n) return t[s];
  var o;
  if (ce.call(n) === "[object Array]") {
    for (
      e.push(n), o = new Array(n.length), t.push(o), s = 0; s < n.length; s += 1
    ) {
      o[s] = A(n[s], e, t, r, i);
    }
    return e.pop(), t.pop(), o;
  }
  if (n && n.toJSON && (n = n.toJSON()), S(n) === "object" && n !== null) {
    e.push(n), o = {}, t.push(o);
    var f = [], a;
    for (a in n) n.hasOwnProperty(a) && f.push(a);
    for (f.sort(), s = 0; s < f.length; s += 1) {
      a = f[s], o[a] = A(n[a], e, t, r, a);
    }
    e.pop(), t.pop();
  } else o = n;
  return o;
}
var O = new w();
O.tokenize = function (n) {
  return n.slice();
};
O.join = O.removeEmpty = function (n) {
  return n;
};
import pe from "ipfs-only-hash";
var T = async (n, e) => {
    let t = pe.of(n), r = P(n, e);
    return {
      b: await t,
      c: r.map((i) => i.added ? i.value : i.removed ? -i.count : i.count),
    };
  },
  G = (n) => {
    if (n.length < 10) return !1;
    let e = [...n.slice(0, 8)].filter((r) => r < "0" || r > "f").length === 0,
      t = n.slice(8);
    if (e && t[0] === "[" && t[t.length - 1] === "]") {
      try {
        return JSON.parse(t).length > 1;
      } catch {
        return !1;
      }
    }
    return !1;
  },
  B = (n, e) => {
    let t = JSON.parse(e), r = n.slice(), i = "";
    return t.forEach((s) => {
      if (Number(s) === s) {
        let o = Math.abs(s), f = r.slice(0, o);
        r = r.slice(o), s > 0 && (i += String(f));
      } else i += String(s);
    }),
      i;
  };
var M = async (n) =>
  Array.from(
    new Uint8Array(
      await crypto.subtle.digest(
        "SHA-256",
        typeof n == "string" ? new TextEncoder().encode(n) : n,
      ),
    ).slice(0, 4),
  ).map((e) => ("00" + e.toString(16)).slice(-2)).join("");
var Q = (n) => {
  let e = {
    async get(t, r = "string") {
      let i;
      try {
        if (i = await n.get(t), !i) return null;
      } catch {
        return null;
      }
      if (r === "json") {
        try {
          return JSON.parse(i);
        } catch {
          return i;
        }
      }
      let s = await i;
      if (r === "string") {
        if (typeof s == "string" && r === "string") {
          let o = s;
          if (G(o)) {
            let f = o.slice(0, 8), a = o.slice(8), l = await e.get(f);
            return B(l, a);
          }
          return s;
        }
        return new TextDecoder().decode(s);
      }
      return i;
    },
    async put(t, r) {
      let i;
      try {
        let o = await e.get(t);
        if (
          typeof o == "string" && typeof r == "string" && o.length === 8 &&
          o !== r
        ) {
          let f = await e.get(r), a = await e.get(o);
          if (typeof a == "string") {
            let l = await M(a);
            if (l === o) {
              let p = await T(f, a), d = p.b + JSON.stringify(p.c);
              await e.put(l, d);
            }
          }
        }
      } catch {
        i = "";
      }
      if (i !== "" && r === i) return r;
      let s;
      return typeof r != "string" ? s = new TextDecoder().decode(r) : s = r,
        await n.put(t, s);
    },
    async delete(t) {
      return await n.delete(t);
    },
    async clear() {
      return await n.clear();
    },
    async keys() {
      return await n.getAllKeys();
    },
  };
  return e;
};
function Y(n = "defaultStore") {
  return async () => {
    let e = $("spike-land-alpha", 1, {
      upgrade(r) {
        r.createObjectStore(n);
      },
      blocked() {},
      blocking() {},
      terminated() {},
    });
    return Q({
      async get(r) {
        return (await e).get(n, r);
      },
      async put(r, i) {
        return (await e).put(n, i, r);
      },
      async delete(r) {
        return (await e).delete(n, r);
      },
      async clear() {
        return (await e).clear(n);
      },
      async keys() {
        return (await e).getAllKeys(n);
      },
    });
  };
}
var Ae = {
  get: async (n, e) => (await (await Y("shaDB"))()).get(n, e),
  put: async (n, e) => (await (await Y("shaDB"))()).put(n, e),
};
export {
  Ae as shaDB,
  B as assemble,
  M as sha256,
  Q as getDbObj,
  T as diff,
  Y as getDB,
};
