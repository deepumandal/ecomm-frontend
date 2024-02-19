import React from "react";
import SelectFilter from "../SelectFilter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { priceRangeI } from "../../utils/constants";
import { CategoryLists } from "../../utils/CatSubcatBrands";
import { applyFiltersReducer } from "../../Redux/FilterSlice/slice";

const CategoryFilter = () => {
  const { category } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  const dispatch = useDispatch<AppDispatch>();

  const handleApplyCatSubCate = (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => {
    console.log("value12345678", value);

    if (value === null) {
      dispatch(
        applyFiltersReducer({
          category: "",
          subcategory: undefined,
        })
      );
    } else if (typeof value == "string") {
      dispatch(
        applyFiltersReducer({
          category: value,
          subcategory: undefined,
        })
      );
    } else {
      dispatch(
        applyFiltersReducer({
          category: value.value,
          subcategory: undefined,
        })
      );
    }
  };
  return (
    <SelectFilter
      onChange={handleApplyCatSubCate}
      options={CategoryLists.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      })}
      label={"Select category"}
      disabled={false}
      defaultValue={category}
    />
  );
};

export default CategoryFilter;
