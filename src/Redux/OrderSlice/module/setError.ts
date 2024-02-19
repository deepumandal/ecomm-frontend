import { apiResponse } from "../../../api/apiService";
import { orderSliceInitialStateInterface } from "./initialState";

const setError = (
  state: orderSliceInitialStateInterface,
  action: { payload: apiResponse }
): orderSliceInitialStateInterface => {
  return {
    ...state,
    loading: false,
    message: action.payload.message,
    status: action.payload.status,
  };
};

export default setError;
