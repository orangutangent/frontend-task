import React from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { toggle } from "../../RTK/sortSlice";

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((state) => state.sort.sortBy);
  return (
    <div className="flex mx-auto justify-center mt-10  ">
      <div
        className={
          "text-2xl p-4 w-1/4 text-center rounded-l-lg border-2 border-800 border-r-0 " +
          (sortBy === 0
            ? "bg-blue-600 color text-white "
            : "text-blue-600 bg-white")
        }
        onClick={() => dispatch(toggle())}
      >
        Самый дешевый
      </div>
      <div
        className={
          "text-2xl p-4 w-1/4 text-center rounded-r-lg border-2 border-800 border-l-0 " +
          (sortBy === 1
            ? "bg-blue-600 color text-white "
            : "text-blue-600 bg-white")
        }
        onClick={() => dispatch(toggle())}
      >
        Самый быстрый
      </div>
    </div>
  );
};

export default Sort;
