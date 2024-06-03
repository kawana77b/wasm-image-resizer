import { MenuButton } from "@/components/MenuButton";
import { useEditForm } from "@/feature/form";

export const EditMenu = () => {
  const { resetForm } = useEditForm();

  return (
    <MenuButton
      ariaLabel="More options"
      items={[
        {
          label: "Restore image default settings",
          variant: "danger",
          onClick: () => {
            resetForm();
          },
        },
      ]}
    />
  );
};
