export async function openWindows() {
  const WM = await import("@zedvision/swm");

  const WindowManager = WM.WindowManager
    ? WM.WindowManager
    : window.WindowManager.WindowManager;

  const wm = new WindowManager({ backgroundWindow: "green" });

  wm.snap(false);

  const win = wm.createWindow(
    {
      titlebarHeight: "42px",
      width: 720,
      resizable: true,
      closable: false,
      borderRadius: "0px",
      overflow: "hidden",
      backgroundWindow: "#1e1e1e",
      height: "100%",
      title: "app.tsx",
    },
  );

  win.content.innerHTML = `
  <div class="editor-frame">
  <div class="loading editor" style="display: none">
								<div class="progress progress-striped active">
									<div class="bar"></div>
								</div>
		</div>
    <div id="editor" style></div>
    </div>`;

  // const zbody = wm.createWindow(
  //   {
  //     titlebarHeight: "42px",
  //     width: 720,
  //     left: 400,
  //     closable: false,
  //     borderRadius: "0px",
  //     backgroundWindow: "#1e1e1e",
  //     height: 800,
  //     title: "React app",
  //   },
  // );

  // zbody.content.innerHTML =
  //   `<div style="min-height: 20px;  min-width: 600px; height: ${
  //     isMobile() ? "2000px" : "calc(100% - 25px);"
  //   }; width:100%; display: block;" id="zbody"></div>`;

  // if (!isMobile()) {
  // try {
  const element = window.document.querySelector(
    "div:nth-child(3) > div:nth-child(1) > section:nth-child(2)",
  );
  if (element !== null) {
    // deno-lint-ignore ban-ts-comment
    //@ts-ignore
    element.style.overflow = "hidden";
  }
  // } catch (e) {
  // console.error({ e });
  // }

  (function (global) {
    if (typeof (global) === "undefined") {
      throw new Error("window is undefined");
    }

    var _hash = "!";
    var noBackPlease = function () {
      global.location.href += "#";

      // Making sure we have the fruit available for juice (^__^)
      global.setTimeout(function () {
        global.location.href += "!";
      }, 50);
    };

    global.onhashchange = function () {
      if (global.location.hash !== _hash) {
        global.location.hash = _hash;
      }
    };

    global.onload = function () {
      noBackPlease();

      // Disables backspace on page except on input fields and textarea..
      document.body.onkeydown = function (e) {
        var elm = e.target.nodeName.toLowerCase();
        if (e.which === 8 && (elm !== "input" && elm !== "textarea")) {
          e.preventDefault();
        }
        // Stopping the event bubbling up the DOM tree...
        e.stopPropagation();
      };
    };
  })(window);
}

// function isMobile() {
//   if (typeof window === "undefined") {
//     return false;
//   }

//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
//     .test(
//       window.navigator.userAgent,
//     );
// }
