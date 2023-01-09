// Object.assign(globalThis, require("buffer/"));
// Object.assign(globalThis, require("stream-browserify"));
import ky from "ky";
// import 'css-paint-polyfill
import AVLTree from "avl";
import { applyPatch as aPatch, createDelta, Delta } from "./textDiff";
// import P2PCF from "p2pcf";
// import adapter from "webrtc-adapter";
import {
  //  onSession

  type CodePatch,
  // type Delta,
  // CodeSession,

  // makePatch,
  // makePatchFrom,

  string_,
  syncStorage,
} from "./session";

import { Mutex } from "async-mutex";

// Import * as FS from '@isomorphic/-git/lightning-fs';

// import { renderPreviewWindow } from "./renderPreviewWindow";

// import { esmTransform } from "runner";
import { mkdir, readdir, unlink, writeFile } from "./fs";
import { md5 } from "./md5"; // import { wait } from "wait";
// import { prettierJs } from "./prettierEsm";
import { Record } from "immutable";
import { ldb } from "./createDb";
import { renderPreviewWindow } from "./renderPreviewWindow";
import type { ICodeSession } from "./session";

type MessageProps = Partial<{
  oldHash?: number;
  newHash?: number;
  name?: string;
  codeSpace: string;
  i?: number;
  code?: string;
  session: ICodeSession;
  sess?: ICodeSession;
  type?: string;
  target?: string;
  candidate?: RTCIceCandidateInit;
  answer?: RTCSessionDescriptionInit;
  offer?: RTCSessionDescription;
  reversePatch?: Delta[];
  patch?: Delta[];
}>;

const ws = {
  blockedMessages: [] as MessageProps[],
  post: (json: Partial<CodePatch & ICodeSession & { hashCode: number }>) =>
    ky.post(location.href, {
      json,
      retry: {
        limit: 5,
        methods: ["post"],
        statusCodes: [413, 500],
        backoffLimit: 3000,
      },
    }).json(),
  send: (
    mess: MessageProps,
  ) => {
    ws.blockedMessages.push(mess);
  },
};

// import { isBuffer } from "util";

// Import PubSubRoom from 'ipfs-pubsub-room'

const codeSpace = location.pathname.slice(1).split("/")[1];

// const webRtcArray: Array<RTCDataChannel & { target: string }> = [];

// const rtcConns: { [name: string]: RTCPeerConnection } = {};

export class Code {
  mutex: Mutex;

  session: Record<ICodeSession>;
  sess: ICodeSession;
  head: number;
  user = md5(self.crypto.randomUUID());
  mST(p?: Delta[]) {
    if (p && p.length) {
      const sessAsJs = this.session.toJSON();

      const { i, code, html, css }: ICodeSession = p
        ? JSON.parse(
          aPatch(
            string_(
              sessAsJs,
            ),
            p,
          ),
        )
        : sessAsJs;
      return this.session.merge({
        i,
        code,
        html,
        css,
      }).toObject();
    }
    return this.session.toObject();
  }

  // const newNewRecord = this.session.get("state").merge(JSON.parse(newString));

  // const newHash = newRec.hashCode();
  // hashStore[newHash] = newNewRecord;

  syncKV(
    oldSession: ICodeSession,
    newSess: ICodeSession,
    message: CodePatch,
  ) {
    syncStorage(
      ldb(codeSpace).setItem,
      ldb(codeSpace).getItem,
      oldSession,
      newSess,
      message,
    );
  }

  constructor() {
    this.mutex = new Mutex();

    // this.users.insert(this.user);
    this.sess = {
      code: "",
      i: 0,
      css: "",
      html: "",
    };
    this.head = 0;
    this.session = Record<ICodeSession>(this.sess)({});

    this.mutex.runExclusive(async () => {
      this.mutex.acquire();
      this.head = await ldb(codeSpace).getItem("head") as number;

      if (!this.sess || !(this.sess.i > 0)) {
        await Promise.all([
          this.head = await ky(`${origin}/live/${codeSpace}/session/head`)
            .text().then((x) => this.head = Number(x)),
          this.sess = await ky(`${origin}/live/${codeSpace}/session`).json(),
        ]);
        this.session = Record<ICodeSession>(this.sess)();
      }

      await ldb(codeSpace).setItem(
        "head",
        Number(),
      ) as number;
      this.sess = await ldb(codeSpace).getItem(
        String(this.head),
      ) as (ICodeSession | false)
        || await ldb(codeSpace).setItem(
          String(this.head),
          await ky(`${origin}/live/${codeSpace}/session`) // ;;.  /${this.head}`)
            .json<ICodeSession>(),
        );
      this.session = Record<ICodeSession>(this.sess)();
      this.mutex.release();
    });
  }

