import React from "react";
import { priceRangeI } from "../../utils/constants";
import { Autocomplete, TextField } from "@mui/material";

interface componentI {
  label: string;
  onChange: (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => void;
  options: priceRangeI[];
}

const TypeAndSelect: React.FC<componentI> = ({ label, onChange, options }) => {
  return (
    <Autocomplete
      freeSolo
      options={options}
      getOptionLabel={(option) =>
        typeof option === "object" ? option.label : option
      }
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      onChange={onChange}
      fullWidth
    />
  );
};

export default TypeAndSelect;
