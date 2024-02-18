import { Stack } from "@mui/material";
import React, { useEffect } from "react";

import DesktopFilters from "../../components/DesktopFilters";
import ProductLists from "../../components/ProductLists";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { getFiilteredDataReducer } from "../../Redux/ProductsSlice/extraReducer/getFiilteredDataReducer";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";

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
    dispatch(
      getFiilteredDataReducer({
        averageRating,
        avgtype,
        brand,
        category,
        maxPrice,
        minPrice,
        name,
        querry,
        subcategory,
      })
    );
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
