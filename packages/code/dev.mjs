var ib = Object.create;
var pr = Object.defineProperty;
var ab = Object.getOwnPropertyDescriptor;
var lb = Object.getOwnPropertyNames;
var pb = Object.getPrototypeOf, cb = Object.prototype.hasOwnProperty;
var Qn = (e) => pr(e, "__esModule", { value: !0 });
var d = (e, t) => () => (e && (t = e(e = 0)), t);
var io = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  lt = (e, t) => {
    Qn(e);
    for (var r in t) pr(e, r, { get: t[r], enumerable: !0 });
  },
  ub = (e, t, r) => {
    if (t && typeof t == "object" || typeof t == "function") {
      for (let o of lb(t)) {
        !cb.call(e, o) && o !== "default" &&
          pr(e, o, {
            get: () => t[o],
            enumerable: !(r = ab(t, o)) || r.enumerable,
          });
      }
    }
    return e;
  },
  mb = (e) =>
    ub(
      Qn(pr(
        e != null
          ? ib(pb(e))
          : {},
        "default",
        e && e.__esModule && "default" in e
          ? { get: () => e.default, enumerable: !0 }
          : { value: e, enumerable: !0 },
      )),
      e,
    );
var db,
  pt,
  Xn = d(() => {
    db = { black: "#000", white: "#fff" }, pt = db;
  });
var fb,
  qe,
  Yn = d(() => {
    fb = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
    }, qe = fb;
  });
var hb,
  Ke,
  Zn = d(() => {
    hb = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff",
    }, Ke = hb;
  });
var bb,
  Je,
  ei = d(() => {
    bb = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
    }, Je = bb;
  });
var gb,
  Qe,
  ti = d(() => {
    gb = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea",
    }, Qe = gb;
  });
var yb,
  Xe,
  ri = d(() => {
    yb = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
    }, Xe = yb;
  });
var xb,
  ct,
  oi = d(() => {
    xb = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
    }, ct = xb;
  });
var kb,
  si,
  ni = d(() => {
    kb = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    }, si = kb;
  });
import Cb from "https://unpkg.com/@emotion/styled@11.3.0/dist/emotion-styled.browser.esm.js";
import {
  css as ii,
  keyframes as ut,
  ThemeContext as E5,
} from "https://unpkg.com/@emotion/react@11.5.0/dist/emotion-react.browser.esm.js";
function ao(e, t) {
  return Cb(e, t);
}
var lo = d(() => {});
import vb from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
function cr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function te(e, t, r = { clone: !0 }) {
  let o = r.clone ? vb({}, e) : e;
  return cr(e) && cr(t) && Object.keys(t).forEach((s) => {
    s !== "__proto__" &&
      (cr(t[s]) && s in e && cr(e[s]) ? o[s] = te(e[s], t[s], r) : o[s] = t[s]);
  }),
    o;
}
var ai = d(() => {});
function ke(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1) {
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  }
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var po = d(() => {});
function Ce(e) {
  if (typeof e != "string") throw new Error(ke(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var li = d(() => {
  po();
});
function ur(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
var pi = d(() => {});
import {
  useEffect as Pb,
  useLayoutEffect as wb,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
var Tb,
  ci,
  ui = d(() => {
    Tb = typeof window != "undefined" ? wb : Pb, ci = Tb;
  });
import {
  useCallback as Mb,
  useRef as Sb,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
function mr(e) {
  let t = Sb(e);
  return ci(() => {
    t.current = e;
  }),
    Mb((...r) => (0, t.current)(...r), []);
}
var mi = d(() => {
  ui();
});
import { useMemo as Ub } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
function dr(e, t) {
  return Ub(() =>
    e == null && t == null ? null : (r) => {
      ur(e, r), ur(t, r);
    }, [e, t]);
}
var di = d(() => {
  pi();
});
import {
  useCallback as Lb,
  useRef as Ob,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
function jb(e) {
  let { type: t, tagName: r } = e;
  return !!(r === "INPUT" && Ib[t] && !e.readOnly ||
    r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Ab(e) {
  e.metaKey || e.altKey || e.ctrlKey || (fr = !0);
}
function uo() {
  fr = !1;
}
function Rb() {
  this.visibilityState === "hidden" && co && (fr = !0);
}
function Eb(e) {
  e.addEventListener("keydown", Ab, !0),
    e.addEventListener("mousedown", uo, !0),
    e.addEventListener("pointerdown", uo, !0),
    e.addEventListener("touchstart", uo, !0),
    e.addEventListener("visibilitychange", Rb, !0);
}
function Bb(e) {
  let { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch (r) {}
  return fr || jb(t);
}
function hr() {
  let e = Lb((s) => {
      s != null && Eb(s.ownerDocument);
    }, []),
    t = Ob(!1);
  function r() {
    return t.current
      ? (co = !0,
        window.clearTimeout(fi),
        fi = window.setTimeout(() => {
          co = !1;
        }, 100),
        t.current = !1,
        !0)
      : !1;
  }
  function o(s) {
    return Bb(s) ? (t.current = !0, !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: o, onBlur: r, ref: e };
}
var fr,
  co,
  fi,
  Ib,
  hi = d(() => {
    fr = !0,
      co = !1,
      fi = null,
      Ib = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0,
      };
  });
var ne = d(() => {
  ai();
  po();
  li();
  mi();
  di();
  hi();
});
function _b(e, t) {
  return t ? te(e, t, { clone: !1 }) : e;
}
var Be,
  br = d(() => {
    ne();
    Be = _b;
  });
import ik from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import "https://esm.sh/prop-types";
function ie(e, t, r) {
  let o = e.theme || {};
  if (Array.isArray(t)) {
    let i = o.breakpoints || bi;
    return t.reduce((l, c, a) => (l[i.up(i.keys[a])] = r(t[a]), l), {});
  }
  if (typeof t == "object") {
    let i = o.breakpoints || bi;
    return Object.keys(t).reduce((l, c) => {
      if (Object.keys(i.values || gr).indexOf(c) !== -1) {
        let a = i.up(c);
        l[a] = r(t[c], c);
      } else {
        let a = c;
        l[a] = t[a];
      }
      return l;
    }, {});
  }
  return r(t);
}
function gi(e = {}) {
  var t;
  return (e == null || (t = e.keys) == null ? void 0 : t.reduce((o, s) => {
    let i = e.up(s);
    return o[i] = {}, o;
  }, {})) || {};
}
function yi(e, t) {
  return e.reduce((r, o) => {
    let s = r[o];
    return Object.keys(s).length === 0 && delete r[o], r;
  }, t);
}
var gr,
  bi,
  Ye = d(() => {
    gr = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      bi = {
        keys: ["xs", "sm", "md", "lg", "xl"],
        up: (e) => `@media (min-width:${gr[e]}px)`,
      };
  });
function yr(e, t) {
  return !t || typeof t != "string"
    ? null
    : t.split(".").reduce((r, o) => r && r[o] ? r[o] : null, e);
}
function xi(e, t, r, o = r) {
  let s;
  return typeof e == "function"
    ? s = e(r)
    : Array.isArray(e)
    ? s = e[r] || o
    : s = yr(e, r) || o,
    t && (s = t(s)),
    s;
}
function Db(e) {
  let { prop: t, cssProperty: r = e.prop, themeKey: o, transform: s } = e,
    i = (l) => {
      if (l[t] == null) return null;
      let c = l[t], a = l.theme, n = yr(a, o) || {};
      return ie(l, c, (u) => {
        let f = xi(n, s, u);
        return u === f && typeof u == "string" &&
          (f = xi(n, s, `${t}${u === "default" ? "" : Ce(u)}`, u)),
          r === !1 ? f : { [r]: f };
      });
    };
  return i.propTypes = {}, i.filterProps = [t], i;
}
var M,
  he = d(() => {
    ne();
    Ye();
    M = Db;
  });
function zb(...e) {
  let t = e.reduce((o, s) => (s.filterProps.forEach((i) => {
      o[i] = s;
    }),
      o), {}),
    r = (o) => Object.keys(o).reduce((s, i) => t[i] ? Be(s, t[i](o)) : s, {});
  return r.propTypes = {},
    r.filterProps = e.reduce((o, s) => o.concat(s.filterProps), []),
    r;
}
var re,
  Me = d(() => {
    br();
    re = zb;
  });
function mo(e) {
  let t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
var ki = d(() => {});
function Ze(e, t, r, o) {
  let s = yr(e, t) || r;
  return typeof s == "number"
    ? (i) => typeof i == "string" ? i : s * i
    : Array.isArray(s)
    ? (i) => typeof i == "string" ? i : s[i]
    : typeof s == "function"
    ? s
    : () => {};
}
function bo(e) {
  return Ze(e, "spacing", 8, "spacing");
}
function et(e, t) {
  if (typeof t == "string" || t == null) return t;
  let r = Math.abs(t), o = e(r);
  return t >= 0 ? o : typeof o == "number" ? -o : `-${o}`;
}
function Vb(e, t) {
  return (r) => e.reduce((o, s) => (o[s] = et(t, r), o), {});
}
function Wb(e, t, r, o) {
  if (t.indexOf(r) === -1) return null;
  let s = $b(r), i = Vb(s, o), l = e[r];
  return ie(e, l, i);
}
function go(e, t) {
  let r = bo(e.theme);
  return Object.keys(e).map((o) => Wb(e, t, o, r)).reduce(Be, {});
}
function Ti(e) {
  return go(e, fo);
}
function wi(e) {
  return go(e, ho);
}
function yo(e) {
  return go(e, vi);
}
var Nb,
  Fb,
  Ci,
  $b,
  fo,
  ho,
  vi,
  xo,
  mt = d(() => {
    Ye();
    he();
    br();
    ki();
    Nb = { m: "margin", p: "padding" },
      Fb = {
        t: "Top",
        r: "Right",
        b: "Bottom",
        l: "Left",
        x: ["Left", "Right"],
        y: ["Top", "Bottom"],
      },
      Ci = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
      $b = mo((e) => {
        if (e.length > 2) {
          if (Ci[e]) e = Ci[e];
          else return [e];
        }
        let [t, r] = e.split(""), o = Nb[t], s = Fb[r] || "";
        return Array.isArray(s) ? s.map((i) => o + i) : [o + s];
      }),
      fo = [
        "m",
        "mt",
        "mr",
        "mb",
        "ml",
        "mx",
        "my",
        "margin",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "marginX",
        "marginY",
        "marginInline",
        "marginInlineStart",
        "marginInlineEnd",
        "marginBlock",
        "marginBlockStart",
        "marginBlockEnd",
      ],
      ho = [
        "p",
        "pt",
        "pr",
        "pb",
        "pl",
        "px",
        "py",
        "padding",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "paddingX",
        "paddingY",
        "paddingInline",
        "paddingInlineStart",
        "paddingInlineEnd",
        "paddingBlock",
        "paddingBlockStart",
        "paddingBlockEnd",
      ],
      vi = [...fo, ...ho];
    Ti.propTypes = {};
    Ti.filterProps = fo;
    wi.propTypes = {};
    wi.filterProps = ho;
    yo.propTypes = {};
    yo.filterProps = vi;
    xo = yo;
  });
function Mt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
var Hb,
  Gb,
  qb,
  Kb,
  Jb,
  Qb,
  Xb,
  Yb,
  Zb,
  eg,
  ko,
  tg,
  Co,
  vo = d(() => {
    he();
    Me();
    mt();
    Ye();
    Hb = M({ prop: "border", themeKey: "borders", transform: Mt }),
      Gb = M({ prop: "borderTop", themeKey: "borders", transform: Mt }),
      qb = M({ prop: "borderRight", themeKey: "borders", transform: Mt }),
      Kb = M({ prop: "borderBottom", themeKey: "borders", transform: Mt }),
      Jb = M({ prop: "borderLeft", themeKey: "borders", transform: Mt }),
      Qb = M({ prop: "borderColor", themeKey: "palette" }),
      Xb = M({ prop: "borderTopColor", themeKey: "palette" }),
      Yb = M({ prop: "borderRightColor", themeKey: "palette" }),
      Zb = M({ prop: "borderBottomColor", themeKey: "palette" }),
      eg = M({ prop: "borderLeftColor", themeKey: "palette" }),
      ko = (e) => {
        if (e.borderRadius !== void 0 && e.borderRadius !== null) {
          let t = Ze(e.theme, "shape.borderRadius", 4, "borderRadius"),
            r = (o) => ({ borderRadius: et(t, o) });
          return ie(e, e.borderRadius, r);
        }
        return null;
      };
    ko.propTypes = {};
    ko.filterProps = ["borderRadius"];
    tg = re(Hb, Gb, qb, Kb, Jb, Qb, Xb, Yb, Zb, eg, ko), Co = tg;
  });
var rg,
  og,
  sg,
  ng,
  ig,
  ag,
  To,
  Pi = d(() => {
    he();
    Me();
    rg = M({
      prop: "displayPrint",
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    }),
      og = M({ prop: "display" }),
      sg = M({ prop: "overflow" }),
      ng = M({ prop: "textOverflow" }),
      ig = M({ prop: "visibility" }),
      ag = M({ prop: "whiteSpace" }),
      To = re(rg, og, sg, ng, ig, ag);
  });
var lg,
  pg,
  cg,
  ug,
  mg,
  dg,
  fg,
  hg,
  bg,
  gg,
  yg,
  xg,
  kg,
  Cg,
  wo,
  Po = d(() => {
    he();
    Me();
    lg = M({ prop: "flexBasis" }),
      pg = M({ prop: "flexDirection" }),
      cg = M({ prop: "flexWrap" }),
      ug = M({ prop: "justifyContent" }),
      mg = M({ prop: "alignItems" }),
      dg = M({ prop: "alignContent" }),
      fg = M({ prop: "order" }),
      hg = M({ prop: "flex" }),
      bg = M({ prop: "flexGrow" }),
      gg = M({ prop: "flexShrink" }),
      yg = M({ prop: "alignSelf" }),
      xg = M({ prop: "justifyItems" }),
      kg = M({ prop: "justifySelf" }),
      Cg = re(lg, pg, cg, ug, mg, dg, fg, hg, bg, gg, yg, xg, kg),
      wo = Cg;
  });
var So,
  Mo,
  Uo,
  vg,
  Tg,
  wg,
  Pg,
  Sg,
  Mg,
  Ug,
  Ig,
  jg,
  Ag,
  Io,
  jo = d(() => {
    he();
    Me();
    mt();
    Ye();
    So = (e) => {
      if (e.gap !== void 0 && e.gap !== null) {
        let t = Ze(e.theme, "spacing", 8, "gap"),
          r = (o) => ({ gap: et(t, o) });
        return ie(e, e.gap, r);
      }
      return null;
    };
    So.propTypes = {};
    So.filterProps = ["gap"];
    Mo = (e) => {
      if (e.columnGap !== void 0 && e.columnGap !== null) {
        let t = Ze(e.theme, "spacing", 8, "columnGap"),
          r = (o) => ({ columnGap: et(t, o) });
        return ie(e, e.columnGap, r);
      }
      return null;
    };
    Mo.propTypes = {};
    Mo.filterProps = ["columnGap"];
    Uo = (e) => {
      if (e.rowGap !== void 0 && e.rowGap !== null) {
        let t = Ze(e.theme, "spacing", 8, "rowGap"),
          r = (o) => ({ rowGap: et(t, o) });
        return ie(e, e.rowGap, r);
      }
      return null;
    };
    Uo.propTypes = {};
    Uo.filterProps = ["rowGap"];
    vg = M({ prop: "gridColumn" }),
      Tg = M({ prop: "gridRow" }),
      wg = M({ prop: "gridAutoFlow" }),
      Pg = M({ prop: "gridAutoColumns" }),
      Sg = M({ prop: "gridAutoRows" }),
      Mg = M({ prop: "gridTemplateColumns" }),
      Ug = M({ prop: "gridTemplateRows" }),
      Ig = M({ prop: "gridTemplateAreas" }),
      jg = M({ prop: "gridArea" }),
      Ag = re(So, Mo, Uo, vg, Tg, wg, Pg, Sg, Mg, Ug, Ig, jg),
      Io = Ag;
  });
var Rg,
  Eg,
  Bg,
  Lg,
  Ao,
  Ro = d(() => {
    he();
    Me();
    Rg = M({ prop: "color", themeKey: "palette" }),
      Eg = M({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
      }),
      Bg = M({ prop: "backgroundColor", themeKey: "palette" }),
      Lg = re(Rg, Eg, Bg),
      Ao = Lg;
  });
var Og,
  _g,
  Dg,
  zg,
  Ng,
  Fg,
  Eo,
  Bo = d(() => {
    he();
    Me();
    Og = M({ prop: "position" }),
      _g = M({ prop: "zIndex", themeKey: "zIndex" }),
      Dg = M({ prop: "top" }),
      zg = M({ prop: "right" }),
      Ng = M({ prop: "bottom" }),
      Fg = M({ prop: "left" }),
      Eo = re(Og, _g, Dg, zg, Ng, Fg);
  });
var $g,
  Lo,
  Si = d(() => {
    he();
    $g = M({ prop: "boxShadow", themeKey: "shadows" }), Lo = $g;
  });
function Le(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
var Vg,
  Mi,
  Wg,
  Hg,
  Gg,
  qg,
  Kk,
  Jk,
  Kg,
  Jg,
  Oo,
  _o = d(() => {
    he();
    Me();
    Ye();
    Vg = M({ prop: "width", transform: Le }),
      Mi = (e) => {
        if (e.maxWidth !== void 0 && e.maxWidth !== null) {
          let t = (r) => {
            var o, s, i;
            return {
              maxWidth:
                ((o = e.theme) == null || (s = o.breakpoints) == null ||
                    (i = s.values) == null
                  ? void 0
                  : i[r]) || gr[r] || Le(r),
            };
          };
          return ie(e, e.maxWidth, t);
        }
        return null;
      };
    Mi.filterProps = ["maxWidth"];
    Wg = M({ prop: "minWidth", transform: Le }),
      Hg = M({ prop: "height", transform: Le }),
      Gg = M({ prop: "maxHeight", transform: Le }),
      qg = M({ prop: "minHeight", transform: Le }),
      Kk = M({ prop: "size", cssProperty: "width", transform: Le }),
      Jk = M({ prop: "size", cssProperty: "height", transform: Le }),
      Kg = M({ prop: "boxSizing" }),
      Jg = re(Vg, Mi, Wg, Hg, Gg, qg, Kg),
      Oo = Jg;
  });
var Qg,
  Xg,
  Yg,
  Zg,
  ey,
  ty,
  ry,
  oy,
  sy,
  Do,
  zo = d(() => {
    he();
    Me();
    Qg = M({ prop: "fontFamily", themeKey: "typography" }),
      Xg = M({ prop: "fontSize", themeKey: "typography" }),
      Yg = M({ prop: "fontStyle", themeKey: "typography" }),
      Zg = M({ prop: "fontWeight", themeKey: "typography" }),
      ey = M({ prop: "letterSpacing" }),
      ty = M({ prop: "lineHeight" }),
      ry = M({ prop: "textAlign" }),
      oy = M({ prop: "typography", cssProperty: !1, themeKey: "typography" }),
      sy = re(oy, Qg, Xg, Yg, Zg, ey, ty, ry),
      Do = sy;
  });
function iy(e, t, r) {
  let o = { [e]: t, theme: r }, s = No[e];
  return s ? s(o) : { [e]: t };
}
var Ui,
  ny,
  No,
  Fo,
  Ii = d(() => {
    vo();
    Pi();
    Po();
    jo();
    Bo();
    Ro();
    Si();
    _o();
    mt();
    zo();
    Ui = {
      borders: Co.filterProps,
      display: To.filterProps,
      flexbox: wo.filterProps,
      grid: Io.filterProps,
      positions: Eo.filterProps,
      palette: Ao.filterProps,
      shadows: Lo.filterProps,
      sizing: Oo.filterProps,
      spacing: xo.filterProps,
      typography: Do.filterProps,
    },
      ny = {
        borders: Co,
        display: To,
        flexbox: wo,
        grid: Io,
        positions: Eo,
        palette: Ao,
        shadows: Lo,
        sizing: Oo,
        spacing: xo,
        typography: Do,
      },
      No = Object.keys(Ui).reduce((e, t) => (Ui[t].forEach((r) => {
        e[r] = ny[t];
      }),
        e), {});
    Fo = iy;
  });
function ay(...e) {
  let t = e.reduce((o, s) => o.concat(Object.keys(s)), []), r = new Set(t);
  return e.every((o) => r.size === Object.keys(o).length);
}
function ly(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $o(e) {
  let { sx: t, theme: r = {} } = e || {};
  if (!t) return null;
  let o = t;
  if (typeof t == "function") o = t(r);
  else if (typeof t != "object") return t;
  let s = gi(r.breakpoints), i = Object.keys(s), l = s;
  return Object.keys(o).forEach((c) => {
    let a = ly(o[c], r);
    if (typeof a == "object") {
      if (No[c]) l = Be(l, Fo(c, a, r));
      else {
        let n = ie({ theme: r }, a, (p) => ({ [c]: p }));
        ay(n, a) ? l[c] = $o({ sx: a, theme: r }) : l = Be(l, n);
      }
    } else l = Be(l, Fo(c, a, r));
  }),
    yi(i, l);
}
var Vo,
  ji = d(() => {
    br();
    Ii();
    Ye();
    $o.filterProps = ["sx"];
    Vo = $o;
  });
var Ai = d(() => {
  ji();
});
function Ri(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") {
    if (Array.isArray(e)) {
      for (t = 0; t < e.length; t++) {
        e[t] && (r = Ri(e[t])) && (o && (o += " "), o += r);
      }
    } else for (t in e) e[t] && (o && (o += " "), o += t);
  }
  return o;
}
function O() {
  for (var e = 0, t, r, o = ""; e < arguments.length;) {
    (t = arguments[e++]) && (r = Ri(t)) && (o && (o += " "), o += r);
  }
  return o;
}
var oe = d(() => {});
import py from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import cy from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
function Wo(e) {
  let {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = "px",
      step: o = 5,
    } = e,
    s = cy(e, uy),
    i = Object.keys(t);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${
      (typeof t[p] == "number" ? t[p] : p) - o / 100
    }${r})`;
  }
  function a(p, u) {
    let f = i.indexOf(u);
    return `@media (min-width:${
      typeof t[p] == "number" ? t[p] : p
    }${r}) and (max-width:${
      (f !== -1 && typeof t[i[f]] == "number" ? t[i[f]] : u) - o / 100
    }${r})`;
  }
  function n(p) {
    return i.indexOf(p) + 1 < i.length ? a(p, i[i.indexOf(p) + 1]) : l(p);
  }
  return py({
    keys: i,
    values: t,
    up: l,
    down: c,
    between: a,
    only: n,
    unit: r,
  }, s);
}
var uy,
  Ei = d(() => {
    uy = ["values", "unit", "step"];
  });
var my,
  Bi,
  Li = d(() => {
    my = { borderRadius: 4 }, Bi = my;
  });
function Ho(e = 8) {
  if (e.mui) return e;
  let t = bo({ spacing: e }),
    r = (...o) =>
      (o.length === 0 ? [1] : o).map((i) => {
        let l = t(i);
        return typeof l == "number" ? `${l}px` : l;
      }).join(" ");
  return r.mui = !0, r;
}
var Oi = d(() => {
  mt();
});
import _i from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import dy from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
function hy(e = {}, ...t) {
  let { breakpoints: r = {}, palette: o = {}, spacing: s, shape: i = {} } = e,
    l = dy(e, fy),
    c = Wo(r),
    a = Ho(s),
    n = te({
      breakpoints: c,
      direction: "ltr",
      components: {},
      palette: _i({ mode: "light" }, o),
      spacing: a,
      shape: _i({}, Bi, i),
    }, l);
  return n = t.reduce((p, u) => te(p, u), n), n;
}
var fy,
  Oe,
  Di = d(() => {
    ne();
    Ei();
    Li();
    Oi();
    fy = ["breakpoints", "palette", "spacing", "shape"];
    Oe = hy;
  });
var xr = d(() => {
  Di();
});
import { createContext as gy } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
var by,
  zi,
  Ni = d(() => {
    by = gy(null), zi = by;
  });
import {
  useContext as yy,
  useDebugValue as DC,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
function Ut() {
  return yy(zi);
}
var Fi = d(() => {
  Ni();
});
var $i = d(() => {
  Fi();
});
var Vi = d(() => {});
var Wi = d(() => {
  Vi();
  $i();
});
function xy(e) {
  return Object.keys(e).length === 0;
}
function ky(e = null) {
  let t = Ut();
  return !t || xy(t) ? e : t;
}
var Hi,
  Gi = d(() => {
    Wi();
    Hi = ky;
  });
function vy(e = Cy) {
  return Hi(e);
}
var Cy,
  It,
  Go = d(() => {
    xr();
    Gi();
    Cy = Oe();
    It = vy;
  });
import Ty from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
function qi(e) {
  return e.length === 0;
}
function kr(e) {
  let { variant: t } = e, r = Ty(e, wy), o = t || "";
  return Object.keys(r).sort().forEach((s) => {
    s === "color"
      ? o += qi(o) ? e[s] : Ce(e[s])
      : o += `${qi(o) ? s : Ce(s)}${Ce(e[s].toString())}`;
  }),
    o;
}
var wy,
  Ki = d(() => {
    ne();
    wy = ["variant"];
  });
import Cr from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import qo from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
function jt(e) {
  return Object.keys(e).length === 0;
}
function dt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function vr(e = {}) {
  let {
    defaultTheme: t = Ay,
    rootShouldForwardProp: r = dt,
    slotShouldForwardProp: o = dt,
  } = e;
  return (s, i = {}) => {
    let {
        name: l,
        slot: c,
        skipVariantsResolver: a,
        skipSx: n,
        overridesResolver: p,
      } = i,
      u = qo(i, Py),
      f = a !== void 0 ? a : c && c !== "Root" || !1,
      m = n || !1,
      h,
      b = dt;
    c === "Root" ? b = r : c && (b = o);
    let y = ao(s, Cr({ shouldForwardProp: b, label: h }, u));
    return (x, ...v) => {
      let k = v
          ? v.map((I) =>
            typeof I == "function" && I.__emotion_real !== I
              ? (A) => {
                let { theme: z } = A, J = qo(A, Sy);
                return I(Cr({ theme: jt(z) ? t : z }, J));
              }
              : I
          )
          : [],
        S = x;
      l && p && k.push((I) => {
        let A = jt(I.theme) ? t : I.theme, z = Uy(l, A);
        return z ? p(I, z) : null;
      }),
        l && !f && k.push((I) => {
          let A = jt(I.theme) ? t : I.theme;
          return jy(I, Iy(l, A), A, l);
        }),
        m || k.push((I) => {
          let A = jt(I.theme) ? t : I.theme;
          return Vo(Cr({}, I, { theme: A }));
        });
      let U = k.length - v.length;
      if (Array.isArray(x) && U > 0) {
        let I = new Array(U).fill("");
        S = [...x, ...I], S.raw = [...x.raw, ...I];
      } else {
        typeof x == "function" && (S = (I) => {
          let { theme: A } = I, z = qo(I, My);
          return x(Cr({ theme: jt(A) ? t : A }, z));
        });
      }
      return y(S, ...k);
    };
  };
}
var Py,
  Sy,
  My,
  Uy,
  Iy,
  jy,
  Ay,
  Ko = d(() => {
    lo();
    xr();
    Ai();
    Ki();
    Py = [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      "overridesResolver",
    ],
      Sy = ["theme"],
      My = ["theme"];
    Uy = (e, t) =>
      t.components && t.components[e] && t.components[e].styleOverrides
        ? t.components[e].styleOverrides
        : null,
      Iy = (e, t) => {
        let r = [];
        t && t.components && t.components[e] && t.components[e].variants &&
          (r = t.components[e].variants);
        let o = {};
        return r.forEach((s) => {
          let i = kr(s.props);
          o[i] = s.style;
        }),
          o;
      },
      jy = (e, t, r, o) => {
        var s, i;
        let { ownerState: l = {} } = e,
          c = [],
          a = r == null || (s = r.components) == null || (i = s[o]) == null
            ? void 0
            : i.variants;
        return a && a.forEach((n) => {
          let p = !0;
          Object.keys(n.props).forEach((u) => {
            l[u] !== n.props[u] && e[u] !== n.props[u] && (p = !1);
          }), p && c.push(t[kr(n.props)]);
        }),
          c;
      };
    Ay = Oe();
  });
import Ry from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
function Tr(e) {
  let { theme: t, name: r, props: o } = e;
  if (
    !t || !t.components || !t.components[r] || !t.components[r].defaultProps
  ) {
    return o;
  }
  let s = Ry({}, o), i = t.components[r].defaultProps, l;
  for (l in i) s[l] === void 0 && (s[l] = i[l]);
  return s;
}
var Ji = d(() => {});
function At({ props: e, name: t, defaultTheme: r }) {
  let o = It(r);
  return Tr({ theme: o, name: t, props: e });
}
var Qi = d(() => {
  Ji();
  Go();
});
var Xi = d(() => {
  Qi();
});
function Jo(e, t = 0, r = 1) {
  return Math.min(Math.max(t, e), r);
}
function Yi(e) {
  e = e.substr(1);
  let t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"), r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((o) => o + o)),
    r
      ? `rgb${r.length === 4 ? "a" : ""}(${
        r.map((o, s) =>
          s < 3
            ? parseInt(o, 16)
            : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3
        ).join(", ")
      })`
      : "";
}
function _e(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return _e(Yi(e));
  let t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1) {
    throw new Error(ke(9, e));
  }
  let o = e.substring(t + 1, e.length - 1), s;
  if (r === "color") {
    if (
      o = o.split(" "),
        s = o.shift(),
        o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].substr(1)),
        ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
          s,
        ) === -1
    ) {
      throw new Error(ke(10, s));
    }
  } else o = o.split(",");
  return o = o.map((i) => parseFloat(i)), { type: r, values: o, colorSpace: s };
}
function Rt(e) {
  let { type: t, colorSpace: r } = e, { values: o } = e;
  return t.indexOf("rgb") !== -1
    ? o = o.map((s, i) => i < 3 ? parseInt(s, 10) : s)
    : t.indexOf("hsl") !== -1 && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`),
    t.indexOf("color") !== -1
      ? o = `${r} ${o.join(" ")}`
      : o = `${o.join(", ")}`,
    `${t}(${o})`;
}
function Zi(e) {
  e = _e(e);
  let { values: t } = e,
    r = t[0],
    o = t[1] / 100,
    s = t[2] / 100,
    i = o * Math.min(s, 1 - s),
    l = (n, p = (n + r / 30) % 12) =>
      s - i * Math.max(Math.min(p - 3, 9 - p, 1), -1),
    c = "rgb",
    a = [
      Math.round(l(0) * 255),
      Math.round(l(8) * 255),
      Math.round(l(4) * 255),
    ];
  return e.type === "hsla" && (c += "a", a.push(t[3])),
    Rt({ type: c, values: a });
}
function Qo(e) {
  e = _e(e);
  let t = e.type === "hsl" ? _e(Zi(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255),
    r <= .03928
      ? r / 12.92
      : ((r + .055) / 1.055) ** 2.4)
  ),
    Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
}
function Xo(e, t) {
  let r = Qo(e), o = Qo(t);
  return (Math.max(r, o) + .05) / (Math.min(r, o) + .05);
}
function ae(e, t) {
  return e = _e(e),
    t = Jo(t),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t,
    Rt(e);
}
function Et(e, t) {
  if (e = _e(e), t = Jo(t), e.type.indexOf("hsl") !== -1) e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1) {
    for (let r = 0; r < 3; r += 1) {
      e.values[r] *= 1 - t;
    }
  }
  return Rt(e);
}
function Bt(e, t) {
  if (e = _e(e), t = Jo(t), e.type.indexOf("hsl") !== -1) {
    e.values[2] += (100 - e.values[2]) * t;
  } else if (e.type.indexOf("rgb") !== -1) {
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  } else if (e.type.indexOf("color") !== -1) {
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  }
  return Rt(e);
}
var ea = d(() => {
  ne();
});
var ve = d(() => {
  lo();
  vo();
  Po();
  jo();
  Ro();
  Bo();
  _o();
  mt();
  zo();
  Ko();
  Ko();
  xr();
  Xi();
  Go();
  ea();
});
var ta = d(() => {});
function Q(e, t, r) {
  let o = {};
  return Object.keys(e).forEach((s) => {
    o[s] = e[s].reduce(
      (i, l) => (l && (r && r[l] && i.push(r[l]), i.push(t(l))), i),
      [],
    ).join(" ");
  }),
    o;
}
var ra = d(() => {});
var wr = d(() => {
  ra();
});
function Ey(e) {
  return typeof e == "string";
}
var tt,
  Yo = d(() => {
    tt = Ey;
  });
var oa,
  By,
  Ly,
  sa,
  na = d(() => {
    oa = (e) => e,
      By = () => {
        let e = oa;
        return {
          configure(t) {
            e = t;
          },
          generate(t) {
            return e(t);
          },
          reset() {
            e = oa;
          },
        };
      },
      Ly = By(),
      sa = Ly;
  });
function T(e, t) {
  return Oy[t] || `${sa.generate(e)}-${t}`;
}
var Oy,
  ia = d(() => {
    na();
    Oy = {
      active: "Mui-active",
      checked: "Mui-checked",
      completed: "Mui-completed",
      disabled: "Mui-disabled",
      error: "Mui-error",
      expanded: "Mui-expanded",
      focused: "Mui-focused",
      focusVisible: "Mui-focusVisible",
      required: "Mui-required",
      selected: "Mui-selected",
    };
  });
var Pr = d(() => {
  ia();
});
function g(e, t) {
  let r = {};
  return t.forEach((o) => {
    r[o] = T(e, o);
  }),
    r;
}
var aa = d(() => {
  Pr();
});
var De = d(() => {
  aa();
});
function la(e) {
  return T("MuiBackdrop", e);
}
var Jv,
  pa = d(() => {
    De();
    Pr();
    Jv = g("MuiBackdrop", ["root", "invisible"]);
  });
import Zo from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import _y from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import { forwardRef as $y } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as zy } from "https://esm.sh/react/jsx-runtime";
var Dy,
  Ny,
  Fy,
  es,
  ca = d(() => {
    oe();
    wr();
    Yo();
    pa();
    Dy = [
      "classes",
      "className",
      "invisible",
      "component",
      "components",
      "componentsProps",
      "theme",
    ],
      Ny = (e) => {
        let { classes: t, invisible: r } = e;
        return Q({ root: ["root", r && "invisible"] }, la, t);
      },
      Fy = $y(function (t, r) {
        let {
            classes: o,
            className: s,
            invisible: i = !1,
            component: l = "div",
            components: c = {},
            componentsProps: a = {},
            theme: n,
          } = t,
          p = _y(t, Dy),
          u = Zo({}, t, { classes: o, invisible: i }),
          f = Ny(u),
          m = c.Root || l,
          h = a.root || {};
        return zy(
          m,
          Zo(
            { "aria-hidden": !0 },
            h,
            !tt(m) && { as: l, ownerState: Zo({}, u, h.ownerState), theme: n },
            { ref: r },
            p,
            { className: O(f.root, h.className, s) },
          ),
        );
      }),
      es = Fy;
  });
var ts = d(() => {
  ca();
});
var Vy,
  rs,
  ua = d(() => {
    De();
    Vy = g("MuiBadge", [
      "root",
      "badge",
      "dot",
      "standard",
      "anchorOriginTopLeftCircular",
      "anchorOriginTopLeftRectangular",
      "anchorOriginTopRightCircular",
      "anchorOriginTopRightRectangular",
      "anchorOriginBottomLeftCircular",
      "anchorOriginBottomLeftRectangular",
      "anchorOriginBottomRightCircular",
      "anchorOriginBottomRightRectangular",
      "invisible",
    ]), rs = Vy;
  });
var os = d(() => {
  ua();
});
var ma = d(() => {});
var da = d(() => {
  ma();
});
var yT,
  fa = d(() => {
    De();
    yT = g("MuiFormControl", ["root", "disabled"]);
  });
var ha = d(() => {
  fa();
});
var TT,
  ba = d(() => {
    De();
    TT = g("MuiInput", [
      "root",
      "formControl",
      "focused",
      "disabled",
      "error",
      "multiline",
      "input",
      "inputMultiline",
      "inputTypeSearch",
      "adornedStart",
      "adornedEnd",
    ]);
  });
var ga = d(() => {});
var ya = d(() => {
  ga();
  ba();
});
var ss = d(() => {});
var Hy,
  rt,
  Sr = d(() => {
    De();
    Hy = g("MuiSlider", [
      "root",
      "active",
      "focusVisible",
      "disabled",
      "dragging",
      "marked",
      "vertical",
      "trackInverted",
      "trackFalse",
      "rail",
      "track",
      "mark",
      "markActive",
      "markLabel",
      "markLabelActive",
      "thumb",
      "valueLabel",
      "valueLabelOpen",
      "valueLabelCircle",
      "valueLabelLabel",
    ]), rt = Hy;
  });
import {
  cloneElement as Jy,
  Fragment as Qy,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as ns } from "https://esm.sh/react/jsx-runtime";
import { jsxs as Gy } from "https://esm.sh/react/jsx-runtime";
function Ky(e) {
  let { children: t, className: r, value: o, theme: s } = e, i = qy(e);
  return Jy(
    t,
    { className: O(t.props.className) },
    Gy(Qy, {
      children: [
        t.props.children,
        ns("span", {
          className: O(i.offset, r),
          theme: s,
          "aria-hidden": !0,
          children: ns("span", {
            className: i.circle,
            children: ns("span", { className: i.label, children: o }),
          }),
        }),
      ],
    }),
  );
}
var qy,
  is,
  xa = d(() => {
    oe();
    Sr();
    qy = (e) => {
      let { open: t } = e;
      return {
        offset: O(t && rt.valueLabelOpen),
        circle: rt.valueLabelCircle,
        label: rt.valueLabelLabel,
      };
    };
    is = Ky;
  });
var as = d(() => {
  xa();
  Sr();
  Sr();
});
import HT from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import {
  useEffect as JT,
  useRef as QT,
  useState as KT,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
var ka = d(() => {});
var YT,
  Ca = d(() => {
    De();
    YT = g("MuiSwitch", [
      "root",
      "input",
      "track",
      "thumb",
      "checked",
      "disabled",
      "focusVisible",
      "readOnly",
    ]);
  });
import tw from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import ow from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import { forwardRef as dw } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as pw } from "https://esm.sh/react/jsx-runtime";
import { jsxs as uw } from "https://esm.sh/react/jsx-runtime";
var va = d(() => {
  oe();
});
var Ta = d(() => {
  va();
  ka();
  Ca();
});
var wa = d(() => {
  Yo();
});
var w = d(() => {
  ta();
  ts();
  os();
  da();
  wr();
  Pr();
  De();
  ha();
  ya();
  ss();
  as();
  Ta();
  wa();
});
import Xy from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
function ls(e, t, r) {
  return Xy({
    toolbar: {
      minHeight: 56,
      [`${e.up("xs")} and (orientation: landscape)`]: { minHeight: 48 },
      [e.up("sm")]: { minHeight: 64 },
    },
  }, r);
}
var Pa = d(() => {});
import Sa from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import Yy from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
function Ua(e, t, r, o) {
  let s = o.light || o, i = o.dark || o * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? e[t] = e[r]
      : t === "light"
      ? e.light = Bt(e.main, s)
      : t === "dark" && (e.dark = Et(e.main, i)));
}
function e0(e = "light") {
  return e === "dark"
    ? { main: Je[200], light: Je[50], dark: Je[400] }
    : { main: Je[700], light: Je[400], dark: Je[800] };
}
function t0(e = "light") {
  return e === "dark"
    ? { main: Ke[200], light: Ke[50], dark: Ke[400] }
    : { main: Ke[500], light: Ke[300], dark: Ke[700] };
}
function r0(e = "light") {
  return e === "dark"
    ? { main: qe[500], light: qe[300], dark: qe[700] }
    : { main: qe[700], light: qe[400], dark: qe[800] };
}
function o0(e = "light") {
  return e === "dark"
    ? { main: Qe[400], light: Qe[300], dark: Qe[700] }
    : { main: Qe[700], light: Qe[500], dark: Qe[900] };
}
function s0(e = "light") {
  return e === "dark"
    ? { main: Xe[400], light: Xe[300], dark: Xe[700] }
    : { main: Xe[800], light: Xe[500], dark: Xe[900] };
}
function n0(e = "light") {
  return e === "dark"
    ? { main: ct[400], light: ct[300], dark: ct[700] }
    : { main: "#ED6C02", light: ct[500], dark: ct[900] };
}
function cs(e) {
  let { mode: t = "light", contrastThreshold: r = 3, tonalOffset: o = .2 } = e,
    s = Yy(e, Zy),
    i = e.primary || e0(t),
    l = e.secondary || t0(t),
    c = e.error || r0(t),
    a = e.info || o0(t),
    n = e.success || s0(t),
    p = e.warning || n0(t);
  function u(b) {
    return Xo(b, ps.text.primary) >= r ? ps.text.primary : Ma.text.primary;
  }
  let f = (
      {
        color: b,
        name: y,
        mainShade: C = 500,
        lightShade: x = 300,
        darkShade: v = 700,
      },
    ) => {
      if (
        b = Sa({}, b),
          !b.main && b[C] && (b.main = b[C]),
          !b.hasOwnProperty("main")
      ) {
        throw new Error(ke(11, y ? ` (${y})` : "", C));
      }
      if (typeof b.main != "string") {
        throw new Error(ke(12, y ? ` (${y})` : "", JSON.stringify(b.main)));
      }
      return Ua(b, "light", x, o),
        Ua(b, "dark", v, o),
        b.contrastText || (b.contrastText = u(b.main)),
        b;
    },
    m = { dark: ps, light: Ma };
  return te(
    Sa({
      common: pt,
      mode: t,
      primary: f({ color: i, name: "primary" }),
      secondary: f({
        color: l,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700",
      }),
      error: f({ color: c, name: "error" }),
      warning: f({ color: p, name: "warning" }),
      info: f({ color: a, name: "info" }),
      success: f({ color: n, name: "success" }),
      grey: si,
      contrastThreshold: r,
      getContrastText: u,
      augmentColor: f,
      tonalOffset: o,
    }, m[t]),
    s,
  );
}
var Zy,
  Ma,
  ps,
  Ia = d(() => {
    ne();
    ne();
    ve();
    Xn();
    ni();
    Zn();
    Yn();
    oi();
    ei();
    ti();
    ri();
    Zy = ["mode", "contrastThreshold", "tonalOffset"],
      Ma = {
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.6)",
          disabled: "rgba(0, 0, 0, 0.38)",
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: { paper: pt.white, default: pt.white },
        action: {
          active: "rgba(0, 0, 0, 0.54)",
          hover: "rgba(0, 0, 0, 0.04)",
          hoverOpacity: .04,
          selected: "rgba(0, 0, 0, 0.08)",
          selectedOpacity: .08,
          disabled: "rgba(0, 0, 0, 0.26)",
          disabledBackground: "rgba(0, 0, 0, 0.12)",
          disabledOpacity: .38,
          focus: "rgba(0, 0, 0, 0.12)",
          focusOpacity: .12,
          activatedOpacity: .12,
        },
      },
      ps = {
        text: {
          primary: pt.white,
          secondary: "rgba(255, 255, 255, 0.7)",
          disabled: "rgba(255, 255, 255, 0.5)",
          icon: "rgba(255, 255, 255, 0.5)",
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: { paper: "#121212", default: "#121212" },
        action: {
          active: pt.white,
          hover: "rgba(255, 255, 255, 0.08)",
          hoverOpacity: .08,
          selected: "rgba(255, 255, 255, 0.16)",
          selectedOpacity: .16,
          disabled: "rgba(255, 255, 255, 0.3)",
          disabledBackground: "rgba(255, 255, 255, 0.12)",
          disabledOpacity: .38,
          focus: "rgba(255, 255, 255, 0.12)",
          focusOpacity: .12,
          activatedOpacity: .24,
        },
      };
  });
import ja from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import i0 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
function l0(e) {
  return Math.round(e * 1e5) / 1e5;
}
function us(e, t) {
  let r = typeof t == "function" ? t(e) : t,
    {
      fontFamily: o = Ra,
      fontSize: s = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: c = 500,
      fontWeightBold: a = 700,
      htmlFontSize: n = 16,
      allVariants: p,
      pxToRem: u,
    } = r,
    f = i0(r, a0),
    m = s / 14,
    h = u || ((C) => `${C / n * m}rem`),
    b = (C, x, v, k, S) =>
      ja(
        { fontFamily: o, fontWeight: C, fontSize: h(x), lineHeight: v },
        o === Ra ? { letterSpacing: `${l0(k / x)}em` } : {},
        S,
        p,
      ),
    y = {
      h1: b(i, 96, 1.167, -1.5),
      h2: b(i, 60, 1.2, -.5),
      h3: b(l, 48, 1.167, 0),
      h4: b(l, 34, 1.235, .25),
      h5: b(l, 24, 1.334, 0),
      h6: b(c, 20, 1.6, .15),
      subtitle1: b(l, 16, 1.75, .15),
      subtitle2: b(c, 14, 1.57, .1),
      body1: b(l, 16, 1.5, .15),
      body2: b(l, 14, 1.43, .15),
      button: b(c, 14, 1.75, .4, Aa),
      caption: b(l, 12, 1.66, .4),
      overline: b(l, 12, 2.66, 1, Aa),
    };
  return te(
    ja({
      htmlFontSize: n,
      pxToRem: h,
      fontFamily: o,
      fontSize: s,
      fontWeightLight: i,
      fontWeightRegular: l,
      fontWeightMedium: c,
      fontWeightBold: a,
    }, y),
    f,
    { clone: !1 },
  );
}
var a0,
  Aa,
  Ra,
  Ea = d(() => {
    ne();
    a0 = [
      "fontFamily",
      "fontSize",
      "fontWeightLight",
      "fontWeightRegular",
      "fontWeightMedium",
      "fontWeightBold",
      "htmlFontSize",
      "allVariants",
      "pxToRem",
    ];
    Aa = { textTransform: "uppercase" },
      Ra = '"Roboto", "Helvetica", "Arial", sans-serif';
  });
function V(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${p0})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${c0})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${u0})`,
  ].join(",");
}
var p0,
  c0,
  u0,
  m0,
  Ba,
  La = d(() => {
    p0 = .2, c0 = .14, u0 = .12;
    m0 = [
      "none",
      V(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      V(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      V(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      V(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      V(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      V(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      V(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      V(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      V(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      V(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      V(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      V(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      V(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      V(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      V(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      V(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      V(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      V(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      V(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      V(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      V(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      V(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      V(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      V(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ], Ba = m0;
  });
import d0 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import ms from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
function Oa(e) {
  return `${Math.round(e)}ms`;
}
function b0(e) {
  if (!e) return 0;
  let t = e / 36;
  return Math.round((4 + 15 * t ** .25 + t / 5) * 10);
}
function ds(e) {
  let t = ms({}, h0, e.easing), r = ms({}, Mr, e.duration);
  return ms(
    {
      getAutoHeightDuration: b0,
      create: (s = ["all"], i = {}) => {
        let {
            duration: l = r.standard,
            easing: c = t.easeInOut,
            delay: a = 0,
          } = i,
          n = d0(i, f0);
        return (Array.isArray(s) ? s : [s]).map((p) =>
          `${p} ${typeof l == "string" ? l : Oa(l)} ${c} ${
            typeof a == "string" ? a : Oa(a)
          }`
        ).join(",");
      },
    },
    e,
    { easing: t, duration: r },
  );
}
var f0,
  h0,
  Mr,
  fs = d(() => {
    f0 = ["duration", "easing", "delay"],
      h0 = {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      Mr = {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      };
  });
var g0,
  _a,
  Da = d(() => {
    g0 = {
      mobileStepper: 1e3,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    }, _a = g0;
  });
import y0 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import x0 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
function C0(e = {}, ...t) {
  let {
      mixins: r = {},
      palette: o = {},
      transitions: s = {},
      typography: i = {},
    } = e,
    l = x0(e, k0),
    c = cs(o),
    a = Oe(e),
    n = te(a, {
      mixins: ls(a.breakpoints, a.spacing, r),
      palette: c,
      shadows: Ba.slice(),
      typography: us(c, i),
      transitions: ds(s),
      zIndex: y0({}, _a),
    });
  return n = te(n, l), n = t.reduce((p, u) => te(p, u), n), n;
}
var k0,
  za,
  Na = d(() => {
    ne();
    ve();
    Pa();
    Ia();
    Ea();
    La();
    fs();
    Da();
    k0 = [
      "breakpoints",
      "mixins",
      "spacing",
      "palette",
      "transitions",
      "typography",
      "shape",
    ];
    za = C0;
  });
var v0,
  ft,
  Ur = d(() => {
    Na();
    v0 = za(), ft = v0;
  });
import { useDebugValue as v6 } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
function hs() {
  return It(ft);
}
var Fa = d(() => {
  ve();
  Ur();
});
function X({ props: e, name: t }) {
  return At({ props: e, name: t, defaultTheme: ft });
}
var Ue = d(() => {
  ve();
  Ur();
});
var bs,
  gs,
  T0,
  L,
  pe = d(() => {
    ve();
    Ur();
    bs = (e) => dt(e) && e !== "classes",
      gs = dt,
      T0 = vr({ defaultTheme: ft, rootShouldForwardProp: bs }),
      L = T0;
  });
var ys = d(() => {
  ve();
});
var _,
  ze = d(() => {
    ne();
    _ = Ce;
  });
function $a(e) {
  return T("MuiSvgIcon", e);
}
var O6,
  xs = d(() => {
    w();
    O6 = g("MuiSvgIcon", [
      "root",
      "colorPrimary",
      "colorSecondary",
      "colorAction",
      "colorError",
      "colorDisabled",
      "fontSizeInherit",
      "fontSizeSmall",
      "fontSizeMedium",
      "fontSizeLarge",
    ]);
  });
import Va from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import w0 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import { forwardRef as j0 } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as S0 } from "https://esm.sh/react/jsx-runtime";
import { jsxs as M0 } from "https://esm.sh/react/jsx-runtime";
var P0,
  U0,
  I0,
  Wa,
  Ir,
  Ha = d(() => {
    oe();
    w();
    ze();
    Ue();
    pe();
    xs();
    P0 = [
      "children",
      "className",
      "color",
      "component",
      "fontSize",
      "htmlColor",
      "titleAccess",
      "viewBox",
    ],
      U0 = (e) => {
        let { color: t, fontSize: r, classes: o } = e,
          s = {
            root: [
              "root",
              t !== "inherit" && `color${_(t)}`,
              `fontSize${_(r)}`,
            ],
          };
        return Q(s, $a, o);
      },
      I0 = L("svg", {
        name: "MuiSvgIcon",
        slot: "Root",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [
            t.root,
            r.color !== "inherit" && t[`color${_(r.color)}`],
            t[`fontSize${_(r.fontSize)}`],
          ];
        },
      })(({ theme: e, ownerState: t }) => {
        var r, o;
        return {
          userSelect: "none",
          width: "1em",
          height: "1em",
          display: "inline-block",
          fill: "currentColor",
          flexShrink: 0,
          transition: e.transitions.create("fill", {
            duration: e.transitions.duration.shorter,
          }),
          fontSize:
            {
              inherit: "inherit",
              small: e.typography.pxToRem(20),
              medium: e.typography.pxToRem(24),
              large: e.typography.pxToRem(35),
            }[t.fontSize],
          color: (r = (o = e.palette[t.color]) == null
              ? void 0
              : o.main) != null
            ? r
            : {
              action: e.palette.action.active,
              disabled: e.palette.action.disabled,
              inherit: void 0,
            }[t.color],
        };
      }),
      Wa = j0(function (t, r) {
        let o = X({ props: t, name: "MuiSvgIcon" }),
          {
            children: s,
            className: i,
            color: l = "inherit",
            component: c = "svg",
            fontSize: a = "medium",
            htmlColor: n,
            titleAccess: p,
            viewBox: u = "0 0 24 24",
          } = o,
          f = w0(o, P0),
          m = Va({}, o, { color: l, component: c, fontSize: a, viewBox: u }),
          h = U0(m);
        return M0(
          I0,
          Va(
            {
              as: c,
              className: O(h.root, i),
              ownerState: m,
              focusable: "false",
              viewBox: u,
              color: n,
              "aria-hidden": p ? void 0 : !0,
              role: p ? "img" : void 0,
              ref: r,
            },
            f,
            { children: [s, p ? S0("title", { children: p }) : null] },
          ),
        );
      });
    Wa.muiName = "SvgIcon";
    Ir = Wa;
  });
var ks = d(() => {
  Ha();
  xs();
});
import A0 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import {
  forwardRef as B0,
  memo as E0,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import { jsx as R0 } from "https://esm.sh/react/jsx-runtime";
function ue(e, t) {
  let r = (o, s) =>
    R0(Ir, A0({ "data-testid": `${t}Icon`, ref: s }, o, { children: e }));
  return r.muiName = Ir.muiName, E0(B0(r));
}
var Ga = d(() => {
  ks();
});
var Lt,
  qa = d(() => {
    ne();
    Lt = mr;
  });
var ht,
  Cs = d(() => {
    ne();
    ht = dr;
  });
var Ka,
  Ja = d(() => {
    ne();
    Ka = hr;
  });
var Qa = d(() => {
  Ga();
});
function vs(e, t) {
  var r, o;
  let { timeout: s, easing: i, style: l = {} } = e;
  return {
    duration: (r = l.transitionDuration) != null
      ? r
      : typeof s == "number"
      ? s
      : s[t.mode] || 0,
    easing: (o = l.transitionTimingFunction) != null
      ? o
      : typeof i == "object"
      ? i[t.mode]
      : i,
    delay: l.transitionDelay,
  };
}
var Xa,
  Ya = d(() => {
    Xa = (e) => e.scrollTop;
  });
var b8,
  Za = d(() => {
    w();
    b8 = g("MuiCollapse", [
      "root",
      "horizontal",
      "vertical",
      "entered",
      "hidden",
      "wrapper",
      "wrapperInner",
    ]);
  });
var el = d(() => {
  Za();
});
var C8,
  tl = d(() => {
    w();
    C8 = g("MuiPaper", [
      "root",
      "rounded",
      "outlined",
      "elevation",
      "elevation0",
      "elevation1",
      "elevation2",
      "elevation3",
      "elevation4",
      "elevation5",
      "elevation6",
      "elevation7",
      "elevation8",
      "elevation9",
      "elevation10",
      "elevation11",
      "elevation12",
      "elevation13",
      "elevation14",
      "elevation15",
      "elevation16",
      "elevation17",
      "elevation18",
      "elevation19",
      "elevation20",
      "elevation21",
      "elevation22",
      "elevation23",
      "elevation24",
    ]);
  });
var rl = d(() => {
  tl();
});
var S8,
  ol = d(() => {
    w();
    S8 = g("MuiAccordion", [
      "root",
      "rounded",
      "expanded",
      "disabled",
      "gutters",
      "region",
    ]);
  });
var sl = d(() => {
  ol();
});
var A8,
  nl = d(() => {
    w();
    A8 = g("MuiAccordionActions", ["root", "spacing"]);
  });
var il = d(() => {
  nl();
});
var O8,
  al = d(() => {
    w();
    O8 = g("MuiAccordionDetails", ["root"]);
  });
var ll = d(() => {
  al();
});
import {
  useEffect as _0,
  useState as O0,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as pl } from "https://esm.sh/react/jsx-runtime";
function L0(e) {
  let {
      className: t,
      classes: r,
      pulsate: o = !1,
      rippleX: s,
      rippleY: i,
      rippleSize: l,
      in: c,
      onExited: a,
      timeout: n,
    } = e,
    [p, u] = O0(!1),
    f = O(t, r.ripple, r.rippleVisible, o && r.ripplePulsate),
    m = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + s },
    h = O(r.child, p && r.childLeaving, o && r.childPulsate);
  return !c && !p && u(!0),
    _0(() => {
      if (!c && a != null) {
        let b = setTimeout(a, n);
        return () => {
          clearTimeout(b);
        };
      }
    }, [a, c, n]),
    pl("span", {
      className: f,
      style: m,
      children: pl("span", { className: h }),
    });
}
var cl,
  ul = d(() => {
    oe();
    cl = L0;
  });
var D0,
  ce,
  Ts = d(() => {
    w();
    D0 = g("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]), ce = D0;
  });
import z0 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import N0 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import {
  forwardRef as Q0,
  useCallback as Ar,
  useEffect as gl,
  useImperativeHandle as Y0,
  useRef as bt,
  useState as X0,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { TransitionGroup as $0 } from "https://esm.sh/react-transition-group";
import { jsx as ws } from "https://esm.sh/react/jsx-runtime";
var F0,
  jr,
  ml,
  dl,
  fl,
  hl,
  Ps,
  V0,
  W0,
  H0,
  G0,
  q0,
  K0,
  J0,
  bl,
  yl = d(() => {
    oe();
    ve();
    pe();
    Ue();
    ul();
    Ts();
    F0 = ["center", "classes", "className"],
      jr = (e) => e,
      Ps = 550,
      V0 = 80,
      W0 = ut(
        ml || (ml = jr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`),
      ),
      H0 = ut(
        dl || (dl = jr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),
      ),
      G0 = ut(
        fl || (fl = jr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`),
      ),
      q0 = L("span", { name: "MuiTouchRipple", slot: "Root", skipSx: !0 })({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit",
      }),
      K0 = L(cl, { name: "MuiTouchRipple", slot: "Ripple" })(
        hl || (hl = jr`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
        ce.rippleVisible,
        W0,
        Ps,
        ({ theme: e }) => e.transitions.easing.easeInOut,
        ce.ripplePulsate,
        ({ theme: e }) => e.transitions.duration.shorter,
        ce.child,
        ce.childLeaving,
        H0,
        Ps,
        ({ theme: e }) => e.transitions.easing.easeInOut,
        ce.childPulsate,
        G0,
        ({ theme: e }) => e.transitions.easing.easeInOut,
      ),
      J0 = Q0(function (t, r) {
        let o = X({ props: t, name: "MuiTouchRipple" }),
          { center: s = !1, classes: i = {}, className: l } = o,
          c = N0(o, F0),
          [a, n] = X0([]),
          p = bt(0),
          u = bt(null);
        gl(() => {
          u.current && (u.current(), u.current = null);
        }, [a]);
        let f = bt(!1), m = bt(null), h = bt(null), b = bt(null);
        gl(() =>
          () => {
            clearTimeout(m.current);
          }, []);
        let y = Ar((k) => {
            let { pulsate: S, rippleX: U, rippleY: P, rippleSize: I, cb: A } =
              k;
            n(
              (z) => [
                ...z,
                ws(K0, {
                  classes: {
                    ripple: O(i.ripple, ce.ripple),
                    rippleVisible: O(i.rippleVisible, ce.rippleVisible),
                    ripplePulsate: O(i.ripplePulsate, ce.ripplePulsate),
                    child: O(i.child, ce.child),
                    childLeaving: O(i.childLeaving, ce.childLeaving),
                    childPulsate: O(i.childPulsate, ce.childPulsate),
                  },
                  timeout: Ps,
                  pulsate: S,
                  rippleX: U,
                  rippleY: P,
                  rippleSize: I,
                }, p.current),
              ]
            ),
              p.current += 1,
              u.current = A;
          }, [i]),
          C = Ar((k = {}, S = {}, U) => {
            let {
              pulsate: P = !1,
              center: I = s || S.pulsate,
              fakeElement: A = !1,
            } = S;
            if (k.type === "mousedown" && f.current) {
              f.current = !1;
              return;
            }
            k.type === "touchstart" && (f.current = !0);
            let z = A ? null : b.current,
              J = z
                ? z.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 },
              de,
              xe,
              fe;
            if (
              I || k.clientX === 0 && k.clientY === 0 ||
              !k.clientX && !k.touches
            ) {
              de = Math.round(J.width / 2), xe = Math.round(J.height / 2);
            } else {
              let { clientX: $, clientY: G } = k.touches ? k.touches[0] : k;
              de = Math.round($ - J.left), xe = Math.round(G - J.top);
            }
            if (I) {
              fe = Math.sqrt((2 * J.width ** 2 + J.height ** 2) / 3),
                fe % 2 == 0 && (fe += 1);
            } else {
              let $ = Math.max(Math.abs((z ? z.clientWidth : 0) - de), de) * 2 +
                  2,
                G = Math.max(Math.abs((z ? z.clientHeight : 0) - xe), xe) * 2 +
                  2;
              fe = Math.sqrt($ ** 2 + G ** 2);
            }
            k.touches
              ? h.current === null && (h.current = () => {
                y({
                  pulsate: P,
                  rippleX: de,
                  rippleY: xe,
                  rippleSize: fe,
                  cb: U,
                });
              },
                m.current = setTimeout(() => {
                  h.current && (h.current(), h.current = null);
                }, V0))
              : y({
                pulsate: P,
                rippleX: de,
                rippleY: xe,
                rippleSize: fe,
                cb: U,
              });
          }, [s, y]),
          x = Ar(() => {
            C({}, { pulsate: !0 });
          }, [C]),
          v = Ar((k, S) => {
            if (clearTimeout(m.current), k.type === "touchend" && h.current) {
              h.current(),
                h.current = null,
                m.current = setTimeout(() => {
                  v(k, S);
                });
              return;
            }
            h.current = null,
              n((U) => U.length > 0 ? U.slice(1) : U),
              u.current = S;
          }, []);
        return Y0(r, () => ({ pulsate: x, start: C, stop: v }), [x, C, v]),
          ws(
            q0,
            z0({ className: O(i.root, ce.root, l), ref: b }, c, {
              children: ws($0, { component: null, exit: !0, children: a }),
            }),
          );
      }),
      bl = J0;
  });
function xl(e) {
  return T("MuiButtonBase", e);
}
var Z0,
  kl,
  Ss = d(() => {
    w();
    Z0 = g("MuiButtonBase", ["root", "disabled", "focusVisible"]), kl = Z0;
  });
import Ms from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import e1 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import {
  forwardRef as a1,
  useEffect as vl,
  useImperativeHandle as l1,
  useRef as Us,
  useState as Cl,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as r1 } from "https://esm.sh/react/jsx-runtime";
import { jsxs as o1 } from "https://esm.sh/react/jsx-runtime";
var t1,
  s1,
  n1,
  i1,
  ot,
  Tl = d(() => {
    oe();
    wr();
    pe();
    Ue();
    Cs();
    qa();
    Ja();
    yl();
    Ss();
    t1 = [
      "action",
      "centerRipple",
      "children",
      "className",
      "component",
      "disabled",
      "disableRipple",
      "disableTouchRipple",
      "focusRipple",
      "focusVisibleClassName",
      "LinkComponent",
      "onBlur",
      "onClick",
      "onContextMenu",
      "onDragLeave",
      "onFocus",
      "onFocusVisible",
      "onKeyDown",
      "onKeyUp",
      "onMouseDown",
      "onMouseLeave",
      "onMouseUp",
      "onTouchEnd",
      "onTouchMove",
      "onTouchStart",
      "tabIndex",
      "TouchRippleProps",
      "type",
    ],
      s1 = (e) => {
        let {
            disabled: t,
            focusVisible: r,
            focusVisibleClassName: o,
            classes: s,
          } = e,
          l = Q(
            { root: ["root", t && "disabled", r && "focusVisible"] },
            xl,
            s,
          );
        return r && o && (l.root += ` ${o}`), l;
      },
      n1 = L("button", {
        name: "MuiButtonBase",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
      })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": { borderStyle: "none" },
        [`&.${kl.disabled}`]: { pointerEvents: "none", cursor: "default" },
        "@media print": { colorAdjust: "exact" },
      }),
      i1 = a1(function (t, r) {
        let o = X({ props: t, name: "MuiButtonBase" }),
          {
            action: s,
            centerRipple: i = !1,
            children: l,
            className: c,
            component: a = "button",
            disabled: n = !1,
            disableRipple: p = !1,
            disableTouchRipple: u = !1,
            focusRipple: f = !1,
            LinkComponent: m = "a",
            onBlur: h,
            onClick: b,
            onContextMenu: y,
            onDragLeave: C,
            onFocus: x,
            onFocusVisible: v,
            onKeyDown: k,
            onKeyUp: S,
            onMouseDown: U,
            onMouseLeave: P,
            onMouseUp: I,
            onTouchEnd: A,
            onTouchMove: z,
            onTouchStart: J,
            tabIndex: de = 0,
            TouchRippleProps: xe,
            type: fe,
          } = o,
          $ = e1(o, t1),
          G = Us(null),
          ee = Us(null),
          { isFocusVisibleRef: Gn, onFocus: Dh, onBlur: zh, ref: Nh } = Ka(),
          [Ge, ar] = Cl(!1);
        n && Ge && ar(!1),
          l1(s, () => ({
            focusVisible: () => {
              ar(!0), G.current.focus();
            },
          }), []),
          vl(() => {
            Ge && f && !p && ee.current.pulsate();
          }, [p, f, Ge]);
        function Se(E, Kn, nb = u) {
          return Lt(
            (Jn) => (Kn && Kn(Jn), !nb && ee.current && ee.current[E](Jn), !0)
          );
        }
        let Fh = Se("start", U),
          $h = Se("stop", y),
          Vh = Se("stop", C),
          Wh = Se("stop", I),
          Hh = Se("stop", (E) => {
            Ge && E.preventDefault(), P && P(E);
          }),
          Gh = Se("start", J),
          qh = Se("stop", A),
          Kh = Se("stop", z),
          Jh = Se("stop", (E) => {
            zh(E), Gn.current === !1 && ar(!1), h && h(E);
          }, !1),
          Qh = Lt((E) => {
            G.current || (G.current = E.currentTarget),
              Dh(E),
              Gn.current === !0 && (ar(!0), v && v(E)),
              x && x(E);
          }),
          so = () => {
            let E = G.current;
            return a && a !== "button" && !(E.tagName === "A" && E.href);
          },
          no = Us(!1),
          Xh = Lt((E) => {
            f && !no.current && Ge && ee.current && E.key === " " &&
            (no.current = !0,
              ee.current.stop(E, () => {
                ee.current.start(E);
              })),
              E.target === E.currentTarget && so() && E.key === " " &&
              E.preventDefault(),
              k && k(E),
              E.target === E.currentTarget && so() && E.key === "Enter" && !n &&
              (E.preventDefault(), b && b(E));
          }),
          Yh = Lt((E) => {
            f && E.key === " " && ee.current && Ge && !E.defaultPrevented &&
            (no.current = !1,
              ee.current.stop(E, () => {
                ee.current.pulsate(E);
              })),
              S && S(E),
              b && E.target === E.currentTarget && so() && E.key === " " &&
              !E.defaultPrevented && b(E);
          }),
          lr = a;
        lr === "button" && ($.href || $.to) && (lr = m);
        let St = {};
        lr === "button"
          ? (St.type = fe === void 0 ? "button" : fe, St.disabled = n)
          : (!$.href && !$.to && (St.role = "button"),
            n && (St["aria-disabled"] = n));
        let Zh = ht(Nh, G), eb = ht(r, Zh), [tb, rb] = Cl(!1);
        vl(() => {
          rb(!0);
        }, []);
        let ob = tb && !p && !n,
          qn = Ms({}, o, {
            centerRipple: i,
            component: a,
            disabled: n,
            disableRipple: p,
            disableTouchRipple: u,
            focusRipple: f,
            tabIndex: de,
            focusVisible: Ge,
          }),
          sb = s1(qn);
        return o1(
          n1,
          Ms(
            {
              as: lr,
              className: O(sb.root, c),
              ownerState: qn,
              onBlur: Jh,
              onClick: b,
              onContextMenu: $h,
              onFocus: Qh,
              onKeyDown: Xh,
              onKeyUp: Yh,
              onMouseDown: Fh,
              onMouseLeave: Hh,
              onMouseUp: Wh,
              onDragLeave: Vh,
              onTouchEnd: qh,
              onTouchMove: Kh,
              onTouchStart: Gh,
              ref: eb,
              tabIndex: n ? -1 : de,
              type: fe,
            },
            St,
            $,
            {
              children: [l, ob ? r1(bl, Ms({ ref: ee, center: i }, xe)) : null],
            },
          ),
        );
      }),
      ot = i1;
  });
var Ot = d(() => {
  Tl();
  Ss();
  Ts();
});
var R3,
  wl = d(() => {
    w();
    R3 = g("MuiAccordionSummary", [
      "root",
      "expanded",
      "focusVisible",
      "disabled",
      "gutters",
      "contentGutters",
      "content",
      "expandIconWrapper",
    ]);
  });
var Pl = d(() => {
  wl();
});
var _3,
  Sl = d(() => {
    w();
    _3 = g("MuiAlert", [
      "root",
      "action",
      "icon",
      "message",
      "filled",
      "filledSuccess",
      "filledInfo",
      "filledWarning",
      "filledError",
      "outlined",
      "outlinedSuccess",
      "outlinedInfo",
      "outlinedWarning",
      "outlinedError",
      "standard",
      "standardSuccess",
      "standardInfo",
      "standardWarning",
      "standardError",
    ]);
  });
var N3,
  Ml = d(() => {
    w();
    N3 = g("MuiIconButton", [
      "root",
      "disabled",
      "colorInherit",
      "colorPrimary",
      "colorSecondary",
      "edgeStart",
      "edgeEnd",
      "sizeSmall",
      "sizeMedium",
      "sizeLarge",
    ]);
  });
var Ul = d(() => {
  Ml();
});
var Il = d(() => {
  Sl();
});
var q3,
  jl = d(() => {
    w();
    q3 = g("MuiTypography", [
      "root",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "inherit",
      "button",
      "caption",
      "overline",
      "alignLeft",
      "alignRight",
      "alignCenter",
      "alignJustify",
      "noWrap",
      "gutterBottom",
      "paragraph",
    ]);
  });
var Al = d(() => {
  jl();
});
var Y3,
  Rl = d(() => {
    w();
    Y3 = g("MuiAlertTitle", ["root"]);
  });
var El = d(() => {
  Rl();
});
var oP,
  Bl = d(() => {
    w();
    oP = g("MuiAppBar", [
      "root",
      "positionFixed",
      "positionAbsolute",
      "positionSticky",
      "positionStatic",
      "positionRelative",
      "colorDefault",
      "colorPrimary",
      "colorSecondary",
      "colorInherit",
      "colorTransparent",
    ]);
  });
var Ll = d(() => {
  Bl();
});
var Ol = d(() => {});
var pP,
  _l = d(() => {
    w();
    pP = g("MuiListSubheader", [
      "root",
      "colorPrimary",
      "colorInherit",
      "gutters",
      "inset",
      "sticky",
    ]);
  });
var Dl = d(() => {
  _l();
});
var fP,
  zl = d(() => {
    w();
    fP = g("MuiChip", [
      "root",
      "sizeSmall",
      "sizeMedium",
      "colorPrimary",
      "colorSecondary",
      "disabled",
      "clickable",
      "clickableColorPrimary",
      "clickableColorSecondary",
      "deletable",
      "deletableColorPrimary",
      "deletableColorSecondary",
      "outlined",
      "filled",
      "outlinedPrimary",
      "outlinedSecondary",
      "avatar",
      "avatarSmall",
      "avatarMedium",
      "avatarColorPrimary",
      "avatarColorSecondary",
      "icon",
      "iconSmall",
      "iconMedium",
      "iconColorPrimary",
      "iconColorSecondary",
      "label",
      "labelSmall",
      "labelMedium",
      "deleteIcon",
      "deleteIconSmall",
      "deleteIconMedium",
      "deleteIconColorPrimary",
      "deleteIconColorSecondary",
      "deleteIconOutlinedColorPrimary",
      "deleteIconOutlinedColorSecondary",
      "focusVisible",
    ]);
  });
var Nl = d(() => {
  zl();
});
var xP,
  Fl = d(() => {
    w();
    xP = g("MuiInput", [
      "root",
      "formControl",
      "focused",
      "disabled",
      "colorSecondary",
      "underline",
      "error",
      "sizeSmall",
      "multiline",
      "fullWidth",
      "input",
      "inputSizeSmall",
      "inputMultiline",
      "inputTypeSearch",
    ]);
  });
var vP,
  $l = d(() => {
    w();
    vP = g("MuiInputBase", [
      "root",
      "formControl",
      "focused",
      "disabled",
      "adornedStart",
      "adornedEnd",
      "error",
      "sizeSmall",
      "multiline",
      "colorSecondary",
      "fullWidth",
      "hiddenLabel",
      "input",
      "inputSizeSmall",
      "inputMultiline",
      "inputTypeSearch",
      "inputAdornedStart",
      "inputAdornedEnd",
      "inputHiddenLabel",
    ]);
  });
var PP,
  Vl = d(() => {
    w();
    PP = g("MuiOutlinedInput", [
      "root",
      "colorSecondary",
      "focused",
      "disabled",
      "adornedStart",
      "adornedEnd",
      "error",
      "sizeSmall",
      "multiline",
      "notchedOutline",
      "input",
      "inputSizeSmall",
      "inputMultiline",
      "inputAdornedStart",
      "inputAdornedEnd",
    ]);
  });
var UP,
  Wl = d(() => {
    w();
    UP = g("MuiFilledInput", [
      "root",
      "colorSecondary",
      "underline",
      "focused",
      "disabled",
      "adornedStart",
      "adornedEnd",
      "error",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
      "input",
      "inputSizeSmall",
      "inputHiddenLabel",
      "inputMultiline",
      "inputAdornedStart",
      "inputAdornedEnd",
    ]);
  });
var AP,
  Hl = d(() => {
    w();
    AP = g("MuiAutocomplete", [
      "root",
      "fullWidth",
      "focused",
      "focusVisible",
      "tag",
      "tagSizeSmall",
      "tagSizeMedium",
      "hasPopupIcon",
      "hasClearIcon",
      "inputRoot",
      "input",
      "inputFocused",
      "endAdornment",
      "clearIndicator",
      "popupIndicator",
      "popupIndicatorOpen",
      "popper",
      "popperDisablePortal",
      "paper",
      "listbox",
      "loading",
      "noOptions",
      "option",
      "groupLabel",
      "groupUl",
    ]);
  });
var Gl = d(() => {
  Hl();
});
var OP,
  ql = d(() => {
    w();
    OP = g("MuiAvatar", [
      "root",
      "colorDefault",
      "circular",
      "rounded",
      "square",
      "img",
      "fallback",
    ]);
  });
var Kl = d(() => {
  ql();
});
var FP,
  Jl = d(() => {
    w();
    FP = g("MuiAvatarGroup", ["root", "avatar"]);
  });
var Ql = d(() => {
  Jl();
});
import Is from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import p1 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import {
  cloneElement as y1,
  forwardRef as b1,
  useRef as g1,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { Transition as u1 } from "https://esm.sh/react-transition-group";
import { jsx as m1 } from "https://esm.sh/react/jsx-runtime";
var c1,
  d1,
  f1,
  h1,
  js,
  Xl = d(() => {
    fs();
    Fa();
    Ya();
    Cs();
    c1 = [
      "addEndListener",
      "appear",
      "children",
      "easing",
      "in",
      "onEnter",
      "onEntered",
      "onEntering",
      "onExit",
      "onExited",
      "onExiting",
      "style",
      "timeout",
      "TransitionComponent",
    ],
      d1 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
      f1 = { enter: Mr.enteringScreen, exit: Mr.leavingScreen },
      h1 = b1(function (t, r) {
        let {
            addEndListener: o,
            appear: s = !0,
            children: i,
            easing: l,
            in: c,
            onEnter: a,
            onEntered: n,
            onEntering: p,
            onExit: u,
            onExited: f,
            onExiting: m,
            style: h,
            timeout: b = f1,
            TransitionComponent: y = u1,
          } = t,
          C = p1(t, c1),
          x = hs(),
          v = !0,
          k = g1(null),
          S = ht(i.ref, r),
          U = ht(k, S),
          P = ($) =>
            (G) => {
              if ($) {
                let ee = k.current;
                G === void 0 ? $(ee) : $(ee, G);
              }
            },
          I = P(p),
          A = P(($, G) => {
            Xa($);
            let ee = vs({ style: h, timeout: b, easing: l }, { mode: "enter" });
            $.style.webkitTransition = x.transitions.create("opacity", ee),
              $.style.transition = x.transitions.create("opacity", ee),
              a && a($, G);
          }),
          z = P(n),
          J = P(m),
          de = P(($) => {
            let G = vs({ style: h, timeout: b, easing: l }, { mode: "exit" });
            $.style.webkitTransition = x.transitions.create("opacity", G),
              $.style.transition = x.transitions.create("opacity", G),
              u && u($);
          }),
          xe = P(f);
        return m1(
          y,
          Is(
            {
              appear: s,
              in: c,
              nodeRef: v ? k : void 0,
              onEnter: A,
              onEntered: z,
              onEntering: I,
              onExit: de,
              onExited: xe,
              onExiting: J,
              addEndListener: ($) => {
                o && o(k.current, $);
              },
              timeout: b,
            },
            C,
            {
              children: ($, G) =>
                y1(
                  i,
                  Is({
                    style: Is(
                      {
                        opacity: 0,
                        visibility: $ === "exited" && !c ? "hidden" : void 0,
                      },
                      d1[$],
                      h,
                      i.props.style,
                    ),
                    ref: U,
                  }, G),
                ),
            },
          ),
        );
      }),
      js = h1;
  });
var As = d(() => {
  Xl();
});
import x1 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import gt from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import { forwardRef as w1 } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as Yl } from "https://esm.sh/react/jsx-runtime";
var k1,
  C1,
  v1,
  T1,
  Rs,
  Es = d(() => {
    w();
    ts();
    pe();
    Ue();
    As();
    k1 = [
      "children",
      "components",
      "componentsProps",
      "className",
      "invisible",
      "open",
      "transitionDuration",
      "TransitionComponent",
    ],
      C1 = (e) => {
        let { classes: t } = e;
        return t;
      },
      v1 = L("div", {
        name: "MuiBackdrop",
        slot: "Root",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [t.root, r.invisible && t.invisible];
        },
      })(({ ownerState: e }) =>
        gt({
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          WebkitTapHighlightColor: "transparent",
        }, e.invisible && { backgroundColor: "transparent" })
      ),
      T1 = w1(function (t, r) {
        var o;
        let s = X({ props: t, name: "MuiBackdrop" }),
          {
            children: i,
            components: l = {},
            componentsProps: c = {},
            className: a,
            invisible: n = !1,
            open: p,
            transitionDuration: u,
            TransitionComponent: f = js,
          } = s,
          m = x1(s, k1),
          h = gt({}, s, { invisible: n }),
          b = C1(h);
        return Yl(
          f,
          gt({ in: p, timeout: u }, m, {
            children: Yl(es, {
              className: a,
              invisible: n,
              components: gt({ Root: v1 }, l),
              componentsProps: {
                root: gt(
                  {},
                  c.root,
                  (!l.Root || !tt(l.Root)) &&
                    {
                      ownerState: gt(
                        {},
                        (o = c.root) == null ? void 0 : o.ownerState,
                      ),
                    },
                ),
              },
              classes: b,
              ref: r,
              children: i,
            }),
          }),
        );
      }),
      Rs = T1;
  });
var Bs = d(() => {
  Es();
  Es();
});
import TS from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import Zl from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import { forwardRef as DS } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as BS } from "https://esm.sh/react/jsx-runtime";
var Ne,
  Ls,
  Os,
  LS,
  OS,
  ep = d(() => {
    oe();
    w();
    os();
    pe();
    ze();
    Ne = Zl(
      {},
      rs,
      g("MuiBadge", [
        "colorError",
        "colorInfo",
        "colorPrimary",
        "colorSecondary",
        "colorSuccess",
        "colorWarning",
      ]),
    ),
      Ls = 10,
      Os = 4,
      LS = L("span", {
        name: "MuiBadge",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
      })({
        position: "relative",
        display: "inline-flex",
        verticalAlign: "middle",
        flexShrink: 0,
      }),
      OS = L("span", {
        name: "MuiBadge",
        slot: "Badge",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [
            t.badge,
            t[r.variant],
            t[
              `anchorOrigin${_(r.anchorOrigin.vertical)}${
                _(r.anchorOrigin.horizontal)
              }${_(r.overlap)}`
            ],
            r.color !== "default" && t[`color${_(r.color)}`],
            r.invisible && t.invisible,
          ];
        },
      })(({ theme: e, ownerState: t }) =>
        Zl(
          {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "absolute",
            boxSizing: "border-box",
            fontFamily: e.typography.fontFamily,
            fontWeight: e.typography.fontWeightMedium,
            fontSize: e.typography.pxToRem(12),
            minWidth: Ls * 2,
            lineHeight: 1,
            padding: "0 6px",
            height: Ls * 2,
            borderRadius: Ls,
            zIndex: 1,
            transition: e.transitions.create("transform", {
              easing: e.transitions.easing.easeInOut,
              duration: e.transitions.duration.enteringScreen,
            }),
          },
          t.color !== "default" &&
            {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.variant === "dot" &&
            { borderRadius: Os, height: Os * 2, minWidth: Os * 2, padding: 0 },
          t.anchorOrigin.vertical === "top" &&
            t.anchorOrigin.horizontal === "right" &&
            t.overlap === "rectangular" &&
            {
              top: 0,
              right: 0,
              transform: "scale(1) translate(50%, -50%)",
              transformOrigin: "100% 0%",
              [`&.${Ne.invisible}`]: {
                transform: "scale(0) translate(50%, -50%)",
              },
            },
          t.anchorOrigin.vertical === "bottom" &&
            t.anchorOrigin.horizontal === "right" &&
            t.overlap === "rectangular" &&
            {
              bottom: 0,
              right: 0,
              transform: "scale(1) translate(50%, 50%)",
              transformOrigin: "100% 100%",
              [`&.${Ne.invisible}`]: {
                transform: "scale(0) translate(50%, 50%)",
              },
            },
          t.anchorOrigin.vertical === "top" &&
            t.anchorOrigin.horizontal === "left" &&
            t.overlap === "rectangular" &&
            {
              top: 0,
              left: 0,
              transform: "scale(1) translate(-50%, -50%)",
              transformOrigin: "0% 0%",
              [`&.${Ne.invisible}`]: {
                transform: "scale(0) translate(-50%, -50%)",
              },
            },
          t.anchorOrigin.vertical === "bottom" &&
            t.anchorOrigin.horizontal === "left" &&
            t.overlap === "rectangular" &&
            {
              bottom: 0,
              left: 0,
              transform: "scale(1) translate(-50%, 50%)",
              transformOrigin: "0% 100%",
              [`&.${Ne.invisible}`]: {
                transform: "scale(0) translate(-50%, 50%)",
              },
            },
          t.anchorOrigin.vertical === "top" &&
            t.anchorOrigin.horizontal === "right" && t.overlap === "circular" &&
            {
              top: "14%",
              right: "14%",
              transform: "scale(1) translate(50%, -50%)",
              transformOrigin: "100% 0%",
              [`&.${Ne.invisible}`]: {
                transform: "scale(0) translate(50%, -50%)",
              },
            },
          t.anchorOrigin.vertical === "bottom" &&
            t.anchorOrigin.horizontal === "right" && t.overlap === "circular" &&
            {
              bottom: "14%",
              right: "14%",
              transform: "scale(1) translate(50%, 50%)",
              transformOrigin: "100% 100%",
              [`&.${Ne.invisible}`]: {
                transform: "scale(0) translate(50%, 50%)",
              },
            },
          t.anchorOrigin.vertical === "top" &&
            t.anchorOrigin.horizontal === "left" && t.overlap === "circular" &&
            {
              top: "14%",
              left: "14%",
              transform: "scale(1) translate(-50%, -50%)",
              transformOrigin: "0% 0%",
              [`&.${Ne.invisible}`]: {
                transform: "scale(0) translate(-50%, -50%)",
              },
            },
          t.anchorOrigin.vertical === "bottom" &&
            t.anchorOrigin.horizontal === "left" && t.overlap === "circular" &&
            {
              bottom: "14%",
              left: "14%",
              transform: "scale(1) translate(-50%, 50%)",
              transformOrigin: "0% 100%",
              [`&.${Ne.invisible}`]: {
                transform: "scale(0) translate(-50%, 50%)",
              },
            },
          t.invisible &&
            {
              transition: e.transitions.create("transform", {
                easing: e.transitions.easing.easeInOut,
                duration: e.transitions.duration.leavingScreen,
              }),
            },
        )
      );
  });
var tp = d(() => {
  ep();
});
var $S,
  rp = d(() => {
    w();
    $S = g("MuiBottomNavigation", ["root"]);
  });
var op = d(() => {
  rp();
});
var qS,
  sp = d(() => {
    w();
    qS = g("MuiBottomNavigationAction", [
      "root",
      "iconOnly",
      "selected",
      "label",
    ]);
  });
var np = d(() => {
  sp();
});
var ip = d(() => {});
var ZS,
  ap = d(() => {
    w();
    ZS = g("MuiBreadcrumbs", ["root", "ol", "li", "separator"]);
  });
var lp = d(() => {
  ap();
});
function pp(e) {
  return T("MuiButton", e);
}
var P1,
  _t,
  _s = d(() => {
    w();
    P1 = g("MuiButton", [
      "root",
      "text",
      "textInherit",
      "textPrimary",
      "textSecondary",
      "outlined",
      "outlinedInherit",
      "outlinedPrimary",
      "outlinedSecondary",
      "contained",
      "containedInherit",
      "containedPrimary",
      "containedSecondary",
      "disableElevation",
      "focusVisible",
      "disabled",
      "colorInherit",
      "textSizeSmall",
      "textSizeMedium",
      "textSizeLarge",
      "outlinedSizeSmall",
      "outlinedSizeMedium",
      "outlinedSizeLarge",
      "containedSizeSmall",
      "containedSizeMedium",
      "containedSizeLarge",
      "sizeMedium",
      "sizeSmall",
      "sizeLarge",
      "fullWidth",
      "startIcon",
      "endIcon",
      "iconSizeSmall",
      "iconSizeMedium",
      "iconSizeLarge",
    ]), _t = P1;
  });
import S1 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import be from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import { forwardRef as B1 } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as cp } from "https://esm.sh/react/jsx-runtime";
import { jsxs as U1 } from "https://esm.sh/react/jsx-runtime";
var M1,
  I1,
  up,
  j1,
  A1,
  R1,
  E1,
  Rr,
  mp = d(() => {
    oe();
    w();
    ve();
    pe();
    Ue();
    Ot();
    ze();
    _s();
    M1 = [
      "children",
      "color",
      "component",
      "disabled",
      "disableElevation",
      "disableFocusRipple",
      "endIcon",
      "focusVisibleClassName",
      "fullWidth",
      "size",
      "startIcon",
      "type",
      "variant",
    ],
      I1 = (e) => {
        let {
            color: t,
            disableElevation: r,
            fullWidth: o,
            size: s,
            variant: i,
            classes: l,
          } = e,
          c = {
            root: [
              "root",
              i,
              `${i}${_(t)}`,
              `size${_(s)}`,
              `${i}Size${_(s)}`,
              t === "inherit" && "colorInherit",
              r && "disableElevation",
              o && "fullWidth",
            ],
            label: ["label"],
            startIcon: ["startIcon", `iconSize${_(s)}`],
            endIcon: ["endIcon", `iconSize${_(s)}`],
          },
          a = Q(c, pp, l);
        return be({}, l, a);
      },
      up = (e) =>
        be(
          {},
          e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
          e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
          e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } },
        ),
      j1 = L(ot, {
        shouldForwardProp: (e) => bs(e) || e === "classes",
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [
            t.root,
            t[r.variant],
            t[`${r.variant}${_(r.color)}`],
            t[`size${_(r.size)}`],
            t[`${r.variant}Size${_(r.size)}`],
            r.color === "inherit" && t.colorInherit,
            r.disableElevation && t.disableElevation,
            r.fullWidth && t.fullWidth,
          ];
        },
      })(({ theme: e, ownerState: t }) =>
        be(
          {},
          e.typography.button,
          {
            minWidth: 64,
            padding: "6px 16px",
            borderRadius: e.shape.borderRadius,
            transition: e.transitions.create([
              "background-color",
              "box-shadow",
              "border-color",
              "color",
            ], { duration: e.transitions.duration.short }),
            "&:hover": be(
              {
                textDecoration: "none",
                backgroundColor: ae(
                  e.palette.text.primary,
                  e.palette.action.hoverOpacity,
                ),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              t.variant === "text" && t.color !== "inherit" &&
                {
                  backgroundColor: ae(
                    e.palette[t.color].main,
                    e.palette.action.hoverOpacity,
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              t.variant === "outlined" && t.color !== "inherit" &&
                {
                  border: `1px solid ${e.palette[t.color].main}`,
                  backgroundColor: ae(
                    e.palette[t.color].main,
                    e.palette.action.hoverOpacity,
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              t.variant === "contained" &&
                {
                  backgroundColor: e.palette.grey.A100,
                  boxShadow: e.shadows[4],
                  "@media (hover: none)": {
                    boxShadow: e.shadows[2],
                    backgroundColor: e.palette.grey[300],
                  },
                },
              t.variant === "contained" && t.color !== "inherit" &&
                {
                  backgroundColor: e.palette[t.color].dark,
                  "@media (hover: none)": {
                    backgroundColor: e.palette[t.color].main,
                  },
                },
            ),
            "&:active": be(
              {},
              t.variant === "contained" && { boxShadow: e.shadows[8] },
            ),
            [`&.${_t.focusVisible}`]: be(
              {},
              t.variant === "contained" && { boxShadow: e.shadows[6] },
            ),
            [`&.${_t.disabled}`]: be(
              { color: e.palette.action.disabled },
              t.variant === "outlined" &&
                { border: `1px solid ${e.palette.action.disabledBackground}` },
              t.variant === "outlined" && t.color === "secondary" &&
                { border: `1px solid ${e.palette.action.disabled}` },
              t.variant === "contained" &&
                {
                  color: e.palette.action.disabled,
                  boxShadow: e.shadows[0],
                  backgroundColor: e.palette.action.disabledBackground,
                },
            ),
          },
          t.variant === "text" && { padding: "6px 8px" },
          t.variant === "text" && t.color !== "inherit" &&
            { color: e.palette[t.color].main },
          t.variant === "outlined" &&
            {
              padding: "5px 15px",
              border: `1px solid ${
                e.palette.mode === "light"
                  ? "rgba(0, 0, 0, 0.23)"
                  : "rgba(255, 255, 255, 0.23)"
              }`,
            },
          t.variant === "outlined" && t.color !== "inherit" &&
            {
              color: e.palette[t.color].main,
              border: `1px solid ${ae(e.palette[t.color].main, .5)}`,
            },
          t.variant === "contained" &&
            {
              color: e.palette.getContrastText(e.palette.grey[300]),
              backgroundColor: e.palette.grey[300],
              boxShadow: e.shadows[2],
            },
          t.variant === "contained" && t.color !== "inherit" &&
            {
              color: e.palette[t.color].contrastText,
              backgroundColor: e.palette[t.color].main,
            },
          t.color === "inherit" &&
            { color: "inherit", borderColor: "currentColor" },
          t.size === "small" && t.variant === "text" &&
            { padding: "4px 5px", fontSize: e.typography.pxToRem(13) },
          t.size === "large" && t.variant === "text" &&
            { padding: "8px 11px", fontSize: e.typography.pxToRem(15) },
          t.size === "small" && t.variant === "outlined" &&
            { padding: "3px 9px", fontSize: e.typography.pxToRem(13) },
          t.size === "large" && t.variant === "outlined" &&
            { padding: "7px 21px", fontSize: e.typography.pxToRem(15) },
          t.size === "small" && t.variant === "contained" &&
            { padding: "4px 10px", fontSize: e.typography.pxToRem(13) },
          t.size === "large" && t.variant === "contained" &&
            { padding: "8px 22px", fontSize: e.typography.pxToRem(15) },
          t.fullWidth && { width: "100%" },
        ), ({ ownerState: e }) =>
        e.disableElevation &&
        {
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
          [`&.${_t.focusVisible}`]: { boxShadow: "none" },
          "&:active": { boxShadow: "none" },
          [`&.${_t.disabled}`]: { boxShadow: "none" },
        }),
      A1 = L("span", {
        name: "MuiButton",
        slot: "StartIcon",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [t.startIcon, t[`iconSize${_(r.size)}`]];
        },
      })(({ ownerState: e }) =>
        be(
          { display: "inherit", marginRight: 8, marginLeft: -4 },
          e.size === "small" && { marginLeft: -2 },
          up(e),
        )
      ),
      R1 = L("span", {
        name: "MuiButton",
        slot: "EndIcon",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [t.endIcon, t[`iconSize${_(r.size)}`]];
        },
      })(({ ownerState: e }) =>
        be(
          { display: "inherit", marginRight: -4, marginLeft: 8 },
          e.size === "small" && { marginRight: -2 },
          up(e),
        )
      ),
      E1 = B1(function (t, r) {
        let o = X({ props: t, name: "MuiButton" }),
          {
            children: s,
            color: i = "primary",
            component: l = "button",
            disabled: c = !1,
            disableElevation: a = !1,
            disableFocusRipple: n = !1,
            endIcon: p,
            focusVisibleClassName: u,
            fullWidth: f = !1,
            size: m = "medium",
            startIcon: h,
            type: b,
            variant: y = "text",
          } = o,
          C = S1(o, M1),
          x = be({}, o, {
            color: i,
            component: l,
            disabled: c,
            disableElevation: a,
            disableFocusRipple: n,
            fullWidth: f,
            size: m,
            type: b,
            variant: y,
          }),
          v = I1(x),
          k = h &&
            cp(A1, { className: v.startIcon, ownerState: x, children: h }),
          S = p && cp(R1, { className: v.endIcon, ownerState: x, children: p });
        return U1(
          j1,
          be(
            {
              ownerState: x,
              component: l,
              disabled: c,
              focusRipple: !n,
              focusVisibleClassName: O(v.focusVisible, u),
              ref: r,
              type: b,
            },
            C,
            { classes: v, children: [k, s, S] },
          ),
        );
      }),
      Rr = E1;
  });
var Ds = d(() => {
  mp();
  _s();
});
var P7,
  dp = d(() => {
    w();
    P7 = g("MuiButtonGroup", [
      "root",
      "contained",
      "outlined",
      "text",
      "disableElevation",
      "disabled",
      "fullWidth",
      "vertical",
      "grouped",
      "groupedHorizontal",
      "groupedVertical",
      "groupedText",
      "groupedTextHorizontal",
      "groupedTextVertical",
      "groupedTextPrimary",
      "groupedTextSecondary",
      "groupedOutlined",
      "groupedOutlinedHorizontal",
      "groupedOutlinedVertical",
      "groupedOutlinedPrimary",
      "groupedOutlinedSecondary",
      "groupedContained",
      "groupedContainedHorizontal",
      "groupedContainedVertical",
      "groupedContainedPrimary",
      "groupedContainedSecondary",
    ]);
  });
var fp = d(() => {
  dp();
});
var j7,
  hp = d(() => {
    w();
    j7 = g("MuiCard", ["root"]);
  });
var bp = d(() => {
  hp();
});
var L7,
  gp = d(() => {
    w();
    L7 = g("MuiCardActionArea", ["root", "focusVisible", "focusHighlight"]);
  });
var yp = d(() => {
  gp();
});
var N7,
  xp = d(() => {
    w();
    N7 = g("MuiCardActions", ["root", "spacing"]);
  });
var kp = d(() => {
  xp();
});
var H7,
  Cp = d(() => {
    w();
    H7 = g("MuiCardContent", ["root"]);
  });
var vp = d(() => {
  Cp();
});
var Q7,
  Tp = d(() => {
    w();
    Q7 = g("MuiCardHeader", [
      "root",
      "avatar",
      "action",
      "content",
      "title",
      "subheader",
    ]);
  });
var wp = d(() => {
  Tp();
});
var t9,
  Pp = d(() => {
    w();
    t9 = g("MuiCardMedia", ["root", "media", "img"]);
  });
var Sp = d(() => {
  Pp();
});
var i9,
  Mp = d(() => {
    w();
    i9 = g("MuiCheckbox", [
      "root",
      "checked",
      "disabled",
      "indeterminate",
      "colorPrimary",
      "colorSecondary",
    ]);
  });
var Up = d(() => {
  Mp();
});
var u9,
  Ip = d(() => {
    w();
    u9 = g("MuiCircularProgress", [
      "root",
      "determinate",
      "indeterminate",
      "colorPrimary",
      "colorSecondary",
      "svg",
      "circle",
      "circleDeterminate",
      "circleIndeterminate",
      "circleDisableShrink",
    ]);
  });
var jp = d(() => {
  Ip();
});
import {
  cloneElement as w9,
  Fragment as T9,
  useEffect as v9,
  useRef as C9,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as x9 } from "https://esm.sh/react/jsx-runtime";
var Ap = d(() => {});
var Rp = d(() => {
  Ap();
});
var Ep = d(() => {
  Rp();
});
var j9,
  Bp = d(() => {
    w();
    j9 = g("MuiContainer", [
      "root",
      "disableGutters",
      "fixed",
      "maxWidthXs",
      "maxWidthSm",
      "maxWidthMd",
      "maxWidthLg",
      "maxWidthXl",
    ]);
  });
var Lp = d(() => {
  Bp();
});
var Op = d(() => {});
var _p = d(() => {});
var Dp = d(() => {});
import D9 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import L1 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import {
  forwardRef as Q9,
  useState as X9,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as G9 } from "https://esm.sh/react/jsx-runtime";
var q9,
  K9,
  zp = d(() => {
    pe();
    Bs();
    q9 = L("div", {
      name: "MuiModal",
      slot: "Root",
      overridesResolver: (e, t) => {
        let { ownerState: r } = e;
        return [t.root, !r.open && r.exited && t.hidden];
      },
    })(({ theme: e, ownerState: t }) =>
      L1({
        position: "fixed",
        zIndex: e.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      }, !t.open && t.exited && { visibility: "hidden" })
    ),
      K9 = L(Rs, {
        name: "MuiModal",
        slot: "Backdrop",
        overridesResolver: (e, t) => t.backdrop,
      })({ zIndex: -1 });
  });
var Np = d(() => {
  ss();
  zp();
});
var rM,
  Fp = d(() => {
    w();
    rM = g("MuiDialog", [
      "root",
      "scrollPaper",
      "scrollBody",
      "container",
      "paper",
      "paperScrollPaper",
      "paperScrollBody",
      "paperWidthFalse",
      "paperWidthXs",
      "paperWidthSm",
      "paperWidthMd",
      "paperWidthLg",
      "paperWidthXl",
      "paperFullWidth",
      "paperFullScreen",
    ]);
  });
var $p = d(() => {
  Fp();
});
var aM,
  Vp = d(() => {
    w();
    aM = g("MuiDialogActions", ["root", "spacing"]);
  });
var Wp = d(() => {
  Vp();
});
var mM,
  Hp = d(() => {
    w();
    mM = g("MuiDialogContent", ["root", "dividers"]);
  });
var hM,
  Gp = d(() => {
    w();
    hM = g("MuiDialogTitle", ["root"]);
  });
var qp = d(() => {
  Hp();
});
var kM,
  Kp = d(() => {
    w();
    kM = g("MuiDialogContentText", ["root"]);
  });
var Jp = d(() => {
  Kp();
});
var Qp = d(() => {
  Gp();
});
var MM,
  Xp = d(() => {
    w();
    MM = g("MuiDivider", [
      "root",
      "absolute",
      "fullWidth",
      "inset",
      "middle",
      "flexItem",
      "light",
      "vertical",
      "withChildren",
      "withChildrenVertical",
      "textAlignRight",
      "textAlignLeft",
      "wrapper",
      "wrapperVertical",
    ]);
  });
var Yp = d(() => {
  Xp();
});
var Zp = d(() => {});
var EM,
  ec = d(() => {
    w();
    EM = g("MuiDrawer", [
      "root",
      "docked",
      "paper",
      "paperAnchorLeft",
      "paperAnchorRight",
      "paperAnchorTop",
      "paperAnchorBottom",
      "paperAnchorDockedLeft",
      "paperAnchorDockedRight",
      "paperAnchorDockedTop",
      "paperAnchorDockedBottom",
      "modal",
    ]);
  });
var tc = d(() => {
  ec();
});
function rc(e) {
  return T("MuiFab", e);
}
var O1,
  zs,
  Ns = d(() => {
    w();
    O1 = g("MuiFab", [
      "root",
      "primary",
      "secondary",
      "extended",
      "circular",
      "focusVisible",
      "disabled",
      "colorInherit",
      "sizeSmall",
      "sizeMedium",
      "sizeLarge",
    ]), zs = O1;
  });
import _1 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import Er from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import { forwardRef as V1 } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as z1 } from "https://esm.sh/react/jsx-runtime";
var D1,
  N1,
  F1,
  $1,
  yt,
  oc = d(() => {
    oe();
    w();
    Ot();
    ze();
    Ue();
    Ns();
    pe();
    D1 = [
      "children",
      "className",
      "color",
      "component",
      "disabled",
      "disableFocusRipple",
      "focusVisibleClassName",
      "size",
      "variant",
    ],
      N1 = (e) => {
        let { color: t, variant: r, classes: o, size: s } = e,
          i = {
            root: [
              "root",
              r,
              `size${_(s)}`,
              t === "inherit" && "colorInherit",
              t === "primary" && "primary",
              t === "secondary" && "secondary",
            ],
          };
        return Q(i, rc, o);
      },
      F1 = L(ot, {
        name: "MuiFab",
        slot: "Root",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [
            t.root,
            t[r.variant],
            t[`size${_(r.size)}`],
            r.color === "inherit" && t.colorInherit,
            r.color === "primary" && t.primary,
            r.color === "secondary" && t.secondary,
          ];
        },
      })(({ theme: e, ownerState: t }) =>
        Er(
          {},
          e.typography.button,
          {
            minHeight: 36,
            transition: e.transitions.create([
              "background-color",
              "box-shadow",
              "border-color",
            ], { duration: e.transitions.duration.short }),
            borderRadius: "50%",
            padding: 0,
            minWidth: 0,
            width: 56,
            height: 56,
            boxShadow: e.shadows[6],
            "&:active": { boxShadow: e.shadows[12] },
            color: e.palette.getContrastText(e.palette.grey[300]),
            backgroundColor: e.palette.grey[300],
            "&:hover": {
              backgroundColor: e.palette.grey.A100,
              "@media (hover: none)": { backgroundColor: e.palette.grey[300] },
              textDecoration: "none",
            },
            [`&.${zs.focusVisible}`]: { boxShadow: e.shadows[6] },
            [`&.${zs.disabled}`]: {
              color: e.palette.action.disabled,
              boxShadow: e.shadows[0],
              backgroundColor: e.palette.action.disabledBackground,
            },
          },
          t.size === "small" && { width: 40, height: 40 },
          t.size === "medium" && { width: 48, height: 48 },
          t.variant === "extended" &&
            {
              borderRadius: 48 / 2,
              padding: "0 16px",
              width: "auto",
              minHeight: "auto",
              minWidth: 48,
              height: 48,
            },
          t.variant === "extended" && t.size === "small" &&
            {
              width: "auto",
              padding: "0 8px",
              borderRadius: 34 / 2,
              minWidth: 34,
              height: 34,
            },
          t.variant === "extended" && t.size === "medium" &&
            {
              width: "auto",
              padding: "0 16px",
              borderRadius: 40 / 2,
              minWidth: 40,
              height: 40,
            },
          t.color === "inherit" && { color: "inherit" },
        ), ({ theme: e, ownerState: t }) =>
        Er(
          {},
          t.color === "primary" &&
            {
              color: e.palette.primary.contrastText,
              backgroundColor: e.palette.primary.main,
              "&:hover": {
                backgroundColor: e.palette.primary.dark,
                "@media (hover: none)": {
                  backgroundColor: e.palette.primary.main,
                },
              },
            },
          t.color === "secondary" &&
            {
              color: e.palette.secondary.contrastText,
              backgroundColor: e.palette.secondary.main,
              "&:hover": {
                backgroundColor: e.palette.secondary.dark,
                "@media (hover: none)": {
                  backgroundColor: e.palette.secondary.main,
                },
              },
            },
        )),
      $1 = V1(function (t, r) {
        let o = X({ props: t, name: "MuiFab" }),
          {
            children: s,
            className: i,
            color: l = "default",
            component: c = "button",
            disabled: a = !1,
            disableFocusRipple: n = !1,
            focusVisibleClassName: p,
            size: u = "large",
            variant: f = "circular",
          } = o,
          m = _1(o, D1),
          h = Er({}, o, {
            color: l,
            component: c,
            disabled: a,
            disableFocusRipple: n,
            size: u,
            variant: f,
          }),
          b = N1(h);
        return z1(
          F1,
          Er(
            {
              className: O(b.root, i),
              component: c,
              disabled: a,
              focusRipple: !n,
              focusVisibleClassName: O(b.focusVisible, p),
              ownerState: h,
              ref: r,
            },
            m,
            { children: s },
          ),
        );
      }),
      yt = $1;
  });
var Fs = d(() => {
  oc();
  Ns();
});
var sc = d(() => {
  $l();
});
var nc = d(() => {
  Wl();
});
var aU,
  ic = d(() => {
    w();
    aU = g("MuiFormControl", [
      "root",
      "marginNone",
      "marginNormal",
      "marginDense",
      "fullWidth",
      "disabled",
    ]);
  });
var ac = d(() => {
  ic();
});
var mU,
  lc = d(() => {
    w();
    mU = g("MuiFormControlLabel", [
      "root",
      "labelPlacementStart",
      "labelPlacementTop",
      "labelPlacementBottom",
      "disabled",
      "label",
    ]);
  });
var pc = d(() => {
  lc();
});
var gU,
  cc = d(() => {
    w();
    gU = g("MuiFormGroup", ["root", "row"]);
  });
var uc = d(() => {
  cc();
});
var vU,
  mc = d(() => {
    w();
    vU = g("MuiFormHelperText", [
      "root",
      "error",
      "disabled",
      "sizeSmall",
      "sizeMedium",
      "contained",
      "focused",
      "filled",
      "required",
    ]);
  });
var dc = d(() => {
  mc();
});
var W1,
  Dt,
  $s = d(() => {
    w();
    W1 = g("MuiFormLabel", [
      "root",
      "colorSecondary",
      "focused",
      "disabled",
      "error",
      "filled",
      "required",
      "asterisk",
    ]), Dt = W1;
  });
import jU from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import fc from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import { forwardRef as VU } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsxs as zU } from "https://esm.sh/react/jsx-runtime";
var NU,
  FU,
  hc = d(() => {
    oe();
    pe();
    $s();
    NU = L("label", {
      name: "MuiFormLabel",
      slot: "Root",
      overridesResolver: ({ ownerState: e }, t) =>
        fc(
          {},
          t.root,
          e.color === "secondary" && t.colorSecondary,
          e.filled && t.filled,
        ),
    })(({ theme: e, ownerState: t }) =>
      fc({ color: e.palette.text.secondary }, e.typography.body1, {
        lineHeight: "1.4375em",
        padding: 0,
        position: "relative",
        [`&.${Dt.focused}`]: { color: e.palette[t.color].main },
        [`&.${Dt.disabled}`]: { color: e.palette.text.disabled },
        [`&.${Dt.error}`]: { color: e.palette.error.main },
      })
    ),
      FU = L("span", {
        name: "MuiFormLabel",
        slot: "Asterisk",
        overridesResolver: (e, t) => t.asterisk,
      })(({ theme: e }) => ({
        [`&.${Dt.error}`]: { color: e.palette.error.main },
      }));
  });
var bc = d(() => {
  hc();
  $s();
});
var H1,
  G1,
  q1,
  zt,
  KU,
  gc = d(() => {
    w();
    H1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      G1 = ["column-reverse", "column", "row-reverse", "row"],
      q1 = ["nowrap", "wrap-reverse", "wrap"],
      zt = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      KU = g("MuiGrid", [
        "root",
        "container",
        "item",
        "zeroMinWidth",
        ...H1.map((e) => `spacing-xs-${e}`),
        ...G1.map((e) => `direction-xs-${e}`),
        ...q1.map((e) => `wrap-xs-${e}`),
        ...zt.map((e) => `grid-xs-${e}`),
        ...zt.map((e) => `grid-sm-${e}`),
        ...zt.map((e) => `grid-md-${e}`),
        ...zt.map((e) => `grid-lg-${e}`),
        ...zt.map((e) => `grid-xl-${e}`),
      ]);
  });
var yc = d(() => {
  gc();
});
var xc = d(() => {});
var kc = d(() => {});
var Cc = d(() => {});
var rI,
  vc = d(() => {
    w();
    rI = g("MuiIcon", [
      "root",
      "colorPrimary",
      "colorSecondary",
      "colorAction",
      "colorError",
      "colorDisabled",
      "fontSizeInherit",
      "fontSizeSmall",
      "fontSizeMedium",
      "fontSizeLarge",
    ]);
  });
var Tc = d(() => {
  vc();
});
var aI,
  wc = d(() => {
    w();
    aI = g("MuiImageList", ["root", "masonry", "quilted", "standard", "woven"]);
  });
var Pc = d(() => {
  wc();
});
var mI,
  Sc = d(() => {
    w();
    mI = g("MuiImageListItem", [
      "root",
      "img",
      "standard",
      "woven",
      "masonry",
      "quilted",
    ]);
  });
var Mc = d(() => {
  Sc();
});
var gI,
  Uc = d(() => {
    w();
    gI = g("MuiImageListItemBar", [
      "root",
      "positionBottom",
      "positionTop",
      "positionBelow",
      "titleWrap",
      "titleWrapBottom",
      "titleWrapTop",
      "titleWrapBelow",
      "titleWrapActionPosLeft",
      "titleWrapActionPosRight",
      "title",
      "subtitle",
      "actionIcon",
      "actionIconActionPosLeft",
      "actionIconActionPosRight",
    ]);
  });
var Ic = d(() => {
  Uc();
});
var jc = d(() => {
  Fl();
});
var wI,
  Ac = d(() => {
    w();
    wI = g("MuiInputAdornment", [
      "root",
      "filled",
      "standard",
      "outlined",
      "positionStart",
      "positionEnd",
      "disablePointerEvents",
      "hiddenLabel",
      "sizeSmall",
    ]);
  });
var Rc = d(() => {
  Ac();
});
var II,
  Ec = d(() => {
    w();
    II = g("MuiInputLabel", [
      "root",
      "focused",
      "disabled",
      "error",
      "required",
      "asterisk",
      "formControl",
      "sizeSmall",
      "shrink",
      "animated",
      "standard",
      "filled",
      "outlined",
    ]);
  });
var Bc = d(() => {
  Ec();
});
var BI,
  Lc = d(() => {
    w();
    BI = g("MuiLinearProgress", [
      "root",
      "colorPrimary",
      "colorSecondary",
      "determinate",
      "indeterminate",
      "buffer",
      "query",
      "dashed",
      "dashedColorPrimary",
      "dashedColorSecondary",
      "bar",
      "barColorPrimary",
      "barColorSecondary",
      "bar1Indeterminate",
      "bar1Determinate",
      "bar1Buffer",
      "bar2Indeterminate",
      "bar2Buffer",
    ]);
  });
var Oc = d(() => {
  Lc();
});
var zI,
  _c = d(() => {
    w();
    zI = g("MuiLink", [
      "root",
      "underlineNone",
      "underlineHover",
      "underlineAlways",
      "button",
      "focusVisible",
    ]);
  });
var Dc = d(() => {
  _c();
});
var WI,
  zc = d(() => {
    w();
    WI = g("MuiList", ["root", "padding", "dense", "subheader"]);
  });
var Nc = d(() => {
  zc();
});
var JI,
  Fc = d(() => {
    w();
    JI = g("MuiListItem", [
      "root",
      "container",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "padding",
      "button",
      "secondaryAction",
      "selected",
    ]);
  });
var YI,
  $c = d(() => {
    w();
    YI = g("MuiListItemButton", [
      "root",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]);
  });
var Vc = d(() => {
  $c();
});
var oj,
  Wc = d(() => {
    w();
    oj = g("MuiListItemSecondaryAction", ["root", "disableGutters"]);
  });
var Hc = d(() => {
  Wc();
});
var Gc = d(() => {
  Fc();
});
var cj,
  qc = d(() => {
    w();
    cj = g("MuiListItemAvatar", ["root", "alignItemsFlexStart"]);
  });
var Kc = d(() => {
  qc();
});
var hj,
  Jc = d(() => {
    w();
    hj = g("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
  });
var Qc = d(() => {
  Jc();
});
var kj,
  Xc = d(() => {
    w();
    kj = g("MuiListItemText", [
      "root",
      "multiline",
      "dense",
      "inset",
      "primary",
      "secondary",
    ]);
  });
var Yc = d(() => {
  Xc();
});
var Zc = d(() => {});
var Sj,
  eu = d(() => {
    w();
    Sj = g("MuiPopover", ["root", "paper"]);
  });
var tu = d(() => {
  eu();
});
var Aj,
  ru = d(() => {
    w();
    Aj = g("MuiMenu", ["root", "paper", "list"]);
  });
var ou = d(() => {
  ru();
});
var Oj,
  su = d(() => {
    w();
    Oj = g("MuiMenuItem", [
      "root",
      "focusVisible",
      "dense",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]);
  });
var nu = d(() => {
  su();
});
var Fj,
  iu = d(() => {
    w();
    Fj = g("MuiMobileStepper", [
      "root",
      "positionBottom",
      "positionTop",
      "positionStatic",
      "dots",
      "dot",
      "dotActive",
      "progress",
    ]);
  });
var au = d(() => {
  iu();
});
var Gj,
  lu = d(() => {
    w();
    Gj = g("MuiNativeSelect", [
      "root",
      "select",
      "filled",
      "outlined",
      "standard",
      "disabled",
      "icon",
      "iconOpen",
      "iconFilled",
      "iconOutlined",
      "iconStandard",
      "nativeInput",
    ]);
  });
var pu = d(() => {
  lu();
});
var cu = d(() => {});
var uu = d(() => {
  Vl();
});
var eA,
  mu = d(() => {
    w();
    eA = g("MuiPagination", ["root", "ul", "outlined", "text"]);
  });
var du = d(() => {});
var sA,
  fu = d(() => {
    w();
    sA = g("MuiPaginationItem", [
      "root",
      "page",
      "sizeSmall",
      "sizeLarge",
      "text",
      "textPrimary",
      "textSecondary",
      "outlined",
      "outlinedPrimary",
      "outlinedSecondary",
      "rounded",
      "ellipsis",
      "firstLast",
      "previousNext",
      "focusVisible",
      "disabled",
      "selected",
      "icon",
    ]);
  });
var hu = d(() => {
  fu();
});
var bu = d(() => {
  mu();
});
var uA,
  gu = d(() => {
    w();
    uA = g("MuiRadio", [
      "root",
      "checked",
      "disabled",
      "colorPrimary",
      "colorSecondary",
    ]);
  });
var yu = d(() => {
  gu();
});
var xu = d(() => {});
var gA,
  ku = d(() => {
    w();
    gA = g("MuiRating", [
      "root",
      "sizeSmall",
      "sizeMedium",
      "sizeLarge",
      "readOnly",
      "disabled",
      "focusVisible",
      "visuallyHidden",
      "pristine",
      "label",
      "labelEmptyValueActive",
      "icon",
      "iconEmpty",
      "iconFilled",
      "iconHover",
      "iconFocus",
      "iconActive",
      "decimal",
    ]);
  });
var Cu = d(() => {
  ku();
});
var vA,
  vu = d(() => {
    w();
    vA = g("MuiScopedCssBaseline", ["root"]);
  });
var Tu = d(() => {
  vu();
});
var MA,
  wu = d(() => {
    w();
    MA = g("MuiSelect", [
      "root",
      "select",
      "filled",
      "outlined",
      "standard",
      "disabled",
      "focused",
      "icon",
      "iconOpen",
      "iconFilled",
      "iconOutlined",
      "iconStandard",
      "nativeInput",
    ]);
  });
var Pu = d(() => {
  wu();
});
var RA,
  Su = d(() => {
    w();
    RA = g("MuiSkeleton", [
      "root",
      "text",
      "rectangular",
      "circular",
      "pulse",
      "wave",
      "withChildren",
      "fitContent",
      "heightAuto",
    ]);
  });
var Mu = d(() => {
  Su();
});
import zA from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import ge from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import { forwardRef as sR } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import B from "https://esm.sh/prop-types";
import { jsx as QA } from "https://esm.sh/react/jsx-runtime";
var Fe,
  K1,
  XA,
  YA,
  ZA,
  eR,
  tR,
  rR,
  Uu = d(() => {
    oe();
    w();
    as();
    ve();
    pe();
    ze();
    Fe = ge(
      {},
      rt,
      g("MuiSlider", [
        "colorPrimary",
        "colorSecondary",
        "thumbColorPrimary",
        "thumbColorSecondary",
        "sizeSmall",
        "thumbSizeSmall",
      ]),
    ),
      K1 = L("span", {
        name: "MuiSlider",
        slot: "Root",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e,
            o = r.marksProp === !0 && r.step !== null
              ? [...Array(Math.floor((r.max - r.min) / r.step) + 1)].map((
                i,
                l,
              ) => ({ value: r.min + r.step * l }))
              : r.marksProp || [],
            s = o.length > 0 && o.some((i) => i.label);
          return [
            t.root,
            t[`color${_(r.color)}`],
            r.size !== "medium" && t[`size${_(r.size)}`],
            s && t.marked,
            r.orientation === "vertical" && t.vertical,
            r.track === "inverted" && t.trackInverted,
            r.track === !1 && t.trackFalse,
          ];
        },
      })(({ theme: e, ownerState: t }) =>
        ge(
          {
            borderRadius: 12,
            boxSizing: "content-box",
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            touchAction: "none",
            color: e.palette[t.color].main,
            WebkitTapHighlightColor: "transparent",
          },
          t.orientation === "horizontal" &&
            ge(
              {
                height: 4,
                width: "100%",
                padding: "13px 0",
                "@media (pointer: coarse)": { padding: "20px 0" },
              },
              t.size === "small" && { height: 2 },
              t.marked && { marginBottom: 20 },
            ),
          t.orientation === "vertical" &&
            ge(
              {
                height: "100%",
                width: 4,
                padding: "0 13px",
                "@media (pointer: coarse)": { padding: "0 20px" },
              },
              t.size === "small" && { width: 2 },
              t.marked && { marginRight: 44 },
            ),
          {
            "@media print": { colorAdjust: "exact" },
            [`&.${Fe.disabled}`]: {
              pointerEvents: "none",
              cursor: "default",
              color: e.palette.grey[400],
            },
            [`&.${Fe.dragging}`]: {
              [`& .${Fe.thumb}, & .${Fe.track}`]: { transition: "none" },
            },
          },
        )
      ),
      XA = L("span", {
        name: "MuiSlider",
        slot: "Rail",
        overridesResolver: (e, t) => t.rail,
      })(({ ownerState: e }) =>
        ge(
          {
            display: "block",
            position: "absolute",
            borderRadius: "inherit",
            backgroundColor: "currentColor",
            opacity: .38,
          },
          e.orientation === "horizontal" &&
            {
              width: "100%",
              height: "inherit",
              top: "50%",
              transform: "translateY(-50%)",
            },
          e.orientation === "vertical" &&
            {
              height: "100%",
              width: "inherit",
              left: "50%",
              transform: "translateX(-50%)",
            },
          e.track === "inverted" && { opacity: 1 },
        )
      ),
      YA = L("span", {
        name: "MuiSlider",
        slot: "Track",
        overridesResolver: (e, t) => t.track,
      })(({ theme: e, ownerState: t }) => {
        let r = e.palette.mode === "light"
          ? Bt(e.palette[t.color].main, .62)
          : Et(e.palette[t.color].main, .5);
        return ge(
          {
            display: "block",
            position: "absolute",
            borderRadius: "inherit",
            border: "1px solid currentColor",
            backgroundColor: "currentColor",
            transition: e.transitions.create([
              "left",
              "width",
              "bottom",
              "height",
            ], { duration: e.transitions.duration.shortest }),
          },
          t.size === "small" && { border: "none" },
          t.orientation === "horizontal" &&
            { height: "inherit", top: "50%", transform: "translateY(-50%)" },
          t.orientation === "vertical" &&
            { width: "inherit", left: "50%", transform: "translateX(-50%)" },
          t.track === !1 && { display: "none" },
          t.track === "inverted" && { backgroundColor: r, borderColor: r },
        );
      }),
      ZA = L("span", {
        name: "MuiSlider",
        slot: "Thumb",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [
            t.thumb,
            t[`thumbColor${_(r.color)}`],
            r.size !== "medium" && t[`thumbSize${_(r.size)}`],
          ];
        },
      })(({ theme: e, ownerState: t }) =>
        ge(
          {
            position: "absolute",
            width: 20,
            height: 20,
            boxSizing: "border-box",
            borderRadius: "50%",
            outline: 0,
            backgroundColor: "currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: e.transitions.create(["box-shadow", "left", "bottom"], {
              duration: e.transitions.duration.shortest,
            }),
          },
          t.size === "small" && { width: 12, height: 12 },
          t.orientation === "horizontal" &&
            { top: "50%", transform: "translate(-50%, -50%)" },
          t.orientation === "vertical" &&
            { left: "50%", transform: "translate(-50%, 50%)" },
          {
            "&:before": ge({
              position: "absolute",
              content: '""',
              borderRadius: "inherit",
              width: "100%",
              height: "100%",
              boxShadow: e.shadows[2],
            }, t.size === "small" && { boxShadow: "none" }),
            "&::after": {
              position: "absolute",
              content: '""',
              borderRadius: "50%",
              width: 42,
              height: 42,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
            [`&:hover, &.${Fe.focusVisible}`]: {
              boxShadow: `0px 0px 0px 8px ${ae(e.palette[t.color].main, .16)}`,
              "@media (hover: none)": { boxShadow: "none" },
            },
            [`&.${Fe.active}`]: {
              boxShadow: `0px 0px 0px 14px ${ae(e.palette[t.color].main, .16)}`,
            },
            [`&.${Fe.disabled}`]: { "&:hover": { boxShadow: "none" } },
          },
        )
      ),
      eR = L(is, {
        name: "MuiSlider",
        slot: "ValueLabel",
        overridesResolver: (e, t) => t.valueLabel,
      })(({ theme: e, ownerState: t }) =>
        ge(
          {
            [`&.${Fe.valueLabelOpen}`]: {
              transform: "translateY(-100%) scale(1)",
            },
            zIndex: 1,
            whiteSpace: "nowrap",
          },
          e.typography.body2,
          {
            fontWeight: 500,
            transition: e.transitions.create(["transform"], {
              duration: e.transitions.duration.shortest,
            }),
            top: -10,
            transformOrigin: "bottom center",
            transform: "translateY(-100%) scale(0)",
            position: "absolute",
            backgroundColor: e.palette.grey[600],
            borderRadius: 2,
            color: e.palette.common.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.25rem 0.75rem",
          },
          t.size === "small" &&
            { fontSize: e.typography.pxToRem(12), padding: "0.25rem 0.5rem" },
          {
            "&:before": {
              position: "absolute",
              content: '""',
              width: 8,
              height: 8,
              bottom: 0,
              left: "50%",
              transform: "translate(-50%, 50%) rotate(45deg)",
              backgroundColor: "inherit",
            },
          },
        )
      ),
      tR = L("span", {
        name: "MuiSlider",
        slot: "Mark",
        shouldForwardProp: (e) => gs(e) && e !== "markActive",
        overridesResolver: (e, t) => t.mark,
      })(({ theme: e, ownerState: t, markActive: r }) =>
        ge(
          {
            position: "absolute",
            width: 2,
            height: 2,
            borderRadius: 1,
            backgroundColor: "currentColor",
          },
          t.orientation === "horizontal" &&
            { top: "50%", transform: "translate(-1px, -50%)" },
          t.orientation === "vertical" &&
            { left: "50%", transform: "translate(-50%, 1px)" },
          r && { backgroundColor: e.palette.background.paper, opacity: .8 },
        )
      ),
      rR = L("span", {
        name: "MuiSlider",
        slot: "MarkLabel",
        shouldForwardProp: (e) => gs(e) && e !== "markLabelActive",
        overridesResolver: (e, t) => t.markLabel,
      })(({ theme: e, ownerState: t, markLabelActive: r }) =>
        ge(
          {},
          e.typography.body2,
          {
            color: e.palette.text.secondary,
            position: "absolute",
            whiteSpace: "nowrap",
          },
          t.orientation === "horizontal" &&
            {
              top: 30,
              transform: "translateX(-50%)",
              "@media (pointer: coarse)": { top: 40 },
            },
          t.orientation === "vertical" &&
            {
              left: 36,
              transform: "translateY(50%)",
              "@media (pointer: coarse)": { left: 44 },
            },
          r && { color: e.palette.text.primary },
        )
      );
    K1.propTypes = {
      children: B.node,
      ownerState: B.shape({
        "aria-label": B.string,
        "aria-labelledby": B.string,
        "aria-valuetext": B.string,
        classes: B.object,
        color: B.oneOf(["primary", "secondary"]),
        defaultValue: B.oneOfType([B.arrayOf(B.number), B.number]),
        disabled: B.bool,
        getAriaLabel: B.func,
        getAriaValueText: B.func,
        isRtl: B.bool,
        marks: B.oneOfType([
          B.arrayOf(B.shape({ label: B.node, value: B.number.isRequired })),
          B.bool,
        ]),
        max: B.number,
        min: B.number,
        name: B.string,
        onChange: B.func,
        onChangeCommitted: B.func,
        orientation: B.oneOf(["horizontal", "vertical"]),
        scale: B.func,
        step: B.number,
        track: B.oneOf(["inverted", "normal", !1]),
        value: B.oneOfType([B.arrayOf(B.number), B.number]),
        valueLabelDisplay: B.oneOf(["auto", "off", "on"]),
        valueLabelFormat: B.oneOfType([B.func, B.string]),
      }),
    };
  });
var Iu = d(() => {
  Uu();
});
var lR,
  ju = d(() => {
    w();
    lR = g("MuiSnackbarContent", ["root", "message", "action"]);
  });
var Au = d(() => {
  ju();
});
var dR,
  Ru = d(() => {
    w();
    dR = g("MuiSnackbar", [
      "root",
      "anchorOriginTopCenter",
      "anchorOriginBottomCenter",
      "anchorOriginTopRight",
      "anchorOriginBottomRight",
      "anchorOriginTopLeft",
      "anchorOriginBottomLeft",
    ]);
  });
var Eu = d(() => {
  Ru();
});
var Bu = d(() => {});
var xR,
  Lu = d(() => {
    w();
    xR = g("MuiSpeedDial", [
      "root",
      "fab",
      "directionUp",
      "directionDown",
      "directionLeft",
      "directionRight",
      "actions",
      "actionsClosed",
    ]);
  });
var Ou = d(() => {
  Lu();
});
var wR,
  _u = d(() => {
    w();
    wR = g("MuiTooltip", [
      "popper",
      "popperInteractive",
      "popperArrow",
      "popperClose",
      "tooltip",
      "tooltipArrow",
      "touch",
      "tooltipPlacementLeft",
      "tooltipPlacementRight",
      "tooltipPlacementTop",
      "tooltipPlacementBottom",
      "arrow",
    ]);
  });
var Du = d(() => {
  _u();
});
var IR,
  zu = d(() => {
    w();
    IR = g("MuiSpeedDialAction", [
      "fab",
      "fabClosed",
      "staticTooltip",
      "staticTooltipClosed",
      "staticTooltipLabel",
      "tooltipPlacementLeft",
      "tooltipPlacementRight",
    ]);
  });
var Nu = d(() => {
  zu();
});
var BR,
  Fu = d(() => {
    w();
    BR = g("MuiSpeedDialIcon", [
      "root",
      "icon",
      "iconOpen",
      "iconWithOpenIconOpen",
      "openIcon",
      "openIconOpen",
    ]);
  });
var $u = d(() => {
  Fu();
});
var Vu = d(() => {});
var NR,
  Wu = d(() => {
    w();
    NR = g("MuiStep", [
      "root",
      "horizontal",
      "vertical",
      "alternativeLabel",
      "completed",
    ]);
  });
var Hu = d(() => {
  Wu();
});
var HR,
  Gu = d(() => {
    w();
    HR = g("MuiStepIcon", ["root", "active", "completed", "error", "text"]);
  });
var qu = d(() => {
  Gu();
});
var QR,
  Ku = d(() => {
    w();
    QR = g("MuiStepLabel", [
      "root",
      "horizontal",
      "vertical",
      "label",
      "active",
      "completed",
      "error",
      "disabled",
      "iconContainer",
      "alternativeLabel",
      "labelContainer",
    ]);
  });
var Ju = d(() => {
  Ku();
});
var tE,
  Qu = d(() => {
    w();
    tE = g("MuiStepButton", ["root", "horizontal", "vertical", "touchRipple"]);
  });
var Xu = d(() => {
  Qu();
});
var iE,
  Yu = d(() => {
    w();
    iE = g("MuiStepConnector", [
      "root",
      "horizontal",
      "vertical",
      "alternativeLabel",
      "active",
      "completed",
      "disabled",
      "line",
      "lineHorizontal",
      "lineVertical",
    ]);
  });
var Zu = d(() => {
  Yu();
});
var uE,
  em = d(() => {
    w();
    uE = g("MuiStepContent", ["root", "last", "transition"]);
  });
var tm = d(() => {
  em();
});
var bE,
  rm = d(() => {
    w();
    bE = g("MuiStepper", [
      "root",
      "horizontal",
      "vertical",
      "alternativeLabel",
    ]);
  });
var om = d(() => {
  rm();
});
var sm = d(() => {});
var vE,
  nm = d(() => {
    w();
    vE = g("MuiSwitch", [
      "root",
      "edgeStart",
      "edgeEnd",
      "switchBase",
      "colorPrimary",
      "colorSecondary",
      "sizeSmall",
      "sizeMedium",
      "checked",
      "disabled",
      "input",
      "thumb",
      "track",
    ]);
  });
var im = d(() => {
  nm();
});
var ME,
  am = d(() => {
    w();
    ME = g("MuiTab", [
      "root",
      "labelIcon",
      "textColorInherit",
      "textColorPrimary",
      "textColorSecondary",
      "selected",
      "disabled",
      "fullWidth",
      "wrapped",
      "iconWrapper",
    ]);
  });
var lm = d(() => {
  am();
});
var RE,
  pm = d(() => {
    w();
    RE = g("MuiTable", ["root", "stickyHeader"]);
  });
var cm = d(() => {
  pm();
});
var _E,
  um = d(() => {
    w();
    _E = g("MuiTableBody", ["root"]);
  });
var mm = d(() => {
  um();
});
var $E,
  dm = d(() => {
    w();
    $E = g("MuiTableCell", [
      "root",
      "head",
      "body",
      "footer",
      "sizeSmall",
      "sizeMedium",
      "paddingCheckbox",
      "paddingNone",
      "alignLeft",
      "alignCenter",
      "alignRight",
      "alignJustify",
      "stickyHeader",
    ]);
  });
var fm = d(() => {
  dm();
});
var qE,
  hm = d(() => {
    w();
    qE = g("MuiTableContainer", ["root"]);
  });
var bm = d(() => {
  hm();
});
var YE,
  gm = d(() => {
    w();
    YE = g("MuiTableFooter", ["root"]);
  });
var ym = d(() => {
  gm();
});
var oB,
  xm = d(() => {
    w();
    oB = g("MuiTableHead", ["root"]);
  });
var km = d(() => {
  xm();
});
var lB,
  Cm = d(() => {
    w();
    lB = g("MuiToolbar", ["root", "gutters", "regular", "dense"]);
  });
var vm = d(() => {
  Cm();
});
var dB,
  Tm = d(() => {
    w();
    dB = g("MuiTablePagination", [
      "root",
      "toolbar",
      "spacer",
      "selectLabel",
      "selectRoot",
      "select",
      "selectIcon",
      "input",
      "menuItem",
      "displayedRows",
      "actions",
    ]);
  });
var wm = d(() => {
  Tm();
});
var yB,
  Pm = d(() => {
    w();
    yB = g("MuiTableRow", ["root", "selected", "hover", "head", "footer"]);
  });
var Sm = d(() => {
  Pm();
});
var TB,
  Mm = d(() => {
    w();
    TB = g("MuiTableSortLabel", [
      "root",
      "active",
      "icon",
      "iconDirectionDesc",
      "iconDirectionAsc",
    ]);
  });
var Um = d(() => {
  Mm();
});
var UB,
  Im = d(() => {
    w();
    UB = g("MuiTabScrollButton", [
      "root",
      "vertical",
      "horizontal",
      "disabled",
    ]);
  });
var jm = d(() => {
  Im();
});
var EB,
  Am = d(() => {
    w();
    EB = g("MuiTabs", [
      "root",
      "vertical",
      "flexContainer",
      "flexContainerVertical",
      "centered",
      "scroller",
      "fixed",
      "scrollableX",
      "scrollableY",
      "hideScrollbar",
      "scrollButtons",
      "scrollButtonsHideMobile",
      "indicator",
    ]);
  });
var Rm = d(() => {
  Am();
});
var DB,
  Em = d(() => {
    w();
    DB = g("MuiTextField", ["root"]);
  });
var Bm = d(() => {
  Em();
});
var Lm = d(() => {});
function Om(e) {
  return T("MuiToggleButton", e);
}
var J1,
  Vs,
  Ws = d(() => {
    w();
    J1 = g("MuiToggleButton", [
      "root",
      "disabled",
      "selected",
      "standard",
      "primary",
      "secondary",
      "sizeSmall",
      "sizeMedium",
      "sizeLarge",
    ]), Vs = J1;
  });
import Q1 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import Hs from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import { forwardRef as r2 } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://esm.sh/prop-types";
import { jsx as Y1 } from "https://esm.sh/react/jsx-runtime";
var X1,
  Z1,
  e2,
  t2,
  Nt,
  _m = d(() => {
    oe();
    w();
    ys();
    Ot();
    ze();
    Ue();
    pe();
    Ws();
    X1 = [
      "children",
      "className",
      "color",
      "disabled",
      "disableFocusRipple",
      "fullWidth",
      "onChange",
      "onClick",
      "selected",
      "size",
      "value",
    ],
      Z1 = (e) => {
        let {
            classes: t,
            fullWidth: r,
            selected: o,
            disabled: s,
            size: i,
            color: l,
          } = e,
          c = {
            root: [
              "root",
              o && "selected",
              s && "disabled",
              r && "fullWidth",
              `size${_(i)}`,
              l,
            ],
          };
        return Q(c, Om, t);
      },
      e2 = L(ot, {
        name: "MuiToggleButton",
        slot: "Root",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [t.root, t[`size${_(r.size)}`]];
        },
      })(({ theme: e, ownerState: t }) => {
        let r = t.color === "standard"
          ? e.palette.text.primary
          : e.palette[t.color].main;
        return Hs(
          {},
          e.typography.button,
          {
            borderRadius: e.shape.borderRadius,
            padding: 11,
            border: `1px solid ${e.palette.divider}`,
            color: e.palette.action.active,
          },
          t.fullWidth && { width: "100%" },
          {
            [`&.${Vs.disabled}`]: {
              color: e.palette.action.disabled,
              border: `1px solid ${e.palette.action.disabledBackground}`,
            },
            "&:hover": {
              textDecoration: "none",
              backgroundColor: ae(
                e.palette.text.primary,
                e.palette.action.hoverOpacity,
              ),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            [`&.${Vs.selected}`]: {
              color: r,
              backgroundColor: ae(r, e.palette.action.selectedOpacity),
              "&:hover": {
                backgroundColor: ae(
                  r,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity,
                ),
                "@media (hover: none)": {
                  backgroundColor: ae(r, e.palette.action.selectedOpacity),
                },
              },
            },
          },
          t.size === "small" &&
            { padding: 7, fontSize: e.typography.pxToRem(13) },
          t.size === "large" &&
            { padding: 15, fontSize: e.typography.pxToRem(15) },
        );
      }),
      t2 = r2(function (t, r) {
        let o = X({ props: t, name: "MuiToggleButton" }),
          {
            children: s,
            className: i,
            color: l = "standard",
            disabled: c = !1,
            disableFocusRipple: a = !1,
            fullWidth: n = !1,
            onChange: p,
            onClick: u,
            selected: f,
            size: m = "medium",
            value: h,
          } = o,
          b = Q1(o, X1),
          y = Hs({}, o, {
            color: l,
            disabled: c,
            disableFocusRipple: a,
            fullWidth: n,
            size: m,
          }),
          C = Z1(y),
          x = (v) => {
            u && (u(v, h), v.defaultPrevented) || p && p(v, h);
          };
        return Y1(
          e2,
          Hs(
            {
              className: O(C.root, i),
              disabled: c,
              focusRipple: !a,
              ref: r,
              onClick: x,
              onChange: p,
              value: h,
              ownerState: y,
              "aria-pressed": f,
            },
            b,
            { children: s },
          ),
        );
      }),
      Nt = t2;
  });
var Gs = d(() => {
  _m();
  Ws();
});
function qs(e, t) {
  return t === void 0 || e === void 0
    ? !1
    : Array.isArray(t)
    ? t.indexOf(e) >= 0
    : e === t;
}
var Dm = d(() => {});
function zm(e) {
  return T("MuiToggleButtonGroup", e);
}
var o2,
  Te,
  Ks = d(() => {
    w();
    o2 = g("MuiToggleButtonGroup", [
      "root",
      "selected",
      "vertical",
      "disabled",
      "grouped",
      "groupedHorizontal",
      "groupedVertical",
    ]), Te = o2;
  });
import s2 from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js";
import Br from "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js";
import {
  Children as u2,
  cloneElement as d2,
  forwardRef as c2,
  isValidElement as m2,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import "https://unpkg.com/@spike.land/esm@0.0.32/dist/react-is.mjs";
import "https://esm.sh/prop-types";
import { jsx as i2 } from "https://esm.sh/react/jsx-runtime";
var n2,
  a2,
  l2,
  p2,
  Ft,
  Nm = d(() => {
    oe();
    w();
    pe();
    Ue();
    ze();
    Dm();
    Ks();
    n2 = [
      "children",
      "className",
      "color",
      "disabled",
      "exclusive",
      "fullWidth",
      "onChange",
      "orientation",
      "size",
      "value",
    ],
      a2 = (e) => {
        let { classes: t, orientation: r, fullWidth: o, disabled: s } = e,
          i = {
            root: ["root", r === "vertical" && "vertical", o && "fullWidth"],
            grouped: ["grouped", `grouped${_(r)}`, s && "disabled"],
          };
        return Q(i, zm, t);
      },
      l2 = L("div", {
        name: "MuiToggleButtonGroup",
        slot: "Root",
        overridesResolver: (e, t) => {
          let { ownerState: r } = e;
          return [
            { [`& .${Te.grouped}`]: t.grouped },
            { [`& .${Te.grouped}`]: t[`grouped${_(r.orientation)}`] },
            t.root,
            r.orientation === "vertical" && t.vertical,
            r.fullWidth && t.fullWidth,
          ];
        },
      })(({ ownerState: e, theme: t }) =>
        Br(
          { display: "inline-flex", borderRadius: t.shape.borderRadius },
          e.orientation === "vertical" && { flexDirection: "column" },
          e.fullWidth && { width: "100%" },
          {
            [`& .${Te.grouped}`]: Br(
              {},
              e.orientation === "horizontal"
                ? {
                  "&:not(:first-of-type)": {
                    marginLeft: -1,
                    borderLeft: "1px solid transparent",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  },
                  "&:not(:last-of-type)": {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                  [`&.${Te.selected} + .${Te.grouped}.${Te.selected}`]: {
                    borderLeft: 0,
                    marginLeft: 0,
                  },
                }
                : {
                  "&:not(:first-of-type)": {
                    marginTop: -1,
                    borderTop: "1px solid transparent",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                  "&:not(:last-of-type)": {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                  [`&.${Te.selected} + .${Te.grouped}.${Te.selected}`]: {
                    borderTop: 0,
                    marginTop: 0,
                  },
                },
            ),
          },
        )
      ),
      p2 = c2(function (t, r) {
        let o = X({ props: t, name: "MuiToggleButtonGroup" }),
          {
            children: s,
            className: i,
            color: l = "standard",
            disabled: c = !1,
            exclusive: a = !1,
            fullWidth: n = !1,
            onChange: p,
            orientation: u = "horizontal",
            size: f = "medium",
            value: m,
          } = o,
          h = s2(o, n2),
          b = Br({}, o, { disabled: c, fullWidth: n, orientation: u, size: f }),
          y = a2(b),
          C = (v, k) => {
            if (!p) return;
            let S = m && m.indexOf(k), U;
            m && S >= 0
              ? (U = m.slice(), U.splice(S, 1))
              : U = m ? m.concat(k) : [k], p(v, U);
          },
          x = (v, k) => {
            !p || p(v, m === k ? null : k);
          };
        return i2(
          l2,
          Br(
            { role: "group", className: O(y.root, i), ref: r, ownerState: b },
            h,
            {
              children: u2.map(s, (v) =>
                m2(v)
                  ? d2(v, {
                    className: O(y.grouped, v.props.className),
                    onChange: a
                      ? x
                      : C,
                    selected: v.props.selected === void 0
                      ? qs(v.props.value, m)
                      : v.props.selected,
                    size: v.props.size || f,
                    fullWidth: n,
                    color: v.props.color || l,
                    disabled: v.props.disabled || c,
                  })
                  : null),
            },
          ),
        );
      }),
      Ft = p2;
  });
var Js = d(() => {
  Nm();
  Ks();
});
var Fm = d(() => {});
var ye = d(() => {
  ys();
  Qa();
  w();
  sl();
  il();
  ll();
  Pl();
  Il();
  El();
  Ll();
  Gl();
  Kl();
  Ql();
  Bs();
  tp();
  op();
  np();
  ip();
  lp();
  Ds();
  Ds();
  Ot();
  fp();
  bp();
  yp();
  kp();
  vp();
  wp();
  Sp();
  Up();
  Nl();
  jp();
  Ep();
  el();
  Lp();
  _p();
  Dp();
  $p();
  Wp();
  qp();
  Jp();
  Qp();
  Yp();
  tc();
  Fs();
  Fs();
  As();
  nc();
  ac();
  pc();
  uc();
  dc();
  bc();
  yc();
  xc();
  Cc();
  Tc();
  Ul();
  Pc();
  Mc();
  Ic();
  jc();
  Rc();
  sc();
  Bc();
  Oc();
  Dc();
  Nc();
  Gc();
  Kc();
  Vc();
  Qc();
  Hc();
  Yc();
  Dl();
  ou();
  nu();
  Zc();
  au();
  Np();
  pu();
  cu();
  uu();
  bu();
  hu();
  rl();
  tu();
  Ol();
  yu();
  xu();
  Cu();
  Tu();
  Pu();
  Mu();
  Zp();
  Iu();
  Eu();
  Au();
  Ou();
  Nu();
  $u();
  Vu();
  Hu();
  Xu();
  Zu();
  tm();
  qu();
  Ju();
  om();
  ks();
  sm();
  im();
  lm();
  cm();
  mm();
  fm();
  bm();
  ym();
  km();
  wm();
  Sm();
  Um();
  Rm();
  jm();
  Bm();
  Lm();
  Gs();
  Gs();
  Js();
  Js();
  vm();
  Du();
  Al();
  kc();
  du();
  Fm();
  Bu();
  Op();
});
var $m,
  Vm = d(() => {
    we();
    ye();
    $m = ue(
      N.createElement("path", {
        key: "12",
        d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
      }),
      "Share",
    );
  });
var Wm,
  Hm = d(() => {
    we();
    ye();
    Wm = ue(
      N.createElement("path", {
        key: "12",
        d: "M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z",
      }),
      "TabletAndroid",
    );
  });
var Gm,
  qm = d(() => {
    we();
    ye();
    Gm = ue(
      N.createElement("path", {
        key: "12",
        d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z",
      }),
      "Tv",
    );
  });
var Km,
  Jm = d(() => {
    we();
    ye();
    Km = ue(
      N.createElement("path", {
        key: "12",
        d: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z",
      }),
      "PhoneAndroid",
    );
  });
var Qm,
  Xm = d(() => {
    we();
    ye();
    Qm = ue(
      N.createElement("path", {
        key: "12",
        d: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 10h2v2h-2zm-6-6h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2z",
      }),
      "QrCode",
    );
  });
var rd = {};
lt(rd, { QRious: () => td });
var f2,
  Qs,
  h2,
  b2,
  g2,
  y2,
  x2,
  q,
  k2,
  Ym,
  C2,
  v2,
  me,
  Zm,
  T2,
  w2,
  P2,
  S2,
  M2,
  U2,
  I2,
  j2,
  ed,
  A2,
  R2,
  E2,
  B2,
  L2,
  O2,
  _2,
  D2,
  z2,
  N2,
  td,
  od = d(() => {
    f2 = Object.create,
      Qs = Object.defineProperty,
      h2 = Object.getOwnPropertyDescriptor,
      b2 = Object.getOwnPropertyNames,
      g2 = Object.getPrototypeOf,
      y2 = Object.prototype.hasOwnProperty,
      x2 = (e) => Qs(e, "__esModule", { value: !0 }),
      q = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      k2 = (e, t, r) => {
        if (t && typeof t == "object" || typeof t == "function") {
          for (let o of b2(t)) {
            !y2.call(e, o) && o !== "default" &&
              Qs(e, o, {
                get: () => t[o],
                enumerable: !(r = h2(t, o)) || r.enumerable,
              });
          }
        }
        return e;
      },
      Ym = (e) =>
        k2(
          x2(Qs(
            e != null
              ? f2(g2(e))
              : {},
            "default",
            e && e.__esModule && "default" in e
              ? { get: () => e.default, enumerable: !0 }
              : { value: e, enumerable: !0 },
          )),
          e,
        ),
      C2 = q((e, t) => {
        "use strict";
        var r = function () {},
          o = Object.prototype.hasOwnProperty,
          s = Array.prototype.slice;
        function i(a, n) {
          var p;
          return typeof Object.create == "function"
            ? p = Object.create(a)
            : (r.prototype = a, p = new r(), r.prototype = null),
            n && c(!0, p, n),
            p;
        }
        function l(a, n, p, u) {
          var f = this;
          return typeof a != "string" && (u = p, p = n, n = a, a = null),
            typeof n != "function" && (u = p,
              p = n,
              n = function () {
                return f.apply(this, arguments);
              }),
            c(!1, n, f, u),
            n.prototype = i(f.prototype, p),
            n.prototype.constructor = n,
            n.class_ = a || f.class_,
            n.super_ = f,
            n;
        }
        function c(a, n, p) {
          p = s.call(arguments, 2);
          for (var u, f, m = 0, h = p.length; m < h; m++) {
            f = p[m];
            for (u in f) (!a || o.call(f, u)) && (n[u] = f[u]);
          }
        }
        t.exports = l;
      }),
      v2 = q((e, t) => {
        "use strict";
        var r = C2();
        function o() {}
        o.class_ = "Nevis", o.super_ = Object, o.extend = r, t.exports = o;
      }),
      me = q((e, t) => {
        "use strict";
        t.exports = v2();
      }),
      Zm = q((e, t) => {
        "use strict";
        var r = me(),
          o = r.extend(function (s, i, l) {
            this.qrious = s,
              this.element = i,
              this.element.qrious = s,
              this.enabled = Boolean(l);
          }, {
            draw: function (s) {},
            getElement: function () {
              return this.enabled || (this.enabled = !0, this.render()),
                this.element;
            },
            getModuleSize: function (s) {
              var i = this.qrious,
                l = i.padding || 0,
                c = Math.floor((i.size - l * 2) / s.width);
              return Math.max(1, c);
            },
            getOffset: function (s) {
              var i = this.qrious, l = i.padding;
              if (l != null) return l;
              var c = this.getModuleSize(s),
                a = Math.floor((i.size - c * s.width) / 2);
              return Math.max(0, a);
            },
            render: function (s) {
              this.enabled && (this.resize(), this.reset(), this.draw(s));
            },
            reset: function () {},
            resize: function () {},
          });
        t.exports = o;
      }),
      T2 = q((e, t) => {
        "use strict";
        var r = Zm(),
          o = r.extend({
            draw: function (s) {
              var i,
                l,
                c = this.qrious,
                a = this.getModuleSize(s),
                n = this.getOffset(s),
                p = this.element.getContext("2d");
              for (
                p.fillStyle = c.foreground,
                  p.globalAlpha = c.foregroundAlpha,
                  i = 0;
                i < s.width;
                i++
              ) {
                for (l = 0; l < s.width; l++) {
                  s.buffer[l * s.width + i] &&
                    p.fillRect(a * i + n, a * l + n, a, a);
                }
              }
            },
            reset: function () {
              var s = this.qrious,
                i = this.element.getContext("2d"),
                l = s.size;
              i.lineWidth = 1,
                i.clearRect(0, 0, l, l),
                i.fillStyle = s.background,
                i.globalAlpha = s.backgroundAlpha,
                i.fillRect(0, 0, l, l);
            },
            resize: function () {
              var s = this.element;
              s.width = s.height = this.qrious.size;
            },
          });
        t.exports = o;
      }),
      w2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = r.extend(null, {
            BLOCK: [
              0,
              11,
              15,
              19,
              23,
              27,
              31,
              16,
              18,
              20,
              22,
              24,
              26,
              28,
              20,
              22,
              24,
              24,
              26,
              28,
              28,
              22,
              24,
              24,
              26,
              26,
              28,
              28,
              24,
              24,
              26,
              26,
              26,
              28,
              28,
              24,
              26,
              26,
              26,
              28,
              28,
            ],
          });
        t.exports = o;
      }),
      P2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = r.extend(null, {
            BLOCKS: [
              1,
              0,
              19,
              7,
              1,
              0,
              16,
              10,
              1,
              0,
              13,
              13,
              1,
              0,
              9,
              17,
              1,
              0,
              34,
              10,
              1,
              0,
              28,
              16,
              1,
              0,
              22,
              22,
              1,
              0,
              16,
              28,
              1,
              0,
              55,
              15,
              1,
              0,
              44,
              26,
              2,
              0,
              17,
              18,
              2,
              0,
              13,
              22,
              1,
              0,
              80,
              20,
              2,
              0,
              32,
              18,
              2,
              0,
              24,
              26,
              4,
              0,
              9,
              16,
              1,
              0,
              108,
              26,
              2,
              0,
              43,
              24,
              2,
              2,
              15,
              18,
              2,
              2,
              11,
              22,
              2,
              0,
              68,
              18,
              4,
              0,
              27,
              16,
              4,
              0,
              19,
              24,
              4,
              0,
              15,
              28,
              2,
              0,
              78,
              20,
              4,
              0,
              31,
              18,
              2,
              4,
              14,
              18,
              4,
              1,
              13,
              26,
              2,
              0,
              97,
              24,
              2,
              2,
              38,
              22,
              4,
              2,
              18,
              22,
              4,
              2,
              14,
              26,
              2,
              0,
              116,
              30,
              3,
              2,
              36,
              22,
              4,
              4,
              16,
              20,
              4,
              4,
              12,
              24,
              2,
              2,
              68,
              18,
              4,
              1,
              43,
              26,
              6,
              2,
              19,
              24,
              6,
              2,
              15,
              28,
              4,
              0,
              81,
              20,
              1,
              4,
              50,
              30,
              4,
              4,
              22,
              28,
              3,
              8,
              12,
              24,
              2,
              2,
              92,
              24,
              6,
              2,
              36,
              22,
              4,
              6,
              20,
              26,
              7,
              4,
              14,
              28,
              4,
              0,
              107,
              26,
              8,
              1,
              37,
              22,
              8,
              4,
              20,
              24,
              12,
              4,
              11,
              22,
              3,
              1,
              115,
              30,
              4,
              5,
              40,
              24,
              11,
              5,
              16,
              20,
              11,
              5,
              12,
              24,
              5,
              1,
              87,
              22,
              5,
              5,
              41,
              24,
              5,
              7,
              24,
              30,
              11,
              7,
              12,
              24,
              5,
              1,
              98,
              24,
              7,
              3,
              45,
              28,
              15,
              2,
              19,
              24,
              3,
              13,
              15,
              30,
              1,
              5,
              107,
              28,
              10,
              1,
              46,
              28,
              1,
              15,
              22,
              28,
              2,
              17,
              14,
              28,
              5,
              1,
              120,
              30,
              9,
              4,
              43,
              26,
              17,
              1,
              22,
              28,
              2,
              19,
              14,
              28,
              3,
              4,
              113,
              28,
              3,
              11,
              44,
              26,
              17,
              4,
              21,
              26,
              9,
              16,
              13,
              26,
              3,
              5,
              107,
              28,
              3,
              13,
              41,
              26,
              15,
              5,
              24,
              30,
              15,
              10,
              15,
              28,
              4,
              4,
              116,
              28,
              17,
              0,
              42,
              26,
              17,
              6,
              22,
              28,
              19,
              6,
              16,
              30,
              2,
              7,
              111,
              28,
              17,
              0,
              46,
              28,
              7,
              16,
              24,
              30,
              34,
              0,
              13,
              24,
              4,
              5,
              121,
              30,
              4,
              14,
              47,
              28,
              11,
              14,
              24,
              30,
              16,
              14,
              15,
              30,
              6,
              4,
              117,
              30,
              6,
              14,
              45,
              28,
              11,
              16,
              24,
              30,
              30,
              2,
              16,
              30,
              8,
              4,
              106,
              26,
              8,
              13,
              47,
              28,
              7,
              22,
              24,
              30,
              22,
              13,
              15,
              30,
              10,
              2,
              114,
              28,
              19,
              4,
              46,
              28,
              28,
              6,
              22,
              28,
              33,
              4,
              16,
              30,
              8,
              4,
              122,
              30,
              22,
              3,
              45,
              28,
              8,
              26,
              23,
              30,
              12,
              28,
              15,
              30,
              3,
              10,
              117,
              30,
              3,
              23,
              45,
              28,
              4,
              31,
              24,
              30,
              11,
              31,
              15,
              30,
              7,
              7,
              116,
              30,
              21,
              7,
              45,
              28,
              1,
              37,
              23,
              30,
              19,
              26,
              15,
              30,
              5,
              10,
              115,
              30,
              19,
              10,
              47,
              28,
              15,
              25,
              24,
              30,
              23,
              25,
              15,
              30,
              13,
              3,
              115,
              30,
              2,
              29,
              46,
              28,
              42,
              1,
              24,
              30,
              23,
              28,
              15,
              30,
              17,
              0,
              115,
              30,
              10,
              23,
              46,
              28,
              10,
              35,
              24,
              30,
              19,
              35,
              15,
              30,
              17,
              1,
              115,
              30,
              14,
              21,
              46,
              28,
              29,
              19,
              24,
              30,
              11,
              46,
              15,
              30,
              13,
              6,
              115,
              30,
              14,
              23,
              46,
              28,
              44,
              7,
              24,
              30,
              59,
              1,
              16,
              30,
              12,
              7,
              121,
              30,
              12,
              26,
              47,
              28,
              39,
              14,
              24,
              30,
              22,
              41,
              15,
              30,
              6,
              14,
              121,
              30,
              6,
              34,
              47,
              28,
              46,
              10,
              24,
              30,
              2,
              64,
              15,
              30,
              17,
              4,
              122,
              30,
              29,
              14,
              46,
              28,
              49,
              10,
              24,
              30,
              24,
              46,
              15,
              30,
              4,
              18,
              122,
              30,
              13,
              32,
              46,
              28,
              48,
              14,
              24,
              30,
              42,
              32,
              15,
              30,
              20,
              4,
              117,
              30,
              40,
              7,
              47,
              28,
              43,
              22,
              24,
              30,
              10,
              67,
              15,
              30,
              19,
              6,
              118,
              30,
              18,
              31,
              47,
              28,
              34,
              34,
              24,
              30,
              20,
              61,
              15,
              30,
            ],
            FINAL_FORMAT: [
              30660,
              29427,
              32170,
              30877,
              26159,
              25368,
              27713,
              26998,
              21522,
              20773,
              24188,
              23371,
              17913,
              16590,
              20375,
              19104,
              13663,
              12392,
              16177,
              14854,
              9396,
              8579,
              11994,
              11245,
              5769,
              5054,
              7399,
              6608,
              1890,
              597,
              3340,
              2107,
            ],
            LEVELS: { L: 1, M: 2, Q: 3, H: 4 },
          });
        t.exports = o;
      }),
      S2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = r.extend(null, {
            EXPONENT: [
              1,
              2,
              4,
              8,
              16,
              32,
              64,
              128,
              29,
              58,
              116,
              232,
              205,
              135,
              19,
              38,
              76,
              152,
              45,
              90,
              180,
              117,
              234,
              201,
              143,
              3,
              6,
              12,
              24,
              48,
              96,
              192,
              157,
              39,
              78,
              156,
              37,
              74,
              148,
              53,
              106,
              212,
              181,
              119,
              238,
              193,
              159,
              35,
              70,
              140,
              5,
              10,
              20,
              40,
              80,
              160,
              93,
              186,
              105,
              210,
              185,
              111,
              222,
              161,
              95,
              190,
              97,
              194,
              153,
              47,
              94,
              188,
              101,
              202,
              137,
              15,
              30,
              60,
              120,
              240,
              253,
              231,
              211,
              187,
              107,
              214,
              177,
              127,
              254,
              225,
              223,
              163,
              91,
              182,
              113,
              226,
              217,
              175,
              67,
              134,
              17,
              34,
              68,
              136,
              13,
              26,
              52,
              104,
              208,
              189,
              103,
              206,
              129,
              31,
              62,
              124,
              248,
              237,
              199,
              147,
              59,
              118,
              236,
              197,
              151,
              51,
              102,
              204,
              133,
              23,
              46,
              92,
              184,
              109,
              218,
              169,
              79,
              158,
              33,
              66,
              132,
              21,
              42,
              84,
              168,
              77,
              154,
              41,
              82,
              164,
              85,
              170,
              73,
              146,
              57,
              114,
              228,
              213,
              183,
              115,
              230,
              209,
              191,
              99,
              198,
              145,
              63,
              126,
              252,
              229,
              215,
              179,
              123,
              246,
              241,
              255,
              227,
              219,
              171,
              75,
              150,
              49,
              98,
              196,
              149,
              55,
              110,
              220,
              165,
              87,
              174,
              65,
              130,
              25,
              50,
              100,
              200,
              141,
              7,
              14,
              28,
              56,
              112,
              224,
              221,
              167,
              83,
              166,
              81,
              162,
              89,
              178,
              121,
              242,
              249,
              239,
              195,
              155,
              43,
              86,
              172,
              69,
              138,
              9,
              18,
              36,
              72,
              144,
              61,
              122,
              244,
              245,
              247,
              243,
              251,
              235,
              203,
              139,
              11,
              22,
              44,
              88,
              176,
              125,
              250,
              233,
              207,
              131,
              27,
              54,
              108,
              216,
              173,
              71,
              142,
              0,
            ],
            LOG: [
              255,
              0,
              1,
              25,
              2,
              50,
              26,
              198,
              3,
              223,
              51,
              238,
              27,
              104,
              199,
              75,
              4,
              100,
              224,
              14,
              52,
              141,
              239,
              129,
              28,
              193,
              105,
              248,
              200,
              8,
              76,
              113,
              5,
              138,
              101,
              47,
              225,
              36,
              15,
              33,
              53,
              147,
              142,
              218,
              240,
              18,
              130,
              69,
              29,
              181,
              194,
              125,
              106,
              39,
              249,
              185,
              201,
              154,
              9,
              120,
              77,
              228,
              114,
              166,
              6,
              191,
              139,
              98,
              102,
              221,
              48,
              253,
              226,
              152,
              37,
              179,
              16,
              145,
              34,
              136,
              54,
              208,
              148,
              206,
              143,
              150,
              219,
              189,
              241,
              210,
              19,
              92,
              131,
              56,
              70,
              64,
              30,
              66,
              182,
              163,
              195,
              72,
              126,
              110,
              107,
              58,
              40,
              84,
              250,
              133,
              186,
              61,
              202,
              94,
              155,
              159,
              10,
              21,
              121,
              43,
              78,
              212,
              229,
              172,
              115,
              243,
              167,
              87,
              7,
              112,
              192,
              247,
              140,
              128,
              99,
              13,
              103,
              74,
              222,
              237,
              49,
              197,
              254,
              24,
              227,
              165,
              153,
              119,
              38,
              184,
              180,
              124,
              17,
              68,
              146,
              217,
              35,
              32,
              137,
              46,
              55,
              63,
              209,
              91,
              149,
              188,
              207,
              205,
              144,
              135,
              151,
              178,
              220,
              252,
              190,
              97,
              242,
              86,
              211,
              171,
              20,
              42,
              93,
              158,
              132,
              60,
              57,
              83,
              71,
              109,
              65,
              162,
              31,
              45,
              67,
              216,
              183,
              123,
              164,
              118,
              196,
              23,
              73,
              236,
              127,
              12,
              111,
              246,
              108,
              161,
              59,
              82,
              41,
              157,
              85,
              170,
              251,
              96,
              134,
              177,
              187,
              204,
              62,
              90,
              203,
              89,
              95,
              176,
              156,
              169,
              160,
              81,
              11,
              245,
              22,
              235,
              122,
              117,
              44,
              215,
              79,
              174,
              213,
              233,
              230,
              231,
              173,
              232,
              116,
              214,
              244,
              234,
              168,
              80,
              88,
              175,
            ],
          });
        t.exports = o;
      }),
      M2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = r.extend(null, {
            BLOCK: [
              3220,
              1468,
              2713,
              1235,
              3062,
              1890,
              2119,
              1549,
              2344,
              2936,
              1117,
              2583,
              1330,
              2470,
              1667,
              2249,
              2028,
              3780,
              481,
              4011,
              142,
              3098,
              831,
              3445,
              592,
              2517,
              1776,
              2234,
              1951,
              2827,
              1070,
              2660,
              1345,
              3177,
            ],
          });
        t.exports = o;
      }),
      U2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = w2(),
          s = P2(),
          i = S2(),
          l = M2(),
          c = r.extend(function (a) {
            var n, p, u, f, m, h = a.value.length;
            for (
              this._badness = [],
                this._level = s.LEVELS[a.level],
                this._polynomial = [],
                this._value = a.value,
                this._version = 0,
                this._stringBuffer = [];
              this._version < 40 &&
              (this._version++,
                u = (this._level - 1) * 4 + (this._version - 1) * 16,
                f = s.BLOCKS[u++],
                m = s.BLOCKS[u++],
                n = s.BLOCKS[u++],
                p = s.BLOCKS[u],
                u = n * (f + m) + m - 3 + (this._version <= 9),
                !(h <= u));
            );
            this._dataBlock = n,
              this._eccBlock = p,
              this._neccBlock1 = f,
              this._neccBlock2 = m;
            var b = this.width = 17 + 4 * this._version;
            this.buffer = c._createArray(b * b),
              this._ecc = c._createArray(n + (n + p) * (f + m) + m),
              this._mask = c._createArray((b * (b + 1) + 1) / 2),
              this._insertFinders(),
              this._insertAlignments(),
              this.buffer[8 + b * (b - 8)] = 1,
              this._insertTimingGap(),
              this._reverseMask(),
              this._insertTimingRowAndColumn(),
              this._insertVersion(),
              this._syncMask(),
              this._convertBitStream(h),
              this._calculatePolynomial(),
              this._appendEccToData(),
              this._interleaveBlocks(),
              this._pack(),
              this._finish();
          }, {
            _addAlignment: function (a, n) {
              var p, u = this.buffer, f = this.width;
              for (u[a + f * n] = 1, p = -2; p < 2; p++) {
                u[a + p + f * (n - 2)] = 1,
                  u[a - 2 + f * (n + p + 1)] = 1,
                  u[a + 2 + f * (n + p)] = 1,
                  u[a + p + 1 + f * (n + 2)] = 1;
              }
              for (p = 0; p < 2; p++) {
                this._setMask(a - 1, n + p),
                  this._setMask(a + 1, n - p),
                  this._setMask(a - p, n - 1),
                  this._setMask(a + p, n + 1);
              }
            },
            _appendData: function (a, n, p, u) {
              var f, m, h, b = this._polynomial, y = this._stringBuffer;
              for (m = 0; m < u; m++) y[p + m] = 0;
              for (m = 0; m < n; m++) {
                if (f = i.LOG[y[a + m] ^ y[p]], f !== 255) {
                  for (h = 1; h < u; h++) {
                    y[p + h - 1] = y[p + h] ^ i.EXPONENT[c._modN(f + b[u - h])];
                  }
                } else for (h = p; h < p + u; h++) y[h] = y[h + 1];
                y[p + u - 1] = f === 255 ? 0 : i.EXPONENT[c._modN(f + b[0])];
              }
            },
            _appendEccToData: function () {
              var a,
                n = 0,
                p = this._dataBlock,
                u = this._calculateMaxLength(),
                f = this._eccBlock;
              for (
                a = 0; a < this._neccBlock1; a++
              ) {
                this._appendData(n, p, u, f), n += p, u += f;
              }
              for (a = 0; a < this._neccBlock2; a++) {
                this._appendData(n, p + 1, u, f), n += p + 1, u += f;
              }
            },
            _applyMask: function (a) {
              var n, p, u, f, m = this.buffer, h = this.width;
              switch (a) {
                case 0:
                  for (f = 0; f < h; f++) {
                    for (u = 0; u < h; u++) {
                      !(u + f & 1) && !this._isMasked(u, f) &&
                        (m[u + f * h] ^= 1);
                    }
                  }
                  break;
                case 1:
                  for (f = 0; f < h; f++) {
                    for (u = 0; u < h; u++) {
                      !(f & 1) && !this._isMasked(u, f) && (m[u + f * h] ^= 1);
                    }
                  }
                  break;
                case 2:
                  for (f = 0; f < h; f++) {
                    for (n = 0, u = 0; u < h; u++, n++) {
                      n === 3 && (n = 0),
                        !n && !this._isMasked(u, f) && (m[u + f * h] ^= 1);
                    }
                  }
                  break;
                case 3:
                  for (p = 0, f = 0; f < h; f++, p++) {
                    for (p === 3 && (p = 0), n = p, u = 0; u < h; u++, n++) {
                      n === 3 && (n = 0),
                        !n && !this._isMasked(u, f) && (m[u + f * h] ^= 1);
                    }
                  }
                  break;
                case 4:
                  for (f = 0; f < h; f++) {
                    for (n = 0, p = f >> 1 & 1, u = 0; u < h; u++, n++) {
                      n === 3 && (n = 0, p = !p),
                        !p && !this._isMasked(u, f) && (m[u + f * h] ^= 1);
                    }
                  }
                  break;
                case 5:
                  for (p = 0, f = 0; f < h; f++, p++) {
                    for (p === 3 && (p = 0), n = 0, u = 0; u < h; u++, n++) {
                      n === 3 && (n = 0),
                        !((u & f & 1) + !(!n | !p)) && !this._isMasked(u, f) &&
                        (m[u + f * h] ^= 1);
                    }
                  }
                  break;
                case 6:
                  for (p = 0, f = 0; f < h; f++, p++) {
                    for (p === 3 && (p = 0), n = 0, u = 0; u < h; u++, n++) {
                      n === 3 && (n = 0),
                        !((u & f & 1) + (n && n === p) & 1) &&
                        !this._isMasked(u, f) && (m[u + f * h] ^= 1);
                    }
                  }
                  break;
                case 7:
                  for (p = 0, f = 0; f < h; f++, p++) {
                    for (p === 3 && (p = 0), n = 0, u = 0; u < h; u++, n++) {
                      n === 3 && (n = 0),
                        !((n && n === p) + (u + f & 1) & 1) &&
                        !this._isMasked(u, f) && (m[u + f * h] ^= 1);
                    }
                  }
                  break;
              }
            },
            _calculateMaxLength: function () {
              return this._dataBlock * (this._neccBlock1 + this._neccBlock2) +
                this._neccBlock2;
            },
            _calculatePolynomial: function () {
              var a, n, p = this._eccBlock, u = this._polynomial;
              for (u[0] = 1, a = 0; a < p; a++) {
                for (u[a + 1] = 1, n = a; n > 0; n--) {
                  u[n] = u[n]
                    ? u[n - 1] ^ i.EXPONENT[c._modN(i.LOG[u[n]] + a)]
                    : u[n - 1];
                }
                u[0] = i.EXPONENT[c._modN(i.LOG[u[0]] + a)];
              }
              for (a = 0; a <= p; a++) u[a] = i.LOG[u[a]];
            },
            _checkBadness: function () {
              var a,
                n,
                p,
                u,
                f,
                m = 0,
                h = this._badness,
                b = this.buffer,
                y = this.width;
              for (f = 0; f < y - 1; f++) {
                for (u = 0; u < y - 1; u++) {
                  (b[u + y * f] && b[u + 1 + y * f] && b[u + y * (f + 1)] &&
                      b[u + 1 + y * (f + 1)] ||
                    !(b[u + y * f] || b[u + 1 + y * f] || b[u + y * (f + 1)] ||
                      b[u + 1 + y * (f + 1)])) && (m += c.N2);
                }
              }
              var C = 0;
              for (f = 0; f < y; f++) {
                for (p = 0, h[0] = 0, a = 0, u = 0; u < y; u++) {
                  n = b[u + y * f],
                    a === n ? h[p]++ : h[++p] = 1,
                    a = n,
                    C += a ? 1 : -1;
                }
                m += this._getBadness(p);
              }
              C < 0 && (C = -C);
              var x = 0, v = C;
              for (v += v << 2, v <<= 1; v > y * y;) v -= y * y, x++;
              for (m += x * c.N4, u = 0; u < y; u++) {
                for (p = 0, h[0] = 0, a = 0, f = 0; f < y; f++) {
                  n = b[u + y * f], a === n ? h[p]++ : h[++p] = 1, a = n;
                }
                m += this._getBadness(p);
              }
              return m;
            },
            _convertBitStream: function (a) {
              var n, p, u = this._ecc, f = this._version;
              for (p = 0; p < a; p++) u[p] = this._value.charCodeAt(p);
              var m = this._stringBuffer = u.slice(),
                h = this._calculateMaxLength();
              a >= h - 2 && (a = h - 2, f > 9 && a--);
              var b = a;
              if (f > 9) {
                for (m[b + 2] = 0, m[b + 3] = 0; b--;) {
                  n = m[b], m[b + 3] |= 255 & n << 4, m[b + 2] = n >> 4;
                }
                m[2] |= 255 & a << 4, m[1] = a >> 4, m[0] = 64 | a >> 12;
              } else {
                for (m[b + 1] = 0, m[b + 2] = 0; b--;) {
                  n = m[b], m[b + 2] |= 255 & n << 4, m[b + 1] = n >> 4;
                }
                m[1] |= 255 & a << 4, m[0] = 64 | a >> 4;
              }
              for (b = a + 3 - (f < 10); b < h;) m[b++] = 236, m[b++] = 17;
            },
            _getBadness: function (a) {
              var n, p = 0, u = this._badness;
              for (n = 0; n <= a; n++) u[n] >= 5 && (p += c.N1 + u[n] - 5);
              for (n = 3; n < a - 1; n += 2) {
                u[n - 2] === u[n + 2] && u[n + 2] === u[n - 1] &&
                  u[n - 1] === u[n + 1] && u[n - 1] * 3 === u[n] &&
                  (u[n - 3] === 0 || n + 3 > a || u[n - 3] * 3 >= u[n] * 4 ||
                    u[n + 3] * 3 >= u[n] * 4) &&
                  (p += c.N3);
              }
              return p;
            },
            _finish: function () {
              this._stringBuffer = this.buffer.slice();
              var a, n, p = 0, u = 3e4;
              for (
                n = 0;
                n < 8 &&
                (this._applyMask(n),
                  a = this._checkBadness(),
                  a < u && (u = a, p = n),
                  p !== 7);
                n++
              ) {
                this.buffer = this._stringBuffer.slice();
              }
              p !== n && this._applyMask(p),
                u = s.FINAL_FORMAT[p + (this._level - 1 << 3)];
              var f = this.buffer, m = this.width;
              for (n = 0; n < 8; n++, u >>= 1) {
                u & 1 && (f[m - 1 - n + m * 8] = 1,
                  n < 6
                    ? f[8 + m * n] = 1
                    : f[8 + m * (n + 1)] = 1);
              }
              for (n = 0; n < 7; n++, u >>= 1) {
                u & 1 &&
                  (f[8 + m * (m - 7 + n)] = 1,
                    n ? f[6 - n + m * 8] = 1 : f[7 + m * 8] = 1);
              }
            },
            _interleaveBlocks: function () {
              var a,
                n,
                p = this._dataBlock,
                u = this._ecc,
                f = this._eccBlock,
                m = 0,
                h = this._calculateMaxLength(),
                b = this._neccBlock1,
                y = this._neccBlock2,
                C = this._stringBuffer;
              for (a = 0; a < p; a++) {
                for (n = 0; n < b; n++) u[m++] = C[a + n * p];
                for (n = 0; n < y; n++) u[m++] = C[b * p + a + n * (p + 1)];
              }
              for (n = 0; n < y; n++) u[m++] = C[b * p + a + n * (p + 1)];
              for (a = 0; a < f; a++) {
                for (n = 0; n < b + y; n++) u[m++] = C[h + a + n * f];
              }
              this._stringBuffer = u;
            },
            _insertAlignments: function () {
              var a, n, p, u = this._version, f = this.width;
              if (u > 1) {
                for (a = o.BLOCK[u], p = f - 7;;) {
                  for (
                    n = f - 7;
                    n > a - 3 && (this._addAlignment(n, p), !(n < a));
                  ) {
                    n -= a;
                  }
                  if (p <= a + 9) break;
                  p -= a, this._addAlignment(6, p), this._addAlignment(p, 6);
                }
              }
            },
            _insertFinders: function () {
              var a, n, p, u, f = this.buffer, m = this.width;
              for (a = 0; a < 3; a++) {
                for (
                  n = 0,
                    u = 0,
                    a === 1 && (n = m - 7),
                    a === 2 && (u = m - 7),
                    f[u + 3 + m * (n + 3)] = 1,
                    p = 0;
                  p < 6;
                  p++
                ) {
                  f[u + p + m * n] = 1,
                    f[u + m * (n + p + 1)] = 1,
                    f[u + 6 + m * (n + p)] = 1,
                    f[u + p + 1 + m * (n + 6)] = 1;
                }
                for (p = 1; p < 5; p++) {
                  this._setMask(u + p, n + 1),
                    this._setMask(u + 1, n + p + 1),
                    this._setMask(u + 5, n + p),
                    this._setMask(u + p + 1, n + 5);
                }
                for (p = 2; p < 4; p++) {
                  f[u + p + m * (n + 2)] = 1,
                    f[u + 2 + m * (n + p + 1)] = 1,
                    f[u + 4 + m * (n + p)] = 1,
                    f[u + p + 1 + m * (n + 4)] = 1;
                }
              }
            },
            _insertTimingGap: function () {
              var a, n, p = this.width;
              for (n = 0; n < 7; n++) {
                this._setMask(7, n),
                  this._setMask(p - 8, n),
                  this._setMask(7, n + p - 7);
              }
              for (a = 0; a < 8; a++) {
                this._setMask(a, 7),
                  this._setMask(a + p - 8, 7),
                  this._setMask(a, p - 8);
              }
            },
            _insertTimingRowAndColumn: function () {
              var a, n = this.buffer, p = this.width;
              for (a = 0; a < p - 14; a++) {
                a & 1
                  ? (this._setMask(8 + a, 6), this._setMask(6, 8 + a))
                  : (n[8 + a + p * 6] = 1, n[6 + p * (8 + a)] = 1);
              }
            },
            _insertVersion: function () {
              var a,
                n,
                p,
                u,
                f = this.buffer,
                m = this._version,
                h = this.width;
              if (m > 6) {
                for (a = l.BLOCK[m - 7], n = 17, p = 0; p < 6; p++) {
                  for (u = 0; u < 3; u++, n--) {
                    1 & (n > 11 ? m >> n - 12 : a >> n)
                      ? (f[5 - p + h * (2 - u + h - 11)] = 1,
                        f[2 - u + h - 11 + h * (5 - p)] = 1)
                      : (this._setMask(5 - p, 2 - u + h - 11),
                        this._setMask(2 - u + h - 11, 5 - p));
                  }
                }
              }
            },
            _isMasked: function (a, n) {
              var p = c._getMaskBit(a, n);
              return this._mask[p] === 1;
            },
            _pack: function () {
              var a,
                n,
                p,
                u = 1,
                f = 1,
                m = this.width,
                h = m - 1,
                b = m - 1,
                y =
                  (this._dataBlock + this._eccBlock) *
                    (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
              for (n = 0; n < y; n++) {
                for (a = this._stringBuffer[n], p = 0; p < 8; p++, a <<= 1) {
                  128 & a && (this.buffer[h + m * b] = 1);
                  do f ? h-- : (h++,
                    u
                      ? b !== 0
                        ? b--
                        : (h -= 2, u = !u, h === 6 && (h--, b = 9))
                      : b !== m - 1
                      ? b++
                      : (h -= 2, u = !u, h === 6 && (h--, b -= 8))),
                    f = !f; while (this._isMasked(h, b));
                }
              }
            },
            _reverseMask: function () {
              var a, n, p = this.width;
              for (a = 0; a < 9; a++) this._setMask(a, 8);
              for (a = 0; a < 8; a++) {
                this._setMask(a + p - 8, 8), this._setMask(8, a);
              }
              for (n = 0; n < 7; n++) this._setMask(8, n + p - 7);
            },
            _setMask: function (a, n) {
              var p = c._getMaskBit(a, n);
              this._mask[p] = 1;
            },
            _syncMask: function () {
              var a, n, p = this.width;
              for (n = 0; n < p; n++) {
                for (a = 0; a <= n; a++) {
                  this.buffer[a + p * n] && this._setMask(a, n);
                }
              }
            },
          }, {
            _createArray: function (a) {
              var n, p = [];
              for (n = 0; n < a; n++) p[n] = 0;
              return p;
            },
            _getMaskBit: function (a, n) {
              var p;
              return a > n && (p = a, a = n, n = p),
                p = n,
                p += n * n,
                p >>= 1,
                p += a,
                p;
            },
            _modN: function (a) {
              for (; a >= 255;) a -= 255, a = (a >> 8) + (a & 255);
              return a;
            },
            N1: 3,
            N2: 3,
            N3: 40,
            N4: 10,
          });
        t.exports = c;
      }),
      I2 = q((e, t) => {
        "use strict";
        var r = Zm(),
          o = r.extend({
            draw: function () {
              this.element.src = this.qrious.toDataURL();
            },
            reset: function () {
              this.element.src = "";
            },
            resize: function () {
              var s = this.element;
              s.width = s.height = this.qrious.size;
            },
          });
        t.exports = o;
      }),
      j2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = r.extend(function (s, i, l, c) {
            this.name = s,
              this.modifiable = Boolean(i),
              this.defaultValue = l,
              this._valueTransformer = c;
          }, {
            transform: function (s) {
              var i = this._valueTransformer;
              return typeof i == "function" ? i(s, this) : s;
            },
          });
        t.exports = o;
      }),
      ed = q((e, t) => {
        "use strict";
        var r = me(),
          o = r.extend(null, {
            abs: function (s) {
              return s != null ? Math.abs(s) : null;
            },
            hasOwn: function (s, i) {
              return Object.prototype.hasOwnProperty.call(s, i);
            },
            noop: function () {},
            toUpperCase: function (s) {
              return s != null ? s.toUpperCase() : null;
            },
          });
        t.exports = o;
      }),
      A2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = ed(),
          s = r.extend(function (i) {
            this.options = {},
              i.forEach(function (l) {
                this.options[l.name] = l;
              }, this);
          }, {
            exists: function (i) {
              return this.options[i] != null;
            },
            get: function (i, l) {
              return s._get(this.options[i], l);
            },
            getAll: function (i) {
              var l, c = this.options, a = {};
              for (l in c) o.hasOwn(c, l) && (a[l] = s._get(c[l], i));
              return a;
            },
            init: function (i, l, c) {
              typeof c != "function" && (c = o.noop);
              var a, n;
              for (a in this.options) {
                o.hasOwn(this.options, a) &&
                  (n = this.options[a],
                    s._set(n, n.defaultValue, l),
                    s._createAccessor(n, l, c));
              }
              this._setAll(i, l, !0);
            },
            set: function (i, l, c) {
              return this._set(i, l, c);
            },
            setAll: function (i, l) {
              return this._setAll(i, l);
            },
            _set: function (i, l, c, a) {
              var n = this.options[i];
              if (!n) throw new Error("Invalid option: " + i);
              if (!n.modifiable && !a) {
                throw new Error("Option cannot be modified: " + i);
              }
              return s._set(n, l, c);
            },
            _setAll: function (i, l, c) {
              if (!i) return !1;
              var a, n = !1;
              for (a in i) {
                o.hasOwn(i, a) && this._set(a, i[a], l, c) && (n = !0);
              }
              return n;
            },
          }, {
            _createAccessor: function (i, l, c) {
              var a = {
                get: function () {
                  return s._get(i, l);
                },
              };
              i.modifiable && (a.set = function (n) {
                s._set(i, n, l) && c(n, i);
              }), Object.defineProperty(l, i.name, a);
            },
            _get: function (i, l) {
              return l["_" + i.name];
            },
            _set: function (i, l, c) {
              var a = "_" + i.name,
                n = c[a],
                p = i.transform(
                  l != null
                    ? l
                    : i.defaultValue,
                );
              return c[a] = p, p !== n;
            },
          });
        t.exports = s;
      }),
      R2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = r.extend(function () {
            this._services = {};
          }, {
            getService: function (s) {
              var i = this._services[s];
              if (!i) {
                throw new Error("Service is not being managed with name: " + s);
              }
              return i;
            },
            setService: function (s, i) {
              if (this._services[s]) {
                throw new Error("Service is already managed with name: " + s);
              }
              i && (this._services[s] = i);
            },
          });
        t.exports = o;
      }),
      E2 = q((e, t) => {
        "use strict";
        var r = me(),
          o = T2(),
          s = U2(),
          i = I2(),
          l = j2(),
          c = A2(),
          a = R2(),
          n = ed(),
          p = new c([
            new l("background", !0, "white"),
            new l("backgroundAlpha", !0, 1, n.abs),
            new l("element"),
            new l("foreground", !0, "black"),
            new l("foregroundAlpha", !0, 1, n.abs),
            new l("level", !0, "L", n.toUpperCase),
            new l("mime", !0, "image/png"),
            new l("padding", !0, null, n.abs),
            new l("size", !0, 100, n.abs),
            new l("value", !0, ""),
          ]),
          u = new a(),
          f = r.extend(function (m) {
            p.init(m, this, this.update.bind(this));
            var h = p.get("element", this),
              b = u.getService("element"),
              y = h && b.isCanvas(h) ? h : b.createCanvas(),
              C = h && b.isImage(h) ? h : b.createImage();
            this._canvasRenderer = new o(this, y, !0),
              this._imageRenderer = new i(this, C, C === h),
              this.update();
          }, {
            get: function () {
              return p.getAll(this);
            },
            set: function (m) {
              p.setAll(m, this) && this.update();
            },
            toDataURL: function (m) {
              return this.canvas.toDataURL(m || this.mime);
            },
            update: function () {
              var m = new s({ level: this.level, value: this.value });
              this._canvasRenderer.render(m), this._imageRenderer.render(m);
            },
          }, {
            use: function (m) {
              u.setService(m.getName(), m);
            },
          });
        Object.defineProperties(f.prototype, {
          canvas: {
            get: function () {
              return this._canvasRenderer.getElement();
            },
          },
          image: {
            get: function () {
              return this._imageRenderer.getElement();
            },
          },
        }), t.exports = f;
      }),
      B2 = q((e, t) => {
        "use strict";
        t.exports = E2();
      }),
      L2 = q((e, t) => {
        "use strict";
        var r = me(), o = r.extend({ getName: function () {} });
        t.exports = o;
      }),
      O2 = q((e, t) => {
        "use strict";
        var r = L2(),
          o = r.extend({
            createCanvas: function () {},
            createImage: function () {},
            getName: function () {
              return "element";
            },
            isCanvas: function (s) {},
            isImage: function (s) {},
          });
        t.exports = o;
      }),
      _2 = Ym(B2()),
      D2 = Ym(O2()),
      z2 = D2.default.extend({
        createCanvas: function () {
          return document.createElement("canvas");
        },
        createImage: function () {
          return document.createElement("img");
        },
        isCanvas: function (e) {
          return e instanceof HTMLCanvasElement;
        },
        isImage: function (e) {
          return e instanceof HTMLImageElement;
        },
      }),
      N2 = z2,
      td = _2.default;
    td.use(new N2());
  });
var F2,
  sd,
  nd = d(() => {
    we();
    ye();
    Xm();
    F2 = ({ url: e }) => {
      let t = N.useRef(null);
      return N.useEffect(() => {
        (async () => {
          let { QRious: o } = await Promise.resolve().then(() => (od(), rd)),
            s = {
              size: 200,
              element: t.current,
              foregroundAlpha: .9,
              foreground: "white",
              backgroundAlpha: 1,
              padding: 16,
              background: "#1e1e1e",
              value: e,
            },
            i = new o(s);
        })();
      }, [e]),
        D("canvas", {
          css: Y`
        border-radius: 16px;
        margin-bottom: 8px;
  `,
          ref: t,
        });
    },
      sd = ({ url: e }) => {
        let [t, r] = N.useState(!1);
        return D(
          st.div,
          {
            animate: {
              width: t
                ? 200
                : 56,
              height: t ? 220 : 48,
            },
            onClick: (o) => {
              r(!t);
            },
            css: Y`
                margin-bottom: 12px;
              `,
          },
          t
            ? D(F2, { key: e, url: e + "/edit/" })
            : D(yt, {
              variant: "extended",
              color: "secondary",
              onClick: () => {
                r(!t);
              },
            }, D(Qm, null)),
        );
      };
  });
function V2(e) {
  return { __html: e };
}
var id,
  $2,
  Xs,
  ad = d(() => {
    ye();
    ye();
    ye();
    ye();
    Vm();
    Hm();
    qm();
    Jm();
    nd();
    we();
    id = [640, 1024, 1920],
      $2 = [10, 25, 50, 75, 100],
      Xs = ({ onShare: e, onRestore: t, position: r, session: o }) => {
        let [s, i] = N.useState(!1),
          [l, c] = N.useState(75),
          [a, n] = N.useState(innerHeight),
          [p, u] = N.useState([o.children]);
        o.setChild = u;
        let [f, m] = N.useState(o.url),
          [h, b] = N.useState(" "),
          [y, C] = N.useState(id[1]),
          x = N.useRef(null),
          v = N.useRef(null),
          k = p[p.length - 1];
        N.useEffect(() => {
          window.addEventListener("resize", () => n(innerHeight));
        }),
          N.useEffect(() => {
            let U = setInterval(() => {
              if (h !== o.errorText) {
                let P = o.errorText;
                b(P),
                  i(!1),
                  setTimeout(() => {
                    o.errorText === P && i(!0);
                  }, 2e3);
              }
              f !== o.url && m(o.url);
            }, 200);
            return () => clearInterval(U);
          }, [b, m, h, f]);
        let S = l / 100;
        return D(
          st.div,
          {
            ref: x,
            css: Y`
            right: 20px;
            background-color:rgba(92 ,92, 152, 0.8);
            backdrop-filter: blur(10px);
            top: 20px;
            padding: 0px 0px 0px 16px;
            border-radius: 16px;
            white-space: normal;
            position: ${r || "fixed"};
          `,
            dragElastic: .5,
            dragConstraints: {
              left: 0,
              right: 300,
              top: -a / 4,
              bottom: a / 2,
            },
            dragMomentum: !1,
            drag: !0,
          },
          D(
            "div",
            {
              css: Y` 
              display: flex;
                `,
            },
            D(
              "div",
              {
                css: Y`
            display: flex;
            flex-direction: column;
            align-items: center;
          `,
              },
              D(
                Ft,
                {
                  value: l,
                  size: "small",
                  exclusive: !0,
                  onChange: (U, P) => P && c(P),
                },
                $2.map((U) =>
                  D(
                    Nt,
                    { key: U, value: U },
                    D(
                      "span",
                      {
                        css: Y`
                       color: ${
                          U === l
                            ? "rgba(255,255,255,.8)"
                            : "rgba(0,0,0,.3)"
                        };
                       `,
                      },
                      U,
                      "%",
                    ),
                  )
                ),
              ),
              D(
                st.div,
                {
                  animate: { width: y * S / devicePixelRatio, height: a * S },
                  css: Y`
              display: block;
              overflow: hidden;
              border-radius: 8px;
              opacity: 0.9;
           `,
                },
                h.trim() !== "" && D(
                  "pre",
                  {
                    css: Y`
                    position: absolute;
                    z-index:3;
                    color: rgb(255, 240, 240);
                    padding: 24px;
                    font-size: 14pt;
                    background-color: rgb(255, 0, 0);
                    flex: 0 0 auto;
                    overflow: auto;
                    margin: 0;
                    font-family: monospace;
                    white-space: pre-wrap;
                `,
                  },
                  s && h.trim(),
                  s && h.trim() !== "" && D(
                    "div",
                    {
                      css: Y`
                          text-align: right;
                        `,
                    },
                    D(Rr, {
                      variant: "contained",
                      onClick: () => {
                        t(), b("");
                      },
                      color: "primary",
                    }, "Restore"),
                  ),
                ),
                D(
                  st.div,
                  {
                    animate: {
                      transformOrigin: "0px 0px",
                      width: y / devicePixelRatio,
                      height: a,
                      scale: S,
                    },
                    css: Y`
                  overflow:overlay;
                  >div{
                    width:100%;
                    height:100%;
                    overflow: overlay;
                    background: white;
                  }
              `,
                  },
                  h
                    ? D("div", { dangerouslySetInnerHTML: V2(o.html) })
                    : D(N.Suspense, {
                      fallback: D("div", null, "Error fallback"),
                    }, D("div", { id: "zbody", key: o.i, ref: v }, k)),
                ),
              ),
              D(
                Ft,
                {
                  value: y,
                  size: "small",
                  exclusive: !0,
                  onChange: (U, P) => P && C(P),
                },
                id.map((U) =>
                  D(
                    Nt,
                    { key: U, value: U },
                    U === 640
                      ? D(Km, {
                        css: Y`
                        color: ${
                          y === 640
                            ? "rgba(255,255,255,.8)"
                            : "rgba(0,0,0,.3)"
                        };
                        `,
                      })
                      : U === 1024
                      ? D(Wm, {
                        css: Y`
                        color: ${
                          y === 1024
                            ? "rgba(255,255,255,.8)"
                            : "rgba(0,0,0,.3)"
                        };
                        `,
                      })
                      : D(Gm, {
                        css: Y`
                        color: ${
                          y === 1920
                            ? "rgba(255,255,255,.8)"
                            : "rgba(0,0,0,.3)"
                        };
                      `,
                      }),
                  )
                ),
              ),
            ),
            D(
              "div",
              {
                css: Y`
              display: flex;
              align-items: center;          
              flex-direction: column;
              padding: 16px;
              `,
              },
              D(sd, { url: f }),
              D(yt, {
                variant: "extended",
                color: "primary",
                onClick: () => {
                  e();
                },
              }, D($m, null)),
            ),
          ),
        );
      };
  });
var ud = {};
lt(ud, {
  DraggableWindow: () => Xs,
  Fragment: () => pd,
  Global: () => W2,
  Motion: () => ld,
  React: () => N,
  css: () => Y,
  default: () => H2,
  jsx: () => D,
  motion: () => st,
  render: () => cd,
});
import * as ld from "https://unpkg.com/framer-motion@5.0.0/dist/es/index.mjs";
import N, {
  Fragment as pd,
} from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
import { render as G2 } from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react-dom.mjs";
import {
  css as Y,
  Global as W2,
  jsx as D,
} from "https://unpkg.com/@emotion/react@11.5.0/dist/emotion-react.browser.esm.js";
var st,
  cd,
  H2,
  we = d(() => {
    ad();
    ({ motion: st } = ld),
      cd = (e, t) => {
        let r = G2(D(pd, { children: e }), t);
      },
      H2 = N;
  });
function K2() {
  return md ||
    (md = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function J2() {
  return dd ||
    (dd = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ]);
}
function Q2(e) {
  let t = new Promise((r, o) => {
    let s = () => {
        e.removeEventListener("success", i), e.removeEventListener("error", l);
      },
      i = () => {
        r($e(e.result)), s();
      },
      l = () => {
        o(e.error), s();
      };
    e.addEventListener("success", i), e.addEventListener("error", l);
  });
  return t.then((r) => {
    r instanceof IDBCursor && fd.set(r, e);
  }).catch(() => {}),
    en.set(t, e),
    t;
}
function X2(e) {
  if (Ys.has(e)) return;
  let t = new Promise((r, o) => {
    let s = () => {
        e.removeEventListener("complete", i),
          e.removeEventListener("error", l),
          e.removeEventListener("abort", l);
      },
      i = () => {
        r(), s();
      },
      l = () => {
        o(e.error || new DOMException("AbortError", "AbortError")), s();
      };
    e.addEventListener("complete", i),
      e.addEventListener("error", l),
      e.addEventListener("abort", l);
  });
  Ys.set(e, t);
}
function Y2(e) {
  tn = e(tn);
}
function Z2(e) {
  return e === IDBDatabase.prototype.transaction &&
      !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...r) {
      let o = e.call(rn(this), t, ...r);
      return hd.set(o, t.sort ? t.sort() : [t]), $e(o);
    }
    : J2().includes(e)
    ? function (...t) {
      return e.apply(rn(this), t), $e(fd.get(this));
    }
    : function (...t) {
      return $e(e.apply(rn(this), t));
    };
}
function ex(e) {
  return typeof e == "function"
    ? Z2(e)
    : (e instanceof IDBTransaction && X2(e),
      q2(e, K2()) ? new Proxy(e, tn) : e);
}
function $e(e) {
  if (e instanceof IDBRequest) return Q2(e);
  if (Zs.has(e)) return Zs.get(e);
  let t = ex(e);
  return t !== e && (Zs.set(e, t), en.set(t, e)), t;
}
function tx(e, t, { blocked: r, upgrade: o, blocking: s, terminated: i } = {}) {
  let l = indexedDB.open(e, t), c = $e(l);
  return o && l.addEventListener("upgradeneeded", (a) => {
    o($e(l.result), a.oldVersion, a.newVersion, $e(l.transaction));
  }),
    r && l.addEventListener("blocked", () => r()),
    c.then((a) => {
      i && a.addEventListener("close", () => i()),
        s && a.addEventListener("versionchange", () => s());
    }).catch(() => {}),
    c;
}
function bd(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (on.get(t)) return on.get(t);
  let r = t.replace(/FromIndex$/, ""), o = t !== r, s = ox.includes(r);
  if (
    !(r in (o ? IDBIndex : IDBObjectStore).prototype) || !(s || rx.includes(r))
  ) {
    return;
  }
  let i = async function (l, ...c) {
    let a = this.transaction(l, s ? "readwrite" : "readonly"), n = a.store;
    return o && (n = n.index(c.shift())),
      (await Promise.all([n[r](...c), s && a.done]))[0];
  };
  return on.set(t, i), i;
}
function Ie() {}
function sx(e, t, r, o, s) {
  for (var i = 0, l = t.length, c = 0, a = 0; i < l; i++) {
    var n = t[i];
    if (n.removed) {
      if (
        n.value = e.join(o.slice(a, a + n.count)),
          a += n.count,
          i && t[i - 1].added
      ) {
        var p = t[i - 1];
        t[i - 1] = t[i], t[i] = p;
      }
    } else {
      if (!n.added && s) {
        var u = r.slice(c, c + n.count);
        u = u.map(function (m, h) {
          var b = o[a + h];
          return b.length > m.length ? b : m;
        }), n.value = e.join(u);
      } else n.value = e.join(r.slice(c, c + n.count));
      c += n.count, n.added || (a += n.count);
    }
  }
  var f = t[l - 1];
  return l > 1 && typeof f.value == "string" && (f.added || f.removed) &&
    e.equals("", f.value) && (t[l - 2].value += f.value, t.pop()),
    t;
}
function nx(e) {
  return { newPos: e.newPos, components: e.components.slice(0) };
}
function ax(e, t, r) {
  return ix.diff(e, t, r);
}
function Lr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
    ? Lr = function (t) {
      return typeof t;
    }
    : Lr = function (t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol &&
          t !== Symbol.prototype
        ? "symbol"
        : typeof t;
    },
    Lr(e);
}
function sn(e, t, r, o, s) {
  t = t || [], r = r || [], o && (e = o(s, e));
  var i;
  for (i = 0; i < t.length; i += 1) if (t[i] === e) return r[i];
  var l;
  if (cx.call(e) === "[object Array]") {
    for (
      t.push(e), l = new Array(e.length), r.push(l), i = 0; i < e.length; i += 1
    ) {
      l[i] = sn(e[i], t, r, o, s);
    }
    return t.pop(), r.pop(), l;
  }
  if (e && e.toJSON && (e = e.toJSON()), Lr(e) === "object" && e !== null) {
    t.push(e), l = {}, r.push(l);
    var c = [], a;
    for (a in e) e.hasOwnProperty(a) && c.push(a);
    for (c.sort(), i = 0; i < c.length; i += 1) {
      a = c[i], l[a] = sn(e[a], t, r, o, a);
    }
    t.pop(), r.pop();
  } else l = e;
  return l;
}
function Cd(e = "defaultStore") {
  return async () => {
    let t = tx("spike-land-alpha", 1, {
      upgrade(r) {
        r.createObjectStore(e);
      },
      blocked() {},
      blocking() {},
      terminated() {},
    });
    return fx({
      async get(r) {
        return (await t).get(e, r);
      },
      async put(r, o) {
        return (await t).put(e, o, r);
      },
      async delete(r) {
        return (await t).delete(e, r);
      },
      async clear() {
        return (await t).clear(e);
      },
      async keys() {
        return (await t).getAllKeys(e);
      },
    });
  };
}
var q2,
  md,
  dd,
  fd,
  Ys,
  hd,
  Zs,
  en,
  tn,
  rn,
  rx,
  ox,
  on,
  ix,
  gd,
  yd,
  xd,
  kd,
  lx,
  px,
  cx,
  $t,
  nn,
  le,
  ux,
  mx,
  dx,
  fx,
  W,
  Or = d(() => {
    q2 = (e, t) => t.some((r) => e instanceof r);
    fd = new WeakMap(),
      Ys = new WeakMap(),
      hd = new WeakMap(),
      Zs = new WeakMap(),
      en = new WeakMap();
    tn = {
      get(e, t, r) {
        if (e instanceof IDBTransaction) {
          if (t === "done") return Ys.get(e);
          if (t === "objectStoreNames") return e.objectStoreNames || hd.get(e);
          if (t === "store") {
            return r.objectStoreNames[1]
              ? void 0
              : r.objectStore(r.objectStoreNames[0]);
          }
        }
        return $e(e[t]);
      },
      set(e, t, r) {
        return e[t] = r, !0;
      },
      has(e, t) {
        return e instanceof IDBTransaction && (t === "done" || t === "store")
          ? !0
          : t in e;
      },
    };
    rn = (e) => en.get(e);
    rx = ["get", "getKey", "getAll", "getAllKeys", "count"],
      ox = ["put", "add", "delete", "clear"],
      on = new Map();
    Y2((e) => ({
      ...e,
      get: (t, r, o) => bd(t, r) || e.get(t, r, o),
      has: (t, r) => !!bd(t, r) || e.has(t, r),
    }));
    Ie.prototype = {
      diff: function (e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {},
          o = r.callback;
        typeof r == "function" && (o = r, r = {}), this.options = r;
        var s = this;
        function i(h) {
          return o
            ? (setTimeout(function () {
              o(void 0, h);
            }, 0),
              !0)
            : h;
        }
        e = this.castInput(e),
          t = this.castInput(t),
          e = this.removeEmpty(this.tokenize(e)),
          t = this.removeEmpty(this.tokenize(t));
        var l = t.length,
          c = e.length,
          a = 1,
          n = l + c,
          p = [{ newPos: -1, components: [] }],
          u = this.extractCommon(p[0], t, e, 0);
        if (p[0].newPos + 1 >= l && u + 1 >= c) {return i([{
            value: this.join(t),
            count: t.length,
          }]);}
        function f() {
          for (var h = -1 * a; h <= a; h += 2) {
            var b = void 0,
              y = p[h - 1],
              C = p[h + 1],
              x = (C ? C.newPos : 0) - h;
            y && (p[h - 1] = void 0);
            var v = y && y.newPos + 1 < l, k = C && 0 <= x && x < c;
            if (!v && !k) {
              p[h] = void 0;
              continue;
            }
            if (
              !v || k && y.newPos < C.newPos
                ? (b = nx(C), s.pushComponent(b.components, void 0, !0))
                : (b = y,
                  b.newPos++,
                  s.pushComponent(b.components, !0, void 0)),
                x = s.extractCommon(b, t, e, h),
                b.newPos + 1 >= l && x + 1 >= c
            ) {
              return i(sx(s, b.components, t, e, s.useLongestToken));
            }
            p[h] = b;
          }
          a++;
        }
        if (o) {
          (function h() {
            setTimeout(function () {
              if (a > n) return o();
              f() || h();
            }, 0);
          })();
        } else {
          for (; a <= n;) {
            var m = f();
            if (m) return m;
          }
        }
      },
      pushComponent: function (e, t, r) {
        var o = e[e.length - 1];
        o && o.added === t && o.removed === r
          ? e[e.length - 1] = { count: o.count + 1, added: t, removed: r }
          : e.push({ count: 1, added: t, removed: r });
      },
      extractCommon: function (e, t, r, o) {
        for (
          var s = t.length, i = r.length, l = e.newPos, c = l - o, a = 0;
          l + 1 < s && c + 1 < i && this.equals(t[l + 1], r[c + 1]);
        ) {
          l++, c++, a++;
        }
        return a && e.components.push({ count: a }), e.newPos = l, c;
      },
      equals: function (e, t) {
        return this.options.comparator ? this.options.comparator(e, t)
        : e === t ||
          this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
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
    ix = new Ie();
    gd = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
      yd = /\S/,
      xd = new Ie();
    xd.equals = function (e, t) {
      return this.options.ignoreCase &&
        (e = e.toLowerCase(), t = t.toLowerCase()),
        e === t || this.options.ignoreWhitespace && !yd.test(e) && !yd.test(t);
    };
    xd.tokenize = function (e) {
      for (
        var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0;
        r < t.length - 1;
        r++
      ) {
        !t[r + 1] && t[r + 2] && gd.test(t[r]) && gd.test(t[r + 2]) &&
          (t[r] += t[r + 2], t.splice(r + 1, 2), r--);
      }
      return t;
    };
    kd = new Ie();
    kd.tokenize = function (e) {
      var t = [], r = e.split(/(\n|\r\n)/);
      r[r.length - 1] || r.pop();
      for (var o = 0; o < r.length; o++) {
        var s = r[o];
        o % 2 && !this.options.newlineIsToken ? t[t.length - 1] += s
        : (this.options.ignoreWhitespace && (s = s.trim()), t.push(s));
      }
      return t;
    };
    lx = new Ie();
    lx.tokenize = function (e) {
      return e.split(/(\S.+?[.!?])(?=\s+|$)/);
    };
    px = new Ie();
    px.tokenize = function (e) {
      return e.split(/([{}:;,]|\s+)/);
    };
    cx = Object.prototype.toString, $t = new Ie();
    $t.useLongestToken = !0;
    $t.tokenize = kd.tokenize;
    $t.castInput = function (e) {
      var t = this.options,
        r = t.undefinedReplacement,
        o = t.stringifyReplacer,
        s = o === void 0
          ? function (i, l) {
            return typeof l == "undefined" ? r : l;
          }
          : o;
      return typeof e == "string" ? e
      : JSON.stringify(sn(e, null, null, s), s, "  ");
    };
    $t.equals = function (e, t) {
      return Ie.prototype.equals.call(
        $t,
        e.replace(/,([\r\n])/g, "$1"),
        t.replace(/,([\r\n])/g, "$1"),
      );
    };
    nn = new Ie();
    nn.tokenize = function (e) {
      return e.slice();
    };
    nn.join = nn.removeEmpty = function (e) {
      return e;
    };
    le = async (e) =>
      Array.from(
        new Uint8Array(
          await crypto.subtle.digest(
            "SHA-256",
            typeof e == "string" ? new TextEncoder().encode(e) : e,
          ),
        ).slice(0, 4),
      ).map((t) => ("00" + t.toString(16)).slice(-2)).join(""),
      ux = async (e, t) => {
        let r = le(e), o = ax(e, t);
        return {
          b: await r,
          c: o.map((s) => s.added ? s.value : s.removed ? -s.count : s.count),
        };
      },
      mx = (e) => {
        if (e.length < 10) return !1;
        let t = [...e.slice(0, 8)].filter((o) =>
            o < "0" || o > "f"
          ).length === 0,
          r = e.slice(8);
        if (t && r[0] === "[" && r[r.length - 1] === "]") {
          try {
            return JSON.parse(r).length > 1;
          } catch (o) {
            return !1;
          }
        }
        return !1;
      },
      dx = (e, t) => {
        let r = JSON.parse(t), o = e.slice(), s = "";
        return r.forEach((i) => {
          if (Number(i) === i) {
            let l = Math.abs(i), c = o.slice(0, l);
            o = o.slice(l), i > 0 && (s += String(c));
          } else s += String(i);
        }),
          s;
      },
      fx = (e) => {
        let t = {
          async get(r, o = "string") {
            let s;
            try {
              if (s = await e.get(r), !s) return null;
            } catch (l) {
              return null;
            }
            if (o === "json") {
              try {
                return JSON.parse(s);
              } catch (l) {
                return s;
              }
            }
            let i = await s;
            if (o === "string") {
              if (typeof i == "string" && o === "string") {
                let l = i;
                if (mx(l)) {
                  let c = l.slice(0, 8), a = l.slice(8), n = await t.get(c);
                  return dx(n, a);
                }
                return i;
              }
              return new TextDecoder().decode(i);
            }
            return s;
          },
          async put(r, o) {
            let s;
            try {
              let l = await t.get(r);
              if (
                typeof l == "string" && typeof o == "string" &&
                l.length === 8 && l !== o
              ) {
                let c = await t.get(o), a = await t.get(l);
                if (typeof a == "string") {
                  let n = await le(a);
                  if (n === l) {
                    let p = await ux(c, a), u = p.b + JSON.stringify(p.c);
                    await t.put(n, u);
                  }
                }
              }
            } catch (l) {
              s = "";
            }
            if (s !== "" && o === s) return o;
            let i;
            return typeof o != "string"
              ? i = new TextDecoder().decode(o)
              : i = o,
              await e.put(r, i);
          },
          async delete(r) {
            return await e.delete(r);
          },
          async clear() {
            return await e.clear();
          },
          async keys() {
            return await e.getAllKeys();
          },
        };
        return t;
      };
    W = {
      get: async (e, t) => (await (await Cd("shaDB"))()).get(e, t),
      put: async (e, t) => (await (await Cd("shaDB"))()).put(e, t),
    };
  });
var xt,
  _r = d(() => {
    xt = (e) => {
      let t, r = !1, { pathname: o } = window.location;
      if (o.indexOf("/ipfs/") !== -1) {
        let s = o.slice(6, 52);
        r = !0, t = `/ipfs/${s}/js/workers/${e}`;
      } else {
        location.origin !== "https://code.spike.land"
          ? (r = !0,
            t = window.URL.createObjectURL(
              new Blob([
                `self.importScripts("https://code.spike.land/js/workers/${e}");`,
              ]),
            ))
          : t = `https://code.spike.land/js/workers/${e}`;
      }
      return { workerSrc: t, forceNormalWorker: r };
    };
  });
var mh = {};
lt(mh, {
  CID: () => uh,
  IPFSClient: () => er,
  all: () => tr,
  concat: () => Kr,
  fetchSignal: () => ch,
  fromHexString: () => Ln,
  fromString: () => Zf,
  publicIpfsGateways: () => q4,
  raceToSuccess: () => ph,
  sendSignal: () => Q4,
  sha256ToCid: () => J4,
  toString: () => Hr,
});
function Td(e, t, r) {
  t = t || [], r = r || 0;
  for (var o = r; e >= Md;) t[r++] = e & 255 | ln, e /= 128;
  for (; e & Sd;) t[r++] = e & 255 | ln, e >>>= 7;
  return t[r] = e | 0, Td.bytes = r - o + 1, t;
}
function an(e, t) {
  var r = 0, t = t || 0, o = 0, s = t, i, l = e.length;
  do {
    if (s >= l) throw an.bytes = 0, new RangeError("Could not decode varint");
    i = e[s++], r += o < 28 ? (i & pn) << o : (i & pn) * Math.pow(2, o), o += 7;
  } while (i >= Id);
  return an.bytes = s - t, r;
}
function wx(e, t) {
  if (e.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), o = 0; o < r.length; o++) r[o] = 255;
  for (var s = 0; s < e.length; s++) {
    var i = e.charAt(s), l = i.charCodeAt(0);
    if (r[l] !== 255) throw new TypeError(i + " is ambiguous");
    r[l] = s;
  }
  var c = e.length,
    a = e.charAt(0),
    n = Math.log(c) / Math.log(256),
    p = Math.log(256) / Math.log(c);
  function u(h) {
    if (
      h instanceof Uint8Array || (ArrayBuffer.isView(h)
        ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength)
        : Array.isArray(h) && (h = Uint8Array.from(h))),
        !(h instanceof Uint8Array)
    ) {
      throw new TypeError("Expected Uint8Array");
    }
    if (h.length === 0) return "";
    for (var b = 0, y = 0, C = 0, x = h.length; C !== x && h[C] === 0;) {
      C++, b++;
    }
    for (var v = (x - C) * p + 1 >>> 0, k = new Uint8Array(v); C !== x;) {
      for (
        var S = h[C], U = 0, P = v - 1; (S !== 0 || U < y) && P !== -1; P--, U++
      ) {
        S += 256 * k[P] >>> 0, k[P] = S % c >>> 0, S = S / c >>> 0;
      }
      if (S !== 0) throw new Error("Non-zero carry");
      y = U, C++;
    }
    for (var I = v - y; I !== v && k[I] === 0;) I++;
    for (var A = a.repeat(b); I < v; ++I) A += e.charAt(k[I]);
    return A;
  }
  function f(h) {
    if (typeof h != "string") throw new TypeError("Expected String");
    if (h.length === 0) return new Uint8Array();
    var b = 0;
    if (h[b] !== " ") {
      for (var y = 0, C = 0; h[b] === a;) y++, b++;
      for (var x = (h.length - b) * n + 1 >>> 0, v = new Uint8Array(x); h[b];) {
        var k = r[h.charCodeAt(b)];
        if (k === 255) return;
        for (var S = 0, U = x - 1; (k !== 0 || S < C) && U !== -1; U--, S++) {
          k += c * v[U] >>> 0, v[U] = k % 256 >>> 0, k = k / 256 >>> 0;
        }
        if (k !== 0) throw new Error("Non-zero carry");
        C = S, b++;
      }
      if (h[b] !== " ") {
        for (var P = x - C; P !== x && v[P] === 0;) P++;
        for (var I = new Uint8Array(y + (x - P)), A = y; P !== x;) {
          I[A++] = v[P++];
        }
        return I;
      }
    }
  }
  function m(h) {
    var b = f(h);
    if (b) return b;
    throw new Error(`Non-${t} character`);
  }
  return { encode: u, decodeUnsafe: f, decode: m };
}
function Qf(e, t, r, o) {
  return {
    name: e,
    prefix: t,
    encoder: { name: e, prefix: t, encode: r },
    decoder: { decode: o },
  };
}
function Hr(e, t = "utf8") {
  let r = Cn[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return r.encoder.encode(e).substring(1);
}
function Zf(e, t = "utf8") {
  let r = Cn[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return r.decoder.decode(`${r.prefix}${e}`);
}
function Kr(e, t) {
  t || (t = e.reduce((s, i) => s + i.length, 0));
  let r = new Uint8Array(t), o = 0;
  for (let s of e) r.set(s, o), o += s.length;
  return r;
}
function C4(e, t) {
  if (e === t) return !0;
  if (e.byteLength !== t.byteLength) return !1;
  for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function D4(e) {
  if (e != null) {
    return typeof e == "number"
      ? e & 4095
      : (e = e.toString(),
        e.substring(0, 1) === "0"
          ? parseInt(e, 8) & 4095
          : parseInt(e, 10) & 4095);
  }
}
function z4(e) {
  if (e == null) return;
  let t;
  if (
    e.secs != null && (t = { secs: e.secs, nsecs: e.nsecs }),
      e.Seconds != null &&
      (t = { secs: e.Seconds, nsecs: e.FractionalNanoseconds }),
      Array.isArray(e) && (t = { secs: e[0], nsecs: e[1] }),
      e instanceof Date
  ) {
    let r = e.getTime(), o = Math.floor(r / 1e3);
    t = { secs: o, nsecs: (r - o * 1e3) * 1e3 };
  }
  if (Object.prototype.hasOwnProperty.call(t, "secs")) {
    if (t != null && t.nsecs != null && (t.nsecs < 0 || t.nsecs > 999999999)) {
      throw (0, _4.default)(
        new Error("mtime-nsecs must be within the range [0,999999999]"),
        "ERR_INVALID_MTIME_NSECS",
      );
    }
    return t;
  }
}
function ph(e) {
  let t = 0;
  return new Promise((r, o) =>
    e.forEach((s) =>
      s.then(r).catch(() => {
        ++t === e.length && o();
      })
    )
  );
}
async function ch(e, t) {
  if (typeof window == "undefined") return;
  let r = typeof t == "number" ? t : 999;
  try {
    let { ipfsClient: o, ipfsCat: s } = globalThis;
    if (r === 0) throw new Error("No more retry");
    let i = (await o.add(e, { onlyHash: !0 })).cid.toString();
    await s(i, { timeout: 1500 });
    let l = e.slice(-8),
      c = await fetch(
        `https://code.spike.land/signal?signal=${l}&securityrandomparam=${
          Math.random() * 1e4
        }`,
      ).then((n) => n.text()),
      a = await fetch(`https://code.spike.land/ipfs/${c}`).then((n) =>
        n.text()
      );
    return () => K4(a);
  } catch (o) {
    if (r > 1) return ch(e, r - 1);
  }
}
function K4(e) {
  try {
    return typeof e != "string" ? e : JSON.parse(e);
  } catch (t) {
    return e;
  }
}
function J4(e) {
  return new lh.default(0, 112, Ln("1220" + e)).toString();
}
async function Q4(e, t) {
  let { ipfsClient: r } = globalThis;
  if (Yr(`sending signal: ${e}`), t) {
    Yr("sending data as well....");
    let s = typeof t != "string" ? JSON.stringify(t) : t;
    Yr(s);
    let i = (await r.add(s)).cid.toString(), { pathname: l } = new URL(e);
    await fetch(
      `https://code.spike.land/signal/?cid=${i}&signal=${l.slice(1)}`,
    ), fetch(`https://code.spike.land/ipfs/${i}`);
  }
  let { path: o } = await r.add(e);
  return Yr(`signal sent --- ${o}`), { success: !0 };
}
var hx,
  Dr,
  bx,
  gx,
  yx,
  xx,
  vd,
  F,
  R,
  se,
  kx,
  Vt,
  Cx,
  wd,
  ln,
  Pd,
  Sd,
  Md,
  Ud,
  Id,
  pn,
  jd,
  Ad,
  Rd,
  Ed,
  Bd,
  Ld,
  Od,
  _d,
  Dd,
  zd,
  Nd,
  Fd,
  Wt,
  vx,
  zr,
  Ht,
  Gt,
  cn,
  Tx,
  $d,
  qt,
  Vd,
  Wd,
  nt,
  un,
  Hd,
  Gd,
  Nr,
  mn,
  qd,
  Kd,
  Jd,
  Px,
  Qd,
  Xd,
  dn,
  Yd,
  Fr,
  kt,
  Zd,
  ef,
  K,
  je,
  tf,
  Pe,
  rf,
  of,
  sf,
  Ct,
  nf,
  af,
  lf,
  pf,
  cf,
  uf,
  mf,
  df,
  ff,
  H,
  hf,
  bf,
  gf,
  vt,
  yf,
  fn,
  hn,
  Kt,
  Jt,
  xf,
  kf,
  Cf,
  Qt,
  Sx,
  Mx,
  Ux,
  Ix,
  jx,
  Ax,
  Rx,
  Ex,
  Bx,
  Lx,
  it,
  vf,
  Ox,
  Tf,
  _x,
  Dx,
  zx,
  Nx,
  Fx,
  $x,
  Vx,
  bn,
  Wx,
  Hx,
  Gx,
  wf,
  qx,
  Kx,
  Jx,
  Qx,
  Xx,
  Pf,
  Sf,
  Yx,
  Mf,
  Uf,
  Zx,
  If,
  jf,
  e4,
  Af,
  Rf,
  t4,
  Ef,
  Bf,
  Lf,
  r4,
  Of,
  _f,
  Df,
  o4,
  zf,
  Nf,
  Ff,
  $f,
  Vf,
  s4,
  $r,
  Wf,
  gn,
  Hf,
  yn,
  Gf,
  qf,
  n4,
  Kf,
  Jf,
  i4,
  a4,
  l4,
  p4,
  c4,
  u4,
  xn,
  m4,
  d4,
  kn,
  Vr,
  Xf,
  Cn,
  Yf,
  Wr,
  Gr,
  vn,
  Tn,
  qr,
  Jr,
  eh,
  f4,
  h4,
  b4,
  th,
  rh,
  g4,
  y4,
  x4,
  k4,
  oh,
  sh,
  v4,
  T4,
  w4,
  wn,
  P4,
  S4,
  M4,
  U4,
  Xt,
  I4,
  j4,
  Qr,
  Ae,
  Re,
  A4,
  Yt,
  R4,
  E4,
  B4,
  Pn,
  Xr,
  L4,
  Sn,
  Ee,
  O4,
  nh,
  Mn,
  _4,
  Ve,
  Tt,
  Un,
  j,
  Z,
  HD,
  GD,
  qD,
  KD,
  JD,
  Zt,
  ih,
  N4,
  F4,
  $4,
  V4,
  wt,
  In,
  jn,
  W4,
  An,
  Rn,
  En,
  Bn,
  ah,
  H4,
  G4,
  er,
  lh,
  q4,
  Ln,
  Yr,
  uh,
  tr,
  On = d(() => {
    hx = Object.create,
      Dr = Object.defineProperty,
      bx = Object.getOwnPropertyDescriptor,
      gx = Object.getOwnPropertyNames,
      yx = Object.getPrototypeOf,
      xx = Object.prototype.hasOwnProperty,
      vd = (e) => Dr(e, "__esModule", { value: !0 }),
      F = (e, t) => () => (e && (t = e(e = 0)), t),
      R = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      se = (e, t) => {
        vd(e);
        for (var r in t) Dr(e, r, { get: t[r], enumerable: !0 });
      },
      kx = (e, t, r) => {
        if (t && typeof t == "object" || typeof t == "function") {
          for (let o of gx(t)) {
            !xx.call(e, o) && o !== "default" && Dr(e, o, {
              get: () => t[o],
              enumerable: !(r = bx(t, o)) || r.enumerable,
            });
          }
        }
        return e;
      },
      Vt = (e) =>
        kx(
          vd(Dr(
            e != null
              ? hx(yx(e))
              : {},
            "default",
            e && e.__esModule && "default" in e
              ? { get: () => e.default, enumerable: !0 }
              : { value: e, enumerable: !0 },
          )),
          e,
        ),
      Cx = R((e, t) => {
        "use strict";
        var r = async (o) => {
          let s = [];
          for await (let i of o) s.push(i);
          return s;
        };
        t.exports = r;
      });
    vx = F(() => {
      wd = Td,
        ln = 128,
        Pd = 127,
        Sd = ~Pd,
        Md = Math.pow(2, 31),
        Ud = an,
        Id = 128,
        pn = 127,
        jd = Math.pow(2, 7),
        Ad = Math.pow(2, 14),
        Rd = Math.pow(2, 21),
        Ed = Math.pow(2, 28),
        Bd = Math.pow(2, 35),
        Ld = Math.pow(2, 42),
        Od = Math.pow(2, 49),
        _d = Math.pow(2, 56),
        Dd = Math.pow(2, 63),
        zd = function (e) {
          return e < jd
            ? 1
            : e < Ad
            ? 2
            : e < Rd
            ? 3
            : e < Ed
            ? 4
            : e < Bd
            ? 5
            : e < Ld
            ? 6
            : e < Od
            ? 7
            : e < _d
            ? 8
            : e < Dd
            ? 9
            : 10;
        },
        Nd = { encode: wd, decode: Ud, encodingLength: zd },
        Fd = Nd,
        Wt = Fd;
    }),
      cn = F(() => {
        vx(),
          zr = (e) => [Wt.decode(e), Wt.decode.bytes],
          Ht = (e, t, r = 0) => (Wt.encode(e, t, r), t),
          Gt = (e) => Wt.encodingLength(e);
      }),
      nt = F(() => {
        Tx = new Uint8Array(0),
          $d = (e, t) => {
            if (e === t) return !0;
            if (e.byteLength !== t.byteLength) return !1;
            for (let r = 0; r < e.byteLength; r++) {
              if (e[r] !== t[r]) return !1;
            }
            return !0;
          },
          qt = (e) => {
            if (
              e instanceof Uint8Array && e.constructor.name === "Uint8Array"
            ) {
              return e;
            }
            if (e instanceof ArrayBuffer) return new Uint8Array(e);
            if (ArrayBuffer.isView(e)) {
              return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            }
            throw new Error("Unknown type, must be binary type");
          },
          Vd = (e) => new TextEncoder().encode(e),
          Wd = (e) => new TextDecoder().decode(e);
      }),
      mn = F(() => {
        nt(),
          cn(),
          un = (e, t) => {
            let r = t.byteLength,
              o = Gt(e),
              s = o + Gt(r),
              i = new Uint8Array(s + r);
            return Ht(e, i, 0), Ht(r, i, o), i.set(t, s), new Nr(e, r, t, i);
          },
          Hd = (e) => {
            let t = qt(e),
              [r, o] = zr(t),
              [s, i] = zr(t.subarray(o)),
              l = t.subarray(o + i);
            if (l.byteLength !== s) throw new Error("Incorrect length");
            return new Nr(r, s, l, t);
          },
          Gd = (e, t) =>
            e === t
              ? !0
              : e.code === t.code && e.size === t.size && $d(e.bytes, t.bytes),
          Nr = class {
            constructor(e, t, r, o) {
              this.code = e, this.size = t, this.digest = r, this.bytes = o;
            }
          };
      });
    Px = F(() => {
      qd = wx, Kd = qd, Jd = Kd;
    }),
      je = F(() => {
        Px(),
          nt(),
          Qd = class {
            constructor(e, t, r) {
              this.name = e, this.prefix = t, this.baseEncode = r;
            }
            encode(e) {
              if (e instanceof Uint8Array) {
                return `${this.prefix}${this.baseEncode(e)}`;
              }
              throw Error("Unknown type, must be binary type");
            }
          },
          Xd = class {
            constructor(e, t, r) {
              this.name = e, this.prefix = t, this.baseDecode = r;
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
              let t = {
                [this.prefix]: this,
                ...e.decoders || { [e.prefix]: e },
              };
              return new dn(t);
            }
          },
          dn = class {
            constructor(e) {
              this.decoders = e;
            }
            or(e) {
              let t = e.decoders || { [e.prefix]: e };
              return new dn({ ...this.decoders, ...t });
            }
            decode(e) {
              let t = e[0], r = this.decoders[t];
              if (r) return r.decode(e);
              throw RangeError(
                `Unable to decode multibase string ${
                  JSON.stringify(e)
                }, only inputs prefixed with ${
                  Object.keys(this.decoders)
                } are supported`,
              );
            }
          },
          Yd = class {
            constructor(e, t, r, o) {
              this.name = e,
                this.prefix = t,
                this.baseEncode = r,
                this.baseDecode = o,
                this.encoder = new Qd(e, t, r),
                this.decoder = new Xd(e, t, o);
            }
            encode(e) {
              return this.encoder.encode(e);
            }
            decode(e) {
              return this.decoder.decode(e);
            }
          },
          Fr = ({ name: e, prefix: t, encode: r, decode: o }) =>
            new Yd(e, t, r, o),
          kt = ({ prefix: e, name: t, alphabet: r }) => {
            let { encode: o, decode: s } = Jd(r, t);
            return Fr({
              prefix: e,
              name: t,
              encode: o,
              decode: (i) => qt(s(i)),
            });
          },
          Zd = (e, t, r, o) => {
            let s = {};
            for (let p = 0; p < t.length; ++p) s[t[p]] = p;
            let i = e.length;
            for (; e[i - 1] === "=";) --i;
            let l = new Uint8Array(i * r / 8 | 0), c = 0, a = 0, n = 0;
            for (let p = 0; p < i; ++p) {
              let u = s[e[p]];
              if (u === void 0) throw new SyntaxError(`Non-${o} character`);
              a = a << r | u, c += r, c >= 8 && (c -= 8, l[n++] = 255 & a >> c);
            }
            if (c >= r || 255 & a << 8 - c) {
              throw new SyntaxError("Unexpected end of data");
            }
            return l;
          },
          ef = (e, t, r) => {
            let o = t[t.length - 1] === "=",
              s = (1 << r) - 1,
              i = "",
              l = 0,
              c = 0;
            for (let a = 0; a < e.length; ++a) {
              for (c = c << 8 | e[a], l += 8; l > r;) {
                l -= r, i += t[s & c >> l];
              }
            }
            if (l && (i += t[s & c << r - l]), o) {
              for (; i.length * r & 7;) i += "=";
            }
            return i;
          },
          K = ({ name: e, prefix: t, bitsPerChar: r, alphabet: o }) =>
            Fr({
              prefix: t,
              name: e,
              encode(s) {
                return ef(s, o, r);
              },
              decode(s) {
                return Zd(s, o, r, e);
              },
            });
      }),
      tf = {};
    se(tf, { base58btc: () => Pe, base58flickr: () => rf });
    of = F(() => {
      je(),
        Pe = kt({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        rf = kt({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
    }), sf = {};
    se(sf, {
      base32: () => Ct,
      base32hex: () => pf,
      base32hexpad: () => uf,
      base32hexpadupper: () => mf,
      base32hexupper: () => cf,
      base32pad: () => af,
      base32padupper: () => lf,
      base32upper: () => nf,
      base32z: () => df,
    });
    ff = F(() => {
      je(),
        Ct = K({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        nf = K({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        af = K({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        lf = K({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        pf = K({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        cf = K({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        uf = K({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        mf = K({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        df = K({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
    }),
      Qt = F(() => {
        cn(),
          mn(),
          of(),
          ff(),
          nt(),
          H = class {
            constructor(e, t, r, o) {
              this.code = t,
                this.version = e,
                this.multihash = r,
                this.bytes = o,
                this.byteOffset = o.byteOffset,
                this.byteLength = o.byteLength,
                this.asCID = this,
                this._baseCache = new Map(),
                Object.defineProperties(this, {
                  byteOffset: Jt,
                  byteLength: Jt,
                  code: Kt,
                  version: Kt,
                  multihash: Kt,
                  bytes: Kt,
                  _baseCache: Jt,
                  asCID: Jt,
                });
            }
            toV0() {
              switch (this.version) {
                case 0:
                  return this;
                default: {
                  let { code: e, multihash: t } = this;
                  if (e !== vt) {
                    throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                  }
                  if (t.code !== yf) {
                    throw new Error(
                      "Cannot convert non sha2-256 multihash CID to CIDv0",
                    );
                  }
                  return H.createV0(t);
                }
              }
            }
            toV1() {
              switch (this.version) {
                case 0: {
                  let { code: e, digest: t } = this.multihash, r = un(e, t);
                  return H.createV1(this.code, r);
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
                Gd(this.multihash, e.multihash);
            }
            toString(e) {
              let { bytes: t, version: r, _baseCache: o } = this;
              switch (r) {
                case 0:
                  return bf(t, o, e || Pe.encoder);
                default:
                  return gf(t, o, e || Ct.encoder);
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
              return kf(/^0\.0/, Cf), !!(e && (e[hn] || e.asCID === e));
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
              if (e instanceof H) return e;
              if (e != null && e.asCID === e) {
                let { version: t, code: r, multihash: o, bytes: s } = e;
                return new H(t, r, o, s || fn(t, r, o.bytes));
              } else if (e != null && e[hn] === !0) {
                let { version: t, multihash: r, code: o } = e, s = Hd(r);
                return H.create(t, o, s);
              } else return null;
            }
            static create(e, t, r) {
              if (typeof t != "number") {
                throw new Error("String codecs are no longer supported");
              }
              switch (e) {
                case 0: {
                  if (t !== vt) {
                    throw new Error(
                      `Version 0 CID must use dag-pb (code: ${vt}) block encoding`,
                    );
                  }
                  return new H(e, t, r, r.bytes);
                }
                case 1: {
                  let o = fn(e, t, r.bytes);
                  return new H(e, t, r, o);
                }
                default:
                  throw new Error("Invalid version");
              }
            }
            static createV0(e) {
              return H.create(0, vt, e);
            }
            static createV1(e, t) {
              return H.create(1, e, t);
            }
            static decode(e) {
              let [t, r] = H.decodeFirst(e);
              if (r.length) throw new Error("Incorrect length");
              return t;
            }
            static decodeFirst(e) {
              let t = H.inspectBytes(e),
                r = t.size - t.multihashSize,
                o = qt(e.subarray(r, r + t.multihashSize));
              if (o.byteLength !== t.multihashSize) {
                throw new Error("Incorrect length");
              }
              let s = o.subarray(t.multihashSize - t.digestSize),
                i = new Nr(t.multihashCode, t.digestSize, s, o);
              return [
                t.version === 0
                  ? H.createV0(i)
                  : H.createV1(t.codec, i),
                e.subarray(t.size),
              ];
            }
            static inspectBytes(e) {
              let t = 0,
                r = () => {
                  let [p, u] = zr(e.subarray(t));
                  return t += u, p;
                },
                o = r(),
                s = vt;
              if (
                o === 18
                  ? (o = 0, t = 0)
                  : o === 1 && (s = r()), o !== 0 && o !== 1
              ) {
                throw new RangeError(`Invalid CID version ${o}`);
              }
              let i = t, l = r(), c = r(), a = t + c, n = a - i;
              return {
                version: o,
                codec: s,
                multihashCode: l,
                digestSize: c,
                multihashSize: n,
                size: a,
              };
            }
            static parse(e, t) {
              let [r, o] = hf(e, t), s = H.decode(o);
              return s._baseCache.set(r, e), s;
            }
          },
          hf = (e, t) => {
            switch (e[0]) {
              case "Q": {
                let r = t || Pe;
                return [Pe.prefix, r.decode(`${Pe.prefix}${e}`)];
              }
              case Pe.prefix: {
                let r = t || Pe;
                return [Pe.prefix, r.decode(e)];
              }
              case Ct.prefix: {
                let r = t || Ct;
                return [Ct.prefix, r.decode(e)];
              }
              default: {
                if (t == null) {
                  throw Error(
                    "To parse non base32 or base58btc encoded CID multibase decoder must be provided",
                  );
                }
                return [e[0], t.decode(e)];
              }
            }
          },
          bf = (e, t, r) => {
            let { prefix: o } = r;
            if (o !== Pe.prefix) {
              throw Error(`Cannot string encode V0 in ${r.name} encoding`);
            }
            let s = t.get(o);
            if (s == null) {
              let i = r.encode(e).slice(1);
              return t.set(o, i), i;
            } else return s;
          },
          gf = (e, t, r) => {
            let { prefix: o } = r, s = t.get(o);
            if (s == null) {
              let i = r.encode(e);
              return t.set(o, i), i;
            } else return s;
          },
          vt = 112,
          yf = 18,
          fn = (e, t, r) => {
            let o = Gt(e), s = o + Gt(t), i = new Uint8Array(s + r.byteLength);
            return Ht(e, i, 0), Ht(t, i, o), i.set(r, s), i;
          },
          hn = Symbol.for("@ipld/js-cid/CID"),
          Kt = { writable: !1, configurable: !1, enumerable: !0 },
          Jt = { writable: !1, enumerable: !1, configurable: !1 },
          xf = "0.0.0-dev",
          kf = (e, t) => {
            if (e.test(xf)) console.warn(t);
            else throw new Error(t);
          },
          Cf =
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
      }),
      Sx = R((e, t) => {
        "use strict";
        async function* r(o, s = {}) {
          let i = o.getReader();
          try {
            for (;;) {
              let l = await i.read();
              if (l.done) return;
              yield l.value;
            }
          } finally {
            s.preventCancel !== !0 && i.cancel(), i.releaseLock();
          }
        }
        t.exports = r;
      }),
      Mx = R((e, t) => {
        "use strict";
        function r(s, i) {
          for (let l in i) {
            Object.defineProperty(s, l, {
              value: i[l],
              enumerable: !0,
              configurable: !0,
            });
          }
          return s;
        }
        function o(s, i, l) {
          if (!s || typeof s == "string") {
            throw new TypeError("Please pass an Error to err-code");
          }
          l || (l = {}),
            typeof i == "object" && (l = i, i = ""),
            i && (l.code = i);
          try {
            return r(s, l);
          } catch (c) {
            l.message = s.message, l.stack = s.stack;
            let a = function () {};
            return a.prototype = Object.create(Object.getPrototypeOf(s)),
              r(new a(), l);
          }
        }
        t.exports = o;
      }),
      Ux = R((e, t) => {
        "use strict";
        t.exports = r;
        function r(o, s) {
          for (
            var i = new Array(arguments.length - 1), l = 0, c = 2, a = !0;
            c < arguments.length;
          ) {
            i[l++] = arguments[c++];
          }
          return new Promise(function (n, p) {
            i[l] = function (u) {
              if (a) {
                if (a = !1, u) p(u);
                else {
                  for (
                    var f = new Array(arguments.length - 1), m = 0;
                    m < f.length;
                  ) {
                    f[m++] = arguments[m];
                  }
                  n.apply(null, f);
                }
              }
            };
            try {
              o.apply(s || null, i);
            } catch (u) {
              a && (a = !1, p(u));
            }
          });
        }
      }),
      Ix = R((e) => {
        "use strict";
        var t = e;
        t.length = function (l) {
          var c = l.length;
          if (!c) return 0;
          for (var a = 0; --c % 4 > 1 && l.charAt(c) === "=";) ++a;
          return Math.ceil(l.length * 3) / 4 - a;
        };
        var r = new Array(64), o = new Array(123);
        for (s = 0; s < 64;) {
          o[
            r[s] = s < 26 ? s + 65 : s < 52
              ? s + 71
              : s < 62
              ? s - 4
              : s - 59 | 43
          ] = s++;
        }
        var s;
        t.encode = function (l, c, a) {
          for (var n = null, p = [], u = 0, f = 0, m; c < a;) {
            var h = l[c++];
            switch (f) {
              case 0:
                p[u++] = r[h >> 2], m = (h & 3) << 4, f = 1;
                break;
              case 1:
                p[u++] = r[m | h >> 4], m = (h & 15) << 2, f = 2;
                break;
              case 2:
                p[u++] = r[m | h >> 6], p[u++] = r[h & 63], f = 0;
                break;
            }
            u > 8191 &&
              ((n || (n = [])).push(String.fromCharCode.apply(String, p)),
                u = 0);
          }
          return f && (p[u++] = r[m], p[u++] = 61, f === 1 && (p[u++] = 61)),
            n
              ? (u && n.push(String.fromCharCode.apply(String, p.slice(0, u))),
                n.join(""))
              : String.fromCharCode.apply(String, p.slice(0, u));
        };
        var i = "invalid encoding";
        t.decode = function (l, c, a) {
          for (var n = a, p = 0, u, f = 0; f < l.length;) {
            var m = l.charCodeAt(f++);
            if (m === 61 && p > 1) break;
            if ((m = o[m]) === void 0) throw Error(i);
            switch (p) {
              case 0:
                u = m, p = 1;
                break;
              case 1:
                c[a++] = u << 2 | (m & 48) >> 4, u = m, p = 2;
                break;
              case 2:
                c[a++] = (u & 15) << 4 | (m & 60) >> 2, u = m, p = 3;
                break;
              case 3:
                c[a++] = (u & 3) << 6 | m, p = 0;
                break;
            }
          }
          if (p === 1) throw Error(i);
          return a - n;
        },
          t.test = function (l) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
              .test(l);
          };
      }),
      jx = R((e, t) => {
        "use strict";
        t.exports = r;
        function r() {
          this._listeners = {};
        }
        r.prototype.on = function (o, s, i) {
          return (this._listeners[o] || (this._listeners[o] = [])).push({
            fn: s,
            ctx: i || this,
          }),
            this;
        },
          r.prototype.off = function (o, s) {
            if (o === void 0) this._listeners = {};
            else if (s === void 0) this._listeners[o] = [];
            else {
              for (var i = this._listeners[o], l = 0; l < i.length;) {
                i[l].fn === s
                  ? i.splice(l, 1)
                  : ++l;
              }
            }
            return this;
          },
          r.prototype.emit = function (o) {
            var s = this._listeners[o];
            if (s) {
              for (var i = [], l = 1; l < arguments.length;) {
                i.push(arguments[l++]);
              }
              for (l = 0; l < s.length;) s[l].fn.apply(s[l++].ctx, i);
            }
            return this;
          };
      }),
      Ax = R((e, t) => {
        "use strict";
        t.exports = r(r);
        function r(c) {
          return typeof Float32Array != "undefined"
            ? function () {
              var a = new Float32Array([-0]),
                n = new Uint8Array(a.buffer),
                p = n[3] === 128;
              function u(b, y, C) {
                a[0] = b,
                  y[C] = n[0],
                  y[C + 1] = n[1],
                  y[C + 2] = n[2],
                  y[C + 3] = n[3];
              }
              function f(b, y, C) {
                a[0] = b,
                  y[C] = n[3],
                  y[C + 1] = n[2],
                  y[C + 2] = n[1],
                  y[C + 3] = n[0];
              }
              c.writeFloatLE = p ? u : f, c.writeFloatBE = p ? f : u;
              function m(b, y) {
                return n[0] = b[y],
                  n[1] = b[y + 1],
                  n[2] = b[y + 2],
                  n[3] = b[y + 3],
                  a[0];
              }
              function h(b, y) {
                return n[3] = b[y],
                  n[2] = b[y + 1],
                  n[1] = b[y + 2],
                  n[0] = b[y + 3],
                  a[0];
              }
              c.readFloatLE = p ? m : h, c.readFloatBE = p ? h : m;
            }()
            : function () {
              function a(p, u, f, m) {
                var h = u < 0 ? 1 : 0;
                if (h && (u = -u), u === 0) p(1 / u > 0 ? 0 : 2147483648, f, m);
                else if (isNaN(u)) p(2143289344, f, m);
                else if (u > 34028234663852886e22) {
                  p(
                    (h << 31 | 2139095040) >>> 0,
                    f,
                    m,
                  );
                } else if (u < 11754943508222875e-54) {
                  p(
                    (h << 31 | Math.round(u / 1401298464324817e-60)) >>> 0,
                    f,
                    m,
                  );
                } else {
                  var b = Math.floor(Math.log(u) / Math.LN2),
                    y = Math.round(u * Math.pow(2, -b) * 8388608) & 8388607;
                  p((h << 31 | b + 127 << 23 | y) >>> 0, f, m);
                }
              }
              c.writeFloatLE = a.bind(null, o),
                c.writeFloatBE = a.bind(null, s);
              function n(p, u, f) {
                var m = p(u, f),
                  h = (m >> 31) * 2 + 1,
                  b = m >>> 23 & 255,
                  y = m & 8388607;
                return b === 255
                  ? y ? NaN : h * (1 / 0)
                  : b === 0
                  ? h * 1401298464324817e-60 * y
                  : h * Math.pow(2, b - 150) * (y + 8388608);
              }
              c.readFloatLE = n.bind(null, i), c.readFloatBE = n.bind(null, l);
            }(),
            typeof Float64Array != "undefined"
              ? function () {
                var a = new Float64Array([-0]),
                  n = new Uint8Array(a.buffer),
                  p = n[7] === 128;
                function u(b, y, C) {
                  a[0] = b,
                    y[C] = n[0],
                    y[C + 1] = n[1],
                    y[C + 2] = n[2],
                    y[C + 3] = n[3],
                    y[C + 4] = n[4],
                    y[C + 5] = n[5],
                    y[C + 6] = n[6],
                    y[C + 7] = n[7];
                }
                function f(b, y, C) {
                  a[0] = b,
                    y[C] = n[7],
                    y[C + 1] = n[6],
                    y[C + 2] = n[5],
                    y[C + 3] = n[4],
                    y[C + 4] = n[3],
                    y[C + 5] = n[2],
                    y[C + 6] = n[1],
                    y[C + 7] = n[0];
                }
                c.writeDoubleLE = p ? u : f, c.writeDoubleBE = p ? f : u;
                function m(b, y) {
                  return n[0] = b[y],
                    n[1] = b[y + 1],
                    n[2] = b[y + 2],
                    n[3] = b[y + 3],
                    n[4] = b[y + 4],
                    n[5] = b[y + 5],
                    n[6] = b[y + 6],
                    n[7] = b[y + 7],
                    a[0];
                }
                function h(b, y) {
                  return n[7] = b[y],
                    n[6] = b[y + 1],
                    n[5] = b[y + 2],
                    n[4] = b[y + 3],
                    n[3] = b[y + 4],
                    n[2] = b[y + 5],
                    n[1] = b[y + 6],
                    n[0] = b[y + 7],
                    a[0];
                }
                c.readDoubleLE = p ? m : h, c.readDoubleBE = p ? h : m;
              }()
              : function () {
                function a(p, u, f, m, h, b) {
                  var y = m < 0 ? 1 : 0;
                  if (y && (m = -m), m === 0) {
                    p(0, h, b + u), p(1 / m > 0 ? 0 : 2147483648, h, b + f);
                  } else if (isNaN(m)) {
                    p(0, h, b + u), p(2146959360, h, b + f);
                  } else if (m > 17976931348623157e292) {
                    p(0, h, b + u), p((y << 31 | 2146435072) >>> 0, h, b + f);
                  } else {
                    var C;
                    if (m < 22250738585072014e-324) {
                      C = m / 5e-324,
                        p(C >>> 0, h, b + u),
                        p((y << 31 | C / 4294967296) >>> 0, h, b + f);
                    } else {
                      var x = Math.floor(Math.log(m) / Math.LN2);
                      x === 1024 && (x = 1023),
                        C = m * Math.pow(2, -x),
                        p(C * 4503599627370496 >>> 0, h, b + u),
                        p(
                          (y << 31 | x + 1023 << 20 | C * 1048576 & 1048575) >>>
                            0,
                          h,
                          b + f,
                        );
                    }
                  }
                }
                c.writeDoubleLE = a.bind(null, o, 0, 4),
                  c.writeDoubleBE = a.bind(null, s, 4, 0);
                function n(p, u, f, m, h) {
                  var b = p(m, h + u),
                    y = p(m, h + f),
                    C = (y >> 31) * 2 + 1,
                    x = y >>> 20 & 2047,
                    v = 4294967296 * (y & 1048575) + b;
                  return x === 2047
                    ? v ? NaN : C * (1 / 0)
                    : x === 0
                    ? C * 5e-324 * v
                    : C * Math.pow(2, x - 1075) * (v + 4503599627370496);
                }
                c.readDoubleLE = n.bind(null, i, 0, 4),
                  c.readDoubleBE = n.bind(null, l, 4, 0);
              }(),
            c;
        }
        function o(c, a, n) {
          a[n] = c & 255,
            a[n + 1] = c >>> 8 & 255,
            a[n + 2] = c >>> 16 & 255,
            a[n + 3] = c >>> 24;
        }
        function s(c, a, n) {
          a[n] = c >>> 24,
            a[n + 1] = c >>> 16 & 255,
            a[n + 2] = c >>> 8 & 255,
            a[n + 3] = c & 255;
        }
        function i(c, a) {
          return (c[a] | c[a + 1] << 8 | c[a + 2] << 16 | c[a + 3] << 24) >>> 0;
        }
        function l(c, a) {
          return (c[a] << 24 | c[a + 1] << 16 | c[a + 2] << 8 | c[a + 3]) >>> 0;
        }
      }),
      Rx = R((exports, module) => {
        "use strict";
        module.exports = inquire;
        function inquire(moduleName) {
          try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod;
          } catch (e) {}
          return null;
        }
      }),
      Ex = R((e) => {
        "use strict";
        var t = e;
        t.length = function (r) {
          for (var o = 0, s = 0, i = 0; i < r.length; ++i) {
            s = r.charCodeAt(i),
              s < 128
                ? o += 1
                : s < 2048
                ? o += 2
                : (s & 64512) == 55296 && (r.charCodeAt(i + 1) & 64512) == 56320
                ? (++i, o += 4)
                : o += 3;
          }
          return o;
        },
          t.read = function (r, o, s) {
            var i = s - o;
            if (i < 1) return "";
            for (var l = null, c = [], a = 0, n; o < s;) {
              n = r[o++],
                n < 128 ? c[a++] = n : n > 191 && n < 224
                  ? c[a++] = (n & 31) << 6 | r[o++] & 63
                  : n > 239 && n < 365
                  ? (n =
                    ((n & 7) << 18 | (r[o++] & 63) << 12 | (r[o++] & 63) << 6 |
                      r[o++] & 63) - 65536,
                    c[a++] = 55296 + (n >> 10),
                    c[a++] = 56320 + (n & 1023))
                  : c[a++] = (n & 15) << 12 | (r[o++] & 63) << 6 | r[o++] & 63,
                a > 8191 &&
                ((l || (l = [])).push(String.fromCharCode.apply(String, c)),
                  a = 0);
            }
            return l
              ? (a && l.push(String.fromCharCode.apply(String, c.slice(0, a))),
                l.join(""))
              : String.fromCharCode.apply(String, c.slice(0, a));
          },
          t.write = function (r, o, s) {
            for (var i = s, l, c, a = 0; a < r.length; ++a) {
              l = r.charCodeAt(a),
                l < 128
                  ? o[s++] = l
                  : l < 2048
                  ? (o[s++] = l >> 6 | 192, o[s++] = l & 63 | 128)
                  : (l & 64512) == 55296 &&
                      ((c = r.charCodeAt(a + 1)) & 64512) == 56320
                  ? (l = 65536 + ((l & 1023) << 10) + (c & 1023),
                    ++a,
                    o[s++] = l >> 18 | 240,
                    o[s++] = l >> 12 & 63 | 128,
                    o[s++] = l >> 6 & 63 | 128,
                    o[s++] = l & 63 | 128)
                  : (o[s++] = l >> 12 | 224,
                    o[s++] = l >> 6 & 63 | 128,
                    o[s++] = l & 63 | 128);
            }
            return s - i;
          };
      }),
      Bx = R((e, t) => {
        "use strict";
        t.exports = r;
        function r(o, s, i) {
          var l = i || 8192, c = l >>> 1, a = null, n = l;
          return function (p) {
            if (p < 1 || p > c) return o(p);
            n + p > l && (a = o(l), n = 0);
            var u = s.call(a, n, n += p);
            return n & 7 && (n = (n | 7) + 1), u;
          };
        }
      }),
      Lx = R((e, t) => {
        "use strict";
        t.exports = o;
        var r = it();
        function o(c, a) {
          this.lo = c >>> 0, this.hi = a >>> 0;
        }
        var s = o.zero = new o(0, 0);
        s.toNumber = function () {
          return 0;
        },
          s.zzEncode = s.zzDecode = function () {
            return this;
          },
          s.length = function () {
            return 1;
          };
        var i = o.zeroHash = "\0\0\0\0\0\0\0\0";
        o.fromNumber = function (c) {
          if (c === 0) return s;
          var a = c < 0;
          a && (c = -c);
          var n = c >>> 0, p = (c - n) / 4294967296 >>> 0;
          return a &&
            (p = ~p >>> 0,
              n = ~n >>> 0,
              ++n > 4294967295 && (n = 0, ++p > 4294967295 && (p = 0))),
            new o(n, p);
        },
          o.from = function (c) {
            if (typeof c == "number") return o.fromNumber(c);
            if (r.isString(c)) {
              if (r.Long) c = r.Long.fromString(c);
              else return o.fromNumber(parseInt(c, 10));
            }
            return c.low || c.high ? new o(c.low >>> 0, c.high >>> 0) : s;
          },
          o.prototype.toNumber = function (c) {
            if (!c && this.hi >>> 31) {
              var a = ~this.lo + 1 >>> 0, n = ~this.hi >>> 0;
              return a || (n = n + 1 >>> 0), -(a + n * 4294967296);
            }
            return this.lo + this.hi * 4294967296;
          },
          o.prototype.toLong = function (c) {
            return r.Long
              ? new r.Long(this.lo | 0, this.hi | 0, Boolean(c))
              : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(c) };
          };
        var l = String.prototype.charCodeAt;
        o.fromHash = function (c) {
          return c === i
            ? s
            : new o(
              (l.call(c, 0) | l.call(c, 1) << 8 | l.call(c, 2) << 16 |
                l.call(c, 3) << 24) >>> 0,
              (l.call(c, 4) | l.call(c, 5) << 8 | l.call(c, 6) << 16 |
                l.call(c, 7) << 24) >>> 0,
            );
        },
          o.prototype.toHash = function () {
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
          },
          o.prototype.zzEncode = function () {
            var c = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ c) >>> 0,
              this.lo = (this.lo << 1 ^ c) >>> 0,
              this;
          },
          o.prototype.zzDecode = function () {
            var c = -(this.lo & 1);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ c) >>> 0,
              this.hi = (this.hi >>> 1 ^ c) >>> 0,
              this;
          },
          o.prototype.length = function () {
            var c = this.lo,
              a = (this.lo >>> 28 | this.hi << 4) >>> 0,
              n = this.hi >>> 24;
            return n === 0
              ? a === 0
                ? c < 16384 ? c < 128 ? 1 : 2 : c < 2097152
                  ? 3
                  : 4
                : a < 16384
                ? a < 128 ? 5 : 6
                : a < 2097152
                ? 7
                : 8
              : n < 128
              ? 9
              : 10;
          };
      }),
      it = R((e) => {
        "use strict";
        var t = e;
        t.asPromise = Ux(),
          t.base64 = Ix(),
          t.EventEmitter = jx(),
          t.float = Ax(),
          t.inquire = Rx(),
          t.utf8 = Ex(),
          t.pool = Bx(),
          t.LongBits = Lx(),
          t.isNode = Boolean(
            typeof global != "undefined" && global && global.process &&
              global.process.versions && global.process.versions.node,
          ),
          t.global = t.isNode && global ||
            typeof window != "undefined" && window ||
            typeof self != "undefined" && self || e,
          t.emptyArray = Object.freeze ? Object.freeze([]) : [],
          t.emptyObject = Object.freeze ? Object.freeze({}) : {},
          t.isInteger = Number.isInteger || function (s) {
            return typeof s == "number" && isFinite(s) && Math.floor(s) === s;
          },
          t.isString = function (s) {
            return typeof s == "string" || s instanceof String;
          },
          t.isObject = function (s) {
            return s && typeof s == "object";
          },
          t.isset = t.isSet = function (s, i) {
            var l = s[i];
            return l != null && s.hasOwnProperty(i)
              ? typeof l != "object" ||
                (Array.isArray(l) ? l.length : Object.keys(l).length) > 0
              : !1;
          },
          t.Buffer = function () {
            try {
              var s = t.inquire("buffer").Buffer;
              return s.prototype.utf8Write ? s : null;
            } catch (i) {
              return null;
            }
          }(),
          t._Buffer_from = null,
          t._Buffer_allocUnsafe = null,
          t.newBuffer = function (s) {
            return typeof s == "number"
              ? t.Buffer ? t._Buffer_allocUnsafe(s) : new t.Array(s)
              : t.Buffer
              ? t._Buffer_from(s)
              : typeof Uint8Array == "undefined"
              ? s
              : new Uint8Array(s);
          },
          t.Array = typeof Uint8Array != "undefined" ? Uint8Array : Array,
          t.Long = t.global.dcodeIO && t.global.dcodeIO.Long || t.global.Long ||
            t.inquire("long"),
          t.key2Re = /^true|false|0|1$/,
          t.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
          t.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
          t.longToHash = function (s) {
            return s ? t.LongBits.from(s).toHash() : t.LongBits.zeroHash;
          },
          t.longFromHash = function (s, i) {
            var l = t.LongBits.fromHash(s);
            return t.Long ? t.Long.fromBits(l.lo, l.hi, i)
            : l.toNumber(Boolean(i));
          };
        function r(s, i, l) {
          for (var c = Object.keys(i), a = 0; a < c.length; ++a) {
            (s[c[a]] === void 0 || !l) && (s[c[a]] = i[c[a]]);
          }
          return s;
        }
        t.merge = r,
          t.lcFirst = function (s) {
            return s.charAt(0).toLowerCase() + s.substring(1);
          };
        function o(s) {
          function i(l, c) {
            if (!(this instanceof i)) return new i(l, c);
            Object.defineProperty(this, "message", {
              get: function () {
                return l;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, i)
                : Object.defineProperty(this, "stack", {
                  value: new Error().stack || "",
                }),
              c && r(this, c);
          }
          return (i.prototype = Object.create(Error.prototype)).constructor = i,
            Object.defineProperty(i.prototype, "name", {
              get: function () {
                return s;
              },
            }),
            i.prototype.toString = function () {
              return this.name + ": " + this.message;
            },
            i;
        }
        t.newError = o,
          t.ProtocolError = o("ProtocolError"),
          t.oneOfGetter = function (s) {
            for (var i = {}, l = 0; l < s.length; ++l) i[s[l]] = 1;
            return function () {
              for (var c = Object.keys(this), a = c.length - 1; a > -1; --a) {
                if (
                  i[c[a]] === 1 && this[c[a]] !== void 0 && this[c[a]] !== null
                ) {
                  return c[a];
                }
              }
            };
          },
          t.oneOfSetter = function (s) {
            return function (i) {
              for (var l = 0; l < s.length; ++l) {
                s[l] !== i && delete this[s[l]];
              }
            };
          },
          t.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          },
          t._configure = function () {
            var s = t.Buffer;
            if (!s) {
              t._Buffer_from = t._Buffer_allocUnsafe = null;
              return;
            }
            t._Buffer_from = s.from !== Uint8Array.from && s.from ||
              function (i, l) {
                return new s(i, l);
              },
              t._Buffer_allocUnsafe = s.allocUnsafe || function (i) {
                return new s(i);
              };
          };
      }),
      vf = R((e, t) => {
        "use strict";
        t.exports = p;
        var r = it(), o, s = r.LongBits, i = r.base64, l = r.utf8;
        function c(x, v, k) {
          this.fn = x, this.len = v, this.next = void 0, this.val = k;
        }
        function a() {}
        function n(x) {
          this.head = x.head,
            this.tail = x.tail,
            this.len = x.len,
            this.next = x.states;
        }
        function p() {
          this.len = 0,
            this.head = new c(a, 0, 0),
            this.tail = this.head,
            this.states = null;
        }
        var u = function () {
          return r.Buffer
            ? function () {
              return (p.create = function () {
                return new o();
              })();
            }
            : function () {
              return new p();
            };
        };
        p.create = u(),
          p.alloc = function (x) {
            return new r.Array(x);
          },
          r.Array !== Array &&
          (p.alloc = r.pool(p.alloc, r.Array.prototype.subarray)),
          p.prototype._push = function (x, v, k) {
            return this.tail = this.tail.next = new c(x, v, k),
              this.len += v,
              this;
          };
        function f(x, v, k) {
          v[k] = x & 255;
        }
        function m(x, v, k) {
          for (; x > 127;) v[k++] = x & 127 | 128, x >>>= 7;
          v[k] = x;
        }
        function h(x, v) {
          this.len = x, this.next = void 0, this.val = v;
        }
        h.prototype = Object.create(c.prototype),
          h.prototype.fn = m,
          p.prototype.uint32 = function (x) {
            return this.len +=
              (this.tail = this.tail.next = new h(
                (x = x >>> 0) < 128
                  ? 1
                  : x < 16384
                  ? 2
                  : x < 2097152
                  ? 3
                  : x < 268435456
                  ? 4
                  : 5,
                x,
              )).len,
              this;
          },
          p.prototype.int32 = function (x) {
            return x < 0 ? this._push(b, 10, s.fromNumber(x)) : this.uint32(x);
          },
          p.prototype.sint32 = function (x) {
            return this.uint32((x << 1 ^ x >> 31) >>> 0);
          };
        function b(x, v, k) {
          for (; x.hi;) {
            v[k++] = x.lo & 127 | 128,
              x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0,
              x.hi >>>= 7;
          }
          for (; x.lo > 127;) v[k++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
          v[k++] = x.lo;
        }
        p.prototype.uint64 = function (x) {
          var v = s.from(x);
          return this._push(b, v.length(), v);
        },
          p.prototype.int64 = p.prototype.uint64,
          p.prototype.sint64 = function (x) {
            var v = s.from(x).zzEncode();
            return this._push(b, v.length(), v);
          },
          p.prototype.bool = function (x) {
            return this._push(
              f,
              1,
              x ? 1 : 0,
            );
          };
        function y(x, v, k) {
          v[k] = x & 255,
            v[k + 1] = x >>> 8 & 255,
            v[k + 2] = x >>> 16 & 255,
            v[k + 3] = x >>> 24;
        }
        p.prototype.fixed32 = function (x) {
          return this._push(y, 4, x >>> 0);
        },
          p.prototype.sfixed32 = p.prototype.fixed32,
          p.prototype.fixed64 = function (x) {
            var v = s.from(x);
            return this._push(y, 4, v.lo)._push(y, 4, v.hi);
          },
          p.prototype.sfixed64 = p.prototype.fixed64,
          p.prototype.float = function (x) {
            return this._push(r.float.writeFloatLE, 4, x);
          },
          p.prototype.double = function (x) {
            return this._push(r.float.writeDoubleLE, 8, x);
          };
        var C = r.Array.prototype.set
          ? function (x, v, k) {
            v.set(x, k);
          }
          : function (x, v, k) {
            for (var S = 0; S < x.length; ++S) v[k + S] = x[S];
          };
        p.prototype.bytes = function (x) {
          var v = x.length >>> 0;
          if (!v) return this._push(f, 1, 0);
          if (r.isString(x)) {
            var k = p.alloc(v = i.length(x));
            i.decode(x, k, 0), x = k;
          }
          return this.uint32(v)._push(C, v, x);
        },
          p.prototype.string = function (x) {
            var v = l.length(x);
            return v ? this.uint32(v)._push(l.write, v, x)
            : this._push(f, 1, 0);
          },
          p.prototype.fork = function () {
            return this.states = new n(this),
              this.head = this.tail = new c(a, 0, 0),
              this.len = 0,
              this;
          },
          p.prototype.reset = function () {
            return this.states
              ? (this.head = this.states.head,
                this.tail = this.states.tail,
                this.len = this.states.len,
                this.states = this.states.next)
              : (this.head = this.tail = new c(a, 0, 0), this.len = 0),
              this;
          },
          p.prototype.ldelim = function () {
            var x = this.head, v = this.tail, k = this.len;
            return this.reset().uint32(k),
              k && (this.tail.next = x.next, this.tail = v, this.len += k),
              this;
          },
          p.prototype.finish = function () {
            for (
              var x = this.head.next,
                v = this.constructor.alloc(this.len),
                k = 0;
              x;
            ) {
              x.fn(x.val, v, k), k += x.len, x = x.next;
            }
            return v;
          },
          p._configure = function (x) {
            o = x, p.create = u(), o._configure();
          };
      }),
      Ox = R((e, t) => {
        "use strict";
        t.exports = s;
        var r = vf();
        (s.prototype = Object.create(r.prototype)).constructor = s;
        var o = it();
        function s() {
          r.call(this);
        }
        s._configure = function () {
          s.alloc = o._Buffer_allocUnsafe,
            s.writeBytesBuffer =
              o.Buffer && o.Buffer.prototype instanceof Uint8Array &&
                o.Buffer.prototype.set.name === "set"
                ? function (l, c, a) {
                  c.set(l, a);
                }
                : function (l, c, a) {
                  if (l.copy) l.copy(c, a, 0, l.length);
                  else for (var n = 0; n < l.length;) c[a++] = l[n++];
                };
        },
          s.prototype.bytes = function (l) {
            o.isString(l) && (l = o._Buffer_from(l, "base64"));
            var c = l.length >>> 0;
            return this.uint32(c),
              c && this._push(s.writeBytesBuffer, c, l),
              this;
          };
        function i(l, c, a) {
          l.length < 40
            ? o.utf8.write(l, c, a)
            : c.utf8Write
            ? c.utf8Write(l, a)
            : c.write(l, a);
        }
        s.prototype.string = function (l) {
          var c = o.Buffer.byteLength(l);
          return this.uint32(c), c && this._push(i, c, l), this;
        }, s._configure();
      }),
      Tf = R((e, t) => {
        "use strict";
        t.exports = c;
        var r = it(), o, s = r.LongBits, i = r.utf8;
        function l(m, h) {
          return RangeError(
            "index out of range: " + m.pos + " + " + (h || 1) + " > " + m.len,
          );
        }
        function c(m) {
          this.buf = m, this.pos = 0, this.len = m.length;
        }
        var a = typeof Uint8Array != "undefined"
            ? function (m) {
              if (m instanceof Uint8Array || Array.isArray(m)) return new c(m);
              throw Error("illegal buffer");
            }
            : function (m) {
              if (Array.isArray(m)) return new c(m);
              throw Error("illegal buffer");
            },
          n = function () {
            return r.Buffer
              ? function (m) {
                return (c.create = function (h) {
                  return r.Buffer.isBuffer(h) ? new o(h) : a(h);
                })(m);
              }
              : a;
          };
        c.create = n(),
          c.prototype._slice = r.Array.prototype.subarray ||
            r.Array.prototype.slice,
          c.prototype.uint32 = function () {
            var m = 4294967295;
            return function () {
              if (
                m = (this.buf[this.pos] & 127) >>> 0,
                  this.buf[this.pos++] < 128 ||
                  (m = (m | (this.buf[this.pos] & 127) << 7) >>> 0,
                    this.buf[this.pos++] < 128) ||
                  (m = (m | (this.buf[this.pos] & 127) << 14) >>> 0,
                    this.buf[this.pos++] < 128) ||
                  (m = (m | (this.buf[this.pos] & 127) << 21) >>> 0,
                    this.buf[this.pos++] < 128) ||
                  (m = (m | (this.buf[this.pos] & 15) << 28) >>> 0,
                    this.buf[this.pos++] < 128)
              ) {
                return m;
              }
              if ((this.pos += 5) > this.len) {
                throw this.pos = this.len, l(this, 10);
              }
              return m;
            };
          }(),
          c.prototype.int32 = function () {
            return this.uint32() | 0;
          },
          c.prototype.sint32 = function () {
            var m = this.uint32();
            return m >>> 1 ^ -(m & 1) | 0;
          };
        function p() {
          var m = new s(0, 0), h = 0;
          if (this.len - this.pos > 4) {
            for (; h < 4; ++h) {
              if (
                m.lo = (m.lo | (this.buf[this.pos] & 127) << h * 7) >>> 0,
                  this.buf[this.pos++] < 128
              ) {
                return m;
              }
            }
            if (
              m.lo = (m.lo | (this.buf[this.pos] & 127) << 28) >>> 0,
                m.hi = (m.hi | (this.buf[this.pos] & 127) >> 4) >>> 0,
                this.buf[this.pos++] < 128
            ) {
              return m;
            }
            h = 0;
          } else {
            for (; h < 3; ++h) {
              if (this.pos >= this.len) throw l(this);
              if (
                m.lo = (m.lo | (this.buf[this.pos] & 127) << h * 7) >>> 0,
                  this.buf[this.pos++] < 128
              ) {
                return m;
              }
            }
            return m.lo = (m.lo | (this.buf[this.pos++] & 127) << h * 7) >>> 0,
              m;
          }
          if (this.len - this.pos > 4) {
            for (; h < 5; ++h) {
              if (
                m.hi = (m.hi | (this.buf[this.pos] & 127) << h * 7 + 3) >>> 0,
                  this.buf[this.pos++] < 128
              ) {
                return m;
              }
            }
          } else {
            for (; h < 5; ++h) {
              if (this.pos >= this.len) throw l(this);
              if (
                m.hi = (m.hi | (this.buf[this.pos] & 127) << h * 7 + 3) >>> 0,
                  this.buf[this.pos++] < 128
              ) {
                return m;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        c.prototype.bool = function () {
          return this.uint32() !== 0;
        };
        function u(m, h) {
          return (m[h - 4] | m[h - 3] << 8 | m[h - 2] << 16 |
            m[h - 1] << 24) >>> 0;
        }
        c.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw l(this, 4);
          return u(this.buf, this.pos += 4);
        },
          c.prototype.sfixed32 = function () {
            if (this.pos + 4 > this.len) throw l(this, 4);
            return u(this.buf, this.pos += 4) | 0;
          };
        function f() {
          if (this.pos + 8 > this.len) throw l(this, 8);
          return new s(u(this.buf, this.pos += 4), u(this.buf, this.pos += 4));
        }
        c.prototype.float = function () {
          if (this.pos + 4 > this.len) throw l(this, 4);
          var m = r.float.readFloatLE(this.buf, this.pos);
          return this.pos += 4, m;
        },
          c.prototype.double = function () {
            if (this.pos + 8 > this.len) throw l(this, 4);
            var m = r.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, m;
          },
          c.prototype.bytes = function () {
            var m = this.uint32(), h = this.pos, b = this.pos + m;
            if (b > this.len) throw l(this, m);
            return this.pos += m,
              Array.isArray(this.buf)
                ? this.buf.slice(h, b)
                : h === b
                ? new this.buf.constructor(0)
                : this._slice.call(this.buf, h, b);
          },
          c.prototype.string = function () {
            var m = this.bytes();
            return i.read(m, 0, m.length);
          },
          c.prototype.skip = function (m) {
            if (typeof m == "number") {
              if (this.pos + m > this.len) throw l(this, m);
              this.pos += m;
            } else {
              do if (this.pos >= this.len) throw l(this); while (
                this.buf[this.pos++] & 128
              );
            }
            return this;
          },
          c.prototype.skipType = function (m) {
            switch (m) {
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
                for (; (m = this.uint32() & 7) != 4;) this.skipType(m);
                break;
              case 5:
                this.skip(4);
                break;
              default:
                throw Error(
                  "invalid wire type " + m + " at offset " + this.pos,
                );
            }
            return this;
          },
          c._configure = function (m) {
            o = m, c.create = n(), o._configure();
            var h = r.Long ? "toLong" : "toNumber";
            r.merge(c.prototype, {
              int64: function () {
                return p.call(this)[h](!1);
              },
              uint64: function () {
                return p.call(this)[h](!0);
              },
              sint64: function () {
                return p.call(this).zzDecode()[h](!1);
              },
              fixed64: function () {
                return f.call(this)[h](!0);
              },
              sfixed64: function () {
                return f.call(this)[h](!1);
              },
            });
          };
      }),
      _x = R((e, t) => {
        "use strict";
        t.exports = s;
        var r = Tf();
        (s.prototype = Object.create(r.prototype)).constructor = s;
        var o = it();
        function s(i) {
          r.call(this, i);
        }
        s._configure = function () {
          o.Buffer && (s.prototype._slice = o.Buffer.prototype.slice);
        },
          s.prototype.string = function () {
            var i = this.uint32();
            return this.buf.utf8Slice
              ? this.buf.utf8Slice(
                this.pos,
                this.pos = Math.min(this.pos + i, this.len),
              )
              : this.buf.toString(
                "utf-8",
                this.pos,
                this.pos = Math.min(this.pos + i, this.len),
              );
          },
          s._configure();
      }),
      Dx = R((e, t) => {
        "use strict";
        t.exports = o;
        var r = it();
        (o.prototype = Object.create(r.EventEmitter.prototype)).constructor = o;
        function o(s, i, l) {
          if (typeof s != "function") {
            throw TypeError("rpcImpl must be a function");
          }
          r.EventEmitter.call(this),
            this.rpcImpl = s,
            this.requestDelimited = Boolean(i),
            this.responseDelimited = Boolean(l);
        }
        o.prototype.rpcCall = function s(i, l, c, a, n) {
          if (!a) throw TypeError("request must be specified");
          var p = this;
          if (!n) return r.asPromise(s, p, i, l, c, a);
          if (!p.rpcImpl) {
            setTimeout(function () {
              n(Error("already ended"));
            }, 0);
            return;
          }
          try {
            return p.rpcImpl(
              i,
              l[p.requestDelimited ? "encodeDelimited" : "encode"](a).finish(),
              function (u, f) {
                if (u) return p.emit("error", u, i), n(u);
                if (f === null) {
                  p.end(!0);
                  return;
                }
                if (!(f instanceof c)) {
                  try {
                    f = c[p.responseDelimited ? "decodeDelimited" : "decode"](
                      f,
                    );
                  } catch (m) {
                    return p.emit("error", m, i), n(m);
                  }
                }
                return p.emit("data", f, i), n(null, f);
              },
            );
          } catch (u) {
            p.emit("error", u, i),
              setTimeout(function () {
                n(u);
              }, 0);
            return;
          }
        },
          o.prototype.end = function (s) {
            return this.rpcImpl &&
              (s || this.rpcImpl(null, null, null),
                this.rpcImpl = null,
                this.emit("end").off()),
              this;
          };
      }),
      zx = R((e) => {
        "use strict";
        var t = e;
        t.Service = Dx();
      }),
      Nx = R((e, t) => {
        "use strict";
        t.exports = {};
      }),
      Fx = R((e) => {
        "use strict";
        var t = e;
        t.build = "minimal",
          t.Writer = vf(),
          t.BufferWriter = Ox(),
          t.Reader = Tf(),
          t.BufferReader = _x(),
          t.util = it(),
          t.rpc = zx(),
          t.roots = Nx(),
          t.configure = r;
        function r() {
          t.util._configure(),
            t.Writer._configure(t.BufferWriter),
            t.Reader._configure(t.BufferReader);
        }
        r();
      }),
      $x = R((e, t) => {
        "use strict";
        t.exports = Fx();
      }),
      Vx = R((e, t) => {
        "use strict";
        function r(o) {
          if (o.length >= 255) throw new TypeError("Alphabet too long");
          for (var s = new Uint8Array(256), i = 0; i < s.length; i++) {
            s[i] = 255;
          }
          for (var l = 0; l < o.length; l++) {
            var c = o.charAt(l), a = c.charCodeAt(0);
            if (s[a] !== 255) throw new TypeError(c + " is ambiguous");
            s[a] = l;
          }
          var n = o.length,
            p = o.charAt(0),
            u = Math.log(n) / Math.log(256),
            f = Math.log(256) / Math.log(n);
          function m(y) {
            if (
              y instanceof Uint8Array || (ArrayBuffer.isView(y)
                ? y = new Uint8Array(y.buffer, y.byteOffset, y.byteLength)
                : Array.isArray(y) && (y = Uint8Array.from(y))),
                !(y instanceof Uint8Array)
            ) {
              throw new TypeError("Expected Uint8Array");
            }
            if (y.length === 0) return "";
            for (
              var C = 0, x = 0, v = 0, k = y.length; v !== k && y[v] === 0;
            ) {
              v++, C++;
            }
            for (
              var S = (k - v) * f + 1 >>> 0, U = new Uint8Array(S); v !== k;
            ) {
              for (
                var P = y[v], I = 0, A = S - 1;
                (P !== 0 || I < x) && A !== -1;
                A--, I++
              ) {
                P += 256 * U[A] >>> 0, U[A] = P % n >>> 0, P = P / n >>> 0;
              }
              if (P !== 0) throw new Error("Non-zero carry");
              x = I, v++;
            }
            for (var z = S - x; z !== S && U[z] === 0;) z++;
            for (var J = p.repeat(C); z < S; ++z) J += o.charAt(U[z]);
            return J;
          }
          function h(y) {
            if (typeof y != "string") throw new TypeError("Expected String");
            if (y.length === 0) return new Uint8Array();
            var C = 0;
            if (y[C] !== " ") {
              for (var x = 0, v = 0; y[C] === p;) x++, C++;
              for (
                var k = (y.length - C) * u + 1 >>> 0, S = new Uint8Array(k);
                y[C];
              ) {
                var U = s[y.charCodeAt(C)];
                if (U === 255) return;
                for (
                  var P = 0, I = k - 1; (U !== 0 || P < v) && I !== -1; I--, P++
                ) {
                  U += n * S[I] >>> 0, S[I] = U % 256 >>> 0, U = U / 256 >>> 0;
                }
                if (U !== 0) throw new Error("Non-zero carry");
                v = P, C++;
              }
              if (y[C] !== " ") {
                for (var A = k - v; A !== k && S[A] === 0;) A++;
                for (var z = new Uint8Array(x + (k - A)), J = x; A !== k;) {
                  z[J++] = S[A++];
                }
                return z;
              }
            }
          }
          function b(y) {
            var C = h(y);
            if (C) return C;
            throw new Error("Non-base" + n + " character");
          }
          return { encode: m, decodeUnsafe: h, decode: b };
        }
        t.exports = r;
      }),
      bn = R((e, t) => {
        "use strict";
        var r = new TextDecoder(),
          o = (c) => r.decode(c),
          s = new TextEncoder(),
          i = (c) => s.encode(c);
        function l(c, a) {
          let n = new Uint8Array(a), p = 0;
          for (let u of c) n.set(u, p), p += u.length;
          return n;
        }
        t.exports = { decodeText: o, encodeText: i, concat: l };
      }),
      Wx = R((e, t) => {
        "use strict";
        var { encodeText: r } = bn(),
          o = class {
            constructor(s, i, l, c) {
              this.name = s,
                this.code = i,
                this.codeBuf = r(this.code),
                this.alphabet = c,
                this.codec = l(c);
            }
            encode(s) {
              return this.codec.encode(s);
            }
            decode(s) {
              for (let i of s) {
                if (
                  this.alphabet && this.alphabet.indexOf(i) < 0
                ) {
                  throw new Error(`invalid character '${i}' in '${s}'`);
                }
              }
              return this.codec.decode(s);
            }
          };
        t.exports = o;
      }),
      Hx = R((e, t) => {
        "use strict";
        var r = (i, l, c) => {
            let a = {};
            for (let h = 0; h < l.length; ++h) a[l[h]] = h;
            let n = i.length;
            for (; i[n - 1] === "=";) --n;
            let p = new Uint8Array(n * c / 8 | 0), u = 0, f = 0, m = 0;
            for (let h = 0; h < n; ++h) {
              let b = a[i[h]];
              if (b === void 0) {
                throw new SyntaxError("Invalid character " + i[h]);
              }
              f = f << c | b, u += c, u >= 8 && (u -= 8, p[m++] = 255 & f >> u);
            }
            if (u >= c || 255 & f << 8 - u) {
              throw new SyntaxError("Unexpected end of data");
            }
            return p;
          },
          o = (i, l, c) => {
            let a = l[l.length - 1] === "=",
              n = (1 << c) - 1,
              p = "",
              u = 0,
              f = 0;
            for (let m = 0; m < i.length; ++m) {
              for (f = f << 8 | i[m], u += 8; u > c;) {
                u -= c, p += l[n & f >> u];
              }
            }
            if (u && (p += l[n & f << c - u]), a) {for (; p.length * c & 7;) {
                p += "=";
              }}
            return p;
          },
          s = (i) =>
            (l) => ({
              encode(c) {
                return o(c, l, i);
              },
              decode(c) {
                return r(c, l, i);
              },
            });
        t.exports = { rfc4648: s };
      }),
      Gx = R((e, t) => {
        "use strict";
        var r = Vx(),
          o = Wx(),
          { rfc4648: s } = Hx(),
          { decodeText: i, encodeText: l } = bn(),
          c = () => ({ encode: i, decode: l }),
          a = [
            ["identity", "\0", c, ""],
            ["base2", "0", s(1), "01"],
            ["base8", "7", s(3), "01234567"],
            ["base10", "9", r, "0123456789"],
            ["base16", "f", s(4), "0123456789abcdef"],
            ["base16upper", "F", s(4), "0123456789ABCDEF"],
            ["base32hex", "v", s(5), "0123456789abcdefghijklmnopqrstuv"],
            ["base32hexupper", "V", s(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV"],
            ["base32hexpad", "t", s(5), "0123456789abcdefghijklmnopqrstuv="],
            [
              "base32hexpadupper",
              "T",
              s(5),
              "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            ],
            ["base32", "b", s(5), "abcdefghijklmnopqrstuvwxyz234567"],
            ["base32upper", "B", s(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],
            ["base32pad", "c", s(5), "abcdefghijklmnopqrstuvwxyz234567="],
            ["base32padupper", "C", s(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],
            ["base32z", "h", s(5), "ybndrfg8ejkmcpqxot1uwisza345h769"],
            ["base36", "k", r, "0123456789abcdefghijklmnopqrstuvwxyz"],
            ["base36upper", "K", r, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
            [
              "base58btc",
              "z",
              r,
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
            ],
            [
              "base58flickr",
              "Z",
              r,
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
            ],
            [
              "base64",
              "m",
              s(6),
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            ],
            [
              "base64pad",
              "M",
              s(6),
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            ],
            [
              "base64url",
              "u",
              s(6),
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            ],
            [
              "base64urlpad",
              "U",
              s(6),
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            ],
          ],
          n = a.reduce(
            (u, f) => (u[f[0]] = new o(f[0], f[1], f[2], f[3]), u),
            {},
          ),
          p = a.reduce((u, f) => (u[f[1]] = n[f[0]], u), {});
        t.exports = { names: n, codes: p };
      }),
      wf = R((e, t) => {
        "use strict";
        var r = Gx(), { encodeText: o, decodeText: s, concat: i } = bn();
        function l(b, y) {
          if (!y) throw new Error("requires an encoded Uint8Array");
          let { name: C, codeBuf: x } = u(b);
          return p(C, y), i([x, y], x.length + y.length);
        }
        function c(b, y) {
          let C = u(b), x = o(C.encode(y));
          return i([C.codeBuf, x], C.codeBuf.length + x.length);
        }
        function a(b) {
          b instanceof Uint8Array && (b = s(b));
          let y = b[0];
          return [
            "f",
            "F",
            "v",
            "V",
            "t",
            "T",
            "b",
            "B",
            "c",
            "C",
            "h",
            "k",
            "K",
          ].includes(y) && (b = b.toLowerCase()),
            u(b[0]).decode(b.substring(1));
        }
        function n(b) {
          if (
            b instanceof Uint8Array && (b = s(b)),
              Object.prototype.toString.call(b) !== "[object String]"
          ) {
            return !1;
          }
          try {
            return u(b[0]).name;
          } catch (y) {
            return !1;
          }
        }
        function p(b, y) {
          u(b).decode(s(y));
        }
        function u(b) {
          if (Object.prototype.hasOwnProperty.call(r.names, b)) {
            return r.names[b];
          }
          if (Object.prototype.hasOwnProperty.call(r.codes, b)) {
            return r.codes[b];
          }
          throw new Error(`Unsupported encoding: ${b}`);
        }
        function f(b) {
          return b instanceof Uint8Array && (b = s(b)), u(b[0]);
        }
        e = t.exports = l,
          e.encode = c,
          e.decode = a,
          e.isEncoded = n,
          e.encoding = u,
          e.encodingFromData = f;
        var m = Object.freeze(r.names), h = Object.freeze(r.codes);
        e.names = m, e.codes = h;
      }),
      qx = R((e, t) => {
        t.exports = l;
        var r = 128, o = 127, s = ~o, i = Math.pow(2, 31);
        function l(c, a, n) {
          a = a || [], n = n || 0;
          for (var p = n; c >= i;) a[n++] = c & 255 | r, c /= 128;
          for (; c & s;) a[n++] = c & 255 | r, c >>>= 7;
          return a[n] = c | 0, l.bytes = n - p + 1, a;
        }
      }),
      Kx = R((e, t) => {
        t.exports = s;
        var r = 128, o = 127;
        function s(i, l) {
          var c = 0, l = l || 0, a = 0, n = l, p, u = i.length;
          do {
            if (n >= u) {
              throw s.bytes = 0, new RangeError("Could not decode varint");
            }
            p = i[n++],
              c += a < 28 ? (p & o) << a : (p & o) * Math.pow(2, a),
              a += 7;
          } while (p >= r);
          return s.bytes = n - l, c;
        }
      }),
      Jx = R((e, t) => {
        var r = Math.pow(2, 7),
          o = Math.pow(2, 14),
          s = Math.pow(2, 21),
          i = Math.pow(2, 28),
          l = Math.pow(2, 35),
          c = Math.pow(2, 42),
          a = Math.pow(2, 49),
          n = Math.pow(2, 56),
          p = Math.pow(2, 63);
        t.exports = function (u) {
          return u < r
            ? 1
            : u < o
            ? 2
            : u < s
            ? 3
            : u < i
            ? 4
            : u < l
            ? 5
            : u < c
            ? 6
            : u < a
            ? 7
            : u < n
            ? 8
            : u < p
            ? 9
            : 10;
        };
      }),
      Qx = R((e, t) => {
        t.exports = { encode: qx(), decode: Kx(), encodingLength: Jx() };
      }),
      Xx = R((e, t) => {
        "use strict";
        var r = Object.freeze({
          identity: 0,
          sha1: 17,
          "sha2-256": 18,
          "sha2-512": 19,
          "sha3-512": 20,
          "sha3-384": 21,
          "sha3-256": 22,
          "sha3-224": 23,
          "shake-128": 24,
          "shake-256": 25,
          "keccak-224": 26,
          "keccak-256": 27,
          "keccak-384": 28,
          "keccak-512": 29,
          blake3: 30,
          "murmur3-128": 34,
          "murmur3-32": 35,
          "dbl-sha2-256": 86,
          md4: 212,
          md5: 213,
          bmt: 214,
          "sha2-256-trunc254-padded": 4114,
          "ripemd-128": 4178,
          "ripemd-160": 4179,
          "ripemd-256": 4180,
          "ripemd-320": 4181,
          x11: 4352,
          kangarootwelve: 7425,
          "sm3-256": 21325,
          "blake2b-8": 45569,
          "blake2b-16": 45570,
          "blake2b-24": 45571,
          "blake2b-32": 45572,
          "blake2b-40": 45573,
          "blake2b-48": 45574,
          "blake2b-56": 45575,
          "blake2b-64": 45576,
          "blake2b-72": 45577,
          "blake2b-80": 45578,
          "blake2b-88": 45579,
          "blake2b-96": 45580,
          "blake2b-104": 45581,
          "blake2b-112": 45582,
          "blake2b-120": 45583,
          "blake2b-128": 45584,
          "blake2b-136": 45585,
          "blake2b-144": 45586,
          "blake2b-152": 45587,
          "blake2b-160": 45588,
          "blake2b-168": 45589,
          "blake2b-176": 45590,
          "blake2b-184": 45591,
          "blake2b-192": 45592,
          "blake2b-200": 45593,
          "blake2b-208": 45594,
          "blake2b-216": 45595,
          "blake2b-224": 45596,
          "blake2b-232": 45597,
          "blake2b-240": 45598,
          "blake2b-248": 45599,
          "blake2b-256": 45600,
          "blake2b-264": 45601,
          "blake2b-272": 45602,
          "blake2b-280": 45603,
          "blake2b-288": 45604,
          "blake2b-296": 45605,
          "blake2b-304": 45606,
          "blake2b-312": 45607,
          "blake2b-320": 45608,
          "blake2b-328": 45609,
          "blake2b-336": 45610,
          "blake2b-344": 45611,
          "blake2b-352": 45612,
          "blake2b-360": 45613,
          "blake2b-368": 45614,
          "blake2b-376": 45615,
          "blake2b-384": 45616,
          "blake2b-392": 45617,
          "blake2b-400": 45618,
          "blake2b-408": 45619,
          "blake2b-416": 45620,
          "blake2b-424": 45621,
          "blake2b-432": 45622,
          "blake2b-440": 45623,
          "blake2b-448": 45624,
          "blake2b-456": 45625,
          "blake2b-464": 45626,
          "blake2b-472": 45627,
          "blake2b-480": 45628,
          "blake2b-488": 45629,
          "blake2b-496": 45630,
          "blake2b-504": 45631,
          "blake2b-512": 45632,
          "blake2s-8": 45633,
          "blake2s-16": 45634,
          "blake2s-24": 45635,
          "blake2s-32": 45636,
          "blake2s-40": 45637,
          "blake2s-48": 45638,
          "blake2s-56": 45639,
          "blake2s-64": 45640,
          "blake2s-72": 45641,
          "blake2s-80": 45642,
          "blake2s-88": 45643,
          "blake2s-96": 45644,
          "blake2s-104": 45645,
          "blake2s-112": 45646,
          "blake2s-120": 45647,
          "blake2s-128": 45648,
          "blake2s-136": 45649,
          "blake2s-144": 45650,
          "blake2s-152": 45651,
          "blake2s-160": 45652,
          "blake2s-168": 45653,
          "blake2s-176": 45654,
          "blake2s-184": 45655,
          "blake2s-192": 45656,
          "blake2s-200": 45657,
          "blake2s-208": 45658,
          "blake2s-216": 45659,
          "blake2s-224": 45660,
          "blake2s-232": 45661,
          "blake2s-240": 45662,
          "blake2s-248": 45663,
          "blake2s-256": 45664,
          "skein256-8": 45825,
          "skein256-16": 45826,
          "skein256-24": 45827,
          "skein256-32": 45828,
          "skein256-40": 45829,
          "skein256-48": 45830,
          "skein256-56": 45831,
          "skein256-64": 45832,
          "skein256-72": 45833,
          "skein256-80": 45834,
          "skein256-88": 45835,
          "skein256-96": 45836,
          "skein256-104": 45837,
          "skein256-112": 45838,
          "skein256-120": 45839,
          "skein256-128": 45840,
          "skein256-136": 45841,
          "skein256-144": 45842,
          "skein256-152": 45843,
          "skein256-160": 45844,
          "skein256-168": 45845,
          "skein256-176": 45846,
          "skein256-184": 45847,
          "skein256-192": 45848,
          "skein256-200": 45849,
          "skein256-208": 45850,
          "skein256-216": 45851,
          "skein256-224": 45852,
          "skein256-232": 45853,
          "skein256-240": 45854,
          "skein256-248": 45855,
          "skein256-256": 45856,
          "skein512-8": 45857,
          "skein512-16": 45858,
          "skein512-24": 45859,
          "skein512-32": 45860,
          "skein512-40": 45861,
          "skein512-48": 45862,
          "skein512-56": 45863,
          "skein512-64": 45864,
          "skein512-72": 45865,
          "skein512-80": 45866,
          "skein512-88": 45867,
          "skein512-96": 45868,
          "skein512-104": 45869,
          "skein512-112": 45870,
          "skein512-120": 45871,
          "skein512-128": 45872,
          "skein512-136": 45873,
          "skein512-144": 45874,
          "skein512-152": 45875,
          "skein512-160": 45876,
          "skein512-168": 45877,
          "skein512-176": 45878,
          "skein512-184": 45879,
          "skein512-192": 45880,
          "skein512-200": 45881,
          "skein512-208": 45882,
          "skein512-216": 45883,
          "skein512-224": 45884,
          "skein512-232": 45885,
          "skein512-240": 45886,
          "skein512-248": 45887,
          "skein512-256": 45888,
          "skein512-264": 45889,
          "skein512-272": 45890,
          "skein512-280": 45891,
          "skein512-288": 45892,
          "skein512-296": 45893,
          "skein512-304": 45894,
          "skein512-312": 45895,
          "skein512-320": 45896,
          "skein512-328": 45897,
          "skein512-336": 45898,
          "skein512-344": 45899,
          "skein512-352": 45900,
          "skein512-360": 45901,
          "skein512-368": 45902,
          "skein512-376": 45903,
          "skein512-384": 45904,
          "skein512-392": 45905,
          "skein512-400": 45906,
          "skein512-408": 45907,
          "skein512-416": 45908,
          "skein512-424": 45909,
          "skein512-432": 45910,
          "skein512-440": 45911,
          "skein512-448": 45912,
          "skein512-456": 45913,
          "skein512-464": 45914,
          "skein512-472": 45915,
          "skein512-480": 45916,
          "skein512-488": 45917,
          "skein512-496": 45918,
          "skein512-504": 45919,
          "skein512-512": 45920,
          "skein1024-8": 45921,
          "skein1024-16": 45922,
          "skein1024-24": 45923,
          "skein1024-32": 45924,
          "skein1024-40": 45925,
          "skein1024-48": 45926,
          "skein1024-56": 45927,
          "skein1024-64": 45928,
          "skein1024-72": 45929,
          "skein1024-80": 45930,
          "skein1024-88": 45931,
          "skein1024-96": 45932,
          "skein1024-104": 45933,
          "skein1024-112": 45934,
          "skein1024-120": 45935,
          "skein1024-128": 45936,
          "skein1024-136": 45937,
          "skein1024-144": 45938,
          "skein1024-152": 45939,
          "skein1024-160": 45940,
          "skein1024-168": 45941,
          "skein1024-176": 45942,
          "skein1024-184": 45943,
          "skein1024-192": 45944,
          "skein1024-200": 45945,
          "skein1024-208": 45946,
          "skein1024-216": 45947,
          "skein1024-224": 45948,
          "skein1024-232": 45949,
          "skein1024-240": 45950,
          "skein1024-248": 45951,
          "skein1024-256": 45952,
          "skein1024-264": 45953,
          "skein1024-272": 45954,
          "skein1024-280": 45955,
          "skein1024-288": 45956,
          "skein1024-296": 45957,
          "skein1024-304": 45958,
          "skein1024-312": 45959,
          "skein1024-320": 45960,
          "skein1024-328": 45961,
          "skein1024-336": 45962,
          "skein1024-344": 45963,
          "skein1024-352": 45964,
          "skein1024-360": 45965,
          "skein1024-368": 45966,
          "skein1024-376": 45967,
          "skein1024-384": 45968,
          "skein1024-392": 45969,
          "skein1024-400": 45970,
          "skein1024-408": 45971,
          "skein1024-416": 45972,
          "skein1024-424": 45973,
          "skein1024-432": 45974,
          "skein1024-440": 45975,
          "skein1024-448": 45976,
          "skein1024-456": 45977,
          "skein1024-464": 45978,
          "skein1024-472": 45979,
          "skein1024-480": 45980,
          "skein1024-488": 45981,
          "skein1024-496": 45982,
          "skein1024-504": 45983,
          "skein1024-512": 45984,
          "skein1024-520": 45985,
          "skein1024-528": 45986,
          "skein1024-536": 45987,
          "skein1024-544": 45988,
          "skein1024-552": 45989,
          "skein1024-560": 45990,
          "skein1024-568": 45991,
          "skein1024-576": 45992,
          "skein1024-584": 45993,
          "skein1024-592": 45994,
          "skein1024-600": 45995,
          "skein1024-608": 45996,
          "skein1024-616": 45997,
          "skein1024-624": 45998,
          "skein1024-632": 45999,
          "skein1024-640": 46e3,
          "skein1024-648": 46001,
          "skein1024-656": 46002,
          "skein1024-664": 46003,
          "skein1024-672": 46004,
          "skein1024-680": 46005,
          "skein1024-688": 46006,
          "skein1024-696": 46007,
          "skein1024-704": 46008,
          "skein1024-712": 46009,
          "skein1024-720": 46010,
          "skein1024-728": 46011,
          "skein1024-736": 46012,
          "skein1024-744": 46013,
          "skein1024-752": 46014,
          "skein1024-760": 46015,
          "skein1024-768": 46016,
          "skein1024-776": 46017,
          "skein1024-784": 46018,
          "skein1024-792": 46019,
          "skein1024-800": 46020,
          "skein1024-808": 46021,
          "skein1024-816": 46022,
          "skein1024-824": 46023,
          "skein1024-832": 46024,
          "skein1024-840": 46025,
          "skein1024-848": 46026,
          "skein1024-856": 46027,
          "skein1024-864": 46028,
          "skein1024-872": 46029,
          "skein1024-880": 46030,
          "skein1024-888": 46031,
          "skein1024-896": 46032,
          "skein1024-904": 46033,
          "skein1024-912": 46034,
          "skein1024-920": 46035,
          "skein1024-928": 46036,
          "skein1024-936": 46037,
          "skein1024-944": 46038,
          "skein1024-952": 46039,
          "skein1024-960": 46040,
          "skein1024-968": 46041,
          "skein1024-976": 46042,
          "skein1024-984": 46043,
          "skein1024-992": 46044,
          "skein1024-1000": 46045,
          "skein1024-1008": 46046,
          "skein1024-1016": 46047,
          "skein1024-1024": 46048,
          "poseidon-bls12_381-a2-fc1": 46081,
          "poseidon-bls12_381-a2-fc1-sc": 46082,
        });
        t.exports = { names: r };
      }),
      Pf = {};
    se(Pf, { identity: () => Sf });
    Yx = F(() => {
      je(),
        nt(),
        Sf = Fr({
          prefix: "\0",
          name: "identity",
          encode: (e) => Wd(e),
          decode: (e) => Vd(e),
        });
    }), Mf = {};
    se(Mf, { base2: () => Uf });
    Zx = F(() => {
      je(),
        Uf = K({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
    }), If = {};
    se(If, { base8: () => jf });
    e4 = F(() => {
      je(),
        jf = K({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        });
    }), Af = {};
    se(Af, { base10: () => Rf });
    t4 = F(() => {
      je(), Rf = kt({ prefix: "9", name: "base10", alphabet: "0123456789" });
    }), Ef = {};
    se(Ef, { base16: () => Bf, base16upper: () => Lf });
    r4 = F(() => {
      je(),
        Bf = K({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Lf = K({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
    }), Of = {};
    se(Of, { base36: () => _f, base36upper: () => Df });
    o4 = F(() => {
      je(),
        _f = kt({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Df = kt({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
    }), zf = {};
    se(zf, {
      base64: () => Nf,
      base64pad: () => Ff,
      base64url: () => $f,
      base64urlpad: () => Vf,
    });
    s4 = F(() => {
      je(),
        Nf = K({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Ff = K({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        $f = K({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Vf = K({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
    }),
      gn = F(() => {
        mn(),
          $r = ({ name: e, code: t, encode: r }) => new Wf(e, t, r),
          Wf = class {
            constructor(e, t, r) {
              this.name = e, this.code = t, this.encode = r;
            }
            async digest(e) {
              if (e instanceof Uint8Array) {
                let t = await this.encode(e);
                return un(this.code, t);
              } else throw Error("Unknown type, must be binary type");
            }
          };
      }),
      Hf = {};
    se(Hf, { sha256: () => Gf, sha512: () => qf });
    n4 = F(() => {
      gn(),
        yn = (e) =>
          async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        Gf = $r({ name: "sha2-256", code: 18, encode: yn("SHA-256") }),
        qf = $r({ name: "sha2-512", code: 19, encode: yn("SHA-512") });
    }), Kf = {};
    se(Kf, { identity: () => Jf });
    i4 = F(() => {
      gn(), nt(), Jf = $r({ name: "identity", code: 0, encode: (e) => qt(e) });
    }),
      a4 = F(() => {
        nt();
      }),
      c4 = F(() => {
        l4 = new TextEncoder(), p4 = new TextDecoder();
      }),
      u4 = F(() => {
        Qt(), cn(), nt(), gn(), mn();
      }),
      d4 = F(() => {
        Yx(),
          Zx(),
          e4(),
          t4(),
          r4(),
          ff(),
          o4(),
          of(),
          s4(),
          n4(),
          i4(),
          a4(),
          c4(),
          u4(),
          xn = {
            ...Pf,
            ...Mf,
            ...If,
            ...Af,
            ...Ef,
            ...sf,
            ...Of,
            ...tf,
            ...zf,
          },
          m4 = { ...Hf, ...Kf };
      });
    Yf = F(() => {
      d4(),
        kn = Qf("utf8", "u", (e) => {
          let t = new TextDecoder("utf8");
          return "u" + t.decode(e);
        }, (e) => new TextEncoder().encode(e.substring(1))),
        Vr = Qf("ascii", "a", (e) => {
          let t = "a";
          for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
          return t;
        }, (e) => {
          e = e.substring(1);
          let t = new Uint8Array(e.length);
          for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
          return t;
        }),
        Xf = {
          utf8: kn,
          "utf-8": kn,
          hex: xn.base16,
          latin1: Vr,
          ascii: Vr,
          binary: Vr,
          ...xn,
        },
        Cn = Xf;
    }), Wr = {};
    se(Wr, { toString: () => Hr });
    Gr = F(() => {
      Yf();
    }), vn = {};
    se(vn, { fromString: () => Zf });
    Tn = F(() => {
      Yf();
    }), qr = {};
    se(qr, { concat: () => Kr });
    Jr = F(() => {}),
      eh = R((e, t) => {
        "use strict";
        var r = wf(),
          o = Qx(),
          { names: s } = Xx(),
          { toString: i } = (Gr(), Wr),
          { fromString: l } = (Tn(), vn),
          { concat: c } = (Jr(), qr),
          a = {};
        for (let k in s) {
          let S = k;
          a[s[S]] = S;
        }
        Object.freeze(a);
        function n(k) {
          if (!(k instanceof Uint8Array)) {
            throw new Error("must be passed a Uint8Array");
          }
          return i(k, "base16");
        }
        function p(k) {
          return l(k, "base16");
        }
        function u(k) {
          if (!(k instanceof Uint8Array)) {
            throw new Error("must be passed a Uint8Array");
          }
          return i(r.encode("base58btc", k)).slice(1);
        }
        function f(k) {
          let S = k instanceof Uint8Array ? i(k) : k;
          return r.decode("z" + S);
        }
        function m(k) {
          if (!(k instanceof Uint8Array)) {
            throw new Error("multihash must be a Uint8Array");
          }
          if (k.length < 2) {
            throw new Error("multihash too short. must be > 2 bytes.");
          }
          let S = o.decode(k);
          if (!C(S)) {
            throw new Error(
              `multihash unknown function code: 0x${S.toString(16)}`,
            );
          }
          k = k.slice(o.decode.bytes);
          let U = o.decode(k);
          if (U < 0) throw new Error(`multihash invalid length: ${U}`);
          if (k = k.slice(o.decode.bytes), k.length !== U) {
            throw new Error(
              `multihash length inconsistent: 0x${i(k, "base16")}`,
            );
          }
          return { code: S, name: a[S], length: U, digest: k };
        }
        function h(k, S, U) {
          if (!k || S === void 0) {
            throw new Error(
              "multihash encode requires at least two args: digest, code",
            );
          }
          let P = b(S);
          if (!(k instanceof Uint8Array)) {
            throw new Error("digest should be a Uint8Array");
          }
          if (U == null && (U = k.length), U && k.length !== U) {
            throw new Error(
              "digest length should be equal to specified length.",
            );
          }
          let I = o.encode(P), A = o.encode(U);
          return c([I, A, k], I.length + A.length + k.length);
        }
        function b(k) {
          let S = k;
          if (typeof k == "string") {
            if (s[k] === void 0) {
              throw new Error(`Unrecognized hash function named: ${k}`);
            }
            S = s[k];
          }
          if (typeof S != "number") {
            throw new Error(`Hash function code should be a number. Got: ${S}`);
          }
          if (a[S] === void 0 && !y(S)) {
            throw new Error(`Unrecognized function code: ${S}`);
          }
          return S;
        }
        function y(k) {
          return k > 0 && k < 16;
        }
        function C(k) {
          return !!(y(k) || a[k]);
        }
        function x(k) {
          m(k);
        }
        function v(k) {
          return x(k), k.subarray(0, 2);
        }
        t.exports = {
          names: s,
          codes: a,
          toHexString: n,
          fromHexString: p,
          toB58String: u,
          fromB58String: f,
          decode: m,
          encode: h,
          coerceCode: b,
          isAppCode: y,
          validate: x,
          prefix: v,
          isValidCode: C,
        };
      }),
      f4 = R((e, t) => {
        t.exports = l;
        var r = 128, o = 127, s = ~o, i = Math.pow(2, 31);
        function l(c, a, n) {
          if (Number.MAX_SAFE_INTEGER && c > Number.MAX_SAFE_INTEGER) {
            throw l.bytes = 0, new RangeError("Could not encode varint");
          }
          a = a || [], n = n || 0;
          for (var p = n; c >= i;) a[n++] = c & 255 | r, c /= 128;
          for (; c & s;) a[n++] = c & 255 | r, c >>>= 7;
          return a[n] = c | 0, l.bytes = n - p + 1, a;
        }
      }),
      h4 = R((e, t) => {
        t.exports = s;
        var r = 128, o = 127;
        function s(i, l) {
          var c = 0, l = l || 0, a = 0, n = l, p, u = i.length;
          do {
            if (n >= u || a > 49) {
              throw s.bytes = 0, new RangeError("Could not decode varint");
            }
            p = i[n++],
              c += a < 28 ? (p & o) << a : (p & o) * Math.pow(2, a),
              a += 7;
          } while (p >= r);
          return s.bytes = n - l, c;
        }
      }),
      b4 = R((e, t) => {
        var r = Math.pow(2, 7),
          o = Math.pow(2, 14),
          s = Math.pow(2, 21),
          i = Math.pow(2, 28),
          l = Math.pow(2, 35),
          c = Math.pow(2, 42),
          a = Math.pow(2, 49),
          n = Math.pow(2, 56),
          p = Math.pow(2, 63);
        t.exports = function (u) {
          return u < r
            ? 1
            : u < o
            ? 2
            : u < s
            ? 3
            : u < i
            ? 4
            : u < l
            ? 5
            : u < c
            ? 6
            : u < a
            ? 7
            : u < n
            ? 8
            : u < p
            ? 9
            : 10;
        };
      }),
      th = R((e, t) => {
        t.exports = { encode: f4(), decode: h4(), encodingLength: b4() };
      }),
      rh = R((e, t) => {
        "use strict";
        var r = th(),
          { toString: o } = (Gr(), Wr),
          { fromString: s } = (Tn(), vn);
        t.exports = {
          numberToUint8Array: l,
          uint8ArrayToNumber: i,
          varintUint8ArrayEncode: c,
          varintEncode: a,
        };
        function i(n) {
          return parseInt(o(n, "base16"), 16);
        }
        function l(n) {
          let p = n.toString(16);
          return p.length % 2 == 1 && (p = "0" + p), s(p, "base16");
        }
        function c(n) {
          return Uint8Array.from(r.encode(i(n)));
        }
        function a(n) {
          return Uint8Array.from(r.encode(n));
        }
      }),
      g4 = R((e, t) => {
        "use strict";
        var r = Object.freeze({
          identity: 0,
          cidv1: 1,
          cidv2: 2,
          cidv3: 3,
          ip4: 4,
          tcp: 6,
          sha1: 17,
          "sha2-256": 18,
          "sha2-512": 19,
          "sha3-512": 20,
          "sha3-384": 21,
          "sha3-256": 22,
          "sha3-224": 23,
          "shake-128": 24,
          "shake-256": 25,
          "keccak-224": 26,
          "keccak-256": 27,
          "keccak-384": 28,
          "keccak-512": 29,
          blake3: 30,
          dccp: 33,
          "murmur3-128": 34,
          "murmur3-32": 35,
          ip6: 41,
          ip6zone: 42,
          path: 47,
          multicodec: 48,
          multihash: 49,
          multiaddr: 50,
          multibase: 51,
          dns: 53,
          dns4: 54,
          dns6: 55,
          dnsaddr: 56,
          protobuf: 80,
          cbor: 81,
          raw: 85,
          "dbl-sha2-256": 86,
          rlp: 96,
          bencode: 99,
          "dag-pb": 112,
          "dag-cbor": 113,
          "libp2p-key": 114,
          "git-raw": 120,
          "torrent-info": 123,
          "torrent-file": 124,
          "leofcoin-block": 129,
          "leofcoin-tx": 130,
          "leofcoin-pr": 131,
          sctp: 132,
          "dag-jose": 133,
          "dag-cose": 134,
          "eth-block": 144,
          "eth-block-list": 145,
          "eth-tx-trie": 146,
          "eth-tx": 147,
          "eth-tx-receipt-trie": 148,
          "eth-tx-receipt": 149,
          "eth-state-trie": 150,
          "eth-account-snapshot": 151,
          "eth-storage-trie": 152,
          "eth-receipt-log-trie": 153,
          "eth-reciept-log": 154,
          "bitcoin-block": 176,
          "bitcoin-tx": 177,
          "bitcoin-witness-commitment": 178,
          "zcash-block": 192,
          "zcash-tx": 193,
          "caip-50": 202,
          streamid: 206,
          "stellar-block": 208,
          "stellar-tx": 209,
          md4: 212,
          md5: 213,
          bmt: 214,
          "decred-block": 224,
          "decred-tx": 225,
          "ipld-ns": 226,
          "ipfs-ns": 227,
          "swarm-ns": 228,
          "ipns-ns": 229,
          zeronet: 230,
          "secp256k1-pub": 231,
          "bls12_381-g1-pub": 234,
          "bls12_381-g2-pub": 235,
          "x25519-pub": 236,
          "ed25519-pub": 237,
          "bls12_381-g1g2-pub": 238,
          "dash-block": 240,
          "dash-tx": 241,
          "swarm-manifest": 250,
          "swarm-feed": 251,
          udp: 273,
          "p2p-webrtc-star": 275,
          "p2p-webrtc-direct": 276,
          "p2p-stardust": 277,
          "p2p-circuit": 290,
          "dag-json": 297,
          udt: 301,
          utp: 302,
          unix: 400,
          thread: 406,
          p2p: 421,
          ipfs: 421,
          https: 443,
          onion: 444,
          onion3: 445,
          garlic64: 446,
          garlic32: 447,
          tls: 448,
          noise: 454,
          quic: 460,
          ws: 477,
          wss: 478,
          "p2p-websocket-star": 479,
          http: 480,
          "swhid-1-snp": 496,
          json: 512,
          messagepack: 513,
          "libp2p-peer-record": 769,
          "libp2p-relay-rsvp": 770,
          "car-index-sorted": 1024,
          "sha2-256-trunc254-padded": 4114,
          "ripemd-128": 4178,
          "ripemd-160": 4179,
          "ripemd-256": 4180,
          "ripemd-320": 4181,
          x11: 4352,
          "p256-pub": 4608,
          "p384-pub": 4609,
          "p521-pub": 4610,
          "ed448-pub": 4611,
          "x448-pub": 4612,
          "ed25519-priv": 4864,
          "secp256k1-priv": 4865,
          "x25519-priv": 4866,
          kangarootwelve: 7425,
          "sm3-256": 21325,
          "blake2b-8": 45569,
          "blake2b-16": 45570,
          "blake2b-24": 45571,
          "blake2b-32": 45572,
          "blake2b-40": 45573,
          "blake2b-48": 45574,
          "blake2b-56": 45575,
          "blake2b-64": 45576,
          "blake2b-72": 45577,
          "blake2b-80": 45578,
          "blake2b-88": 45579,
          "blake2b-96": 45580,
          "blake2b-104": 45581,
          "blake2b-112": 45582,
          "blake2b-120": 45583,
          "blake2b-128": 45584,
          "blake2b-136": 45585,
          "blake2b-144": 45586,
          "blake2b-152": 45587,
          "blake2b-160": 45588,
          "blake2b-168": 45589,
          "blake2b-176": 45590,
          "blake2b-184": 45591,
          "blake2b-192": 45592,
          "blake2b-200": 45593,
          "blake2b-208": 45594,
          "blake2b-216": 45595,
          "blake2b-224": 45596,
          "blake2b-232": 45597,
          "blake2b-240": 45598,
          "blake2b-248": 45599,
          "blake2b-256": 45600,
          "blake2b-264": 45601,
          "blake2b-272": 45602,
          "blake2b-280": 45603,
          "blake2b-288": 45604,
          "blake2b-296": 45605,
          "blake2b-304": 45606,
          "blake2b-312": 45607,
          "blake2b-320": 45608,
          "blake2b-328": 45609,
          "blake2b-336": 45610,
          "blake2b-344": 45611,
          "blake2b-352": 45612,
          "blake2b-360": 45613,
          "blake2b-368": 45614,
          "blake2b-376": 45615,
          "blake2b-384": 45616,
          "blake2b-392": 45617,
          "blake2b-400": 45618,
          "blake2b-408": 45619,
          "blake2b-416": 45620,
          "blake2b-424": 45621,
          "blake2b-432": 45622,
          "blake2b-440": 45623,
          "blake2b-448": 45624,
          "blake2b-456": 45625,
          "blake2b-464": 45626,
          "blake2b-472": 45627,
          "blake2b-480": 45628,
          "blake2b-488": 45629,
          "blake2b-496": 45630,
          "blake2b-504": 45631,
          "blake2b-512": 45632,
          "blake2s-8": 45633,
          "blake2s-16": 45634,
          "blake2s-24": 45635,
          "blake2s-32": 45636,
          "blake2s-40": 45637,
          "blake2s-48": 45638,
          "blake2s-56": 45639,
          "blake2s-64": 45640,
          "blake2s-72": 45641,
          "blake2s-80": 45642,
          "blake2s-88": 45643,
          "blake2s-96": 45644,
          "blake2s-104": 45645,
          "blake2s-112": 45646,
          "blake2s-120": 45647,
          "blake2s-128": 45648,
          "blake2s-136": 45649,
          "blake2s-144": 45650,
          "blake2s-152": 45651,
          "blake2s-160": 45652,
          "blake2s-168": 45653,
          "blake2s-176": 45654,
          "blake2s-184": 45655,
          "blake2s-192": 45656,
          "blake2s-200": 45657,
          "blake2s-208": 45658,
          "blake2s-216": 45659,
          "blake2s-224": 45660,
          "blake2s-232": 45661,
          "blake2s-240": 45662,
          "blake2s-248": 45663,
          "blake2s-256": 45664,
          "skein256-8": 45825,
          "skein256-16": 45826,
          "skein256-24": 45827,
          "skein256-32": 45828,
          "skein256-40": 45829,
          "skein256-48": 45830,
          "skein256-56": 45831,
          "skein256-64": 45832,
          "skein256-72": 45833,
          "skein256-80": 45834,
          "skein256-88": 45835,
          "skein256-96": 45836,
          "skein256-104": 45837,
          "skein256-112": 45838,
          "skein256-120": 45839,
          "skein256-128": 45840,
          "skein256-136": 45841,
          "skein256-144": 45842,
          "skein256-152": 45843,
          "skein256-160": 45844,
          "skein256-168": 45845,
          "skein256-176": 45846,
          "skein256-184": 45847,
          "skein256-192": 45848,
          "skein256-200": 45849,
          "skein256-208": 45850,
          "skein256-216": 45851,
          "skein256-224": 45852,
          "skein256-232": 45853,
          "skein256-240": 45854,
          "skein256-248": 45855,
          "skein256-256": 45856,
          "skein512-8": 45857,
          "skein512-16": 45858,
          "skein512-24": 45859,
          "skein512-32": 45860,
          "skein512-40": 45861,
          "skein512-48": 45862,
          "skein512-56": 45863,
          "skein512-64": 45864,
          "skein512-72": 45865,
          "skein512-80": 45866,
          "skein512-88": 45867,
          "skein512-96": 45868,
          "skein512-104": 45869,
          "skein512-112": 45870,
          "skein512-120": 45871,
          "skein512-128": 45872,
          "skein512-136": 45873,
          "skein512-144": 45874,
          "skein512-152": 45875,
          "skein512-160": 45876,
          "skein512-168": 45877,
          "skein512-176": 45878,
          "skein512-184": 45879,
          "skein512-192": 45880,
          "skein512-200": 45881,
          "skein512-208": 45882,
          "skein512-216": 45883,
          "skein512-224": 45884,
          "skein512-232": 45885,
          "skein512-240": 45886,
          "skein512-248": 45887,
          "skein512-256": 45888,
          "skein512-264": 45889,
          "skein512-272": 45890,
          "skein512-280": 45891,
          "skein512-288": 45892,
          "skein512-296": 45893,
          "skein512-304": 45894,
          "skein512-312": 45895,
          "skein512-320": 45896,
          "skein512-328": 45897,
          "skein512-336": 45898,
          "skein512-344": 45899,
          "skein512-352": 45900,
          "skein512-360": 45901,
          "skein512-368": 45902,
          "skein512-376": 45903,
          "skein512-384": 45904,
          "skein512-392": 45905,
          "skein512-400": 45906,
          "skein512-408": 45907,
          "skein512-416": 45908,
          "skein512-424": 45909,
          "skein512-432": 45910,
          "skein512-440": 45911,
          "skein512-448": 45912,
          "skein512-456": 45913,
          "skein512-464": 45914,
          "skein512-472": 45915,
          "skein512-480": 45916,
          "skein512-488": 45917,
          "skein512-496": 45918,
          "skein512-504": 45919,
          "skein512-512": 45920,
          "skein1024-8": 45921,
          "skein1024-16": 45922,
          "skein1024-24": 45923,
          "skein1024-32": 45924,
          "skein1024-40": 45925,
          "skein1024-48": 45926,
          "skein1024-56": 45927,
          "skein1024-64": 45928,
          "skein1024-72": 45929,
          "skein1024-80": 45930,
          "skein1024-88": 45931,
          "skein1024-96": 45932,
          "skein1024-104": 45933,
          "skein1024-112": 45934,
          "skein1024-120": 45935,
          "skein1024-128": 45936,
          "skein1024-136": 45937,
          "skein1024-144": 45938,
          "skein1024-152": 45939,
          "skein1024-160": 45940,
          "skein1024-168": 45941,
          "skein1024-176": 45942,
          "skein1024-184": 45943,
          "skein1024-192": 45944,
          "skein1024-200": 45945,
          "skein1024-208": 45946,
          "skein1024-216": 45947,
          "skein1024-224": 45948,
          "skein1024-232": 45949,
          "skein1024-240": 45950,
          "skein1024-248": 45951,
          "skein1024-256": 45952,
          "skein1024-264": 45953,
          "skein1024-272": 45954,
          "skein1024-280": 45955,
          "skein1024-288": 45956,
          "skein1024-296": 45957,
          "skein1024-304": 45958,
          "skein1024-312": 45959,
          "skein1024-320": 45960,
          "skein1024-328": 45961,
          "skein1024-336": 45962,
          "skein1024-344": 45963,
          "skein1024-352": 45964,
          "skein1024-360": 45965,
          "skein1024-368": 45966,
          "skein1024-376": 45967,
          "skein1024-384": 45968,
          "skein1024-392": 45969,
          "skein1024-400": 45970,
          "skein1024-408": 45971,
          "skein1024-416": 45972,
          "skein1024-424": 45973,
          "skein1024-432": 45974,
          "skein1024-440": 45975,
          "skein1024-448": 45976,
          "skein1024-456": 45977,
          "skein1024-464": 45978,
          "skein1024-472": 45979,
          "skein1024-480": 45980,
          "skein1024-488": 45981,
          "skein1024-496": 45982,
          "skein1024-504": 45983,
          "skein1024-512": 45984,
          "skein1024-520": 45985,
          "skein1024-528": 45986,
          "skein1024-536": 45987,
          "skein1024-544": 45988,
          "skein1024-552": 45989,
          "skein1024-560": 45990,
          "skein1024-568": 45991,
          "skein1024-576": 45992,
          "skein1024-584": 45993,
          "skein1024-592": 45994,
          "skein1024-600": 45995,
          "skein1024-608": 45996,
          "skein1024-616": 45997,
          "skein1024-624": 45998,
          "skein1024-632": 45999,
          "skein1024-640": 46e3,
          "skein1024-648": 46001,
          "skein1024-656": 46002,
          "skein1024-664": 46003,
          "skein1024-672": 46004,
          "skein1024-680": 46005,
          "skein1024-688": 46006,
          "skein1024-696": 46007,
          "skein1024-704": 46008,
          "skein1024-712": 46009,
          "skein1024-720": 46010,
          "skein1024-728": 46011,
          "skein1024-736": 46012,
          "skein1024-744": 46013,
          "skein1024-752": 46014,
          "skein1024-760": 46015,
          "skein1024-768": 46016,
          "skein1024-776": 46017,
          "skein1024-784": 46018,
          "skein1024-792": 46019,
          "skein1024-800": 46020,
          "skein1024-808": 46021,
          "skein1024-816": 46022,
          "skein1024-824": 46023,
          "skein1024-832": 46024,
          "skein1024-840": 46025,
          "skein1024-848": 46026,
          "skein1024-856": 46027,
          "skein1024-864": 46028,
          "skein1024-872": 46029,
          "skein1024-880": 46030,
          "skein1024-888": 46031,
          "skein1024-896": 46032,
          "skein1024-904": 46033,
          "skein1024-912": 46034,
          "skein1024-920": 46035,
          "skein1024-928": 46036,
          "skein1024-936": 46037,
          "skein1024-944": 46038,
          "skein1024-952": 46039,
          "skein1024-960": 46040,
          "skein1024-968": 46041,
          "skein1024-976": 46042,
          "skein1024-984": 46043,
          "skein1024-992": 46044,
          "skein1024-1000": 46045,
          "skein1024-1008": 46046,
          "skein1024-1016": 46047,
          "skein1024-1024": 46048,
          "poseidon-bls12_381-a2-fc1": 46081,
          "poseidon-bls12_381-a2-fc1-sc": 46082,
          "zeroxcert-imprint-256": 52753,
          "fil-commitment-unsealed": 61697,
          "fil-commitment-sealed": 61698,
          "holochain-adr-v0": 8417572,
          "holochain-adr-v1": 8483108,
          "holochain-key-v0": 9728292,
          "holochain-key-v1": 9793828,
          "holochain-sig-v0": 10645796,
          "holochain-sig-v1": 10711332,
          "skynet-ns": 11639056,
          "arweave-ns": 11704592,
        });
        t.exports = { baseTable: r };
      }),
      y4 = R((e, t) => {
        "use strict";
        var { baseTable: r } = g4(),
          o = rh().varintEncode,
          s = {},
          i = {},
          l = {};
        for (let a in r) {
          let n = a, p = r[n];
          s[n] = o(p);
          let u = n.toUpperCase().replace(/-/g, "_");
          i[u] = p, l[p] || (l[p] = n);
        }
        Object.freeze(s), Object.freeze(i), Object.freeze(l);
        var c = Object.freeze(r);
        t.exports = {
          nameToVarint: s,
          constantToCode: i,
          nameToCode: c,
          codeToName: l,
        };
      }),
      x4 = R((e, t) => {
        "use strict";
        var r = th(),
          { concat: o } = (Jr(), qr),
          s = rh(),
          { nameToVarint: i, constantToCode: l, nameToCode: c, codeToName: a } =
            y4();
        function n(P, I) {
          let A;
          if (P instanceof Uint8Array) A = s.varintUint8ArrayEncode(P);
          else if (i[P]) A = i[P];
          else throw new Error("multicodec not recognized");
          return o([A, I], A.length + I.length);
        }
        function p(P) {
          return r.decode(P), P.slice(r.decode.bytes);
        }
        function u(P) {
          let I = r.decode(P), A = a[I];
          if (A === void 0) throw new Error(`Code "${I}" not found`);
          return A;
        }
        function f(P) {
          return a[P];
        }
        function m(P) {
          let I = c[P];
          if (I === void 0) throw new Error(`Codec "${P}" not found`);
          return I;
        }
        function h(P) {
          return r.decode(P);
        }
        function b(P) {
          let I = i[P];
          if (I === void 0) throw new Error(`Codec "${P}" not found`);
          return I;
        }
        function y(P) {
          return s.varintEncode(P);
        }
        function C(P) {
          return u(P);
        }
        function x(P) {
          return f(P);
        }
        function v(P) {
          return m(P);
        }
        function k(P) {
          return h(P);
        }
        function S(P) {
          return b(P);
        }
        function U(P) {
          return Array.from(y(P));
        }
        t.exports = {
          addPrefix: n,
          rmPrefix: p,
          getNameFromData: u,
          getNameFromCode: f,
          getCodeFromName: m,
          getCodeFromData: h,
          getVarintFromName: b,
          getVarintFromCode: y,
          getCodec: C,
          getName: x,
          getNumber: v,
          getCode: k,
          getCodeVarint: S,
          getVarint: U,
          ...l,
          nameToVarint: i,
          nameToCode: c,
          codeToName: a,
        };
      }),
      k4 = R((e, t) => {
        "use strict";
        var r = eh(),
          o = {
            checkCIDComponents: function (s) {
              if (s == null) return "null values are not valid CIDs";
              if (!(s.version === 0 || s.version === 1)) {
                return "Invalid version, must be a number equal to 1 or 0";
              }
              if (typeof s.codec != "string") {
                return "codec must be string";
              }
              if (s.version === 0) {
                if (
                  s.codec !== "dag-pb"
                ) {
                  return "codec must be 'dag-pb' for CIDv0";
                }
                if (s.multibaseName !== "base58btc") {
                  return "multibaseName must be 'base58btc' for CIDv0";
                }
              }
              if (!(s.multihash instanceof Uint8Array)) {
                return "multihash must be a Uint8Array";
              }
              try {
                r.validate(s.multihash);
              } catch (i) {
                let l = i.message;
                return l || (l = "Multihash validation failed"), l;
              }
            },
          };
        t.exports = o;
      }),
      oh = {};
    se(oh, { equals: () => C4 });
    sh = F(() => {}),
      v4 = R((e, t) => {
        "use strict";
        var r = eh(),
          o = wf(),
          s = x4(),
          i = k4(),
          { concat: l } = (Jr(), qr),
          { toString: c } = (Gr(), Wr),
          { equals: a } = (sh(), oh),
          n = s.nameToCode,
          p = Object.keys(n).reduce((m, h) => (m[n[h]] = h, m), {}),
          u = Symbol.for("@ipld/js-cid/CID"),
          f = class {
            constructor(m, h, b, y) {
              if (
                this.version,
                  this.codec,
                  this.multihash,
                  Object.defineProperty(this, u, { value: !0 }),
                  f.isCID(m)
              ) {
                let C = m;
                this.version = C.version,
                  this.codec = C.codec,
                  this.multihash = C.multihash,
                  this.multibaseName = C.multibaseName ||
                    (C.version === 0 ? "base58btc" : "base32");
                return;
              }
              if (typeof m == "string") {
                let C = o.isEncoded(m);
                if (C) {
                  let x = o.decode(m);
                  this.version = parseInt(x[0].toString(), 16),
                    this.codec = s.getCodec(x.slice(1)),
                    this.multihash = s.rmPrefix(x.slice(1)),
                    this.multibaseName = C;
                } else {
                  this.version = 0,
                    this.codec = "dag-pb",
                    this.multihash = r.fromB58String(m),
                    this.multibaseName = "base58btc";
                }
                f.validateCID(this),
                  Object.defineProperty(this, "string", { value: m });
                return;
              }
              if (m instanceof Uint8Array) {
                let C = parseInt(m[0].toString(), 16);
                if (C === 1) {
                  let x = m;
                  this.version = C,
                    this.codec = s.getCodec(x.slice(1)),
                    this.multihash = s.rmPrefix(x.slice(1)),
                    this.multibaseName = "base32";
                } else {
                  this.version = 0,
                    this.codec = "dag-pb",
                    this.multihash = m,
                    this.multibaseName = "base58btc";
                }
                f.validateCID(this);
                return;
              }
              this.version = m,
                typeof h == "number" && (h = p[h]),
                this.codec = h,
                this.multihash = b,
                this.multibaseName = y || (m === 0 ? "base58btc" : "base32"),
                f.validateCID(this);
            }
            get bytes() {
              let m = this._bytes;
              if (!m) {
                if (this.version === 0) m = this.multihash;
                else if (this.version === 1) {
                  let h = s.getCodeVarint(this.codec);
                  m = l(
                    [[1], h, this.multihash],
                    1 + h.byteLength + this.multihash.byteLength,
                  );
                } else throw new Error("unsupported version");
                Object.defineProperty(this, "_bytes", { value: m });
              }
              return m;
            }
            get prefix() {
              let m = s.getCodeVarint(this.codec), h = r.prefix(this.multihash);
              return l([[this.version], m, h], 1 + m.byteLength + h.byteLength);
            }
            get code() {
              return n[this.codec];
            }
            toV0() {
              if (this.codec !== "dag-pb") {
                throw new Error("Cannot convert a non dag-pb CID to CIDv0");
              }
              let { name: m, length: h } = r.decode(this.multihash);
              if (m !== "sha2-256") {
                throw new Error(
                  "Cannot convert non sha2-256 multihash CID to CIDv0",
                );
              }
              if (h !== 32) {
                throw new Error(
                  "Cannot convert non 32 byte multihash CID to CIDv0",
                );
              }
              return new f(0, this.codec, this.multihash);
            }
            toV1() {
              return new f(1, this.codec, this.multihash, this.multibaseName);
            }
            toBaseEncodedString(m = this.multibaseName) {
              if (
                this.string && this.string.length !== 0 &&
                m === this.multibaseName
              ) {
                return this.string;
              }
              let h;
              if (this.version === 0) {
                if (m !== "base58btc") {
                  throw new Error(
                    "not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()",
                  );
                }
                h = r.toB58String(this.multihash);
              } else if (this.version === 1) h = c(o.encode(m, this.bytes));
              else throw new Error("unsupported version");
              return m === this.multibaseName &&
                Object.defineProperty(this, "string", { value: h }),
                h;
            }
            [Symbol.for("nodejs.util.inspect.custom")]() {
              return "CID(" + this.toString() + ")";
            }
            toString(m) {
              return this.toBaseEncodedString(m);
            }
            toJSON() {
              return {
                codec: this.codec,
                version: this.version,
                hash: this.multihash,
              };
            }
            equals(m) {
              return this.codec === m.codec && this.version === m.version &&
                a(this.multihash, m.multihash);
            }
            static validateCID(m) {
              let h = i.checkCIDComponents(m);
              if (h) throw new Error(h);
            }
            static isCID(m) {
              return m instanceof f || Boolean(m && m[u]);
            }
          };
        f.codecs = n, t.exports = f;
      }),
      T4 = Vt(Cx()),
      w4 = (e) => {
        let { name: t, message: r, stack: o, code: s, detail: i } = e;
        return { name: t, message: r, stack: o, code: s, detail: i };
      },
      wn = (e) => {
        if (e instanceof Error) return e;
        {
          let { name: t, message: r, stack: o, code: s } = e;
          return Object.assign(P4(t, r), { name: t, stack: o, code: s });
        }
      },
      P4 = (e, t) => {
        switch (e) {
          case "RangeError":
            return new RangeError(t);
          case "ReferenceError":
            return ReferenceError(t);
          case "SyntaxError":
            return new SyntaxError(t);
          case "TypeError":
            return new TypeError(t);
          case "URIError":
            return new URIError(t);
          default:
            return new Error(t);
        }
      },
      S4 = class extends Error {
        get name() {
          return this.constructor.name;
        }
      },
      M4 = class extends Error {
        get name() {
          return this.constructor.name;
        }
      },
      U4 = class extends Error {
        get name() {
          return this.constructor.name;
        }
      },
      Xt = class {
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
            (e.timerID = setTimeout(Xt.timeout, e.timeout, this, t)),
            e.signal &&
            e.signal.addEventListener("abort", () => this.abort(t), {
              once: !0,
            }),
            this.port && Xt.postQuery(this.port, t, e),
            e.result;
        }
        connect(e) {
          if (this.port) throw new Error("Transport is already open");
          this.port = e,
            this.port.addEventListener("message", this),
            this.port.start();
          for (let [t, r] of Object.entries(this.queries)) {
            Xt.postQuery(e, t, r);
          }
        }
        disconnect() {
          let e = new U4();
          for (let [t, r] of Object.entries(this.queries)) {
            r.fail(e), this.abort(t);
          }
          this.port &&
            (this.port.removeEventListener("message", this), this.port.close());
        }
        static timeout(e, t) {
          let { queries: r } = e, o = r[t];
          o &&
            (delete r[t],
              o.fail(new S4("request timed out")),
              e.port && e.port.postMessage({ type: "abort", id: t }));
        }
        abort(e) {
          let { queries: t } = this, r = t[e];
          r &&
            (delete t[e],
              r.fail(new M4()),
              this.port && this.port.postMessage({ type: "abort", id: e }),
              r.timerID != null && clearTimeout(r.timerID));
        }
        static postQuery(e, t, r) {
          e.postMessage({
            type: "query",
            namespace: r.namespace,
            method: r.method,
            id: t,
            input: r.toJSON(),
          }, [...new Set(r.transfer() || [])]);
        }
        handleEvent(e) {
          let { id: t, result: r } = e.data, o = this.queries[t];
          o &&
            (delete this.queries[t],
              r.ok ? o.succeed(r.value) : o.fail(wn(r.error)),
              o.timerID != null && clearTimeout(o.timerID));
        }
      },
      I4 = class {
        constructor(e, t, r) {
          this.result = new Promise((o, s) => {
            this.succeed = o,
              this.fail = s,
              this.signal = r.signal,
              this.input = r,
              this.namespace = e,
              this.method = t,
              this.timeout = r.timeout == null ? 1 / 0 : r.timeout,
              this.timerID = null;
          });
        }
        toJSON() {
          return this.input;
        }
        transfer() {
          return this.input.transfer;
        }
      },
      j4 = class {
        constructor(e, t, r) {
          this.transport = r;
          let o = this;
          for (let s of t) {
            o[s] = (i) => this.transport.execute(new I4(e, s.toString(), i));
          }
        }
      },
      Qr = class {
        constructor(e, t, r) {
          this.remote = new j4(e, t, r);
        }
      };
    Qt();
    Ae = (e, t) => (t && t.push(e.multihash.bytes.buffer), e),
      Re = (e) => {
        let t = e;
        return t._baseCache ||
          Object.defineProperty(t, "_baseCache", { value: new Map() }),
          t.asCID || Object.defineProperty(t, "asCID", { get: () => t }),
          Object.setPrototypeOf(t.multihash.digest, Uint8Array.prototype),
          Object.setPrototypeOf(t.multihash.bytes, Uint8Array.prototype),
          Object.setPrototypeOf(t.bytes, Uint8Array.prototype),
          Object.setPrototypeOf(t, H.prototype),
          Object.defineProperty(t, Symbol.for("@ipld/js-cid/CID"), {
            value: !0,
          }),
          t;
      },
      A4 = (e, t) => (t && t.push(e.buffer), e),
      Yt = class extends Qr {
        constructor(e) {
          super("block", ["put", "get", "rm", "stat"], e);
        }
      };
    Yt.prototype.get = async function (e, t = {}) {
      let { transfer: r } = t,
        { block: o } = await this.remote.get({ ...t, cid: Ae(e, r) });
      return o;
    };
    Yt.prototype.put = async function (e, t = {}) {
      let { transfer: r } = t;
      delete t.progress;
      let o = await this.remote.put({
        ...t,
        block: e instanceof Uint8Array ? e : A4(e, r),
      });
      return Re(o.cid);
    };
    Yt.prototype.rm = async function* (e, t = {}) {
      let { transfer: r } = t;
      yield* (await this.remote.rm({
        ...t,
        cids: Array.isArray(e) ? e.map((o) => Ae(o, r)) : [Ae(e, r)],
      })).map(R4);
    };
    Yt.prototype.stat = async function (e, t = {}) {
      let { transfer: r } = t,
        o = await this.remote.stat({ ...t, cid: Ae(e, r) });
      return { ...o, cid: Re(o.cid) };
    };
    R4 = (e) => {
      let t = Re(e.cid);
      return e.error ? { cid: t, error: wn(e.error) } : { cid: t };
    };
    Qt();
    E4 = ({ dagNode: e, cids: t }) => {
      for (let r of t) Re(r);
      return e;
    },
      B4 = (e, t) => {
        let r = [];
        return Pn(e, r, t), { dagNode: e, cids: r };
      },
      Pn = (e, t, r) => {
        if (e != null && typeof e == "object") {
          let o = H.asCID(e);
          if (o) t.push(o), Ae(o, r);
          else if (e instanceof ArrayBuffer) r && r.push(e);
          else if (ArrayBuffer.isView(e)) r && r.push(e.buffer);
          else if (Array.isArray(e)) for (let s of e) Pn(s, t, r);
          else for (let s of Object.values(e)) Pn(s, t, r);
        }
      },
      Xr = class extends Qr {
        constructor(e) {
          super("dag", ["put", "get", "resolve"], e);
        }
      };
    Xr.prototype.put = async function (e, t = {}) {
      let r = await this.remote.put({ ...t, dagNode: B4(e, t.transfer) });
      return Re(r);
    };
    Xr.prototype.get = async function (e, t = {}) {
      let { value: r, remainderPath: o } = await this.remote.get({
        ...t,
        cid: Ae(e, t.transfer),
      });
      return { value: E4(r), remainderPath: o };
    };
    Xr.prototype.resolve = async function (e, t = {}) {
      let { cid: r, remainderPath: o } = await this.remote.resolve({
        ...t,
        cid: L4(e, t.transfer),
      });
      return { cid: Re(r), remainderPath: o };
    };
    L4 = (e, t) => typeof e == "string" ? e : Ae(e, t);
    Qt();
    Sn = async function* ({ port: e }, t) {
      let r = (l) => {},
        o = () => new Promise((l) => r = l),
        s = () => (e.postMessage({ method: "next" }), o());
      e.onmessage = (l) => r(l.data);
      let i = !1;
      try {
        for (; !i;) {
          let { done: l, value: c, error: a } = await s();
          if (i = l, a != null) throw wn(a);
          c != null && (yield t(c));
        }
      } finally {
        i || e.postMessage({ method: "return" }), e.close();
      }
    },
      Ee = (e, t, r) => {
        let { port1: o, port2: s } = new MessageChannel(), i = [], l = O4(e);
        return o.onmessage = async ({ data: { method: c } }) => {
          switch (c) {
            case "next": {
              try {
                let { done: a, value: n } = await l.next();
                a
                  ? (o.postMessage({ type: "next", done: !0 }), o.close())
                  : (i.length = 0,
                    o.postMessage(
                      { type: "next", done: !1, value: t(n, i) },
                      i,
                    ));
              } catch (a) {
                o.postMessage({ type: "throw", error: w4(a) }), o.close();
              }
              break;
            }
            case "return": {
              o.close(), l.return && l.return();
              break;
            }
            default:
              break;
          }
        },
          o.start(),
          r.push(s),
          { type: "RemoteIterable", port: s };
      },
      O4 = (e) => {
        if (e != null) {
          if (typeof e[Symbol.asyncIterator] == "function") {
            return e[Symbol.asyncIterator]();
          }
          if (typeof e[Symbol.iterator] == "function") {
            return e[Symbol.iterator]();
          }
        }
        throw TypeError("Value must be async or sync iterable");
      },
      nh = (e, t) => {
        let { port1: r, port2: o } = new MessageChannel();
        return r.onmessage = ({ data: s }) => e.apply(null, s),
          t.push(o),
          { type: "RemoteCallback", port: o };
      },
      Mn = Vt(Sx()),
      _4 = Vt(Mx()),
      Ve = Vt($x()),
      Tt = Ve.default.Reader,
      Un = Ve.default.Writer,
      j = Ve.default.util,
      Z = Ve.default.roots["ipfs-unixfs"] ||
        (Ve.default.roots["ipfs-unixfs"] = {}),
      HD = Z.Data = (() => {
        function e(t) {
          if (this.blocksizes = [], t) {
            for (var r = Object.keys(t), o = 0; o < r.length; ++o) {
              t[r[o]] != null && (this[r[o]] = t[r[o]]);
            }
          }
        }
        return e.prototype.Type = 0,
          e.prototype.Data = j.newBuffer([]),
          e.prototype.filesize = j.Long ? j.Long.fromBits(0, 0, !0) : 0,
          e.prototype.blocksizes = j.emptyArray,
          e.prototype.hashType = j.Long ? j.Long.fromBits(0, 0, !0) : 0,
          e.prototype.fanout = j.Long ? j.Long.fromBits(0, 0, !0) : 0,
          e.prototype.mode = 0,
          e.prototype.mtime = null,
          e.encode = function (t, r) {
            if (
              r || (r = Un.create()),
                r.uint32(8).int32(t.Type),
                t.Data != null && Object.hasOwnProperty.call(t, "Data") &&
                r.uint32(18).bytes(t.Data),
                t.filesize != null &&
                Object.hasOwnProperty.call(t, "filesize") &&
                r.uint32(24).uint64(t.filesize),
                t.blocksizes != null && t.blocksizes.length
            ) {
              for (var o = 0; o < t.blocksizes.length; ++o) {
                r.uint32(32).uint64(t.blocksizes[o]);
              }
            }
            return t.hashType != null &&
              Object.hasOwnProperty.call(t, "hashType") &&
              r.uint32(40).uint64(t.hashType),
              t.fanout != null && Object.hasOwnProperty.call(t, "fanout") &&
              r.uint32(48).uint64(t.fanout),
              t.mode != null && Object.hasOwnProperty.call(t, "mode") &&
              r.uint32(56).uint32(t.mode),
              t.mtime != null && Object.hasOwnProperty.call(t, "mtime") &&
              Z.UnixTime.encode(t.mtime, r.uint32(66).fork()).ldelim(),
              r;
          },
          e.decode = function (t, r) {
            t instanceof Tt || (t = Tt.create(t));
            for (
              var o = r === void 0 ? t.len : t.pos + r, s = new Z.Data();
              t.pos < o;
            ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  s.Type = t.int32();
                  break;
                case 2:
                  s.Data = t.bytes();
                  break;
                case 3:
                  s.filesize = t.uint64();
                  break;
                case 4:
                  if (
                    s.blocksizes && s.blocksizes.length || (s.blocksizes = []),
                      (i & 7) == 2
                  ) {
                    for (var l = t.uint32() + t.pos; t.pos < l;) {
                      s.blocksizes.push(t.uint64());
                    }
                  } else s.blocksizes.push(t.uint64());
                  break;
                case 5:
                  s.hashType = t.uint64();
                  break;
                case 6:
                  s.fanout = t.uint64();
                  break;
                case 7:
                  s.mode = t.uint32();
                  break;
                case 8:
                  s.mtime = Z.UnixTime.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(i & 7);
                  break;
              }
            }
            if (!s.hasOwnProperty("Type")) {
              throw j.ProtocolError("missing required 'Type'", { instance: s });
            }
            return s;
          },
          e.fromObject = function (t) {
            if (t instanceof Z.Data) return t;
            var r = new Z.Data();
            switch (t.Type) {
              case "Raw":
              case 0:
                r.Type = 0;
                break;
              case "Directory":
              case 1:
                r.Type = 1;
                break;
              case "File":
              case 2:
                r.Type = 2;
                break;
              case "Metadata":
              case 3:
                r.Type = 3;
                break;
              case "Symlink":
              case 4:
                r.Type = 4;
                break;
              case "HAMTShard":
              case 5:
                r.Type = 5;
                break;
            }
            if (
              t.Data != null && (typeof t.Data == "string"
                ? j.base64.decode(
                  t.Data,
                  r.Data = j.newBuffer(j.base64.length(t.Data)),
                  0,
                )
                : t.Data.length && (r.Data = t.Data)),
                t.filesize != null && (j.Long
                  ? (r.filesize = j.Long.fromValue(t.filesize)).unsigned = !0
                  : typeof t.filesize == "string"
                  ? r.filesize = parseInt(t.filesize, 10)
                  : typeof t.filesize == "number"
                  ? r.filesize = t.filesize
                  : typeof t.filesize == "object" &&
                    (r.filesize = new j.LongBits(
                      t.filesize.low >>> 0,
                      t.filesize.high >>> 0,
                    ).toNumber(!0))),
                t.blocksizes
            ) {
              if (!Array.isArray(t.blocksizes)) {
                throw TypeError(".Data.blocksizes: array expected");
              }
              r.blocksizes = [];
              for (var o = 0; o < t.blocksizes.length; ++o) {
                j.Long
                  ? (r.blocksizes[o] = j.Long.fromValue(t.blocksizes[o]))
                    .unsigned = !0 : typeof t.blocksizes[o] == "string"
                  ? r.blocksizes[o] = parseInt(t.blocksizes[o], 10)
                  : typeof t.blocksizes[o] == "number"
                  ? r.blocksizes[o] = t.blocksizes[o]
                  : typeof t.blocksizes[o] == "object" &&
                    (r.blocksizes[o] = new j.LongBits(
                      t.blocksizes[o].low >>> 0,
                      t.blocksizes[o].high >>> 0,
                    ).toNumber(!0));
              }
            }
            if (
              t.hashType != null && (j.Long
                ? (r.hashType = j.Long.fromValue(t.hashType)).unsigned = !0
                : typeof t.hashType == "string"
                ? r.hashType = parseInt(t.hashType, 10)
                : typeof t.hashType == "number"
                ? r.hashType = t.hashType
                : typeof t.hashType == "object" &&
                  (r.hashType = new j.LongBits(
                    t.hashType.low >>> 0,
                    t.hashType.high >>> 0,
                  ).toNumber(!0))),
                t.fanout != null && (j.Long
                  ? (r.fanout = j.Long.fromValue(t.fanout)).unsigned = !0
                  : typeof t.fanout == "string"
                  ? r.fanout = parseInt(t.fanout, 10)
                  : typeof t.fanout == "number"
                  ? r.fanout = t.fanout
                  : typeof t.fanout == "object" &&
                    (r.fanout = new j.LongBits(
                      t.fanout.low >>> 0,
                      t.fanout.high >>> 0,
                    ).toNumber(!0))),
                t.mode != null && (r.mode = t.mode >>> 0),
                t.mtime != null
            ) {
              if (typeof t.mtime != "object") {
                throw TypeError(".Data.mtime: object expected");
              }
              r.mtime = Z.UnixTime.fromObject(t.mtime);
            }
            return r;
          },
          e.toObject = function (t, r) {
            r || (r = {});
            var o = {};
            if ((r.arrays || r.defaults) && (o.blocksizes = []), r.defaults) {
              if (
                o.Type = r.enums === String ? "Raw" : 0,
                  r.bytes === String
                    ? o.Data = ""
                    : (o.Data = [],
                      r.bytes !== Array && (o.Data = j.newBuffer(o.Data))),
                  j.Long
              ) {
                var s = new j.Long(0, 0, !0);
                o.filesize = r.longs === String ? s.toString()
                : r.longs === Number ? s.toNumber() : s;
              } else o.filesize = r.longs === String ? "0" : 0;
              if (j.Long) {
                var s = new j.Long(0, 0, !0);
                o.hashType = r.longs === String ? s.toString()
                : r.longs === Number ? s.toNumber() : s;
              } else o.hashType = r.longs === String ? "0" : 0;
              if (j.Long) {
                var s = new j.Long(0, 0, !0);
                o.fanout = r.longs === String
                  ? s.toString()
                  : r.longs === Number
                  ? s.toNumber()
                  : s;
              } else o.fanout = r.longs === String ? "0" : 0;
              o.mode = 0, o.mtime = null;
            }
            if (
              t.Type != null && t.hasOwnProperty("Type") &&
              (o.Type = r.enums === String ? Z.Data.DataType[t.Type] : t.Type),
                t.Data != null && t.hasOwnProperty("Data") &&
                (o.Data = r.bytes === String
                  ? j.base64.encode(t.Data, 0, t.Data.length)
                  : r.bytes === Array
                  ? Array.prototype.slice.call(t.Data)
                  : t.Data),
                t.filesize != null && t.hasOwnProperty("filesize") &&
                (typeof t.filesize == "number"
                  ? o.filesize = r.longs === String
                    ? String(t.filesize)
                    : t.filesize
                  : o.filesize = r.longs === String
                    ? j.Long.prototype.toString.call(t.filesize)
                    : r.longs === Number
                    ? new j.LongBits(
                      t.filesize.low >>> 0,
                      t.filesize.high >>> 0,
                    ).toNumber(!0)
                    : t.filesize),
                t.blocksizes && t.blocksizes.length
            ) {
              o.blocksizes = [];
              for (var i = 0; i < t.blocksizes.length; ++i) {
                typeof t.blocksizes[i] == "number"
                  ? o.blocksizes[i] = r.longs === String
                    ? String(t.blocksizes[i])
                    : t.blocksizes[i]
                  : o.blocksizes[i] = r.longs === String
                    ? j.Long.prototype.toString.call(t.blocksizes[i])
                    : r.longs === Number
                    ? new j.LongBits(
                      t.blocksizes[i].low >>> 0,
                      t.blocksizes[i].high >>> 0,
                    ).toNumber(!0)
                    : t.blocksizes[i];
              }
            }
            return t.hashType != null && t.hasOwnProperty("hashType") &&
              (typeof t.hashType == "number"
                ? o.hashType = r.longs === String
                  ? String(t.hashType)
                  : t.hashType
                : o.hashType = r.longs === String
                  ? j.Long.prototype.toString.call(t.hashType)
                  : r.longs === Number
                  ? new j.LongBits(t.hashType.low >>> 0, t.hashType.high >>> 0)
                    .toNumber(!0)
                  : t.hashType),
              t.fanout != null && t.hasOwnProperty("fanout") &&
              (typeof t.fanout == "number"
                ? o.fanout = r.longs === String ? String(t.fanout) : t.fanout
                : o.fanout = r.longs === String
                  ? j.Long.prototype.toString.call(t.fanout)
                  : r.longs === Number
                  ? new j.LongBits(t.fanout.low >>> 0, t.fanout.high >>> 0)
                    .toNumber(!0)
                  : t.fanout),
              t.mode != null && t.hasOwnProperty("mode") && (o.mode = t.mode),
              t.mtime != null && t.hasOwnProperty("mtime") &&
              (o.mtime = Z.UnixTime.toObject(t.mtime, r)),
              o;
          },
          e.prototype.toJSON = function () {
            return this.constructor.toObject(
              this,
              Ve.default.util.toJSONOptions,
            );
          },
          e.DataType = function () {
            let t = {}, r = Object.create(t);
            return r[t[0] = "Raw"] = 0,
              r[t[1] = "Directory"] = 1,
              r[t[2] = "File"] = 2,
              r[t[3] = "Metadata"] = 3,
              r[t[4] = "Symlink"] = 4,
              r[t[5] = "HAMTShard"] = 5,
              r;
          }(),
          e;
      })(),
      GD = Z.UnixTime = (() => {
        function e(t) {
          if (t) {
            for (
              var r = Object.keys(t), o = 0; o < r.length; ++o
            ) {
              t[r[o]] != null && (this[r[o]] = t[r[o]]);
            }
          }
        }
        return e.prototype.Seconds = j.Long ? j.Long.fromBits(0, 0, !1) : 0,
          e.prototype.FractionalNanoseconds = 0,
          e.encode = function (t, r) {
            return r || (r = Un.create()),
              r.uint32(8).int64(t.Seconds),
              t.FractionalNanoseconds != null &&
              Object.hasOwnProperty.call(t, "FractionalNanoseconds") &&
              r.uint32(21).fixed32(t.FractionalNanoseconds),
              r;
          },
          e.decode = function (t, r) {
            t instanceof Tt || (t = Tt.create(t));
            for (
              var o = r === void 0 ? t.len : t.pos + r, s = new Z.UnixTime();
              t.pos < o;
            ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  s.Seconds = t.int64();
                  break;
                case 2:
                  s.FractionalNanoseconds = t.fixed32();
                  break;
                default:
                  t.skipType(i & 7);
                  break;
              }
            }
            if (!s.hasOwnProperty("Seconds")) {
              throw j.ProtocolError("missing required 'Seconds'", {
                instance: s,
              });
            }
            return s;
          },
          e.fromObject = function (t) {
            if (t instanceof Z.UnixTime) return t;
            var r = new Z.UnixTime();
            return t.Seconds != null &&
              (j.Long
                ? (r.Seconds = j.Long.fromValue(t.Seconds)).unsigned = !1
                : typeof t.Seconds == "string"
                ? r.Seconds = parseInt(t.Seconds, 10)
                : typeof t.Seconds == "number"
                ? r.Seconds = t.Seconds
                : typeof t.Seconds == "object" &&
                  (r.Seconds = new j.LongBits(
                    t.Seconds.low >>> 0,
                    t.Seconds.high >>> 0,
                  ).toNumber())),
              t.FractionalNanoseconds != null &&
              (r.FractionalNanoseconds = t.FractionalNanoseconds >>> 0),
              r;
          },
          e.toObject = function (t, r) {
            r || (r = {});
            var o = {};
            if (r.defaults) {
              if (j.Long) {
                var s = new j.Long(0, 0, !1);
                o.Seconds = r.longs === String ? s.toString()
                : r.longs === Number ? s.toNumber() : s;
              } else o.Seconds = r.longs === String ? "0" : 0;
              o.FractionalNanoseconds = 0;
            }
            return t.Seconds != null && t.hasOwnProperty("Seconds") &&
              (typeof t.Seconds == "number"
                ? o.Seconds = r.longs === String ? String(t.Seconds) : t.Seconds
                : o.Seconds = r.longs === String
                  ? j.Long.prototype.toString.call(t.Seconds)
                  : r.longs === Number
                  ? new j.LongBits(t.Seconds.low >>> 0, t.Seconds.high >>> 0)
                    .toNumber()
                  : t.Seconds),
              t.FractionalNanoseconds != null &&
              t.hasOwnProperty("FractionalNanoseconds") &&
              (o.FractionalNanoseconds = t.FractionalNanoseconds),
              o;
          },
          e.prototype.toJSON = function () {
            return this.constructor.toObject(
              this,
              Ve.default.util.toJSONOptions,
            );
          },
          e;
      })(),
      qD = Z.Metadata = (() => {
        function e(t) {
          if (t) {
            for (
              var r = Object.keys(t), o = 0; o < r.length; ++o
            ) {
              t[r[o]] != null && (this[r[o]] = t[r[o]]);
            }
          }
        }
        return e.prototype.MimeType = "",
          e.encode = function (t, r) {
            return r || (r = Un.create()),
              t.MimeType != null && Object.hasOwnProperty.call(t, "MimeType") &&
              r.uint32(10).string(t.MimeType),
              r;
          },
          e.decode = function (t, r) {
            t instanceof Tt || (t = Tt.create(t));
            for (
              var o = r === void 0 ? t.len : t.pos + r, s = new Z.Metadata();
              t.pos < o;
            ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  s.MimeType = t.string();
                  break;
                default:
                  t.skipType(i & 7);
                  break;
              }
            }
            return s;
          },
          e.fromObject = function (t) {
            if (t instanceof Z.Metadata) return t;
            var r = new Z.Metadata();
            return t.MimeType != null && (r.MimeType = String(t.MimeType)), r;
          },
          e.toObject = function (t, r) {
            r || (r = {});
            var o = {};
            return r.defaults && (o.MimeType = ""),
              t.MimeType != null && t.hasOwnProperty("MimeType") &&
              (o.MimeType = t.MimeType),
              o;
          },
          e.prototype.toJSON = function () {
            return this.constructor.toObject(
              this,
              Ve.default.util.toJSONOptions,
            );
          },
          e;
      })(),
      KD = parseInt("0644", 8),
      JD = parseInt("0755", 8);
    Zt = class extends Qr {
      constructor(e) {
        super("core", ["add", "addAll", "cat", "ls"], e);
      }
    };
    Zt.prototype.addAll = async function* (e, t = {}) {
      let { timeout: r, signal: o } = t,
        s = [...t.transfer || []],
        i = t.progress ? nh(t.progress, s) : void 0,
        l = await this.remote.addAll({
          ...t,
          input: V4(e, s),
          progress: void 0,
          progressCallback: i,
          transfer: s,
          timeout: r,
          signal: o,
        });
      yield* Sn(l.data, ih);
    };
    Zt.prototype.add = async function (e, t = {}) {
      let { timeout: r, signal: o } = t,
        s = [...t.transfer || []],
        i = t.progress ? nh(t.progress, s) : void 0,
        l = await this.remote.add({
          ...t,
          input: $4(e, s),
          progress: void 0,
          progressCallback: i,
          transfer: s,
          timeout: r,
          signal: o,
        });
      return ih(l.data);
    };
    Zt.prototype.cat = async function* (e, t = {}) {
      let r = H.asCID(e),
        o = r ? Ae(r) : e,
        s = await this.remote.cat({ ...t, path: o });
      yield* Sn(s.data, F4);
    };
    Zt.prototype.ls = async function* (e, t = {}) {
      let r = H.asCID(e),
        o = r ? Ae(r) : e,
        s = await this.remote.ls({ ...t, path: o });
      yield* Sn(s.data, N4);
    };
    ih = ({ path: e, cid: t, mode: r, mtime: o, size: s }) => ({
      path: e,
      cid: Re(t),
      mode: r,
      mtime: o,
      size: s,
    }),
      N4 = (
        { name: e, path: t, size: r, cid: o, type: s, mode: i, mtime: l },
      ) => ({
        cid: Re(o),
        type: s,
        name: e,
        path: t,
        mode: i,
        mtime: l,
        size: r,
      }),
      F4 = (e) => e,
      $4 = (e, t) => {
        if (
          e instanceof Blob || typeof e == "string" ||
          e instanceof ArrayBuffer || ArrayBuffer.isView(e)
        ) {
          return e;
        }
        {
          let r = An(e);
          if (r) return Ee(r, In, t);
          let o = Rn(e);
          if (o) return Ee(o, wt, t);
          let s = En(e);
          if (s) return Ee((0, Mn.default)(s), wt, t);
          let i = Bn(e);
          if (i) return jn(i, t);
          throw TypeError("Unexpected input: " + typeof e);
        }
      },
      V4 = (e, t) => {
        let r = An(e);
        if (r) return Ee(r, In, t);
        let o = Rn(e);
        if (o) return Ee(o, wt, t);
        let s = En(e);
        if (s) return Ee((0, Mn.default)(s), wt, t);
        throw TypeError("Unexpected input: " + typeof e);
      },
      wt = (e, t) => {
        if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) return e;
        if (e instanceof Blob) return { path: "", content: e };
        if (typeof e == "string") return { path: "", content: e };
        {
          let r = Bn(e);
          if (r) return jn(r, t);
          throw TypeError("Unexpected input: " + typeof e);
        }
      },
      In = (e, t) => {
        if (typeof e == "number") {
          throw TypeError("Iterable of numbers is not supported");
        }
        if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) return e;
        if (e instanceof Blob) return { path: "", content: e };
        if (typeof e == "string") return { path: "", content: e };
        {
          let r = Bn(e);
          if (r) return jn(r, t);
          throw TypeError("Unexpected input: " + typeof e);
        }
      },
      jn = ({ path: e, mode: t, mtime: r, content: o }, s) => {
        let i = { path: e, mode: D4(t), mtime: z4(r) };
        return o && (i.content = W4(o, s)), i;
      },
      W4 = (e, t) => {
        if (e == null) return "";
        if (
          e instanceof ArrayBuffer || ArrayBuffer.isView(e) ||
          e instanceof Blob || typeof e == "string"
        ) {
          return e;
        }
        {
          let r = An(e);
          if (r) return Ee(r, In, t);
          let o = Rn(e);
          if (o) return Ee(o, wt, t);
          let s = En(e);
          if (s) return Ee((0, Mn.default)(s), wt, t);
          throw TypeError("Unexpected input: " + typeof e);
        }
      },
      An = (e) => {
        let t = e;
        return t && typeof t[Symbol.iterator] == "function" ? t : null;
      },
      Rn = (e) => {
        let t = e;
        return t && typeof t[Symbol.asyncIterator] == "function" ? t : null;
      },
      En = (e) => e && typeof e.getReader == "function" ? e : null,
      Bn = (e) => typeof e == "object" && (e.path || e.content) ? e : null;
    Qt();
    ah = class extends Qr {
      constructor(e) {
        super("files", ["stat"], e);
      }
    };
    ah.prototype.stat = async function (e, t = {}) {
      let { size: r, hash: o, withLocal: s, timeout: i, signal: l } = t,
        { stat: c } = await this.remote.stat({
          path: H4(e),
          size: r,
          hash: o,
          withLocal: s,
          timeout: i,
          signal: l,
        });
      return G4(c);
    };
    H4 = (e) => H.asCID(e) ? `/ipfs/${e.toString()}` : e.toString(),
      G4 = (e) => ({ ...e, cid: Re(e.cid) }),
      er = class extends Zt {
        constructor(e) {
          super(e);
          this.transport = e,
            this.dag = new Xr(this.transport),
            this.files = new ah(this.transport),
            this.block = new Yt(this.transport);
        }
        static attach(e, t) {
          e.transport.connect(t);
        }
        static detached() {
          return new er(new Xt(void 0));
        }
        static from(e) {
          return new er(new Xt(e));
        }
      },
      lh = Vt(v4()),
      q4 = ["https://ipfs.io/ipfs/:hash", "https://cf-ipfs.com/ipfs/:hash"];
    Jr();
    sh();
    Tn();
    Gr();
    Ln = (e) =>
      new Uint8Array((e.match(/.{1,2}/g) || []).map((t) => parseInt(t, 16)));
    Yr = (e) => {
      typeof e == "string" ? console.log(e)
      : typeof e == "object" ? console.table({ msg: e }) : console.log(e);
    };
    uh = lh.default, tr = T4.default;
  });
var dh,
  X4,
  _n,
  We,
  Y4,
  Zr = d(() => {
    _r();
    On();
    ({ workerSrc: dh, forceNormalWorker: X4 } = xt("ipfsWorker.js"));
    if (typeof SharedWorker != "undefined" && !X4) {
      _n = new SharedWorker(dh).port;
    } else {
      let e = new Worker(dh),
        { port1: t, port2: r } = new MessageChannel(),
        o = { clientInit: !0, port: t };
      e.postMessage(o, [t]), _n = r;
    }
    We = er.from(_n),
      Y4 = async (e, t) => {
        let r = t || {}, o = We.cat(e, r), s = Kr(await tr(o));
        return Hr(s);
      };
    globalThis.ipfsClient = We;
    globalThis.ipfsCat = Y4;
  });
var Z4,
  Dn,
  hh = d(() => {
    Z4 = {
      "@babel/runtime/helpers/jsx":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/jsx.js",
      "@babel/runtime/helpers/esm/jsx":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/jsx.js",
      "@babel/runtime/helpers/objectSpread2":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectSpread2.js",
      "@babel/runtime/helpers/esm/objectSpread2":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectSpread2.js",
      "@babel/runtime/helpers/typeof":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/typeof.js",
      "@babel/runtime/helpers/esm/typeof":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/typeof.js",
      "@babel/runtime/helpers/wrapRegExp":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/wrapRegExp.js",
      "@babel/runtime/helpers/esm/wrapRegExp":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/wrapRegExp.js",
      "@babel/runtime/helpers/asyncIterator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/asyncIterator.js",
      "@babel/runtime/helpers/esm/asyncIterator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/asyncIterator.js",
      "@babel/runtime/helpers/AwaitValue":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/AwaitValue.js",
      "@babel/runtime/helpers/esm/AwaitValue":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/AwaitValue.js",
      "@babel/runtime/helpers/AsyncGenerator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/AsyncGenerator.js",
      "@babel/runtime/helpers/esm/AsyncGenerator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/AsyncGenerator.js",
      "@babel/runtime/helpers/wrapAsyncGenerator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/wrapAsyncGenerator.js",
      "@babel/runtime/helpers/esm/wrapAsyncGenerator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/wrapAsyncGenerator.js",
      "@babel/runtime/helpers/awaitAsyncGenerator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/awaitAsyncGenerator.js",
      "@babel/runtime/helpers/esm/awaitAsyncGenerator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/awaitAsyncGenerator.js",
      "@babel/runtime/helpers/asyncGeneratorDelegate":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/asyncGeneratorDelegate.js",
      "@babel/runtime/helpers/esm/asyncGeneratorDelegate":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/asyncGeneratorDelegate.js",
      "@babel/runtime/helpers/asyncToGenerator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/asyncToGenerator.js",
      "@babel/runtime/helpers/esm/asyncToGenerator":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/asyncToGenerator.js",
      "@babel/runtime/helpers/classCallCheck":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classCallCheck.js",
      "@babel/runtime/helpers/esm/classCallCheck":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classCallCheck.js",
      "@babel/runtime/helpers/createClass":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/createClass.js",
      "@babel/runtime/helpers/esm/createClass":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/createClass.js",
      "@babel/runtime/helpers/defineEnumerableProperties":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/defineEnumerableProperties.js",
      "@babel/runtime/helpers/esm/defineEnumerableProperties":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/defineEnumerableProperties.js",
      "@babel/runtime/helpers/defaults":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/defaults.js",
      "@babel/runtime/helpers/esm/defaults":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/defaults.js",
      "@babel/runtime/helpers/defineProperty":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/defineProperty.js",
      "@babel/runtime/helpers/esm/defineProperty":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/defineProperty.js",
      "@babel/runtime/helpers/extends":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js",
      "@babel/runtime/helpers/esm/extends":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/extends.js",
      "@babel/runtime/helpers/objectSpread":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectSpread.js",
      "@babel/runtime/helpers/esm/objectSpread":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectSpread.js",
      "@babel/runtime/helpers/inherits":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/inherits.js",
      "@babel/runtime/helpers/esm/inherits":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/inherits.js",
      "@babel/runtime/helpers/inheritsLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/inheritsLoose.js",
      "@babel/runtime/helpers/esm/inheritsLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/inheritsLoose.js",
      "@babel/runtime/helpers/getPrototypeOf":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/getPrototypeOf.js",
      "@babel/runtime/helpers/esm/getPrototypeOf":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/getPrototypeOf.js",
      "@babel/runtime/helpers/setPrototypeOf":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/setPrototypeOf.js",
      "@babel/runtime/helpers/esm/setPrototypeOf":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/setPrototypeOf.js",
      "@babel/runtime/helpers/isNativeReflectConstruct":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/isNativeReflectConstruct.js",
      "@babel/runtime/helpers/esm/isNativeReflectConstruct":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/isNativeReflectConstruct.js",
      "@babel/runtime/helpers/construct":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/construct.js",
      "@babel/runtime/helpers/esm/construct":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/construct.js",
      "@babel/runtime/helpers/isNativeFunction":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/isNativeFunction.js",
      "@babel/runtime/helpers/esm/isNativeFunction":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/isNativeFunction.js",
      "@babel/runtime/helpers/wrapNativeSuper":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/wrapNativeSuper.js",
      "@babel/runtime/helpers/esm/wrapNativeSuper":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/wrapNativeSuper.js",
      "@babel/runtime/helpers/instanceof":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/instanceof.js",
      "@babel/runtime/helpers/esm/instanceof":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/instanceof.js",
      "@babel/runtime/helpers/interopRequireDefault":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/interopRequireDefault.js",
      "@babel/runtime/helpers/esm/interopRequireDefault":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/interopRequireDefault.js",
      "@babel/runtime/helpers/interopRequireWildcard":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/interopRequireWildcard.js",
      "@babel/runtime/helpers/esm/interopRequireWildcard":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/interopRequireWildcard.js",
      "@babel/runtime/helpers/newArrowCheck":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/newArrowCheck.js",
      "@babel/runtime/helpers/esm/newArrowCheck":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/newArrowCheck.js",
      "@babel/runtime/helpers/objectDestructuringEmpty":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectDestructuringEmpty.js",
      "@babel/runtime/helpers/esm/objectDestructuringEmpty":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectDestructuringEmpty.js",
      "@babel/runtime/helpers/objectWithoutPropertiesLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js",
      "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutPropertiesLoose.js",
      "@babel/runtime/helpers/objectWithoutProperties":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutProperties.js",
      "@babel/runtime/helpers/esm/objectWithoutProperties":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/objectWithoutProperties.js",
      "@babel/runtime/helpers/assertThisInitialized":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/assertThisInitialized.js",
      "@babel/runtime/helpers/esm/assertThisInitialized":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/assertThisInitialized.js",
      "@babel/runtime/helpers/possibleConstructorReturn":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/possibleConstructorReturn.js",
      "@babel/runtime/helpers/esm/possibleConstructorReturn":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/possibleConstructorReturn.js",
      "@babel/runtime/helpers/createSuper":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/createSuper.js",
      "@babel/runtime/helpers/esm/createSuper":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/createSuper.js",
      "@babel/runtime/helpers/superPropBase":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/superPropBase.js",
      "@babel/runtime/helpers/esm/superPropBase":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/superPropBase.js",
      "@babel/runtime/helpers/get":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/get.js",
      "@babel/runtime/helpers/esm/get":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/get.js",
      "@babel/runtime/helpers/set":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/set.js",
      "@babel/runtime/helpers/esm/set":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/set.js",
      "@babel/runtime/helpers/taggedTemplateLiteral":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/taggedTemplateLiteral.js",
      "@babel/runtime/helpers/esm/taggedTemplateLiteral":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/taggedTemplateLiteral.js",
      "@babel/runtime/helpers/taggedTemplateLiteralLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/taggedTemplateLiteralLoose.js",
      "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/taggedTemplateLiteralLoose.js",
      "@babel/runtime/helpers/readOnlyError":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/readOnlyError.js",
      "@babel/runtime/helpers/esm/readOnlyError":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/readOnlyError.js",
      "@babel/runtime/helpers/writeOnlyError":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/writeOnlyError.js",
      "@babel/runtime/helpers/esm/writeOnlyError":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/writeOnlyError.js",
      "@babel/runtime/helpers/classNameTDZError":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classNameTDZError.js",
      "@babel/runtime/helpers/esm/classNameTDZError":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classNameTDZError.js",
      "@babel/runtime/helpers/temporalUndefined":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/temporalUndefined.js",
      "@babel/runtime/helpers/esm/temporalUndefined":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/temporalUndefined.js",
      "@babel/runtime/helpers/tdz":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/tdz.js",
      "@babel/runtime/helpers/esm/tdz":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/tdz.js",
      "@babel/runtime/helpers/temporalRef":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/temporalRef.js",
      "@babel/runtime/helpers/esm/temporalRef":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/temporalRef.js",
      "@babel/runtime/helpers/slicedToArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/slicedToArray.js",
      "@babel/runtime/helpers/esm/slicedToArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/slicedToArray.js",
      "@babel/runtime/helpers/slicedToArrayLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/slicedToArrayLoose.js",
      "@babel/runtime/helpers/esm/slicedToArrayLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/slicedToArrayLoose.js",
      "@babel/runtime/helpers/toArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/toArray.js",
      "@babel/runtime/helpers/esm/toArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/toArray.js",
      "@babel/runtime/helpers/toConsumableArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/toConsumableArray.js",
      "@babel/runtime/helpers/esm/toConsumableArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/toConsumableArray.js",
      "@babel/runtime/helpers/arrayWithoutHoles":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/arrayWithoutHoles.js",
      "@babel/runtime/helpers/esm/arrayWithoutHoles":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/arrayWithoutHoles.js",
      "@babel/runtime/helpers/arrayWithHoles":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/arrayWithHoles.js",
      "@babel/runtime/helpers/esm/arrayWithHoles":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/arrayWithHoles.js",
      "@babel/runtime/helpers/maybeArrayLike":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/maybeArrayLike.js",
      "@babel/runtime/helpers/esm/maybeArrayLike":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/maybeArrayLike.js",
      "@babel/runtime/helpers/iterableToArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/iterableToArray.js",
      "@babel/runtime/helpers/esm/iterableToArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/iterableToArray.js",
      "@babel/runtime/helpers/iterableToArrayLimit":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/iterableToArrayLimit.js",
      "@babel/runtime/helpers/esm/iterableToArrayLimit":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/iterableToArrayLimit.js",
      "@babel/runtime/helpers/iterableToArrayLimitLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/iterableToArrayLimitLoose.js",
      "@babel/runtime/helpers/esm/iterableToArrayLimitLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/iterableToArrayLimitLoose.js",
      "@babel/runtime/helpers/unsupportedIterableToArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/unsupportedIterableToArray.js",
      "@babel/runtime/helpers/esm/unsupportedIterableToArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/unsupportedIterableToArray.js",
      "@babel/runtime/helpers/arrayLikeToArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/arrayLikeToArray.js",
      "@babel/runtime/helpers/esm/arrayLikeToArray":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/arrayLikeToArray.js",
      "@babel/runtime/helpers/nonIterableSpread":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/nonIterableSpread.js",
      "@babel/runtime/helpers/esm/nonIterableSpread":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/nonIterableSpread.js",
      "@babel/runtime/helpers/nonIterableRest":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/nonIterableRest.js",
      "@babel/runtime/helpers/esm/nonIterableRest":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/nonIterableRest.js",
      "@babel/runtime/helpers/createForOfIteratorHelper":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/createForOfIteratorHelper.js",
      "@babel/runtime/helpers/esm/createForOfIteratorHelper":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/createForOfIteratorHelper.js",
      "@babel/runtime/helpers/createForOfIteratorHelperLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/createForOfIteratorHelperLoose.js",
      "@babel/runtime/helpers/esm/createForOfIteratorHelperLoose":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/createForOfIteratorHelperLoose.js",
      "@babel/runtime/helpers/skipFirstGeneratorNext":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/skipFirstGeneratorNext.js",
      "@babel/runtime/helpers/esm/skipFirstGeneratorNext":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/skipFirstGeneratorNext.js",
      "@babel/runtime/helpers/toPrimitive":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/toPrimitive.js",
      "@babel/runtime/helpers/esm/toPrimitive":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/toPrimitive.js",
      "@babel/runtime/helpers/toPropertyKey":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/toPropertyKey.js",
      "@babel/runtime/helpers/esm/toPropertyKey":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/toPropertyKey.js",
      "@babel/runtime/helpers/initializerWarningHelper":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/initializerWarningHelper.js",
      "@babel/runtime/helpers/esm/initializerWarningHelper":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/initializerWarningHelper.js",
      "@babel/runtime/helpers/initializerDefineProperty":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/initializerDefineProperty.js",
      "@babel/runtime/helpers/esm/initializerDefineProperty":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/initializerDefineProperty.js",
      "@babel/runtime/helpers/applyDecoratedDescriptor":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/applyDecoratedDescriptor.js",
      "@babel/runtime/helpers/esm/applyDecoratedDescriptor":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/applyDecoratedDescriptor.js",
      "@babel/runtime/helpers/classPrivateFieldLooseKey":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldLooseKey.js",
      "@babel/runtime/helpers/esm/classPrivateFieldLooseKey":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldLooseKey.js",
      "@babel/runtime/helpers/classPrivateFieldLooseBase":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldLooseBase.js",
      "@babel/runtime/helpers/esm/classPrivateFieldLooseBase":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldLooseBase.js",
      "@babel/runtime/helpers/classPrivateFieldGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldGet.js",
      "@babel/runtime/helpers/esm/classPrivateFieldGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldGet.js",
      "@babel/runtime/helpers/classPrivateFieldSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldSet.js",
      "@babel/runtime/helpers/esm/classPrivateFieldSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldSet.js",
      "@babel/runtime/helpers/classPrivateFieldDestructureSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldDestructureSet.js",
      "@babel/runtime/helpers/esm/classPrivateFieldDestructureSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldDestructureSet.js",
      "@babel/runtime/helpers/classExtractFieldDescriptor":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classExtractFieldDescriptor.js",
      "@babel/runtime/helpers/esm/classExtractFieldDescriptor":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classExtractFieldDescriptor.js",
      "@babel/runtime/helpers/classStaticPrivateFieldSpecGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateFieldSpecGet.js",
      "@babel/runtime/helpers/esm/classStaticPrivateFieldSpecGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateFieldSpecGet.js",
      "@babel/runtime/helpers/classStaticPrivateFieldSpecSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateFieldSpecSet.js",
      "@babel/runtime/helpers/esm/classStaticPrivateFieldSpecSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateFieldSpecSet.js",
      "@babel/runtime/helpers/classStaticPrivateMethodGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateMethodGet.js",
      "@babel/runtime/helpers/esm/classStaticPrivateMethodGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateMethodGet.js",
      "@babel/runtime/helpers/classStaticPrivateMethodSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateMethodSet.js",
      "@babel/runtime/helpers/esm/classStaticPrivateMethodSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateMethodSet.js",
      "@babel/runtime/helpers/classApplyDescriptorGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classApplyDescriptorGet.js",
      "@babel/runtime/helpers/esm/classApplyDescriptorGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classApplyDescriptorGet.js",
      "@babel/runtime/helpers/classApplyDescriptorSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classApplyDescriptorSet.js",
      "@babel/runtime/helpers/esm/classApplyDescriptorSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classApplyDescriptorSet.js",
      "@babel/runtime/helpers/classApplyDescriptorDestructureSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classApplyDescriptorDestructureSet.js",
      "@babel/runtime/helpers/esm/classApplyDescriptorDestructureSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classApplyDescriptorDestructureSet.js",
      "@babel/runtime/helpers/classStaticPrivateFieldDestructureSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateFieldDestructureSet.js",
      "@babel/runtime/helpers/esm/classStaticPrivateFieldDestructureSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classStaticPrivateFieldDestructureSet.js",
      "@babel/runtime/helpers/classCheckPrivateStaticAccess":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classCheckPrivateStaticAccess.js",
      "@babel/runtime/helpers/esm/classCheckPrivateStaticAccess":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classCheckPrivateStaticAccess.js",
      "@babel/runtime/helpers/classCheckPrivateStaticFieldDescriptor":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classCheckPrivateStaticFieldDescriptor.js",
      "@babel/runtime/helpers/esm/classCheckPrivateStaticFieldDescriptor":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classCheckPrivateStaticFieldDescriptor.js",
      "@babel/runtime/helpers/decorate":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/decorate.js",
      "@babel/runtime/helpers/esm/decorate":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/decorate.js",
      "@babel/runtime/helpers/classPrivateMethodGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateMethodGet.js",
      "@babel/runtime/helpers/esm/classPrivateMethodGet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateMethodGet.js",
      "@babel/runtime/helpers/checkPrivateRedeclaration":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/checkPrivateRedeclaration.js",
      "@babel/runtime/helpers/esm/checkPrivateRedeclaration":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/checkPrivateRedeclaration.js",
      "@babel/runtime/helpers/classPrivateFieldInitSpec":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldInitSpec.js",
      "@babel/runtime/helpers/esm/classPrivateFieldInitSpec":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateFieldInitSpec.js",
      "@babel/runtime/helpers/classPrivateMethodInitSpec":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateMethodInitSpec.js",
      "@babel/runtime/helpers/esm/classPrivateMethodInitSpec":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateMethodInitSpec.js",
      "@babel/runtime/helpers/classPrivateMethodSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateMethodSet.js",
      "@babel/runtime/helpers/esm/classPrivateMethodSet":
        "https://unpkg.com/@babel/runtime@7.15.4/helpers/esm/classPrivateMethodSet.js",
      "@emotion/cache":
        "https://unpkg.com/@emotion/cache@11.5.0/dist/emotion-cache.browser.esm.js",
      "@emotion/hash":
        "https://unpkg.com/@emotion/hash@0.8.0/dist/hash.browser.esm.js",
      "@emotion/is-prop-valid":
        "https://unpkg.com/@emotion/is-prop-valid@1.1.0/dist/emotion-is-prop-valid.browser.esm.js",
      "@emotion/memoize":
        "https://unpkg.com/@emotion/memoize@0.7.5/dist/emotion-memoize.browser.esm.js",
      "@emotion/react":
        "https://unpkg.com/@emotion/react@11.5.0/dist/emotion-react.browser.esm.js",
      "@emotion/serialize":
        "https://unpkg.com/@emotion/serialize@1.0.2/dist/emotion-serialize.browser.esm.js",
      "@emotion/sheet":
        "https://unpkg.com/@emotion/sheet@1.0.3/dist/emotion-sheet.browser.esm.js",
      "@emotion/styled":
        "https://unpkg.com/@emotion/styled@11.3.0/dist/emotion-styled.browser.esm.js",
      "@emotion/utils":
        "https://unpkg.com/@emotion/utils@1.0.0/dist/emotion-utils.browser.esm.js",
      "@emotion/unitless":
        "https://unpkg.com/@emotion/unitless@0.7.5/dist/unitless.browser.esm.js",
      "@emotion/weak-memoize":
        "https://unpkg.com/@emotion/weak-memoize@0.2.5/dist/weak-memoize.browser.esm.js",
      "prop-types": "https://esm.sh/prop-types",
      "framer-motion":
        "https://unpkg.com/framer-motion@5.0.0/dist/es/index.mjs",
      framesync: "https://unpkg.com/framesync@6.0.1/dist/es/index.mjs",
      "hey-listen": "https://unpkg.com/hey-listen@1.0.8/dist/hey-listen.es.js",
      "hoist-non-react-statics": "https://esm.sh/hoist-non-react-statics",
      popmotion: "https://unpkg.com/popmotion@10.0.2/dist/es/index.mjs",
      react: "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs",
      "react-dom":
        "https://unpkg.com/@spike.land/esm@0.0.32/dist/react-dom.mjs",
      "react-is": "https://unpkg.com/@spike.land/esm@0.0.32/dist/react-is.mjs",
      "react-transition-group": "https://esm.sh/react-transition-group",
      "react/jsx-runtime": "https://esm.sh/react/jsx-runtime",
      "@spike.land/renderer":
        "https://unpkg.com/@spike.land/renderer@0.0.32/dist/renderer.js",
      "style-value-types":
        "https://unpkg.com/style-value-types@5.0.0/dist/es/index.mjs",
      stylis: "https://unpkg.com/stylis@4.0.10/dist/stylis.mjs",
      "@spike.land/qrious":
        "https://unpkg.com/@spike.land/qrious@0.0.32/dist/QRious.mjs",
      tslib: "https://unpkg.com/tslib@2.3.1/tslib.es6.js",
      "@spike.land/smart-monaco-editor":
        "https://unpkg.com/@spike.land/smart-monaco-editor@0.0.32/dist/editor.mjs",
      "@zedvision/swm":
        "https://unpkg.com/@zedvision/swm@4.0.0/public/swm-esm.js",
      "uuid/": "https://unpkg.com/uuid@8.3.2/dist/esm-browser/",
      "@spike.land/shadb":
        "https://unpkg.com/@spike.land/shadb@0.0.32/dist/shaDB.mjs",
      "@spike.land/code":
        "https://unpkg.com/@spike.land/code@0.0.32/js/reactLoader.mjs",
      comlink: "https://unpkg.com/comlink@4.3.1/dist/esm/comlink.mjs",
      "@spike.land/ipfs":
        "https://unpkg.com/@spike.land/ipfs@0.0.32/dist/ipfs.client.mjs",
      "workbox-window":
        "https://unpkg.com/workbox-window@6.3.0/build/workbox-window.prod.es5.mjs",
    }, Dn = { imports: Z4 };
  });
var bh = {};
lt(bh, { getEditorHTML: () => t5, getHtml: () => e5 });
function e5({ html: e, css: t }) {
  let r = e.indexOf("<title>"), o = e.indexOf("</title>");
  return `<!DOCTYPE html>
<html lang="en"> 
<head profile="http://www.w3.org/2005/10/profile">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="Description" content="Generated with spike.land">
<title>${r < o && r >= -1 ? e.slice(r, o) : "(code).spike.land :)"}</title>
<link rel="modulepreload" href="./app.js">  
<link rel="icon" type="image/png" href="https://code.spike.land/zed-icon-big.png" />
<link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
<script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"><\/script>
<script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"><\/script>
<script crossorigin src="https://unpkg.com/react-is@17.0.2/umd/react-is.production.min.js"><\/script>
<script async src="https://unpkg.com/es-module-shims@1.3.0/dist/es-module-shims.js"><\/script>
<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: white;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
${t}</style>
</head>
<body>
<a class="skip-link" href="#zbody">Jump to the page</a>
<main id="zbody">
  ${e}
</main>
<script>window.process = {env: {NODE_ENV:"production" }}<\/script>
<script type="importmap-shim">
${JSON.stringify(Dn)}
<\/script>
<script type="module-shim">
  import App from './app.js';
  import {jsx} from "@emotion/react"        
  ReactDOM.render(jsx(App),document.getElementById('zbody'));
<\/script>
</body>
</html>
`;
}
var t5,
  gh = d(() => {
    hh();
    t5 = () =>
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <link rel="icon" type="image/png" href="https://code.spike.land/zed-icon-big.png" />
  <script async src="https://unpkg.com/es-module-shims@1.3.0/dist/es-module-shims.js"><\/script>
  <script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"><\/script>
  <script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"><\/script>
  <script crossorigin src="https://unpkg.com/react-is@17.0.2/umd/react-is.production.min.js"><\/script>
<title>Instant React Editor</title>
</head>
<body>
<script>window.process = {env: {NODE_ENV:"production" }}<\/script>
<script type="importmap-shim">
${JSON.stringify(Dn)}
<\/script>
<script type="module-shim">
import {edit} from "https://code.spike.land/js/data.mjs"
try{
  edit(location.pathname.slice(42, 52));
}catch(error){
  fetch("https://code.spike.land/error", {method: "POST",  body: JSON.stringify({error})})
}
<\/script>
</body>
</html>`;
  });
var zn = {};
lt(zn, { shareItAsHtml: () => r5 });
async function o5(e) {
  try {
    let t = await tr(We.addAll(e));
    return console.log("REES: ", t),
      t.map((r) => {
        let o = r.cid.toString();
        return { path: r.path, CID: o };
      });
  } catch (t) {
    console.error({ error: t });
  }
}
var r5,
  Nn = d(() => {
    Or();
    Zr();
    r5 = async ({ transpiled: e, code: t, html: r }) => {
      var f;
      let o = String(
          (f = window.document.getElementById("zbody")) == null
            ? void 0
            : f.getAttribute("class"),
        ),
        s = "";
      if (window.document.querySelector("head > style[data-emotion=css]")) {
        try {
          s = Array.from(
            window.document.querySelector("head > style[data-emotion=css]")
              .sheet.cssRules,
          ).map((m) => m.cssText).filter((m) => {
            let h = m.substring(5, 10),
              b = o.indexOf(h) !== -1,
              y = r.indexOf(h) !== -1;
            return b || y;
          }).join(`
  `).replace("#zbody", "body");
        } catch (m) {
          console.error({ e: m });
        }
      }
      if (
        window.document.querySelector("head > style[data-emotion=css-global]")
      ) {
        try {
          s += Array.from(
            window.document.querySelector(
              "head > style[data-emotion=css-global]",
            ).sheet.cssRules,
          ).map((m) => m.cssText).join(`
  `).replace("#zbody", "body");
        } catch (m) {
          console.error({ e: m });
        }
      }
      let { getHtml: c, getEditorHTML: a } = await Promise.resolve().then(
          () => (gh(), bh)
        ),
        n = [
          { path: "/app/index.html", content: c({ html: r, css: s }) },
          { path: "/app/app.js", content: e },
          { path: "/app/app.tsx", content: t },
          { path: "/app/edit/index.html", content: a() },
        ],
        p = await le(JSON.stringify(n)),
        u = await W.get(p, "string");
      if (u === null) {
        let h = (await o5(n)).find((y) => y.path === "app");
        if (typeof h == "undefined") return null;
        u = `https://ipfs.io/ipfs/${h.CID}`;
        let { pathname: b } = new URL(window.location.href);
        (b.endsWith("/edit/") || b.endsWith("/edit")) &&
        history.pushState({}, "", `/ipfs/${h.CID}/edit/`), await W.put(p, u);
      }
      return u;
    };
  });
var vh = io((nz, Vn) => {
  var Ch =
    typeof crypto != "undefined" && crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto) ||
    typeof msCrypto != "undefined" &&
      typeof window.msCrypto.getRandomValues == "function" &&
      msCrypto.getRandomValues.bind(msCrypto);
  Ch
    ? (Fn = new Uint8Array(16),
      Vn.exports = function () {
        return Ch(Fn), Fn;
      })
    : ($n = new Array(16),
      Vn.exports = function () {
        for (var t = 0, r; t < 16; t++) {
          (t & 3) == 0 && (r = Math.random() * 4294967296),
            $n[t] = r >>> ((t & 3) << 3) & 255;
        }
        return $n;
      });
  var Fn, $n;
});
var Ph = io((iz, wh) => {
  var Th = [];
  for (rr = 0; rr < 256; ++rr) Th[rr] = (rr + 256).toString(16).substr(1);
  var rr;
  function s5(e, t) {
    var r = t || 0, o = Th;
    return [
      o[e[r++]],
      o[e[r++]],
      o[e[r++]],
      o[e[r++]],
      "-",
      o[e[r++]],
      o[e[r++]],
      "-",
      o[e[r++]],
      o[e[r++]],
      "-",
      o[e[r++]],
      o[e[r++]],
      "-",
      o[e[r++]],
      o[e[r++]],
      o[e[r++]],
      o[e[r++]],
      o[e[r++]],
      o[e[r++]],
    ].join("");
  }
  wh.exports = s5;
});
var Mh = io((az, Sh) => {
  var n5 = vh(), i5 = Ph();
  function a5(e, t, r) {
    var o = t && r || 0;
    typeof e == "string" &&
    (t = e === "binary" ? new Array(16) : null, e = null), e = e || {};
    var s = e.random || (e.rng || n5)();
    if (s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, t) {
      for (var i = 0; i < 16; ++i) {
        t[o + i] = s[i];
      }
    }
    return t || i5(s);
  }
  Sh.exports = a5;
});
async function eo() {
  if (He) return He;
  let e = await W.get("uuid", "string");
  if (!e) {
    let r = await (await fetch("https://spike.land/register")).json();
    return He || (He = r.uuid, await W.put("uuid", r.uuid), r.uuid);
  }
  return e;
}
async function Ih() {
  if (to) return to;
  let e = await l5();
  return e.rootUrl ? e : (to = e[0], to);
}
async function Wn(e) {
  let t = e ||
      (window.location.href.endsWith("/edit/")
        ? window.location.href.slice(0, -5)
        : window.location.href.slice(0, -4)),
    s = {
      code: await (await fetch(t + "app.tsx")).text(),
      url: t,
      transpiled: "",
      html: "",
    };
  return console.log({ ret: s }), s;
}
async function jh() {
  let e = await Ih();
  if (e.rootUrl) return Wn(e.rootUrl);
  let t = await W.get(e, "string"), r;
  try {
    r = await W.get(t, "json");
  } catch (i) {
    return { code: r, transpiled: null, html: null };
  }
  return r != null
    ? {
      code: await W.get(r.code, "string") || await Hn(),
      transpiled: await W.get(r.transpiled, "string") || "",
      html: await W.get(r.html, "string") || "",
    }
    : {
      code: await W.get(r, "string") || await Hn(),
      transpiled: null,
      html: null,
    };
}
function Hn() {
  return fetch("./js/examples/rca.tsx").then((e) => e.text());
}
var Uh,
  He,
  l5,
  to,
  or,
  ro,
  sr,
  oo = d(() => {
    Or();
    Uh = mb(Mh());
    Zr();
    l5 = async () => {
      He = await eo();
      let e = await W.get(He, "json"), t = null;
      if (e && e.signal) return e.signal;
      if (typeof e == "string" || e === null || !e.list) {
        let r = (0, Uh.default)();
        return await W.put(
          He,
          JSON.stringify({ ...e, list: [r], [r]: { lastOpen: Date.now() } }),
        ),
          t !== null && await W.put(r, t),
          [r];
      }
      return t !== null && await W.put(e.list[0], t), e.list;
    };
    or = { code: "", html: null, transpiled: null, url: null },
      ro = { code: "", html: null, transpiled: null },
      sr = async (e, t) => {
        let { code: r, html: o, transpiled: s } = e;
        if (ro.code = r || await Hn(), e.i > t) return;
        if (e.code !== ro.code) return null;
        if (ro.code === or.code && or.url !== null) return or.url;
        ro.code = e.code,
          (async () => {
            let m = (await We.add(r, { onlyHash: !0 })).cid.toString(),
              h = await eo(),
              b = `/add/${m}`;
            fetch(`https://code.spike.land${b}`, {
              method: "POST",
              headers: { UID: h },
              body: r,
            });
          })();
        let { shareItAsHtml: l } = await Promise.resolve().then(
            () => (Nn(), zn)
          ),
          c = l({ code: r, html: o, transpiled: s });
        if (e.i > t) return;
        let a = await c, n = await Ih();
        if (e.i > t) return;
        e.url = a;
        let p = {
            url: await le(a),
            code: await le(r),
            html: await le(o),
            transpiled: await le(s),
          },
          u = await le(JSON.stringify(p));
        return await W.put(u, JSON.stringify(p)),
          r && await W.put(p.code, r),
          o && await W.put(p.html, o),
          s && await W.put(p.transpiled, s),
          await W.put(n, u),
          Object.assign(or, { html: o, code: r, transpiled: s, url: a }),
          or;
      };
  });
var Oh = {};
lt(Oh, { getZkey: () => h5, sendSignalToQrCode: () => f5 });
async function f5(e) {
  let { searchParams: t } = new URL(window.location.href),
    r = t.get("signalToQr") || "";
  if (
    !(r.length === 8 && [...r].filter((l) => l < "0" || l > "f").length === 0)
  ) {
    return;
  }
  await sr(e);
  let { sendSignal: s } = await Promise.resolve().then(() => (On(), mh)),
    i = `https://code.spike.land/${r}`;
  await s(i, {
    rootUrl: `${e.url}edit/`,
    signals: { onChange: "url", onLogout: "url" },
  });
}
async function h5(e) {
  let t = await eo(), r = await le(t), o = await le(e + r), s = await le(e + t);
  return `${e}${r}${o}${s}`;
}
var _h = d(() => {
  oo();
  Or();
});
async function yh(e) {
  let { DraggableWindow: t, jsx: r, render: o } = await Promise.resolve().then(
      () => (we(), ud)
    ),
    s = async () => {
      let { shareItAsHtml: l } = await Promise.resolve().then(() => (Nn(), zn)),
        c = await l({ code: e.code, transpiled: e.transpiled, html: e.html });
      open(c + "/");
    },
    i = window.document.getElementById("preview");
  if (!i) {
    let l = window.document.createElement("div");
    window.document.body.appendChild(l), i = l;
  }
  o(
    r(t, {
      onShare: s,
      session: e,
      onRestore: () => {
        let { monaco: l } = window, c = l.Uri.parse("file:///main.tsx");
        l.editor.getModel(c).setValue(e.code);
      },
      position: e.mode === "window" ? "fixed" : "absolute",
    }),
    i,
  );
}
async function xh() {
  let e = await import(
      "https://unpkg.com/@zedvision/swm@4.0.0/public/swm-esm.js"
    ),
    t = e.WindowManager ? e.WindowManager : window.WindowManager.WindowManager,
    r = new t({ backgroundWindow: "green" });
  r.snap(!1);
  let o = r.createWindow({
    titlebarHeight: "42px",
    width: 720,
    closable: !1,
    borderRadius: "0px",
    overflow: "hidden",
    backgroundWindow: "#1e1e1e",
    height: "100vh",
    title: "app.tsx",
  });
  if (
    o.content.innerHTML =
      `<div style="min-height: 20px;  min-width: 600px; height: ${
        kh()
          ? "2000px"
          : "calc(100%)"
      }; width:100%; display: block; overflow: hidden;" id="editor"></div>`,
      !kh()
  ) {
    try {
      let s = window.document.querySelector(
        "body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > section",
      );
      s !== null && (s.style.overflow = "");
    } catch (s) {
      console.error({ e: s });
    }
  }
  (function (s) {
    if (typeof s == "undefined") throw new Error("window is undefined");
    var i = "!",
      l = function () {
        s.location.href += "#",
          s.setTimeout(function () {
            s.location.href += "!";
          }, 50);
      };
    s.onhashchange = function () {
      s.location.hash !== i && (s.location.hash = i);
    },
      s.onload = function () {
        l(),
          document.body.onkeydown = function (c) {
            var a = c.target.nodeName.toLowerCase();
            c.which === 8 && a !== "input" && a !== "textarea" &&
            c.preventDefault(), c.stopPropagation();
          };
      };
  })(window);
}
function kh() {
  return typeof window == "undefined"
    ? !1
    : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent,
    );
}
oo();
_r();
import { wrap as Ah } from "https://unpkg.com/comlink@4.3.1/dist/esm/comlink.mjs";
var { workerSrc: Rh, forceNormalWorker: p5 } = xt("transpile.worker.js"),
  Pt = null;
async function nr(e) {
  return Pt === null ? (await c5(), nr(e)) : await Pt(e);
}
async function c5() {
  if (p5 || typeof SharedWorker == "undefined") {
    let t = new Worker(Rh),
      { port1: r, port2: o } = new MessageChannel(),
      s = { comlinkInit: !0, port: r };
    return t.postMessage(s, [r]), Pt = await Ah(o), Pt;
  }
  let e = new SharedWorker(Rh);
  return e.port.start(), Pt = await Ah(e.port), Pt;
}
_r();
import { wrap as Eh } from "https://unpkg.com/comlink@4.3.1/dist/esm/comlink.mjs";
var { workerSrc: Bh, forceNormalWorker: u5 } = xt("prettierWorker.js"),
  at = null;
async function ir(e) {
  return at === null ? (await m5(), ir(e)) : await at(e);
}
async function m5() {
  if (
    at && console.log("INIT INIT"), u5 || typeof SharedWorker == "undefined"
  ) {
    let t = new Worker(Bh),
      { port1: r, port2: o } = new MessageChannel(),
      s = { comlinkInit: !0, port: r };
    return t.postMessage(s, [r]), at = await Eh(o), at;
  }
  let e = new SharedWorker(Bh);
  return e.port.start(), at = await Eh(e.port), at;
}
import b5 from "https://unpkg.com/@spike.land/esm@0.0.32/dist/react.mjs";
var d5 = async () => {
    let e = (s, i = []) =>
        typeof window == "undefined"
          ? {}
          : window.document.head.querySelector(`script[src="${s}"]`) &&
              window || new Promise(function (l, c) {
            let a = window.document.createElement("script");
            a.src = s,
              a.async = "async",
              a.type = "application/javascript",
              a.onload = () => {
                i.length === 0 && l(window);
                let n = {};
                i.forEach((p) => Object.assign(n, window[p])), l(n);
              },
              a.onerror = c,
              window.document.head.appendChild(a);
          }),
      t = "https://unpkg.com/monaco-editor@0.29.1/min/vs",
      { require: r } = await e(`${t}/loader.js`);
    return r.config({ paths: { vs: t } }),
      await new Promise((s) => r(["vs/editor/editor.main"], (i) => s(i)));
  },
  Lh = async (
    { onChange: e, code: t, language: r, container: o, options: s },
  ) => {
    let i = await d5(),
      l = i.Uri.parse(
        r === "typescript" ? "file:///main.tsx" : "file:///main.html",
      ),
      c = () => i.editor.createModel(t, r, l),
      n = (() => {
        try {
          let u = i.editor.getModel();
          return u || c();
        } catch (u) {
          return c();
        }
      })();
    if (!o) return;
    let p = {
      monaco: i,
      editor: i.editor.create(o, {
        formatOnType: !1,
        scrollbar: {
          horizontal: "hidden",
          verticalHasArrows: !0,
          verticalScrollbarSize: 20,
        },
        minimap: {
          enabled: !0,
          side: "right",
          size: "fit",
          showSlider: "always",
        },
        folding: !0,
        glyphMargin: !1,
        wordWrap: "off",
        mouseWheelZoom: !1,
        wordWrapColumn: 80,
        useTabStops: !1,
        dragAndDrop: !0,
        disableLayerHinting: !0,
        formatOnPaste: !1,
        showUnused: !0,
        automaticLayout: !0,
        scrollBeyondLastLine: !1,
        autoIndent: "full",
        accessibilitySupport: "off",
        autoClosingQuotes: "beforeWhitespace",
        padding: { bottom: 300 },
        lineNumbers: "on",
        autoClosingBrackets: "beforeWhitespace",
        autoClosingOvertype: "auto",
        suggest: {},
        codeLens: !0,
        autoSurround: "languageDefined",
        trimAutoWhitespace: !1,
        codeActionsOnSaveTimeout: 100,
        model: n,
        value: t,
        language: r,
        theme: "vs-dark",
        ...s,
      }),
    };
    if (
      p.editor.onDidChangeModelContent(() => e(p.editor.getValue())),
        p.monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSuggestionDiagnostics: !0,
          noSemanticValidation: !0,
          noSyntaxValidation: !0,
        }),
        r === "typescript"
    ) {
      let f = [{
        name: "react",
        url: "https://unpkg.com/@types/react@17.0.33/index.d.ts",
        depend: ["global", "csstype", "react-dom", "prop-types"],
      }, {
        name: "react/jsx-dev-runtime",
        url: "https://unpkg.com/@types/react@17.0.33/jsx-dev-runtime.d.ts",
        depend: ["global", "csstype", "react-dom", "prop-types"],
      }, {
        name: "react-exp  ",
        url: "https://unpkg.com/@types/react@17.0.33/experimental.d.ts",
        depend: [],
      }, {
        name: "global",
        url: "https://unpkg.com/@types/react@17.0.30/global.d.ts",
        depend: [],
      }, {
        name: "prop-types",
        url: "https://unpkg.com/@types/prop-types@15.7.3/index.d.ts",
        depend: [],
      }, {
        name: "react-dom",
        url: "https://unpkg.com/@types/react-dom@17.0.10/index.d.ts",
        depend: [],
      }, {
        name: "csstype",
        url: "https://unpkg.com/csstype@3.0.9/index.d.ts",
        depend: [],
      }, {
        name: "@emotion/styled/base.d.ts",
        url: "https://unpkg.com/@emotion/styled@11.3.0/types/base.d.ts",
        depend: ["@emotion/react", "@emotion/serialize", "react"],
      }, {
        name: "@emotion/styled/index.d.ts",
        url: "https://unpkg.com/@emotion/styled@11.3.0/types/index.d.ts",
        depend: ["@emotion/react", "@emotion/serialize", "react"],
      }, {
        name: "@emotion/cache/index.d.ts",
        url: "https://unpkg.com/@emotion/cache@11.4.0/types/index.d.ts",
        depend: ["@emotion/utils"],
      }, {
        name: "@emotion/react/index.d.ts",
        url: "https://unpkg.com/@emotion/react@11.5.0/types/index.d.ts",
        depend: ["@emotion/cache"],
      }, {
        name: "@emotion/react/jsx-namespace.d.ts",
        url: "https://unpkg.com/@emotion/react@11.5.0/types/jsx-namespace.d.ts",
        depend: ["@emotion/utils", "csstype"],
      }, {
        name: "@emotion/react/css-prop.d.ts",
        url: "https://unpkg.com/@emotion/react@11.5.0/types/css-prop.d.ts",
        depend: ["@emotion/utils", "csstype"],
      }, {
        name: "@emotion/react/helper.d.ts",
        url: "https://unpkg.com/@emotion/react@11.5.0/types/helper.d.ts",
        depend: ["@emotion/utils", "csstype"],
      }, {
        name: "@emotion/react/theming.d.ts",
        url: "https://unpkg.com/@emotion/react@11.5.0/types/theming.d.ts",
        depend: ["@emotion/utils", "csstype"],
      }, {
        name: "@emotion/serialize/index.d.ts",
        url: "https://unpkg.com/@emotion/serialize@1.0.2/types/index.d.ts",
        depend: ["@emotion/utils", "csstype"],
      }, {
        name: "@emotion/utils/index.d.ts",
        url: "https://unpkg.com/@emotion/utils@1.0.0/types/index.d.ts",
        depend: [],
      }, {
        name: "framer-motion",
        url:
          "https://unpkg.com/framer-motion@5.0.0-beta.35/dist/framer-motion.d.ts",
        depend: ["popmotion"],
      }, {
        name: "popmotion",
        url: "https://unpkg.com/popmotion@9.4.1/lib/index.d.ts",
      }].map(({ name: m, url: h }) =>
        (async () =>
          p.monaco.languages.typescript.typescriptDefaults.addExtraLib(
            await (await fetch(h)).text(),
            m.includes("@")
              ? `file:///node_modules/${m}`
              : `file:///node_modules/@types/${m}/index.d.ts`,
          ))()
      );
      return p.monaco.languages.typescript.typescriptDefaults
        .setCompilerOptions({
          target: 99,
          allowNonTsExtensions: !0,
          allowUmdGlobalAccess: !0,
          strict: !0,
          allowJs: !0,
          noEmitOnError: !0,
          allowSyntheticDefaultImports: !0,
          moduleResolution: 2,
          module: 99,
          noEmit: !0,
          typeRoots: ["node_modules/@types"],
          jsx: 5,
          esModuleInterop: !0,
        }),
        await Promise.all(f),
        p.monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSuggestionDiagnostics: !1,
          noSemanticValidation: !1,
          noSyntaxValidation: !1,
        }),
        p;
    }
  };
Zr();
oo();
we();
import { jsx as g5 } from "https://unpkg.com/@emotion/react@11.5.0/dist/emotion-react.browser.esm.js";
function y5() {
  return {
    i: 0,
    unmount: () => {},
    errorText: "",
    lastErrors: 0,
    children: b5.Fragment,
    setChild: () => {},
    div: document.createElement("div"),
    html: "",
    url: "",
    transpiled: "",
    code: "",
  };
}
async function Az(e = "window", t = "") {
  let r = y5(), o;
  try {
    console.log("Runner!");
    let { pathname: a } = new URL(window.location.href);
    if (
      e === "window" && await xh(),
        r.mode = e,
        t && (r.code = await ir(t), r.transpiled = await nr(r.code)),
        !t
    ) {
      try {
        let { code: f, transpiled: m, html: h } =
          a.endsWith("/edit/") || a.endsWith("/edit")
            ? await Wn(void 0)
            : await jh();
        r.code = await ir(f),
          r.transpiled = await nr(r.code) || m,
          r.div.innerHTML = h;
      } catch (f) {
        console.error({ e: f, message: "couldn't start" });
        return;
      }
    }
    let n = window.document.getElementById("editor");
    if (n === null) return "No editor window";
    let p = Lh({
      language: "typescript",
      container: n,
      code: r.code,
      onChange: (f) => s(f),
    });
    try {
      await yh(r);
    } catch (f) {
      throw f;
    }
    await c(r.transpiled, r.i),
      await p,
      o = window.monaco,
      o.editor.createModel(
        "define module './hash.js';",
        "typescript",
        o.Uri.parse("file:///refs.d.ts"),
      ),
      r.url || await sr(r, r.i);
    let { sendSignalToQrCode: u } = await Promise.resolve().then(
      () => (_h(), Oh)
    );
    await u(r);
  } catch (a) {
    throw a;
  }
  async function s(a) {
    r.errorText = "", r.i++;
    let n = r.i;
    try {
      let p = await ir(a), u = await nr(p), f = !1;
      if (u.length && r.lastErrors < 2) {
        if (n < r.i) return;
        f = await c(u, n);
      }
      if (r.i > n) return;
      let m = await i(p);
      if (r.i > n) return;
      if (
        f &&
        m.push({
          messageText: "Error while starting the app. Check the console!",
        }),
          m.length && console.log({ err: m }),
          r.lastErrors && m.length === 0 && c(u, n),
          r.lastErrors = m.length,
          m.length === 0 && u.length
      ) {
        if (r.i > n) return;
        r.code = p, sr(r, n);
      } else {
        if (console.log({ code: a, transpiled: u }), r.i > n) return;
        if (p.length < 1e3 && r.code.length < 1e3) {
          let { diff: h } = await import("../modules/diff.js"),
            b = await h(r.code, p);
          if (b.c.length <= 3) {
            r.lastErrors = 0;
            return;
          }
          if (b.c.length == 4) {
            r.lastErrors = 0, o.editor.setTheme("hc-black");
            return;
          }
        }
        m && m[0] && m[0].messageText &&
          console.error(m[0].messageText.toString());
        return;
      }
      o.editor.setTheme("vs-dark");
    } catch (p) {
      if (p.message) {
        r.errorText = p.message,
          (async () => {
            let h = `/error/${
              (await We.add(a, { onlyHash: !0 })).cid.toString()
            }`;
            fetch(`https://code.spike.land${h}`, { method: "POST", body: a });
          })();
        return;
      }
      o.editor.setTheme("vs-light"),
        setTimeout(() => {
          o.editor.setTheme("hc-black");
        }, 50),
        console.error(p);
    }
  }
  async function i() {
    if (!o) {
      return [{ messageText: "Error with the error checking. Try to reload!" }];
    }
    let a = "file:///main.tsx",
      n = o.Uri.parse(a),
      p = o.editor.getModel(n),
      f = await (await o.languages.typescript.getTypeScriptWorker())(p.uri),
      m = f.getSemanticDiagnostics(a),
      h = f.getCompilerOptionsDiagnostics(a),
      b = f.getSyntacticDiagnostics(a);
    return [...await Promise.race([m, h, b])];
  }
  async function l(a) {
    let n = e === "window" ? a.replace("body{", "#zbody{") : a,
      p = x5(n),
      u = await import(p);
    return URL.revokeObjectURL(p), g5(u.default);
  }
  async function c(a, n) {
    if (r.i > n) return !1;
    r.html = "", r.transpiled = "";
    let p = !1;
    if (typeof a != "string" || a === "") return p = !0, p;
    let u;
    try {
      u = await l(a);
    } catch (m) {
      return console.error({ error: m, message: "error in rendering" }), !1;
    }
    let f = document.createElement("div");
    return ReactDOM.render(u, f),
      r.div = f,
      f.innerHTML &&
      (r.transpiled = a,
        r.html = f.innerHTML,
        r.children = u,
        r.setChild((m) => [...m, r.children])),
      !f.innerHTML;
  }
}
function x5(e) {
  let t = new Blob([e], { type: "application/javascript" });
  return URL.createObjectURL(t);
}
export { Az as run, cd as render, D as jsx, Xs as DraggableWindow };
/** @license MUI v5.0.0-alpha.53
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.0.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.0.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.0.6
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=dev.mjs.map
