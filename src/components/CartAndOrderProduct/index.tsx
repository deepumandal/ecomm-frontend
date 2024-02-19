import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { productSliceInitialStateI } from "../../Redux/ProductsSlice/modules/initialState";
import { GetFilteredDataApiService, apiResponse } from "../../api/apiService";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import ProductCartCalculation from "../ProductCartCalculation";
import { addToProductCacheReducer } from "../../Redux/ProductsSlice/slice";
import CardOrderDetail from "../CardOrderDetail";

interface pageProps {
  productCount: number;
  productId: string;
  productTotal: number;
  OrderId?: string;
  ExpectedDelivery?: string;

  type: "Cart" | "Order";
}
let isFirst: boolean = true;
const CartAndOrderProduct: React.FC<pageProps> = ({
  type,
  productCount,
  productId,
  productTotal,
  ExpectedDelivery,
  OrderId,
}) => {
  const { productCache } = useSelector<RootState>(
    (store) => store.productSlice
  ) as productSliceInitialStateI;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    isFirst &&
      (async function () {
        const response: apiResponse = await GetFilteredDataApiService({
          _id: productId,
        });

        dispatch(addToProductCacheReducer(response.data[0]));
      })();
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <Stack
          sx={{
            flexDirection: "row",
          }}
        >
          <Stack
            sx={{
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "200px",
                height: "auto",
                margin: "auto",
              }}
              image={
                // image
                "https://cdn1.smartprix.com/rx-iDzR5uMEd-w280-h280/tecno-megabook-t1-la.webp"
              }
              alt={productCache[productId]?.name}
            />
          </Stack>
          <CardContent sx={{ width: "100%" }}>
            <Stack>
              <Typography gutterBottom variant="h6" component="div">
                {productCache[productId]?.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {productCache[productId]?.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Category: {productCache[productId]?.category} | Subcategory:{" "}
                {productCache[productId]?.subcategory}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Brand: {productCache[productId]?.brand}
              </Typography>
              <Typography variant="body1">
                Average Rating: {productCache[productId]?.averageRating} (
                {productCache[productId]?.totalRatings} ratings)
              </Typography>
            </Stack>
            {type == "Order" ? (
              <CardOrderDetail ExpectedDelivery={ExpectedDelivery as string} />
            ) : (
              <ProductCartCalculation
                price={productCache[productId]?.price}
                productCount={productCount}
              />
            )}
          </CardContent>
        </Stack>
      </Card>
    </Grid>
  );
};

export default CartAndOrderProduct;
