import { type ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 mx-auto px-2 py-6 w-[100%] md:w-[900px] items-center h-full">
      {children}
    </div>
  );
};
