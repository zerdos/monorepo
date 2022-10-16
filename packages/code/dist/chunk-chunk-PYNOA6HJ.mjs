var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a4, b4) => {
  for (var prop in b4 || (b4 = {}))
    if (__hasOwnProp.call(b4, prop))
      __defNormalProp(a4, prop, b4[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b4)) {
      if (__propIsEnum.call(b4, prop))
        __defNormalProp(a4, prop, b4[prop]);
    }
  return a4;
};
var __spreadProps = (a4, b4) => __defProps(a4, __getOwnPropDescs(b4));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// <define:process>
var define_process_default;
var init_define_process = __esm({
  "<define:process>"() {
    define_process_default = { env: { NODE_ENV: "production", browser: true }, version: "1.1.1", browser: true };
  }
});

// js/preact/dist/preact.module.js
function s(n3, l4) {
  for (var u4 in l4)
    n3[u4] = l4[u4];
  return n3;
}
function a(n3) {
  var l4 = n3.parentNode;
  l4 && l4.removeChild(n3);
}
function h(l4, u4, i5) {
  var t3, o5, r3, f4 = {};
  for (r3 in u4)
    "key" == r3 ? t3 = u4[r3] : "ref" == r3 ? o5 = u4[r3] : f4[r3] = u4[r3];
  if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i5), "function" == typeof l4 && null != l4.defaultProps)
    for (r3 in l4.defaultProps)
      void 0 === f4[r3] && (f4[r3] = l4.defaultProps[r3]);
  return v(l4, f4, t3, o5, null);
}
function v(n3, i5, t3, o5, r3) {
  var f4 = { type: n3, props: i5, key: t3, ref: o5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f4), f4;
}
function y() {
  return { current: null };
}
function p(n3) {
  return n3.children;
}
function d(n3, l4) {
  this.props = n3, this.context = l4;
}
function _(n3, l4) {
  if (null == l4)
    return n3.__ ? _(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
  for (var u4; l4 < n3.__k.length; l4++)
    if (null != (u4 = n3.__k[l4]) && null != u4.__e)
      return u4.__e;
  return "function" == typeof n3.type ? _(n3) : null;
}
function k(n3) {
  var l4, u4;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++)
      if (null != (u4 = n3.__k[l4]) && null != u4.__e) {
        n3.__e = n3.__c.base = u4.__e;
        break;
      }
    return k(n3);
  }
}
function b(n3) {
  (!n3.__d && (n3.__d = true) && t.push(n3) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n3; g.__r = t.length; )
    n3 = t.sort(function(n4, l4) {
      return n4.__v.__b - l4.__v.__b;
    }), t = [], n3.some(function(n4) {
      var l4, u4, i5, t3, o5, r3;
      n4.__d && (o5 = (t3 = (l4 = n4).__v).__e, (r3 = l4.__P) && (u4 = [], (i5 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i5, l4.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o5] : null, u4, null == o5 ? _(t3) : o5, t3.__h), z(u4, t3), t3.__e != o5 && k(t3)));
    });
}
function w(n3, l4, u4, i5, t3, o5, r3, c4, s4, a4) {
  var h4, y4, d4, k5, b4, g5, w5, x5 = i5 && i5.__k || e, C4 = x5.length;
  for (u4.__k = [], h4 = 0; h4 < l4.length; h4++)
    if (null != (k5 = u4.__k[h4] = null == (k5 = l4[h4]) || "boolean" == typeof k5 ? null : "string" == typeof k5 || "number" == typeof k5 || "bigint" == typeof k5 ? v(null, k5, null, null, k5) : Array.isArray(k5) ? v(p, { children: k5 }, null, null, null) : k5.__b > 0 ? v(k5.type, k5.props, k5.key, k5.ref ? k5.ref : null, k5.__v) : k5)) {
      if (k5.__ = u4, k5.__b = u4.__b + 1, null === (d4 = x5[h4]) || d4 && k5.key == d4.key && k5.type === d4.type)
        x5[h4] = void 0;
      else
        for (y4 = 0; y4 < C4; y4++) {
          if ((d4 = x5[y4]) && k5.key == d4.key && k5.type === d4.type) {
            x5[y4] = void 0;
            break;
          }
          d4 = null;
        }
      j(n3, k5, d4 = d4 || f, t3, o5, r3, c4, s4, a4), b4 = k5.__e, (y4 = k5.ref) && d4.ref != y4 && (w5 || (w5 = []), d4.ref && w5.push(d4.ref, null, k5), w5.push(y4, k5.__c || b4, k5)), null != b4 ? (null == g5 && (g5 = b4), "function" == typeof k5.type && k5.__k === d4.__k ? k5.__d = s4 = m(k5, s4, n3) : s4 = A(n3, k5, d4, x5, b4, s4), "function" == typeof u4.type && (u4.__d = s4)) : s4 && d4.__e == s4 && s4.parentNode != n3 && (s4 = _(d4));
    }
  for (u4.__e = g5, h4 = C4; h4--; )
    null != x5[h4] && N(x5[h4], x5[h4]);
  if (w5)
    for (h4 = 0; h4 < w5.length; h4++)
      M(w5[h4], w5[++h4], w5[++h4]);
}
function m(n3, l4, u4) {
  for (var i5, t3 = n3.__k, o5 = 0; t3 && o5 < t3.length; o5++)
    (i5 = t3[o5]) && (i5.__ = n3, l4 = "function" == typeof i5.type ? m(i5, l4, u4) : A(u4, i5, i5, t3, i5.__e, l4));
  return l4;
}
function x(n3, l4) {
  return l4 = l4 || [], null == n3 || "boolean" == typeof n3 || (Array.isArray(n3) ? n3.some(function(n4) {
    x(n4, l4);
  }) : l4.push(n3)), l4;
}
function A(n3, l4, u4, i5, t3, o5) {
  var r3, f4, e3;
  if (void 0 !== l4.__d)
    r3 = l4.__d, l4.__d = void 0;
  else if (null == u4 || t3 != o5 || null == t3.parentNode)
    n:
      if (null == o5 || o5.parentNode !== n3)
        n3.appendChild(t3), r3 = null;
      else {
        for (f4 = o5, e3 = 0; (f4 = f4.nextSibling) && e3 < i5.length; e3 += 2)
          if (f4 == t3)
            break n;
        n3.insertBefore(t3, o5), r3 = o5;
      }
  return void 0 !== r3 ? r3 : t3.nextSibling;
}
function C(n3, l4, u4, i5, t3) {
  var o5;
  for (o5 in u4)
    "children" === o5 || "key" === o5 || o5 in l4 || H(n3, o5, null, u4[o5], i5);
  for (o5 in l4)
    t3 && "function" != typeof l4[o5] || "children" === o5 || "key" === o5 || "value" === o5 || "checked" === o5 || u4[o5] === l4[o5] || H(n3, o5, l4[o5], u4[o5], i5);
}
function $(n3, l4, u4) {
  "-" === l4[0] ? n3.setProperty(l4, u4) : n3[l4] = null == u4 ? "" : "number" != typeof u4 || c.test(l4) ? u4 : u4 + "px";
}
function H(n3, l4, u4, i5, t3) {
  var o5;
  n:
    if ("style" === l4)
      if ("string" == typeof u4)
        n3.style.cssText = u4;
      else {
        if ("string" == typeof i5 && (n3.style.cssText = i5 = ""), i5)
          for (l4 in i5)
            u4 && l4 in u4 || $(n3.style, l4, "");
        if (u4)
          for (l4 in u4)
            i5 && u4[l4] === i5[l4] || $(n3.style, l4, u4[l4]);
      }
    else if ("o" === l4[0] && "n" === l4[1])
      o5 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n3 ? l4.toLowerCase().slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + o5] = u4, u4 ? i5 || n3.addEventListener(l4, o5 ? T : I, o5) : n3.removeEventListener(l4, o5 ? T : I, o5);
    else if ("dangerouslySetInnerHTML" !== l4) {
      if (t3)
        l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && l4 in n3)
        try {
          n3[l4] = null == u4 ? "" : u4;
          break n;
        } catch (n4) {
        }
      "function" == typeof u4 || (null == u4 || false === u4 && -1 == l4.indexOf("-") ? n3.removeAttribute(l4) : n3.setAttribute(l4, u4));
    }
}
function I(n3) {
  this.l[n3.type + false](l.event ? l.event(n3) : n3);
}
function T(n3) {
  this.l[n3.type + true](l.event ? l.event(n3) : n3);
}
function j(n3, u4, i5, t3, o5, r3, f4, e3, c4) {
  var a4, h4, v4, y4, _5, k5, b4, g5, m4, x5, A5, C4, $3, H3, I3, T4 = u4.type;
  if (void 0 !== u4.constructor)
    return null;
  null != i5.__h && (c4 = i5.__h, e3 = u4.__e = i5.__e, u4.__h = null, r3 = [e3]), (a4 = l.__b) && a4(u4);
  try {
    n:
      if ("function" == typeof T4) {
        if (g5 = u4.props, m4 = (a4 = T4.contextType) && t3[a4.__c], x5 = a4 ? m4 ? m4.props.value : a4.__ : t3, i5.__c ? b4 = (h4 = u4.__c = i5.__c).__ = h4.__E : ("prototype" in T4 && T4.prototype.render ? u4.__c = h4 = new T4(g5, x5) : (u4.__c = h4 = new d(g5, x5), h4.constructor = T4, h4.render = O), m4 && m4.sub(h4), h4.props = g5, h4.state || (h4.state = {}), h4.context = x5, h4.__n = t3, v4 = h4.__d = true, h4.__h = [], h4._sb = []), null == h4.__s && (h4.__s = h4.state), null != T4.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = s({}, h4.__s)), s(h4.__s, T4.getDerivedStateFromProps(g5, h4.__s))), y4 = h4.props, _5 = h4.state, v4)
          null == T4.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
        else {
          if (null == T4.getDerivedStateFromProps && g5 !== y4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(g5, x5), !h4.__e && null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(g5, h4.__s, x5) || u4.__v === i5.__v) {
            for (h4.props = g5, h4.state = h4.__s, u4.__v !== i5.__v && (h4.__d = false), h4.__v = u4, u4.__e = i5.__e, u4.__k = i5.__k, u4.__k.forEach(function(n4) {
              n4 && (n4.__ = u4);
            }), A5 = 0; A5 < h4._sb.length; A5++)
              h4.__h.push(h4._sb[A5]);
            h4._sb = [], h4.__h.length && f4.push(h4);
            break n;
          }
          null != h4.componentWillUpdate && h4.componentWillUpdate(g5, h4.__s, x5), null != h4.componentDidUpdate && h4.__h.push(function() {
            h4.componentDidUpdate(y4, _5, k5);
          });
        }
        if (h4.context = x5, h4.props = g5, h4.__v = u4, h4.__P = n3, C4 = l.__r, $3 = 0, "prototype" in T4 && T4.prototype.render) {
          for (h4.state = h4.__s, h4.__d = false, C4 && C4(u4), a4 = h4.render(h4.props, h4.state, h4.context), H3 = 0; H3 < h4._sb.length; H3++)
            h4.__h.push(h4._sb[H3]);
          h4._sb = [];
        } else
          do {
            h4.__d = false, C4 && C4(u4), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
          } while (h4.__d && ++$3 < 25);
        h4.state = h4.__s, null != h4.getChildContext && (t3 = s(s({}, t3), h4.getChildContext())), v4 || null == h4.getSnapshotBeforeUpdate || (k5 = h4.getSnapshotBeforeUpdate(y4, _5)), I3 = null != a4 && a4.type === p && null == a4.key ? a4.props.children : a4, w(n3, Array.isArray(I3) ? I3 : [I3], u4, i5, t3, o5, r3, f4, e3, c4), h4.base = u4.__e, u4.__h = null, h4.__h.length && f4.push(h4), b4 && (h4.__E = h4.__ = null), h4.__e = false;
      } else
        null == r3 && u4.__v === i5.__v ? (u4.__k = i5.__k, u4.__e = i5.__e) : u4.__e = L(i5.__e, u4, i5, t3, o5, r3, f4, c4);
    (a4 = l.diffed) && a4(u4);
  } catch (n4) {
    u4.__v = null, (c4 || null != r3) && (u4.__e = e3, u4.__h = !!c4, r3[r3.indexOf(e3)] = null), l.__e(n4, u4, i5);
  }
}
function z(n3, u4) {
  l.__c && l.__c(u4, n3), n3.some(function(u5) {
    try {
      n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
        n4.call(u5);
      });
    } catch (n4) {
      l.__e(n4, u5.__v);
    }
  });
}
function L(l4, u4, i5, t3, o5, r3, e3, c4) {
  var s4, h4, v4, y4 = i5.props, p4 = u4.props, d4 = u4.type, k5 = 0;
  if ("svg" === d4 && (o5 = true), null != r3) {
    for (; k5 < r3.length; k5++)
      if ((s4 = r3[k5]) && "setAttribute" in s4 == !!d4 && (d4 ? s4.localName === d4 : 3 === s4.nodeType)) {
        l4 = s4, r3[k5] = null;
        break;
      }
  }
  if (null == l4) {
    if (null === d4)
      return document.createTextNode(p4);
    l4 = o5 ? document.createElementNS("http://www.w3.org/2000/svg", d4) : document.createElement(d4, p4.is && p4), r3 = null, c4 = false;
  }
  if (null === d4)
    y4 === p4 || c4 && l4.data === p4 || (l4.data = p4);
  else {
    if (r3 = r3 && n.call(l4.childNodes), h4 = (y4 = i5.props || f).dangerouslySetInnerHTML, v4 = p4.dangerouslySetInnerHTML, !c4) {
      if (null != r3)
        for (y4 = {}, k5 = 0; k5 < l4.attributes.length; k5++)
          y4[l4.attributes[k5].name] = l4.attributes[k5].value;
      (v4 || h4) && (v4 && (h4 && v4.__html == h4.__html || v4.__html === l4.innerHTML) || (l4.innerHTML = v4 && v4.__html || ""));
    }
    if (C(l4, p4, y4, o5, c4), v4)
      u4.__k = [];
    else if (k5 = u4.props.children, w(l4, Array.isArray(k5) ? k5 : [k5], u4, i5, t3, o5 && "foreignObject" !== d4, r3, e3, r3 ? r3[0] : i5.__k && _(i5, 0), c4), null != r3)
      for (k5 = r3.length; k5--; )
        null != r3[k5] && a(r3[k5]);
    c4 || ("value" in p4 && void 0 !== (k5 = p4.value) && (k5 !== l4.value || "progress" === d4 && !k5 || "option" === d4 && k5 !== y4.value) && H(l4, "value", k5, y4.value, false), "checked" in p4 && void 0 !== (k5 = p4.checked) && k5 !== l4.checked && H(l4, "checked", k5, y4.checked, false));
  }
  return l4;
}
function M(n3, u4, i5) {
  try {
    "function" == typeof n3 ? n3(u4) : n3.current = u4;
  } catch (n4) {
    l.__e(n4, i5);
  }
}
function N(n3, u4, i5) {
  var t3, o5;
  if (l.unmount && l.unmount(n3), (t3 = n3.ref) && (t3.current && t3.current !== n3.__e || M(t3, null, u4)), null != (t3 = n3.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u4);
      }
    t3.base = t3.__P = null, n3.__c = void 0;
  }
  if (t3 = n3.__k)
    for (o5 = 0; o5 < t3.length; o5++)
      t3[o5] && N(t3[o5], u4, i5 || "function" != typeof n3.type);
  i5 || null == n3.__e || a(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
}
function O(n3, l4, u4) {
  return this.constructor(n3, u4);
}
function P(u4, i5, t3) {
  var o5, r3, e3;
  l.__ && l.__(u4, i5), r3 = (o5 = "function" == typeof t3) ? null : t3 && t3.__k || i5.__k, e3 = [], j(i5, u4 = (!o5 && t3 || i5).__k = h(p, null, [u4]), r3 || f, f, void 0 !== i5.ownerSVGElement, !o5 && t3 ? [t3] : r3 ? null : i5.firstChild ? n.call(i5.childNodes) : null, e3, !o5 && t3 ? t3 : r3 ? r3.__e : i5.firstChild, o5), z(e3, u4);
}
function S(n3, l4) {
  P(n3, l4, S);
}
function q(l4, u4, i5) {
  var t3, o5, r3, f4 = s({}, l4.props);
  for (r3 in u4)
    "key" == r3 ? t3 = u4[r3] : "ref" == r3 ? o5 = u4[r3] : f4[r3] = u4[r3];
  return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i5), v(l4.type, f4, t3 || l4.key, o5 || l4.ref, null);
}
function B(n3, l4) {
  var u4 = { __c: l4 = "__cC" + r++, __: n3, Consumer: function(n4, l5) {
    return n4.children(l5);
  }, Provider: function(n4) {
    var u5, i5;
    return this.getChildContext || (u5 = [], (i5 = {})[l4] = this, this.getChildContext = function() {
      return i5;
    }, this.shouldComponentUpdate = function(n5) {
      this.props.value !== n5.value && u5.some(b);
    }, this.sub = function(n5) {
      u5.push(n5);
      var l5 = n5.componentWillUnmount;
      n5.componentWillUnmount = function() {
        u5.splice(u5.indexOf(n5), 1), l5 && l5.call(n5);
      };
    }), n4.children;
  } };
  return u4.Provider.__ = u4.Consumer.contextType = u4;
}
var n, l, u, i, t, o, r, f, e, c;
var init_preact_module = __esm({
  "js/preact/dist/preact.module.js"() {
    "use strict";
    init_define_process();
    f = {};
    e = [];
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    n = e.slice, l = { __e: function(n3, l4, u4, i5) {
      for (var t3, o5, r3; l4 = l4.__; )
        if ((t3 = l4.__c) && !t3.__)
          try {
            if ((o5 = t3.constructor) && null != o5.getDerivedStateFromError && (t3.setState(o5.getDerivedStateFromError(n3)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n3, i5 || {}), r3 = t3.__d), r3)
              return t3.__E = t3;
          } catch (l5) {
            n3 = l5;
          }
      throw n3;
    } }, u = 0, i = function(n3) {
      return null != n3 && void 0 === n3.constructor;
    }, d.prototype.setState = function(n3, l4) {
      var u4;
      u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n3 && (n3 = n3(s({}, u4), this.props)), n3 && s(u4, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), b(this));
    }, d.prototype.forceUpdate = function(n3) {
      this.__v && (this.__e = true, n3 && this.__h.push(n3), b(this));
    }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
  }
});

