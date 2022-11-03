import type { EmotionCache } from "@emotion/cache";
import EmotionReact from "@emotion/react";
import type { FC } from "react";
import type {} from "react-dom";
import type EA from "@emotion/react";
import type { createRoot as Cr, hydrateRoot as Hr } from "react-dom/client";
import type * as JSX from "react/jsx-dev-runtime";

declare global {
  const apps: { [key: string]: FC<{ appId: string }> };
  const eCaches: { [key: string]: EmotionCache };

  export namespace emotionReact {
    export const jsx: typeof EmotionReact.jsx;
    export const css: typeof EmotionReact.css;
  }

  export namespace ReactJSXRuntime {
    export const jsx: typeof EmotionReact.jsx;
  }
  export namespace ReactDOMClient {
    export const createRoot: typeof Cr;
    export const hydrateRoot: typeof Hr;
  }
}
