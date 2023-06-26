import { Mutex } from "async-mutex";
import {
  build as esbuildBuild,
  type BuildOptions,
  type BuildResult,
  initialize,
  transform,
  type TransformOptions,
  version,
} from "esbuild-wasm";

// import impMap from "./importMap.json";
//
// import { imports as importMapImports } from "./importMap.json";

import { fetchPlugin } from "./fetchPlugin";
import { importMapReplace } from "./importMapReplace";
import { md5 } from "./md5";
// import { unpkgPathPlugin } from "./unpkg-path-plugin";
import { wait } from "./wait";
// import { transpile } from "./transpile";

let initDone = false;
const mutex = new Mutex();

const init = (orig: string, init = initialize) => {
  if (initDone === false) {
    (async () => {
      await mutex.waitForUnlock();
      if (initDone) return;
      await mutex.acquire();
      await init({
        wasmURL: `https://unpkg.com/esbuild-wasm@${version}/esbuild.wasm`,
      });
      initDone = true;
      mutex.release();
    })();
  }
};

export const initAndTransform = async (
  code: string,
  opts: TransformOptions,
  origin: string,
) => {
  // const code = prettierJs(c)!;
  // const initFinished = mod.initialize(origin);

  // if (initFinished !== true) await (initFinished);

  if (initDone === false) await mutex.waitForUnlock();
  await mutex.acquire();
  await mutex.release();
  init(origin);
  await wait(100);
  await mutex.waitForUnlock();

  const ttCode = await transform(code, {
    ...opts,
    define: { ...define, ...(opts?.define ? opts.define : {}) },
  });

  // : transformed.code; // .split("dataset").join("attributes");

  const res = { code: `/*${md5(code)}*/${ttCode.code}` };
  return res;
};

const makeEnv = (environment: string) => ({
  "process.env.NODE_ENV": `"${environment}"`,
  "process.env.NODE_DEBUG": JSON.stringify(false),
  "process.browser": JSON.stringify(true),
  "process.env.DEBUG": JSON.stringify(false),
  "isBrowser": JSON.stringify(true),
  "isJest": JSON.stringify(false),
  "process.env.version": "\"1.1.1\"",
  global: "globalThis",

  "WORKER_DOM_DEBUG": JSON.stringify(false),
  "process.env.DUMP_SESSION_KEYS": JSON.stringify(false),
  // "libFileMap": JSON.stringify({}),
  process: JSON.stringify({
    version: "v19.5.0",
    versions: {
      node: "v19.5.0",
    },
    cwd: JSON.stringify(() => "/"),

    env: {
      NODE_ENV: `${environment}`,
      version: "v19.5.0",
      cwd: JSON.stringify(() => "/"),
      browser: true,
      isWebworker: true,
      NODE_DEBUG: false,
      DEBUG: false,
      isBrowser: true,
      versions: {
        node: "v19.5.0",
      },
    },
    browser: true,
  }),
});
const define = makeEnv("development");

export let skipImportmapReplaceNames = false;

const transformTsx = (code: string) =>
  transform(code, {
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
    target: "chrome88",
  }).then((r) => r.code);

export const buildT = async (
  codeSpace: string,
  origin: string,
  signal: AbortSignal,
  opts = { bundle: false },
  builder = {
    esbuildBuild,
    initialize,
  },
) => {
  // if (lastBuild) {
  // lastBuild = await lastBuild.rebuild();
  //
  // return lastBuild.outputFiles![0].contents;
  // }
  // const initFinished = mod.initialize(origin);
  if (initDone === false) await mutex.waitForUnlock();
  await mutex.acquire();
  await mutex.release();
  init(origin);
  await wait(100);
  await mutex.waitForUnlock();
  // const rawCode = await fetch(`${location.origin}/live/${codeSpace}/index.js`).then(x => x.text());

  // if (initFinished !== true) await (initFinished);
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
      ".mjs": "ts",
      ".json": "json",
      ".tsx": "tsx",
      ".css": "css",
      ".ttf": "dataurl",
    },
    outExtension: { ".js": ".mjs" },
    write: false,

    // metafile: false,
    // alias: {
    //  ...importMap.imports,
    // },

    target: "es2021",
    outdir: `${location.origin}/live/${codeSpace}/`,
    treeShaking: true,
    minify: true,

    define: define,

    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,

    splitting: false,

    format: "esm",
    platform: "browser",
    entryPoints: [
      `${location.origin}/live/${codeSpace}/index.js`,
    ],
    packages: "external",

    plugins: [fetchPlugin],
    ...opts,
  };
  let b: BuildResult;

  if (
    !signal.aborted && (b = await builder.esbuildBuild(defaultOpts))
    && !signal.aborted
  ) {
    console.log(b.outputFiles);

    const { readdir, stat, unlink, writeFile } = await import("./memfs");
    const cs = await readdir(`/live/${codeSpace}`) as string[];

    cs.filter((x) => x.indexOf("chunk") !== -1).map((chunk) =>
      b.outputFiles?.find((x) => x.path.indexOf(chunk) !== -1)
      || unlink(`/live/${codeSpace}/${chunk}`)
    );

    b.outputFiles?.map(async (f) => {
      const fPath = f.path.slice(location.origin.length);
      const file = fPath.split("/").pop()!;

      if (signal.aborted) return;
      if (cs.includes(file) && file.indexOf("chunk") === -1) {
        await stat(fPath) && await unlink(fPath);
      }
      if (file?.indexOf("chunk") === -1 || !cs.includes(file)) {
        const file = importMapReplace(f.contents as unknown as string, origin);

        await writeFile(
          fPath,
          file,
        );

        await fetch(`${origin}/live/${codeSpace}/index.mjs`, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": "application/javascript" },
        }).then(x => x.text()).then(x => console.log(x));
      }
    });

    return b.outputFiles![0].text;
  }
  return false;
};

export { initAndTransform as transform };

// export const transform = async (
//   code: string,
//   opts: TransformOptions,
// ) => {
//   const initFinished = mod.initialize();
//   if (initFinished !== true) await (initFinished);

//   return esmTransform(code, opts);
// };
