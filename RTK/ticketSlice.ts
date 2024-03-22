import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type TicketType = {
  id: number;
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

export interface SortState {
  tickets: TicketType[];
}

const initialState: SortState = {
  tickets: [],
};

export const sortSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<TicketType[]>) {
      state.tickets = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTickets } = sortSlice.actions;

export default sortSlice.reducer;