  createPatch(oldSess: ICodeSession, newSess: ICodeSession) {
    const oldRec = this.session.merge(oldSess);
    const oldHash = oldRec.hashCode();
    const newRec = this.session.merge(newSess);
    const newHash = newRec.hashCode();

    const oldString = string_(oldRec.toJSON());
    const newString = string_(newRec.toJSON());

    const patch = createDelta(oldString, newString);
    const reversePatch = createDelta(newString, oldString);
    return {
      oldHash,
      newHash,
      reversePatch,
      patch,
    };
  }

  async syncWS(newSession: ICodeSession, signal: AbortSignal) {
    const oldSession = this.sess;
    const newState = this.session.merge(newSession).toJSON();
    const message = this.createPatch(oldSession, newState);

    // controller.abort();
    // controller = new AbortController();

    // console.log("alive1");
    if (ws) {
      // if (wsLastHashCode === hashKEY()) {
      //   console.log("WS is up to date with us.");
      //   return;
      // }]
      if (signal.aborted) return;

      const oldSession = this.sess;

      await this.mutex.waitForUnlock();
      this.mutex.acquire();

      // applyPatch(message, codeSpace);

      // const newSS = mST(codeSpace);
      setTimeout(async () => {
        this.session = this.session.merge(newSession);

        ldb(codeSpace).syncDb(oldSession, newSession, message);

        this.mutex.release();

        ws.post(message);
        ws.send(message);
      });

      return newSession;
    }
  }

  // sendChannel = {
  //   localStream: null as MediaStream | null,
  //   webRtcArray,
  //   // tracks,
  //   // tracks: {} as {
  //   //   [key string]: {
  //   //     track: MediaStreamTrack;
  //   //     streams: readonly MediaStream[];
  //   //     vidElement: HTMLVideoElement;
  //   //   },
  //   // user,
  //   vidElement: document.createElement("video"),
  //   stopVideo,
  //   startVideo,
  //   rtcConns,
  //   send(data: any) {
  //     // const target = data.target;
  //     const messageString = JSON.stringify({
  //       ...data,
  //       name: data.name || codeSession.user,
  //     });
  //     webRtcArray.map((ch) => {
  //       try {
  //         // console.//log("WebRtc send", data, ch);

  //         if (ch.readyState !== "open") {
  //           return;
  //         }

  //         if (
  //           !data.target
  //           || ch.target === data.target && !ignoreUsers.includes(ch.target)
  //         ) {
  //           ch.send(messageString);
  //         }
  //       } catch (error) {
  //         // console.error("Error in broadcasting event", { e: error });
  //       }
  //     });
  //   },
  // };
  users = new AVLTree(
    (a: string, b: string) => a === b ? 0 : a < b ? 1 : -1,
    true,
  );
  ignoreUsers = Array<string>();

  waiting: (() => boolean)[] = [];
  // wsSessions: WebsocketSession[];
  buffy: Promise<void>[] = [];
  i = 0;

