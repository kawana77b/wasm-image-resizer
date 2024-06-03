import { createContext, useContext } from "react";

export interface AlertContext {
  message: string | string[];
  setMessage: (message: string | string[]) => void;
}

export const alertContext = createContext<AlertContext>({
  message: "",
  setMessage: () => {},
});

export function useAlert() {
  const { message, setMessage } = useContext(alertContext);
  return { message, setMessage };
}
