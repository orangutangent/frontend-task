import React from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { SortBy } from "../../RTK/sortSlice";
import { TicketType, setTickets } from "../../RTK/ticketSlice";
import { filters } from "../../RTK/filterSlice";
import Sort from "../Components/Sort";
import ListTickets from "../Components/ListTickets";
import FilterPanel, { allFilters } from "../Components/FilterPanel";
import SearchBar from "../Components/SearchBar";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const sort = useAppSelector((state) => state.sort.sortBy);
  const filter = useAppSelector((state) => state.filter.filter);
  React.useEffect(() => {
    const fetchTickets = async () => {
      const sortBy = sort === SortBy.CHEAP ? "cost" : "flightDuration";
      const url = new URL(
        `https://65fc67a99fc4425c6530088f.mockapi.io/tickets?sortBy=${sortBy}&search=${search}`
      );
      const data = await fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const dataJSON = await data.json();
      let filteredData = dataJSON;
      if (!filter.includes(filters.ALL)) {
        filteredData = dataJSON.filter((el: TicketType) => {
          let flag = false;
          filter.forEach((filter) => {
            if (el.numOfLayovers === allFilters.indexOf(filter)) {
              flag = true;
            }
          });
          return flag;
        });
      }
      dispatch(setTickets(filteredData));
    };
    fetchTickets();
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
