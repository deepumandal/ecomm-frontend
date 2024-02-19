import { apiResponse } from "../../../api/apiService";
import { userSliceInitialStateInterface } from "./initialState";

const setError = (
  state: userSliceInitialStateInterface,
  action: { payload: apiResponse }
): userSliceInitialStateInterface => {
  return {
    ...state,
    loading: false,
    message: action.payload.message,
    status: action.payload.status,
  };
};

export default setError;
