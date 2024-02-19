import { createSlice } from "@reduxjs/toolkit";
import { userSliceInitialState } from "./module/initialState";
import setLoading from "./module/setLoading";
import getCartData from "./module/setUserData";
import setError from "./module/setError";
import logout from "./module/logout";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: userSliceInitialState,
  reducers: {
    setUserLoadingReducer: setLoading,
    setUserErrorReducer: setError,
    setUserDataReducer: getCartData,
    logoutReducer: logout,
  },
});

export const {
  setUserDataReducer,
  setUserLoadingReducer,
  setUserErrorReducer,
  logoutReducer,
} = cartSlice.actions;
export default cartSlice.reducer;
