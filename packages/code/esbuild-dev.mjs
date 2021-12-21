import esbuild from "esbuild";

import * as importMap from "esbuild-plugin-import-map";

import jsonData from "./importmap.json" assert { type: "json" };

const impData = jsonData.imports;
console.log(jsonData.imports);

const importData = Object.keys(jsonData.imports).filter((name) =>
  !name.includes("@spike.land") || name.includes("@spike.land/esm")
);

let imports = {};
importData.map((d) => (Object.assign(imports, { [d]: jsonData.imports[d] })));

importMap.load({ imports });

// console.log(imports);

// esbuild.build({
//   entryPoints: ["js/codeLoader.mjs"],
//   bundle: true,
//   format: "esm",
//   minify: false,
//   treeShaking: false,
//   sourcemap: true,
//   resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
//   target: ["es2018"],
//   plugins: [importMap.plugin()],
//   outfile: "dist/dev.mjs",
// }).catch(() => process.exit(1));

esbuild.build({
  entryPoints: [
    "js/quickStart.mjs",
    "js/ws.mjs",
    "js/renderPreviewWindow.mjs",
    "js/renderToString.mjs",
    "js/starter.mjs",
  ],
  "outExtension": { ".js": ".mjs" },
  bundle: true,
  format: "esm",
  minify: true,
  splitting: true,
  treeShaking: true,
  sourcemap: false,
  resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
  target: ["es2018"],
  plugins: [importMap.plugin()],
  outdir: "dist",
}).catch(() => process.exit(1));

// esbuild.build({
//   entryPoints: ["js/ws.mjs"],
//   bundle: true,
//   format: "esm",
//   minify: false,
//   treeShaking: false,
//   sourcemap: true,
//   resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
//   target: ["es2018"],
//   plugins: [importMap.plugin()],
//   outfile: "dist/ws.mjs",
// }).catch(() => process.exit(1));
