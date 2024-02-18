import React, { ChangeEvent } from "react";
import { CategoryLists } from "../../utils/CatSubcatBrands";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { applyFiltersReducer } from "../../Redux/FilterSlice/slice";

import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";

const BrandsFilter: React.FC = () => {
  const { subcategory, brand } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  const dispatch = useDispatch<AppDispatch>();

  const handleApplyBrands = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      applyFiltersReducer({
        brand: event.target.value,
      })
    );
  };

  const Categories = CategoryLists.find((item) => item.name) || {
    name: "",
    subCategories: [],
  };
  const subCategories = Categories.subCategories.find(
    (item) => item.name == subcategory
  );
  const brands = subCategories?.brands || [];

  return (
    <Stack flexDirection={"column"} margin={1}>
      <FormLabel id="brands">Brand's</FormLabel>
      <RadioGroup
        aria-labelledby="brands"
        defaultValue={brand}
        name="radio-buttons-group"
        onChange={handleApplyBrands}
      >
        {brands.map((brand) => {
          return (
            <FormControlLabel
              key={brand}
              value={brand}
              control={<Radio />}
              label={brand}
            />
          );
        })}
      </RadioGroup>
    </Stack>
  );
};

export default BrandsFilter;
