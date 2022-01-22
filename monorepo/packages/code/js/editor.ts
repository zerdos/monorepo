import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
import pAll from "p-all";

self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    // if (label === "json") {
    //   return "./vendor/language/json/json.worker.js";
    // }
    // if (label === "css" || label === "scss" || label === "less") {
    //   return "./vendor/language/css/css.worker.js";
    // }
    // if (label === "html" || label === "handlebars" || label === "razor") {
    //   return "./vendor/vendor/language/html/html.worker.js";
    // }
    if (label === "typescript" || label === "javascript") {
      return "./vendor/workers/language/typescript/ts.worker.js";
    }
    return "./vendor/workers/editor/editor.worker.js";
  },
};

export const startMonaco = async (
  { code, container }: { code: string; container: HTMLDivElement },
) => {
  // const {monaco} = window as unknown as {monaco: typeof m}
  // const modelUri = monaco.Uri.parse(
  //   language === "typescript" ? "/index.ts" : "/main.html",
  // );

  // const model = monaco.editor.createModel(
  //     code,
  //     language,
  //     modelUri,
  //   );

  // const model = modules.editor.getModel("/index.ts") || createModel();

  // const shadowRoot = container.attachShadow({
  //   mode: "open",
  // });

  // const innerContainer = document.createElement("div");
  // shadowRoot.appendChild(innerContainer);
  // const parent = container.parentElement;
  // if (parent) {
  //   const { width, height } = container.getClientRects()[0];
  //   innerContainer.style.width = `${Math.min(window.innerWidth, width)}px`;
  //   innerContainer.style.height = `${height}px`;
  // }

  // const innerStyle = document.createElement("style");
  // innerStyle.innerText =
  //   '@import "https://unpkg.com/monaco-editor@0.30.1/min/vs/editor/editor.main.css";';
  // shadowRoot.appendChild(innerStyle);

  // const customWorker = { customWorkerPath: window.location.href + "js/workers/custom-worker.js" };
  // monaco.languages.typescript.typescriptDefaults.setWorkerOptions(customWorker);

  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: 99,
    lib: [
      "DOM",
      "DOM.Iterable",
      "ES2018.Regexp",
      "ES2018.AsyncIterable",
      "ES2018",
      "ES2019",
    ],

    allowNonTsExtensions: true,
    moduleResolution: 2,
    module: 99,
    declaration: true,
    "inlineSources": true,
    noEmit: true,
    noEmitOnError: true,
    jsxFactory: "jsx",
    jsx: 4, // monaco.languages.typescript.JsxEmit,
    skipLibCheck: false,
    // esModuleInterop: true,
    // allowSyntheticDefaultImports: true,
    allowUmdGlobalAccess: true,
    // allowUmdGlobalAccess : true,
    // noLibCheck: t,
  });

  monaco.languages.typescript.typescriptDefaults
    .setDiagnosticsOptions({
      noSuggestionDiagnostics: true,
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });

  const editor = monaco.editor.create(container, {
    model: monaco.editor.createModel(
      code,
      "typescript",
      monaco.Uri.parse("file:///index.ts"),
    ),
    // lightbulb: { enabled: false },
    language: "typescript",

    theme: "vs-dark",
    // codeLens: false,
    // suggest: {
    //   showStatusBar: false,
    //   preview: false,
    // },
    // smoothScrolling: true,
    // scrollPredominantAxis: true,
    // scrollbar: {
    //   handleMouseWheel: true,
    //   alwaysConsumeMouseWheel: false,
    //   horizontal: "auto",
    //   vertical: "auto",
    //   useShadows: true,
    // },
    // selectionHighlight: true,
    // selectOnLineNumbers: true,
    // cursorSmoothCaretAnimation: true,
    // cursorBlinking: "smooth",
    // hideCursorInOverviewRuler: true,
    // cursorSurroundingLinesStyle: "all",
    // cursorSurroundingLines: 4,

    // formatOnPaste: true,
    // formatOnType: true,

    useShadowDOM: true,
  });

  // const { AutoTypings, LocalStorageCache } = await import(
  //   "@spike.land/monaco-editor-auto-typings"
  // );

  // const autoTypings = AutoTypings.create(editor, monaco.languages, {
  //   sourceCache: new LocalStorageCache(), // Cache loaded sources in localStorage. May be omitted
  //   // Other options...
  // });

  // monaco.editor.create(
  //   innerContainer,
  //   {
  //     formatOnType: false,

  //     scrollbar: {
  //       // Subtle shadows to the left & top. Defaults to true.
  //       useShadows: false,

  //       // Render vertical arrows. Defaults to false.
  //       verticalHasArrows: true,
  //       // Render horizontal arrows. Defaults to false.
  //       horizontalHasArrows: true,

  //       // Render vertical scrollbar.
  //       // Accepted values: 'auto', 'visible', 'hidden'.
  //       // Defaults to 'auto'
  //       vertical: "visible",
  //       // Render horizontal scrollbar.
  //       // Accepted values: 'auto', 'visible', 'hidden'.
  //       // Defaults to 'auto'
  //       horizontal: "visible",

  //       verticalScrollbarSize: 17,
  //       horizontalScrollbarSize: 17,
  //       arrowSize: 30,
  //     },
  //     minimap: {
  //       enabled: true,
  //       side: "right",
  //       size: "fit",
  //       showSlider: "always",
  //     },
  //     folding: true,
  //     glyphMargin: false,
  //     wordWrap: "off",
  //     showUnused: true,

  //     //       glyphMargin: true,
  //     scrollBeyondLastLine: false,
  //     autoClosingQuotes: "beforeWhitespace",
  //     padding: {
  //       bottom: 300,
  //     },
  //     lineNumbers: "on", //isMobile() ? "off" : "on",

  //     autoClosingBrackets: "beforeWhitespace",

  //     smartSelect: {
  //       selectLeadingAndTrailingWhitespace: true,
  //     },
  //     autoClosingOvertype: "auto",

  //     suggest: {},
  //     codeLens: true,
  //     autoSurround: "languageDefined",
  //     // acceptSuggestionOnCommitCharacter: true,
  //     trimAutoWhitespace: false,
  //     codeActionsOnSaveTimeout: 100,
  //     model,
  //     value: code,
  //     language: language,
  //     theme: "vs-dark",
  //     ...options,
  //   },
  // ),
  //};

  // function getDefaultComplierOpts() {
  //   return { target: 99, jsx: 1, allowNonTsExtensions: true };
  // }

  window.addEventListener("resize", () => {
    // const { width, height } = container.getClientRects()[0];
    // innerContainer.style.width = `${Math.min(window.innerWidth, width)}px`;
    // innerContainer.style.height = `${Math.min(window.innerHeight, height)}px`;

    editor.layout();
  });

  setTimeout(async () => {
    const importHelper = [
      {
        name: "react",
        url: "https://unpkg.com/@types/react@17.0.38/index.d.ts",
        depend: ["global", "csstype", "react-dom", "prop-types"],
      },
      {
        name: "react/jsx-dev-runtime",
        url: "https://unpkg.com/@types/react@17.0.38/jsx-dev-runtime.d.ts",
        depend: ["global", "csstype", "react-dom", "prop-types"],
      },
      {
        name: "react-exp",
        url: "https://unpkg.com/@types/react@17.0.38/experimental.d.ts",
        depend: [],
      },
      {
        name: "global",
        url: "https://unpkg.com/@types/react@17.0.38/global.d.ts",
        depend: [],
      },
      {
        name: "prop-types",
        url: "https://unpkg.com/@types/prop-types@15.7.4/index.d.ts",
        depend: [],
      },
      {
        name: "react-dom",
        url: "https://unpkg.com/@types/react-dom@17.0.11/index.d.ts",
        depend: [],
      },
      {
        name: "csstype",
        url: "https://unpkg.com/csstype@3.0.9/index.d.ts",
        depend: [],
      },
      {
        name: "@emotion/styled/base.d.ts",
        url: "https://unpkg.com/@emotion/styled@11.6.0/types/base.d.ts",
        depend: [
          "@emotion/react",
          "@emotion/serialize",
          "react",
        ],
      },
      {
        name: "@emotion/styled/index.d.ts",
        url: "https://unpkg.com/@emotion/styled@11.6.0/types/index.d.ts",
        depend: [
          "@emotion/react",
          "@emotion/serialize",
          "react",
        ],
      },
      {
        name: "@emotion/cache/index.d.ts",
        url: "https://unpkg.com/@emotion/cache@11.6.0/types/index.d.ts",
        depend: ["@emotion/utils"],
      },
      {
        name: "@emotion/react/index.d.ts",
        url: "https://unpkg.com/@emotion/react@11.7.0/types/index.d.ts",
        depend: ["@emotion/cache"],
      },
      {
        name: "@emotion/react/jsx-namespace.d.ts",
        url: "https://unpkg.com/@emotion/react@11.7.0/types/jsx-namespace.d.ts",
        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/react/css-prop.d.ts",
        url: "https://unpkg.com/@emotion/react@11.7.0/types/css-prop.d.ts",
        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/react/helper.d.ts",
        url: "https://unpkg.com/@emotion/react@11.7.0/types/helper.d.ts",
        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/react/theming.d.ts",
        url: "https://unpkg.com/@emotion/react@11.7.0/types/theming.d.ts",
        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/serialize/index.d.ts",
        url: "https://unpkg.com/@emotion/serialize@1.0.2/types/index.d.ts",

        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/utils/index.d.ts",
        url: "https://unpkg.com/@emotion/utils@1.0.0/types/index.d.ts",
        depend: [],
      },
      {
        name: "framer-motion",
        url: "https://unpkg.com/framer-motion@6.2.1/types/index.d.ts",
        depend: ["popmotion"],
      },
      {
        name: "framer-motion/types/render/dom/motion.d.ts",
        url:
          " https://unpkg.com/framer-motion@6.2.1/types/render/dom/motion.d.ts",
        depend: ["popmotion"],
      },
      {
        name: "popmotion",
        url: "https://unpkg.com/popmotion@11.0.3/lib/index.d.ts",
      },
    ];

    const dts = importHelper.map(({ name, url }) =>
      async () => {
        const content = await (await fetch(
          url,
        )).text();

        const nameOfLib = monaco.Uri.parse(
          name.includes("@")
            ? `/node_modules/${name}`
            : (name.endsWith(".d.ts")
              ? "/node_modules/@types/" + name
              : "/node_modules/@types/" + name + "/index.d.ts"),
        ).fsPath;

        // const customWorker = { customWorkerPath: window.location.href + "js/custom-worker.js" };
        // console.log({customWorker})
        // monaco.languages.typescript.typescriptDefaults.setWorkerOptions(customWorker);
        // console.log(nameOfLib, content);
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          content,
          nameOfLib,
        );
        return true;
      }
    );

    await pAll(dts, { concurrency: 2 });

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSuggestionDiagnostics: false,
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });
  }, 100);

  // return modules;
  return { editor, monaco };
};

// modules.monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
//     target: 99,
//     allowNonTsExtensions: true,
//     allowUmdGlobalAccess: true,
//     strict: true,
//     allowJs: true,
//     noEmitOnError: true,
//     allowSyntheticDefaultImports: true,
//     moduleResolution: 2, //nodeJS
//     module: 99,
//     noEmit: true,

//     typeRoots: ["node_modules/@types"],
//     jsx: 5,
//     esModuleInterop: true,
//   });
// );
//};

function isMobile() {
  if (typeof window === "undefined") {
    return false;
  }

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    .test(
      window.navigator.userAgent,
    );
}