  async run() {
    this.mutex.waitForUnlock();

    if (location.pathname === `/live/${codeSpace}`) {
      renderPreviewWindow({ codeSpace, dry: false });
    }

    const BCC = new BroadcastChannel(location.origin + "/ws.js");
    const ports = new MessageChannel();
    const port = ports.port1;
    // BCC.onmessage = (e) => e.data.type === "onconnect" && handleWorker(e, port);

    const obj = JSON.parse(
      JSON.stringify({
        type: "onconnect",
        codeSpace,
        hashCode: codeSession.head,
        session: this.sess,
        name: codeSession.user,
        "port": ports.port2,
      }),
    );

    BCC.postMessage(obj);

    // port.onmessage = (e) => handleWorker(e, port);

    const root = await readdir("/");

    if (!root.includes("live")) await mkdir("/live");
    const live = await readdir("/live");
    if (!live.includes(codeSpace)) await mkdir("/live/" + codeSpace);

    // if (!liveStat.isDirectory())
    // else console.log("dir already )(exists")
    const cs = await readdir(`/live/${codeSpace}`);
    // const code = await fs.promises.readFile(`/live/${codeSpace}/index.tsx`)

    // let hST: ICodeSession | null = null;

    // if (hST && hST.i > mst.i) mst = hST!;

    if (cs.includes("index.js")) {
      unlink(`/live/${codeSpace}/index.js`);
    }

    if (!cs.includes("index.tsx")) {
      await writeFile(
        `/live/${codeSpace}/index.tsx`,
        this.sess.code,
      );
    } else {
      await unlink(
        `/live/${codeSpace}/index.tsx`,
      );
      await writeFile(
        `/live/${codeSpace}/index.tsx`,
        this.sess.code,
      );
    }

    if (!cs.includes("index.tsx")) {
      await writeFile(
        `/live/${codeSpace}/index.tsx`,
        this.sess.code,
      );
    } else {
      await unlink(
        `/live/${codeSpace}/index.tsx`,
      );
      await writeFile(
        `/live/${codeSpace}/index.tsx`,
        this.sess.code,
      );
    }
  }
}

export const codeSession = new Code();

globalThis.codeSession = codeSession;
export const syncWS = async (sess: ICodeSession, signal: AbortSignal) => await codeSession.syncWS(sess, signal);

export const run = async () => {
  codeSession.run();
};

// async function stopVideo() {
// if (!sendChannel.localStream) return;
// }

// async function startVideo() {
// console.log({ adapter });

// const supported = await navigator.mediaDevices.getSupportedConstraints();
// console.log({ supported });

// const mediaConstraints = {
// audio: false, // We want an audio track
// video: true, // {
//  .. aspectRatio?: ConstrainDouble;
// autoGainControl?: ConstrainBoolean;
// channelCount?: ConstrainULong;
//  deviceId?: ConstrainDOMString;
//  echoCancellation?: ConstrainBoolean;
//  facingMode?: ConstrainDOMString;
// frameRate?: ConstrainDouble;
// groupId?: ConstrainDOMString;
// height?: ConstrainULong;
// latency?: ConstrainDouble;
// noiseSuppression?: ConstrainBoolean;
// sampleRate?: ConstrainULong;
// sampleSize?: ConstrainULong;
// suppressLocalAudioPlayback?: ConstrainBoolean;
// width?: ConstrainULong;
// }, // And we want a video track
// };

// document.body.appendChild(sendChannel.vidElement);

// const localStream = await navigator.mediaDevices.getUserMedia(
//   mediaConstraints,
// );

// handleSuccess(localStream);
// function handleSuccess(localStream: MediaStream) {
//   // const video = sendChannel.vidElement;
//   const videoTracks = localStream.getVideoTracks();
//   console.log("Got stream with constraints:", mediaConstraints);
//   console.log(`Using video device: ${videoTracks[0].label}`);
//   // sendChannel.localStream = localStream; // make variable available to browser console
//   // video.srcObject = localStream;
// }

// localStream.getVideoTracks().forEach((track) =>
// Object.keys(sendChannel.rtcConns).map((k) => {
// const peerConnection = sendChannel.rtcConns[k];

// peerConnection.addTrack(track);
// })
// );
// }
//
// async function syncRTC() {
//   try {
//     if (Object.keys(rtcConns).length > 0) {
//       if (webRTCLastSeenHashCode === hashKEY()) {
//         return;
//       }

//       const sess = mST();
//       // console.//log({ wsLastHashCode });

//       const message = webRTCLastSeenHashCode
//         ? makePatchFrom(
//           webRTCLastSeenHashCode,
//           sess,
//         )
//         : makePatch(sess);
//       if (message !== null && message.patch) {
//         // console.//log("sendRTC");
//         sendChannel.send(message);
//       }
//     }
//   } catch (error) {
//     // console.error("Error sending RTC...", { e: error });
//   }
// }

// const h: Record<number, number> = {};

// async function processWsMessage(
//   // event: { data: string },
//   // source: "ws" | "rtc",
//   // conn: { hashCode: string },
// ) {
//   // lastSeenNow = Date.now();

