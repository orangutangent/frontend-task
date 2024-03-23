import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <Spinner
        className="w-12 h-12"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <h1 className="text-3xl text-blue-700 font-bold mt-8">Loading...</h1>
    </div>
  );
};

export default Loading;
