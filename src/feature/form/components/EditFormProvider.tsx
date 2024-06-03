import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactNode } from "react";
import { useForm } from "react-hook-form";

import { editFormContext } from "../hooks";
import { EditFormSchema, type EditFormValue } from "../schema";

export interface EditFormProviderProps {
  children: ReactNode;
  initialValue?: EditFormValue;
}

export const EditFormProvider = ({
  children,
  initialValue,
}: EditFormProviderProps) => {
  const form = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(EditFormSchema),
  });

  return (
    <editFormContext.Provider
      value={{
        form,
      }}
    >
      {children}
    </editFormContext.Provider>
  );
};
