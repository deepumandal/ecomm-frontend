import { Stack } from "@mui/material";
import React from "react";
import SelectFilter from "../SelectFilter";
import { priceRangeI } from "../../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { CategoryLists } from "../../utils/CatSubcatBrands";
import CategoryFilter from "../Categoryfilter";
import SubCategoryFilter from "../SubCategoryFilter";

const ProductLists: React.FC = () => {
  const { category, subcategory } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  const handleApplyCatSubCate = (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => {
    // todo
  };

  return (
    <Stack
      sx={{
        width: "100%",
      }}
      flexDirection={"column"}
    >
      <Stack
        margin={1}
        flexDirection={"row"}
        justifyContent={"space-between"}
        gap={1}
      >
        {/* Category & subcategory filter */}
        <CategoryFilter />
        <SubCategoryFilter />
      </Stack>
      <Stack>products</Stack>
    </Stack>
  );
};

export default ProductLists;
