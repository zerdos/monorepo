export const defaultExaple = `import * as React from "react";
import ReactDOM from "react-dom";

const Counter = (
    { initial = 0 }
) => {
    const [clicks, setClicks] = React.useState(initial);

    return <div>
        <p>Clicks: <strong>{clicks}</strong></p>
        <button onClick={() => setClicks(clicks + 1)}>+</button>
        <button onClick={() => setClicks(clicks - 1)}>-</button>
    </div>;
};

ReactDOM.render(
    <Counter initial={0} />,
    document.getElementById("root")
);
`;

export const html = (_injection = "") =>
  `<!DOCTYPE html>
<html>
<head>
  <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
  <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1">
  <meta content="utf-8" http-equiv="encoding">

 
  <style>
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block
    }

    body {
      line-height: 1
    }

    ol,
    ul {
      list-style: none
    }

    blockquote,
    q {
      quotes: none
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none
    }

    table {
      border-collapse: collapse;
      border-spacing: 0
    }

    #container {
      background-color: #1E1E1E;
      width: 100vw;
      height: 100vh;
      animation-duration: 1s;
      animation-name: opening;
    }

    body {
      overflow: hidden;
      width: 100%;
      height: 100vh;
    }

    @keyframes opening {
      from {
        width: 10%;
        height: 20vh;
      }

      66% {
        width: 100%;
        height: 20vh;
      }

      to {
        width: 100%;
        height: 100vh;
      }
    }


    #error {
      display: none;
      background-color: red;
      opacity: 0.7;
    }

    #root {
      display: none;
    }

    .draggable {
      margin: 24px;
      padding: 32px;
      position: absolute;
      touch-action: none;
      overflow: hidden;
      z-index: 2;
      word-wrap: break-word;
      right: 24px;
      /* float: right; */
      /* top: 24px; */
      /* right: 24px ; */
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
      font-size: 32px;
      background-color: #ddd;
      border-radius: 16px;
      width: fit-content;
      max-width: 40vw;
      background: #ddd;
      box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
    }

    .almosthidden {
      opacity: 0.5;
    }

    button {
      font-size: large;
    }
  </style>

</head>
<body>
  <div id="error" class="draggable"></div>
  <div id="root" class="draggable resize-drag"></div>
  <div id="container"></div>
  <script type="module">
  ` + _injection + ` 
  </script>
  <script type="module">
    import {startMonaco} from "https://unpkg.com/@zedvision/smart-monaco-editor@6.2.3/lib/editor.js"
    import {run} from "https://unpkg.com/@zedvision/code@6.1.2/code.zed-vision.min.js"
    run(startMonaco);
  </script>
</body>
</html>`;
