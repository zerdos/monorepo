// Import inlineWorkerPlugin from 'esbuild-plugin-inline-worker';
// import autoprefixer from "autoprefixer"
// import postcssNested from "postcss-nested"
import * as esbuild from "https://deno.land/x/esbuild@v0.16.13/mod.js";

// import { cp } from "node:fs/promises";
// import impMap from "./importMaps.json" assert {type: "json"};

// import { resolve } from "node:path";
// import open from "open";
// import fetch from "node-fetch";
// Const { request } = require("http");
// require("monaco-editor/esm/vs/language/css/css.worker")
// const rmAsync = promisify(fs.rm);
// import { env, exit } from "process";
// import { NIL } from "uuid";
// import { wait } from "./src/wait.mjs";

// await esbuild.initialize();
const environment = "production";

// = "production" === "production"
//   ? "production"
//   : "development";

const isDevelopment = environment !== "production";

const outdir = "dist/src";
const target = "es2022";

console.log(`
-------------------------------------------------
--------------${environment}---------------------   
-------------------------------------------------
-------------------------------------------------`);

const makeEnv = (environment) => ({
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
    version: "v19.3.0",
    versions: {
      node: "v19.3.0",
    },
    cwd: JSON.stringify(() => "/"),

    env: {
      NODE_ENV: `${environment}`,
      version: "v19.3.0",
      cwd: JSON.stringify(() => "/"),
      browser: true,
      isWebworker: true,
      NODE_DEBUG: false,
      DEBUG: false,
      isBrowser: true,
      versions: {
        node: "v19.3.0",
      },
    },
    browser: true,
  }),
});
const define = makeEnv(environment);
// Const plugins = [inlineWorkerPlugin()];

// [postcss({
// plugins: [
// inlineWorkerPlugin))
// autoprefixer,
// postcssNested
// ]
// })];//

const buildOptions = {
  define,
  target,
  alias: {
    path: "path-browserify",
    buffer: "buffer-browserify",
    events: "events-browserify",
    stream: "stream-browserify",
    os: "os-browserify",
    assert: "assert-browserify",
    fs: "./src/fs.ts",
  },
  // alias: {
  //   "react-rnd": "/npm:/*react-rnd@10.3.7",
  // },
  //  entryNames: "[dir]/[name]-[hash]",
  platform: "browser",
  external: ["./mST", "/npm:*"],
  legalComments: "none",
  loader: {
    ".html": "text",
    ".wasm": "file",
  },
};

const workerEntryPoints = [
  "vs/language/json/json.worker",
  "vs/language/css/css.worker",
  "vs/language/html/html.worker",
  "vs/language/typescript/ts.worker",
  "vs/editor/editor.worker",
];

console.log(`
-------------------------------------------------
--------------${environment}---------------------
----------------------b1--------------------------
-------------------------------------------------`);

const build = (
  entryPoints = [""],
  extraExternal = [""],
  watch = false,
  format = "esm",
) =>
  esbuild.build({
    ...buildOptions,
    entryPoints,
    watch,
    external: [...buildOptions.external, ...extraExternal.filter((x) => x)],
    outExtension: { ".js": ".mjs" },
    bundle: true,
    splitting: format === "esm",
    target,
    format: "esm",
    sourcemap: false,

    minify: !isDevelopment,
    minifyWhitespace: false,
    minifyIdentifiers: false,
    minifySyntax: !isDevelopment,
    legalComments: "none",
    ignoreAnnotations: false, // True,
    // external
    // external: [ "@emotion/react/*"],
    // sourcemap: true,
    treeShaking: true,
    logLimit: 0,
    keepNames: true,

    tsconfig: "./tsconfig.json",
    allowOverwrite: true,
    platform: "browser",
    chunkNames: "chunk-[name]-[hash]",
    assetNames: "chunk-[name]-[hash]",
    // ...(!keepEntryNames ? {en} : { entryNames: "chunk-[name]-[hash]" }),
    // EntryNames: "[name]-[hash]",
    resolveExtensions: [
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".css",
      ".json",
      ".mjs",
      ".html",
      ".js",
      ".wasm",
    ],
    metafile: true,
    define,
    loader: {
      ".ttf": "file",
      ".webp": "file",
      ".tsx": "tsx",
      ".jsx": "tsx",
      ".js": "ts",
      ".ts": "ts",
      ".html": "text",
      ".cjs": "ts",
      ".mjs": "tsx",
      ".css": "css",
      ".d.ts": "file",
      ".wasm": "file",
    },
    outdir,
  }).catch((error) => {
    console.error(error);
    esbuild.stop();
  });

