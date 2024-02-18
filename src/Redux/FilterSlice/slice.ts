import { createSlice } from "@reduxjs/toolkit";
import { filterSliceInitialState } from "./modules/initialState";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: filterSliceInitialState,
  reducers: {},
});

export default filterSlice.reducer;
