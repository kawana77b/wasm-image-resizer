import { z } from "zod";

import { ImageSchema } from "@/feature/image";

export const FileSchema = z.lazy(() =>
  ImageSchema.pick({
    mime: true,
    bytes: true,
  })
);

export type FileValue = z.infer<typeof FileSchema>;
