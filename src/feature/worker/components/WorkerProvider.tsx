/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ReactNode, useEffect, useRef } from "react";

import worker from "@/feature/worker/WebWorker?worker";

import { workerContext } from "../hooks";

interface WorkerProviderProps {
  children?: ReactNode;
}

export const WorkerProvider = ({ children }: WorkerProviderProps) => {
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new worker();
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  return (
    <workerContext.Provider
      value={{
        worker: workerRef,
      }}
    >
      {children}
    </workerContext.Provider>
  );
};
