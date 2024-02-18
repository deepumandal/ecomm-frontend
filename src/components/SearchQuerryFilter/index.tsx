import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { applyFiltersReducer } from "../../Redux/FilterSlice/slice";
import debounce from "../../utils/debounce";
import { setProductDataReducer, setProductErrorReducer, setProductLoadingReducer } from "../../Redux/ProductsSlice/slice";
import { GetFilteredDataApiService, apiResponse } from "../../api/apiService";

const SearchQuerryFilter: React.FC = () => {
  const { querry } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  const dispatch = useDispatch<AppDispatch>();

  const handleQuerryChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      applyFiltersReducer({
        querry: event.target.value,
      })
    );
    // update new data
    // (async function () {
    //   dispatch(setProductLoadingReducer());
    //   const response: apiResponse = await GetFilteredDataApiService(undefined);
    //   if (response.status) {
    //     dispatch(setProductDataReducer(response));
    //   } else {
    //     dispatch(setProductErrorReducer(response));
    //   }
    // })();
  };
  return (
    <TextField
      defaultValue={querry}
      id="standard-basic"
      sx={{
        margin: 1,
      }}
      label="Querry Search "
      variant="standard"
      onChange={debounce(handleQuerryChange)}
    />
  );
};

export default SearchQuerryFilter;
