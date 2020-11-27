import { Document } from "https://raw.githubusercontent.com/microsoft/TypeScript/master/lib/lib.dom.d.ts";
import { getKeys } from "./maintenance/maintenance.ts";
import { renderDraggableWindow } from "./DraggableWindow.js";
import { renderDraggableEditor } from "./DraggableEditor.js";
import { startMonaco } from "../../smart-monaco-editor/src/editor.ts";
import { importScript } from "./importScript.js";
import { starter } from "./starter.tsx";
import { sha256 } from "./sha256.ts";

const getUrl = () => {
  if (window.location.href.includes("zed.dev")) {
    return "https://code.zed.dev";
  }
  return "https://code.zed.vision";
};

// import Diff from "https://unpkg.com/diff@5.0.0/dist/diff.js";
// console.log(Diff.structuredPatch("hash1", "hash2", "amaaafa", "alma", "", ""));

interface Babel {
  transform: (
    code: string,
    options: {
      plugins: string[];
      presets: (string | [string, { [key: string]: boolean }])[];
    },
  ) => { code: string };
}
const document = (window as { document: Document }).document;
let firstLoad = true;

const { motion } = Motion;
let latestCode = "";
let busy = 0;
let keystrokeTillNoError = 0;

let errorReported = "";
let latestSavedCode = "";
let latestGoodCode = "";

let shareitAsHtml: () => void;