// ../../.yarn/__virtual__/preact-render-to-string-virtual-01d743af49/0/global/cache/preact-render-to-string-npm-5.2.5-f4d2453001-9.zip/node_modules/preact-render-to-string/dist/index.mjs
function s2(e3) {
  if (false === l2.test(e3 += ""))
    return e3;
  for (var t3 = 0, r3 = 0, n3 = "", o5 = ""; r3 < e3.length; r3++) {
    switch (e3.charCodeAt(r3)) {
      case 34:
        o5 = "&quot;";
        break;
      case 38:
        o5 = "&amp;";
        break;
      case 60:
        o5 = "&lt;";
        break;
      default:
        continue;
    }
    r3 !== t3 && (n3 += e3.slice(t3, r3)), n3 += o5, t3 = r3 + 1;
  }
  return r3 !== t3 && (n3 += e3.slice(t3, r3)), n3;
}
function p2(e3) {
  var t3 = "";
  for (var r3 in e3) {
    var o5 = e3[r3];
    null != o5 && "" !== o5 && (t3 && (t3 += " "), t3 += "-" == r3[0] ? r3 : c2[r3] || (c2[r3] = r3.replace(_2, "-$1").toLowerCase()), t3 = "number" == typeof o5 && false === n2.test(r3) ? t3 + ": " + o5 + "px;" : t3 + ": " + o5 + ";");
  }
  return t3 || void 0;
}
function d2(e3, t3) {
  return Array.isArray(t3) ? t3.reduce(d2, e3) : null != t3 && false !== t3 && e3.push(t3), e3;
}
function v2() {
  this.__d = true;
}
function h2(e3, t3) {
  return { __v: e3, context: t3, props: e3.props, setState: v2, forceUpdate: v2, __d: true, __h: [] };
}
function g2(e3, t3) {
  var r3 = e3.contextType, n3 = r3 && t3[r3.__c];
  return null != r3 ? n3 ? n3.props.value : r3.__ : t3;
}
function m2(r3, n3, l4, c4, _5, v4) {
  if (null == r3 || "boolean" == typeof r3)
    return "";
  if ("object" != typeof r3)
    return "function" == typeof r3 ? "" : s2(r3);
  var b4 = l4.pretty, x5 = b4 && "string" == typeof b4 ? b4 : "	";
  if (Array.isArray(r3)) {
    for (var k5 = "", S3 = 0; S3 < r3.length; S3++)
      b4 && S3 > 0 && (k5 += "\n"), k5 += m2(r3[S3], n3, l4, c4, _5, v4);
    return k5;
  }
  if (void 0 !== r3.constructor)
    return "";
  var w5, C4 = r3.type, O4 = r3.props, j5 = false;
  if ("function" == typeof C4) {
    if (j5 = true, !l4.shallow || !c4 && false !== l4.renderRootComponent) {
      if (C4 === p) {
        var A5 = [];
        return d2(A5, r3.props.children), m2(A5, n3, l4, false !== l4.shallowHighOrder, _5, v4);
      }
      var F3, H3 = r3.__c = h2(r3, n3);
      l.__b && l.__b(r3);
      var M3 = l.__r;
      if (C4.prototype && "function" == typeof C4.prototype.render) {
        var L3 = g2(C4, n3);
        (H3 = r3.__c = new C4(O4, L3)).__v = r3, H3._dirty = H3.__d = true, H3.props = O4, null == H3.state && (H3.state = {}), null == H3._nextState && null == H3.__s && (H3._nextState = H3.__s = H3.state), H3.context = L3, C4.getDerivedStateFromProps ? H3.state = Object.assign({}, H3.state, C4.getDerivedStateFromProps(H3.props, H3.state)) : H3.componentWillMount && (H3.componentWillMount(), H3.state = H3._nextState !== H3.state ? H3._nextState : H3.__s !== H3.state ? H3.__s : H3.state), M3 && M3(r3), F3 = H3.render(H3.props, H3.state, H3.context);
      } else
        for (var T4 = g2(C4, n3), E2 = 0; H3.__d && E2++ < 25; )
          H3.__d = false, M3 && M3(r3), F3 = C4.call(r3.__c, O4, T4);
      return H3.getChildContext && (n3 = Object.assign({}, n3, H3.getChildContext())), l.diffed && l.diffed(r3), m2(F3, n3, l4, false !== l4.shallowHighOrder, _5, v4);
    }
    C4 = (w5 = C4).displayName || w5 !== Function && w5.name || function(e3) {
      var t3 = (Function.prototype.toString.call(e3).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t3) {
        for (var r4 = -1, n4 = y2.length; n4--; )
          if (y2[n4] === e3) {
            r4 = n4;
            break;
          }
        r4 < 0 && (r4 = y2.push(e3) - 1), t3 = "UnnamedComponent" + r4;
      }
      return t3;
    }(w5);
  }
  var $3, D2, N3 = "<" + C4;
  if (O4) {
    var P4 = Object.keys(O4);
    l4 && true === l4.sortAttributes && P4.sort();
    for (var W2 = 0; W2 < P4.length; W2++) {
      var I3 = P4[W2], R2 = O4[I3];
      if ("children" !== I3) {
        if (!i2.test(I3) && (l4 && l4.allAttributes || "key" !== I3 && "ref" !== I3 && "__self" !== I3 && "__source" !== I3)) {
          if ("defaultValue" === I3)
            I3 = "value";
          else if ("defaultChecked" === I3)
            I3 = "checked";
          else if ("defaultSelected" === I3)
            I3 = "selected";
          else if ("className" === I3) {
            if (void 0 !== O4.class)
              continue;
            I3 = "class";
          } else
            _5 && a2.test(I3) && (I3 = I3.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === I3) {
            if (O4.for)
              continue;
            I3 = "for";
          }
          "style" === I3 && R2 && "object" == typeof R2 && (R2 = p2(R2)), "a" === I3[0] && "r" === I3[1] && "boolean" == typeof R2 && (R2 = String(R2));
          var U2 = l4.attributeHook && l4.attributeHook(I3, R2, n3, l4, j5);
          if (U2 || "" === U2)
            N3 += U2;
          else if ("dangerouslySetInnerHTML" === I3)
            D2 = R2 && R2.__html;
          else if ("textarea" === C4 && "value" === I3)
            $3 = R2;
          else if ((R2 || 0 === R2 || "" === R2) && "function" != typeof R2) {
            if (!(true !== R2 && "" !== R2 || (R2 = I3, l4 && l4.xml))) {
              N3 = N3 + " " + I3;
              continue;
            }
            if ("value" === I3) {
              if ("select" === C4) {
                v4 = R2;
                continue;
              }
              "option" === C4 && v4 == R2 && void 0 === O4.selected && (N3 += " selected");
            }
            N3 = N3 + " " + I3 + '="' + s2(R2) + '"';
          }
        }
      } else
        $3 = R2;
    }
  }
  if (b4) {
    var V3 = N3.replace(/\n\s*/, " ");
    V3 === N3 || ~V3.indexOf("\n") ? b4 && ~N3.indexOf("\n") && (N3 += "\n") : N3 = V3;
  }
  if (N3 += ">", i2.test(C4))
    throw new Error(C4 + " is not a valid HTML tag name in " + N3);
  var q4, z4 = o2.test(C4) || l4.voidElements && l4.voidElements.test(C4), Z2 = [];
  if (D2)
    b4 && u2(D2) && (D2 = "\n" + x5 + f2(D2, x5)), N3 += D2;
  else if (null != $3 && d2(q4 = [], $3).length) {
    for (var B4 = b4 && ~N3.indexOf("\n"), G2 = false, J2 = 0; J2 < q4.length; J2++) {
      var K2 = q4[J2];
      if (null != K2 && false !== K2) {
        var Q2 = m2(K2, n3, l4, true, "svg" === C4 || "foreignObject" !== C4 && _5, v4);
        if (b4 && !B4 && u2(Q2) && (B4 = true), Q2)
          if (b4) {
            var X2 = Q2.length > 0 && "<" != Q2[0];
            G2 && X2 ? Z2[Z2.length - 1] += Q2 : Z2.push(Q2), G2 = X2;
          } else
            Z2.push(Q2);
      }
    }
    if (b4 && B4)
      for (var Y2 = Z2.length; Y2--; )
        Z2[Y2] = "\n" + x5 + f2(Z2[Y2], x5);
  }
  if (Z2.length || D2)
    N3 += Z2.join("");
  else if (l4 && l4.xml)
    return N3.substring(0, N3.length - 1) + " />";
  return !z4 || q4 || D2 ? (b4 && ~N3.indexOf("\n") && (N3 += "\n"), N3 = N3 + "</" + C4 + ">") : N3 = N3.replace(/>$/, " />"), N3;
}
function S2(n3, o5, i5) {
  o5 = o5 || {};
  var a4 = l.__s;
  l.__s = true;
  var l4, s4 = h(p, null);
  return s4.__k = [n3], l4 = i5 && (i5.pretty || i5.voidElements || i5.sortAttributes || i5.shallow || i5.allAttributes || i5.xml || i5.attributeHook) ? m2(n3, o5, i5) : A2(n3, o5, false, void 0, s4), l.__c && l.__c(n3, k2), l.__s = a4, k2.length = 0, l4;
}
function w2(e3, t3) {
  return "className" === e3 ? "class" : "htmlFor" === e3 ? "for" : "defaultValue" === e3 ? "value" : "defaultChecked" === e3 ? "checked" : "defaultSelected" === e3 ? "selected" : t3 && a2.test(e3) ? e3.toLowerCase().replace(/^xlink:?/, "xlink:") : e3;
}
function C2(e3, t3) {
  return "style" === e3 && null != t3 && "object" == typeof t3 ? p2(t3) : "a" === e3[0] && "r" === e3[1] && "boolean" == typeof t3 ? String(t3) : t3;
}
function A2(r3, n3, a4, l4, f4) {
  if (null == r3 || true === r3 || false === r3 || "" === r3)
    return "";
  if ("object" != typeof r3)
    return "function" == typeof r3 ? "" : s2(r3);
  if (O2(r3)) {
    var u4 = "";
    f4.__k = r3;
    for (var c4 = 0; c4 < r3.length; c4++)
      u4 += A2(r3[c4], n3, a4, l4, f4);
    return u4;
  }
  if (void 0 !== r3.constructor)
    return "";
  r3.__ = f4, l.__b && l.__b(r3);
  var _5 = r3.type, p4 = r3.props;
  if ("function" == typeof _5) {
    var d4;
    if (_5 === p)
      d4 = p4.children;
    else {
      d4 = _5.prototype && "function" == typeof _5.prototype.render ? function(e3, r4) {
        var n4 = e3.type, o5 = g2(n4, r4), i5 = new n4(e3.props, o5);
        e3.__c = i5, i5.__v = e3, i5.__d = true, i5.props = e3.props, null == i5.state && (i5.state = {}), null == i5.__s && (i5.__s = i5.state), i5.context = o5, n4.getDerivedStateFromProps ? i5.state = j2({}, i5.state, n4.getDerivedStateFromProps(i5.props, i5.state)) : i5.componentWillMount && (i5.componentWillMount(), i5.state = i5.__s !== i5.state ? i5.__s : i5.state);
        var a5 = l.__r;
        return a5 && a5(e3), i5.render(i5.props, i5.state, i5.context);
      }(r3, n3) : function(e3, r4) {
        var n4, o5 = h2(e3, r4), i5 = g2(e3.type, r4);
        e3.__c = o5;
        for (var a5 = l.__r, l5 = 0; o5.__d && l5++ < 25; )
          o5.__d = false, a5 && a5(e3), n4 = e3.type.call(o5, e3.props, i5);
        return n4;
      }(r3, n3);
      var v4 = r3.__c;
      v4.getChildContext && (n3 = j2({}, n3, v4.getChildContext()));
    }
    var y4 = A2(d4 = null != d4 && d4.type === p && null == d4.key ? d4.props.children : d4, n3, a4, l4, r3);
    return l.diffed && l.diffed(r3), r3.__ = void 0, l.unmount && l.unmount(r3), y4;
  }
  var m4, b4, x5 = "<";
  if (x5 += _5, p4)
    for (var k5 in m4 = p4.children, p4) {
      var S3 = p4[k5];
      if (!("key" === k5 || "ref" === k5 || "__self" === k5 || "__source" === k5 || "children" === k5 || "className" === k5 && "class" in p4 || "htmlFor" === k5 && "for" in p4 || i2.test(k5))) {
        if (S3 = C2(k5 = w2(k5, a4), S3), "dangerouslySetInnerHTML" === k5)
          b4 = S3 && S3.__html;
        else if ("textarea" === _5 && "value" === k5)
          m4 = S3;
        else if ((S3 || 0 === S3 || "" === S3) && "function" != typeof S3) {
          if (true === S3 || "" === S3) {
            S3 = k5, x5 = x5 + " " + k5;
            continue;
          }
          if ("value" === k5) {
            if ("select" === _5) {
              l4 = S3;
              continue;
            }
            "option" !== _5 || l4 != S3 || "selected" in p4 || (x5 += " selected");
          }
          x5 = x5 + " " + k5 + '="' + s2(S3) + '"';
        }
      }
    }
  var F3 = x5;
  if (x5 += ">", i2.test(_5))
    throw new Error(_5 + " is not a valid HTML tag name in " + x5);
  var H3 = "", M3 = false;
  if (b4)
    H3 += b4, M3 = true;
  else if ("string" == typeof m4)
    H3 += s2(m4), M3 = true;
  else if (O2(m4)) {
    r3.__k = m4;
    for (var L3 = 0; L3 < m4.length; L3++) {
      var T4 = m4[L3];
      if (null != T4 && false !== T4) {
        var E2 = A2(T4, n3, "svg" === _5 || "foreignObject" !== _5 && a4, l4, r3);
        E2 && (H3 += E2, M3 = true);
      }
    }
  } else if (null != m4 && false !== m4 && true !== m4) {
    r3.__k = [m4];
    var $3 = A2(m4, n3, "svg" === _5 || "foreignObject" !== _5 && a4, l4, r3);
    $3 && (H3 += $3, M3 = true);
  }
  if (l.diffed && l.diffed(r3), r3.__ = void 0, l.unmount && l.unmount(r3), M3)
    x5 += H3;
  else if (o2.test(_5))
    return F3 + " />";
  return x5 + "</" + _5 + ">";
}
var n2, o2, i2, a2, l2, f2, u2, c2, _2, y2, b2, x2, k2, O2, j2;
var init_dist = __esm({
  "../../.yarn/__virtual__/preact-render-to-string-virtual-01d743af49/0/global/cache/preact-render-to-string-npm-5.2.5-f4d2453001-9.zip/node_modules/preact-render-to-string/dist/index.mjs"() {
    init_define_process();
    init_preact_module();
    n2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
    o2 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
    i2 = /[\s\n\\/='"\0<>]/;
    a2 = /^xlink:?./;
    l2 = /["&<]/;
    f2 = function(e3, t3) {
      return String(e3).replace(/(\n+)/g, "$1" + (t3 || "	"));
    };
    u2 = function(e3, t3, r3) {
      return String(e3).length > (t3 || 40) || !r3 && -1 !== String(e3).indexOf("\n") || -1 !== String(e3).indexOf("<");
    };
    c2 = {};
    _2 = /([A-Z])/g;
    y2 = [];
    b2 = { shallow: true };
    S2.render = S2;
    x2 = function(e3, t3) {
      return S2(e3, t3, b2);
    };
    k2 = [];
    O2 = Array.isArray;
    j2 = Object.assign;
    S2.shallowRender = x2;
  }
});

// js/preact/hooks/dist/hooks.module.js
function d3(t3, u4) {
  l.__h && l.__h(r2, t3, o3 || u4), o3 = 0;
  var i5 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t3 >= i5.__.length && i5.__.push({ __V: c3 }), i5.__[t3];
}
function p3(n3) {
  return o3 = 1, y3(B2, n3);
}
function y3(n3, u4, i5) {
  var o5 = d3(t2++, 2);
  if (o5.t = n3, !o5.__c && (o5.__ = [i5 ? i5(u4) : B2(void 0, u4), function(n4) {
    var t3 = o5.__N ? o5.__N[0] : o5.__[0], r3 = o5.t(t3, n4);
    t3 !== r3 && (o5.__N = [r3, o5.__[1]], o5.__c.setState({}));
  }], o5.__c = r2, !r2.u)) {
    r2.u = true;
    var f4 = r2.shouldComponentUpdate;
    r2.shouldComponentUpdate = function(n4, t3, r3) {
      if (!o5.__c.__H)
        return true;
      var u5 = o5.__c.__H.__.filter(function(n5) {
        return n5.__c;
      });
      if (u5.every(function(n5) {
        return !n5.__N;
      }))
        return !f4 || f4.call(this, n4, t3, r3);
      var i6 = false;
      return u5.forEach(function(n5) {
        if (n5.__N) {
          var t4 = n5.__[0];
          n5.__ = n5.__N, n5.__N = void 0, t4 !== n5.__[0] && (i6 = true);
        }
      }), !(!i6 && o5.__c.props === n4) && (!f4 || f4.call(this, n4, t3, r3));
    };
  }
  return o5.__N || o5.__;
}
function h3(u4, i5) {
  var o5 = d3(t2++, 3);
  !l.__s && z2(o5.__H, i5) && (o5.__ = u4, o5.i = i5, r2.__H.__h.push(o5));
}
function s3(u4, i5) {
  var o5 = d3(t2++, 4);
  !l.__s && z2(o5.__H, i5) && (o5.__ = u4, o5.i = i5, r2.__h.push(o5));
}
function _3(n3) {
  return o3 = 5, F(function() {
    return { current: n3 };
  }, []);
}
function A3(n3, t3, r3) {
  o3 = 6, s3(function() {
    return "function" == typeof n3 ? (n3(t3()), function() {
      return n3(null);
    }) : n3 ? (n3.current = t3(), function() {
      return n3.current = null;
    }) : void 0;
  }, null == r3 ? r3 : r3.concat(n3));
}
function F(n3, r3) {
  var u4 = d3(t2++, 7);
  return z2(u4.__H, r3) ? (u4.__V = n3(), u4.i = r3, u4.__h = n3, u4.__V) : u4.__;
}
function T2(n3, t3) {
  return o3 = 8, F(function() {
    return n3;
  }, t3);
}
function q2(n3) {
  var u4 = r2.context[n3.__c], i5 = d3(t2++, 9);
  return i5.c = n3, u4 ? (null == i5.__ && (i5.__ = true, u4.sub(r2)), u4.props.value) : n3.__;
}
function x3(t3, r3) {
  l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
}
function P2(n3) {
  var u4 = d3(t2++, 10), i5 = p3();
  return u4.__ = n3, r2.componentDidCatch || (r2.componentDidCatch = function(n4, t3) {
    u4.__ && u4.__(n4, t3), i5[1](n4);
  }), [i5[0], function() {
    i5[1](void 0);
  }];
}
function V() {
  var n3 = d3(t2++, 11);
  return n3.__ || (n3.__ = "P" + function(n4) {
    for (var t3 = 0, r3 = n4.length; r3 > 0; )
      t3 = (t3 << 5) - t3 + n4.charCodeAt(--r3) | 0;
    return t3;
  }(r2.__v.__m) + t2), n3.__;
}
function b3() {
  for (var t3; t3 = f3.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(k3), t3.__H.__h.forEach(w3), t3.__H.__h = [];
      } catch (r3) {
        t3.__H.__h = [], l.__e(r3, t3.__v);
      }
}
function j3(n3) {
  var t3, r3 = function() {
    clearTimeout(u4), g3 && cancelAnimationFrame(t3), setTimeout(n3);
  }, u4 = setTimeout(r3, 100);
  g3 && (t3 = requestAnimationFrame(r3));
}
function k3(n3) {
  var t3 = r2, u4 = n3.__c;
  "function" == typeof u4 && (n3.__c = void 0, u4()), r2 = t3;
}
function w3(n3) {
  var t3 = r2;
  n3.__c = n3.__(), r2 = t3;
}
function z2(n3, t3) {
  return !n3 || n3.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n3[r3];
  });
}
function B2(n3, t3) {
  return "function" == typeof t3 ? t3(n3) : t3;
}
var t2, r2, u3, i3, o3, f3, c3, e2, a3, v3, l3, m3, g3;
var init_hooks_module = __esm({
  "js/preact/hooks/dist/hooks.module.js"() {
    "use strict";
    init_define_process();
    init_preact_module();
    o3 = 0;
    f3 = [];
    c3 = [];
    e2 = l.__b;
    a3 = l.__r;
    v3 = l.diffed;
    l3 = l.__c;
    m3 = l.unmount;
    l.__b = function(n3) {
      "function" != typeof n3.type || n3.__m || null === n3.__ ? n3.__m || (n3.__m = n3.__ && n3.__.__m ? n3.__.__m : "") : n3.__m = (n3.__ && n3.__.__m ? n3.__.__m : "") + (n3.__ && n3.__.__k ? n3.__.__k.indexOf(n3) : 0), r2 = null, e2 && e2(n3);
    }, l.__r = function(n3) {
      a3 && a3(n3), t2 = 0;
      var i5 = (r2 = n3.__c).__H;
      i5 && (u3 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n4) {
        n4.__N && (n4.__ = n4.__N), n4.__V = c3, n4.__N = n4.i = void 0;
      })) : (i5.__h.forEach(k3), i5.__h.forEach(w3), i5.__h = [])), u3 = r2;
    }, l.diffed = function(t3) {
      v3 && v3(t3);
      var o5 = t3.__c;
      o5 && o5.__H && (o5.__H.__h.length && (1 !== f3.push(o5) && i3 === l.requestAnimationFrame || ((i3 = l.requestAnimationFrame) || j3)(b3)), o5.__H.__.forEach(function(n3) {
        n3.i && (n3.__H = n3.i), n3.__V !== c3 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c3;
      })), u3 = r2 = null;
    }, l.__c = function(t3, r3) {
      r3.some(function(t4) {
        try {
          t4.__h.forEach(k3), t4.__h = t4.__h.filter(function(n3) {
            return !n3.__ || w3(n3);
          });
        } catch (u4) {
          r3.some(function(n3) {
            n3.__h && (n3.__h = []);
          }), r3 = [], l.__e(u4, t4.__v);
        }
      }), l3 && l3(t3, r3);
    }, l.unmount = function(t3) {
      m3 && m3(t3);
      var r3, u4 = t3.__c;
      u4 && u4.__H && (u4.__H.__.forEach(function(n3) {
        try {
          k3(n3);
        } catch (n4) {
          r3 = n4;
        }
      }), u4.__H = void 0, r3 && l.__e(r3, u4.__v));
    };
    g3 = "function" == typeof requestAnimationFrame;
  }
});

