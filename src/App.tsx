import React, { lazy, Suspense, useEffect } from "react";
import "./app.css";
import Stack from "@mui/material/Stack";
import { Outlet, createHashRouter } from "react-router-dom";

const HomePage = lazy(() => import("./View/Home"));
const Authentication = lazy(() => import("./View/Auth"));
const CartAndCheckout = lazy(() => import("./View/CartAndCheckOut"));
const PrivateRoute = lazy(() => import("./HOC"));
const Navbar = lazy(() => import("./components/Navbar"));

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
  getOrdersDataApiService,
} from "./api/apiService";
import {
  setCartDataReducer,
  setCartErrorReducer,
  setCartLoadingReducer,
} from "./Redux/CartSlice/slice";
import {
  setOrderErrorReducer,
  setOrderLoadingReducer,
  setOrdertDataReducer,
} from "./Redux/OrderSlice/slice";
import { userSliceInitialStateInterface } from "./Redux/UserSlice/module/initialState";

let isfirst: boolean = true;

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector<RootState>(
    (store) => store.UserSlice
  ) as userSliceInitialStateInterface;

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
    userData.token &&
      (async function () {
        dispatch(setCartLoadingReducer());
        const response: apiResponse = await GetCartDataApiService({
          userId: userData.userId,
          headers: {
            Authorization: userData.token,
          },
        });
        if (response.status) {
          dispatch(setCartDataReducer(response));
        } else {
          dispatch(setCartErrorReducer(response));
        }
      })();
  }, []);

  useEffect(() => {
    // getOrder
    userData.token &&
      (async function () {
        dispatch(setOrderLoadingReducer());

        const response: apiResponse = await getOrdersDataApiService({
          userId: userData.userId,
          headers: {
            Authorization: userData.token,
          },
        });

        if (response.status) {
          dispatch(setOrdertDataReducer(response));
        } else {
          dispatch(setOrderErrorReducer(response));
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
        element: (
          <Suspense>
            {" "}
            <HomePage />
          </Suspense>
        ),
      },

      {
        path: "/cart",
        element: (
          <Suspense>
            <PrivateRoute>
              {" "}
              <CartAndCheckout />
            </PrivateRoute>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Suspense>
        {" "}
        <Authentication />
      </Suspense>
    ),
  },
]);

export default AppRoute;
