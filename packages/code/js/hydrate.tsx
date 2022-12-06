import { StrictMode } from "react";

import { unmountComponentAtNode } from "react-dom";
import type { Root } from "react-dom/client";

import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import type { ICodeSession } from "session";
import { md5 } from "./md5";

export { md5 };

let r: Root;
let root: HTMLDivElement;

export const hydrate = async (codeSpace: string, sess?: ICodeSession) => {
  let rootEl: HTMLDivElement;
  let App;
  if (sess) {
    rootEl = document.createElement("div");
    const { i, css, html, transpiled } = sess;
    rootEl.innerHTML = `<style>${css}</style>${html}`.split(md5(transpiled)).join(`css`);
    document.body.appendChild(rootEl);
    App = (await import(`${location.origin}/live/${codeSpace}/index.js/${i}`)).default;
  } else {
    rootEl = document.getElementById(codeSpace + "-css") as unknown as HTMLDivElement;
    const rt = document.getElementById("root");
    const i = rt?.getAttribute("data-i") || 1;
    App = (await import(`${location.origin}/live/${codeSpace}/index.js/${i}`)).default;
  }

  if (root) unmountComponentAtNode(root);
  root = rootEl;
  if (r) r.unmount();
  r = createRoot(rootEl);
  r.render(
    <StrictMode>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <div role="alert">
            <div>Oh, no!!!</div>
            <pre>{error.message}</pre>
          </div>
        )}
      >
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );

  // root = newRoot;
};
