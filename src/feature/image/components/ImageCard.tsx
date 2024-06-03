import { Card } from "@/components/Card";

import { useImageFile } from "../hooks";
import { DropzoneArea } from "./DropzoneArea";
import { EditArea } from "./EditArea";

export const ImageCard = () => {
  const { imageFile } = useImageFile();
  const fileExists = imageFile !== null;

  return (
    <Card className="w-full" fadeIn>
      {!fileExists && <DropzoneArea />}
      {fileExists && <EditArea />}
    </Card>
  );
};
