import { Link } from "@nextui-org/react";

import { ImageIcon } from "@/components/icons";

export interface AppTitleProps {
  title: string;
  href: string;
}

export const AppTitle = ({ title, href }: AppTitleProps) => {
  return (
    <Link href={href} color="foreground">
      <div className="flex flex-row gap-2">
        <ImageIcon size={24} />
        <p className="font-bold text-inherit">{title}</p>
      </div>
    </Link>
  );
};
