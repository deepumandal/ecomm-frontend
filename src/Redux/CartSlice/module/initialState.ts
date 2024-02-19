export interface cartDataInterface {
  productId: string;
  productCount: number;
  productTotal: number;
  userId: string;
}
export interface cartSliceInitialStateInterface {
  loading: boolean;
  status: boolean;
  message: string;
  cartData: cartDataInterface[];
}

export const cartSliceInitialState: cartSliceInitialStateInterface = {
  cartData: [],
  loading: false,
  message: "",
  status: true,
};
