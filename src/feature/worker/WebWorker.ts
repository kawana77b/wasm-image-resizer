import { analyze_image, resize_image } from "image_converter";

import type { WorkerChannel, WorkerChannelMap } from "@/feature/worker/types";

type Api = {
  [key in WorkerChannel]: (
    payload: WorkerChannelMap[key]["request"]
  ) => WorkerChannelMap[key]["response"];
};

const api: Api = {
  analyze_image: (payload) => {
    const { data } = payload;
    const json = analyze_image(data);
    let info = null;
    try {
      info = JSON.parse(json);
    } catch {
      throw new Error("Failed to parse JSON");
    }

    return {
      width: info?.width ?? 0,
      height: info?.height ?? 0,
      format: info?.format ?? "unknown",
      data_url: info?.data_url ?? "",
    };
  },
  resize_image: (payload) => {
    const { data, width, height, format } = payload;
    const image = resize_image(data, width, height, format);

    return {
      data: image,
      format: format,
    };
  },
};

self.addEventListener("message", (e) => {
  if (!e.data) return;
  if (!("channel" in e.data)) return;

  const channel = e.data.channel as WorkerChannel;
  if (!(channel in api)) {
    throw new Error(`Unknown channel: ${channel}`);
  }

  const responsePayload = api[channel](e.data.payload);
  self.postMessage({
    channel,
    payload: responsePayload,
  });
});

export default {};