async function deleteHash(apiKey: string, hash: string) {
  try {
    const url = `https://code.zed.vision/keys/delete/?hash=${hash}`;
    const req = await fetch(url, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "API_KEY": apiKey,
      },
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function getCode(hash: string) {
  try {
    const list = `https://code.zed.vision/?h=${hash}`;
    const req = await fetch(list, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await req.json();
    if (data.code) return data.code as string;
    return "";
  } catch (e) {
    console.log(e);
    return "";
  }
}
async function getTranspiledCode(hash: string) {
  try {
    const list = `https://code.zed.vision/?h=${hash}`;
    const req = await fetch(list, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await req.json();
    if (data.codeTranspiled) return data.codeTranspiled as string;
    return "";
  } catch (e) {
    console.log(e);
    return "";
  }
}

export async function run(mode = "window") {
  async function regenerate(
    apiKey: string,
    prefix: string,
    deleteIfRenderedHTmlDiffers = false,
  ) {
    const keys = await getKeys(apiKey, prefix);
    keys.map((x) => x.name).map(async (hash) => {
      const code = await getCode(hash);
      if (!code) return "";
      const codeTranspiled = await getTranspiledCode(hash);
      const el = document.createElement("div");
      document.getElementById("root").replaceWith(el);
      el.id = "root";
      let transpiled;
      try {
        transpiled = transpileCode(code);
        if (transpiled !== codeTranspiled) {
          const searchRegExp = /setInterval/gi;
          const replaceWith = "///";

          const searchRegExp2 = /debugger/gi;
          const replaceWith2 = "///";

          window.ReactDOM.unmountComponentAtNode(
            document.getElementById("root"),
          );
          restartCode(
            transpiled.replaceAll(searchRegExp, replaceWith).replaceAll(
              searchRegExp2,
              replaceWith2,
            ),
          );
          const html2 = document.getElementById("root").innerHTML;
          const el2 = document.createElement("div");
          document.getElementById("root").replaceWith(el2);
          el2.id = "root";
          window.ReactDOM.unmountComponentAtNode(
            document.getElementById("root"),
          );
          restartCode(
            codeTranspiled.replaceAll(searchRegExp, replaceWith).replaceAll(
              searchRegExp2,
              replaceWith2,
            ),
          );
          const html = document.getElementById("root").innerHTML;
          if (html !== html2) {
            console.log(
              {
                hash,
                code,
                html1: html,
                html2,
                transpiled1: codeTranspiled,
                transpiled2: transpiled,
              },
            );
            deleteIfRenderedHTmlDiffers && await deleteHash(apiKey, hash);
          }
        }
      } catch (e) {
        console.error({ hash, code, transpiled });
      }
      //      console.log(transpileCode(code))
    });
  }

  Object.assign(window, { getKeys, getCode, restartCode, regenerate });

  // await importScript(
  //   "https://unpkg.com/react@17.0.1/umd/react.production.min.js",
  // );
  // await importScript(
  //   "https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js",
  // );

  // await importScript(
  //   "https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js",
  // );
  // await importScript(
  //   "https://unpkg.com/@emotion/styled@11.0.0/dist/emotion-styled.umd.min.js",
  // );
  // await importScript(
  //   "https://unpkg.com/react-dom@17.0.1/umd/react-dom-server.browser.production.min.js",
  // );

  // await importScript(
  //   "https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js",
  // );
  // await importScript(
  //   "https://unpkg.com/framer-motion@2.9.4/dist/framer-motion.js",
  // );

  // const workerDomImport = importScript(
  //   "https://unpkg.com/@ampproject/worker-dom@0.27.4/dist/main.js",
  // );

  if (mode === "editor") {
    renderDraggableEditor(motion, async () => {
      const link = await shareitAsHtml();
      window.open(link as unknown as string);
    });
  }

  if (mode == "window") {
    renderDraggableWindow(motion, async () => {
      const link = await shareitAsHtml();
      window.open(link as unknown as string);
    });
  }

  await importScript(
    "https://unpkg.com/@babel/standalone@7.12.9/babel.min.js",
  );

  // importScript(
  //   "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js",
  // );

  // const motion = Motion.motion;

  // const MyMotion = () =>
  //   /*#__PURE__*/ React.createElement(motion.div, {
  //     style: {
  //       dispay: "block",
  //       backround: "red",
  //       width: 300,
  //       height: 300,
  //     },
  //     drag: true,
  //     layout: true,
  //     animate: {
  //       scale: 2,
  //     },
  //   }, React.createElement("iframe", null));

  // const myRoot = document.getElementById("main-root");
  // ReactDOM.render(
  //   React.createElement(MyMotion, {}),
  //   myRoot,
  // );

  // document.body.appendChild(myRoot);

  // const code = transpileCode(
  //   `
  //   const motion = Motion.motion;
  //   const myMotion = ()=><motion.div drag layout animate ={{scale: 2}} ></motion.div>`,
  // );

  // console.log(code);

  (async () => {
    const example = await getCodeToLoad();
    latestGoodCode = example;

    const modules = await startMonaco({
      language: "typescript",
      code: example,
      onChange,
    });

    function onChange(code: string) {
      if (!modules) return;
      latestCode = code;

      if (!busy) {
        runner(latestCode);
      } else {
        const myCode = code;
        const cl = setInterval(() => {
          if (myCode !== latestCode || !busy) {
            clearInterval(cl);
          }

          if (!busy) {
            runner(latestCode);
          }
        }, 100);
      }
    }

    async function getErrors() {
      if (!modules || !modules.monaco) return;

      const modelUri = modules.monaco.Uri.parse(
        "file:///main.tsx",
      );

      //const model = window["monaco"].editor.getModel(modelUri);
      // getCodeToLoad;
      const tsWorker = await modules.monaco.languages.typescript
        .getTypeScriptWorker();

      const diag = await (await tsWorker(modelUri)).getSemanticDiagnostics(
        "file:///main.tsx",
      );
      const comp = await (await tsWorker(modelUri))
        .getCompilerOptionsDiagnostics(
          "file:///main.tsx",
        );

      const syntax = await (await tsWorker(modelUri)).getSyntacticDiagnostics(
        "file:///main.tsx",
      );

      return [...diag, ...comp, ...syntax];
    }

    async function runner(cd: string) {
      const { diff } = await import("../dist/diff.min.js");
      if (busy === 1) {
        return;
      }

      try {
        busy = 1;
        const err = await getErrors();
        const errorDiv = document.getElementById("error");
        busy = 0;

        if (cd !== latestCode) {
          return;
        }
        if (err && err.length) {
          if (latestCode != cd) {
            return;
          }
          if (errorReported === cd) {
            return;
          }

          // document.getElementById("root")!.classList.add("transparent");
          const slices = diff(latestGoodCode, cd, 0);

          if (slices.length <= 3) {
            modules.monaco.editor.setTheme("hc-black");
            return;
          }

          errorDiv!.innerHTML = err[0].messageText.toString();

          // document.getElementById("root").style.setProperty(
          //   "dispay",
          //   "none",
          // );

          errorDiv!.style.display = "block";
          errorReported = cd;

          // modules.monaco.editor.setTheme("vs-light");
          // setTimeout(() => {
          //   modules.monaco.editor.setTheme("hc-black");
          // }, keystrokeTillNoError++);

          return;
        }

        latestGoodCode = cd;

        errorDiv!.style!.display = "none";

        modules.monaco.editor.setTheme("vs-dark");

        // document.getElementById("root").classList.remove("transparent");
        keystrokeTillNoError = 0;

        busy = 0;
        restartCode(transpileCode(cd));
      } catch (err) {
        busy = 0;
        if (cd !== latestCode) {
          return;
        }

        modules.monaco.editor.setTheme("vs-light");
        setTimeout(() => {
          modules.monaco.editor.setTheme("hc-black");
        }, 50);
        console.error(err);
      }
    }

    //
  })();
  restartCode(transpileCode(await getCodeToLoad()));

  // document.getElementById("root")!.setAttribute("style", "display:block");
  // dragElement(document.getElementById("root"));
  // await workerDomImport;
  async function restartCode(transPiled: string) {
    const searchRegExp = /import/gi;
    const replaceWith = "///";

    const code = `
    Object.assign(window, React);
    if (window.Motion) {
        Object.assign(window, window.Motion);
    }
    if (window.emotionStyled){
      window.styled= window.emotionStyled;
    }
    ;
    ` + transPiled.replaceAll(
      searchRegExp,
      replaceWith,
    ).replace("export default", "DefaultElement = ");

    // console.log(code);

    // console.log(code);/
    // const url = createJSSourceBlob(code);
    // console.log(url);

    // const restart = new Function(
    //   "url",
    //   `return function(){

    const restart = async () => {
      //     console.log(code);
      const hydrate = new Function(
        "code",
        `return function(){  
          let DefaultElement;
        
        ${code}

                return ReactDOM.render(jsx(DefaultElement), document.getElementById("root"));
      }`,
      )();

      hydrate();

      shareitAsHtml = async () => {
        const renderToString = new Function(
          "code",
          `return function(){
            let DefaultElement;
  
          ${code}
  
                  return ReactDOMServer.renderToString(jsx(DefaultElement));
        }`,
        )();
        const HTML = renderToString();

        const css = Array.from(
          document.querySelector("head > style[data-emotion=css]").sheet
            .cssRules,
        ).map((x: any) => x.cssText).filter((cssRule) =>
          HTML.includes(cssRule.substring(3, 8))
        ).join("\n  ");

        //
        // For some reason, pre-rendering doesn't care about global styles, the site flickers without this patch
        //
        let bodyStylesFix;
        if (code.includes("body{")) {
          const start = code.indexOf("body{");
          const firstBit = code.slice(start);
          const last = firstBit.indexOf("}");
          bodyStylesFix = firstBit.slice(0, last + 1);
        }

        let motionDep = "";
        let motionScript = "";
        if (code.includes("Motion")) {
          motionDep =
            `<script crossorigin src="https://unpkg.com/framer-motion@2.9.4/dist/framer-motion.js"></script>`;

          motionScript = "const {motion} = Motion";
        }

        const iframe = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <head profile="http://www.w3.org/2005/10/profile">
        <link rel="icon" 
              type="image/png"
              href="https://zed.vision/favicon.ico">
        <style>
        ${bodyStylesFix}
        ${css}
        </style>
        </head>
        <body>
        <div id="root">
        ${HTML}
        </div>
        <script crossorigin src="https://unpkg.com/react@17.0.1/umd/react.production.min.js"></script>
        ${motionDep}
        <script crossorigin src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js"></script>
        <script crossorigin src="https://unpkg.com/@emotion/styled@11.0.0/dist/emotion-styled.umd.min.js"></script>
        <script type="module">
        Object.assign(window, emotionReact);

       const styled = window["emotionStyled"];

        let DefaultElement;

        ${code}

        ReactDOM.hydrate(jsx(DefaultElement), document.body.children[0]);
        </script>
        </body>
        </html>
        `;
        const iframeBlob = await createHTMLSourceBlob(iframe); //    saveHtml(iframe);
        const link = await saveHtml(iframeBlob);
        // console.log(link);
        return link;
      };

      // const renderToString =
      // const HTML = renderToString();

      // // console.log(HTML);

      // // document.getElementById("root").innxerHTML = HTML;

      //   const target = document.getElementsByTagName("iframe").item(0);

      // if (target) {
      //   const cloned = document.createElement("iframe");
      //   cloned.setAttribute("src", iframeBlob);

      //   setTimeout(() => {
      //     window.requestAnimationFrame(() => {
      //       target.setAttribute(
      //         "src",
      //         iframeBlob,
      //       );
      //       cloned.remove();
      //     });
      //   });
      // } else {
      //   await makeDraggable(iframeBlob);
      // }

      // document.getElementById("root").innerHTML = "";

      // const rootEl = document.getElementById("main-root");
      // rootEl.setAttribute("src", url);
      // rootEl.src = "./eeee.js";
      // console.log(rootEl);

      // MainThread.upgradeElement(
      //   rootEl,
      //   "https://unpkg.com/@ampproject/worker-dom@0.27.4/dist/worker/worker.js",
      // );
    };

    if (!firstLoad) {
      const saveCode = async (latestCode: string) => {
        // const helloWorld = new TextEncoder().encode("Hello World");

        // const encoded = gzipEncode(helloWorld);
        // const decoded = gzipDecode(encoded);
        // console.log(decoded);

        if (!location.origin.includes("zed.")) {
          return;
        }
        if (latestCode !== latestGoodCode) return;
        if (latestSavedCode === latestCode) return;
        latestSavedCode = latestCode;

        const body = {
          codeTranspiled: transpileCode(latestGoodCode),
          code: latestGoodCode,
        };

        const stringBody = JSON.stringify(body);
        const request = new Request(
          getUrl(),
          {
            body: stringBody,
            method: "POST",
            headers: { "content-type": "application/json;charset=UTF-8" },
          },
        );

        const response = fetch(request);
        const hash = await sha256(stringBody);
        // console.log(shaHash);

        // const { hash } = await response.json();

        try {
          const localStorage: Storage = window.localStorage;

          const prevHash = localStorage.getItem("codeBoXHash2");

          if (prevHash !== hash) {
            localStorage.setItem("codeBoXHash2", hash);
            localStorage.setItem(hash, latestGoodCode);
            setQueryStringParameter("h", hash);
          }
        } catch (e) {
          //         console.log("no localStorage");
        }
        await response;
      };

      saveCode(latestCode);
    }
    firstLoad = false;
    restart();
  }
  async function getCodeToLoad() {
    const search = new URLSearchParams(window.location.search);
    const keyToLoad = search.get("h") ||
      window.localStorage.getItem("codeBoXHash2");

    if (keyToLoad) {
      const content = window.localStorage.getItem(keyToLoad);
      if (content) return content;
      const cont = await window.SHATEST.get(keyToLoad);
      if (cont) return await cont;
      let text;
      try {
        const resp = await fetch(getUrl() + "/?h=" + keyToLoad);
        text = await resp.json();
      } catch (e) {
        console.error(e);

        return starter;
      }

      return text.code;
    }

    return starter;
  }

  function setQueryStringParameter(name: string, value: string) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState(
      {},
      "",
      decodeURIComponent(`${window.location.pathname}?${params}`),
    );
  }

  function createHTMLSourceBlob(code: string) {
    const blob = new Blob([code], { type: "text/html" });
    return blob;
  }

  async function saveHtml(htmlBlob: Blob) {
    const request = new Request(
      getUrl(),
      {
        body: htmlBlob,
        method: "POST",
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "SHARE": "true",
        },
      },
    );

    const response = await fetch(request);

    const { hash } = await response.json();
    return getUrl() + `/?r=${hash}`;
  }

  function transpileCode(code: string) {
    const { transform } = (window as unknown as { Babel: Babel })["Babel"];
    return transform(
      "/** @jsx jsx */\n" + `
  Object.assign(window, React);
  ` + code,
      {
        plugins: [],
        presets: [
          "react",
          ["typescript", { isTSX: true, allExtensions: true }],
        ],
      },
    ).code;
  }
}
