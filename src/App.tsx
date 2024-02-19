import React, { useEffect } from "react";
import "./app.css";

import { Stack } from "@mui/material";
import {
  Outlet,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import HomePage from "./View/Home";
import { Authentication } from "./View/Auth";
import Navbar from "./components/Navbar";
import CartAndcheckout from "./View/CartAndCheckOut";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/ReduxStore";
import { filterSliceInitialStateI } from "./Redux/FilterSlice/modules/initialState";
import {
  setProductDataReducer,
  setProductErrorReducer,
  setProductLoadingReducer,
} from "./Redux/ProductsSlice/slice";
import {
  GetCartDataApiService,
  GetFilteredDataApiService,
  apiResponse,
} from "./api/apiService";
import {
  setCartDataReducer,
  setCartErrorReducer,
  setCartLoadingReducer,
} from "./Redux/CartSlice/slice";

let isfirst: boolean = true;
const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    averageRating,
    avgtype,
    brand,
    category,
    maxPrice,
    minPrice,
    name,
    querry,
    subcategory,
  } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  useEffect(() => {
    (async function () {
      dispatch(setProductLoadingReducer());

      const payload = isfirst
        ? undefined
        : {
            averageRating,
            avgtype,
            brand,
            category,
            maxPrice,
            minPrice,
            name,
            querry,
            subcategory,
          };

      isfirst = false;
      const response: apiResponse = await GetFilteredDataApiService(payload);
      if (response.status) {
        dispatch(setProductDataReducer(response));
      } else {
        dispatch(setProductErrorReducer(response));
      }
    })();
  }, [
    averageRating,
    avgtype,
    brand,
    category,
    maxPrice,
    minPrice,
    name,
    querry,
    subcategory,
  ]);

  useEffect(() => {
    (async function () {
      dispatch(setCartLoadingReducer());
      const response: apiResponse = await GetCartDataApiService();
      if (response.status) {
        dispatch(setCartDataReducer(response));
      } else {
        dispatch(setCartErrorReducer(response));
      }
    })();
  }, []);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
    </Stack>
  );
};

const AppRoute = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
      {
        path: "/cart",
        element: <CartAndcheckout />,
      },
    ],
  },
]);

export default AppRoute;
