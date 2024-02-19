import Stack from "@mui/material/Stack";
import React from "react";
import DesktopFilters from "../../components/DesktopFilters";
import ProductLists from "../../components/ProductLists";

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

export default HomePage;
