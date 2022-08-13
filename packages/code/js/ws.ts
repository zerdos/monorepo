// import "core-js/full";

import {
  applyPatch,
  hashCode,
  makePatch,
  makePatchFrom,
  mST,
  startSession,
} from "./session";
import type { FC } from "react";
import { renderPreviewWindow } from "./renderPreviewWindow";

import type { ICodeSession } from "./session";
import throttle from "lodash.throttle";
import uidV4 from "./uidV4.mjs";
import { initShims } from "./starter";

const webRtcArray: (RTCDataChannel & { target: string })[] = [];

const user = ((self && self.crypto && self.crypto.randomUUID &&
  self.crypto.randomUUID()) || (uidV4())).slice(
    0,
    8,
  );

const rtcConns: {
  [target: string]: RTCPeerConnection;
} = {}; // To st/ RTCPeerConnection

let bc: BroadcastChannel;
let codeSpace: string;
let address: string;
let wsLastHashCode = 0;
let webRTCLastSeenHashCode = 0;
let lastSeenTimestamp = 0;
let lastSeenNow = 0;
let ws: WebSocket | null = null;
let sendWS: (msg: string) => void;
let rejoined = false;
const sendChannel = {
  webRtcArray,
  rtcConns: rtcConns,
  send: ((data: { [key: string]: string | number | Object }) => {
    const target = data.target;
    const messageString = JSON.stringify({
      ...data,
      name: data.name || user,
    });
    webRtcArray.map((ch) => {
      try {
        console.log("WebRtc send", data, ch);

        if (ch.readyState !== "open") return;

        if (
          !target || ch.target === target && !ignoreUsers.includes(ch.target)
        ) {
          ch.send(messageString);
        }
      } catch (e) {
        console.error("Error in broadcasting event", { e });
      }
    });
  }),
};

// Let createDelta;

// export const work = async (startState: {
//   mST: ICodeSession, codeSpace:string, address: string, assets: {[key: string]: string}
// }) => {
//   codeSpace = startState.codeSpace;
//   address = startState.address;
//   const {assets}= startState;
//   const session = startSession(codeSpace, {
//     name: user,
//     state: startState.mST,
//   });

//   join()

// }

export const run = async (startState: {
  mST: ICodeSession;
  codeSpace: string;
  address: string;
  App: FC;
  assets: { [key: string]: string };
}) => {
  codeSpace = startState.codeSpace;
  address = startState.address;

  const { assets } = startState;
  startSession(codeSpace, {
    name: user,
    state: startState.mST,
  }, location.origin);

  renderPreviewWindow(startState.codeSpace, startState.App);

  await initShims(assets);
  // const {join} = await import("./rtc");

  // const conn = join(codeSpace, user, (message)=>{

  //   processData(message, "rtc")
  // })

  // sendChannel.send = (message: object)=> conn.broadcast(message);

  join();

  bc = new BroadcastChannel("spike.land");
  bc.onmessage = async (event) => {
    if (event.data.ignoreUser && event.data.ignoreUser === user) return;
    console.log({ event });

    if (
      event.data.codeSpace === codeSpace && event.data.address && !address
    ) {
      ws?.send(JSON.stringify({ codeSpace, address: event.data.address }));
    }

    if (event.data.ignoreUser) {
      !ignoreUsers.includes(event.data.ignoreUser) &&
        ignoreUsers.push(event.data.ignoreUser);
    }

    if (
      event.data.codeSpace === codeSpace && event.data.sess.code !== mST().code
    ) {
      const messageData = await makePatch(event.data.sess);

      await applyPatch(messageData);
    }
  };
};

// (async (.) => {
// if (navigator && navigator?.serviceWorker) {
//   navigator.serviceWorker.register("/sw.js", {
//     scope: "/",
//   });
// const current = await navigator.serviceWorker.ready;
// await sw();

// Promise.all((await navigator.serviceWorker.getRegistrations()).map((sw) => {
//   if (current !== sw) sw.unregister();
// }));
//}
//})();
let intervalHandler: NodeJS.Timer | null = null;