// js/preact/compat/dist/compat.module.js
var compat_module_exports = {};
__export(compat_module_exports, {
  Children: () => A4,
  Component: () => d,
  Fragment: () => p,
  PureComponent: () => E,
  StrictMode: () => hn,
  Suspense: () => U,
  SuspenseList: () => M2,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => en,
  cloneElement: () => ln,
  createContext: () => B,
  createElement: () => h,
  createFactory: () => un,
  createPortal: () => $2,
  createRef: () => y,
  default: () => _n,
  findDOMNode: () => fn,
  flushSync: () => sn,
  forwardRef: () => N2,
  hydrate: () => Y,
  isValidElement: () => on,
  lazy: () => F2,
  memo: () => w4,
  render: () => Z,
  startTransition: () => vn,
  unmountComponentAtNode: () => cn,
  unstable_batchedUpdates: () => an,
  useCallback: () => T2,
  useContext: () => q2,
  useDebugValue: () => x3,
  useDeferredValue: () => dn,
  useEffect: () => h3,
  useErrorBoundary: () => P2,
  useId: () => V,
  useImperativeHandle: () => A3,
  useInsertionEffect: () => mn,
  useLayoutEffect: () => s3,
  useMemo: () => F,
  useReducer: () => y3,
  useRef: () => _3,
  useState: () => p3,
  useSyncExternalStore: () => yn,
  useTransition: () => pn,
  version: () => rn
});
function g4(n3, t3) {
  for (var e3 in t3)
    n3[e3] = t3[e3];
  return n3;
}
function C3(n3, t3) {
  for (var e3 in n3)
    if ("__source" !== e3 && !(e3 in t3))
      return true;
  for (var r3 in t3)
    if ("__source" !== r3 && n3[r3] !== t3[r3])
      return true;
  return false;
}
function E(n3) {
  this.props = n3;
}
function w4(n3, e3) {
  function r3(n4) {
    var t3 = this.props.ref, r4 = t3 == n4.ref;
    return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n4) || !r4 : C3(this.props, n4);
  }
  function u4(e4) {
    return this.shouldComponentUpdate = r3, h(n3, e4);
  }
  return u4.displayName = "Memo(" + (n3.displayName || n3.name) + ")", u4.prototype.isReactComponent = true, u4.__f = true, u4;
}
function N2(n3) {
  function t3(t4) {
    var e3 = g4({}, t4);
    return delete e3.ref, n3(e3, t4.ref || null);
  }
  return t3.$$typeof = x4, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n3.displayName || n3.name) + ")", t3;
}
function I2(n3, t3, e3) {
  return n3 && (n3.__c && n3.__c.__H && (n3.__c.__H.__.forEach(function(n4) {
    "function" == typeof n4.__c && n4.__c();
  }), n3.__c.__H = null), null != (n3 = g4({}, n3)).__c && (n3.__c.__P === e3 && (n3.__c.__P = t3), n3.__c = null), n3.__k = n3.__k && n3.__k.map(function(n4) {
    return I2(n4, t3, e3);
  })), n3;
}
function L2(n3, t3, e3) {
  return n3 && (n3.__v = null, n3.__k = n3.__k && n3.__k.map(function(n4) {
    return L2(n4, t3, e3);
  }), n3.__c && n3.__c.__P === t3 && (n3.__e && e3.insertBefore(n3.__e, n3.__d), n3.__c.__e = true, n3.__c.__P = e3)), n3;
}
function U() {
  this.__u = 0, this.t = null, this.__b = null;
}
function D(n3) {
  var t3 = n3.__.__c;
  return t3 && t3.__a && t3.__a(n3);
}
function F2(n3) {
  var e3, r3, u4;
  function o5(o6) {
    if (e3 || (e3 = n3()).then(function(n4) {
      r3 = n4.default || n4;
    }, function(n4) {
      u4 = n4;
    }), u4)
      throw u4;
    if (!r3)
      throw e3;
    return h(r3, o6);
  }
  return o5.displayName = "Lazy", o5.__f = true, o5;
}
function M2() {
  this.u = null, this.o = null;
}
function W(n3) {
  return this.getChildContext = function() {
    return n3.context;
  }, n3.children;
}
function P3(n3) {
  var e3 = this, r3 = n3.i;
  e3.componentWillUnmount = function() {
    P(null, e3.l), e3.l = null, e3.i = null;
  }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n3.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n4) {
    this.childNodes.push(n4), e3.i.appendChild(n4);
  }, insertBefore: function(n4, t3) {
    this.childNodes.push(n4), e3.i.appendChild(n4);
  }, removeChild: function(n4) {
    this.childNodes.splice(this.childNodes.indexOf(n4) >>> 1, 1), e3.i.removeChild(n4);
  } }), P(h(W, { context: e3.context }, n3.__v), e3.l)) : e3.l && e3.componentWillUnmount();
}
function $2(n3, e3) {
  var r3 = h(P3, { __v: n3, i: e3 });
  return r3.containerInfo = e3, r3;
}
function Z(n3, t3, e3) {
  return null == t3.__k && (t3.textContent = ""), P(n3, t3), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
}
function Y(n3, t3, e3) {
  return S(n3, t3), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
}
function G() {
}
function J() {
  return this.cancelBubble;
}
function K() {
  return this.defaultPrevented;
}
function un(n3) {
  return h.bind(null, n3);
}
function on(n3) {
  return !!n3 && n3.$$typeof === j4;
}
function ln(n3) {
  return on(n3) ? q.apply(null, arguments) : n3;
}
function cn(n3) {
  return !!n3.__k && (P(null, n3), true);
}
function fn(n3) {
  return n3 && (n3.base || 1 === n3.nodeType && n3) || null;
}
function vn(n3) {
  n3();
}
function dn(n3) {
  return n3;
}
function pn() {
  return [false, vn];
}
function yn(n3, t3) {
  var e3 = t3(), r3 = p3({ h: { __: e3, v: t3 } }), u4 = r3[0].h, o5 = r3[1];
  return s3(function() {
    u4.__ = e3, u4.v = t3, u4.__ !== t3() && o5({ h: u4 });
  }, [n3, e3, t3]), h3(function() {
    return u4.__ !== u4.v() && o5({ h: u4 }), n3(function() {
      u4.__ !== u4.v() && o5({ h: u4 });
    });
  }, [n3]), e3;
}
var R, x4, k4, A4, O3, T3, V2, j4, z3, B3, H2, q3, Q, X, nn, tn, en, rn, an, sn, hn, mn, _n;
var init_compat_module = __esm({
  "js/preact/compat/dist/compat.module.js"() {
    "use strict";
    init_define_process();
    init_preact_module();
    init_preact_module();
    init_hooks_module();
    init_hooks_module();
    (E.prototype = new d()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n3, t3) {
      return C3(this.props, n3) || C3(this.state, t3);
    };
    R = l.__b;
    l.__b = function(n3) {
      n3.type && n3.type.__f && n3.ref && (n3.props.ref = n3.ref, n3.ref = null), R && R(n3);
    };
    x4 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    k4 = function(n3, t3) {
      return null == n3 ? null : x(x(n3).map(t3));
    };
    A4 = { map: k4, forEach: k4, count: function(n3) {
      return n3 ? x(n3).length : 0;
    }, only: function(n3) {
      var t3 = x(n3);
      if (1 !== t3.length)
        throw "Children.only";
      return t3[0];
    }, toArray: x };
    O3 = l.__e;
    l.__e = function(n3, t3, e3, r3) {
      if (n3.then) {
        for (var u4, o5 = t3; o5 = o5.__; )
          if ((u4 = o5.__c) && u4.__c)
            return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u4.__c(n3, t3);
      }
      O3(n3, t3, e3, r3);
    };
    T3 = l.unmount;
    l.unmount = function(n3) {
      var t3 = n3.__c;
      t3 && t3.__R && t3.__R(), t3 && true === n3.__h && (n3.type = null), T3 && T3(n3);
    }, (U.prototype = new d()).__c = function(n3, t3) {
      var e3 = t3.__c, r3 = this;
      null == r3.t && (r3.t = []), r3.t.push(e3);
      var u4 = D(r3.__v), o5 = false, i5 = function() {
        o5 || (o5 = true, e3.__R = null, u4 ? u4(l4) : l4());
      };
      e3.__R = i5;
      var l4 = function() {
        if (!--r3.__u) {
          if (r3.state.__a) {
            var n4 = r3.state.__a;
            r3.__v.__k[0] = L2(n4, n4.__c.__P, n4.__c.__O);
          }
          var t4;
          for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
            t4.forceUpdate();
        }
      }, c4 = true === t3.__h;
      r3.__u++ || c4 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n3.then(i5, i5);
    }, U.prototype.componentWillUnmount = function() {
      this.t = [];
    }, U.prototype.render = function(n3, e3) {
      if (this.__b) {
        if (this.__v.__k) {
          var r3 = document.createElement("div"), o5 = this.__v.__k[0].__c;
          this.__v.__k[0] = I2(this.__b, r3, o5.__O = o5.__P);
        }
        this.__b = null;
      }
      var i5 = e3.__a && h(p, null, n3.fallback);
      return i5 && (i5.__h = null), [h(p, null, e3.__a ? null : n3.children), i5];
    };
    V2 = function(n3, t3, e3) {
      if (++e3[1] === e3[0] && n3.o.delete(t3), n3.props.revealOrder && ("t" !== n3.props.revealOrder[0] || !n3.o.size))
        for (e3 = n3.u; e3; ) {
          for (; e3.length > 3; )
            e3.pop()();
          if (e3[1] < e3[0])
            break;
          n3.u = e3 = e3[2];
        }
    };
    (M2.prototype = new d()).__a = function(n3) {
      var t3 = this, e3 = D(t3.__v), r3 = t3.o.get(n3);
      return r3[0]++, function(u4) {
        var o5 = function() {
          t3.props.revealOrder ? (r3.push(u4), V2(t3, n3, r3)) : u4();
        };
        e3 ? e3(o5) : o5();
      };
    }, M2.prototype.render = function(n3) {
      this.u = null, this.o = /* @__PURE__ */ new Map();
      var t3 = x(n3.children);
      n3.revealOrder && "b" === n3.revealOrder[0] && t3.reverse();
      for (var e3 = t3.length; e3--; )
        this.o.set(t3[e3], this.u = [1, 0, this.u]);
      return n3.children;
    }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
      var n3 = this;
      this.o.forEach(function(t3, e3) {
        V2(n3, e3, t3);
      });
    };
    j4 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    z3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    B3 = "undefined" != typeof document;
    H2 = function(n3) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n3);
    };
    d.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
      Object.defineProperty(d.prototype, t3, { configurable: true, get: function() {
        return this["UNSAFE_" + t3];
      }, set: function(n3) {
        Object.defineProperty(this, t3, { configurable: true, writable: true, value: n3 });
      } });
    });
    q3 = l.event;
    l.event = function(n3) {
      return q3 && (n3 = q3(n3)), n3.persist = G, n3.isPropagationStopped = J, n3.isDefaultPrevented = K, n3.nativeEvent = n3;
    };
    X = { configurable: true, get: function() {
      return this.class;
    } };
    nn = l.vnode;
    l.vnode = function(n3) {
      var t3 = n3.type, e3 = n3.props, u4 = e3;
      if ("string" == typeof t3) {
        var o5 = -1 === t3.indexOf("-");
        for (var i5 in u4 = {}, e3) {
          var l4 = e3[i5];
          B3 && "children" === i5 && "noscript" === t3 || "value" === i5 && "defaultValue" in e3 && null == l4 || ("defaultValue" === i5 && "value" in e3 && null == e3.value ? i5 = "value" : "download" === i5 && true === l4 ? l4 = "" : /ondoubleclick/i.test(i5) ? i5 = "ondblclick" : /^onchange(textarea|input)/i.test(i5 + t3) && !H2(e3.type) ? i5 = "oninput" : /^onfocus$/i.test(i5) ? i5 = "onfocusin" : /^onblur$/i.test(i5) ? i5 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i5) ? i5 = i5.toLowerCase() : o5 && z3.test(i5) ? i5 = i5.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l4 && (l4 = void 0), /^oninput$/i.test(i5) && (i5 = i5.toLowerCase(), u4[i5] && (i5 = "oninputCapture")), u4[i5] = l4);
        }
        "select" == t3 && u4.multiple && Array.isArray(u4.value) && (u4.value = x(e3.children).forEach(function(n4) {
          n4.props.selected = -1 != u4.value.indexOf(n4.props.value);
        })), "select" == t3 && null != u4.defaultValue && (u4.value = x(e3.children).forEach(function(n4) {
          n4.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n4.props.value) : u4.defaultValue == n4.props.value;
        })), n3.props = u4, e3.class != e3.className && (X.enumerable = "className" in e3, null != e3.className && (u4.class = e3.className), Object.defineProperty(u4, "className", X));
      }
      n3.$$typeof = j4, nn && nn(n3);
    };
    tn = l.__r;
    l.__r = function(n3) {
      tn && tn(n3), Q = n3.__c;
    };
    en = { ReactCurrentDispatcher: { current: { readContext: function(n3) {
      return Q.__n[n3.__c].props.value;
    } } } };
    rn = "17.0.2";
    an = function(n3, t3) {
      return n3(t3);
    };
    sn = function(n3, t3) {
      return n3(t3);
    };
    hn = p;
    mn = s3;
    _n = { useState: p3, useId: V, useReducer: y3, useEffect: h3, useLayoutEffect: s3, useInsertionEffect: mn, useTransition: pn, useDeferredValue: dn, useSyncExternalStore: yn, startTransition: vn, useRef: _3, useImperativeHandle: A3, useMemo: F, useCallback: T2, useContext: q2, useDebugValue: x3, version: "17.0.2", Children: A4, render: Z, hydrate: Y, unmountComponentAtNode: cn, createPortal: $2, createElement: h, createContext: B, createFactory: un, cloneElement: ln, createRef: y, Fragment: p, isValidElement: on, findDOMNode: fn, Component: d, PureComponent: E, memo: w4, forwardRef: N2, flushSync: sn, unstable_batchedUpdates: an, StrictMode: hn, Suspense: U, SuspenseList: M2, lazy: F2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: en };
  }
});

