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
      <div className="flex xs:flex-col sm:ms-0 ms-20 xs:mx-auto mt-4">
        <div className="w-1/4 xs:w-5/6 mx-10 xs:mx-auto">
          <FilterPanel />
        </div>
        <div className=" w-1/2 xs:w-5/6 xs:mx-auto">
          <Sort />
          <ListTickets />
        </div>
      </div>
    </div>
  );
};

export default Home;
