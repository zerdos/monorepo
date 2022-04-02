import{b as $}from"./chunk-U4KKEQGU.mjs";import{e as W}from"./chunk-6XRSRXUF.mjs";var N=W($());var y,M=new Uint8Array(16);function q(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(M)}var F=/^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;function G(e){return typeof e=="string"&&F.test(e)}var r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function B(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase();if(!G(n))throw new TypeError("Stringified UUID is invalid");return n}function I(e,t,n){e=e||{};let s=e.random||(e.rng||q)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=s[i];return t}return B(s)}var T=[],z=window.location.hostname||"spike.land",R=0,S=0,m="",h="",k=0,C=0,l=null,u=!1,p=null,K=await fetch(`https://spike.land/api/room/${m}/session`),Q=await K.json(),{startSession:X}=await import("./session-WSJMEIM2.mjs"),f=X(m,{name:h,state:Q}),H=()=>f.json().state,D=null;setInterval(()=>{Date.now()-C>4e4?(u=!1,g()):console.log("no_need_to_rejoin")},3e4);var O=async(e,t)=>{if(!e)return;let n=H();if(!(t<n.i)&&e!==n.code)try{n&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(s){console.error({e:s})}};async function g(){return!u||l===null?(l=null,l||(l=await Z(),l)):l}var ae=(0,N.default)(Y,500);async function Y(e){if((async()=>{try{if(p){let t=S?f.createPatchFromHashCode(S,e):f.createPatch(e);t&&t.patch!==""&&p.send(t)}}catch(t){console.error("Error sending RTC...",{e:t})}})(),l){let t=R?f.createPatchFromHashCode(R,e):f.createPatch(e);if(!t)return;let n=JSON.stringify({...t,name:h});t.patch!==""&&l.send(n)}else u=!1,await g()}async function Z(){let e=location.pathname.split("/"),t=(e[1]==="api"&&e[2]==="room"?e[3]:(e.pop()||e.pop()).slice(-12))||"code-main",n=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||I()).slice(0,8);if(m=m||t||"code-main",n&&(h=n),l!==null)return l;u=!0;let s=new WebSocket("wss://"+z+"/api/room/"+m+"/websocket");if(u=!1,s.addEventListener("open",()=>(l=s,D&&clearInterval(D),D=setInterval(()=>{let i=Date.now(),w=i-C;if(i-C>3e4)try{s.send(JSON.stringify({name:h,time:k+w}))}catch{u=!1,g()}},3e4),s.send(JSON.stringify({name:h})),s)),!window.sess){let i={...H(),setChild:()=>{},changes:[],children:[globalThis.App],errorText:""},w=location.pathname.endsWith("public"),{quickStart:b}=await import("./quickStart-TXAROQW4.mjs");b(i,m,w),window.sess=i}return s.addEventListener("message",i=>x(i,"ws")),s.addEventListener("close",i=>{console.log("WebSocket closed, reconnecting:",i.code,i.reason),u=!1,g()}),s.addEventListener("error",i=>{console.log("WebSocket error, reconnecting:",i),u=!1,g()}),s}var L=window.location.hostname;L||(L="localhost");c("Hostname: "+L);var o={};function c(e){let t=new Date;console.log("["+t.toLocaleTimeString()+"] "+e)}function ee(e){let t=new Date;console.trace("["+t.toLocaleTimeString()+"] "+e)}var P={iceServers:["stun3.l.google.com:19302"].map(e=>({urls:`stun:${e}`}))};P.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}];async function _(e){if(c(`Setting up a connection with ${e}`),o[e]){c(`Aborting, since we have connection with this ${e}`);return}o[e]=new RTCPeerConnection(P),o[e].onicecandidate=J,o[e].oniceconnectionstatechange=j,o[e].onicegatheringstatechange=A,o[e].onsignalingstatechange=V,o[e].onnegotiationneeded=w,o[e].ontrack=b,o[e].addEventListener("datachannel",s);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},n=o[e].createDataChannel(e,t);return n.binaryType="arraybuffer",n.addEventListener("message",a=>{console.log("***********RTC***",{msg:a});let d=JSON.parse(a.data);return d&&d.hashCode&&(S=d.hashCode),d&&d.newHash&&(S=d.newHash),x(a,"rtc")}),n.addEventListener("error",a=>{console.log("xxxxxx-  Data Channel Error:",a)}),n.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),n.target=e,T.push(n),o[e].sendChannel=n,p=p={send:a=>{let d=a.target,v=JSON.stringify({...a,name:a.name||h});T.map(E=>{try{if(E.readyState!=="open")return;E.target===d&&E.send(v)}catch(U){console.error("Error in broadcasting event",{e:U})}})}}}),n.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),o[e];function s(a){console.log("Receive Channel Callback");let d=a.channel;d.binaryType="arraybuffer",d.addEventListener("close",i),d.addEventListener("message",v=>x(v,"rtc")),T.push(d)}function i(){console.log("Receive channel is closed"),o[e].close(),o[e]=null,console.log("Closed remote peer connection")}async function w(){c("*** Negotiation needed");try{c("---> Creating offer");let a=await o[e].createOffer();if(o[e].signalingState!="stable"){c("     -- The connection isn't stable yet; postponing...");return}c("---> Setting local description to the offer"),await o[e].setLocalDescription(a),c("---> Sending the offer to the remote peer"),l.send(JSON.stringify({target:e,name:h,type:"offer",sdp:o[e].localDescription}))}catch{c("*** The following error occurred while handling the negotiationneeded event:")}}function b(a){c("*** Track event"),document.querySelector("#received_video").srcObject=a.streams[0],document.querySelector("#hangup-button").disabled=!1}function J(a){a.candidate&&(c("*** Outgoing ICE candidate: "+a.candidate),l.send(JSON.stringify({type:"new-ice-candidate",target:e,name:h,candidate:a.candidate})))}function j(){switch(c("*** ICE connection state changed to "+o[e].iceConnectionState),o[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function V(){switch(c("*** connections[target].signalingState  changed to: "+o[e].signalingState),o[e].signalingState){case"closed":break}}function A(){c("*** connections[target].iceGatheringState changed to: "+o[e].iceGatheringState)}}async function ne(e,t){c("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let n=new RTCIceCandidate(e.candidate);console.log(o[t]),await o[t].addIceCandidate(n)}async function te(e,t){c("*** Call recipient has accepted our call");let n=new RTCSessionDescription(e.sdp);await o[t].setRemoteDescription(n).catch(console.error)}async function oe(e,t){if(o[t]||await _(t),!e.sdp)return;let n=new RTCSessionDescription(e.sdp);if(o[t].signalingState!="stable"){c("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([o[t].setLocalDescription({type:"rollback"}),o[t].setRemoteDescription(n)]);return}c("  - Setting remote description"),await o[t].setRemoteDescription(n),c("---> Creating and sending answer to caller"),await o[t].setLocalDescription(await o[t].createAnswer());let s=l||await g();s!==null&&s.send(JSON.stringify({target:t,name:h,type:"answer",sdp:o[t].localDescription}))}async function x(e,t){console.log(t,{event:e}),C=Date.now();let n=JSON.parse(e.data);if(n.name&&n.name!==h&&!o[n.name])try{await _(n.name)}catch(s){console.log({e:s}),ee("Error with p2p")}if(console.log(t,n.name),n.type==="new-ice-candidate"){await ne(n,n.name);return}if(n.type==="offer"){await oe(n,n.name);return}if(n.type==="answer"){await te(n,n.name);return}if(t==="ws"&&n.hashCode&&(R=n.hashCode),n.patch&&t==="ws"||n.name!==h){if(n.newHash===f.hashCode())return;if(n.oldHash===f.hashCode()){f.applyPatch(n),O(f.session.get("state").code,f.session.get("state").i),p&&p.send({hashCode:n.newHash});return}if(n.newHash===f.hashCode())return;if(n.code&&n.transpiled){let s=f.createPatch(n);f.applyPatch(s),O(n.code,n.i),p&&p.send({hashCode:s.newHash});return}return}n.timestamp&&(C=Date.now(),k=n.timestamp),n.name!==h&&(k=n.timestamp)}export{Z as join,ae as saveCode};
