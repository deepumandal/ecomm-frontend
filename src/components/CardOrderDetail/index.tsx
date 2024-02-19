import { Stack, Typography } from "@mui/material";
import React from "react";

interface componentInterface {
  ExpectedDelivery: string;
}
const CardOrderDetail: React.FC<componentInterface> = ({
  ExpectedDelivery,
}) => {
  return (
    <Stack
      margin={1}
      flexDirection={"column"}
      alignItems={"flex-end"}
      justifyContent={"flex-end"}
    >
      {" "}
      CardOrderDetail:{" "}
      {Date.now() >= parseInt(ExpectedDelivery) ? (
        <Typography
          sx={{
            color: "green",
          }}
        >
          Order Delivered
        </Typography>
      ) : (
        <Typography
          sx={{
            color: "red",
          }}
        >
          Dispatched
        </Typography>
      )}
    </Stack>
  );
};

export default CardOrderDetail;
