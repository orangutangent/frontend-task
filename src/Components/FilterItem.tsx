import { Checkbox } from "@material-tailwind/react";
import { filters } from "../../RTK/filterSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setFilter, setAll, deleteFilter } from "../../RTK/filterSlice";
import { RootState } from "../../RTK/store";

type PropsType = {
  name: string;
  title: filters;
  ref: React.RefObject<HTMLInputElement>;
};

const FilterItem = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state: RootState) => state.filter.filter);
  return (
    <div className="flex items-center ms-12 text-2xl my-4">
      <Checkbox
        color="blue"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
        ref={props.ref}
        checked={filter.includes(props.title)}
        onChange={() =>
          props.title === filters.ALL
            ? dispatch(setAll())
            : filter.includes(props.title)
            ? dispatch(deleteFilter([props.title]))
            : dispatch(setFilter([props.title]))
        }
      />
      <p>{props.name}</p>
    </div>
  );
};

export default FilterItem;
