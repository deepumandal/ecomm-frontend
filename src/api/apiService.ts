import axios, { AxiosError } from "axios";
import { EnvProvider } from "../utils/EnvProvider";
import { filterSliceInitialStateI } from "../Redux/FilterSlice/modules/initialState";
import {
  cartDataInterface,
  cartSliceInitialStateInterface,
} from "../Redux/CartSlice/module/initialState";
import { OrderedProductInterface } from "../Redux/OrderSlice/module/initialState";

const AxiosInstance = axios.create({
  baseURL: EnvProvider().SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // todo
  },
});

export interface apiResponse {
  statusCode: number;
  message: string;
  status: boolean;
  data?: any;
}

export const GetFilteredDataApiService = async (
  payload: undefined | filterSliceInitialStateI
) => {
  let requestBody = {};
  if (payload !== undefined) requestBody = payload;
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/products/filter",
      requestBody
    );

    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
export const AddtoCartApiService = async (payload: cartDataInterface) => {
  let requestBody = {};
  if (payload !== undefined) requestBody = payload;
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/cart/add",
      requestBody
    );

    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
export const ClearCartDataApiService = async () => {
  try {
    const response: apiResponse = await AxiosInstance.get("/cart/clear");

    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
export const GetCartDataApiService = async () => {
  try {
    const response: apiResponse = await AxiosInstance.get("/cart/getCartData");
    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};

export const OrderProductApiService = async (
  orderData: OrderedProductInterface[]
) => {
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/order/setOrder",
      orderData
    );
    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
export const getOrdersDataApiService = async () => {
  try {
    const response: apiResponse = await AxiosInstance.get("/order/getOrder");
    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
