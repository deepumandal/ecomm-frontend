import { apiResponse } from "../../../api/apiService";
import { cartSliceInitialStateInterface } from "./initialState";
import { PayloadAction } from "@reduxjs/toolkit";

const getCartData = (
  state: cartSliceInitialStateInterface,
  action: PayloadAction<apiResponse>
): cartSliceInitialStateInterface => {
  return {
    ...state,
    loading: false,
    cartData: action.payload.data,
    message: action.payload.message,
    status: action.payload.status,
  };
};

export default getCartData;
