import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { productCardI } from "../../Redux/ProductsSlice/modules/initialState";
import { AppDispatch } from "../../Redux/ReduxStore";
import { useDispatch } from "react-redux";
import {
  setCartDataReducer,
  setCartErrorReducer,
  setCartLoadingReducer,
} from "../../Redux/CartSlice/slice";
import { AddtoCartApiService, apiResponse } from "../../api/apiService";

interface componentInterface {
  product: productCardI;
  productCount: number;
}

const ProductCard: React.FC<componentInterface> = ({
  product,
  productCount,
}) => {
  const { name, price, image, averageRating, _id } = product;

  const dispatch = useDispatch<AppDispatch>();
  // addtoCartReducer

  const handleDecrement = async () => {
    dispatch(setCartLoadingReducer());
    const response: apiResponse = await AddtoCartApiService({
      productCount: productCount - 1,
      productId: _id,
      productTotal: (productCount + 1) * price,
    });
    if (response.status) {
      dispatch(setCartDataReducer(response));
    } else {
      dispatch(setCartErrorReducer(response));
    }
  };
  const handleIncrement = async () => {
    dispatch(setCartLoadingReducer());
    const response: apiResponse = await AddtoCartApiService({
      productCount: productCount + 1,
      productId: _id,
      productTotal: (productCount + 1) * price,
    });
    if (response.status) {
      dispatch(setCartDataReducer(response));
    } else {
      dispatch(setCartErrorReducer(response));
    }
  };

  return (
    <Card
      sx={{
        minHeight: "360px",
        height: "fit-content",
        width: "300px",
        margin: 1,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: "240px",
            height: "auto",
            margin: "auto",
          }}
          image={
            // image
            "https://cdn1.smartprix.com/rx-iDzR5uMEd-w280-h280/tecno-megabook-t1-la.webp"
          }
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1">Price: ${price.toFixed(2)}</Typography>
          <Typography variant="body1">
            Average Rating: {averageRating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {productCount > 0 ? (
          <>
            <IconButton aria-label="remove" onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1">{productCount}</Typography>
            <IconButton aria-label="add" onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </>
        ) : (
          <Button
            size="small"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleIncrement}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
