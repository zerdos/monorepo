import autoprefixer from "autoprefixer";
import postcss from "postcss";

import tailwindcss from "tailwindcss";

async function generateCSS(classNames: string[]) {
  const cssString = classNames.map((cls) => `.${cls} { @apply ${cls}; }`).join("\n");

  const result = await postcss([
    tailwindcss(),
    autoprefixer(),
  ]);

  return result.process(cssString).css;
}

Object.assign(globalThis, { generateCSS });
