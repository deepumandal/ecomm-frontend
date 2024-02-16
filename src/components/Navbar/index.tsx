import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import UserMenu from "../UserMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Hamburgur from "../Hamburgur";

const Navbar: React.FC = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        py: 1,
        backgroundColor: "#0A3A75",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          margin: "auto",
          height: "50px",
          width: "90%",
          maxWidth: "1200px",
          alignItems: "center",
        }}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Stack
          width={"100%"}
          flexDirection={"row"}
          gap={2}
          alignItems={"center"}
        >
          <Logo />
          <Box
            width={{
              xs: "100%",
              sm: "500px",
            }}
            display={{
              xs: "none",
              sm: "block",
            }}
          >
            <TextField
              id="filled-search"
              placeholder="Search for products"
              type="search"
              size="small"
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 2,
                outline: "none",
                cursor: "pointer",
              }}
            />
          </Box>
        </Stack>

        <Stack
          flexDirection={"row"}
          gap={2}
          sx={{
            color: "white",
          }}
          alignItems={"center"}
          display={{
            xs: "none",
            sm: "flex",
          }}
        >
          <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
            <Typography>Cart</Typography>
            <ShoppingCartIcon fontSize="medium" />
          </Stack>

          <UserMenu />
        </Stack>

        <Hamburgur />
      </Stack>
    </Stack>
  );
};

export default Navbar;
