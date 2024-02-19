import { apiResponse } from "../../../api/apiService";
import { userSliceInitialStateInterface } from "./initialState";
import { PayloadAction } from "@reduxjs/toolkit";

const getCartData = (
  state: userSliceInitialStateInterface,
  action: PayloadAction<apiResponse>
): userSliceInitialStateInterface => {
  return {
    ...state,
    loading: false,
    message: action.payload.message,
    status: action.payload.status,
    userData: action.payload.data,
  };
};

export default getCartData;
