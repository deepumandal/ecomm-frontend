import { cartSliceInitialStateInterface } from "./initialState";

const clearCart = (
  state: cartSliceInitialStateInterface
): cartSliceInitialStateInterface => {
  return {
    ...state,
    cartData: [],
  };
};

export default clearCart;
