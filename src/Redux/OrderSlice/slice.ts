import { createSlice } from "@reduxjs/toolkit";
import { orderSliceInitialState } from "./module/initialState";
import setLoading from "./module/setLoading";
import setOrderData from "./module/setOrderData";
import setError from "./module/setError";
import clearOrder from "./module/clearOrder";

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: orderSliceInitialState,
  reducers: {
    setOrderLoadingReducer: setLoading,
    setOrderErrorReducer: setError,
    setOrdertDataReducer: setOrderData,
    clearOrderReducer: clearOrder,
  },
});

export const {
  setOrderErrorReducer,
  setOrderLoadingReducer,
  setOrdertDataReducer,
  clearOrderReducer,
} = orderSlice.actions;
export default orderSlice.reducer;
