import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";

import { Select } from "@/components/Select";
import { IMAGE_FORMATS } from "@/feature/image";
import { cn } from "@/lib/utils";

import { useEditForm } from "../hooks";

export interface EditFormBodyProps {
  className?: string;
}

export const EditFormBody = ({ className }: EditFormBodyProps) => {
  const selectItems = IMAGE_FORMATS.map(({ label, value }) => ({
    label,
    value,
  }));

  const { control } = useEditForm();
  return (
    <div className={cn("flex flex-col mt-6 mb-2 gap-5 w-full", className)}>
      <Controller
        control={control}
        name="format"
        render={({ field }) => (
          <Select
            items={selectItems}
            key={field.value}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <div className="flex flex-row gap-2">
        <Controller
          control={control}
          name="width"
          render={({ field }) => (
            <Input
              label="Width"
              type="number"
              value={field.value.toString()}
              onValueChange={(v) => {
                field.onChange(Number(v));
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="height"
          render={({ field }) => (
            <Input
              label="Height"
              type="number"
              value={field.value.toString()}
              onValueChange={(v) => {
                field.onChange(Number(v));
              }}
            />
          )}
        />
      </div>
    </div>
  );
};
