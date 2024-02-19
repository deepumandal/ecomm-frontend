import { createSlice } from "@reduxjs/toolkit";
import { cartSliceInitialState } from "./module/initialState";
import setLoading from "./module/setLoading";
import getCartData from "./module/setCartData";
import setError from "./module/setError";
import clearCart from "./module/clear";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartSliceInitialState,
  reducers: {
    setCartLoadingReducer: setLoading,
    setCartErrorReducer: setError,
    setCartDataReducer: getCartData,
    clearCartReducer: clearCart,
  },
});

export const {
  setCartDataReducer,
  setCartLoadingReducer,
  setCartErrorReducer,
  clearCartReducer,
} = cartSlice.actions;
export default cartSlice.reducer;
