import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { priceRangeI } from "../../utils/constants";

interface ComponentProps {
  options: { label: string; value: string }[];
  defaultValue: string | undefined;
  onChange: (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => void;
  disabled: boolean;
  label: string;
}

const SelectFilter: React.FC<ComponentProps> = ({
  options,
  defaultValue,
  onChange,
  disabled,
  label,
}) => {
  const optionLabels = options.map((option) => option.label);

  return (
    <Autocomplete
      fullWidth
      onChange={onChange}
      disabled={disabled}
      options={optionLabels}
      getOptionLabel={(option) => option}
      defaultValue={defaultValue}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="standard" />
      )}
    />
  );
};

export default SelectFilter;
