import { cartSliceInitialStateInterface } from "./initialState";

const setLoading = (
  state: cartSliceInitialStateInterface
): cartSliceInitialStateInterface => {
  return {
    ...state,
    loading: true,
    message: "",
    status: false,
  };
};

export default setLoading;
