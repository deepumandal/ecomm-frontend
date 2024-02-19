import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductsSlice/slice";
import filterSlice from "./FilterSlice/slice";
import cartSlice from "./CartSlice/slice";
import CheckoutSlice from "./CheckOutSlice/slice";
const reduxStore = configureStore({
  reducer: {
    productSlice,
    filterSlice,

    cartSlice,
    CheckoutSlice,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;
