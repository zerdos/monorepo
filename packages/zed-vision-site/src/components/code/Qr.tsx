/** @jsx jsx */
import { css, jsx } from "@zedvision/emotion-react";
import React from "react";
import { importScript } from "./importScript.js";

export const Qr: React.FC = () => {
  const ref = React.useRef(null);
  const [retry, setRetry] = React.useState(3);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let qr;
    const connect = async () => {
      await importScript(
        "https://unpkg.com/@zedvision/qrious@8.5.7/dist/qrious.min.js",
      );
      const req = await fetch("https://code.zed.vision/token");
      const data = await req.json();

      setCounter(60);
      const key = data.key;
      const url = `https://zed.vision/${key}`;

      const options = {
        element: ref.current,
        size: 200,
        foregroundAlpha: .9,
        foreground: "red",
        padding: 12,
        backgroundAlpha: 0.8,
        background: "black",
        value: url,
      };
      if (qr) {
        qr.set(options);
      } else {
        qr = new window.QRious(
          options,
        );
      }

      const check = await fetch(`https://code.zed.vision/check?key=${key}`);
      const res = await check.json();
      if (res.expired === false) {
        location.href = "https://zed.vision/code/";
      }
      setRetry(retry - 1);
    };
    if (typeof window !== "undefined" && retry > 0) connect();
  }, [retry]);

  React.useEffect(() => {
    if (typeof window !== "undefined" && counter) {
      setTimeout(() => setCounter((x: number) => x - 1), 1000);
    }
  }, [counter]);

  return <a href="/code/">
    {retry > 0 && <div
      css={css`
        background: blue;
        display: inline-block;
        padding: 10px 10px 0px 10px;
        border-radius: 12px;
        text-align: center;
    `}
    >
      <img
        css={css`
              display: block;
              box-shadow: 0 0 ${10 + counter}px 5px ${
          retry === 3 ? "darkorange" : retry === 2 ? "green" : "darkred"
        };
          `}
        ref={ref}
      >
      </img>
      <p
        css={css`
              font-family: Roboto;
              font-size: 20px;
              text-transform: uppercase; 
              color: white;
            `}
      >
        Connect device
      </p>
    </div>}
  </a>;
};
//
