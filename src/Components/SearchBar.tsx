import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setSearch } from "../../RTK/searchSlice";
import React from "react";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const [searchBar, setSearchBar] = React.useState("");
  const searchBarRef = React.useRef<HTMLInputElement>(null);
  const clicked = React.useRef(false);
  return (
    <div>
      <div className="flex justify-center mt-10 w-1/3 mx-auto rounded-xl border-blue-700">
        <input
          ref={searchBarRef}
          type="text"
          placeholder="Search..."
          className="w-full outline-none p-4 border-2 border-blue-700 rounded-l-lg"
          value={searchBar}
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
        />
        <button
          className="bg-blue-700 text-white p-4 rounded-r-lg"
          onClick={() => {
            if (searchBarRef.current) {
              dispatch(setSearch(searchBarRef.current.value));
            }
            setSearchBar("");
            clicked.current = true;
          }}
        >
          ПОИСК
        </button>
      </div>
      {clicked.current && (
        <p className="text-xl font-semibold text-center text-gray-700 my-4">
          Результаты по запросу: {search}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
