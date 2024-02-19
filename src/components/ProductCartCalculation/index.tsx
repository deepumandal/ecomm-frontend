import { Stack, Typography } from "@mui/material";
import React from "react";

interface componentInterface {
  price: number;
  productCount: number;
}
const ProductCartCalculation: React.FC<componentInterface> = ({
  price,
  productCount,
}) => {
  return (
    <Stack
      margin={1}
      flexDirection={"column"}
      alignItems={"flex-end"}
      justifyContent={"flex-end"}
    >
      <Stack flexDirection={"row"} gap={1}>
        <Typography
          variant="body2"
          sx={{
            width: "fit-content",
            fontWeight: 700,
          }}
        >
          Per Item Price:{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "red",
          }}
        >
          ${price?.toFixed(2)}
        </Typography>
        /
        <Typography
          variant="body2"
          sx={{
            width: "fit-content",
            fontWeight: 700,
          }}
        >
          No of Item:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "red",
          }}
        >
          {productCount}
        </Typography>
      </Stack>

      <Stack flexDirection={"row"} gap={1}>
        <Typography
          variant="body2"
          sx={{
            width: "fit-content",
            fontWeight: 700,
          }}
        >
          Total:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "red",
          }}
        >
          {productCount * +price?.toFixed(2)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductCartCalculation;
