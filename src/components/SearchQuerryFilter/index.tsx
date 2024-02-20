import React, { ChangeEvent, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { applyFiltersReducer } from "../../Redux/FilterSlice/slice";
import debounce from "../../utils/debounce";

const SearchQuerryFilter: React.FC = () => {
  const { querry } = useSelector<RootState>(
    (store) => store.filterSlice
  ) as filterSliceInitialStateI;

  const dispatch = useDispatch<AppDispatch>();

  const handleQuerryChange = debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        applyFiltersReducer({
          querry: event.target.value,
        })
      );
    },
    300
  );

  return (
    <TextField
      defaultValue={querry}
      id="standard-basic"
      sx={{
        margin: 1,
      }}
      label="Querry Search "
      variant="standard"
      onChange={handleQuerryChange}
    />
  );
};

export default memo(SearchQuerryFilter);
