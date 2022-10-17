import { edit } from "ace-builds";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/mode-typescript";

const mod = {
  value: '',
  silent: false
}

export async function startAce(code: string, cb) {
  // Const {ace} = window;
  const editor = edit("editor", {
    autoScrollEditorIntoView: false,
    useWorker: true,
    scrollPastEnd: true,
    copyWithEmptySelection: false,
  });
  editor.setTheme("ace/theme/monokai");

  editor.session.setMode("ace/mode/typescript", () => ({ jsx: true }));
  editor.session.setValue(code);
  mod.value = code;   



  editor.session.on('change', function(delta) {
    if(mod.silent) return;
    const value = editor.session.getValue(code);
    if (mod.value!==value) {
      mod.value = value;
      cb(value);
    }
  });
  
  return {
    getValue: ()=> mod.value,
    setValue: (code) => {
      if (mod.value!==code) {
        mod.silent = true;
        mod.value = code;
        editor.session.setValue(code);
        mod.silent = false;
      }
    }
  }
}
