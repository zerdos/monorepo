import { createRequire } from "module";
const require = createRequire(import.meta.url);
Object.assign(globalThis, { require });

import { useCodeSpace } from "@/hooks/use-code-space";
import { renderApp } from "@/lib/render-app";
import { main } from "./ws";

if (location.pathname.endsWith(".tsx")) {
  location.href = location.href.replace(".tsx", "");
}

const codeSpace = useCodeSpace();

(async () => {
  if (
    location.pathname !== `/live/${codeSpace}`
    && location.pathname.endsWith("dehydrated") === false
  ) {
    const rootElement = (document.getElementById("root") || document.getElementById("embed")) as HTMLDivElement;

    let rendered = await renderApp({ codeSpace, rootElement });
    Object.assign(globalThis, { rendered });
  }
})();

if (location.pathname.startsWith("/live")) {
  main();
}
