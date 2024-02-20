import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { priceRangeI } from "../../utils/constants";
import { applyFiltersReducer } from "../../Redux/FilterSlice/slice";
import SelectFilter from "../SelectFilter";
import { CategoryLists } from "../../utils/CatSubcatBrands";

const SubCategoryFilter: React.FC = () => {
  const { subcategory, category } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  const dispatch = useDispatch<AppDispatch>();

  const handleApplyCatSubCate = (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => {
    if (value == null) {
      dispatch(
        applyFiltersReducer({
          subcategory: undefined,
          brand : undefined
        })
      );
    } else if (typeof value == "string") {
      dispatch(
        applyFiltersReducer({
          subcategory: value,
          brand : undefined
        })
      );
    } else {
      dispatch(
        applyFiltersReducer({
          subcategory: value.value,
          brand : undefined
        })
      );
    }
  };

  const SelectedCategory = CategoryLists.find(
    (item) => item.name == category
  ) || {
    name: "none",
    subCategories: [],
  };

  const options: { label: string; value: string }[] =
    SelectedCategory.subCategories.map((item) => {
      return {
        label: item.name,
        value: item.name,
      };
    });

  return (
    <SelectFilter
      onChange={handleApplyCatSubCate}
      disabled={!category}
      label="Select subCategory"
      options={options}
      defaultValue={subcategory}
    />
  );
};

export default memo(SubCategoryFilter);
