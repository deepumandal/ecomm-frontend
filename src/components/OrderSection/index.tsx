import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import { orderSliceInitialStateInterface } from "../../Redux/OrderSlice/module/initialState";
import {
  productCardI,
  productSliceInitialStateI,
} from "../../Redux/ProductsSlice/modules/initialState";
import ProductCart from "../ProductCart";
import OrderedCard from "../OrderedCard";

{
  /* <CardOrderDetail product={product} /> */
}
const OrderSection: React.FC = () => {
  const { orderedProducts } = useSelector<RootState>(
    (store) => store.orderSlice
  ) as orderSliceInitialStateInterface;
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
        Orders
      </Typography>
      <Stack flexDirection={"column"}>
        {orderedProducts.map((cartitem) => {
          return (
            <OrderedCard
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

export default OrderSection;