// const w = window as unknown as {
//   sess: {
//     editor: typeof monaco.editor;

//     // eslint-disable-next-line no-unused-vars
//     update: (code: string) => void;
//   };\
// };

async function rejoin() {
  if (!rejoined || ws === null) {
    ws = null;

    const newWs = await join();

    return newWs;
  }
  return ws;
}

const ignoreUsers: string[] = [];

export async function saveCode(sess: ICodeSession) {
  // if (rtcConns !== globalThis.rtcConns) return;

  if (sess.i <= mST().i) return;

  console.log("creating a patch");
  const messageData = await makePatch(sess);

  console.log("applying the patch");
  await applyPatch(messageData);

  console.log("done");
  if (sess.i !== mST().i) return;
  bc.postMessage({ ignoreUser: user, sess, codeSpace, address, messageData });

  try {
    try {
      if (Object.keys(rtcConns).length > 0) {
        const message = webRTCLastSeenHashCode
          ? await makePatchFrom(
            webRTCLastSeenHashCode,
            sess,
          )
          : await makePatch(sess);
        if (message && message.patch) {
          console.log("sendRTC");
          sendChannel.send(message);
        }
      }
    } catch (e) {
      console.error("Error sending RTC...", { e });
    }
  } catch (e) {
    console.log("Error 1");
  }

  try {
    if (ws) {
      console.log({ wsLastHashCode });
      const message = await makePatchFrom(
        wsLastHashCode,
        sess,
      );

      if (!message) return;

      if (message.newHash !== hashCode()) {
        console.error("NEW hash is not even hashCode", hashCode());
        return;
      }

      const messageString = JSON.stringify({ ...message, name: user });
      sendWS(messageString);
    } else {
      rejoined = false;
      await rejoin();
    }
  } catch (e) {
    console.error("error 2", { e });
  }
}

export async function join() {
  if (ws !== null) return ws;

  // if (rtcConns !== globalThis.rtcConns) return ws;
  rejoined = true;

  console.log("WS connect!");
  if (location.host.includes("localhost")) return;
  const wsConnection = new WebSocket(
    `wss://${location.host}/live/` + codeSpace + "/websocket",
  );
  rejoined = false;

  wsConnection.addEventListener("open", () => {
    console.log("NEW WS CONNECTION");
    ws = wsConnection;
    const mess = (data: string) => {
      try {
        ws && ws?.send && ws?.send(data);
      } catch (e) {
        ws = null;
        rejoined = false;

        rejoin();
      }
    };
    sendWS = throttle(mess, 1000, {
      leading: true,
      trailing: true,
    });
    ws.addEventListener(
      "message",
      (message) => processWsMessage(message, "ws"),
    );
    // if (delta) {
    //   if (delta !== deltaSent) {
    //     deltaSent = delta;
    //     ws?.send(JSON.stringify({
    //       type: "delta",
    //     }));
    //   }
    //   return;
    // }
    if (intervalHandler) {
      clearInterval(intervalHandler);
    }

    intervalHandler = setInterval(() => {
      const now = Date.now();
      const diff = now - lastSeenNow;

      if (diff > 40_000) {
        try {
          if (wsConnection.readyState === wsConnection.OPEN) {
            return wsConnection?.send(
              JSON.stringify({
                name: user,
                timestamp: lastSeenTimestamp + diff,
              }),
            );
          }
          rejoined = false;
          rejoin();
        } catch {
          rejoined = false;
          rejoin();
        }
      }
    }, 30_000);

    // Send user info message.
    wsConnection.send(JSON.stringify({ name: user }));
    return wsConnection;
  });

  // if (!globalThis.session) {

  // Object.assign(session, { ...mST() });
  // globalThis.session = session;

  return wsConnection;
}

const h: { [key: number]: number } = {};

async function processWsMessage(
  event: { data: string },
  source: "ws" | "rtc",
) {
  if (ws == null) return;
  lastSeenNow = Date.now();

  const data = JSON.parse(event.data);

  processData(data, source);
}

