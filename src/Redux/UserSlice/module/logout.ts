import { userSliceInitialStateInterface } from "./initialState";

const logout = (
  state: userSliceInitialStateInterface
): userSliceInitialStateInterface => {
  return {
    ...state,
    userData: {
      email: "",
      name: "",
      token: "",
      userId: "",
    },
  };
};

export default logout;
