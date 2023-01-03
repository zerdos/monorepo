import {
  build as esbuildBuild,
  type BuildOptions,
  type BuildResult,
  initialize,
  transform,
  type TransformOptions,
} from "esbuild-wasm";

import wasmFile from "esbuild-wasm/esbuild.wasm";

// import impMap from "./importMap.json";
//
// import { imports as importMapImports } from "./importMap.json";

import { fetchPlugin } from "./fetchPlugin";
import { md5 } from "./md5";
import { unpkgPathPlugin } from "./unpkg-path-plugin";

const mod = {
  init: false as (boolean | Promise<void>),
  initialize: (orig: string) => {
    if (mod.init === false) {
      return mod.init = initialize({
        wasmURL: new URL(wasmFile, orig + "/src/").toString(),
      });
    }
    return mod.init;
  },
  //   return fetch(`${origin}/files.json`).then((f) => f.json()).then(
  //     (k) => {
  //       const wasmURL = new URL(
  //         Object.keys(k).find((i) => i.indexOf(".wasm") !== -1 && i.indexOf("esbuild") !== -1) as string,
  //         origin,
  //       ).toString();
  //      then(() => mod.init = true) as Promise<void>;
  //       return mod.init;
  //     },
  //   );
  // },
};

export const initAndTransform = async (
  code: string,
  opts: TransformOptions,
  origin: string,
) => {
  // const code = prettierJs(c)!;
  const initFinished = mod.initialize(origin);

  if (initFinished !== true) await (initFinished);

  const ttCode = await transform(code, {
    ...opts,
    define: { ...define, ...(opts?.define ? opts.define : {}) },
  });

  // : transformed.code; // .split("dataset").join("attributes");

  const res = { code: `/*${md5(code)}*/` + ttCode.code };
  return res;
};

const define = {
  "process.env.NODE_ENV": `"development"`,
  "process.env.NODE_DEBUG": JSON.stringify(false),
  "process.browser": JSON.stringify(true),
  "process.env.DEBUG": JSON.stringify(true),
  "isBrowser": JSON.stringify(true),
  "isJest": JSON.stringify(false),
  "process.env.version": "\"1.1.1\"",
  global: "globalThis",
  "WORKER_DOM_DEBUG": JSON.stringify(false),
  "process.env.DUMP_SESSION_KEYS": JSON.stringify(false),
  // "libFileMap": JSON.stringify({}),
  process: JSON.stringify({
    env: {
      NODE_ENV: `development`,
      browser: true,
      NODE_DEBUG: false,
      DEBUG: true,
      isBrowser: true,
    },
    browser: true,
  }),
};

// const definePrd = {
//   "process.env.NODE_ENV": `"production"`,
//   "process.env.NODE_DEBUG": JSON.stringify(false),
//   "process.browser": JSON.stringify(true),
//   "process.env.DEBUG": JSON.stringify(false),
//   "isBrowser": JSON.stringify(true),
//   "isJest": JSON.stringify(false),
//   "process.env.version": "\"1.1.1\"",
//   global: "globalThis",
//   "WORKER_DOM_DEBUG": JSON.stringify(false),
//   "process.env.DUMP_SESSION_KEYS": JSON.stringify(false),
//   // "libFileMap": JSON.stringify({}),
//   process: JSON.stringify({
//     env: {
//       NODE_ENV: `production`,
//       browser: true,
//       NODE_DEBUG: false,
//       DEBUG: false,
//       isBrowser: true,
//     },
//     browser: true,
//   }),
// };

export let skipImportmapReplaceNames = false;
// export const build = async (
//   codeSpace: string,
//   i: number,
//   signal: AbortSignal,
//   bundle = false,
// ) => {
//   const initFinished = mod.initialize();
//   // const rawCode = await fetch(`${location.origin}/live/${codeSpace}/index.js`).then(x => x.text());

