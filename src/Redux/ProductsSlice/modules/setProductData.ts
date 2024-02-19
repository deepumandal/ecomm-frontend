import { apiResponse } from "../../../api/apiService";
import { productSliceInitialStateI } from "./initialState";
import { PayloadAction } from "@reduxjs/toolkit";

const setProductData = (
  state: productSliceInitialStateI,
  action: PayloadAction<apiResponse>
): productSliceInitialStateI => {
  return {
    ...state,
    loading: false,
    products: action.payload.data,
    message: action.payload.message,
    status: action.payload.status,
  };
};

export default setProductData;
