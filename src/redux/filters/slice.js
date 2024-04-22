import { createSlice } from "@reduxjs/toolkit";

export const initialFilter = {
  filters: { name: "", number: "" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    changeFilterName: (state, { payload }) => {
      state.filters.name = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilterName } = filterSlice.actions;