//   if (initFinished !== true) await (initFinished);
//   // skipImportmapReplaceNames = true;
//   const defaultOpts: BuildOptions = {
//     bundle,
//     resolveExtensions: [
//       ".tsx",
//       ".ts",
//       ".jsx",
//       ".js",
//       ".d.ts",
//       ".css",
//       ".json",
//       ".mjs",
//       ".js",
//       ".wasm",
//       ".ttf",
//     ],
//     loader: {
//       ".js": "tsx",
//       ".tsx": "tsx",
//       ".css": "css",
//       ".ttf": "dataurl",
//     },
//     write: false,
//     metafile: true,
//     target: "es2022",
//     outdir: `./`,
//     treeShaking: true,
//     minify: false,
//     define: define,
//     minifyIdentifiers: false,
//     minifySyntax: false,
//     minifyWhitespace: false,
//     splitting: true,
//     incremental: true,
//     format: "esm",
//     // external: Object.keys(importMapImports),
//     entryPoints: [
//       `./live/${codeSpace}/index.tsx?i=${i}`,
//       // `./render.tsx?i=${i}`,
//       // "./reactDomClient.mjs",
//       // "./emotion.mjs",
//       // "./motion.mjs",
//       // "./emotionCache.mjs",
//       // "./emotionStyled.mjs",
//       // "./reactMod.mjs",
//       // "./reactDom.mjs",
//     ],

//     tsconfig: "./tsconfig_dist.json",
//     plugins: [unpkgPathPlugin, fetchPlugin(importMapReplace)],
//   };
//   let b;
//   if (
//     !signal.aborted && (b = await esbuildBuild(defaultOpts)) && !signal.aborted
//   ) {
//     console.log(b.outputFiles);

//     return b.outputFiles![0].text;
//   }
//   return false;
// };

export const buildT = async (
  codeSpace: string,
  origin: string,
  signal: AbortSignal,
  opts = { bundle: false },
) => {
  // if (lastBuild) {
  // lastBuild = await lastBuild.rebuild();
  //
  // return lastBuild.outputFiles![0].contents;
  // }
  const initFinished = mod.initialize(origin);
  // const rawCode = await fetch(`${location.origin}/live/${codeSpace}/index.js`).then(x => x.text());

  if (initFinished !== true) await (initFinished);
  // skipImportmapReplaceNames = true;
  const defaultOpts: BuildOptions = {
    resolveExtensions: [
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".d.ts",
      ".css",
      ".json",
      ".mjs",
      ".js",
      ".wasm",
      ".ttf",
    ],
    loader: {
      ".js": "tsx",
      ".mjs": "js",
      ".json": "json",
      ".tsx": "tsx",
      ".css": "css",
      ".ttf": "dataurl",
    },
    outExtension: { ".js": ".mjs" },
    write: false,
    external: [origin + "/src/*"],
    metafile: true,

    target: "es2022",
    outdir: `./live/${codeSpace}`,
    treeShaking: true,
    minify: false,

    define: define,

    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false,

    splitting: true,
    incremental: true,
    jsxImportSource: "@emotion/react",
    format: "esm",
    entryPoints: [
      `./live/${codeSpace}/index.js`,
      // `./live/${codeSpace}/index.tsx`,
      // "./reactDomClient.mjs",
      // "./emotion.mjs",
      // "./motion.mjs",
      // "./emotionCache.mjs",
      // "./emotionStyled.mjs",
      // "./reactMod.mjs",
      // "./reactDom.mjs",
    ],

    tsconfig: "./tsconfig.json",

    plugins: [unpkgPathPlugin(origin), fetchPlugin(origin)],
    ...opts,
  };
  let b: BuildResult;
  if (
    !signal.aborted && (b = await esbuildBuild(defaultOpts)) && !signal.aborted
  ) {
    console.log(b.outputFiles);

    const { readdir, unlink, writeFile } = await import("./fs");
    const cs = await readdir(`/live/${codeSpace}`);

    cs.filter((x) => x.indexOf("chunk") !== -1).map((chunk) =>
      b.outputFiles?.find((x) => x.path.indexOf(chunk) !== -1)
      || unlink(`/live/${codeSpace}/${chunk}`)
    );

    b.outputFiles?.map(async (f) => {
      const file = f.path.split("/").pop()!;

      if (signal.aborted) return;
      if (cs.includes(file) && file.indexOf("chunk") === -1) {
        await unlink(f.path);
      }
      if (file?.indexOf("chunk") === -1 || !cs.includes(file)) {
        await writeFile(f.path, f.contents);
      }
    });

    return b.outputFiles![0].text;
  }
  return false;
};

export { initAndTransform as transform };