// js/preact/jsx-runtime/dist/jsxRuntime.module.js
function o4(o5, e3, n3, t3, f4) {
  var l4, s4, u4 = {};
  for (s4 in e3)
    "ref" == s4 ? l4 = e3[s4] : u4[s4] = e3[s4];
  var a4 = { type: o5, props: u4, key: n3, ref: l4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_4, __source: f4, __self: t3 };
  if ("function" == typeof o5 && (l4 = o5.defaultProps))
    for (s4 in l4)
      void 0 === u4[s4] && (u4[s4] = l4[s4]);
  return l.vnode && l.vnode(a4), a4;
}
var _4;
var init_jsxRuntime_module = __esm({
  "js/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
    "use strict";
    init_define_process();
    init_preact_module();
    init_preact_module();
    _4 = 0;
  }
});

// js/preact/compat/jsx-runtime.mjs
var init_jsx_runtime = __esm({
  "js/preact/compat/jsx-runtime.mjs"() {
    "use strict";
    init_define_process();
    init_compat_module();
    init_jsxRuntime_module();
  }
});

// js/preact/src/constants.js
var EMPTY_OBJ, EMPTY_ARR, IS_NON_DIMENSIONAL;
var init_constants = __esm({
  "js/preact/src/constants.js"() {
    "use strict";
    init_define_process();
    EMPTY_OBJ = {};
    EMPTY_ARR = [];
    IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  }
});

