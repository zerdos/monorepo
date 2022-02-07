import"./chunks/chunk-UT4UBVWW.mjs";import{jsx as ee}from"https://unpkg.com/@spike.land/esm@0.6.250/dist/emotion-react.mjs";var O,W,U;var j,F=async(e,n)=>(j=j||(await import("./chunks/session-KKRBFQ23.mjs")).default,j(e,n));async function te(e){let n=document.querySelector("#monacoEditor"),{startMonaco:t}=await import("./chunks/editor-WJR5UIST.mjs"),i=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,o=c=>N(a.getModel().getValue(),c.changes,e,++e.i),{editor:a,monaco:r}=await t({language:"typescript",container:n,code:e.code});a.onDidChangeModelContent(i(o,100)),window.monaco=r,e.editor=a,window.sess=e}async function ne({monaco:e,editor:n}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=n.getModel(),o=await(await e.languages.typescript.getTypeScriptWorker())(t),a=t.uri.toString(),r=o.getSemanticDiagnostics(a),c=o.getCompilerOptionsDiagnostics(a),d=o.getSyntacticDiagnostics(a),g=await Promise.race([r,c,d]);return console.log(g),[]}async function N(e,n=null,t,i){t.changes.push(n),O=O||(await import("./chunks/prettierEsm-KTD3QDBM.mjs")).formatter,U=U||(await import("./chunks/babelEsm-KXY4A2AB.mjs")).babelTransform,W=U,t.errorText="";try{let o=await O(e),a=await W(o),r=!1;if(a.length>0){if(i<t.i)return;try{let{getHtmlAndCss:d}=await import("./chunks/renderToString-UUWDGYRD.mjs");if(i<t.i)return;let g=await ae(a),{html:y,css:E}=d(g);t.transpiled=a,t.html=y;let l=await oe(a);t.setChild(b=>[...b,l]),t.children=l,r=!y,t.code=o,t.codeNonFormatted=e;let f=o;if(t.css=E,t.i!==i)return;t.saveCode&&await t.saveCode({transpiled:a,code:f,i,css:E,html:y});return}catch(d){console.error("EXCEPTION"),console.log({e:d}),r=!0,console.error({restartError:r})}}if(t.i>i)return;let c=await ne(t);if(t.i>i)return;r&&c.push({messageText:"Error while starting the app. Check the console!"}),c.length>0&&console.log({err:c})}catch(o){t.errorText=o.message,console.error(o.message)}}async function G(e,n,t,i){e.saveCode=i,e.children=null;let{renderPreviewWindow:o}=await import("./chunks/renderPreviewWindow-M6S5VJ2U.mjs");await o(e,n,t),t||await te(e),e.update=a=>N(a,null,e),N(e.code,null,e,-1)}async function oe(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,i=V(t),o=await import(i);return URL.revokeObjectURL(i),ee(o.default)}function V(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}async function ae(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,i=V(t),o=(await import(i)).default;return URL.revokeObjectURL(i),o}var D=null,H=!1,I=[],ie="spike.land",u={},P="",x="",C="",w="",J=0,v=0,m,L,Q,B=!1,S;var h=null,_=()=>h.session.get("state"),A=null;setInterval(()=>{Date.now()-v>4e4?T():console.log("no_need_to_rejoin")},3e4);L=globalThis.chCode=async(e,n)=>{if(!!e&&!(n<window.sess.i)&&e!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(t){console.error({e:t})}};async function T(){if(!B){B=!0,D=null;let e=Date.now()-Q;e<1e4&&await new Promise(n=>setTimeout(n,1e4-e)),k()}}async function X({code:e,transpiled:n,html:t,css:i,i:o}){if(S){let a=Date.now();if(u.i=o,u.lastRtcUpdate){let d=a-u.lastUpdate;if(d<1e3&&(await K(200-d),o!==u.i))return}u.lastRtcUpdate=Date.now();let r=_().toJSON();r.html=t,r.css=i,r.transpiled=n,r.code=e,r.i=o;let c=x?h.createPatchFromHashCode(x,r):h.createPatch(r);c&&c.patch!==""&&S.send(c)}if(D){let a=Date.now();if(u.i=o,u.lastUpdate){let g=a-u.lastUpdate;if(g<1e3&&(await K(1e3-g),o!==u.i))return}u.lastUpdate=Date.now();let r=_().toJSON();r.html=t,r.css=i,r.transpiled=n,r.code=e,r.i=o;let c=P?h.createPatchFromHashCode(P,r):h.createPatch(r);if(!c)return;let d=JSON.stringify({...c,name:w});c.patch!==""&&D.send(d)}}var k=async(e,n,t)=>{C=C||e||"code-main",window.room=e,n&&(w=n);let o=await(await fetch(`https://spike.land/api/room/${C}/session`)).json();if(h=h||await F(C,{name:w,room:C,state:o,events:[]}),window.mySession=h,!t&&!window.sess){let a={..._().toJSON(),setChild:()=>{},changes:[],children:[null],errorText:""},r=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,c=location.pathname.endsWith("public");G(a,C,c,r(X,100)),window.sess=a}H||(H=!0,setTimeout(()=>{H=!1},1e4),m=new WebSocket("wss://"+ie+"/api/room/"+C+"/websocket"),B=!1,Q=Date.now(),m.addEventListener("open",()=>{A?clearInterval(A):A=setInterval(()=>{let a=Date.now(),r=a-v;if(a-v>3e4)try{m.send(JSON.stringify({name:w,time:J+r}))}catch(c){T()}},3e4),D=m,globalThis.broad=X,globalThis.chCode=L,m.send(JSON.stringify({name:w}))}),m.addEventListener("message",a=>$(a,"ws")),m.addEventListener("close",a=>{console.log("WebSocket closed, reconnecting:",a.code,a.reason),T()}),m.addEventListener("error",a=>{console.log("WebSocket error, reconnecting:",a),T()}))},M=window.location.hostname;M||(M="localhost");p("Hostname: "+M);var s={};globalThis.connections=s;function p(e){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+e)}function re(e){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+e)}async function Y(e){p("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(l=>({urls:`stun:${l}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],s[e]=s[e]||new RTCPeerConnection(n),s[e].onicecandidate=d,s[e].oniceconnectionstatechange=g,s[e].onicegatheringstatechange=E,s[e].onsignalingstatechange=y,s[e].onnegotiationneeded=r,s[e].ontrack=c,s[e].addEventListener("datachannel",o);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},i=s[e].createDataChannel(e,t);return i.binaryType="arraybuffer",i.addEventListener("message",l=>{console.log("***********RTC***",{msg:l});let f=JSON.parse(l.data);return f&&f.hashCode&&(x=f.hashCode),f&&f.newHash&&(x=f.newHash),$(l,"rtc")}),i.addEventListener("error",l=>{console.log("xxxxxx-  Data Channel Error:",l)}),i.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),i.target=e,I.push(i),s[e].sendChannel=i,window.sendChannel=S={send:l=>{let f=l.target;l.name=l.name||w;let b=JSON.stringify(l);I.map(R=>R.readyState==="open"&&(!f||f&&R.target===f)&&R.send(b))}}}),i.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),s[e];function o(l){console.log("Receive Channel Callback");let f=l.channel;f.binaryType="arraybuffer",f.addEventListener("close",a),f.addEventListener("message",b=>$(b,"rtc")),I.push(f)}function a(){console.log("Receive channel is closed"),s[e].close(),s[e]=null,console.log("Closed remote peer connection")}async function r(){p("*** Negotiation needed");try{p("---> Creating offer");let l=await s[e].createOffer();if(s[e].signalingState!="stable"){p("     -- The connection isn't stable yet; postponing...");return}p("---> Setting local description to the offer"),await s[e].setLocalDescription(l),p("---> Sending the offer to the remote peer"),m.send(JSON.stringify({target:e,name:w,type:"video-offer",sdp:s[e].localDescription}))}catch(l){p("*** The following error occurred while handling the negotiationneeded event:")}}function c(l){p("*** Track event"),document.querySelector("#received_video").srcObject=l.streams[0],document.querySelector("#hangup-button").disabled=!1}function d(l){l.candidate&&(p("*** Outgoing ICE candidate: "+l.candidate),m.send(JSON.stringify({type:"new-ice-candidate",target:e,name:w,candidate:l.candidate})))}function g(){switch(p("*** ICE connection state changed to "+s[e].iceConnectionState),s[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function y(){switch(p("*** connections[target].signalingState  changed to: "+s[e].signalingState),s[e].signalingState){case"closed":break}}function E(){p("*** connections[target].iceGatheringState changed to: "+s[e].iceGatheringState)}}async function se(e,n){p("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let t=new RTCIceCandidate(e.candidate);console.log(s[n]),await s[n].addIceCandidate(t)}async function ce(e,n){p("*** Call recipient has accepted our call");let t=new RTCSessionDescription(e.sdp);await s[n].setRemoteDescription(t).catch(console.error)}async function le(e,n){s[n]||await Y(n);let t=new RTCSessionDescription(e.sdp);if(s[n].signalingState!="stable"){p("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([s[n].setLocalDescription({type:"rollback"}),s[n].setRemoteDescription(t)]);return}p("  - Setting remote description"),await s[n].setRemoteDescription(t),p("---> Creating and sending answer to caller"),await s[n].setLocalDescription(await s[n].createAnswer()),m.send(JSON.stringify({target:n,name:w,type:"video-answer",sdp:s[n].localDescription}))}async function $(e,n){v=Date.now();let t=JSON.parse(e.data);if(t.name&&t.name!==w&&!s[t.name])try{await Y(t.name)}catch(i){console.log({e:i}),re("Error with p2p")}if(console.log(n,t.name),t.type==="new-ice-candidate"){await se(t,t.name);return}if(t.type==="video-offer"){await le(t,t.name);return}if(t.type==="video-answer"){await ce(t,t.name);return}if(n===m&&t.hashCode&&(P=t.hashCode),t.patch&&n==="ws"||t.name!==w){if(t.newHash===h.hashCode())return;if(t.oldHash===h.hashCode()){h.applyPatch(t),L(h.session.get("state").code,h.session.get("state").i),S&&S.send({hashCode:t.newHash});return}if(t.newHash===h.hashCode())return;if(t.code&&t.transpiled){let i=h.createPatch(t);h.applyPatch(i),L(t.code),S&&S.send({hashCode:i.newHash});return}return}t.timestamp&&(v=Date.now(),J=t.timestamp),t.name!==w&&(J=t.timestamp)}function K(e){return new Promise(n=>{setTimeout(()=>{n()},e)})}import de,{hydrateRoot as z,render as pe}from"https://spike.land/dist/react.mjs";function Z(e){let n=new Uint8Array(e.length);for(let o=0;o<n.length;o++)n[o]=e.charCodeAt(o);let t=new Uint16Array(n.buffer),i="";for(let o=0;o<t.length;o++)i+=String.fromCharCode(t[o]);return i}import{jsx as q}from"https://unpkg.com/@spike.land/esm@0.6.250/dist/emotion-react.mjs";window.React=de;var be=async e=>{let n=(await import(o(Z(e)))).default,t=document.querySelector("#zbody"),i=z(t,q(n));function o(a){let r=new Blob([a],{type:"application/javascript"});return URL.createObjectURL(r)}},ve=async e=>{let n=location.pathname.split("/");window.aniStart=Date.now();let t=e||(n[1]==="api"&&n[2]==="room"?n[3]:(n.pop()||n.pop()).slice(-12))||"code-main",i=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||(await import("./chunks/uidV4-5C2NDIGC.mjs")).default()).slice(0,8);if(location.pathname.includes("hydrate")){let o=(await import(`https://spike.land/api/room/${t}/js`)).default,a=(await import("./chunks/textdiff-create-ZT4L63UO.mjs")).default,r=document.querySelector("#zbody");window.aniStart=Date.now();let c=z(r,q(o));k(t,i);return}else(async()=>{let o=(await import(`https://spike.land/api/room/${t}/js`)).default,a=document.getElementById("zbody");if(pe(q(o),a),a){let r=(await import(`https://spike.land/api/room/${t}/js`)).default,{jsx:c}=await import("https://unpkg.com/@spike.land/esm@0.6.250/dist/emotion-react.mjs"),d=document.querySelector("#zbody");if(!d){if(d=document.getElementById("root"),!d)throw new Error;let y=await(await fetch(`https://spike.land/api/room/${t}/session`)).json();d.innerHTML=`<style>${y.css}</style><div id="zbody">${y.html}</div>`,d=document.querySelector("#zbody")}if(!d)throw new Error;z(d,c(r))}else{let c=await(await fetch(`https://spike.land/api/room/${t}/session`)).json();a=document.getElementById("root"),a.innerHTML=`<style>${c.css}</style><div id="zbody">${c.html}</div>`,a=document.getElementById("zbody")}})();k(t,i)};export{be as hydrateBinary,ve as run};
