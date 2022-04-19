import{b as M}from"./chunk-U4KKEQGU.mjs";import"./chunk-X2SEVPP6.mjs";import"./chunk-HZ7BLTDW.mjs";import{fk as L}from"./chunk-S4OGWJ7G.mjs";import{e as A}from"./chunk-6XRSRXUF.mjs";var H=A(M());var y,$=new Uint8Array(16);function F(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y($)}var G=/^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;function q(e){return typeof e=="string"&&G.test(e)}var a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function B(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!q(n))throw new TypeError("Stringified UUID is invalid");return n}function k(e,t,n){e=e||{};let s=e.random||(e.rng||F)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(let d=0;d<16;++d)t[n+d]=s[d];return t}return B(s)}import{jsx as X}from"@emotion/react";import{Fragment as z}from"react";var E=[],K=window.location.hostname||"spike.land",w=location.pathname.split("/"),I=(w[1]==="api"&&w[2]==="room"?w[3]:(w.pop()||w.pop()).slice(-12))||"code-main",O=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||k()).slice(0,8),T=0,b=0,S="",f="",D=0,C=0,c=null,u=!1,m={send:e=>{let t=e.target,n=JSON.stringify({...e,name:e.name||f});E.map(s=>{try{if(s.readyState!=="open")return;s.target===t&&s.send(n)}catch(d){console.error("Error in broadcasting event",{e:d})}})}},Q=await fetch(`https://spike.land/api/room/${I}/session`),Y=await Q.json(),{startSession:Z}=await import("./session-DAWSVOXB.mjs"),l=Z(I,{name:f,state:Y}),P=()=>l.json().state,v=null;setInterval(()=>{Date.now()-C>4e4?(u=!1,g()):console.log("no_need_to_rejoin")},3e4);var h=window,N=async(e,t)=>{if(!e)return;let n=P();if(!(t<n.i)&&e!==n.code)try{let s=L.parse("file:///app/index.tsx");if(h.sess&&h.sess.editor&&h.sess.editor.getModel&&h.sess.editor.getModel(s)){let d=h.sess.editor.getModel(s);d&&d.setValue(e)}else h.sess&&h.sess.update&&h.sess.update(e)}catch(s){console.error({e:s})}};async function g(){return!u||c===null?(c=null,c||(c=await ne(X(z)),c)):c}var fe=(0,H.default)(ee,500);async function ee(e){if((async()=>{try{if(m){let t=b?l.createPatchFromHashCode(b,e):l.createPatch(e);t&&t.patch!==""&&m.send(t)}}catch(t){console.error("Error sending RTC...",{e:t})}})(),c){let t=T?l.createPatchFromHashCode(T,e):l.createPatch(e);if(!t)return;let n=JSON.stringify({...t,name:f});t.patch!==""&&c.send(n)}else u=!1,await g()}async function ne(e){if(S=S||I||"code-main",O&&(f=O),c!==null)return c;u=!0;let t=new WebSocket("wss://"+K+"/api/room/"+S+"/websocket");if(u=!1,t.addEventListener("open",()=>(c=t,v&&clearInterval(v),v=setInterval(()=>{let n=Date.now(),s=n-C;if(n-C>3e4)try{t.send(JSON.stringify({name:f,time:D+s}))}catch{u=!1,g()}},3e4),t.send(JSON.stringify({name:f})),t)),!h.sess){let n={...P(),setChild:()=>{},changes:[],children:[e],errorText:""},s=location.pathname.endsWith("public"),{quickStart:d}=await import("./quickStart-K4FOIH2D.mjs");d(n,S,s)}return t.addEventListener("message",n=>x(n,"ws")),t.addEventListener("close",n=>{console.log("WebSocket closed, reconnecting:",n.code,n.reason),u=!1,g()}),t.addEventListener("error",n=>{console.log("WebSocket error, reconnecting:",n),u=!1,g()}),t}var R=window.location.hostname;R||(R="localhost");i("Hostname: "+R);var o={};function i(e){let t=new Date;console.log("["+t.toLocaleTimeString()+"] "+e)}function te(e){let t=new Date;console.trace("["+t.toLocaleTimeString()+"] "+e)}var J={iceServers:["stun3.l.google.com:19302"].map(e=>({urls:`stun:${e}`}))};J.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}];async function j(e){if(i(`Setting up a connection with ${e}`),o[e]){i(`Aborting, since we have connection with this ${e}`);return}o[e]=new RTCPeerConnection(J),o[e].onicecandidate=r=>{r.candidate&&(i("*** Outgoing ICE candidate: "+r.candidate),c.send(JSON.stringify({type:"new-ice-candidate",target:e,name:f,candidate:r.candidate})))},o[e].oniceconnectionstatechange=_,o[e].onicegatheringstatechange=U,o[e].onsignalingstatechange=()=>{switch(i("*** connections[target].signalingState  changed to: "+o[e].signalingState),o[e].signalingState){case"closed":break}},o[e].onnegotiationneeded=d,o[e].ontrack=r=>console.log(r),o[e].ondatachannel=r=>{console.log("Receive Channel Callback");let p=r.channel;p.binaryType="arraybuffer",p.addEventListener("close",s),p.addEventListener("message",W=>x(W,"rtc"));let V=Object.assign(p,{target:e});E.push(V)};let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},n=Object.assign(o[e].createDataChannel(e,t),{target:e});return n.binaryType="arraybuffer",n.addEventListener("message",r=>{console.log("***********RTC***",{msg:r});let p=JSON.parse(r.data);return p&&p.hashCode&&(b=p.hashCode),p&&p.newHash&&(b=p.newHash),x(r,"rtc")}),n.addEventListener("error",r=>{console.log("xxxxxx-  Data Channel Error:",r)}),n.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),E.push(n)}),n.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),o[e];function s(){console.log("Receive channel is closed"),o[e].close(),delete o[e],console.log("Closed remote peer connection")}async function d(){i("*** Negotiation needed");try{i("---> Creating offer");let r=await o[e].createOffer();if(o[e].signalingState!="stable"){i("     -- The connection isn't stable yet; postponing...");return}i("---> Setting local description to the offer"),await o[e].setLocalDescription(r),i("---> Sending the offer to the remote peer"),c&&c.send(JSON.stringify({target:e,name:f,type:"offer",sdp:o[e].localDescription}))}catch{i("*** The following error occurred while handling the negotiationneeded event:")}}function _(){switch(i("*** ICE connection state changed to "+o[e].iceConnectionState),o[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function U(){i("*** connections[target].iceGatheringState changed to: "+o[e].iceGatheringState)}}async function oe(e,t){i("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let n=new RTCIceCandidate(e.candidate);console.log(o[t]),await o[t].addIceCandidate(n)}async function se(e,t){i("*** Call recipient has accepted our call");let n=new RTCSessionDescription(e.sdp);await o[t].setRemoteDescription(n).catch(console.error)}async function ie(e,t){if(o[t]||await j(t),!e.sdp)return;let n=new RTCSessionDescription(e.sdp);if(o[t].signalingState!="stable"){i("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([o[t].setLocalDescription({type:"rollback"}),o[t].setRemoteDescription(n)]);return}i("  - Setting remote description"),await o[t].setRemoteDescription(n),i("---> Creating and sending answer to caller"),await o[t].setLocalDescription(await o[t].createAnswer());let s=c||await g();s!==null&&s.send(JSON.stringify({target:t,name:f,type:"answer",sdp:o[t].localDescription}))}async function x(e,t){console.log(t,{event:e}),C=Date.now();let n=JSON.parse(e.data);if(n.name&&n.name!==f&&!o[n.name])try{await j(n.name)}catch(s){console.log({e:s}),te("Error with p2p")}if(console.log(t,n.name),n.type==="new-ice-candidate"){await oe(n,n.name);return}if(n.type==="offer"){await ie(n,n.name);return}if(n.type==="answer"){await se(n,n.name);return}if(t==="ws"&&n.hashCode&&(T=n.hashCode),n.patch&&t==="ws"||n.name!==f){if(n.newHash===l.hashCode())return;if(n.oldHash===l.hashCode()){l.applyPatch(n),N(l.session.get("state").code,l.session.get("state").i),m&&m.send({hashCode:n.newHash});return}if(n.newHash===l.hashCode())return;if(n.code&&n.transpiled){let s=l.createPatch(n);l.applyPatch(s),N(n.code,n.i),m&&m.send({hashCode:s.newHash});return}return}n.timestamp&&(C=Date.now(),D=n.timestamp),n.name!==f&&(D=n.timestamp)}export{ne as join,fe as saveCode};
