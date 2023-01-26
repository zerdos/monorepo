import { edit } from "ace-builds";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/mode-typescript";

const mod = {
  value: "",
  silent: false,
};

export async function startAce(
  code: string,
  cb: (_code: string) => void,
  container: HTMLDivElement,
) {
  // Const {ace} = window;
  const editor = edit(container, {
    autoScrollEditorIntoView: false,
    useWorker: true,
    tabSize: 2,
    enableBasicAutocompletion: true,
    behavioursEnabled: true,
    scrollPastEnd: true,
    copyWithEmptySelection: false,
  });
  editor.setTheme("ace/theme/monokai");

  editor.session.setMode("ace/mode/typescript", () => ({ jsx: true }));
  editor.session.setValue(code);
  mod.value = code;

  editor.session.on("change", () => {
    if (mod.silent) return;

    const value = editor.session.getValue();
    if (mod.value !== value) {
      mod.value = value;
      cb(value);
    }
  });

  return {
    getValue: () => mod.value,
    getErrors: () => Promise.resolve([] as string[]),
    setValue: (code: string) => {
      if (mod.value !== code) {
        mod.silent = true;
        mod.value = code;
        editor.session.setValue(code);
        mod.silent = false;
      }
    },
  };
}
