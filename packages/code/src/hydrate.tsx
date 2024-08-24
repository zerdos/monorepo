import type { EmotionCache } from "@emotion/cache";
import { Mutex } from "async-mutex";
import { Workbox } from "workbox-window";

// import { mkdir } from "./memfs";
import { useCodeSpace } from "./hooks/useCodeSpace";
import { prettierCss } from "./shared";
import { wait } from "./wait";
import { renderApp, renderedAPPS } from "./Wrapper";

// import { deleteAllServiceWorkers } from "./swUtils";

// Constants
const codeSpace = useCodeSpace();

const BC = new BroadcastChannel(`${location.origin}/live/${codeSpace}/`);

const bcLogging = () => {
  BC.onmessage = ({ data }) => {
    const { i, code, sender, transpiled } = data;
    console.table({ i, sender, code, transpiled });
  };
};

Object.assign(globalThis, { BC, bcLogging });

// Utility functions
// const createDirectories = async () => {
// try {
// await mkdir("/live");
// await mkdir(`/live/${codeSpace}`);
// } catch (e) {
// console.error("Error creating directories:", e);
// }
// };

const setupServiceWorker = async () => {
  if (
    !navigator.serviceWorker || localStorage.getItem("sw") === "false"
    || location.origin.indexOf("localhost") !== -1
  ) {
    return null;
  }

  try {
    const sw = new Workbox(`/sw.js`);
    return sw.register();
  } catch (e) {
    // console.error("Error setting up service worker:", e);
    return null;
  }
};

const createLangChainWorkflow = async (prompt: string) => {
  const { createWorkflow } = await import("./shared");
  return createWorkflow(prompt);
};

const initializeApp = async () => {
  const [
    { enhancedFetch },
    { addFile, bundleAndUpload, downloadFromHelia, uploadToHelia },
    { useArchive, useSpeedy },
  ] = await Promise.all([
    import("./enhancedFetch"),
    import("./helia"),
    import("./hooks/useArchive"),
  ]);

  setTimeout(async () => {
    function resolveDebug(debug) {
      // If debug is not a string, return false
      if (typeof debug !== "string") {
        return false;
      }

      if (debug === "true" || debug === "1") {
        return true;
      }
      if (debug === "false" || debug === "0") {
        return false;
      }
      if (debug === "*") {
        return true;
      }

      let debuggers = debug.split(",").map((d) => d.split(":")[0]);
      if (debuggers.includes("-tailwindcss")) {
        return false;
      }
      if (debuggers.includes("tailwindcss")) {
        return true;
      }
      return false;
    }

    // Set up the environment
    var env = {
      NODE_ENV: "development", // or "production" if you prefer
      DEBUG: "tailwindcss", // or resolveDebug("true") if you want to enable debug mode
    };

    const process = {
      cwd: () => `/live/${codeSpace}/`,
    };

    Object.assign(globalThis, { process });
    const TW = await import("./utils/tw");
    Object.assign(globalThis, { TW });
  }, 100);

  Object.assign(globalThis, { createWorkflow: createLangChainWorkflow });
  Object.assign(globalThis, {
    uploadToHelia,
    enhancedFetch,
    downloadFromHelia,
    addFile,
    bundleAndUpload,
    useArchive,
    useSpeedy,
  });

  await setupServiceWorker();
};

const handleLivePage = async () => {
  // // Script to be placed in the parent window
  // window.addEventListener("message", function(event) {
  //   if (event.data && event.data.type === "console") {
  //     (console as any)[event.data.method].apply(console, event.data.args);
  //   }
  // });

  const { run } = await import("./ws");
  run();
};

const handleDehydratedPage = () => {
  BC.onmessage = ({ data }) => {
    const { html, css } = data;
    const root = document.getElementById("root");

    if (root && html && css) {
      root.innerHTML = `<style>${css}</style><div>${html}</div>`;
    }
  };
};

