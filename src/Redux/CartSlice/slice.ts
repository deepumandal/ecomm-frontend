import { createSlice } from "@reduxjs/toolkit";
import { cartSliceInitialState } from "./module/initialState";
import setLoading from "./module/setLoading";
import getCartData from "./module/setCartData";
import setError from "./module/setError";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartSliceInitialState,
  reducers: {
    setCartLoadingReducer: setLoading,
    setCartErrorReducer: setError,
    setCartDataReducer: getCartData,
  },
});

export const {
  setCartDataReducer,
  setCartLoadingReducer,
  setCartErrorReducer,
} = cartSlice.actions;
export default cartSlice.reducer;
