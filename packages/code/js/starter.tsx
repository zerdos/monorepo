import React, { FC, ReactNode} from "react";
import { createPortal } from "react-dom";
// import { prefixer } from 'stylis';

import type {} from "react-dom/next";
import "es-module-shims"

// import {CacheProvider, createCache } from "@emotion/react"
import { mST, hashCode } from "./session";
import ErrorBoundary from "./ErrorBoundary";

Object.assign(window, {});

const modalRoot = document.getElementById("root")!;

export class Root extends React.Component<{children: ReactNode}> {
  #el: HTMLDivElement;
  children: ReactNode
  constructor(props: {children: ReactNode}) {
     super(props);
    
     this.#el=document.createElement("div");
     this.#el.style.height='100%';

  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.innerHTML ="";
    modalRoot.append(this.#el);
  }

  componentWillUnmount() {
    modalRoot.appendChild(this.#el);
  }

  render() {
    return createPortal(
      this.props.children,
      this.#el,
    );
  }
}


const orig = location.origin.includes("localhost") ? "." : location.origin;
// let isEsModuleShimsLoaded = false;
export const initShims = async (assets: { [key: string]: string }) => {
  // if (isEsModuleShimsLoaded) return;
  // isEsModuleShimsLoaded = true;
  // const {importShim} = await import("es-module-shims");

  location.origin.includes("localhost")
    ? importShim.addImportMap({
      "imports": {
        "@emotion/react":
          "https://esm.sh/@emotion/react@11.10.0?alias=react:/react.mjs",
        "framer-motion": "./framer-motion",
        "react": orig + "/" + assets["react.mjs"],
        "react-dom": orig + "/" + assets["react.mjs"],
        "react-dom/client": orig + "/" + assets["react.mjs"],
        "react-dom/server": orig + "/" + assets["react.mjs"],
        "react/jsx-runtime": orig + "/" + assets["react.mjs"],
      },
    })
    : importShim.addImportMap({
      "imports": {
        // ...imap,
        "framer-motion": location.origin + "/" + assets["framer-motion.mjs"],
        "@emotion/react": location.origin + "/" + assets["emotion.mjs"],
        "react": location.origin + "/npm:million/react",
        "react-dom": location.origin + "/npm:million/react",
        "react-dom/client": location.origin + "/" + assets["react.mjs"],
        "react-dom/server": location.origin + "/" + assets["react.mjs"],
        "react/jsx-runtime": location.origin + "/" + assets["react.mjs"],
        // "preact": "https://ga.jspm.io/npm:preact@10.8.2/dist/preact.module.js",
        // "preact-render-to-string": "https://ga.jspm.io/npm:preact-render-to-string@5.2.0/dist/index.mjs",
        // "preact/compat": "https://ga.jspm.io/npm:preact@10.8.2/compat/dist/compat.module.js",
        // "preact/jsx-runtime": "https://ga.jspm.io/npm:preact@10.8.2/jsx-runtime/dist/jsxRuntime.module.js"
      },
    });
};

const apps: { [key: string]: FC } = {};

// {[md5(starter.transpiled)]: await appFactory(starter.transpiled)};

export const AutoUpdateApp: FC<{ hash: number; starter: FC }> = (
  { hash, starter }
) => {

  // const result = md5(mST().transpiled);

  // const ref = useRef(null);

  if (!apps[hash]) {
    apps[hash] = starter;
  }

  const App = apps[hash];


  return <Root>
    <ErrorBoundary>
    {/* <CacheProvider value={cache}> */}
      <App/>
  {/* </CacheProvider> */}
    </ErrorBoundary>
  </Root>
}



export async function appFactory(): Promise<FC> {
  // const result = md5(transpiled);
  // return lazy(>import(`/live/${codeSpace}/js#${result}`));
  // if (globalThis.transpiled === transpiled) return globalThis.App;
  // globalThis.transpiled = transpiled;

  // hash.update(transpiled);
  // const resultU8Arr = await hash.digest();

  //new TextDecoder().decode(resultU8Arr);
  // if (globalThis.App && globalThis.App === apps[result]) {
  //   globalThis.setCh && globalThis.setCh(globalThis.App);
  //   return;
  // }

  const hash = hashCode();
  

  if (!apps[hash]) {
    apps[hash] = (await importShim(createJsBlob(mST().transpiled))).default as unknown as FC;
  }


  return apps[hash];
}

export function createJsBlob(code: string) {
  const file = new File([code], "index.mjs", {
    type: "application/javascript",
  });
  const blobUrl = URL.createObjectURL(file);
  return blobUrl;
  // const actualUrl = new URL(blobUrl,'//live/');

  // return actualUrl;
}
