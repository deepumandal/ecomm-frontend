import axios, { AxiosError, AxiosHeaders } from "axios";
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
// payload: cartDataInterface
export const AddtoCartApiService = async (payload: {
  payload: cartDataInterface;
  headers: {
    Authorization: string;
  };
}) => {
  let requestBody = {};
  if (payload !== undefined) requestBody = payload.payload;
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/cart/add",
      requestBody,
      {
        headers: {
          ...payload.headers,
        },
      }
    );

    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
export const ClearCartDataApiService = async (payload: { userId: string }) => {
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/cart/clear",
      payload
    );

    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
export const GetCartDataApiService = async (payload: { userId: string }) => {
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/cart/getCartData",
      payload
    );
    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};

export const OrderProductApiService = async (
  // orderData: OrderedProductInterface[]

  {
    payload,
    headers,
  }: {
    payload: {
      userId: string;
      requestOrders: OrderedProductInterface[];
    };
    headers: {
      Authorization: string;
    };
  }
) => {
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/order/placeOrder",
      payload,
      {
        headers: {
          ...headers,
        },
      }
    );
    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
export const getOrdersDataApiService = async (payload: { userId: string }) => {
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/order/getOrder",
      payload
    );
    if (!response.status) {
      throw response;
    }
    return response.data;
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
export const SignInApiService = async (requestBody: {
  email: string;
  password: string;
}) => {
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/user/login",
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
export const SignUpApiService = async (requestBody: {
  email: string;
  password: string;
  name: string;
}) => {
  try {
    const response: apiResponse = await AxiosInstance.post(
      "/user/signup",
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
