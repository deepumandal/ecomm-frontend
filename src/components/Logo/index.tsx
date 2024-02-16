import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const router = useNavigate();
  const handleClick = () => router("/");
  return (
    <Typography
      sx={{
        color: "white",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
      onClick={handleClick}
    >
      App Logo
    </Typography>
  );
};

export default Logo;
