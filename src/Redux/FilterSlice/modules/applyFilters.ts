import { filterSliceInitialStateI } from "./initialState";
import { PayloadAction } from "@reduxjs/toolkit";

const applyFilters = (
  state: filterSliceInitialStateI,
  action: PayloadAction<filterSliceInitialStateI>
): filterSliceInitialStateI => {
  return {
    ...state,
    ...action.payload,
  };
};

export default applyFilters;
