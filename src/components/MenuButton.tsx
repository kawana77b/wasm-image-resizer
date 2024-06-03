import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { ListIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface MenuButtonProps {
  items: {
    label: string;
    variant?: "default" | "danger";
    onClick?: () => void;
  }[];
  ariaLabel: string;
  disabled?: boolean;
}

export const MenuButton = ({ items, ariaLabel, disabled }: MenuButtonProps) => {
  return (
    <Dropdown isDisabled={disabled}>
      <DropdownTrigger>
        <Button isIconOnly size="sm" variant="light">
          <ListIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label={ariaLabel}>
        {items?.map((item, idx) => (
          <DropdownItem
            className={cn(item.variant === "danger" && "text-danger")}
            key={`dropdown-${idx}`}
            color={item.variant === "danger" ? "danger" : "default"}
            onClick={item.onClick}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
