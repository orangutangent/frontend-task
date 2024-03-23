import React from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import Sort from "../Components/Sort";
import ListTickets from "../Components/ListTickets";
import FilterPanel from "../Components/FilterPanel";
import SearchBar from "../Components/SearchBar";
import { fetchTickets } from "../../RTK/ticketSlice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const sort = useAppSelector((state) => state.sort.sortBy);
  const filter = useAppSelector((state) => state.filter.filter);
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (!isMounted.current) {
      dispatch(fetchTickets({ sort, search, filter }));
      isMounted.current = true;
    }
  }, []);
  React.useEffect(() => {
    dispatch(fetchTickets({ sort, search, filter }));
  }, [sort, filter, search]);
  return (
    <div>
      <SearchBar />
      <div className="flex ms-20 mt-4">
        <div className="w-1/4 mx-10">
          <FilterPanel />
        </div>
        <div className=" w-1/2">
          <Sort />
          <ListTickets />
        </div>
      </div>
    </div>
  );
};

export default Home;
