import { useEditForm } from "../hooks";

export interface EditFormFormProps {
  className?: string;
  children?: React.ReactNode;
}

export const EditFormForm = ({ className, children }: EditFormFormProps) => {
  const { onSubmit } = useEditForm();

  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
