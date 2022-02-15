import{a as R,b as N}from"./chunk-AH6KKUH7.mjs";import{jsx as Z}from"https://spike.land/dist/emotion.mjs";var H,G,P,J;var I,z=async(e,n)=>(I=I||(await import("./session-NEO2LXNR.mjs")).default,I(e,n));async function ee(e){console.log("start monaco with session");let n=document.querySelector("#monacoEditor");P=P||(await import("./editor-DMIW7MVK.mjs")).startMonaco;let t=(await import("./throttle-Z6JZ56VC.mjs")).default,a=c=>U(s.getModel().getValue(),c.changes,e,++e.i),{editor:s,monaco:i}=await P({language:"typescript",container:n,code:e.code});s.onDidChangeModelContent(t(a,100)),window.monaco=i,e.editor=s,window.sess=e}async function te({monaco:e,editor:n}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=n.getModel(),s=await(await e.languages.typescript.getTypeScriptWorker())(t),i=t.uri.toString(),c=s.getSemanticDiagnostics(i),l=s.getCompilerOptionsDiagnostics(i),f=s.getSyntacticDiagnostics(i),g=await Promise.race([c,l,f]);return console.log(g),[]}async function U(e,n=null,t,a){t.changes.push(n),H=H||(await import("./prettierEsm-KIK5ML5W.mjs")).formatter,J=J||(await import("./babelEsm-DUT6YDVL.mjs")).babelTransform,G=J,t.errorText="";try{let s=await H(e),i=await G(s),c=!1;if(i.length>0){if(a<t.i)return;try{let{getHtmlAndCss:f}=await import("./renderToString-NN3J2EDG.mjs");if(a<t.i)return;let g=await oe(i),{html:S,css:E}=f(g);t.transpiled=i,t.html=S;let r=await ne(i);t.setChild(b=>[...b,r]),globalThis.App=r,t.children=r,c=!S,t.code=s,t.codeNonFormatted=e;let h=s;if(t.css=E,t.i!==a)return;t.saveCode&&await t.saveCode({transpiled:i,code:h,i:a,css:E,html:S});return}catch(f){console.error("EXCEPTION"),console.log({e:f}),c=!0,console.error({restartError:c})}}if(t.i>a)return;let l=await te(t);if(t.i>a)return;c&&l.push({messageText:"Error while starting the app. Check the console!"}),l.length>0&&console.log({err:l})}catch(s){t.errorText=s.message,console.error(s.message)}}async function V(e,n,t,a){e.saveCode=a,e.children=null;let{renderPreviewWindow:s}=await import("./renderPreviewWindow-7L23NTL6.mjs");await s(e,n,t),t||await ee(e),e.update=i=>U(i,null,e),U(e.code,null,e,-1)}async function ne(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=$(t),s=await import(a);return URL.revokeObjectURL(a),Z(s.default)}function $(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}async function oe(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=$(t),s=(await import(a)).default;return URL.revokeObjectURL(a),s}var x=null,j=!1,_=[],ae="spike.land",u={},M="",L="",C="",m="",W=0,T=0,p,k,Q,v=!1,y;var w=null,q=()=>w.session.get("state"),A=null;setInterval(()=>{Date.now()-T>4e4?D():console.log("no_need_to_rejoin")},3e4);k=globalThis.chCode=async(e,n)=>{if(!!e&&!(n<window.sess.i)&&e!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(t){console.error({e:t})}};async function D(){if(!v){v=!0,x=null;let e=Date.now()-Q;e<1e4&&await new Promise(n=>setTimeout(n,1e4-e)),ie()}}async function X({code:e,transpiled:n,html:t,css:a,i:s}){if(y){let i=Date.now();if(u.i=s,u.lastRtcUpdate){let f=i-u.lastUpdate;if(f<1e3&&(await K(200-f),s!==u.i))return}u.lastRtcUpdate=Date.now();let c=q().toJSON();c.html=t,c.css=a,c.transpiled=n,c.code=e,c.i=s;let l=L?w.createPatchFromHashCode(L,c):w.createPatch(c);l&&l.patch!==""&&y.send(l)}if(x){let i=Date.now();if(u.i=s,u.lastUpdate){let g=i-u.lastUpdate;if(g<1e3&&(await K(1e3-g),s!==u.i))return}u.lastUpdate=Date.now();let c=q().toJSON();c.html=t,c.css=a,c.transpiled=n,c.code=e,c.i=s;let l=M?w.createPatchFromHashCode(M,c):w.createPatch(c);if(!l)return;let f=JSON.stringify(N(R({},l),{name:m}));l.patch!==""&&x.send(f)}}var ie=async(e,n,t)=>{if(C=C||e||"code-main",window.room=e,n&&(m=n),v)return;v=!0;let s=await(await fetch(`https://spike.land/api/room/${C}/session`)).json();if(w=w||await z(C,{name:m,room:C,state:s,events:[]}),window.mySession=w,!t&&!window.sess){let i=N(R({},q().toJSON()),{setChild:()=>{},changes:[],children:[globalThis.App],errorText:""}),c=(await import("./throttle-Z6JZ56VC.mjs")).default,l=location.pathname.endsWith("public");V(i,C,l,c(X,100)),window.sess=i}j||(j=!0,setTimeout(()=>{j=!1},1e4),p=new WebSocket("wss://"+ae+"/api/room/"+C+"/websocket"),v=!1,Q=Date.now(),p.addEventListener("open",()=>{A?clearInterval(A):A=setInterval(()=>{let i=Date.now(),c=i-T;if(i-T>3e4)try{p.send(JSON.stringify({name:m,time:W+c}))}catch(l){D()}},3e4),x=p,globalThis.broad=X,globalThis.chCode=k,p.send(JSON.stringify({name:m}))}),p.addEventListener("message",i=>B(i,"ws")),p.addEventListener("close",i=>{console.log("WebSocket closed, reconnecting:",i.code,i.reason),D()}),p.addEventListener("error",i=>{console.log("WebSocket error, reconnecting:",i),D()}))},F=window.location.hostname;F||(F="localhost");d("Hostname: "+F);var o={};globalThis.connections=o;function d(e){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+e)}function se(e){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+e)}async function Y(e){d("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(r=>({urls:`stun:${r}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],o[e]=o[e]||new RTCPeerConnection(n),o[e].onicecandidate=f,o[e].oniceconnectionstatechange=g,o[e].onicegatheringstatechange=E,o[e].onsignalingstatechange=S,o[e].onnegotiationneeded=c,o[e].ontrack=l,o[e].addEventListener("datachannel",s);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},a=o[e].createDataChannel(e,t);return a.binaryType="arraybuffer",a.addEventListener("message",r=>{console.log("***********RTC***",{msg:r});let h=JSON.parse(r.data);return h&&h.hashCode&&(L=h.hashCode),h&&h.newHash&&(L=h.newHash),B(r,"rtc")}),a.addEventListener("error",r=>{console.log("xxxxxx-  Data Channel Error:",r)}),a.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),a.target=e,_.push(a),o[e].sendChannel=a,window.sendChannel=y={send:r=>{let h=r.target;r.name=r.name||m;let b=JSON.stringify(r);_.map(O=>O.readyState==="open"&&(!h||h&&O.target===h)&&O.send(b))}}}),a.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),o[e];function s(r){console.log("Receive Channel Callback");let h=r.channel;h.binaryType="arraybuffer",h.addEventListener("close",i),h.addEventListener("message",b=>B(b,"rtc")),_.push(h)}function i(){console.log("Receive channel is closed"),o[e].close(),o[e]=null,console.log("Closed remote peer connection")}async function c(){d("*** Negotiation needed");try{d("---> Creating offer");let r=await o[e].createOffer();if(o[e].signalingState!="stable"){d("     -- The connection isn't stable yet; postponing...");return}d("---> Setting local description to the offer"),await o[e].setLocalDescription(r),d("---> Sending the offer to the remote peer"),p.send(JSON.stringify({target:e,name:m,type:"video-offer",sdp:o[e].localDescription}))}catch(r){d("*** The following error occurred while handling the negotiationneeded event:")}}function l(r){d("*** Track event"),document.querySelector("#received_video").srcObject=r.streams[0],document.querySelector("#hangup-button").disabled=!1}function f(r){r.candidate&&(d("*** Outgoing ICE candidate: "+r.candidate),p.send(JSON.stringify({type:"new-ice-candidate",target:e,name:m,candidate:r.candidate})))}function g(){switch(d("*** ICE connection state changed to "+o[e].iceConnectionState),o[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function S(){switch(d("*** connections[target].signalingState  changed to: "+o[e].signalingState),o[e].signalingState){case"closed":break}}function E(){d("*** connections[target].iceGatheringState changed to: "+o[e].iceGatheringState)}}async function ce(e,n){d("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let t=new RTCIceCandidate(e.candidate);console.log(o[n]),await o[n].addIceCandidate(t)}async function re(e,n){d("*** Call recipient has accepted our call");let t=new RTCSessionDescription(e.sdp);await o[n].setRemoteDescription(t).catch(console.error)}async function le(e,n){o[n]||await Y(n);let t=new RTCSessionDescription(e.sdp);if(o[n].signalingState!="stable"){d("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([o[n].setLocalDescription({type:"rollback"}),o[n].setRemoteDescription(t)]);return}d("  - Setting remote description"),await o[n].setRemoteDescription(t),d("---> Creating and sending answer to caller"),await o[n].setLocalDescription(await o[n].createAnswer()),p.send(JSON.stringify({target:n,name:m,type:"video-answer",sdp:o[n].localDescription}))}async function B(e,n){console.log(n,{event:e}),T=Date.now();let t=JSON.parse(e.data);if(t.name&&t.name!==m&&!o[t.name])try{await Y(t.name)}catch(a){console.log({e:a}),se("Error with p2p")}if(console.log(n,t.name),t.type==="new-ice-candidate"){await ce(t,t.name);return}if(t.type==="video-offer"){await le(t,t.name);return}if(t.type==="video-answer"){await re(t,t.name);return}if(n===p&&t.hashCode&&(M=t.hashCode),t.patch&&n==="ws"||t.name!==m){if(t.newHash===w.hashCode())return;if(t.oldHash===w.hashCode()){w.applyPatch(t),k(w.session.get("state").code,w.session.get("state").i),y&&y.send({hashCode:t.newHash});return}if(t.newHash===w.hashCode())return;if(t.code&&t.transpiled){let a=w.createPatch(t);w.applyPatch(a),k(t.code),y&&y.send({hashCode:a.newHash});return}return}t.timestamp&&(T=Date.now(),W=t.timestamp),t.name!==m&&(W=t.timestamp)}function K(e){return new Promise(n=>{setTimeout(()=>{n()},e)})}export{ie as join};
