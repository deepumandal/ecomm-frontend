import React, { ChangeEvent } from "react";
import { FormLabel, Stack } from "@mui/material";
import BrandsFilterOptions from "../BrandsFilterOptions";

const BrandsFilter: React.FC = () => {
  return (
    <Stack flexDirection={"column"} margin={1}>
      <FormLabel id="brands">Brand's</FormLabel>
      <BrandsFilterOptions />
    </Stack>
  );
};

export default BrandsFilter;
