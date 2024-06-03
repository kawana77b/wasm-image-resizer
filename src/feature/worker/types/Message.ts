export type WorkerChannel = "analyze_image" | "resize_image";

type WorkerChannelMapBase = {
  [key in WorkerChannel]: {
    request: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    response: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};

export interface WorkerChannelMap extends WorkerChannelMapBase {
  analyze_image: {
    request: {
      data: Uint8Array;
    };
    response: {
      width: number;
      height: number;
      format: "png" | "jpeg" | "webp" | "avif" | "ico" | "unknown";
      data_url: string;
    };
  };
  resize_image: {
    request: {
      data: Uint8Array;
      width: number;
      height: number;
      format: "png" | "jpeg" | "webp" | "avif" | "ico";
    };
    response: {
      data: Uint8Array;
      format: "png" | "jpeg" | "webp" | "avif" | "ico";
    };
  };
}

export type WorkerRequest<T extends WorkerChannel> = {
  channel: T;
  payload: WorkerChannelMap[T]["request"];
};

export type WorkerResponse<T extends WorkerChannel> = {
  channel: T;
  payload: WorkerChannelMap[T]["response"];
};

export type WorkerRequestPayload<T extends WorkerChannel> =
  WorkerRequest<T>["payload"];

export type WorkerResponsePayload<T extends WorkerChannel> =
  WorkerResponse<T>["payload"];
