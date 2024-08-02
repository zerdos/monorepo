import SharedWorker from "@okikio/sharedworker";
import { swVersion } from "@src/swVersion";
import { Mutex } from "async-mutex";
import { getTransferables, hasTransferables } from "transferables";
import { RpcProvider } from "worker-rpc";

const mutex = new Mutex();

let rpc: RpcProvider | null = null;
let workerPort: MessagePort;
export const getPort = () => workerPort;
export const init = (swVersion: string, port: MessagePort | null = null) => {
  if (rpc !== null) return rpc;

  workerPort = port
    || (new SharedWorker(`/workerScripts/ataWorker.js?v=${swVersion}`)).port;
  rpc = new RpcProvider(
    (message) =>
      workerPort.postMessage(
        message,
        (hasTransferables(message as unknown)
          ? getTransferables(message as unknown)
          : undefined) as unknown as Transferable[],
      ),
    0,
  ) as unknown as RpcProvider;
  workerPort.onmessage = ({ data }) => rpc!.dispatch(data);
  return rpc;
};

export const prettierToThrow = (
  { code, toThrow }: { code: string; toThrow: boolean },
) => init(swVersion).rpc("prettierJs", { code, toThrow }) as Promise<string>;

export const prettier = (code: string) =>
  mutex.runExclusive(async () => await prettierToThrow({ code, toThrow: false }));

export const ata = (
  { code, originToUse }: { code: string; originToUse: string },
) =>
  init(swVersion).rpc("ata", { code, originToUse }) as Promise<{
    content: string;
    filePath: string;
  }[]>;

export const tsx = (
  code: string,
) =>
  init(swVersion).rpc("tsc", code) as Promise<{
    content: string;
    filePath: string;
  }[]>;

const transpileID = (
  { code, originToUse }: { code: string; originToUse: string },
) => init(swVersion).rpc("transpile", { code, originToUse }) as Promise<string>;

export const transpile = async (
  { code, originToUse }: { code: string; originToUse: string },
) => {
  try {
    return await mutex.runExclusive(async () => {
      const transpiled = await transpileID({ code, originToUse });
      if (transpiled === "/** js.spike.land */\n[object Object]") {
        throw new Error("transpile error", { cause: transpiled });
      }
      if (typeof transpiled !== "string") {
        throw new Error("transpile error", { cause: transpiled });
      }
      return transpiled;
    });
  } catch (e) {
    console.error(e);
    throw new Error("transpile error", { cause: e });
  }
};

export const build = (
  { codeSpace, origin, format = "esm" }: {
    codeSpace: string;
    origin: string;
    format: "esm" | "iife";
  },
) =>
  init(swVersion).rpc("build", {
    codeSpace,
    origin,
    format,
  }) as Promise<string>;

export const connect = (codeSpace: string) => init(swVersion).signal("connect", codeSpace);
