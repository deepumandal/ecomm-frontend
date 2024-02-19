import React, { memo } from "react";
import Stack from "@mui/material/Stack";
import SearchQuerryFilter from "../SearchQuerryFilter";
import MinMaxPriceFilter from "../MinMaxPriceFilter";
import RattingFilter from "../RattingFilter";
import BrandsFilter from "../BrandsFilter";

const DesktopFilters: React.FC = () => {
  return (
    <Stack
      sx={{
        border: "1px solid grey",
        width: "30%",
        margin: 1,
        height: "fit-content",
        gap: 2,
      }}
    >
      {" "}
      <SearchQuerryFilter />
      <MinMaxPriceFilter />
      <RattingFilter />
      <BrandsFilter />
    </Stack>
  );
};

export default memo(DesktopFilters);