// js/preact/src/util.js
function assign(obj, props) {
  for (let i5 in props)
    obj[i5] = props[i5];
  return obj;
}
function removeNode(node) {
  let parentNode = node.parentNode;
  if (parentNode)
    parentNode.removeChild(node);
}
var slice;
var init_util = __esm({
  "js/preact/src/util.js"() {
    "use strict";
    init_define_process();
    init_constants();
    slice = EMPTY_ARR.slice;
  }
});

// js/preact/src/diff/catch-error.js
function _catchError(error, vnode, oldVNode, errorInfo) {
  let component, ctor, handled;
  for (; vnode = vnode._parent; ) {
    if ((component = vnode._component) && !component._processingException) {
      try {
        ctor = component.constructor;
        if (ctor && ctor.getDerivedStateFromError != null) {
          component.setState(ctor.getDerivedStateFromError(error));
          handled = component._dirty;
        }
        if (component.componentDidCatch != null) {
          component.componentDidCatch(error, errorInfo || {});
          handled = component._dirty;
        }
        if (handled) {
          return component._pendingError = component;
        }
      } catch (e3) {
        error = e3;
      }
    }
  }
  throw error;
}
var init_catch_error = __esm({
  "js/preact/src/diff/catch-error.js"() {
    "use strict";
    init_define_process();
  }
});

