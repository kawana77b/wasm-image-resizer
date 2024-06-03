import { z } from "zod";

import { IMAGE_BYTES, IMAGE_FORMATS, IMAGE_SIZE } from "../constants";

export const ImageSchema = z.object({
  width: z
    .number()
    .int()
    .min(IMAGE_SIZE.min.width, "Width is too small")
    .max(IMAGE_SIZE.max.width, "Width is too large"),

  height: z
    .number()
    .int()
    .min(IMAGE_SIZE.min.height, "Height is too small")
    .max(IMAGE_SIZE.max.height, "Height is too large"),

  bytes: z
    .number()
    .int()
    .min(IMAGE_BYTES.min, "Bytes is too small")
    .max(IMAGE_BYTES.max, "Bytes is too large"),

  mime: z.string().refine((value) => {
    return IMAGE_FORMATS.some((format) => format.mime === value);
  }, "Invalid mime"),

  format: z.string().refine((value) => {
    return IMAGE_FORMATS.some((format) => format.value === value);
  }, "Invalid format"),
});
