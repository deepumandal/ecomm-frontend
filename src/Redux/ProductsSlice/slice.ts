import { createSlice } from "@reduxjs/toolkit";
import { productsInitialState } from "./modules/initialState";
import setLoading from "../ProductsSlice/modules/setLoading";
import setError from "./modules/setError";
import setProductData from "./modules/setProductData";
import addToProductCache from "./modules/addToProductCache";

const productSlice = createSlice({
  name: "productSlice",
  initialState: productsInitialState,
  reducers: {
    setProductLoadingReducer: setLoading,
    setProductErrorReducer: setError,
    setProductDataReducer: setProductData,
    addToProductCacheReducer: addToProductCache,
  },
});

export const {
  setProductLoadingReducer,
  setProductErrorReducer,
  setProductDataReducer,
  addToProductCacheReducer,
} = productSlice.actions;
export default productSlice.reducer;