// js/preact/src/options.js
var options, options_default;
var init_options = __esm({
  "js/preact/src/options.js"() {
    "use strict";
    init_define_process();
    init_catch_error();
    options = {
      _catchError
    };
    options_default = options;
  }
});

// js/preact/src/create-element.js
function createElement(type, props, children) {
  let normalizedProps = {}, key, ref, i5;
  for (i5 in props) {
    if (i5 == "key")
      key = props[i5];
    else if (i5 == "ref")
      ref = props[i5];
    else
      normalizedProps[i5] = props[i5];
  }
  if (arguments.length > 2) {
    normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
  }
  if (typeof type == "function" && type.defaultProps != null) {
    for (i5 in type.defaultProps) {
      if (normalizedProps[i5] === void 0) {
        normalizedProps[i5] = type.defaultProps[i5];
      }
    }
  }
  return createVNode(type, normalizedProps, key, ref, null);
}
function createVNode(type, props, key, ref, original) {
  const vnode = {
    type,
    props,
    key,
    ref,
    _children: null,
    _parent: null,
    _depth: 0,
    _dom: null,
    _nextDom: void 0,
    _component: null,
    _hydrating: null,
    constructor: void 0,
    _original: original == null ? ++vnodeId : original
  };
  if (original == null && options_default.vnode != null)
    options_default.vnode(vnode);
  return vnode;
}
function createRef() {
  return { current: null };
}
function Fragment(props) {
  return props.children;
}
var vnodeId, isValidElement;
var init_create_element = __esm({
  "js/preact/src/create-element.js"() {
    "use strict";
    init_define_process();
    init_util();
    init_options();
    vnodeId = 0;
    isValidElement = (vnode) => vnode != null && vnode.constructor === void 0;
  }
});

// js/preact/src/diff/children.js
function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating) {
  let i5, j5, oldVNode, childVNode, newDom, firstChildDom, refs;
  let oldChildren = oldParentVNode && oldParentVNode._children || EMPTY_ARR;
  let oldChildrenLength = oldChildren.length;
  newParentVNode._children = [];
  for (i5 = 0; i5 < renderResult.length; i5++) {
    childVNode = renderResult[i5];
    if (childVNode == null || typeof childVNode == "boolean") {
      childVNode = newParentVNode._children[i5] = null;
    } else if (typeof childVNode == "string" || typeof childVNode == "number" || typeof childVNode == "bigint") {
      childVNode = newParentVNode._children[i5] = createVNode(
        null,
        childVNode,
        null,
        null,
        childVNode
      );
    } else if (Array.isArray(childVNode)) {
      childVNode = newParentVNode._children[i5] = createVNode(
        Fragment,
        { children: childVNode },
        null,
        null,
        null
      );
    } else if (childVNode._depth > 0) {
      childVNode = newParentVNode._children[i5] = createVNode(
        childVNode.type,
        childVNode.props,
        childVNode.key,
        childVNode.ref ? childVNode.ref : null,
        childVNode._original
      );
    } else {
      childVNode = newParentVNode._children[i5] = childVNode;
    }
    if (childVNode == null) {
      continue;
    }
    childVNode._parent = newParentVNode;
    childVNode._depth = newParentVNode._depth + 1;
    oldVNode = oldChildren[i5];
    if (oldVNode === null || oldVNode && childVNode.key == oldVNode.key && childVNode.type === oldVNode.type) {
      oldChildren[i5] = void 0;
    } else {
      for (j5 = 0; j5 < oldChildrenLength; j5++) {
        oldVNode = oldChildren[j5];
        if (oldVNode && childVNode.key == oldVNode.key && childVNode.type === oldVNode.type) {
          oldChildren[j5] = void 0;
          break;
        }
        oldVNode = null;
      }
    }
    oldVNode = oldVNode || EMPTY_OBJ;
    diff(
      parentDom,
      childVNode,
      oldVNode,
      globalContext,
      isSvg,
      excessDomChildren,
      commitQueue,
      oldDom,
      isHydrating
    );
    newDom = childVNode._dom;
    if ((j5 = childVNode.ref) && oldVNode.ref != j5) {
      if (!refs)
        refs = [];
      if (oldVNode.ref)
        refs.push(oldVNode.ref, null, childVNode);
      refs.push(j5, childVNode._component || newDom, childVNode);
    }
    if (newDom != null) {
      if (firstChildDom == null) {
        firstChildDom = newDom;
      }
      if (typeof childVNode.type == "function" && childVNode._children === oldVNode._children) {
        childVNode._nextDom = oldDom = reorderChildren(
          childVNode,
          oldDom,
          parentDom
        );
      } else {
        oldDom = placeChild(
          parentDom,
          childVNode,
          oldVNode,
          oldChildren,
          newDom,
          oldDom
        );
      }
      if (typeof newParentVNode.type == "function") {
        newParentVNode._nextDom = oldDom;
      }
    } else if (oldDom && oldVNode._dom == oldDom && oldDom.parentNode != parentDom) {
      oldDom = getDomSibling(oldVNode);
    }
  }
  newParentVNode._dom = firstChildDom;
  for (i5 = oldChildrenLength; i5--; ) {
    if (oldChildren[i5] != null) {
      unmount(oldChildren[i5], oldChildren[i5]);
    }
  }
  if (refs) {
    for (i5 = 0; i5 < refs.length; i5++) {
      applyRef(refs[i5], refs[++i5], refs[++i5]);
    }
  }
}
function reorderChildren(childVNode, oldDom, parentDom) {
  let c4 = childVNode._children;
  let tmp = 0;
  for (; c4 && tmp < c4.length; tmp++) {
    let vnode = c4[tmp];
    if (vnode) {
      vnode._parent = childVNode;
      if (typeof vnode.type == "function") {
        oldDom = reorderChildren(vnode, oldDom, parentDom);
      } else {
        oldDom = placeChild(parentDom, vnode, vnode, c4, vnode._dom, oldDom);
      }
    }
  }
  return oldDom;
}
function toChildArray(children, out) {
  out = out || [];
  if (children == null || typeof children == "boolean") {
  } else if (Array.isArray(children)) {
    children.some((child) => {
      toChildArray(child, out);
    });
  } else {
    out.push(children);
  }
  return out;
}
function placeChild(parentDom, childVNode, oldVNode, oldChildren, newDom, oldDom) {
  let nextDom;
  if (childVNode._nextDom !== void 0) {
    nextDom = childVNode._nextDom;
    childVNode._nextDom = void 0;
  } else if (oldVNode == null || newDom != oldDom || newDom.parentNode == null) {
    outer:
      if (oldDom == null || oldDom.parentNode !== parentDom) {
        parentDom.appendChild(newDom);
        nextDom = null;
      } else {
        for (let sibDom = oldDom, j5 = 0; (sibDom = sibDom.nextSibling) && j5 < oldChildren.length; j5 += 2) {
          if (sibDom == newDom) {
            break outer;
          }
        }
        parentDom.insertBefore(newDom, oldDom);
        nextDom = oldDom;
      }
  }
  if (nextDom !== void 0) {
    oldDom = nextDom;
  } else {
    oldDom = newDom.nextSibling;
  }
  return oldDom;
}
var init_children = __esm({
  "js/preact/src/diff/children.js"() {
    "use strict";
    init_define_process();
    init_diff();
    init_create_element();
    init_constants();
    init_component();
  }
});

// js/preact/src/diff/props.js
function diffProps(dom, newProps, oldProps, isSvg, hydrate2) {
  let i5;
  for (i5 in oldProps) {
    if (i5 !== "children" && i5 !== "key" && !(i5 in newProps)) {
      setProperty(dom, i5, null, oldProps[i5], isSvg);
    }
  }
  for (i5 in newProps) {
    if ((!hydrate2 || typeof newProps[i5] == "function") && i5 !== "children" && i5 !== "key" && i5 !== "value" && i5 !== "checked" && oldProps[i5] !== newProps[i5]) {
      setProperty(dom, i5, newProps[i5], oldProps[i5], isSvg);
    }
  }
}
function setStyle(style, key, value) {
  if (key[0] === "-") {
    style.setProperty(key, value);
  } else if (value == null) {
    style[key] = "";
  } else if (typeof value != "number" || IS_NON_DIMENSIONAL.test(key)) {
    style[key] = value;
  } else {
    style[key] = value + "px";
  }
}
function setProperty(dom, name, value, oldValue, isSvg) {
  let useCapture;
  o:
    if (name === "style") {
      if (typeof value == "string") {
        dom.style.cssText = value;
      } else {
        if (typeof oldValue == "string") {
          dom.style.cssText = oldValue = "";
        }
        if (oldValue) {
          for (name in oldValue) {
            if (!(value && name in value)) {
              setStyle(dom.style, name, "");
            }
          }
        }
        if (value) {
          for (name in value) {
            if (!oldValue || value[name] !== oldValue[name]) {
              setStyle(dom.style, name, value[name]);
            }
          }
        }
      }
    } else if (name[0] === "o" && name[1] === "n") {
      useCapture = name !== (name = name.replace(/Capture$/, ""));
      if (name.toLowerCase() in dom)
        name = name.toLowerCase().slice(2);
      else
        name = name.slice(2);
      if (!dom._listeners)
        dom._listeners = {};
      dom._listeners[name + useCapture] = value;
      if (value) {
        if (!oldValue) {
          const handler = useCapture ? eventProxyCapture : eventProxy;
          dom.addEventListener(name, handler, useCapture);
        }
      } else {
        const handler = useCapture ? eventProxyCapture : eventProxy;
        dom.removeEventListener(name, handler, useCapture);
      }
    } else if (name !== "dangerouslySetInnerHTML") {
      if (isSvg) {
        name = name.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      } else if (name !== "href" && name !== "list" && name !== "form" && name !== "tabIndex" && name !== "download" && name in dom) {
        try {
          dom[name] = value == null ? "" : value;
          break o;
        } catch (e3) {
        }
      }
      if (typeof value === "function") {
      } else if (value != null && (value !== false || name.indexOf("-") != -1)) {
        dom.setAttribute(name, value);
      } else {
        dom.removeAttribute(name);
      }
    }
}
function eventProxy(e3) {
  this._listeners[e3.type + false](options_default.event ? options_default.event(e3) : e3);
}
function eventProxyCapture(e3) {
  this._listeners[e3.type + true](options_default.event ? options_default.event(e3) : e3);
}
var init_props = __esm({
  "js/preact/src/diff/props.js"() {
    "use strict";
    init_define_process();
    init_constants();
    init_options();
  }
});

