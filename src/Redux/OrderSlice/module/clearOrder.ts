import { orderSliceInitialStateInterface } from "./initialState";

const clearOrder = (
  state: orderSliceInitialStateInterface
): orderSliceInitialStateInterface => {
  return {
    ...state,
    orderedProducts: [],
  };
};

export default clearOrder;
