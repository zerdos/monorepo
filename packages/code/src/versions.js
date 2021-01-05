export default function () {
  const editor = "11.3.0";
  const emotionRenderer = "11.3.0";

  const v = {
    ipfs: "0.52.4-rc.4",
    workbox: "6.0.2",
    babel: "7.12.12",
    code: "11.3.4",
    emotionRenderer:
      `https://unpkg.com/@zedvision/emotion-react-renderer@${emotionRenderer}/dist/bundle.js`,
    shadb: "11.2.0",
    prettier: "2.2.1",
    editor:
      `https://unpkg.com/@zedvision/smart-monaco-editor@${editor}/dist/editor.js`,
    diff: "11.2.0",
    sha256: "11.0.5",
    uuid: "8.3.2",
    comlink: "4.3.0",
  };

  return v;
}
