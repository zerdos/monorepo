// Import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { TransformOptions } from "esbuild-wasm";
import debounce from "lodash.debounce";
import { build, transform } from "./esbuildEsm";
import { render } from "./renderToString";
import { md5, mST, patchSync } from "./session";
import { toUmd } from "./toUmd";
import "console-log-div";

globalThis.ol = globalThis.ol || console.log; // || (message, ...optionalParams)=>console.log(message, ...optionalParams)

const OriginalLog = globalThis.ol; // (message?: any, ...optionalParams: any[])=> void = globalThis.ol

const data: { [key: string]: string } = {};
const logs = [];
globalThis.logs = logs;

console.log = (mess, ...args) => {
  const sess = mST();
  data[md5(sess.code)] = sess.code;
  data[md5(sess.html)] = sess.html;
  data[md5(sess.css)] = sess.css;

  logs.push({
    args: [`<b>` + mess + `</b>`, ...args],
    sess: {
      code: md5(sess.code),
    },
  });
  OriginalLog(`<b>` + mess + `</b>`, ...args);
};

export const esmTransform = async (code: string) => {
  const transpiled = await transform(code, {
    loader: "tsx",
    format: "esm",
    treeShaking: true,
    platform: "browser",
    minify: false,
    //   globalName: md5(code),
    keepNames: true,
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react-jsx",
        useDefineForClassFields: false,
        jsxFragmentFactory: "Fragment",
        jsxImportSource: "@emotion/react",
      },
    },
    target: "es2022",
  } as unknown as TransformOptions);

  // apps[md5(transpiled.code)] = require(md5(code));

  return transpiled.code;
};
Object.assign(globalThis, { transform, build, toUmd });

const debouncedSync = debounce(patchSync, 200, {
  leading: true,
  trailing: true,
  maxWait: 800,
});

let counterMax = mST().i;
const IIFE = {};

export const umdTransform = async (code: string) => {
  const transpiled = await transform(code, {
    loader: "tsx",
    format: "esm",
    treeShaking: true,
    platform: "browser",
    minify: false,
    globalName: md5(code),
    keepNames: true,
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react-jsx",
        module: "ESNext",
        jsxFragmentFactory: "Fragment",
        useDefineForClassFields: false,
        jsxImportSource: "@emotion/react",
      },
    },
    target: "es2021",
  } as unknown as TransformOptions);

  Object.assign(IIFE, { [md5(transpiled.code)]: md5(code) });
  // apps[md5(transpiled.code)] = require(md5(code));

  return transpiled.code;
};

// Object.assign(globalThis, {
//   _toUmd: () => toUmd(mST().code, codeSpace),
//   toUmd,

//   IIFE,
//   umdTransform,
// });

export async function runner({ code, counter, codeSpace }: {
  code: string;
  codeSpace: string;
  counter: number;
}) {
  if (counter <= counterMax) return;

  counterMax = counter;

  // Console.log({ i, counter });

  // mod.i = counter;

  // if (code === mST().code) return;
  // if (mod.i > counter) return;

  // session.changes.push(changes);
  // esbuildEsmTransform = esbuildEsmTransform ||
  //   (await import("./esbuildEsm.ts")).transform;

  try {
    // const ab = new AbortController();
    // const pp = await buildT(codeSpace, counter, ab.signal);
    // if (!pp) return;
    const transpiledCode = await esmTransform(code);

    const { html, css } = await render(transpiledCode, codeSpace);

    console.log({ html, css });

    if (!html || !css) {
      return;
    }

    debouncedSync({
      ...mST(),
      code,
      i: counter,
      transpiled: transpiledCode,
      html,
      css,
    });
  } catch (error) {
    console.error({ error });
  } finally {
  }
}
