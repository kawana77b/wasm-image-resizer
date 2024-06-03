import { Button } from "@nextui-org/react";

import { useEditForm } from "../hooks";

export const EditFormSubmitButton = () => {
  const { isValid, isSubmitting } = useEditForm();

  return (
    <Button
      color="primary"
      type="submit"
      fullWidth
      isDisabled={!isValid}
      isLoading={isSubmitting}
    >
      {isSubmitting ? "Converting..." : "Convert!"}
    </Button>
  );
};
