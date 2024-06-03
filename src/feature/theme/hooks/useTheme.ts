import { createContext, useContext } from "react";

interface ThemeContext {
  value: boolean;
  toggle: () => void;
}

export const themeContext = createContext<ThemeContext>({
  value: false,
  toggle: () => {},
});

export function useTheme() {
  const { value, toggle } = useContext(themeContext);

  return { value, toggle };
}
