import AlwaysSupportedSharedWorker from "@/external/shared-w-polyfill";
import type { ICodeSession, ImageData, Message } from "@/lib/interfaces";
import { Mutex } from "async-mutex";
import { getTransferables, hasTransferables } from "transferables";
import { RpcProvider } from "worker-rpc";

type WorkerPort = MessagePort | Worker;

class WorkerWrapper {
  tag: string = "default";
  rpc: RpcProvider;
  workerPort: WorkerPort;
  busy: boolean = false;

  constructor(port: WorkerPort) {
    this.workerPort = port;
    this.rpc = new RpcProvider((message) =>
      this.workerPort.postMessage(
        message,
        (hasTransferables(message as unknown)
          ? getTransferables(message as unknown)
          : undefined) as unknown as Transferable[],
      )
    );

    this.workerPort.onmessage = (event: MessageEvent) => {
      this.rpc.dispatch(event.data);
    };
  }
}

class WorkerPool {
  private workers: WorkerWrapper[] = [];
  private minFreeWorkers: number;
  private swVersion: string;

  constructor(minFreeWorkers: number = 0, swVersion: string) {
    this.minFreeWorkers = minFreeWorkers;
    this.swVersion = swVersion;
  }

  private addWorker(tag: string) {
    const worker = new AlwaysSupportedSharedWorker(
      tag === "connect"
        ? `/@/workers/ata-worker.worker.js?v=${this.swVersion}&workerId=connect`
        : `/@/workers/ata-worker.worker.js?v=${this.swVersion}&workerId=${tag}-${this.workers.length}`,
    );

    const port = worker.port;

    const workerWrapper = new WorkerWrapper(port);
    workerWrapper.tag = tag;
    this.workers.push(workerWrapper);
    return workerWrapper;
  }

  getWorker(tag: string = "default") {
    if (tag === "connect") {
      const connectWorker = this.workers.find((worker) => worker.tag === tag);
      if (connectWorker) {
        return connectWorker;
      }
    }
    const availableWorker = this.workers.find((worker) => !worker.busy && worker.tag === tag)
      || this.addWorker(tag);

    availableWorker.busy = true;

    const freeWorkers = this.workers.filter((worker) => !worker.busy && worker.tag === tag)
      .length;
    if (freeWorkers < this.minFreeWorkers) {
      this.addWorker(tag); // Now synchronous
    }

    return availableWorker;
  }

  releaseWorker(worker: WorkerWrapper) {
    worker.busy = false;
  }
}

// Usage
let workerPool: WorkerPool;

async function init() {
  const { swVersion } = await import("@/lib/swVersion");

  workerPool = (globalThis as unknown as { workerPool: WorkerPool }).workerPool
    || new WorkerPool(0, swVersion);
  Object.assign(globalThis, { workerPool });
  // const worker = (await init()).getWorker("connect");

  return workerPool;
}

export const prettierToThrow = async ({
  code,
  toThrow,
}: {
  code: string;
  toThrow: boolean;
}): Promise<string> => {
  const worker = (await init()).getWorker("prettier");
  try {
    return await worker.rpc.rpc("prettierJs", { code, toThrow });
  } finally {
    (await init()).releaseWorker(worker);
  }
};

export const ata = async ({
  code,
  originToUse,
}: {
  code: string;
  originToUse: string;
}): Promise<{ content: string; filePath: string }[]> => {
  const worker = (await init()).getWorker("ata");
  try {
    return await worker.rpc.rpc("ata", { code, originToUse });
  } finally {
    (await init()).releaseWorker(worker);
  }
};

export const prettierCss = async (code: string): Promise<string> => {
  const worker = (await init()).getWorker("prettier");
  try {
    return await worker.rpc.rpc("prettierCss", code);
  } finally {
    (await init()).releaseWorker(worker);
  }
};

export const tsx = async (
  code: string,
): Promise<{ content: string; filePath: string }[]> => {
  const worker = (await init()).getWorker("tsx");
  try {
    return await worker.rpc.rpc("tsc", code);
  } finally {
    (await init()).releaseWorker(worker);
  }
};

export const handleSendMessage = async (
  { messages, codeSpace, prompt, images }: {
    messages: Message[];
    codeSpace: string;
    prompt: string;
    images: ImageData[];
  },
): Promise<void> => {
  const worker = (await init()).getWorker("search-replace");
  try {
    return await worker.rpc.rpc("handleSendMessage", {
      messages,
      codeSpace,
      prompt,
      images,
    });
  } finally {
    (await init()).releaseWorker(worker);
  }
};

export const createWorkflow = async (q: string): Promise<string> => {
  const worker = (await init()).getWorker("workflow");
  try {
    return await worker.rpc.rpc("createWorkflow", q);
  } finally {
    (await init()).releaseWorker(worker);
  }
};
let mutex: Mutex;

export const transpile = async ({
  code,
  originToUse,
  wasmModule,
}: {
  code: string;
  originToUse: string;
  wasmModule?: WebAssembly.Module;
}): Promise<string> => {
  if (!mutex) {
    mutex = new Mutex();
  }
  return mutex.runExclusive(async () => {
    const tp = (globalThis as unknown as {
      transpile?: typeof transpile;
    }).transpile;

    if (tp) {
      return tp({ code, originToUse, wasmModule });
    }
    const worker = (await init()).getWorker("esbuild");
    try {
      return await worker.rpc.rpc("transpile", {
        code,
        originToUse,
        wasmModule,
      });
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      (await init()).releaseWorker(worker);
    }
  });
};

export const build = async ({
  codeSpace,
  origin,
  format = "esm",
  splitting = false,
  entryPoint = "",
  external = [],
}: {
  codeSpace: string;
  splitting?: boolean;
  external?: string[];
  origin: string;
  entryPoint?: string;
  format: "esm" | "iife";
}): Promise<string> => {
  const worker = (await init()).getWorker("esbuild");
  try {
    return await worker.rpc.rpc("build", {
      codeSpace,
      origin,
      splitting,
      external,
      entryPoint,
      format,
    });
  } finally {
    (await init()).releaseWorker(worker);
  }
};

export const connect = async ({
  signal,
  sess,
}: {
  signal: string;
  sess: ICodeSession;
  swVersion: string;
}): Promise<() => void> => {
  const worker = (await init()).getWorker("connect");
  try {
    worker.rpc.signal("connect", { signal, sess });

    return async () => {
      (await init()).releaseWorker(worker);
    };
  } catch (e) {
    console.error(e);
    (await init()).releaseWorker(worker);
    throw e;
  }
};
