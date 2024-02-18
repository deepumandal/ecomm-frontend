import React from "react";
import "./app.css";

import { Stack } from "@mui/material";
import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "./View/Home";
import { Authentication } from "./View/Auth";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
    </Stack>
  );
};

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
    ],
  },
]);

export default AppRoute;