async function processData(data, source) {
  console.log("ws", data.name, data.oldHash, data.newHash);

  // MySession.addEvent(data);

  if (source === "ws" && data.timestamp) {
    lastSeenNow = Date.now();
    lastSeenTimestamp = data.timestamp;
  }

  if (source === "ws" && data.hashCode) {
    wsLastHashCode = data.hashCode;
  }

  if (source === "ws" && (data.hashCode)) {
    wsLastHashCode = data.hashCode;
  }

  if (source === "rtc" && data.hashCode || data.newHash) {
    webRTCLastSeenHashCode = data.hashCode || data.newHash;
  }

  if (ignoreUsers.includes(data.name)) return;

  if (data.newHash === hashCode()) return;

  if (data.oldHash && data.newHash) {
    if (h[data.oldHash] && h[data.oldHash] === data.newHash) return;

    h[data.oldHash] = data.newHash;
  }

  if (data.newHash === hashCode()) return;

  (async () => {
    try {
      if (data.type === "new-ice-candidate") {
        await handleNewICECandidateMessage(data.candidate, data.name);
        return;
      }

      if (data.type === "offer") {
        await handleChatOffer(data.offer, data.name);
        return;
      }

      if (data.type === "answer") {
        await handleChatAnswerMessage(data.answer, data.name);

        return;
      }
      if (
        data.name && data.name !== user &&
        !rtcConns[data.name]
      ) {
        await createPeerConnection(data.name);
        return;
      }
    } catch (error) {
      console.log({ e: error });
      log_error("Error with p2p");
    }
  })();

  if (data.patch && data.name !== user) {
    if (data.newHash === hashCode()) {
      return;
    }

    await applyPatch(data);

    if (data.newHash === hashCode()) {
      if (sendChannel) {
        sendChannel.send({ hashCode: data.newHash });
      }

      return;
    } else {
      console.log("error -sending on sendChannel");
    }

    return;
  }

  if (data.patch && data.name === user) {
    wsLastHashCode = data.newHash;

    return;
  }

  if (data.name === user) {
    return;
  }

  if (wsLastHashCode !== hashCode()) {
    const resp = await fetch(`https://spike.land/live/${codeSpace}/mST`);
    const state = await resp.json();

    const codePatch = await makePatch(state.mST);
    if (codePatch.newHash === wsLastHashCode) await applyPatch(codePatch);
  }

  function createPeerConnection(target: string) {
    log(`Setting up a connection with ${target}`);
    if (rtcConns[target]) {
      log(`Aborting, since we have connection with this ${target}`);
      return;
    }

    // Create an RTCPeerConnection which knows to use our chosen
    // STUN server.

    rtcConns[target] = new RTCPeerConnection(
      rcpOptions,
    );

    // Set up event handlers for the ICE negotiation process.

    rtcConns[target].onicecandidate = (event) => {
      if (event.candidate) {
        log("*** Outgoing ICE candidate: " + event.candidate);

        ws?.send(JSON.stringify({
          type: "new-ice-candidate",
          target,
          name: user,
          candidate: event.candidate.toJSON(),
        }));
      }
    };
    rtcConns[target].oniceconnectionstatechange =
      handleICEConnectionStateChangeEvent;
    rtcConns[target].onicegatheringstatechange =
      handleICEGatheringStateChangeEvent;
    rtcConns[target].onsignalingstatechange = () => {
      log(
        "*** rtcConns[target].signalingState  changed to: " +
          rtcConns[target].signalingState,
      );
      switch (rtcConns[target].signalingState) {
        case "closed":
          break;
      }
    };
    rtcConns[target].onnegotiationneeded = handleNegotiationNeededEvent;
    rtcConns[target].ontrack = (ev) => console.log(ev);

    rtcConns[target].ondatachannel = (event) => {
      console.log("Receive Channel Callback");
      const rtc = event.channel;
      rtc.binaryType = "arraybuffer";
      rtc.addEventListener("close", onReceiveChannelClosed);

      rtc.addEventListener(
        "message",
        (message) => processWsMessage(message, "rtc"),
      );
      const rtcWithTarget = Object.assign(rtc, { target });
      webRtcArray.push(rtcWithTarget);
    };

    const dataChannelOptions = {
      ordered: true, // Do not guarantee order
      reliable: true,
      maxPacketLifeTime: 3000, // In milliseconds
    };

    const rtc = Object.assign(
      rtcConns[target].createDataChannel(
        target,
        dataChannelOptions,
      ),
      { target },
    );

    rtc.binaryType = "arraybuffer";

    rtc.addEventListener("message", (message) => {
      console.log("***********RTC***", { msg: message });

      const data = JSON.parse(message.data);
      if (data && data.hashCode) {
        webRTCLastSeenHashCode = data.hashCode;
      }

      if (data && data.newHash) {
        webRTCLastSeenHashCode = data.newHash;
      }

      return processWsMessage(message, "rtc");
    });

    rtc.addEventListener("error", (error) => {
      console.log("xxxxxx-  Data Channel Error:", error);
    });

    // Rtc.onmessage = (msg) => processWsMessage(msg, "rtc");

    rtc.addEventListener("open", () => {
      console.log("@@@@@@@@RTC IS OPEN&&&&&&&&");
      webRtcArray.push(rtc);
      // rtcConns[target].sendChannel = rtc;
    });

    rtc.addEventListener("close", () => {
      console.log("xxxxxxxx- The Data Channel is Closed");
    });

    return rtcConns[target];

    function onReceiveChannelClosed() {
      console.log("Receive channel is closed");
      rtcConns[target].close();
      delete rtcConns[target];
      console.log("Closed remote peer connection");
    }

    async function handleNegotiationNeededEvent() {
      log("*** Negotiation needed");

      try {
        log("---> Creating offer");
        const offer = await rtcConns[target].createOffer();

        if (rtcConns[target].signalingState != "stable") {
          log("The connection isn't stable yet; postponing...");
          return;
        }

        // Establish the offer as the local peer's current
        // description.

        log("---> Setting local description to the offer");
        await rtcConns[target].setLocalDescription(offer);

        // Send the offer to the remote peer.

        log("---> Sending the offer to the remote peer");
        ws?.send(JSON.stringify({
          target,
          name: user,
          type: "offer",
          offer: rtcConns[target].localDescription,
        }));
      } catch {
        log(
          "*** The following error occurred while handling the negotiationneeded event:",
        );
      }
    }

    function handleICEConnectionStateChangeEvent() {
      log(
        "*** ICE connection state changed to " +
          rtcConns[target].iceConnectionState,
      );

      switch (rtcConns[target].iceConnectionState) {
        case "closed":
        case "failed":
        case "disconnected":
          break;
      }
    }

    function handleICEGatheringStateChangeEvent() {
      log(
        "*** rtcConns[target].iceGatheringState changed to: " +
          rtcConns[target].iceGatheringState,
      );
    }
  }

  async function handleChatAnswerMessage(
    answer: RTCSessionDescriptionInit,
    target: string,
  ) {
    log("*** Call recipient has accepted our call");

    // Configure the remote description, which is the SDP payload
    // in our "answer" message.
    // const desc = new RTCSessionDescription(message);

    await rtcConns[target].setRemoteDescription(
      new RTCSessionDescription(
        answer,
      ),
    ).catch(console.error);
  }

  async function handleChatOffer(
    offer: RTCSessionDescriptionInit,
    target: string,
  ) {
    if (!rtcConns[target]) createPeerConnection(target);

    // const desc = new RTCSessionDescription(message);

    await rtcConns[target].setRemoteDescription(
      new RTCSessionDescription(offer),
    );
    // if (rtcConns[target].signalingState != "stable") {
    //   log("  - But the signaling state isn't stable, so triggering rollback");

    //   await Promise.all([
    //     rtcConns[target].setLocalDescription({ type: "rollback" }),
    //     rtcConns[target].setRemoteDescription(new RTCSessionDescription(offer)),
    //   ]);
    //   return;
    // }

    // log("  - Setting remote description");
    // await rtcConns[target].setRemoteDescription(desc);

    log("---> Creating and sending answer to caller");

    const answer = await rtcConns[target].createAnswer();

    await rtcConns[target].setLocalDescription(
      answer,
    );

    ws?.send(JSON.stringify({
      target,
      name: user,
      type: "answer",
      answer: answer,
    }));
  }
}

