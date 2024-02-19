import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import { orderSliceInitialStateInterface } from "../../Redux/OrderSlice/module/initialState";
import CartAndOrderProduct from "../CartAndOrderProduct";

const OrderSection: React.FC = () => {
  const { orderedProducts } = useSelector<RootState>(
    (store) => store.orderSlice
  ) as orderSliceInitialStateInterface;
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
        {orderedProducts?.map((orderedItem) => {
          const {
            ExpectedDelivery,
            OrderId,
            productCount,
            productId,
            productTotal,
          } = orderedItem;

          return (
            <CartAndOrderProduct
              key={orderedItem.productId}
              productCount={productCount}
              productId={productId}
              productTotal={productTotal}
              type="Order"
              ExpectedDelivery={ExpectedDelivery}
              OrderId={OrderId}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default OrderSection;