const mineFromCaches = (cache: EmotionCache, html: string) => {
  const key = cache.key || "css";
  try {
    const tailwindCss = Array.from(document.querySelectorAll("style"))
      .map((style) => style.textContent)
      .filter((style) => style?.startsWith("/* ! tailwindcss"))[0] || "";

    const styledJSXStyles = Array.from(
      document.querySelectorAll("style[data-styled-jsx]"),
    ).map((style) => style.textContent);

    const globalStyles = Array.from(
      new Set(
        Array.from(
          document.querySelectorAll(`style[data-emotion*="${key}-global"]`),
        ).map((style) => style.textContent?.trim()).map((s) => s?.endsWith(";") ? s.slice(0, -1) : s),
      ),
    ).join("\n");

    const emotionStyles = Array.from(
      new Set(
        Array.from(document.querySelectorAll(`style[data-emotion="${key}"]`))
          .map((style) => style.textContent),
      ),
    ).join("\n");

    return [globalStyles, tailwindCss, styledJSXStyles, emotionStyles].join(
      "\n",
    );
  } catch {
    return Array.from(document.styleSheets)
      .map((sheet) => {
        try {
          return sheet.cssRules[0] as CSSPageRule;
        } catch {
          return null;
        }
      })
      .filter(
        (rule): rule is CSSPageRule =>
          rule?.selectorText !== undefined
          && rule.selectorText.includes(key)
          && html.includes(rule.selectorText.slice(4, 11)),
      )
      .map((rule) => rule.cssText)
      .join("\n");
  }
};

const handleRender = async (
  rootEl: HTMLDivElement,
  cache: EmotionCache,
  signal: AbortSignal,
  mod: {
    counter: number;
    code: string;
    transpiled: string;
    controller: AbortController;
  },
) => {
  console.log("handleRender");
  const counter = mod.counter;

  if (!rootEl) return false;

  for (let attempts = 100; attempts > 0; attempts--) {
    if (signal.aborted) return false;
    const html = rootEl.innerHTML;
    if (html) {
      let css = mineFromCaches(cache, html);

      try {
        console.log("Prettifying CSS");
        css = await prettierCss(css);
      } catch (error) {
        console.error("Error prettifying CSS:", error);
      }

      if (mod.counter !== counter) return false;
      return { css, html };
    }
    await wait(10);
  }
  return false;
};

const handleDefaultPage = async () => {
  const mod = {
    counter: 0,
    code: "",
    transpiled: "",
    controller: new AbortController(),
  };
  const mutex = new Mutex();
  const { cSess } = await import("./ws");

  BC.onmessage = async ({ data }) => {
    const { i, transpiled, code } = data;

    if (transpiled) {
      cSess.session.code = code;
      if (mod.counter !== i) {
        mod.counter = i;
        renderApp({
          transpiled,
          rootElement: document.getElementById("root")! as HTMLDivElement,
        });
      }
    }
  };

  window.onmessage = async ({ data }) => {
    const { i, transpiled } = data;

    if (!i || !transpiled) return;
    if (i === "undefined" || transpiled === "undefined") return;
    // console.log("window.onmessage", i, transpiled);
    // if (i > mod.counter && transpiled) {
    // console.log("rerender");
    if (mod.counter >= i) return;
    mod.counter = i;
    mod.controller.abort();
    const { signal } = (mod.controller = new AbortController());

    mod.counter = i;
    mod.transpiled = transpiled;

    if (signal.aborted) return false;

    await mutex.runExclusive(async () => {
      if (signal.aborted) return;

      const myEl = document.createElement("div")! as HTMLDivElement;
      myEl.style.height = "100%";
      myEl.style.width = "100%";
      myEl.style.display = "none";
      document.body.appendChild(myEl);

      const rendered = await renderApp({ rootElement: myEl, transpiled });
      if (signal.aborted) return false;

      await wait(200);
      if (signal.aborted) return false;

      if (signal.aborted) {
        try {
          rendered !== null && rendered !== undefined && rendered!.cleanup !== undefined && rendered.cleanup();
          document.body.removeChild(myEl);
          myEl.remove();
        } catch (e) {
          console.error(e);
        }
        return;
      }

      const res = await handleRender(
        myEl,
        rendered?.cssCache!,
        signal,
        mod,
      );

      if (!res) return rendered?.cleanup();

      const { css, html } = res;
      if (html === "<div style=\"width: 100%; height: 100%;\"></div>") {
        return rendered?.cleanup();
      }

      window.parent.postMessage({ i, css, html }, "*");

      const old = document.getElementById("root")!;
      renderedAPPS!.get(old!)!.cleanup();
      myEl.style.display = "block";
      document.body.removeChild(old);

      old.remove();

      myEl.id = "root";
    });
    // }
    return false;
  };
};

// Main execution
const main = async () => {
  // await createDirectories();
  // console.log("main "  + location.pathname);
  // console.log("main "  + codeSpace);

  if (location.pathname === `/live/${codeSpace}`) {
    // console.log("live page");
    handleLivePage();
  } else if (location.pathname === `/live/${codeSpace}/dehydrated`) {
    handleDehydratedPage();
  } else if (location.pathname === `/live/${codeSpace}/iframe`) {
    await handleDefaultPage();
  }

  await initializeApp();
};

if (location.pathname.startsWith("/live")) {
  main();
}
