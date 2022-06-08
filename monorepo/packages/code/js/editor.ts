import * as monaco from "monaco-editor";
import "monaco-editor/esm/vs/editor/editor.main";

import codicon from "monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.ttf";
// import { parse } from "@babel/parser";
// import traverse from "@babel/traverse";
// import MonacoJSXHighlighter from "monaco-jsx-highlighter";
// import Buffer from "buffer";

// globalThis.Buffer = Buffer;

const monEnv = {
  getWorkerUrl: function (_workerId: string, label: string) {
    if (label === "typescript" || label === "javascript") {
      return "monaco-editor/esm/vs/language/typescript/ts.worker.js";
    }
    return "monaco-editor/esm/vs/editor/editor.worker.js";
  },
};

Object.assign(globalThis, { MonacoEnvironment: monEnv });

let started = false;

const returnModules = {
  editor: {} as unknown as ReturnType<typeof monaco.editor.create>,
  monaco,
};

export const startMonaco = async (
  { code, container, name }: {
    code: string;
    container: HTMLDivElement;
    name: string;
  },
) => {
  console.log("monaco-editor");
  if (!started) started = true;
  else return returnModules;
  const shadowRoot = container.attachShadow({
    mode: "open",
  });
  const innerContainer = document.createElement("div");
  shadowRoot.appendChild(innerContainer);
  innerContainer.style.width = "100%";
  innerContainer.style.height = "100%";

  const outerStyle = document.createElement("style");
  outerStyle.innerText = ` @font-face {
    font-family: codicon;
    font-display: block;
    src: url(${codicon}) format("truetype");
}`;
  document.head.appendChild(outerStyle);

  const innerStyle = document.createElement("style");
  innerStyle.innerText = `@import url("ws.css");
  @font-face {
    font-family: codicon;
    font-display: block;
    src: url(${codicon}) format("truetype");
}
  
  `;
  shadowRoot.appendChild(innerStyle);

  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    baseUrl: "https://spike.land/live/",
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    lib: [
      "dom",
      "dom.iterable",
      "esnext",
    ],
    allowJs: true,
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true,
    forceConsistentCasingInFileNames: true,
    noFallthroughCasesInSwitch: true,
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,

    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    declaration: false,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    noEmitOnError: true,
    maxNodeModuleJsDepth: 10,

    jsxImportSource: "@emotion/react",
    jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
    allowUmdGlobalAccess: true,
  });

  monaco.languages.typescript.typescriptDefaults
    .setDiagnosticsOptions({
      noSuggestionDiagnostics: true,
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });

  const editor = monaco.editor.create(innerContainer, {
    model: monaco.editor.createModel(
      code,
      "typescript",
      monaco.Uri.parse("https://spike.land/live/" + name + ".tsx"),
    ),
    language: "typescript",
    useShadowDOM: true,
    scrollbar: {
      scrollByPage: false,
      alwaysConsumeMouseWheel: false,
    },
    scrollBeyondLastLine: false,
    scrollPredominantAxis: false,

    // smoothScrolling: true,

    codeLens: true,
    suggest: {
      /**
       * Overwrite word ends on accept. Default to false.
       */
      insertMode: "replace",
      /**
       * Enable graceful matching. Defaults to true.
       */
      filterGraceful: true,
      /**
       * Prevent quick suggestions when a snippet is active. Defaults to true.
       */
      snippetsPreventQuickSuggestions: true,
      /**
       * Favors words that appear close to the cursor.
       */
      localityBonus: true,
      /**
       * Enable using global storage for remembering suggestions.
       */
      shareSuggestSelections: true,
      /**
       * Enable or disable icons in suggestions. Defaults to true.
       */
      showIcons: true,
      /**
       * Enable or disable the suggest status bar.
       */
      showStatusBar: false,
      /**
       * Enable or disable the rendering of the suggestion preview.
       */
      preview: true,
      /**
       * Configures the mode of the preview.
       */
      previewMode: "prefix",
      /**
       * Show details inline with the label. Defaults to true.
       */
      showInlineDetails: true,
      /**
       * Show method-suggestions.
       */
      showMethods: true,
      /**
       * Show function-suggestions.
       */
      showFunctions: true,
      /**
       * Show constructor-suggestions.
       */
      showConstructors: true,
      /**
       * Show deprecated-suggestions.
       */

      /**
       * Show field-suggestions.
       */

      /**
       * Show color-suggestions.
       */
      showColors: true,
      /**
       * Show file-suggestions.
       */
      showFiles: true,
      /**
       * Show reference-suggestions.
       */
      showReferences: true,
      /**
       * Show folder-suggestions.
       */
      showFolders: true,
      /**
       * Show typeParameter-suggestions.
       */
      showTypeParameters: true,
      /**
       * Show issue-suggestions.
       */
      showIssues: true,
      /**
       * Show user-suggestions.
       */
      showUsers: true,
      /**
       * Show snippet-suggestions.
       */
      showSnippets: true,
    },

    automaticLayout: true,

    theme: "vs-dark",
    autoClosingBrackets: "always",
  });

  const regex1 = / from \'\.\./ig;

  const regex2 = / from \'\./ig;

  const search = / from \'https:\/\/spike\.land\/live\/[a-zA-Z]+/gm;
  const replaced = code.replaceAll(regex1, " from 'https://spike.land/live")
    .replaceAll(regex2, " from 'https://spike.land/live");

  const models = replaced.matchAll(search);
  console.log("load more models");

  for (const match of models) {
    const extraModel = match[0].slice(7) + ".tsx";
    monaco.editor.createModel(
      await fetch(extraModel).then((res) => res.text()),
      "typescript",
      monaco.Uri.parse(extraModel),
    );
  }

  // const defaultOptions = {
  //   parser: "babel", // for reference only, only babel is supported right now
  //   isHighlightGlyph: false, // if JSX elements should decorate the line number gutter
  //   iShowHover: false, // if JSX types should  tooltip with their type info
  //   isUseSeparateElementStyles: false, // if opening elements and closing elements have different styling
  //   // you can pass your own custom APIs, check core/ and utils/ for more details
  //   monacoEditorManager: null,
  //   decoratorMapper: null,
  //   jsxCommenter: null,
  // };

  // const monacoJSXHighlighter = new MonacoJSXHighlighter(
  //   monaco,
  //   parse,
  //   traverse,
  //   editor,
  //   defaultOptions,
  // );

  // // Activate highlighting (debounceTime default: 100ms)
  // monacoJSXHighlighter.highlightOnDidChangeModelContent(100);
  // // Activate JSX commenting
  // monacoJSXHighlighter.addJSXCommentCommand();

  const throttle = (await import("lodash/throttle")).default;
  window.addEventListener(
    "resize",
    throttle(function () {
      editor.layout();
    }, 200),
  );

  (async () => {
    const { dtsFiles } = await import("./types.mjs");
    const {
      reactDts,
      // jsxDevRuntimeDts,
      jsxRuntimeDts,
      // reactExpDts,
      // globalDts,
      propTypesDts,
      cssTypeDts,
      framerDts,
      emotionStyled,
      emotionStyleBase,
      emotionCache,
      emotionJSXNameSpaceDTS,
      emotionJSXRuntimeDTS,
      emotionReactDts,
      emotionReactCssPropDts,
      emotionReactHelperDts,
      emotionThemingDts,
      emotionSerializeDts,
      emotionUtilsDts,
    } = dtsFiles;
    const importHelper = [
      {
        name: "react",
        url: reactDts,
        depend: ["global", "csstype", "prop-types"],
      },
      {
        name: "react/jsx-runtime",
        url: jsxRuntimeDts,
        depend: ["global", "csstype", "prop-types"],
      },
      {
        name: "react/jsx-dev-runtime",
        url: jsxRuntimeDts,
        depend: ["global", "csstype", "prop-types"],
      },
      // {
      // name: "react-exp",
      // url: reactExpDts,
      // depend: [],
      // },
      // {
      // name: "global",
      // url: globalDts,
      // depend: [],
      // },
      {
        name: "prop-types",
        url: propTypesDts,
        depend: [],
      },
      {
        name: "csstype",
        url: cssTypeDts,
        depend: [],
      },
      {
        name: "@emotion/base",
        url: emotionStyleBase,
        depend: [
          "@emotion/react",
          "@emotion/serialize",
          "react",
        ],
      },
      {
        name: "@emotion/styled",
        url: emotionStyled,
        depend: [
          "@emotion/react",
          "@emotion/serialize",
          "react",
        ],
      },
      {
        name: "@emotion/cache",
        url: emotionCache,
        depend: ["@emotion/utils"],
      },
      {
        name: "@emotion/react",
        url: emotionReactDts,
        depend: ["@emotion/cache"],
      },
      {
        name: "@emotion/react/jsx-runtime",
        url: emotionJSXRuntimeDTS,
        depend: ["@emotion/cache"],
      },
      {
        name: "@emotion/react/jsx-dev-runtime",
        url: emotionJSXRuntimeDTS,
        depend: ["@emotion/cache"],
      },
      {
        name: "@emotion/react/jsx-namespace",
        url: emotionJSXNameSpaceDTS,
        depend: ["@emotion/utils", "type"],
      },
      {
        name: "@emotion/react/theming",
        url: emotionThemingDts,
        depend: ["@emotion/utils", "type"],
      },
      {
        name: "@emotion/react/css-prop",
        url: emotionReactCssPropDts,
        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/react/helper",
        url: emotionReactHelperDts,
        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/serialize",
        url: emotionSerializeDts,

        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/utils",
        url: emotionUtilsDts,
        depend: [],
      },
      {
        name: "framer-motion",
        url: framerDts,
        depend: ["popmotion"],
      },
    ];

    const dts = importHelper.map(({ name, url }) =>
      async () =>
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await (await fetch(
            url,
          )).text(),
          `https://spike.land/live/${name}.d.ts`,
        )
    );

    const pAll = (await (import("p-all"))).default;
    await pAll(dts, { concurrency: 2 });

    monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSuggestionDiagnostics: false,
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });
  })();
  returnModules.editor = editor;

  return returnModules;
};
