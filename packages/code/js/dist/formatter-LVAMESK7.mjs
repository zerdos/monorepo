import"./chunk-UPO26O35.mjs";import{wrap as i}from"https://ga.jspm.io/npm:comlink@4.3.1/dist/umd/comlink.js";var o={},p=e=>{if(o[e])return o[e];let r,t=!1,{pathname:s}=window.location;if(s.indexOf("/ipfs/")!==-1){let n=s.slice(6,52);t=!0,r=`/ipfs/${n}/js/workers/${e}`}else location.origin!=="https://code.spike.land"?(t=!0,r=window.URL.createObjectURL(new Blob([`self.importScripts("https://code.spike.land/workers/${e}");`]))):r=`https://code.spike.land/workers/${e}`;return o[e]=o[r]=o[r]||d(r,t),o[r]};function d(e,r){if(r||typeof SharedWorker=="undefined"){let s=new Worker(e),{port1:n,port2:a}=new MessageChannel,c={comlinkInit:!0,port:n};return s.postMessage(c,[n]),i(a)}let t=new SharedWorker(e);return t.port.start(),i(t.port)}async function l(e){return await(await p("prettierWorker.js"))(e)}export{l as formatter};
//# sourceMappingURL=formatter-LVAMESK7.mjs.map
