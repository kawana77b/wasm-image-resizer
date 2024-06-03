import {
  Select as UiSelect,
  SelectItem as UiSelectItem,
} from "@nextui-org/react";

import { cn } from "@/lib/utils";

export type SelectItemOption = {
  label: string;
  value: string;
};

export interface SelectProps {
  className?: string;
  items: Readonly<SelectItemOption[]>;
  value: string;
  onChange: (value: string) => void;
}

export const Select = ({ className, items, value, onChange }: SelectProps) => {
  return (
    <div
      className={cn("flex w-full flex-wrap md:flex-nowrap gap-4", className)}
    >
      <UiSelect
        label="Convert Format"
        className="max-w-full"
        defaultSelectedKeys={[value]}
        value={value}
        selectionMode="single"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {items.map((item) => (
          <UiSelectItem key={item.value} value={item.value}>
            {item.label}
          </UiSelectItem>
        ))}
      </UiSelect>
    </div>
  );
};
