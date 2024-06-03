import { Card } from "@/components/Card";
import { Dropzone } from "@/feature/dropzone";

export const DropzoneArea = () => {
  return (
    <Card.Body className="flex flex-col gap-2">
      <Dropzone />
    </Card.Body>
  );
};
