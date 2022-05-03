// export type { Children } from "preact/compat";

import * as react from "preact/compat";

import { Fragment, jsx, jsxs } from "preact/compat/jsx-runtime";
import { createPortal, hydrate, render } from "preact/compat";
import renderToString from "preact-render-to-string";
export { render };

export { createPortal };
export { hydrate };
export { renderToString };
// export const createRoot = (container) => ({
//   render: (App) => render(App, container),
// });
// export const hydrateRoot = (container, App) => hydrate(App, container);

export { Fragment };
export { jsx };
export { jsxs };
export const { createContext } = react;
export const { useDebugValue } = react;

export const { useState } = react;
export const { useRef } = react;
export const { useContext } = react;

export const { useLayoutEffect } = react;

export const { useEffect } = react;

export const { useReducer } = react;
export const { useCallback } = react;
export const { forwardRef } = react;
export const { createElement } = react;
export const { createFactory } = react;
export const { createRef } = react;
export const { Component } = react;
export const { Suspense } = react;
export const { isValidElement } = react;
export const { memo } = react;
export const { useImperativeHandle } = react;
export const { Children } = react;

export const { lazy } = react;
export const { useMemo } = react;

export const { cloneElement } = react;

export default react;

window.React = { ...react, StrictMode: Fragment };
