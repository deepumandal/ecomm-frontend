import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/ReduxStore";
import { userSliceInitialStateInterface } from "../Redux/UserSlice/module/initialState";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { userData } = useSelector<RootState>(
    (store) => store.UserSlice
  ) as userSliceInitialStateInterface;

  const loc = useLocation();

  return userData.token ? (
    children
  ) : (
    <Navigate to={"/auth"} replace={true} state={loc.pathname} />
  );
};

export default PrivateRoute;
