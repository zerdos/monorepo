export declare const resetCSS = "\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\nall: unset;\ndisplay: revert;\n}\n\n*,\n*::before,\n*::after {\nbox-sizing: border-box;\n}\n\na, button {\ncursor: revert;\n}\n\nol, ul, menu {\nlist-style: none;\n}\n\nimg {\nmax-width: 100%;\n}\n\ntable {\nborder-collapse: collapse;\n}\n\ninput, textarea {\n-webkit-user-select: auto;\n}\n\ntextarea {\nwhite-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n-webkit-appearance: revert;\nappearance: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\ncolor: unset;\n}\n\n/* fix the feature of 'hidden' attribute.\ndisplay:revert; revert to element instead of a/live/editttribute */\n:where([hidden]) {\ndisplay: none;\n}\n\n/* revert for bug in Chromium browsers\n- fix for the content editable attribute will work properly.\n- webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=\"false\"])) {\n-moz-user-modify: read-write;\n-webkit-user-modify: read-write;\noverflow-wrap: break-word;\n-webkit-line-break: after-white-space;\n-webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=\"true\"]) {\n-webkit-user-drag: element;\n}";
