import { type ReactNode, useState } from "react";

import { imageFileContext } from "../hooks";
import { ImageFile } from "../types";

export interface ImageFileProviderProps {
  children?: ReactNode;
}

export const ImageFileProvider = ({ children }: ImageFileProviderProps) => {
  const [imageFile, setImageFile] = useState<ImageFile | null>(null);

  return (
    <imageFileContext.Provider
      value={{
        imageFile,
        setImageFile,
      }}
    >
      {children}
    </imageFileContext.Provider>
  );
};