// js/preact/src/diff/index.js
function diff(parentDom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, oldDom, isHydrating) {
  let tmp, newType = newVNode.type;
  if (newVNode.constructor !== void 0)
    return null;
  if (oldVNode._hydrating != null) {
    isHydrating = oldVNode._hydrating;
    oldDom = newVNode._dom = oldVNode._dom;
    newVNode._hydrating = null;
    excessDomChildren = [oldDom];
  }
  if (tmp = options_default._diff)
    tmp(newVNode);
  try {
    outer:
      if (typeof newType == "function") {
        let c4, isNew, oldProps, oldState, snapshot, clearProcessingException;
        let newProps = newVNode.props;
        tmp = newType.contextType;
        let provider = tmp && globalContext[tmp._id];
        let componentContext = tmp ? provider ? provider.props.value : tmp._defaultValue : globalContext;
        if (oldVNode._component) {
          c4 = newVNode._component = oldVNode._component;
          clearProcessingException = c4._processingException = c4._pendingError;
        } else {
          if ("prototype" in newType && newType.prototype.render) {
            newVNode._component = c4 = new newType(newProps, componentContext);
          } else {
            newVNode._component = c4 = new Component(newProps, componentContext);
            c4.constructor = newType;
            c4.render = doRender;
          }
          if (provider)
            provider.sub(c4);
          c4.props = newProps;
          if (!c4.state)
            c4.state = {};
          c4.context = componentContext;
          c4._globalContext = globalContext;
          isNew = c4._dirty = true;
          c4._renderCallbacks = [];
          c4._stateCallbacks = [];
        }
        if (c4._nextState == null) {
          c4._nextState = c4.state;
        }
        if (newType.getDerivedStateFromProps != null) {
          if (c4._nextState == c4.state) {
            c4._nextState = assign({}, c4._nextState);
          }
          assign(
            c4._nextState,
            newType.getDerivedStateFromProps(newProps, c4._nextState)
          );
        }
        oldProps = c4.props;
        oldState = c4.state;
        if (isNew) {
          if (newType.getDerivedStateFromProps == null && c4.componentWillMount != null) {
            c4.componentWillMount();
          }
          if (c4.componentDidMount != null) {
            c4._renderCallbacks.push(c4.componentDidMount);
          }
        } else {
          if (newType.getDerivedStateFromProps == null && newProps !== oldProps && c4.componentWillReceiveProps != null) {
            c4.componentWillReceiveProps(newProps, componentContext);
          }
          if (!c4._force && c4.shouldComponentUpdate != null && c4.shouldComponentUpdate(
            newProps,
            c4._nextState,
            componentContext
          ) === false || newVNode._original === oldVNode._original) {
            c4.props = newProps;
            c4.state = c4._nextState;
            if (newVNode._original !== oldVNode._original)
              c4._dirty = false;
            c4._vnode = newVNode;
            newVNode._dom = oldVNode._dom;
            newVNode._children = oldVNode._children;
            newVNode._children.forEach((vnode) => {
              if (vnode)
                vnode._parent = newVNode;
            });
            for (let i5 = 0; i5 < c4._stateCallbacks.length; i5++) {
              c4._renderCallbacks.push(c4._stateCallbacks[i5]);
            }
            c4._stateCallbacks = [];
            if (c4._renderCallbacks.length) {
              commitQueue.push(c4);
            }
            break outer;
          }
          if (c4.componentWillUpdate != null) {
            c4.componentWillUpdate(newProps, c4._nextState, componentContext);
          }
          if (c4.componentDidUpdate != null) {
            c4._renderCallbacks.push(() => {
              c4.componentDidUpdate(oldProps, oldState, snapshot);
            });
          }
        }
        c4.context = componentContext;
        c4.props = newProps;
        c4._vnode = newVNode;
        c4._parentDom = parentDom;
        let renderHook = options_default._render, count = 0;
        if ("prototype" in newType && newType.prototype.render) {
          c4.state = c4._nextState;
          c4._dirty = false;
          if (renderHook)
            renderHook(newVNode);
          tmp = c4.render(c4.props, c4.state, c4.context);
          for (let i5 = 0; i5 < c4._stateCallbacks.length; i5++) {
            c4._renderCallbacks.push(c4._stateCallbacks[i5]);
          }
          c4._stateCallbacks = [];
        } else {
          do {
            c4._dirty = false;
            if (renderHook)
              renderHook(newVNode);
            tmp = c4.render(c4.props, c4.state, c4.context);
            c4.state = c4._nextState;
          } while (c4._dirty && ++count < 25);
        }
        c4.state = c4._nextState;
        if (c4.getChildContext != null) {
          globalContext = assign(assign({}, globalContext), c4.getChildContext());
        }
        if (!isNew && c4.getSnapshotBeforeUpdate != null) {
          snapshot = c4.getSnapshotBeforeUpdate(oldProps, oldState);
        }
        let isTopLevelFragment = tmp != null && tmp.type === Fragment && tmp.key == null;
        let renderResult = isTopLevelFragment ? tmp.props.children : tmp;
        diffChildren(
          parentDom,
          Array.isArray(renderResult) ? renderResult : [renderResult],
          newVNode,
          oldVNode,
          globalContext,
          isSvg,
          excessDomChildren,
          commitQueue,
          oldDom,
          isHydrating
        );
        c4.base = newVNode._dom;
        newVNode._hydrating = null;
        if (c4._renderCallbacks.length) {
          commitQueue.push(c4);
        }
        if (clearProcessingException) {
          c4._pendingError = c4._processingException = null;
        }
        c4._force = false;
      } else if (excessDomChildren == null && newVNode._original === oldVNode._original) {
        newVNode._children = oldVNode._children;
        newVNode._dom = oldVNode._dom;
      } else {
        newVNode._dom = diffElementNodes(
          oldVNode._dom,
          newVNode,
          oldVNode,
          globalContext,
          isSvg,
          excessDomChildren,
          commitQueue,
          isHydrating
        );
      }
    if (tmp = options_default.diffed)
      tmp(newVNode);
  } catch (e3) {
    newVNode._original = null;
    if (isHydrating || excessDomChildren != null) {
      newVNode._dom = oldDom;
      newVNode._hydrating = !!isHydrating;
      excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
    }
    options_default._catchError(e3, newVNode, oldVNode);
  }
}
function commitRoot(commitQueue, root) {
  if (options_default._commit)
    options_default._commit(root, commitQueue);
  commitQueue.some((c4) => {
    try {
      commitQueue = c4._renderCallbacks;
      c4._renderCallbacks = [];
      commitQueue.some((cb) => {
        cb.call(c4);
      });
    } catch (e3) {
      options_default._catchError(e3, c4._vnode);
    }
  });
}
function diffElementNodes(dom, newVNode, oldVNode, globalContext, isSvg, excessDomChildren, commitQueue, isHydrating) {
  let oldProps = oldVNode.props;
  let newProps = newVNode.props;
  let nodeType = newVNode.type;
  let i5 = 0;
  if (nodeType === "svg")
    isSvg = true;
  if (excessDomChildren != null) {
    for (; i5 < excessDomChildren.length; i5++) {
      const child = excessDomChildren[i5];
      if (child && "setAttribute" in child === !!nodeType && (nodeType ? child.localName === nodeType : child.nodeType === 3)) {
        dom = child;
        excessDomChildren[i5] = null;
        break;
      }
    }
  }
  if (dom == null) {
    if (nodeType === null) {
      return document.createTextNode(newProps);
    }
    if (isSvg) {
      dom = document.createElementNS(
        "http://www.w3.org/2000/svg",
        nodeType
      );
    } else {
      dom = document.createElement(
        nodeType,
        newProps.is && newProps
      );
    }
    excessDomChildren = null;
    isHydrating = false;
  }
  if (nodeType === null) {
    if (oldProps !== newProps && (!isHydrating || dom.data !== newProps)) {
      dom.data = newProps;
    }
  } else {
    excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
    oldProps = oldVNode.props || EMPTY_OBJ;
    let oldHtml = oldProps.dangerouslySetInnerHTML;
    let newHtml = newProps.dangerouslySetInnerHTML;
    if (!isHydrating) {
      if (excessDomChildren != null) {
        oldProps = {};
        for (i5 = 0; i5 < dom.attributes.length; i5++) {
          oldProps[dom.attributes[i5].name] = dom.attributes[i5].value;
        }
      }
      if (newHtml || oldHtml) {
        if (!newHtml || (!oldHtml || newHtml.__html != oldHtml.__html) && newHtml.__html !== dom.innerHTML) {
          dom.innerHTML = newHtml && newHtml.__html || "";
        }
      }
    }
    diffProps(dom, newProps, oldProps, isSvg, isHydrating);
    if (newHtml) {
      newVNode._children = [];
    } else {
      i5 = newVNode.props.children;
      diffChildren(
        dom,
        Array.isArray(i5) ? i5 : [i5],
        newVNode,
        oldVNode,
        globalContext,
        isSvg && nodeType !== "foreignObject",
        excessDomChildren,
        commitQueue,
        excessDomChildren ? excessDomChildren[0] : oldVNode._children && getDomSibling(oldVNode, 0),
        isHydrating
      );
      if (excessDomChildren != null) {
        for (i5 = excessDomChildren.length; i5--; ) {
          if (excessDomChildren[i5] != null)
            removeNode(excessDomChildren[i5]);
        }
      }
    }
    if (!isHydrating) {
      if ("value" in newProps && (i5 = newProps.value) !== void 0 && (i5 !== dom.value || nodeType === "progress" && !i5 || nodeType === "option" && i5 !== oldProps.value)) {
        setProperty(dom, "value", i5, oldProps.value, false);
      }
      if ("checked" in newProps && (i5 = newProps.checked) !== void 0 && i5 !== dom.checked) {
        setProperty(dom, "checked", i5, oldProps.checked, false);
      }
    }
  }
  return dom;
}
function applyRef(ref, value, vnode) {
  try {
    if (typeof ref == "function")
      ref(value);
    else
      ref.current = value;
  } catch (e3) {
    options_default._catchError(e3, vnode);
  }
}
function unmount(vnode, parentVNode, skipRemove) {
  let r3;
  if (options_default.unmount)
    options_default.unmount(vnode);
  if (r3 = vnode.ref) {
    if (!r3.current || r3.current === vnode._dom) {
      applyRef(r3, null, parentVNode);
    }
  }
  if ((r3 = vnode._component) != null) {
    if (r3.componentWillUnmount) {
      try {
        r3.componentWillUnmount();
      } catch (e3) {
        options_default._catchError(e3, parentVNode);
      }
    }
    r3.base = r3._parentDom = null;
    vnode._component = void 0;
  }
  if (r3 = vnode._children) {
    for (let i5 = 0; i5 < r3.length; i5++) {
      if (r3[i5]) {
        unmount(
          r3[i5],
          parentVNode,
          skipRemove || typeof vnode.type !== "function"
        );
      }
    }
  }
  if (!skipRemove && vnode._dom != null) {
    removeNode(vnode._dom);
  }
  vnode._parent = vnode._dom = vnode._nextDom = void 0;
}
function doRender(props, state, context) {
  return this.constructor(props, context);
}
var init_diff = __esm({
  "js/preact/src/diff/index.js"() {
    "use strict";
    init_define_process();
    init_constants();
    init_component();
    init_create_element();
    init_children();
    init_props();
    init_util();
    init_options();
  }
});

