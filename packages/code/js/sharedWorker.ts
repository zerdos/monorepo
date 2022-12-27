import localForage from "localforage";
import { str2ab } from "sab";
import { CodeSession } from "session";
import type { Delta } from "textDiff";

const hashStore: { [hash: string]: CodeSession } = {};
const names: { [codeSpace: string]: string } = {};
const blockedMessages: { [codeSpace: string]: string[] } = {};

export type {};
declare const self: SharedWorkerGlobalScope & {
  mod: Mod;
  counters: Counters;
  dbs: { [codeSpaces: string]: LocalForage };
  connections: { [codeSpaces: string]: MessagePort[] };
  names: {};
  // bc: BroadcastChannel;
};

// async function ata(code: string, baseUrl: string) {
//   const window = self;

// (function(){

//   if ("performance" in window == false) {
//       window.performance = {};
//   }

//   Date.now = (Date.now || function () {  // thanks IE8
// 	  return new Date().getTime();
//   });

//   if ("now" in window.performance == false){

//     var nowOffset = Date.now();

//     if (performance.timing && performance.timing.navigationStart){
//       nowOffset = performance.timing.navigationStart
//     }

//     window.performance.now = function now(){
//       return Date.now() - nowOffset;
//     }
//   }

// })();
//   const detective =  (await import("../vendor/ts-detective.mjs")).default

//   const res= detective(code)
//   return resizeBy;
// }

type Mod = { [codeSpace: string]: WebSocket };
type Counters = { [codeSpace: string]: number };
type Data = {
  name: string;
  codeSpace: string;
  target?: string;
  code: string;
  baseUrl: string;
  type?:
    | "new-ice-candidate"
    | "video-offer"
    | "video-answer"
    | "handshake"
    | "ata";
  patch?: Delta[];
  reversePatch?: Delta[];
  address?: string;
  users?: string[];
  i: number;
  hashCode?: string;
  candidate?: string;
  sess: CodeSession;
  answer?: string;
  offer?: string;
  newHash: string;
  oldHash?: string;
};

self.mod = self.mod || {};
self.counters = self.counters || {};
self.connections = self.connections || {};
self.dbs = self.dbs || {};

const { mod, counters } = self;
// bc.onmessage = ({ data }) => onMessage(data);

async function onMessage(port: MessagePort, {
  name,
  codeSpace,
  target,
  type,
  code,
  baseUrl,
  patch,
  reversePatch,
  users,
  i,
  address,
  hashCode,
  newHash,
  oldHash,
  candidate,
  offer,
  answer,
  sess,
}: Data) {
  // console.log("onMessage", {
  //   codeSpace,
  //   name,
  //   sess,
  //   oldHash,
  //   newHash,
  //   hashCode,
  //   patch,
  //   reversePatch,
  // });
  const hash = newHash || hashCode;
  if (sess && hash) hashStore[hash] = sess;
  if (sess && newHash) hashStore[newHash] = sess;
  if (sess && hashCode) hashStore[hashCode] = sess;

  if (i && !counters[codeSpace]) counters[codeSpace] = i;
  else if (i && counters[codeSpace] >= i) return;
  counters[codeSpace] = i;
  // if (type === "ata" && code && baseUrl) {
  //   return import("./ata").then(({ run }) => run(code, baseUrl)).then(
  //     (extraLibs) => port.postMessage({ type: "ata", extraLibs }),
  //   );
  // }
  if (codeSpace && name && type === "handshake") {
    self.connections[codeSpace] = self.connections[codeSpace] || [];
    self.connections[codeSpace].push(port);

    self.dbs[codeSpace] = self.dbs[codeSpace] || localForage.createInstance({
      name: location.origin + `/live/${codeSpace}`,
    });

    console.log(
      "onconnect",
      self.connections[codeSpace].length,
      Object.keys(self.connections),
    );
    if (!names[codeSpace]) {
      names[codeSpace] = name;
    }
    if (!mod[codeSpace] || mod[codeSpace].readyState !== mod[codeSpace].OPEN) {
      blockedMessages[codeSpace] = blockedMessages[codeSpace] || [];
      if (
        !mod[codeSpace]
        || mod[codeSpace].readyState !== mod[codeSpace].CONNECTING
      ) {
        reconnect(codeSpace, name);
      }
    }
  }

  const obj: { [k: string]: unknown } = {
    name,
    target,
    type,
    patch,
    reversePatch,
    address,
    i,
    users,
    hashCode,
    newHash,
    oldHash,
    candidate,
    offer,
    answer,
  };

  Object.keys(obj).forEach((key) => !obj[key] && delete obj[key]);

  if (mod[codeSpace] && mod[codeSpace].readyState === mod[codeSpace].OPEN) {
    const db = self.dbs[codeSpace];
    if (db) {
      const hash = await db.getItem<string>("wsHash");
      if (hash && obj.oldHash && hash !== obj.oldHash) {
        const old = await db.getItem<
          {
            newHash: string;
            oldHash: string;
            patch: Delta[];
            reversePatch: Delta[];
          }
        >(hash);

        if (old) {
          const next = await db.getItem<
            {
              newHash: string;
              oldHash: string;
              patch: Delta[];
              reversePatch: Delta[];
            }
          >(
            old.newHash,
          );
          if (next) {
            return mod[codeSpace].send(
              JSON.stringify({
                oldHash: hash,
                newHash: old.newHash,
                patch: old.patch,
                reversePatch: next.reversePatch,
                name: names[codeSpace],
              }),
            );
          }
        }
      }
    }

    mod[codeSpace].send(JSON.stringify(obj));
  } else {
    blockedMessages[codeSpace] = [
      ...(blockedMessages[codeSpace] || []),
      JSON.stringify(obj),
    ];
  }
}
let iii = 0;
self.onconnect = ({ ports }) => {
  ports[0].postMessage({ type: "onconnect", connections: ++iii });
  ports[0].onmessage = ({ data }: { data: Data }) => onMessage(ports[0], data);
};

