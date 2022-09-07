import { Mutex } from "async-mutex";

// import "core-js/proposals/string-replace-all-stage-4";

import { initialize, transform, TransformOptions } from "esbuild-wasm";
import wasmURL from "esbuild-wasm/esbuild.wasm";

const esbuild = {
  initialize,
  mutex: new Mutex(),
  transform: async (code: string, options: TransformOptions) => {
    let transformObj;
    
    await esbuild.mutex.runExclusive(async () => {
      try {
        console.info(`esbuild start`);

        // if (options?.format==="esm") {
        transformObj = await transform(code, options);
        console.info(`esbuild transpile done`);
        return transformObj;
      } catch (err) {
        console.error("Ebuild transform error: ", { code, err });
        throw err;
      }
    });
  
  return transformObj
  }
};
// import type { transform } from "esbuild/lib/main";

let initFinished: Promise<boolean> | boolean = false;

export const init = async () => {
  try {
    if (initFinished === true) return esbuild;

    initFinished = initFinished || new Promise<boolean>((resolve) => {
      esbuild.initialize(
        {
          wasmURL: new URL(wasmURL, import.meta.url).toString(),
        },
      ).then(() => resolve(true));
    });

    if (await initFinished === true) return esbuild;
    throw new Error("esbuild couldn't initialize");
  } catch {
    throw new Error("esbuild couldn't initialize");
  } finally {
    if (await initFinished === true) return esbuild;
    throw new Error("esbuild couldn't initialize");
  }
};
