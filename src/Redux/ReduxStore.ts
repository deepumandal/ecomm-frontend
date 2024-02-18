import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductsSlice/slice";
import filterSlice from "./FilterSlice/slice";

const reduxStore = configureStore({
  reducer: {
    productSlice,
    filterSlice,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;
