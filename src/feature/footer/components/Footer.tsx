import { Link } from "@nextui-org/react";

import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
  absolute?: boolean;
}

export const Footer = ({ className, absolute }: FooterProps) => {
  const year = new Date(Date.now()).getFullYear();
  const author = "shimarisu_121";
  return (
    <footer
      className={cn(
        absolute && "absolute bottom-0 left-0 ",
        "flex flex-col justify-center p-3 items-center w-full text-foreground z-30 mt-1",
        "backdrop-blur-md bg-background/40",
        className
      )}
    >
      <p className="text-sm">
        Copyright &copy; {year}{" "}
        <Link
          className="text-sm"
          href="https://github.com/kawana77b"
          isExternal
        >
          {author}
        </Link>
      </p>
    </footer>
  );
};