//   // const data = JSON.parse(event.data);

//   // codeSession.pr(data, source);
// }

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

// var transceiver = null;         //RTCRtpTransceiver
// var webcamStream = null;        //MediaStream from webcam

const rcpOptions = {
  iceServers: ["stun3.l.google.com:19302"].map((url) => ({
    urls: `stun:${url}`,
  })),
};

rcpOptions.iceServers = [{ urls: "stun:stun.stunprotocol.org:3478" }, {
  urls: "stun:stun.l.google.com:19302",
}];

// async function handleNewICECandidateMessage(
//   init: RTCIceCandidateInit,
//   target: string,
// ) {
//   const candidate = new RTCIceCandidate(init);
//   // Const candidate = new RTCIceCandidate(message);

//   // console.//log(rtcConns[target]);
//   await rtcConns[target].addIceCandidate(candidate);
// }

// export async function sw() {
//   try {
//     navigator.serviceWorker.onmessage = async (event) => {
//       /** @type {null|ServiceWorker} */
//       const serviceWorker = event.source;
//       if (serviceWorker == null) {
//         return;
//       }

//       switch (event.data.method) {
//         case "ipfs-message-port":
//           // console.//log("Message port request");
//           // Const { connect } = await import("./ipfs.mjs");

//           // console.//log("can connect trough", { connect });
//           // await ipfsWorker();
//           //
//           //          const channel = new MessageChannel();
//           // Await connect(channel);
//           // console.//log({ channel });

//           // {
//           //   serviceWorker.postMessage({
//           //     method: "ipfs-message-port",
//           //     id: event.data.id,
//           //     port: channel.port2,
//           //   }, { transfer: [channel.port2] });
//           // }

//           // Receives request from service worker, creates a new shared worker and
//           // responds back with the message port.
//           // Note: MessagePort can be transferred only once which is why we need to
//           // create a SharedWorker each time. However a ServiceWorker is only created
//           // once (in main function) all other creations just create port to it.
//       }
//     };

//     // This is just for testing, lets us know when SW is ready.

//     // are loaded from service worker. However it could be that such a URL is loaded
//     // before the service worker was registered in which case our server just loads a blank
//     if (document.documentElement.dataset.viewer) {
//       const load = async (path: string) => {
//         const paths = path && path.split("/") || [];
//         const protocol = paths[0] || "";
//         switch (protocol) {
//           case "ipfs":
//           case "ipns": {
//             document.body.innerHTML =
//               `<iframe id="viewer" style="width:100%;height:100%;position:fixed;top:0;left:0;border:none;" src="/view${path}"></iframe>`;
//           }
//         }
//       };

//       await load(location.pathname);
//       return;
//     }
//   } catch {
//     // console.//log("ipfs load error");
//   }
// }

// async function handleWorker(ev: MessageEvent, port: MessagePort) {
//   console.log("ONMESSAGE", { data: ev.data });
//   if (ev.data.type === "onconnect") {
//     console.log("POST ONCONNECT", {
//       codeSpace,
//       name: codeSession.user,
//       hashCode: mST(codeSpace),
//     });
//     // messagePort = this;
//     // const sess = mST(codeSpace);
//     ws.send = (
//       message: MessageProps,
//     ) => {
//       const messageData = {
//         name: codeSession.user,
//         ...message,
//         codeSpace,
//         i: mST(codeSpace).i,
//         hashCode: hashCode(mST(codeSpace)),
//       };
//       console.log("POST MESSAGE", { messageData });
//       if (
//         messageData.oldHash && messageData.oldHash === messageData.newHash
//       ) return;
//       port.postMessage(messageData);
//     };
//     ws.send({ type: "handshake", session: mST(codeSpace) });

//     while (ws.blockedMessages.length) ws.send(ws.blockedMessages!.shift()!);
//   } else {
//     let data;
//     try {
//       data = JSON.parse(ab2str(ev.data));
//     } catch (err) {
//       console.error("not a buff", { err, data: ev.data });
//     }
//     try {
//       // await codeSession.processData(data, "ws");
//       console.log("its a buffer", { data });
//     } catch (err) {
//       console.error("process error", { err, data: ev.data });
//     }
//     // }
//   }
// }
