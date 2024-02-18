import { Stack } from "@mui/material";
import React from "react";

const ProductLists: React.FC = () => {
  return (
    <Stack
      sx={{
        border: "1px solid red",
        width: "100%",
      }}
      flexDirection={"column"}
    >
      <Stack>Category & subcategory filter</Stack>
      <Stack>products</Stack>
    </Stack>
  );
};

export default ProductLists;
