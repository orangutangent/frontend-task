import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum SortBy {
  CHEAP = 0,
  FAST = 1,
}

export interface CounterState {
  sortBy: SortBy;
}

const initialState: CounterState = {
  sortBy: SortBy.CHEAP,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.sortBy = state.sortBy === SortBy.CHEAP ? SortBy.FAST : SortBy.CHEAP;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = counterSlice.actions;

export default counterSlice.reducer;
