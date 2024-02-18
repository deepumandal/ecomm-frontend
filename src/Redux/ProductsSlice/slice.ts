import { createSlice } from "@reduxjs/toolkit";
import { productsInitialState } from "./modules/initialState";
import {
  getFiilteredDataReducer,
  getFiilteredDataReducerFullfilled,
  getFiilteredDataReducerPending,
  getFiilteredDataReducerRejected,
} from "./extraReducer/getFiilteredDataReducer";

const productSlice = createSlice({
  name: "productSlice",
  initialState: productsInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getFiilteredDataReducer.pending,
      getFiilteredDataReducerPending
    );
    builder.addCase(
      getFiilteredDataReducer.fulfilled,
      getFiilteredDataReducerFullfilled
    );
    builder.addCase(
      getFiilteredDataReducer.rejected,
      getFiilteredDataReducerRejected
    );
  },
});

export default productSlice.reducer;
