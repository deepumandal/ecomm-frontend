import { createSlice } from "@reduxjs/toolkit";
import { productsInitialState } from "./modules/initialState";

const productSlice = createSlice({
  name: "productSlice",
  initialState: productsInitialState,
  reducers: {},
});

export default productSlice.reducer;
