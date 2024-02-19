import { createSlice } from "@reduxjs/toolkit";
import { orderSliceInitialState } from "./module/initialState";
import setLoading from "./module/setLoading";
import setOrderData from "./module/setOrderData";
import setError from "./module/setError";

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: orderSliceInitialState,
  reducers: {
    setOrderLoadingReducer: setLoading,
    setOrderErrorReducer: setError,
    setOrdertDataReducer: setOrderData,
  },
});

export const {
  setOrderErrorReducer,
  setOrderLoadingReducer,
  setOrdertDataReducer,
} = orderSlice.actions;
export default orderSlice.reducer;
