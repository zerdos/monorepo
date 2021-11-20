import { importScript } from "./importScript.mjs";

export const run = async (mode = "window", code = "") => {
  if (!window.React) {
    await (Promise.all([
      importScript(
        "https://unpkg.com/react@17.0.2/umd/react.production.min.js",
      ),
      importScript(
        "https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js",
      ),
      importScript(
        "https://unpkg.com/react-is@17.0.2/umd/react-is.production.min.js",
      ),
    ]));
  }

  window.process = { env: { NODE_ENV: "production" } };

  const { run: runCode } = await import("../dev.mjs");

  const { starterCode } = window;

  return runCode(mode, starterCode || code);
};
