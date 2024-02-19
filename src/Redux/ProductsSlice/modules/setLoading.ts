import { productSliceInitialStateI } from "./initialState";

const setLoading = (
  state: productSliceInitialStateI
): productSliceInitialStateI => {
  return {
    ...state,
    loading: true,
    message: "",
    status: false,
  };
};

export default setLoading;
