import {
  run
} from "./chunk-chunk-ROR4B4PP.mjs";
import "./chunk-chunk-F3UAZF7A.mjs";
import "./chunk-chunk-74LQIDSP.mjs";
import "./chunk-chunk-ZZWIKWD4.mjs";
import "./chunk-chunk-DM5OAIWZ.mjs";
import "./chunk-chunk-WGJB5WIY.mjs";
import "./chunk-chunk-FQCO6K3Q.mjs";
import "./chunk-chunk-NBK6NTLB.mjs";
import "./chunk-chunk-FFMS35Y7.mjs";
import "./chunk-chunk-TIL35SAU.mjs";
import "./chunk-chunk-RNJNNLQS.mjs";
import "./chunk-chunk-NFYMKIWC.mjs";
import "./chunk-chunk-FJRKYGWZ.mjs";
import "./chunk-chunk-OH444ZSQ.mjs";
import "./chunk-chunk-ZL6L5B7C.mjs";
import "./chunk-chunk-WZJHFN4Q.mjs";
import "./chunk-chunk-M3XF32XQ.mjs";
import "./chunk-chunk-UX3KX3KY.mjs";
import {
  __name,
  init_define_process
} from "./chunk-chunk-A3E5PINE.mjs";

// js/load.ts
init_define_process();
var load_default = /* @__PURE__ */ __name(async () => {
  const codeSpace = location.pathname.slice(1).split("/")[1];
  const {
    mST,
    address
  } = await import(`${location.origin}/live/${codeSpace}/mST.mjs`);
  run({
    mST,
    dry: false,
    codeSpace,
    address
  });
}, "default");
export {
  load_default as default
};
