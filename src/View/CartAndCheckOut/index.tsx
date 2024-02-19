import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CartData from "../../components/CartData";
import CheckoutData from "../../components/CheckoutData";

const CartAndcheckout: React.FC = () => {
  return (
    <Stack>
      <Stack
        sx={{
          width: "100%",
          maxWidth: "1250px",
          mx: "auto",
          marginTop: "20px",
        }}
        flexDirection={"column"}
      >
        <Stack
          sx={{
            justifyContent: "space-between",
          }}
          margin={1}
          flexDirection={"row"}
        >
          <CartData />
          <CheckoutData />
        </Stack>
        <Stack>orders</Stack>
      </Stack>
    </Stack>
  );
};

export default CartAndcheckout;
