import { RpcProvider } from "worker-rpc";
let rpc: RpcProvider | null = null;
const init = () => {
  if (rpc !== null) return rpc;
  const worker = globalThis.sharedWorker = globalThis.sharedWorker
    || new SharedWorker("/ataWorker.js?" + globalThis.assetHash);
  rpc = new RpcProvider(
    (message, transfer) => worker.port.postMessage(message, transfer as any),
  ) as RpcProvider;
  worker.port.onmessage = (e) => rpc!.dispatch(e.data);
  return rpc;
};

export const prettier = (code: string) => init().rpc("prettierJs", code) as unknown as string;
export const ata = (
  { code, originToUse }: { code: string; originToUse: string },
) =>
  init().rpc("ata", { code, originToUse }) as Promise<{
    content: string;
    filePath?: string;
  }[]>;

export const transpile = (
  { code, origin }: { code: string; origin: string },
) => init().rpc("transpile", { code, origin }) as Promise<string>;
