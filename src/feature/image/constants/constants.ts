export const IMAGE_SIZE = {
  min: {
    width: 20,
    height: 20,
  },
  max: {
    width: 8000,
    height: 8000,
  },
} as const;

export const IMAGE_BYTES = {
  min: 20,
  max: 24 * 1024 * 1024, // 24MB
} as const;

type Format = {
  value: string;
  label: string;
  ext: string | string[];
  mime: string;
};

export const IMAGE_FORMATS: readonly Readonly<Format>[] = [
  {
    value: "png",
    label: "PNG",
    ext: ".png",
    mime: "image/png",
  },
  {
    value: "jpeg",
    label: "JPEG",
    ext: [".jpg", ".jpeg"],
    mime: "image/jpeg",
  },
  {
    value: "webp",
    label: "WEBP",
    ext: ".webp",
    mime: "image/webp",
  },
  {
    value: "avif",
    label: "AVIF",
    ext: ".avif",
    mime: "image/avif",
  },
  {
    value: "ico",
    label: "ICO",
    ext: ".ico",
    mime: "image/vnd.microsoft.icon",
  },
];
