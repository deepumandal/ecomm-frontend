import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { ChangeEvent, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { applyFiltersReducer } from "../../Redux/FilterSlice/slice";
import { CategoryLists } from "../../utils/CatSubcatBrands";

const BrandsFilterOptions: React.FC = () => {
  const { subcategory, brand, category } = useSelector<RootState>(
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

  const Categories = CategoryLists.find((item) => item.name == category) || {
    name: undefined,
    subCategories: [],
  };

  const subCategories = Categories.subCategories.find(
    (item) => item.name == subcategory
  );

  const brands = subCategories?.brands || [];
  return (
    <RadioGroup
      aria-labelledby="brands"
      value={brand}
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
  );
};

export default memo(BrandsFilterOptions);
