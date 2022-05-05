/** @jsxImportSource @emotion/react */
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { render } from "react-dom";
import type { ICodeSession } from "./session";
import { prettier } from "./prettierEsm";
import { babelTransform as transform } from "./babelEsm";
import { renderFromString } from "./renderToString";
import throttle from "lodash/throttle";

export interface IRunnerSession extends ICodeSession {
  changes: unknown[];
  errorText: string;
  setChild: Dispatch<SetStateAction<ReactNode[]>>;
  url: string;
}

async function startMonacoWithSession(session: IRunnerSession) {
  console.log("start monaco with session");
  const monacoEditorDom = document.querySelector("#monacoEditor");
  if (!monacoEditorDom) {
    console.log("no monaco dom, exiting");
    return;
  }

  const { startMonaco } = await import("./editor");

  const { editor, monaco } = await startMonaco(
    /**
     * @param {any} code
     */
    {
      container: monacoEditorDom,
      code: session.code,
    },
  );

  const model = editor.getModel();

  let throttleTime = 0;

  let runnerDebounced = throttle(runner, throttleTime);

  editor.onDidChangeModelContent((ev) =>
    runnerDebounced(
      model.getValue() as string,
      ev.changes,
      session,
      ++session.i,
    )
  );

  Object.assign(globalThis, { monaco, editor, model });

  // monaco.languages.registerOnTypeFormattingEditProvider("typescript", {
  //   autoFormatTriggerCharacters: ["}", "{", ")", "(", ";"],

  //   async provideOnTypeFormattingEdits(model) {
  //     const text = await formatter(model.getValue());

  //     return [
  //       {
  //         range: model.getFullModelRange(),

  //         text,
  //       },
  //     ];
  //   },
  // });
}

async function getErrors({ monaco, editor }) {
  if (!monaco) {
    return [{ messageText: "Error with the error checking. Try to reload!" }];
  }

  const model = editor.getModel();
  const worker = await monaco.languages.typescript.getTypeScriptWorker();
  const client = await worker(model);

  const filename = model.uri.toString();
  const diag = client.getSemanticDiagnostics(filename);
  const comp = client.getCompilerOptionsDiagnostics(filename);
  const syntax = client.getSyntacticDiagnostics(filename);
  const fastError = await Promise.race([diag, comp, syntax]);

  // Model.dispose();
  console.log(fastError);
  return [];
}

// Let getHtmlAndCss;

async function runner(
  c: string,
  changes: unknown[],
  session: IRunnerSession,
  counter: number,
) {
  // session.changes.push(changes);

  // esbuildEsmTransform = esbuildEsmTransform ||
  //   (await import("./esbuildEsm.ts")).transform;

  try {
    const code = prettier(c);

    const transpiled = transform(c);

    let restartError = false;
    /// yellow
    if (transpiled.length > 0) {
      const { html, css, App } = await renderFromString(transpiled);

      try {
        if (session.i > counter) {
          runnerDebounced = throttle(runner, ++throttleTime);
          return;
        }

        const newSess = {
          code,
          transpiled,
          i: counter,
          html,
          css,
        };

        // Session.html = zbody.innerHTML;

        const target = document.createElement("div");

        render(<App />, target);
        if (!target.innerHTML) return;

        session.setChild((c: ReactNode[]) => [...c, <App />]);

        globalThis.App = App;

        const { saveCode } = await import("./ws");

        saveCode(newSess);
        session = { ...session, ...newSess };

        return;
      } catch (error) {
        console.error("EXCEPTION");
        console.error(error);
        restartError = true;
        console.error({ restartError });
      }
    }

    if (session.i > counter) {
      return;
    } else if (throttleTime > 0) {
      runnerDebounced = throttle(runner, --throttleTime);
    }

    const error = await getErrors(session);

    if (restartError) {
      error.push(
        { messageText: "Error while starting the app. Check the console!" },
      );
    }

    if (error.length > 0) {
      console.log({ err: error });
    }
  } catch (error) {
    console.error({ error });
  }
}

export async function quickStart(
  session: IRunnerSession,
) {
  const { renderPreviewWindow } = await import(
    "./renderPreviewWindow"
  );

  await renderPreviewWindow(session);

  await startMonacoWithSession(session);
}
