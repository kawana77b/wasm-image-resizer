import { Image } from "@nextui-org/react";

export const ImageView = ({ dataUrl }: { dataUrl?: string }) => {
  if (!dataUrl || dataUrl.length === 0) {
    return null;
  }
  return <Image src={dataUrl} alt="Uploaded image" isBlurred />;
};
