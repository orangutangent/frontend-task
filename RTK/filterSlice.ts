import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export enum filters {
  WITHOUT = 0,
  ONE,
  TWO,
  THREE,
  ALL,
}

type InitialStateType = {
  filter: filters[];
};

const initialState: InitialStateType = {
  filter: [filters.ALL],
};

export const sortSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<filters[]>) => {
      state.filter = [...state.filter, ...action.payload].filter(
        (el) => el !== filters.ALL
      );
    },
    setAll: (state) => {
      state.filter = [filters.ALL];
    },
    deleteFilter: (state, action: PayloadAction<filters[]>) => {
      state.filter = state.filter.filter((el) => !action.payload.includes(el));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, setAll, deleteFilter } = sortSlice.actions;

export default sortSlice.reducer;
