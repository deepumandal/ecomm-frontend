import { createSlice } from "@reduxjs/toolkit";
import { productsInitialState } from "./modules/initialState";
import setLoading from "../ProductsSlice/modules/setLoading";
import setError from "./modules/setError";
import setProductData from "./modules/setProductData";

const productSlice = createSlice({
  name: "productSlice",
  initialState: productsInitialState,
  reducers: {
    setProductLoadingReducer: setLoading,
    setProductErrorReducer: setError,
    setProductDataReducer: setProductData,
  },
});

export const {
  setProductLoadingReducer,
  setProductErrorReducer,
  setProductDataReducer,
} = productSlice.actions;
export default productSlice.reducer;
