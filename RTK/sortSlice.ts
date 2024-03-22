import { createSlice } from "@reduxjs/toolkit";

export enum SortBy {
  CHEAP = 0,
  FAST = 1,
}

export interface SortState {
  sortBy: SortBy;
}

const initialState: SortState = {
  sortBy: SortBy.CHEAP,
};

export const sortSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.sortBy = state.sortBy === SortBy.CHEAP ? SortBy.FAST : SortBy.CHEAP;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = sortSlice.actions;

export default sortSlice.reducer;
