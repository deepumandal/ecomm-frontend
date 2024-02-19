import { orderSliceInitialStateInterface } from "./initialState";

const setLoading = (
  state: orderSliceInitialStateInterface
): orderSliceInitialStateInterface => {
  return {
    ...state,
    loading: true,
    message: "",
    status: false,
  };
};

export default setLoading;
