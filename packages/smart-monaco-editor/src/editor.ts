import type AMDLoader from "https://raw.githubusercontent.com/microsoft/vscode-loader/master/src/loader.d.ts";
import type * as monaco from "https://unpkg.com/monaco-editor@0.21.2/monaco.d.ts";
interface ISmartMonacoEditor {
  monaco: monaco;
  editor: monaco.editor.IStandaloneCodeEditor;
}

interface StartMonaco {
  onChange: (code: string) => void;
  code: string;
  language: "html" | "javascript" | "typescript";
}
const modules = {} as unknown as ISmartMonacoEditor;

export const startMonaco: (props: StartMonaco) => Promise<ISmartMonacoEditor> =
  async (
    { onChange, code, language },
  ) => {
    const container = window.document.getElementById("container");
    if (!container) {
      const el = document.getElementById("container");
      el.id = "container";
      document.body.appendChild(el);
    }

    if (window["monaco"] === undefined) {
      const vsPath =
        "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.21.2/min/vs";
      const { require } = await loadScript(
        `${vsPath}/loader.min.js`,
      ) as AMDLoader;

      require.config({ paths: { "vs": vsPath } });
      await new Promise((resolve) =>
        require(["vs/editor/editor.main"], (monaco) => {
          modules.monaco = monaco;
          resolve(monaco);
        })
      );
    } else {
      // editor.onDidChangeModelContent(() => onChange(editor.getValue()));
      // editor.setValue(code);
      return modules as unknown as ISmartMonacoEditor;
    }

    modules.editor = modules.monaco.editor.create(
      window.document.getElementById("container"),
      {
        cursorStyle: "block",
        formatOnType: true,
        scrollbar: {
          horizontal: "hidden",
          verticalHasArrows: true,
          verticalScrollbarSize: 20,
        },
        minimap: {
          enabled: true,
        },
        folding: false,
        multiCursorModifier: "alt",
        wordWrap: "on",
        wordWrapBreakAfterCharacters: ">([{]))],;}",
        mouseWheelZoom: false,
        wordWrapColumn: 80,

        //       glyphMargin: true,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        autoIndent: "brackets",
        autoClosingQuotes: "always",
        padding: {
          bottom: 300
        },
        lineNumbers: "on",
        autoClosingBrackets: "always",
        autoClosingOvertype: "always",

        suggest: {},
        codeLens: true,
        autoSurround: "languageDefined",
        // acceptSuggestionOnCommitCharacter: true,
        trimAutoWhitespace: true,
        codeActionsOnSaveTimeout: 100,
        model: modules.monaco.editor.createModel(
          code,
          language,
          modules.monaco.Uri.parse(
            language === "typescript"
              ? "file:///main.tsx"
              : "file:///main.html",
          ),
        ),
        value: code,
        language: language,
        theme: "vs-dark",
      },
    );

    modules.editor.onDidChangeModelContent(() =>
      onChange(modules.editor.getValue())
    );

    modules.monaco.languages.typescript.typescriptDefaults
      .setDiagnosticsOptions({
        noSuggestionDiagnostics: true,
        noSemanticValidation: true,
        noSyntaxValidation: true,
      });

    if (language === "typescript") {
      const importHelper = [
        {
          name: "react",
          url: "https://unpkg.com/@types/react@16.9.56/index.d.ts",
          depend: ["global", "csstype", "react-dom", "prop-types"],
        },
        {
          name: "global",
          url: "https://unpkg.com/@types/react@16.9.56/global.d.ts",
          depend: [],
        },
        {
          name: "prop-types",
          url: "https://unpkg.com/@types/prop-types@15.7.3/index.d.ts",
          depend: [],
        },
        {
          name: "react-dom",
          url: "https://unpkg.com/@types/react-dom@16.9.9/index.d.ts",
          depend: [],
        },
        {
          name: "csstype",
          url: "https://unpkg.com/csstype@3.0.4/index.d.ts",
          depend: [],
        },
        {
          name: "@emotion/styled/base.d.ts",
          url: "https://unpkg.com/@emotion/styled@11.0.0/types/base.d.ts",
          depend: ["@emotion/react", "@emotion/serialize", "react"],
        },
        {
          name: "@emotion/styled/index.d.ts",
          url: "https://unpkg.com/@emotion/styled@11.0.0/types/index.d.ts",
          depend: ["@emotion/react", "@emotion/serialize", "react"],
        },
        {
          name: "@emotion/cache/index.d.ts",
          url: "https://unpkg.com/@emotion/cache@11.0.0/types/index.d.ts",
          depend: ["@emotion/utils"],
        },
        {
          name: "@emotion/react/index.d.ts",
          url: "https://unpkg.com/@emotion/react@11.0.0/types/index.d.ts",
          depend: ["@emotion/cache"],
        },
        {
          name: "@emotion/react/jsx-namespace.d.ts",
          url:
            "https://unpkg.com/@emotion/react@11.0.0/types/jsx-namespace.d.ts",
          depend: ["@emotion/utils", "csstype"],
        },
        {
          name: "@emotion/react/css-prop.d.ts",
          url: "https://unpkg.com/@emotion/react@11.0.0/types/css-prop.d.ts",
          depend: ["@emotion/utils", "csstype"],
        },

        {
          name: "@emotion/react/helper.d.ts",
          url: "https://unpkg.com/@emotion/react@11.0.0/types/helper.d.ts",
          depend: ["@emotion/utils", "csstype"],
        },
        {
          name: "@emotion/react/theming.d.ts",
          url: "https://unpkg.com/@emotion/react@11.0.0/types/theming.d.ts",
          depend: ["@emotion/utils", "csstype"],
        },
        {
          name: "@emotion/serialize/index.d.ts",
          url: "https://unpkg.com/@emotion/serialize@1.0.0/types/index.d.ts",

          depend: ["@emotion/utils", "csstype"],
        },
        {
          name: "@emotion/utils/index.d.ts",
          url: "https://unpkg.com/@emotion/utils@1.0.0/types/index.d.ts",
          depend: [],
        },
      ];
      //# sourceMappingURL=importHelper.js.map
      const dts = importHelper.map(({ name, url }) =>
        (async () =>
          modules.monaco.languages.typescript.typescriptDefaults.addExtraLib(
            await (await fetch(
              url,
            )).text(),
            name.includes("@emotion")
              ? `file:///node_modules/${name}`
              : `file:///node_modules/@types/${name}/index.d.ts`,
          ))()
      );

      modules.monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
        {
          target: modules.monaco.languages.typescript.ScriptTarget.ESNext,
          allowNonTsExtensions: true,
          allowUmdGlobalAccess: true,
          strict: true,
          allowJs: true,
          noEmitOnError: true,
          allowSyntheticDefaultImports: true,
          moduleResolution:
            modules.monaco.languages.typescript.ModuleResolutionKind.NodeJs,
          module: modules.monaco.languages.typescript.ModuleKind.CommonJS,
          noEmit: true,
          typeRoots: ["node_modules/@types"],
          jsx: modules.monaco.languages.typescript.JsxEmit.React,
          jsxFactory: "React.createElement",
          jsxFragmentFactory: "React.Fragment",
          esModuleInterop: true,
        },
      );

      await Promise.all(dts);

      modules.monaco.languages.typescript.typescriptDefaults
        .setDiagnosticsOptions({
          noSuggestionDiagnostics: false,
          noSemanticValidation: false,
          noSyntaxValidation: false,
        });
      return modules as ISmartMonacoEditor;
    }
  };

function loadScript(src: string) {
  return new Promise(function (resolve, reject) {
    var s;
    s = window.document.createElement("script");
    s.src = src;
    s.onload = () => resolve(window);
    s.onerror = reject;
    window.document.head.appendChild(s);
  });
}
