"use strict";var e=require("./state-aee37812.js"),t=require("./core-8fd37695.js");const r=t.qHook((({todos:r},o)=>{const s=t.useEvent(),a=s.target.value;o.text=a,"Enter"===s.key&&a&&(e.addItem(r,o.text),o.text="")}));exports.Header_onRender_on_keyup=r;
