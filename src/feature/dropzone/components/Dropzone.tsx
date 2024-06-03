import { Dropzone as UiDropzone } from "@/components/Dropzone";
import { Alert, AlertProvider } from "@/feature/alert";
import { IMAGE_BYTES, IMAGE_FORMATS } from "@/feature/image";

import { useDropzone } from "../hooks";
import { Loading } from "./Loading";
import { Notes } from "./Notes";

export const Dropzone = () => {
  const minBytes = IMAGE_BYTES.min;
  const maxBytes = IMAGE_BYTES.max;
  const exts = IMAGE_FORMATS.map(({ ext }) => ext).flat();
  const accept = {
    "image/*": exts,
  };

  const { onDrop, isLoading } = useDropzone();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AlertProvider>
      <Alert className="w-full" title="Error" />
      <UiDropzone
        minSize={minBytes}
        maxSize={maxBytes}
        accept={accept}
        multiple={false}
        onDrop={onDrop}
      />
      <Notes />
    </AlertProvider>
  );
};
