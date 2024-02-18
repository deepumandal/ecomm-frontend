import axios, { AxiosError } from "axios";
import { EnvProvider } from "../utils/EnvProvider";
import { filterSliceInitialStateI } from "../Redux/FilterSlice/modules/initialState";

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
    return response.data
  } catch (err) {
    return (err as AxiosError).response?.data as apiResponse;
  }
};
