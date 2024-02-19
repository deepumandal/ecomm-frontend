import { apiResponse } from "../../../api/apiService";
import { checkOuSliceInitialStateInterface } from "./intialState";

const onChangeCheckout = (
  state: checkOuSliceInitialStateInterface,
  action: { payload: Partial<checkOuSliceInitialStateInterface> }
): checkOuSliceInitialStateInterface => {
  return {
    ...state,
    ...action.payload,
  };
};

export default onChangeCheckout;
