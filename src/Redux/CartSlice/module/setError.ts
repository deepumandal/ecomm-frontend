import { apiResponse } from "../../../api/apiService";
import { cartSliceInitialStateInterface } from "./initialState";

const setError = (
  state: cartSliceInitialStateInterface,
  action: { payload: apiResponse }
): cartSliceInitialStateInterface => {
  return {
    ...state,
    loading: false,
    message: action.payload.message,
    status: action.payload.status,
  };
};

export default setError;
