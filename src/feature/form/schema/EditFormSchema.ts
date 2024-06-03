import { z } from "zod";

import { ImageSchema } from "@/feature/image";

export const EditFormSchema = z.lazy(() =>
  ImageSchema.pick({
    format: true,
    width: true,
    height: true,
  })
);

export type EditFormValue = z.infer<typeof EditFormSchema>;
