import { Box, Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/ReduxStore";
import { logoutReducer } from "../../Redux/UserSlice/slice";
import { clearCartReducer } from "../../Redux/CartSlice/slice";
import { clearOrderReducer } from "../../Redux/OrderSlice/slice";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const route = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = () => {
    route("/auth", {
      //   replace: true,
    });
    handleClose();
  };
  const handleLogout = () => {
    dispatch(logoutReducer());
    dispatch(clearCartReducer());
    dispatch(clearOrderReducer());
    handleClose();
  };
  return (
    <Box>
      <Stack
        onClick={handleClick}
        flexDirection={"row"}
        alignItems={"center"}
        gap={1}
      >
        <Typography
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            cursor: "pointer",
          }}
        >
          User
        </Typography>
        <AccountCircleIcon
          fontSize="medium"
          sx={{
            cursor: "pointer",
          }}
        />
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogin}>Login / Signup</MenuItem>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