// Create the RTCPeerConnection which knows how to talk to our
// selected STUN/TURN server and then uses getUserMedia() to find
// our camera and microphone and add that stream to the connection for
// use in our video call. Then we configure event handlers to get
// needed notifications on the call.

// WebSocket chat/signaling channel variables.

// The media constraints object describes what sort of stream we want
// to request from the local A/V hardware (typically a webcam and
// microphone). Here, we specify only that we want both audio and
// video; however, you can be more specific. It's possible to state
// that you would prefer (or require) specific resolutions of video,
// whether to prefer the user-facing or rear-facing camera (if available),
// and so on.
//
// See also:
// https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
//

// var transceiver = null;         // RTCRtpTransceiver
// var webcamStream = null;        // MediaStream from webcam

// Output logging information to console.
function log(text: string) {
  const time = new Date();

  console.log("[" + time.toLocaleTimeString() + "] " + text);
}

// Output an error message to console.

function log_error(text: string) {
  const time = new Date();

  console.trace("[" + time.toLocaleTimeString() + "] " + text);
}

const rcpOptions = {
  iceServers: ["stun3.l.google.com:19302"].map((url) => ({
    urls: `stun:${url}`,
  })),
};

rcpOptions.iceServers = [{ urls: "stun:stun.stunprotocol.org:3478" }, {
  urls: "stun:stun.l.google.com:19302",
}];

