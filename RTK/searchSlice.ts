import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  search: string;
};

const initialState: InitialStateType = {
  search: "",
};

export const sortSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = sortSlice.actions;

export default sortSlice.reducer;
