!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
      exports,
      require("react"),
      require("react-dom"),
      require("@emotion/react"),
    )
    : "function" == typeof define && define.amd
    ? define(["exports", "react", "react-dom", "@emotion/react"], t)
    : t((e || self).emotionReactRenderer = {}, e.react, e.reactDom, e.react);
}(this, function (e, t, r, o) {
  e.renderEmotion = function (e, n) {
    return r.render(o.jsx(t.Fragment, { children: e }), n);
  };
});
//# sourceMappingURL=index.umd.js.map
