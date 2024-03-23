import React from "react";
import { filters } from "../../RTK/filterSlice";
import FilterItem from "./FilterItem";

const titleNames = {
  [filters.ALL]: "Все",
  [filters.WITHOUT]: "Без пересадок",
  [filters.ONE]: "1 пересадка",
  [filters.TWO]: "2 пересадки",
  [filters.THREE]: "3 пересадки",
};

export const allFilters = [
  filters.WITHOUT,
  filters.ONE,
  filters.TWO,
  filters.THREE,
  filters.ALL,
];

const FilterPanel = () => {
  const CheckboxRefs = allFilters.map((title: filters) => {
    return {
      name: titleNames[title],
      title: title,
      ref: React.createRef<HTMLInputElement>(),
    };
  });

  return (
    <div className="w-full border-2 border-gray-300  my-10 p-6 rounded-xl">
      <p className="text-xl font-semibold text-center text-gray-700 my-4">
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </p>
      {CheckboxRefs.map((item) => (
        <FilterItem
          key={item.title}
          name={item.name}
          title={item.title}
          ref={item.ref}
        />
      ))}
    </div>
  );
};

export default FilterPanel;
