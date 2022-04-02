import{a as M}from"./chunk-64UOVNML.mjs";import{a as R,b as I,f as $}from"./chunk-LXO7TM6Z.mjs";var j=$(M());var y,G=new Uint8Array(16);function q(){if(!y&&(y=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(G)}var F=/^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;function B(e){return typeof e=="string"&&F.test(e)}var c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function z(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!B(n))throw new TypeError("Stringified UUID is invalid");return n}function J(e,t,n){e=e||{};let i=e.random||(e.rng||q)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){n=n||0;for(let p=0;p<16;++p)t[n+p]=i[p];return t}return z(i)}var L=[],K=window.location.hostname||"spike.land",x="",v="",C="",f="",O=0,S=0,r=null,m=!1,Q=Date.now(),g=null,l=null,X=()=>l.session.get("state"),k=null;setInterval(()=>{Date.now()-S>4e4?(m=!1,w()):console.log("no_need_to_rejoin")},3e4);var _=async(e,t)=>{if(!e)return;let n=X().toJSON();if(!(t<n.i)&&e!==n.code)try{n&&n.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(i){console.error({e:i})}};async function w(){return!m||r===null?(r=null,r||(r=await Z(),r)):r}var ae=(0,j.default)(Y,100);async function Y(e){if((async()=>{try{if(g){let t=v?l.createPatchFromHashCode(v,e):l.createPatch(e);t&&t.patch!==""&&g.send(t)}}catch(t){console.error("Error sending RTC...",{e:t})}})(),r){let t=x?l.createPatchFromHashCode(x,e):l.createPatch(e);if(!t)return;let n=JSON.stringify(I(R({},t),{name:f}));t.patch!==""&&r.send(n)}else m=!1,await w()}var Z=async()=>{let e=location.pathname.split("/"),t=(e[1]==="api"&&e[2]==="room"?e[3]:(e.pop()||e.pop()).slice(-12))||"code-main",n=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||J()).slice(0,8);if(C=C||t||"code-main",n&&(f=n),r!==null)return r;m=!0;let p=await(await fetch(`https://spike.land/api/room/${C}/session`)).json(),{startSession:b}=await import("./session-VRIEZ5WV.mjs");l=l||await b(C,{name:f,state:p});let h=new WebSocket("wss://"+K+"/api/room/"+C+"/websocket");return m=!1,Q=Date.now(),h.addEventListener("open",()=>(r=h,k&&clearInterval(k),k=setInterval(()=>{let u=Date.now(),E=u-S;if(u-S>3e4)try{r.send(JSON.stringify({name:f,time:O+E}))}catch(P){m=!1,w()}},3e4),h.send(JSON.stringify({name:f})),h)),h.addEventListener("message",u=>H(u,"ws")),h.addEventListener("close",u=>{console.log("WebSocket closed, reconnecting:",u.code,u.reason),m=!1,w()}),h.addEventListener("error",u=>{console.log("WebSocket error, reconnecting:",u),m=!1,w()}),h},N=window.location.hostname;N||(N="localhost");a("Hostname: "+N);var o={};function a(e){let t=new Date;console.log("["+t.toLocaleTimeString()+"] "+e)}function ee(e){let t=new Date;console.trace("["+t.toLocaleTimeString()+"] "+e)}var V={iceServers:["stun3.l.google.com:19302"].map(e=>({urls:`stun:${e}`}))};V.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}];async function U(e){if(a(`Setting up a connection with ${e}`),o[e]){a(`Aborting, since we have connection with this ${e}`);return}o[e]=new RTCPeerConnection(V),o[e].onicecandidate=u,o[e].oniceconnectionstatechange=E,o[e].onicegatheringstatechange=A,o[e].onsignalingstatechange=P,o[e].onnegotiationneeded=b,o[e].ontrack=h,o[e].addEventListener("datachannel",i);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},n=o[e].createDataChannel(e,t);return n.binaryType="arraybuffer",n.addEventListener("message",s=>{console.log("***********RTC***",{msg:s});let d=JSON.parse(s.data);return d&&d.hashCode&&(v=d.hashCode),d&&d.newHash&&(v=d.newHash),H(s,"rtc")}),n.addEventListener("error",s=>{console.log("xxxxxx-  Data Channel Error:",s)}),n.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),n.target=e,L.push(n),o[e].sendChannel=n,g=g={send:s=>{let d=s.target,D=JSON.stringify(I(R({},s),{name:s.name||f}));L.map(T=>{try{if(T.readyState!=="open")return;T.target===d&&T.send(D)}catch(W){console.error("Error in broadcasting event",{e:W})}})}}}),n.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),o[e];function i(s){console.log("Receive Channel Callback");let d=s.channel;d.binaryType="arraybuffer",d.addEventListener("close",p),d.addEventListener("message",D=>H(D,"rtc")),L.push(d)}function p(){console.log("Receive channel is closed"),o[e].close(),o[e]=null,console.log("Closed remote peer connection")}async function b(){a("*** Negotiation needed");try{a("---> Creating offer");let s=await o[e].createOffer();if(o[e].signalingState!="stable"){a("     -- The connection isn't stable yet; postponing...");return}a("---> Setting local description to the offer"),await o[e].setLocalDescription(s),a("---> Sending the offer to the remote peer"),r.send(JSON.stringify({target:e,name:f,type:"offer",sdp:o[e].localDescription}))}catch(s){a("*** The following error occurred while handling the negotiationneeded event:")}}function h(s){a("*** Track event"),document.querySelector("#received_video").srcObject=s.streams[0],document.querySelector("#hangup-button").disabled=!1}function u(s){s.candidate&&(a("*** Outgoing ICE candidate: "+s.candidate),r.send(JSON.stringify({type:"new-ice-candidate",target:e,name:f,candidate:s.candidate})))}function E(){switch(a("*** ICE connection state changed to "+o[e].iceConnectionState),o[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function P(){switch(a("*** connections[target].signalingState  changed to: "+o[e].signalingState),o[e].signalingState){case"closed":break}}function A(){a("*** connections[target].iceGatheringState changed to: "+o[e].iceGatheringState)}}async function ne(e,t){a("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let n=new RTCIceCandidate(e.candidate);console.log(o[t]),await o[t].addIceCandidate(n)}async function te(e,t){a("*** Call recipient has accepted our call");let n=new RTCSessionDescription(e.sdp);await o[t].setRemoteDescription(n).catch(console.error)}async function oe(e,t){if(o[t]||await U(t),!e.sdp)return;let n=new RTCSessionDescription(e.sdp);if(o[t].signalingState!="stable"){a("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([o[t].setLocalDescription({type:"rollback"}),o[t].setRemoteDescription(n)]);return}a("  - Setting remote description"),await o[t].setRemoteDescription(n),a("---> Creating and sending answer to caller"),await o[t].setLocalDescription(await o[t].createAnswer());let i=r||await w();i!==null&&i.send(JSON.stringify({target:t,name:f,type:"answer",sdp:o[t].localDescription}))}async function H(e,t){console.log(t,{event:e}),S=Date.now();let n=JSON.parse(e.data);if(n.name&&n.name!==f&&!o[n.name])try{await U(n.name)}catch(i){console.log({e:i}),ee("Error with p2p")}if(console.log(t,n.name),n.type==="new-ice-candidate"){await ne(n,n.name);return}if(n.type==="offer"){await oe(n,n.name);return}if(n.type==="answer"){await te(n,n.name);return}if(t==="ws"&&n.hashCode&&(x=n.hashCode),n.patch&&t==="ws"||n.name!==f){if(n.newHash===l.hashCode())return;if(n.oldHash===l.hashCode()){l.applyPatch(n),_(l.session.get("state").code,l.session.get("state").i),g&&g.send({hashCode:n.newHash});return}if(n.newHash===l.hashCode())return;if(n.code&&n.transpiled){let i=l.createPatch(n);l.applyPatch(i),_(n.code,n.i),g&&g.send({hashCode:i.newHash});return}return}n.timestamp&&(S=Date.now(),O=n.timestamp),n.name!==f&&(O=n.timestamp)}export{Z as join,ae as saveCode};
