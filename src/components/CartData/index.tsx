import { Stack, Typography } from "@mui/material";
import React from "react";
import { RootState } from "../../Redux/ReduxStore";
import { useSelector } from "react-redux";
import { cartSliceInitialStateInterface } from "../../Redux/CartSlice/module/initialState";

import {
  productCardI,
  productSliceInitialStateI,
} from "../../Redux/ProductsSlice/modules/initialState";
import ProductCart from "../ProductCart";

const CartData: React.FC = () => {
  const { cartData } = useSelector<RootState>(
    (store) => store.cartSlice
  ) as cartSliceInitialStateInterface;

  const { products } = useSelector<RootState>(
    (store) => store.productSlice
  ) as productSliceInitialStateI;
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
          return (
            <ProductCart
              key={cartitem.productId}
              product={{
                ...(products.find(
                  (product) => product._id == cartitem.productId
                ) as productCardI),
                ...cartitem,
              }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default CartData;
