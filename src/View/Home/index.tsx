import { Stack } from "@mui/material";
import React, { useEffect } from "react";

import DesktopFilters from "../../components/DesktopFilters";
import ProductLists from "../../components/ProductLists";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import {
  GetCartDataApiService,
  GetFilteredDataApiService,
  apiResponse,
} from "../../api/apiService";
import {
  setCartDataReducer,
  setCartErrorReducer,
  setCartLoadingReducer,
} from "../../Redux/CartSlice/slice";
import {
  setProductDataReducer,
  setProductErrorReducer,
  setProductLoadingReducer,
} from "../../Redux/ProductsSlice/slice";

let isfirst: boolean = true;
const HomePage: React.FC = () => {
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
    // get first time data
    // dispatch(getFiilteredDataReducer(undefined));

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
        maxWidth: "1200px",
        mx: "auto",
        marginTop: "20px",
      }}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <DesktopFilters />
      <ProductLists />
    </Stack>
  );
};

export default HomePage;
