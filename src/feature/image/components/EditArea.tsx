import { motion } from "framer-motion";

import { Card } from "@/components/Card";
import { EditForm } from "@/feature/form";

import { useImageFile } from "../hooks";
import { EditMenu } from "./EditMenu";
import { FileName } from "./FileName";
import { ImageView } from "./ImageView";

export const EditArea = () => {
  const { imageFile } = useImageFile();
  if (imageFile === null) return null;

  return (
    <EditForm.Provider
      initialValue={{
        width: imageFile.width,
        height: imageFile.height,
        format: imageFile.format,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      >
        <Card.Header className="px-6 flex justify-between gap-3">
          <FileName name={imageFile.name} />
          <EditMenu />
        </Card.Header>
        <Card.Divider />
        <EditForm.Form>
          <Card.Body className="flex px-6 my-2 justify-center items-center">
            <ImageView dataUrl={imageFile?.data_url} />
            <EditForm.Body />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <EditForm.SubmitButton />
          </Card.Footer>
        </EditForm.Form>
      </motion.div>
    </EditForm.Provider>
  );
};
