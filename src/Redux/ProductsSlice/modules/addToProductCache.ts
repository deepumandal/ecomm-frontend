import { productCardI, productSliceInitialStateI } from "./initialState";
import { PayloadAction } from "@reduxjs/toolkit";

const addToProductCache = (
  state: productSliceInitialStateI,
  action: PayloadAction<productCardI>
): productSliceInitialStateI => {
  return {
    ...state,
    productCache: {
      ...state.productCache,
      [action.payload._id as string]: action.payload,
    },
  };
};

export default addToProductCache;
