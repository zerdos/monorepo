/** @jsx jsx */
import { jsx } from "@emotion/react";
import {} from "react-dom/next";
// @ts-expect-error
import { DraggableWindow } from "./DraggableWindow.tsx";
// @ts-expect-error
import { wait } from "./wait.ts";
import type { ICodeSession } from "./session";
// Import { getHtmlAndCss
//  } from "./renderToString";

export const renderPreviewWindow = async (
  session: ICodeSession,
  room: string,
  keepFullScreen: boolean,
) => {
  const target = document.createElement("div");
  const editor = document.querySelector("#shadowEditor")!;
  // Target.style.display = "none";
  editor.style.opacity = "0";

  // Const Element = () => (
  //   <DraggableWindow
  //     onShare={() => open(`https://spike.land/api/room/${room}/public`)}
  //     onRestore={() => {}}
  //     position={session.mode === "window" ? "fixed" : "absolute"}
  //     session={session}
  //   />
  // );

  // const {html} = getHtmlAndCss( <Element></Element> as any );

  // target  .innerHTML = html;

  const { createRoot } = await import("react-dom");

  // Target  .innerHTML = html;

  const root = createRoot(target, {});
  // Root.render(<Element></Element> as any);

  root.render(
    <DraggableWindow
      onShare={() => open(`https://spike.land/api/room/${room}/public`)}
      onRestore={() => {
        const model = session.editor.getModel();
        model.setValue(session.code);
      }}
      position={session.mode === "window" ? "fixed" : "absolute"}
      session={session}
      keepFullScreen={keepFullScreen}
      room={room}
    />,
  );

  const diffy = window.diffy = Date.now() - window.aniStart;

  console.log({ diffy });

  target.style.opacity = "0";
  // await wait(2000);
  document.body.append(target);

  console.log("wait....: " + String(2000 - diffy));

  await wait(2000 - diffy);

  target.style.display = "block";
  target.style.opacity = "1";
  document.querySelector("#root")!.remove();
  document.body.style.backgroundImage = 'url("./assets/synthwave.webp")';

  editor.style.opacity = "1";
  editor.style.display = "block";
};
