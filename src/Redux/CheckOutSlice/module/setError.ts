import { apiResponse } from "../../../api/apiService";
import { checkOuSliceInitialStateInterface } from "./intialState";

const setError = (
  state: checkOuSliceInitialStateInterface,
  action: { payload: apiResponse }
): checkOuSliceInitialStateInterface => {
  return {
    ...state,
    loading: false,
    message: action.payload.message,
    status: action.payload.status,
  };
};

export default setError;
