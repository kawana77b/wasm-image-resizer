import { createContext, useContext } from "react";

import { ImageFile } from "../types";

interface ImageFileContext {
  imageFile: ImageFile | null;
  setImageFile: (imageFile: ImageFile) => void;
}

export const imageFileContext = createContext<ImageFileContext>({
  imageFile: null,
  setImageFile: () => {},
});

export function useImageFile() {
  const { imageFile, setImageFile } = useContext(imageFileContext);

  return {
    imageFile,
    setImageFile,
  };
}
