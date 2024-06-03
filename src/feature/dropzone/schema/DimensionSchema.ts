import { z } from "zod";

import { ImageSchema } from "@/feature/image";

export const DimensionSchema = z.lazy(() =>
  ImageSchema.pick({
    width: true,
    height: true,
  })
);

export type DimensionValue = z.infer<typeof DimensionSchema>;
