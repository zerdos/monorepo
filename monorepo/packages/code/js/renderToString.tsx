/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import type { FC } from "react";
import { renderToString } from "react-dom";

export const renderFromString = async (transpiled: string, i: number) => {
  const App = await getApp(transpiled);

  await wait(100);
  const _tmp = getHtmlAndCss(App, i);
  await wait(100);
  const { html, css } = getHtmlAndCss(App, i + 100);

  console.log(css);
  return {
    App,
    html,
    css,
  };
};

export const getHtmlAndCss = (MyComponent: FC, i: number) => {
  const salt = `cache${i}`;
  const key = salt + "css";
  const cache = createCache({ key });
  let cssText = "";

  cache.sheet.insert = (rule: string) => {
    cssText += rule;
  };

  const markup = renderToString(
    <CacheProvider value={cache} prepend={true}>
      <>
        <>{salt}</>
        <App key={salt}></App>
        <span
          css={`
        content: "${salt}";
        `}
        >
          {salt}
        </span>
      </>
    </CacheProvider>,
  );

  return {
    html: markup.replaceAll(new RegExp(salt, "g"), ""),
    css: cssText.replaceAll(new RegExp(salt, "g"), ""),
  };
};

async function getApp(transpiled: string, mode = "window") {
  const codeToHydrate = mode === "window"
    ? transpiled.replace("body{", "#zbody{")
    : transpiled;

  const objectUrl = createJsBlob(
    codeToHydrate,
  );

  const App = (await import(objectUrl)).default;

  URL.revokeObjectURL(objectUrl);

  return App;

  /**
   * @param {BlobPart} code
   */
  function createJsBlob(code: string) {
    const blob = new Blob([code], { type: "application/javascript" });

    return URL.createObjectURL(blob);
  }
}

export async function wait(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