(async () => {
  // await cp("./src/index.html", "./dist/index.html");
  // await Deno.copyFile("./src/assets/favicons/favicon.ico", "./dist/src/favicon.ico");

  await Deno.copyFile(
    "./enhanced_dot_digital-7/enhanced_dot_digital-7.ttf",
    "./dist/enhanced_dot_digital-7.ttf",
  );
  await esbuild.build({
    entryPoints: [
      ...workerEntryPoints.map((entry) => `monaco-editor/esm/${entry}`),
    ],
    bundle: true,
    define,
    treeShaking: true,
    minify: true, // ! isDevelopment,
    minifyWhitespace: true, // ! isDevelopment,
    minifyIdentifiers: true, // ! isDevelopment,
    minifySyntax: true, // ! isDevelopment,
    ignoreAnnotations: false,
    keepNames: true,

    platform: "browser",
    format: "iife",
    outbase: "monaco-editor/esm/vs",
    outdir: "dist",
  });
  // await build(["src/react-jsx-runtime.ts"], [], false, "iife");

  // await build(["src/mWorker.mjs"], [], false, "iife");

  // await build([
  //   "src/reactMod.ts",
  //   "src/jsx.mjs"
  // ], []);
  // console.log("done");

  // await build([
  //   "src/reactMod.ts",
  //   "src/reactDom.ts",
  //   "src/reactDomClient.ts"
  // ], []);
  // console.log("done");
  await esbuild.build({
    ...buildOptions,
    entryPoints: [
      "src/sw.ts",
      "src/ataWorker.ts",
      "src/prettierWorker.ts",
      // "src/fs.worker.ts",
    ],

    bundle: true,
    define, // makeEnv("production"),
    minify: false,
    mangleQuoted: false,
    minifySyntax: false,
    minifyWhitespace: false,
    ignoreAnnotations: false,
    keepNames: true,
    treeShaking: true,
    legalComments: "none",
    outdir: "dist",
    platform: "browser",
    format: "iife",
  });

  buildOptions.plugins = [
    // aliasPlugin({
    //    "stream": resolve("./src/stream.mjs"),
    //  "buffer": resolve("./src/buffer/index.ts"),
    // "@emotion/react": resolve("./src/emotion.ts"),
    // "@emotion/react/jsx-runtime": resolve("./src/emotionJsxRuntime.ts"),
    // "@emotion/react/jsx-dev-runtime": resolve("./src/emotionJsxRuntime.ts"),
    // "@emotion/cache": resolve("./src/emotionCache.ts"),
    // "@emotion/styled": resolve("./src/emotionStyled.mjs"),

    // "@emotion/styled": resolve("./src/emotionStyled.mjs"),
    // // "./mui": resolve("./dist/mui.mjs"),
    // "react": resolve("./dist/reactMod.mjs"),
    // "react/jsx-runtime": resolve("./dist/jsx.mjs"),
    // "react": resolve("./dist/reactMod.mjs"),
    // "react-dom": resolve("./dist/reactDom.mjs"),
    // "react-dom/client": resolve("./dist/reactDomClient.mjs"),
    // "react-dom": resolve("./dist/reactMod.mjs"),
    // "react-dom/client": resolve("./dist/reactMod.mjs"),
    // "framer-motion": resolve("./src/motion.ts"),
    // "react/jsx-dev-runtime": resolve("./src/jsx.mjs"),
    // }),
  ];

  await build(
    [
      "src/reactMod.ts",
      "src/motion.ts",
      "src/reactDom.ts",
      "src/hydrate.tsx",
      "src/render.tsx",
      "src/reactDomClient.ts",
      "src/emotion.ts",
      "src/emotionCache.ts",
      "src/emotionStyled.mjs",
      "src/emotionJsxRuntime.mjs",
      "src/jsx.mjs",
    ],
  );

  await build(
    [
      "src/session.ts",
      // "src/prettierWorker.mjs",
      // "src/reactMod.ts",
      "src/Editor.tsx",
      // "src/motion.ts",
      // "src/reactMod.ts",

      // "src/Editor.tsx",
      // "src/motion.ts",

      // "src/reactDom.ts",
      "src/hydrate.tsx",
      // "src/reactDomClient.ts",
      "src/esbuildWASM.ts",
      // "src/emotion.ts",
      // "src/emotionCache.ts",
      // "src/emotionStyled.mjs",
      // "src/emotionJsxRuntime.mjs",
      // "src/emotion.ts",
      // "src/emotionJsxRuntime.ts",
      // "src/jsx.mjs",
    ],
    [
      // "/npm:/*",
      // "react",
      //  "react-rnd",
      // "react-dom",
      // "react-dom/",
      // "react-icons",
      // "react-error-boundary",
      // "@emotion/react",
      // "@emotion/",
      // "react*",
      // "@mui/",
      // "react-is",
      // "framer-motion",
      // "react",
      // "prop-types",
      // "tslib",
      // "monaco-editor",
      // "ace-builds",
      // "prettier",
      // "react/",
    ],
    false,
  );

  console.log("done");

  esbuild.stop();

  // await build(
  //   [
  //     // "src/session.ts",
  //   // ],
  //   [ // "react",
  //     //  "react-dom", "react-dom/client"//, "@emotion/react", "@emotion/react/jsx-runtime", "framer-motion"
  //   ],
  //   false,
  //   "esm",
  //   true,
  // );
  // const {host, port} = serveRES;
  // const url = `http://[${host}]:${port}`;
  // open(url);
  // console.log(url)
  // await wait(100000);

  // Await esbuild
  //   .build({
  //     entryPoints: ['dist/startMonaco.css'],
  //     bundle: true,
  //     outdir: 'dist',
  //     allowOverwrite: true,
  //     loader: {
  //       ".ttf": "file",
  //     },
  //     plugins,
  //   })
  //   .catch(() => process.exit(1))
})();
// (opts)=>esbuild.serve(
// {
//   host: "::1",
//   port: 8372,
//   onRequest: async (args)=>{
//       if(args.path.startsWith("/node_modules")) {
//         const res = await  fetch (`https://testing.spike.land/${args.path}`);
//         if (res.ok) {
//           return res.text()
//         }
//       }
//   },
//   servedir: "./dist"
// },
// opts),
