import { createContext, useContext } from "react";
import { type UseFormReturn } from "react-hook-form";

import { IMAGE_FORMATS, useImageFile } from "@/feature/image";
import { useWorker } from "@/feature/worker";
import { Path } from "@/lib/Path";
import { downloadBlob } from "@/lib/utils";

import { EditFormValue } from "../schema";

interface EditFormContext {
  form: UseFormReturn<EditFormValue> | null;
}

export const editFormContext = createContext<EditFormContext>({
  form: null,
});

export function useEditForm() {
  const { form } = useContext(editFormContext);
  if (!form) throw new Error("Form is not provided");
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, isSubmitting, defaultValues },
  } = form;

  const { imageFile } = useImageFile();
  const { request } = useWorker();

  const resetForm = () => {
    reset(defaultValues);
  };

  const onSubmit = handleSubmit(async (values) => {
    await _onSubmit(values);
  });

  const _onSubmit = async (values: EditFormValue) => {
    if (!isValid) return;
    if (!imageFile) return;

    const { format, width, height } = values;
    const response = await request("resize_image", {
      data: imageFile.data,
      width: width,
      height: height,
      format: format as "jpeg" | "png" | "webp" | "avif" | "ico",
    });

    downloadImage(imageFile.name, response.data, response.format);
  };

  const downloadImage = (name: string, data: Uint8Array, format: string) => {
    const createDownloadFile = (
      name: string,
      format: string
    ): [string, Blob] => {
      const f = IMAGE_FORMATS.find((f) => f.value === format);
      if (!f) throw new Error("Invalid format");

      const filename = new Path(name).filename;
      const ext = Array.isArray(f.ext) ? f.ext[0] : f.ext;
      return [`${filename}${ext}`, new Blob([data], { type: f.mime })];
    };

    const [filename, blob] = createDownloadFile(name, format);
    downloadBlob(filename, blob);
  };

  return {
    isSubmitting,
    isValid,
    control,
    onSubmit,
    resetForm,
  };
}
