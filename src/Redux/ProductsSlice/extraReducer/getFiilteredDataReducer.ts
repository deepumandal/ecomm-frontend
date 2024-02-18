import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetFilteredDataApiService,
  apiResponse,
} from "../../../api/apiService";
import { productSliceInitialStateI } from "../modules/initialState";
import { filterSliceInitialStateI } from "../../FilterSlice/modules/initialState";

export const getFiilteredDataReducer = createAsyncThunk<
  apiResponse,
  any,
  { rejectValue: apiResponse }
>(
  "getFilteredData",
  async (payload: undefined | filterSliceInitialStateI, thunkAPi) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPi;
    try {
      const response: apiResponse = await GetFilteredDataApiService(payload);

      console.log("response", response);
      if (!response.status) throw response;
      return fulfillWithValue(response);
    } catch (err) {
      console.log("hiiiii", err);
      return rejectWithValue(err as apiResponse);
    }
  }
);

export const getFiilteredDataReducerPending = (
  state: productSliceInitialStateI
) => {
  state.loading = true;
  state.message = "";
  state.status = true;
};
export const getFiilteredDataReducerFullfilled = (
  state: productSliceInitialStateI,
  action: {
    payload: apiResponse;
  }
) => {
  state.loading = false;
  state.message = action.payload.message;
  state.products = action.payload.data;
  state.status = action.payload.status;
};
export const getFiilteredDataReducerRejected = (
  state: productSliceInitialStateI,
  action: {
    payload: apiResponse | undefined;
  }
) => {
  if (action.payload) {
    state.loading = false;
    state.message = action.payload.message;
    state.status = action.payload.status;
  }
};
