import { apiResponse } from "../../../api/apiService";
import { orderSliceInitialStateInterface } from "./initialState";
import { PayloadAction } from "@reduxjs/toolkit";

const getCartData = (
  state: orderSliceInitialStateInterface,
  action: PayloadAction<apiResponse>
): orderSliceInitialStateInterface => {
  return {
    ...state,
    loading: false,
    orderedProducts: action.payload.data,
    message: action.payload.message,
    status: action.payload.status,
  };
};

export default getCartData;
