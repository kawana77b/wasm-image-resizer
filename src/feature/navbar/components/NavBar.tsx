import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { ThemeButton } from "@/feature/theme";
import { cn } from "@/lib/utils";

import { AppTitle } from "./AppTitle";

export interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <Navbar className={cn("border-b-[1px]", className)}>
      <NavbarBrand>
        <AppTitle title="Image Resizer" href="/" />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
