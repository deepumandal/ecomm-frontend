import React from "react";
import {
  RattingRange,
  maxPriceRange,
  minPriceRange,
  priceRangeI,
} from "../../utils/constants";
import Stack from "@mui/material/Stack";
import { TextField, Typography } from "@mui/material";
import TypeAndSelect from "../TypeAndSelect";

const DesktopFilters = () => {
  const handleOnChange = (
    event: React.SyntheticEvent,
    value: string | priceRangeI | null
  ) => {
    console.log("Selected price range:", value);
  };
  return (
    <Stack
      sx={{
        border: "1px solid grey",
        width: "40%",
        margin: 1,
        height: "fit-content",
        gap: 2,
      }}
    >
      <TextField
        id="standard-basic"
        sx={{
          margin: 1,
        }}
        label="Querry Search "
        variant="standard"
      />
      <Stack flexDirection={"row"} alignItems={"center"} gap={1} margin={1}>
        <TypeAndSelect
          label="Min Price"
          onChange={handleOnChange}
          options={minPriceRange}
        />
        <Typography margin={1}>to</Typography>

        <TypeAndSelect
          label="Max Price"
          onChange={handleOnChange}
          options={maxPriceRange}
        />
      </Stack>
      <Stack>brands</Stack>
      <Stack margin={1}>
        {" "}
        <TypeAndSelect
          label="Ratings"
          onChange={handleOnChange}
          options={RattingRange}
        />
      </Stack>
      {/*  brands, ratting */}
    </Stack>
  );
};

export default DesktopFilters;
