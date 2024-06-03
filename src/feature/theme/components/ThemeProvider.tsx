import { type ReactNode } from "react";
import useDarkMode from "use-dark-mode";

import { themeContext } from "../hooks";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const mode = useDarkMode(false);
  return (
    <themeContext.Provider
      value={{
        value: mode.value,
        toggle: mode.toggle,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};
