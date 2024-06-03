import { Image } from "@/feature/image";

export const RootPage = () => {
  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <Image.Proveder>
        <Image.Card />
      </Image.Proveder>
    </div>
  );
};