function reconnect(codeSpace: string, name: string) {
  // return new Promise(async (resolve) => {
  // if (isPromise(mod[codeSpace])) {
  // return resolve(await mod[codeSpace]);
  // }
  if (mod[codeSpace]) return mod[codeSpace];
  // if (mod[codeSpace] && mod[codeSpace].readyState !== 1) delete mod[codeSpace];

  const websocket = new WebSocket(
    `wss://${location.host}/live/` + codeSpace + "/websocket",
  );
  mod[codeSpace] = {
    ...websocket,
    send: (msg: string) => {
      blockedMessages[codeSpace] = [...(blockedMessages[codeSpace]), msg];

      while (
        websocket.readyState === websocket.OPEN
        && blockedMessages[codeSpace].length
      ) {
        const mess = blockedMessages[codeSpace].shift();
        console.log({ mess });
        if (mess) websocket.send(mess);
      }
    },
  };
  websocket.addEventListener(
    "message",
    async (ev) => {
      const patch = JSON.parse(ev.data);

      const mess = { codeSpace, ...patch };
      mess.name = names[codeSpace];

      const db = self.dbs[codeSpace];
      const head = await db.getItem("head");

      const hash = patch.newHash || patch.hashCode;
      if (hash && head && hash !== head) {
        await db.setItem("wsHash", hash);
        const old = await db.getItem<
          {
            newHash: string;
            oldHash: string;
            patch: Delta[];
            reversePatch: Delta[];
          }
        >(hash);

        if (old) {
          const next = await db.getItem<
            {
              newHash: string;
              oldHash: string;
              patch: Delta[];
              reversePatch: Delta[];
            }
          >(
            old.newHash,
          );
          if (next) {
            return mod[codeSpace].send(
              JSON.stringify({
                oldHash: hash,
                newHash: old.newHash,
                patch: old.patch,
                reversePatch: next.reversePatch,
                name: names[codeSpace],
              }),
            );
          }
        }
      }
      if (hash && hashStore[hash]) {
        mess.sess = hashStore[hash];

        // Object.assign(mess, { sess: hashStore[hash] });
      }

      const str = JSON.stringify(mess);
      // var bufView = new Uint16Array(str.length);
      // for (var i = 0, strLen = str.length; i < strLen; i++) {
      //   bufView[i] = str.charCodeAt(i);
      // }
      // const sab = new Uint16Array(str2ab(JSON.stringify(mess)));
      // var j = 0;
      // while (Atomics.load(bufView, j++) < str.length) {

      // }
      self.connections[codeSpace] = self.connections[codeSpace].map((conn) => {
        try {
          const ab = str2ab(str);
          conn.postMessage(ab, [ab]);
          return conn;
        } catch (err) {
          console.error("can't post message connection");
          return null;
        }
      }).filter((x) => x !== null) as MessagePort[];
    },
  );

  blockedMessages[codeSpace].push(JSON.stringify({ name }));
  websocket.onopen = () => {
    while (
      websocket.readyState === websocket.OPEN
      && blockedMessages[codeSpace].length
    ) {
      const mess = blockedMessages[codeSpace].shift();
      if (mess) websocket.send(mess);
    }
  };

  return mod[codeSpace];
}
