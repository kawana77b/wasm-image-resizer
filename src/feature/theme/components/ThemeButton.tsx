import { Button } from "@nextui-org/react";

import { MoonIcon, SunIcon } from "@/components/icons";

import { useTheme } from "../hooks";

export interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
  const { value, toggle } = useTheme();
  const isDarkMode = !!value;

  return (
    <Button
      className={className}
      isIconOnly
      color="warning"
      variant="flat"
      aria-label={`toggle to ${isDarkMode ? "light" : "dark"} mode`}
      onClick={toggle}
    >
      {!isDarkMode && <SunIcon />}
      {isDarkMode && <MoonIcon />}
    </Button>
  );
};
