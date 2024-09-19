import AlwaysSupportedSharedWorker from "@/external/shared-worker";
import { ICodeSession } from "@/lib/interfaces";
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
    this.rpc = new RpcProvider((message: any) =>
      this.workerPort.postMessage(
        message,
        hasTransferables(message) ? getTransferables(message) : [],
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

  constructor(minFreeWorkers: number = 2) {
    this.minFreeWorkers = minFreeWorkers;
    this.initializeWorkers();
  }

  private initializeWorkers() {
    for (let i = 0; i < this.minFreeWorkers; i++) {
      this.addWorker("default");
    }
  }

  private addWorker(tag: string) {
    const worker = new AlwaysSupportedSharedWorker(
      `/@/workers/ata-worker.worker.js?workerId=${tag}-${this.workers.length}`,
    );

    const port = worker.port;

    const workerWrapper = new WorkerWrapper(port);
    workerWrapper.tag = tag;
    this.workers.push(workerWrapper);
  }

  getWorker(tag: string = "default") {
    let availableWorker = this.workers.find((worker) => !worker.busy && worker.tag === tag);

    if (!availableWorker) {
      let nonBusyWorker = this.workers.find((worker) => !worker.busy);
      if (nonBusyWorker) {
        nonBusyWorker.tag = tag;
        nonBusyWorker.busy = true;
        return nonBusyWorker;
      }

      this.addWorker(tag); // Now synchronous
      availableWorker = this.workers[this.workers.length - 1];
    }

    availableWorker.busy = true;

    const freeWorkers = this.workers.filter((worker) => !worker.busy).length;
    if (freeWorkers < this.minFreeWorkers) {
      this.addWorker(tag); // Now synchronous
    }

    return availableWorker;
  }

  releaseWorker(worker: WorkerWrapper) {
    worker.busy = false;
    worker.tag = "default";
  }
}

// Usage
const workerPool = new WorkerPool();

export async function init() {
  const worker = workerPool.getWorker("connect");
  return worker.rpc;
}

export const prettierToThrow = async ({
  code,
  toThrow,
}: {
  code: string;
  toThrow: boolean;
}): Promise<string> => {
  const worker = workerPool.getWorker("prettier");
  try {
    return await worker.rpc.rpc("prettierJs", { code, toThrow });
  } finally {
    workerPool.releaseWorker(worker);
  }
};

const prettierMemo = new Map<string, string>();

export const prettier = async (code: string): Promise<string> => {
  if (prettierMemo.has(code)) return prettierMemo.get(code)!;

  const worker = workerPool.getWorker("prettier");
  try {
    const formattedCode = (await worker.rpc.rpc("prettierJs", {
      code,
      toThrow: false,
    })) as string;
    prettierMemo.set(code, formattedCode);
    return formattedCode;
  } finally {
    workerPool.releaseWorker(worker);
  }
};

export const ata = async ({
  code,
  originToUse,
}: {
  code: string;
  originToUse: string;
}): Promise<{ content: string; filePath: string }[]> => {
  const worker = workerPool.getWorker("ata");
  try {
    return await worker.rpc.rpc("ata", { code, originToUse });
  } finally {
    workerPool.releaseWorker(worker);
  }
};

export const prettierCss = async (code: string): Promise<string> => {
  const worker = workerPool.getWorker("prettier");
  try {
    return await worker.rpc.rpc("prettierCss", code);
  } finally {
    workerPool.releaseWorker(worker);
  }
};

export const tsx = async (code: string): Promise<{ content: string; filePath: string }[]> => {
  const worker = workerPool.getWorker("tsx");
  try {
    return await worker.rpc.rpc("tsc", code);
  } finally {
    workerPool.releaseWorker(worker);
  }
};

export const updateSearchReplace = async (
  instructions: string,
  code: string,
): Promise<string> => {
  const worker = workerPool.getWorker("search-replace");
  try {
    return await worker.rpc.rpc("updateSearchReplace", { code, instructions });
  } finally {
    workerPool.releaseWorker(worker);
  }
};

export const createWorkflow = async (q: string): Promise<string> => {
  const worker = workerPool.getWorker("workflow");
  try {
    return await worker.rpc.rpc("createWorkflow", q);
  } finally {
    workerPool.releaseWorker(worker);
  }
};

export const transpile = async ({
  code,
  originToUse,
}: {
  code: string;
  originToUse: string;
}): Promise<string> => {
  const worker = workerPool.getWorker("esbuild");
  try {
    return await worker.rpc.rpc("transpile", { code, originToUse });
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    workerPool.releaseWorker(worker);
  }
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
  const worker = workerPool.getWorker("esbuild");
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
    workerPool.releaseWorker(worker);
  }
};

export const connect = async ({
  signal,
  sess,
}: {
  signal: string;
  sess: ICodeSession;
}): Promise<() => void> => {
  const worker = workerPool.getWorker("connect");
  try {
    worker.rpc.signal("connect", { signal, sess });
    return () => {
      workerPool.releaseWorker(worker);
    };
  } catch (e) {
    console.error(e);
    workerPool.releaseWorker(worker);
    throw e;
  }
};
