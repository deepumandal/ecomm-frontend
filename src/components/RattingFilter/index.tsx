import React from "react";
import TypeAndSelect from "../TypeAndSelect";
import { RattingRange, priceRangeI } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import Stack from "@mui/material/Stack";
import { applyFiltersReducer } from "../../Redux/FilterSlice/slice";
import SelectFilter from "../SelectFilter";

const RattingFilter = () => {
  const { averageRating } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => {
    if (value == null) {
      dispatch(
        applyFiltersReducer({
          averageRating: undefined,
        })
      );
    } else if (typeof value == "string") {
      dispatch(
        applyFiltersReducer({
          averageRating: parseFloat(value),
        })
      );
    } else {
      dispatch(
        applyFiltersReducer({
          averageRating: parseFloat(value.value),
        })
      );
    }
  };

  const handleApplyCatSubCate = (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => {
    if (value === null) {
      dispatch(
        applyFiltersReducer({
          avgtype: undefined,
        })
      );
    } else if (typeof value == "string") {
      dispatch(
        applyFiltersReducer({
          avgtype: value,
        })
      );
    } else {
      dispatch(
        applyFiltersReducer({
          avgtype: value.value,
        })
      );
    }
  };
  return (
    <Stack margin={1} flexDirection={"row"} gap={2}>
      <SelectFilter
        onChange={handleApplyCatSubCate}
        options={[
          {
            label: "gt",
            value: "gt",
          },
          {
            label: "lte",
            value: "lte",
          },
        ]}
        label={"Gt or Lt"}
        disabled={false}
        defaultValue={undefined}
      />
      <TypeAndSelect
        label="Ratings"
        defaultValue={averageRating?.toString()}
        onChange={handleOnChange}
        options={RattingRange}
      />
    </Stack>
  );
};

export default RattingFilter;
