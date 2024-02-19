import { createSlice } from "@reduxjs/toolkit";
import { filterSliceInitialState } from "./modules/initialState";
import applyFilters from "./modules/applyFilters";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: filterSliceInitialState,
  reducers: {
    applyFiltersReducer: applyFilters,
  },
 
});

export const { applyFiltersReducer } = filterSlice.actions;
export default filterSlice.reducer;
