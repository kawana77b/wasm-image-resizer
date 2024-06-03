import { useState } from "react";

import { useAlert } from "@/feature/alert";
import { ImageFile, useImageFile } from "@/feature/image";
import { useWorker } from "@/feature/worker/hooks";
import { NewResult } from "@/lib/Result";

import {
  DimensionSchema,
  type DimensionValue,
  FileSchema,
  type FileValue,
} from "../schema";

export function useDropzone() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { request } = useWorker();
  const { setMessage } = useAlert();
  const { setImageFile } = useImageFile();

  const validateFile = (file: File) => {
    const res = FileSchema.safeParse({
      mime: file.type,
      bytes: file.size,
    } satisfies FileValue);
    return res.success
      ? NewResult.success()
      : NewResult.err([...res.error.errors.map((e) => e.message)]);
  };

  const validateDimension = (width: number, height: number) => {
    const res = DimensionSchema.safeParse({
      width,
      height,
    } satisfies DimensionValue);
    return res.success
      ? NewResult.success()
      : NewResult.err([...res.error.errors.map((e) => e.message)]);
  };

  const _onDrop = async ([file]: File[]) => {
    if (!file) {
      setMessage("Please select a file to upload");
      return;
    }

    const fileResult = validateFile(file);
    if (!fileResult.ok) {
      setMessage(fileResult.error);
      return;
    }

    const data = new Uint8Array(await file.arrayBuffer());
    const { width, height, format, data_url } = await request("analyze_image", {
      data,
    });
    if (format === "unknown") {
      setMessage("Sorry, the file format is not supported");
      return;
    }

    const dimensionResult = validateDimension(width, height);
    if (!dimensionResult.ok) {
      setMessage(dimensionResult.error);
      return;
    }

    setImageFile({
      name: file.name,
      data,
      width,
      height,
      format,
      data_url,
    } satisfies ImageFile);
  };

  const onDrop = ([file]: File[]) => {
    setIsLoading(true);
    _onDrop([file])
      .catch(() => setMessage(["Sorry, failed to upload the file"]))
      .finally(() => setIsLoading(false));
  };

  return { onDrop, isLoading };
}
