import Stack from "@mui/material/Stack";
import React, { memo } from "react";
const DesktopFilters = React.lazy(
  () => import("../../components/DesktopFilters")
);
const ProductLists = React.lazy(() => import("../../components/ProductLists"));

const HomePage: React.FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: "1250px",
        mx: "auto",
        marginTop: "20px",
      }}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <DesktopFilters />
      <ProductLists />
    </Stack>
  );
};

export default memo(HomePage);
