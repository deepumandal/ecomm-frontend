import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { memo } from "react";
import TypeAndSelect from "../TypeAndSelect";
import {
  maxPriceRange,
  minPriceRange,
  priceRangeI,
} from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { applyFiltersReducer } from "../../Redux/FilterSlice/slice";

const MinMaxPriceFilter: React.FC = () => {
  const { minPrice, maxPrice } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null,
    key: "minPrice" | "maxPrice"
  ) => {
    if (value == null) {
      dispatch(
        applyFiltersReducer({
          [key]: undefined,
        })
      );
    } else if (typeof value == "string") {
      dispatch(
        applyFiltersReducer({
          [key]: value,
        })
      );
    } else {
      dispatch(
        applyFiltersReducer({
          [key]: value.value,
        })
      );
    }
  };

  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={1} margin={1}>
      <TypeAndSelect
        label="Min Price"
        defaultValue={minPrice}
        onChange={(event, value) => handleOnChange(event, value, "minPrice")}
        options={minPriceRange}
      />

      <Typography margin={1}>to</Typography>

      <TypeAndSelect
        label="Max Price"
        defaultValue={maxPrice}
        onChange={(event, value) => handleOnChange(event, value, "maxPrice")}
        options={maxPriceRange}
      />
    </Stack>
  );
};

export default memo(MinMaxPriceFilter);
