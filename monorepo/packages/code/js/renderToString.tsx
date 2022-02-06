import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import renderToString from "preact-render-to-string";
import { h } from "preact";
/** @jsx h */

export const getHtmlAndCss = (MyComponent: () => JSX.Element) => {
  const key = "css";
  const cache = createCache({ key });
  let cssText = "";
  cache.sheet.insert = (rule) => {
    cssText += rule;
  };

  globalThis.renderToString = true;

  const markup = renderToString(
    <CacheProvider value={cache}>
      <MyComponent />
    </CacheProvider>,
  );

  globalThis.renderToString = false;

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="UTF-8">
        <style>${cssText}</style>
    </head>
    <body>
        <div>${markup}</div>
    </body>
  </html>
`;

  return {
    html: markup,
    css: cssText,
  };
};
