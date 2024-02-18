import { apiResponse } from "../../../api/apiService";
import { productSliceInitialStateI } from "./initialState";

const setError = (
  state: productSliceInitialStateI,
  action: { payload: apiResponse }
): productSliceInitialStateI => {
  return {
    ...state,
    loading: false,
    message: action.payload.message,
    status: action.payload.status,
  };
};

export default setError;
