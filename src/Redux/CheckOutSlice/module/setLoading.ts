import { checkOuSliceInitialStateInterface } from "./intialState";

const setLoading = (
  state: checkOuSliceInitialStateInterface
): checkOuSliceInitialStateInterface => {
  return {
    ...state,
    loading: true,
    message: "",
    status: false,
  };
};

export default setLoading;
