importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
importScripts("https://unpkg.com/@babel/standalone@7.12.11/babel.min.js");
importScripts("https://unpkg.com/react@17.0.1/umd/react.production.min.js");

const searchRegExp = /import/gi;
const from = / from '/gi;
const replaceWith = " from 'https://cdn.skypack.dev/";

const transform = (code, hasToReport) => {
  try {
    const safeCode = `
    ` + code.replaceAll(
      from,
      replaceWith,
    );

    const transformed = Babel.transform(
      safeCode,
      {
        compact: false,
        comments: false,
        plugins: [],
        presets: [
          "react",
          ["typescript", { isTSX: true, allExtensions: true }],
        ],
      },
    ).code;
    return transformed;
  } catch (e) {
    hasToReport && console.error(e);
    return "";
  }
};

Comlink.expose(transform);
