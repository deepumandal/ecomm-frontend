import { createSlice } from "@reduxjs/toolkit";
import { CheckoutInitialState } from "./module/intialState";
import setLoading from "./module/setLoading";
import setError from "./module/setError";
import onChangeCheckout from "./module/onChangeCheckout";

const CheckoutSlice = createSlice({
  name: "cartSlice",
  initialState: CheckoutInitialState,
  reducers: {
    setCartLoadingReducer: setLoading,
    setCartErrorReducer: setError,
    onChangeCheckoutReducer: onChangeCheckout,
    
    // CheckOutReducer todo api call
  },
});

export const {
  onChangeCheckoutReducer,
  setCartLoadingReducer,
  setCartErrorReducer,
} = CheckoutSlice.actions;
export default CheckoutSlice.reducer;
