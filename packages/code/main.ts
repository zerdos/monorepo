const loadApp = async () => {
  // if (window.startedWithNativeEsmModules) return;
  // console.log("... with ES-module-shims!");
  // await import("es-module-shims/wasm");
  // const {importShim} = window;
  // await importShim("./ws.mjs");
  console.log("hello");
};

setTimeout(loadApp, 200);
//  Object.assign(window,{"startState":{"i":13849,"transpiled":"import { jsx as jsX } from \"@emotion/react\";\nimport { css } from \"@emotion/react\";\nimport { motion } from \"framer-motion\";\nimport { useState } from \"react\";\nexport default () => {\n  const [counter, setCounter] = useState(1);\n  return /* @__PURE__ */ jsX(\"header\", {\n    css: css`\n        background-color: green;\n        min-height: 99%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        font-size: calc(10px + 2vmin);\n        color: white;\n        text-align: center;\n        overflow: hidden;\n      `\n  }, /* @__PURE__ */ jsX(motion.div, {\n    animate: { rotate: 721, fontSize: \"100px\" },\n    initial: { rotate: 0, fontSize: \"300px\" },\n    transition: {\n      repeat: 1,\n      duration: 2,\n      delay: 0,\n      repeatType: \"mirror\"\n    }\n  }, /* @__PURE__ */ jsX(\"div\", {\n    onClick: () => setCounter((x) => counter + 1)\n  }, \"\\u{1F525}\")), /* @__PURE__ */ jsX(\"p\", null, \"Hey!\", counter, \" Try to modify \", /* @__PURE__ */ jsX(\"code\", null, \"this\"), \" page.\"), /* @__PURE__ */ jsX(\"a\", {\n    css: css`\n          color: #61dafb;\n          cursor: pointer;\n        `,\n    href: \".\"\n  }, \"Open theeee editor.\"));\n};\n","code":"import { css } from '@emotion/react';\nimport { motion } from 'framer-motion';\nimport { useState } from 'react';\n\nexport default () => {\n  const [counter, setCounter] = useState(1);\n\n  return (\n    <header\n      css={css`\n        background-color: green;\n        min-height: 99%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        font-size: calc(10px + 2vmin);\n        color: white;\n        text-align: center;\n        overflow: hidden;\n      `}>\n      <motion.div\n        animate={{ rotate: 721, fontSize: '100px' }}\n        initial={{ rotate: 0, fontSize: '300px' }}\n        transition={{\n          repeat: 1,\n          duration: 2,\n          delay: 0,\n          repeatType: 'mirror',\n        }}>\n        <div onClick={() => setCounter((x) => counter + 1)}>🔥</div>\n      </motion.div>\n      <p>\n        Hey!{counter} Try to modify <code>this</code> page.\n      </p>\n      <a\n        css={css`\n          color: #61dafb;\n          cursor: pointer;\n        `}\n        href=\".\">\n        Open theeee editor.\n      </a>\n    </header>\n  );\n};\n","html":"<header class=\"css-1ghkoq9\">\n  <div style=\"font-size: 300px; transform: none\" data-projection-id=\"18\">\n    <div>🔥</div>\n  </div>\n  <p>Hey!1 Try to modify <code>this</code> page.</p>\n  <a href=\".\" class=\"css-1i0wymj\">Open theeee editor.</a>\n</header>\n","css":".css-1ghkoq9 {\n  background-color: green;\n  min-height: 99%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n  text-align: center;\n  overflow: hidden;\n}\n.css-1i0wymj {\n  color: #61dafb;\n  cursor: pointer;\n}\n"},"codeSpace":"coder","address":""});
