import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { allFilters } from "../src/Components/FilterPanel";
import { filters } from "./filterSlice";
import { SortBy } from "./sortSlice";

export type TicketType = {
  id: string;
  cost: number;
  departureTime: string;
  arrivalTime: string;
  flightDuration: number;
  layovers: string[];
  numOfLayovers: number;
  departureLocation: string;
  arrivalLocation: string;
  airline: string;
  departureDate: string;
  arrivalDate: string;
  flightClass: string;
  luggageAvailability: boolean;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface SortState {
  tickets: TicketType[];
  status: Status;
}

const initialState: SortState = {
  tickets: [],
  status: Status.LOADING,
};

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async ({
    sort,
    search,
    filter,
  }: {
    sort: SortBy;
    search: string;
    filter: filters[];
  }) => {
    const sortBy = sort === SortBy.CHEAP ? "cost" : "flightDuration";
    !search && (search = "");
    const url = `https://65fc67a99fc4425c6530088f.mockapi.io/tickets?sortBy=${sortBy}&search=${search}`;
    const { data } = await axios.get(url);
    let filteredData = data;
    if (!filter.includes(filters.ALL)) {
      filteredData = data.filter((el: TicketType) => {
        let flag = false;
        filter.forEach((filter: filters) => {
          if (el.numOfLayovers === allFilters.indexOf(filter)) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return filteredData;
  }
);

export const sortSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<TicketType[]>) {
      state.tickets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.tickets = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchTickets.rejected, (state) => {
      console.log("tickets fetching error");
      state.status = Status.ERROR;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setTickets } = sortSlice.actions;

export default sortSlice.reducer;
