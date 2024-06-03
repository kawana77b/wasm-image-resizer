import { useCallback } from "react";
import { type Accept, useDropzone } from "react-dropzone";

import { cn } from "@/lib/utils";

export interface DropzoneProps {
  className?: string;
  onDrop?: (file: File[]) => void;
  accept?: Accept;
  minSize?: number;
  maxSize?: number;
  multiple?: boolean;
}

export const Dropzone = ({
  className,
  onDrop,
  accept,
  minSize,
  maxSize,
  multiple,
}: DropzoneProps) => {
  const _onDrop = useCallback(
    (files: File[]) => {
      if (files && files.length > 0) {
        onDrop?.(files);
      }
    },
    [onDrop]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: _onDrop,
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple,
  });

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-[24rem] rounded-2xl",
        "shadow-lg backdrop-blur-md bg-white/30 dark:text-black dark:bg-white/80",
        "transition ease-in-out  hover:bg-sky-500/30 dark:hover:bg-sky-500/80",
        isDragActive && "bg-sky-500/30 dark:bg-sky-500/80",
        className
      )}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p className="font-bold">Click or drop file Here</p>
    </div>
  );
};
