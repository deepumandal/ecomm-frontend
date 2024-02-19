import { userSliceInitialStateInterface } from "./initialState";

const setLoading = (
  state: userSliceInitialStateInterface
): userSliceInitialStateInterface => {
  return {
    ...state,
    loading: true,
    message: "",
    status: false,
  };
};

export default setLoading;
