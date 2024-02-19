import { cartDataInterface } from "../../CartSlice/module/initialState";

export interface OrderedProductInterface extends cartDataInterface {
  OrderId: string;
  ExpectedDelivery: string;
}
export interface orderSliceInitialStateInterface {
  loading: boolean;
  status: boolean;
  message: string;
  orderedProducts: OrderedProductInterface[];
}

export const orderSliceInitialState: orderSliceInitialStateInterface = {
  loading: false,
  message: "",
  orderedProducts: [],
  status: false,
};
