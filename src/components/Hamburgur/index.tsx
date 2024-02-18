import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
const hamburgerPaths = [
  {
    name: "User",
    Icon: <AccountCircleIcon />,
    path: "/auth",
  },
  {
    name: "cart",
    Icon: <ShoppingCartIcon />,
    path: "/cart",
  },
];
const Hamburgur: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (bool: boolean) => {
    setIsOpen((prev) => (prev = bool));
  };
  const Router = useNavigate();
  const handleRoute = (route: string) => {
    Router(route);
    toggleDrawer(false);
  };
  return (
    <Stack
      display={{
        xs: "block",
        sm: "none",
      }}
    >
      <Button onClick={() => toggleDrawer(true)}>
        <MenuIcon
          sx={{
            color: "white",
          }}
        />
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        todo need to work here
        <Stack
          width={"80vw"}
          sx={{
            height: "fit-content",
            marginTop: "50%",
          }}
          flexDirection={"column"}
        >
          <List
            sx={{
              width: "70%",
              margin: "auto",
            }}
          >
            {hamburgerPaths.map((text, index) => (
              <ListItem key={text.name} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{text.Icon}</ListItemIcon>
                  <ListItemText
                    onClick={() => handleRoute(text.path)}
                    primary={text.name}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <TextField
            id="filled-search"
            placeholder="Search for products"
            label="products"
            type="search"
            size="small"
            sx={{
              width: "90%",
              borderRadius: 2,
              cursor: "pointer",
              margin: "auto",
              marginTop: "20px",
            }}
          />
        </Stack>
      </SwipeableDrawer>
    </Stack>
  );
};

export default Hamburgur;

{
  /* <MenuIcon
        sx={{
          color: "white",
        }}
      /> */
}
