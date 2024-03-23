import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setSearch } from "../../RTK/searchSlice";
import React from "react";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const [searchBar, setSearchBar] = React.useState("");
  const searchBarRef = React.useRef<HTMLInputElement>(null);
  const clicked = React.useRef(false);
  const handleSearch = () => {
    if (searchBarRef.current) {
      dispatch(setSearch(searchBarRef.current.value));
    }
    setSearchBar("");
    clicked.current = true;
  };
  return (
    <div>
      <div className="flex justify-center mt-10 w-1/3 mx-auto rounded-xl border-blue-700">
        <input
          ref={searchBarRef}
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-xl p-4 border-2 border-blue-700 rounded-l-lg"
          value={searchBar}
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="bg-blue-700 text-white p-4 rounded-r-lg active:bg-blue-800 duration-300 ease-in-out"
          onClick={() => handleSearch()}
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
