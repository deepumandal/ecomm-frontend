import { Stack, Typography } from "@mui/material";
import React from "react";
import { RootState } from "../../Redux/ReduxStore";
import { useSelector } from "react-redux";
import { cartSliceInitialStateInterface } from "../../Redux/CartSlice/module/initialState";
import CartAndOrderProduct from "../CartAndOrderProduct";

const CartData: React.FC = () => {
  const { cartData } = useSelector<RootState>(
    (store) => store.cartSlice
  ) as cartSliceInitialStateInterface;

  return (
    <Stack
      sx={{
        width: "100%",
      }}
      margin={1}
    >
      <Typography margin={1} sx={{ fontWeight: 700 }}>
        Cart
      </Typography>
      <Stack flexDirection={"column"}>
        {cartData.map((cartitem) => {
          const { productCount, productId, productTotal } = cartitem;

          return (
            <CartAndOrderProduct
              key={cartitem.productId}
              type="Cart"
              productCount={productCount}
              productId={productId}
              productTotal={productTotal}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default CartData;
