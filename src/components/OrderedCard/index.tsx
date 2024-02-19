import React from "react";
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
  Stack,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { productCardI } from "../../Redux/ProductsSlice/modules/initialState";
import { cartDataInterface } from "../../Redux/CartSlice/module/initialState";
import ProductCartCalculation from "../ProductCartCalculation";
import CardOrderDetail from "../CardOrderDetail";
import { OrderedProductInterface } from "../../Redux/OrderSlice/module/initialState";

interface componentInterface {
  product: productCardI & OrderedProductInterface;
}

const OrderedCard: React.FC<componentInterface> = ({ product }) => {
  const {
    name,
    description,
    category,
    subcategory,
    brand,
    price,
    quantityAvailable,
    image,
    averageRating,
    totalRatings,
    comments,
    _id,
    productCount,
    productId,
    productTotal,
  } = product;

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
              alt={name}
            />
          </Stack>
          <CardContent sx={{ width: "100%" }}>
            <Stack>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Category: {category} | Subcategory: {subcategory}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Brand: {brand}
              </Typography>
              <Typography variant="body1">
                Average Rating: {averageRating} ({totalRatings} ratings)
              </Typography>
            </Stack>
            <CardOrderDetail product={product} />
          </CardContent>
        </Stack>
      </Card>
    </Grid>
  );
};

export default OrderedCard;
