import React, { memo } from "react";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import BrandsFilterOptions from "../BrandsFilterOptions";

const BrandsFilter: React.FC = () => {
  return (
    <Stack flexDirection={"column"} margin={1}>
      <FormLabel id="brands">Brand's</FormLabel>
      <BrandsFilterOptions />
    </Stack>
  );
};

export default memo(BrandsFilter);
