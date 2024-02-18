import React from "react";
import { priceRangeI } from "../../utils/constants";
import { Autocomplete, TextField } from "@mui/material";
interface ComponentProps {
  label: string;
  defaultValue: string | undefined;
  onChange: (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => void;
  options: priceRangeI[];
}

const TypeAndSelect: React.FC<ComponentProps> = ({
  label,
  onChange,
  options,
  defaultValue,
}) => {
  const defaultOption = options.find((option) => option.value === defaultValue);
  const defaultLabel = defaultOption ? defaultOption.label : defaultValue || "";

  return (
    <Autocomplete
      freeSolo      
      defaultValue={defaultLabel}
      options={options.map((option) => option.label)}
      renderInput={(params) => (
        <TextField  {...params} label={label} variant="standard" />
      )}
      onChange={onChange}
      fullWidth
    />
  );
};

export default TypeAndSelect;
