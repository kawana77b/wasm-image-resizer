/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, type MutableRefObject, useContext } from "react";

import type {
  WorkerChannel,
  WorkerRequestPayload,
  WorkerResponsePayload,
} from "../types";

interface WorkerContext {
  worker: MutableRefObject<Worker | null>;
}

export const workerContext = createContext<WorkerContext>({
  worker: { current: null },
});

export function useWorker() {
  const { worker } = useContext(workerContext);

  /**
   * Sends data to WebWorker on a specific channel and returns the results
   * @param channel
   * @param payload
   * @returns
   */
  const request = <TChannel extends WorkerChannel>(
    channel: TChannel,
    payload: WorkerRequestPayload<TChannel>
  ) => {
    return new Promise<WorkerResponsePayload<TChannel>>((resolve, reject) => {
      if (!worker.current) {
        reject(new Error("Worker is not ready"));
        return;
      }

      const listener = ({ data }: MessageEvent) => {
        if (data.channel === channel) {
          worker.current?.removeEventListener("message", listener);
          resolve(data.payload);
        }
      };
      worker.current.addEventListener("message", listener);

      worker.current.postMessage({ channel, payload });
    });
  };

  return { request };
}
