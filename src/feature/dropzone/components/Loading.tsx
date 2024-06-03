import { Spinner } from "@nextui-org/react";

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-72">
      <Spinner label="Loading..." color="primary" />
    </div>
  );
};