// js/preact/src/component.js
function Component(props, context) {
  this.props = props;
  this.context = context;
}
function getDomSibling(vnode, childIndex) {
  if (childIndex == null) {
    return vnode._parent ? getDomSibling(vnode._parent, vnode._parent._children.indexOf(vnode) + 1) : null;
  }
  let sibling;
  for (; childIndex < vnode._children.length; childIndex++) {
    sibling = vnode._children[childIndex];
    if (sibling != null && sibling._dom != null) {
      return sibling._dom;
    }
  }
  return typeof vnode.type == "function" ? getDomSibling(vnode) : null;
}
function renderComponent(component) {
  let vnode = component._vnode, oldDom = vnode._dom, parentDom = component._parentDom;
  if (parentDom) {
    let commitQueue = [];
    const oldVNode = assign({}, vnode);
    oldVNode._original = vnode._original + 1;
    diff(
      parentDom,
      vnode,
      oldVNode,
      component._globalContext,
      parentDom.ownerSVGElement !== void 0,
      vnode._hydrating != null ? [oldDom] : null,
      commitQueue,
      oldDom == null ? getDomSibling(vnode) : oldDom,
      vnode._hydrating
    );
    commitRoot(commitQueue, vnode);
    if (vnode._dom != oldDom) {
      updateParentDomPointers(vnode);
    }
  }
}
function updateParentDomPointers(vnode) {
  if ((vnode = vnode._parent) != null && vnode._component != null) {
    vnode._dom = vnode._component.base = null;
    for (let i5 = 0; i5 < vnode._children.length; i5++) {
      let child = vnode._children[i5];
      if (child != null && child._dom != null) {
        vnode._dom = vnode._component.base = child._dom;
        break;
      }
    }
    return updateParentDomPointers(vnode);
  }
}
function enqueueRender(c4) {
  if (!c4._dirty && (c4._dirty = true) && rerenderQueue.push(c4) && !process._rerenderCount++ || prevDebounce !== options_default.debounceRendering) {
    prevDebounce = options_default.debounceRendering;
    (prevDebounce || setTimeout)(process);
  }
}
function process() {
  let queue;
  while (process._rerenderCount = rerenderQueue.length) {
    queue = rerenderQueue.sort((a4, b4) => a4._vnode._depth - b4._vnode._depth);
    rerenderQueue = [];
    queue.some((c4) => {
      if (c4._dirty)
        renderComponent(c4);
    });
  }
}
var rerenderQueue, prevDebounce;
var init_component = __esm({
  "js/preact/src/component.js"() {
    "use strict";
    init_define_process();
    init_util();
    init_diff();
    init_options();
    init_create_element();
    Component.prototype.setState = function(update, callback) {
      let s4;
      if (this._nextState != null && this._nextState !== this.state) {
        s4 = this._nextState;
      } else {
        s4 = this._nextState = assign({}, this.state);
      }
      if (typeof update == "function") {
        update = update(assign({}, s4), this.props);
      }
      if (update) {
        assign(s4, update);
      }
      if (update == null)
        return;
      if (this._vnode) {
        if (callback) {
          this._stateCallbacks.push(callback);
        }
        enqueueRender(this);
      }
    };
    Component.prototype.forceUpdate = function(callback) {
      if (this._vnode) {
        this._force = true;
        if (callback)
          this._renderCallbacks.push(callback);
        enqueueRender(this);
      }
    };
    Component.prototype.render = Fragment;
    rerenderQueue = [];
    process._rerenderCount = 0;
  }
});

// js/preact/src/create-context.js
function createContext(defaultValue, contextId) {
  contextId = "__cC" + i4++;
  const context = {
    _id: contextId,
    _defaultValue: defaultValue,
    Consumer(props, contextValue) {
      return props.children(contextValue);
    },
    Provider(props) {
      if (!this.getChildContext) {
        let subs = [];
        let ctx = {};
        ctx[contextId] = this;
        this.getChildContext = () => ctx;
        this.shouldComponentUpdate = function(_props) {
          if (this.props.value !== _props.value) {
            subs.some(enqueueRender);
          }
        };
        this.sub = (c4) => {
          subs.push(c4);
          let old = c4.componentWillUnmount;
          c4.componentWillUnmount = () => {
            subs.splice(subs.indexOf(c4), 1);
            if (old)
              old.call(c4);
          };
        };
      }
      return props.children;
    }
  };
  return context.Provider._contextRef = context.Consumer.contextType = context;
}
var i4;
var init_create_context = __esm({
  "js/preact/src/create-context.js"() {
    "use strict";
    init_define_process();
    init_component();
    i4 = 0;
  }
});

// js/preact/compat/client.mjs
function createRoot(container) {
  return {
    render(children) {
      Z(children, container);
    },
    unmount() {
      cn(container);
    }
  };
}
function hydrateRoot(container, children) {
  Y(children, container);
  return createRoot(container);
}
var init_client = __esm({
  "js/preact/compat/client.mjs"() {
    "use strict";
    init_define_process();
    init_compat_module();
  }
});

// js/preact/src/render.js
function render(vnode, parentDom, replaceNode) {
  if (options_default._root)
    options_default._root(vnode, parentDom);
  let isHydrating = typeof replaceNode === "function";
  let oldVNode = isHydrating ? null : replaceNode && replaceNode._children || parentDom._children;
  vnode = (!isHydrating && replaceNode || parentDom)._children = createElement(Fragment, null, [vnode]);
  let commitQueue = [];
  diff(
    parentDom,
    vnode,
    oldVNode || EMPTY_OBJ,
    EMPTY_OBJ,
    parentDom.ownerSVGElement !== void 0,
    !isHydrating && replaceNode ? [replaceNode] : oldVNode ? null : parentDom.firstChild ? slice.call(parentDom.childNodes) : null,
    commitQueue,
    !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode._dom : parentDom.firstChild,
    isHydrating
  );
  commitRoot(commitQueue, vnode);
}
function hydrate(vnode, parentDom) {
  render(vnode, parentDom, hydrate);
}
var init_render = __esm({
  "js/preact/src/render.js"() {
    "use strict";
    init_define_process();
    init_constants();
    init_diff();
    init_create_element();
    init_options();
    init_util();
  }
});

// js/preact/src/clone-element.js
function cloneElement(vnode, props, children) {
  let normalizedProps = assign({}, vnode.props), key, ref, i5;
  for (i5 in props) {
    if (i5 == "key")
      key = props[i5];
    else if (i5 == "ref")
      ref = props[i5];
    else
      normalizedProps[i5] = props[i5];
  }
  if (arguments.length > 2) {
    normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
  }
  return createVNode(
    vnode.type,
    normalizedProps,
    key || vnode.key,
    ref || vnode.ref,
    null
  );
}
var init_clone_element = __esm({
  "js/preact/src/clone-element.js"() {
    "use strict";
    init_define_process();
    init_util();
    init_create_element();
  }
});

// js/preact/src/index.js
var src_exports = {};
__export(src_exports, {
  Component: () => Component,
  Fragment: () => Fragment,
  cloneElement: () => cloneElement,
  createContext: () => createContext,
  createElement: () => createElement,
  createRef: () => createRef,
  h: () => createElement,
  hydrate: () => hydrate,
  isValidElement: () => isValidElement,
  options: () => options_default,
  render: () => render,
  toChildArray: () => toChildArray
});
var init_src = __esm({
  "js/preact/src/index.js"() {
    "use strict";
    init_define_process();
    init_render();
    init_create_element();
    init_component();
    init_clone_element();
    init_create_context();
    init_children();
    init_options();
  }
});

// js/react-preact.ts
var react_preact_exports = {};
__export(react_preact_exports, {
  Children: () => Children,
  Fragment: () => Fragment2,
  PureComponent: () => PureComponent,
  React: () => React,
  StrictMode: () => StrictMode,
  Suspense: () => Suspense,
  SuspenseList: () => SuspenseList,
  cloneElement: () => cloneElement2,
  createContext: () => createContext,
  createElement: () => createElement2,
  createFactory: () => createFactory,
  createPortal: () => createPortal,
  createRef: () => createRef2,
  createRoot: () => createRoot,
  default: () => react_preact_default,
  findDOMNode: () => findDOMNode,
  flushSync: () => flushSync,
  forwardRef: () => forwardRef,
  hydrateRoot: () => hydrateRoot,
  isValidElement: () => isValidElement2,
  jsx: () => o4,
  jsxs: () => o4,
  lazy: () => lazy,
  memo: () => memo,
  renderToString: () => S2,
  startTransition: () => startTransition,
  unstable_batchedUpdates: () => unstable_batchedUpdates,
  useCallback: () => useCallback,
  useContext: () => useContext,
  useDebugValue: () => useDebugValue,
  useEffect: () => useEffect,
  useId: () => useId,
  useImperativeHandle: () => useImperativeHandle,
  useInsertionEffect: () => useInsertionEffect,
  useLayoutEffect: () => useLayoutEffect,
  useMemo: () => useMemo,
  useReducer: () => useReducer,
  useRef: () => useRef,
  useState: () => useState,
  version: () => version
});
var React, createPortal, findDOMNode, flushSync, startTransition, SuspenseList, unstable_batchedUpdates, cloneElement2, createElement2, createFactory, useInsertionEffect, createRef2, Fragment2, useCallback, useContext, useDebugValue, isValidElement2, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, lazy, Suspense, StrictMode, useId, forwardRef, memo, Children, PureComponent, version, react_preact_default;
var init_react_preact = __esm({
  "js/react-preact.ts"() {
    init_define_process();
    init_dist();
    init_jsx_runtime();
    init_create_context();
    init_client();
    init_component();
    init_src();
    init_compat_module();
    React = __spreadProps(__spreadValues(__spreadValues({}, src_exports), compat_module_exports), { Component });
    Object.assign(React, { default: React });
    ({
      createPortal,
      findDOMNode,
      flushSync,
      startTransition,
      SuspenseList,
      unstable_batchedUpdates,
      cloneElement: cloneElement2,
      createElement: createElement2,
      createFactory,
      useInsertionEffect,
      createRef: createRef2,
      Fragment: Fragment2,
      useCallback,
      useContext,
      useDebugValue,
      isValidElement: isValidElement2,
      useEffect,
      useImperativeHandle,
      useLayoutEffect,
      useMemo,
      useReducer,
      useRef,
      useState,
      lazy,
      Suspense,
      StrictMode,
      useId,
      forwardRef,
      memo,
      Children,
      PureComponent,
      version
    } = React);
    react_preact_default = React;
  }
});

export {
  __spreadValues,
  __spreadProps,
  __objRest,
  __commonJS,
  __toESM,
  __toCommonJS,
  init_define_process,
  define_process_default,
  S2 as S,
  o4 as o,
  createContext,
  createRoot,
  hydrateRoot,
  React,
  createPortal,
  findDOMNode,
  flushSync,
  startTransition,
  SuspenseList,
  unstable_batchedUpdates,
  cloneElement2 as cloneElement,
  createElement2 as createElement,
  createFactory,
  useInsertionEffect,
  createRef2 as createRef,
  Fragment2 as Fragment,
  useCallback,
  useContext,
  useDebugValue,
  isValidElement2 as isValidElement,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  lazy,
  Suspense,
  StrictMode,
  useId,
  forwardRef,
  memo,
  Children,
  PureComponent,
  version,
  react_preact_default,
  react_preact_exports,
  init_react_preact
};
