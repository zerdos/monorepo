import"./chunks/chunk-UT4UBVWW.mjs";import{jsx as Z}from"https://unpkg.com/@spike.land/esm@0.6.163/dist/emotion-react.mjs";var I,q,R;var H,B=async(t,n)=>(H=H||(await import("./chunks/session-KE2MAR4I.mjs")).default,H(t,n));async function ee(t){let n=document.querySelector("#monacoEditor"),{startMonaco:e}=await import("./chunks/editor-KLJVYW5J.mjs"),a=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,r=l=>N(i.getModel().getValue(),l.changes,t,++t.i),{editor:i,monaco:o}=await e({language:"typescript",container:n,code:t.code});i.onDidChangeModelContent(a(r,100)),window.monaco=o,t.editor=i,window.sess=t}async function te({monaco:t,editor:n}){if(!t)return[{messageText:"Error with the error checking. Try to reload!"}];let e=n.getModel(),r=await(await t.languages.typescript.getTypeScriptWorker())(e),i=e.uri.toString(),o=r.getSemanticDiagnostics(i),l=r.getCompilerOptionsDiagnostics(i),p=r.getSyntacticDiagnostics(i),m=await Promise.race([o,l,p]);return console.log(m),[]}async function N(t,n=null,e,a){e.changes.push(n),I=I||(await import("./chunks/prettierEsm-LS5JKGVF.mjs")).formatter,R=R||(await import("./chunks/babelEsm-QCKIPYKN.mjs")).babelTransform,q=R,e.errorText="";try{let r=await I(t),i=await q(r),o=!1;if(i.length>0){if(a<e.i)return;try{let{getHtmlAndCss:p}=await import("./chunks/renderToString-CTPPO54N.mjs");if(a<e.i)return;let m=await oe(i),{html:h,css:g}=p(m);e.transpiled=i,e.html=h;let c=await ne(i);e.setChild(C=>[...C,c]),e.children=c,o=!h,e.code=r,e.codeNonFormatted=t;let d=r;if(e.css=g,e.i!==a)return;e.saveCode&&await e.saveCode({transpiled:i,code:d,i:a,css:g,html:h});return}catch(p){console.error("EXCEPTION"),console.log({e:p}),o=!0,console.error({restartError:o})}}if(e.i>a)return;let l=await te(e);if(e.i>a)return;o&&l.push({messageText:"Error while starting the app. Check the console!"}),l.length>0&&console.log({err:l})}catch(r){e.errorText=r.message,console.error(r.message)}}async function F(t,n,e,a){t.saveCode=a,t.children=null;let{renderPreviewWindow:r}=await import("./chunks/renderPreviewWindow-Y62ULTRN.mjs");await r(t,n,e),e||await ee(t),t.update=i=>N(i,null,t),N(t.code,null,t,-1)}async function ne(t,n="window"){let e=n==="window"?t.replace("body{","#zbody{"):t,a=G(e),r=await import(a);return URL.revokeObjectURL(a),Z(r.default)}function G(t){let n=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(n)}async function oe(t,n="window"){let e=n==="window"?t.replace("body{","#zbody{"):t,a=G(e),r=(await import(a)).default;return URL.revokeObjectURL(a),r}var L=null,j=!1,U=[],ae="spike.land",S={},J="",x="",b="",y="",M=0,E=0,u,k,Q,_=!1,v,V="",f=null,A=()=>f.session.get("state"),P=null;setInterval(()=>{Date.now()-E>4e4?D():console.log("no_need_to_rejoin")},3e4);k=globalThis.chCode=async(t,n)=>{if(!!t&&!(n<window.sess.i)&&t!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(t):window.sess.update(t)}catch(e){console.error({e})}};async function D(){if(!_){_=!0,L=null;let t=Date.now()-Q;t<1e4&&await new Promise(n=>setTimeout(n,1e4-t)),O()}}async function X({code:t,transpiled:n,html:e,css:a,i:r}){if(v){let i=Date.now();if(S.i=r,S.lastRtcUpdate){let p=i-S.lastUpdate;if(p<1e3&&(await K(200-p),r!==S.i))return}S.lastRtcUpdate=Date.now();let o=A().toJSON();o.html=e,o.css=a,o.transpiled=n,o.code=t,o.i=r;let l=x?f.createPatchFromHashCode(x,o):f.createPatch(o);l&&l.patch!==""&&v.send(l)}if(L){let i=Date.now();if(S.i=r,S.lastUpdate){let m=i-S.lastUpdate;if(m<1e3&&(await K(1e3-m),r!==S.i))return}S.lastUpdate=Date.now();let o=A().toJSON();o.html=e,o.css=a,o.transpiled=n,o.code=t,o.i=r;let l=J?f.createPatchFromHashCode(J,o):f.createPatch(o);if(!l)return;let p=JSON.stringify({...l,name:y});l.patch!==""&&L.send(p)}}var O=async(t,n,e)=>{b=b||t||"code-main",window.room=t,n&&(y=n);let r=await(await fetch(`https://spike.land/api/room/${b}/session`)).json();if(f=f||await B(b,{name:y,room:b,state:r,events:[]}),window.mySession=f,!e&&!window.sess){let i={...A().toJSON(),setChild:()=>{},changes:[],children:[null],errorText:""},o=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,l=location.pathname.endsWith("public");F(i,b,l,o(X,100)),window.sess=i}j||(j=!0,setTimeout(()=>{j=!1},1e4),u=new WebSocket("wss://"+ae+"/api/room/"+b+"/websocket"),_=!1,Q=Date.now(),u.addEventListener("open",()=>{if(e){e!==V&&(V=e,u.send(JSON.stringify({type:"delta",delta:e})));return}P?clearInterval(P):P=setInterval(()=>{let i=Date.now(),o=i-E;if(i-E>3e4)try{u.send(JSON.stringify({name:y,time:M+o}))}catch(l){D()}},3e4),L=u,globalThis.broad=X,globalThis.chCode=k,u.send(JSON.stringify({name:y}))}),u.addEventListener("message",i=>z(i,"ws")),u.addEventListener("close",i=>{console.log("WebSocket closed, reconnecting:",i.code,i.reason),D()}),u.addEventListener("error",i=>{console.log("WebSocket error, reconnecting:",i),D()}))},$=window.location.hostname;$||($="localhost");w("Hostname: "+$);var s={};globalThis.connections=s;function w(t){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+t)}function ie(t){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+t)}async function Y(t){w("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(c=>({urls:`stun:${c}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],s[t]=s[t]||new RTCPeerConnection(n),s[t].onicecandidate=p,s[t].oniceconnectionstatechange=m,s[t].onicegatheringstatechange=g,s[t].onsignalingstatechange=h,s[t].onnegotiationneeded=o,s[t].ontrack=l,s[t].addEventListener("datachannel",r);let e={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},a=s[t].createDataChannel(t,e);return a.binaryType="arraybuffer",a.addEventListener("message",c=>{console.log("***********RTC***",{msg:c});let d=JSON.parse(c.data);return d&&d.hashCode&&(x=d.hashCode),d&&d.newHash&&(x=d.newHash),z(c,"rtc")}),a.addEventListener("error",c=>{console.log("xxxxxx-  Data Channel Error:",c)}),a.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),a.target=t,U.push(a),s[t].sendChannel=a,window.sendChannel=v={send:c=>{let d=c.target;c.name=c.name||y;let C=JSON.stringify(c);U.map(T=>T.readyState==="open"&&(!d||d&&T.target===d)&&T.send(C))}}}),a.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),s[t];function r(c){console.log("Receive Channel Callback");let d=c.channel;d.binaryType="arraybuffer",d.addEventListener("close",i),d.addEventListener("message",C=>z(C,"rtc")),U.push(d)}function i(){console.log("Receive channel is closed"),s[t].close(),s[t]=null,console.log("Closed remote peer connection")}async function o(){w("*** Negotiation needed");try{w("---> Creating offer");let c=await s[t].createOffer();if(s[t].signalingState!="stable"){w("     -- The connection isn't stable yet; postponing...");return}w("---> Setting local description to the offer"),await s[t].setLocalDescription(c),w("---> Sending the offer to the remote peer"),u.send(JSON.stringify({target:t,name:y,type:"video-offer",sdp:s[t].localDescription}))}catch(c){w("*** The following error occurred while handling the negotiationneeded event:")}}function l(c){w("*** Track event"),document.querySelector("#received_video").srcObject=c.streams[0],document.querySelector("#hangup-button").disabled=!1}function p(c){c.candidate&&(w("*** Outgoing ICE candidate: "+c.candidate),u.send(JSON.stringify({type:"new-ice-candidate",target:t,name:y,candidate:c.candidate})))}function m(){switch(w("*** ICE connection state changed to "+s[t].iceConnectionState),s[t].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function h(){switch(w("*** connections[target].signalingState  changed to: "+s[t].signalingState),s[t].signalingState){case"closed":break}}function g(){w("*** connections[target].iceGatheringState changed to: "+s[t].iceGatheringState)}}async function se(t,n){w("*** Adding received ICE candidate: "+JSON.stringify(t.candidate));let e=new RTCIceCandidate(t.candidate);console.log(s[n]),await s[n].addIceCandidate(e)}async function re(t,n){w("*** Call recipient has accepted our call");let e=new RTCSessionDescription(t.sdp);await s[n].setRemoteDescription(e).catch(console.error)}async function ce(t,n){s[n]||await Y(n);let e=new RTCSessionDescription(t.sdp);if(s[n].signalingState!="stable"){w("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([s[n].setLocalDescription({type:"rollback"}),s[n].setRemoteDescription(e)]);return}w("  - Setting remote description"),await s[n].setRemoteDescription(e),w("---> Creating and sending answer to caller"),await s[n].setLocalDescription(await s[n].createAnswer()),u.send(JSON.stringify({target:n,name:y,type:"video-answer",sdp:s[n].localDescription}))}async function z(t,n){E=Date.now();let e=JSON.parse(t.data);if(e.name&&e.name!==y&&!s[e.name])try{await Y(e.name)}catch(a){console.log({e:a}),ie("Error with p2p")}if(console.log(n,e.name),e.type==="new-ice-candidate"){await se(e,e.name);return}if(e.type==="video-offer"){await ce(e,e.name);return}if(e.type==="video-answer"){await re(e,e.name);return}if(n===u&&e.hashCode&&(J=e.hashCode),e.patch&&n==="ws"||e.name!==y){if(e.newHash===f.hashCode())return;if(e.oldHash===f.hashCode()){f.applyPatch(e),k(f.session.get("state").code,f.session.get("state").i),v&&v.send({hashCode:e.newHash});return}if(e.newHash===f.hashCode())return;if(e.code&&e.transpiled){let a=f.createPatch(e);f.applyPatch(a),k(e.code),v&&v.send({hashCode:a.newHash});return}return}e.timestamp&&(E=Date.now(),M=e.timestamp),e.name!==y&&(M=e.timestamp)}function K(t){return new Promise(n=>{setTimeout(()=>{n()},t)})}var me=async t=>{let n=location.pathname.split("/");window.aniStart=Date.now();let e=t||(n[1]==="api"&&n[2]==="room"?n[3]:(n.pop()||n.pop()).slice(-12))||"code-main",a=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||(await import("./chunks/uidV4-5C2NDIGC.mjs")).default()).slice(0,8);if(location.pathname.includes("hydrate")){let r=(await import(`https://spike.land/api/room/${e}/js`)).default,i=(await import("./chunks/textdiff-create-ZT4L63UO.mjs")).default,{jsx:o}=await import("https://unpkg.com/@spike.land/esm@0.6.163/dist/emotion-react.mjs"),{hydrateRoot:l}=await import("https://unpkg.com/@spike.land/esm@0.6.163/dist/react-dom.mjs"),p=document.querySelector("#zbody");window.aniStart=Date.now();let m=l(p,o(r)),h=[],g=document.getElementById("zbody").innerHTML,c=g,d=setInterval(()=>{let C=p.innerHTML;h.push(i(g,C)),g=C},1e3/60);window.deltas=h,O(e,a,h);return}else(async()=>{let r=(await import("https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-patch.mjs")).default,o=await(await fetch(`https://spike.land/api/room/${e}/delta`)).json(),l=document.getElementById("zbody");if(!l){let m=await(await fetch(`https://spike.land/api/room/${e}/session`)).json();l=document.getElementById("root"),l.innerHTML=`<style>${m.css}</style><div id="zbody">${m.html}</div>`,l=document.getElementById("zbody")}if(o&&o.length){let p=l.innerHTML,m=0,h=p,g=o.length,c=(2e3-(Date.now()-window.aniStart))/o.length;console.log({animationLength:c});let d=setInterval(()=>{if(m>=o.length){clearInterval(d);return}let C=m%g;C===0&&(h=p),m++;let T=o[C];if(!T)return;let W=r(h,T);h=W,l.innerHTML=W},c)}else{let p=(await import(`https://spike.land/api/room/${e}/js`)).default,{jsx:m}=await import("https://unpkg.com/@spike.land/esm@0.6.163/dist/emotion-react.mjs"),h=document.querySelector("#zbody");if(!h){if(h=document.getElementById("root"),!h)throw new Error;let d=await(await fetch(`https://spike.land/api/room/${e}/session`)).json();h.innerHTML=`<style>${d.css}</style><div id="zbody">${d.html}</div>`,h=document.querySelector("#zbody")}if(!h)throw new Error;let{hydrateRoot:g}=await import("https://unpkg.com/@spike.land/esm@0.6.163/dist/react-dom.mjs");g(h,p)}})();O(e,a)};export{me as run};
