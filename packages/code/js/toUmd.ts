// Import { createJsBlob } from "starter";
// import {comlink} from "comlink"
// import { hashCode } from "session";
// import comlinkUmd from "comlink/dist/umd/comlink.js"
// Import { string } from "prop-types";
import { transform } from "./esbuildEsm";
import { md5 } from "./md5.js";
import { wait } from "./wait";

// import "es-module-shims";
// Import { m } from "framer-motion";

const mod = {
  printR(name: string, included: { [modZkey: string]: boolean }): string {
    if (included[mod.hashMap[name]]) return "";
    included[mod.hashMap[name]] = true;

    const current = mod.data[mod.hashMap[name]];
    if (!current) console.error(name + " is missing!");
    const currentCode = current.code;
    if (!current.deps || !current.deps.length) {
      return currentCode;
    }

    // current.code = '';
    const myDepts = [...current.deps];
    // current.deps=[]

    const depts = myDepts.map((name) => mod.printR(name, included)).join(" \n ");

    return depts + `
    
    ` + currentCode;
  },

  toJs: async (name: string) => {
    while ((Date.now() - mod.last) / 1000 < 4) {
      console.log((Date.now() - mod.last) / 1000);
      await wait(1000);
    }
    const js = mod.printR(name, {});

    const modZ: { [key: string]: string } = {};
    Object.keys(mod.data).forEach((k) => Object.assign(modZ, { [mod.hashMap[k]]: k }));

    //  Object.keys(mod.data).map(key=>mod.data[key].code).join( "\n") + debts +
    const res = `
     ${js}
  function require(name){
    try{
      return (${JSON.stringify(modZ)})[name];
    }
    catch{
      debugger;
    }
  }
  globalThis.UMD_require = require;
  
     `;

    // const t = await transform(res, {
    //   format: "esm",
    //   minify: true,
    //   keepNames: true,
    //   platform: "neutral",
    //   treeShaking: true,
    // });

    // const c = await transform(t.code, {
    //   format: "iife",
    //   minify: true,
    //   keepNames: true,
    //   platform: "neutral",
    //   treeShaking: true,
    // });

    return res;
  },
  last: 0,
  hashMap: {} as { [key: string]: string },
  // ToJs: (name: string)=>{
  //   const md5Name = md5(name);
  //   return mod.data[md5Name].code +  mod.data[md5Name].deps.map(dep=>mod.toJs(dep)).join() as unknown as string
  // },
  data: {} as unknown as Record<string, {
    code: string;
    deps: string[];
  }>,
};

const findDeps = (code: string) => {
  // Alternative syntax using RegExp constructor
  const regex = /require\("(.+?)"\)/gm;

  let m;
  const deps: string[] = [];

  while ((m = regex.exec(code)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    for (const [groupIndex, match] of m.entries()) {
      if (groupIndex == 1) {
        deps.push(match);
      }

      console.log(`Found match, group ${groupIndex}: ${match}`);
    }
  }

  return deps;
};

export const toUmd = async (source: string, name: string) => {
  console.log("toUmd: " + name);
  const hash = md5(source);
  mod.hashMap = { ...mod.hashMap, [name]: hash };

  if (mod.data[hash]) return mod;
  mod.last = Date.now();

  mod.data[hash] = {
    code: (await transform(source, {
      format: "iife",
      keepNames: true,
      treeShaking: true,
      sourcefile: name,

      ignoreAnnotations: true,
      target: "es2021",
      tsconfigRaw: {
        compilerOptions: {
          jsx: "react-jsx",
          useDefineForClassFields: false,
          jsxImportSource: "@emotion/react",
        },
      },

      loader: "tsx",
      globalName: hash,
    })).code,
    deps: [],
  };

  mod.data[hash].deps = findDeps(mod.data[hash].code).map(dep => importShim.resolve(dep, name));

  await Promise.all(
    mod.data[hash].deps.map(depUrl =>
      fetch_or_die(depUrl).then(content => toUmd(content, depUrl).then(async (mod) => await mod))
    ),
  );

  return mod;
};

const urls: { [url: string]: string } = {};
const fetch_or_die = async (url: string) => {
  urls[url] = urls[url] || await fetch(url).then(res => res.text());
  return urls[url];
};
