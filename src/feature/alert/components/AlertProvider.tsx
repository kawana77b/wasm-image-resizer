import { type ReactNode, useState } from "react";

import { alertContext } from "@/feature/alert/hooks/useAlert";

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | string[]>("");

  return (
    <alertContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </alertContext.Provider>
  );
};