async function handleNewICECandidateMessage(
  init: RTCIceCandidateInit,
  target: string,
) {
  log(
    "*** Adding received ICE candidate: " + JSON.stringify(init),
  );
  const candidate = new RTCIceCandidate(init);
  // const candidate = new RTCIceCandidate(message);

  console.log(rtcConns[target]);
  await rtcConns[target].addIceCandidate(candidate);
}

async function sw() {
  try {
    navigator.serviceWorker.onmessage = async (event) => {
      /** @type {null|ServiceWorker} */
      const serviceWorker = event.source;
      if (serviceWorker == null) return;
      switch (event.data.method) {
        case "ipfs-message-port":
          console.log("Message port request");
          // const { connect } = await import("./ipfs.mjs");

          // console.log("can connect trough", { connect });
          // await ipfsWorker();
          //
          const channel = new MessageChannel();
          // await connect(channel);
          // console.log({ channel });

          return serviceWorker.postMessage({
            method: "ipfs-message-port",
            id: event.data.id,
            port: channel.port2,
          }, { transfer: [channel.port2] });

          // Receives request from service worker, creates a new shared worker and
          // responds back with the message port.
          // Note: MessagePort can be transferred only once which is why we need to
          // create a SharedWorker each time. However a ServiceWorker is only created
          // once (in main function) all other creations just create port to it.
      }
    };

    // @ts-ignore - register expects string but webPack requires this URL hack.

    // This is just for testing, lets us know when SW is ready.

    // are loaded from service worker. However it could be that such a URL is loaded
    // before the service worker was registered in which case our server just loads a blank
    if (document.documentElement.dataset.viewer) {
      const load = async (path: string) => {
        const paths = path && path.split("/") || [];
        const protocol = paths[0] || "";
        switch (protocol) {
          case "ipfs":
          case "ipns": {
            document.body.innerHTML =
              `<iframe id="viewer" style="width:100%;height:100%;position:fixed;top:0;left:0;border:none;" src="/view${path}"></iframe>`;
          }
        }
      };

      return load(location.pathname);
    }
  } catch {
    console.log("ipfs load error");
  }
}
