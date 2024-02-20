import Stack from "@mui/material/Stack";
import React, { memo } from "react";
import CartData from "../../components/CartData";
import CheckoutData from "../../components/CheckoutData";
import OrderSection from "../../components/OrderSection";

const CartAndCheckout: React.FC = () => {
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
        <OrderSection />
        
      </Stack>
    </Stack>
  );
};

export default memo(CartAndCheckout);
