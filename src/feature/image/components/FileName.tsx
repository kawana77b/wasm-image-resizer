import { Tooltip } from "@nextui-org/react";

export const FileName = ({ name }: { name: string }) => {
  return (
    <Tooltip content={name} color="primary" delay={1 * 1000}>
      <p className="font-bold truncate">{name}</p>
    </Tooltip>
  );
};
