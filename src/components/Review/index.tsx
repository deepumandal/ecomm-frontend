import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import {
  cartDataInterface,
  cartSliceInitialStateInterface,
} from "../../Redux/CartSlice/module/initialState";
import {
  productCardI,
  productSliceInitialStateI,
} from "../../Redux/ProductsSlice/modules/initialState";
import { checkOuSliceInitialStateInterface } from "../../Redux/CheckOutSlice/module/intialState";

export default function Review() {
  const { address, payment } = useSelector<RootState>(
    (store) => store.CheckoutSlice
  ) as checkOuSliceInitialStateInterface;
  const { addressline, city, country, firstName, lastName, state, zipcode } =
    address;
  const { ExpiryDate, cardNumber, cardName } = payment;

  const { cartData } = useSelector<RootState>(
    (store) => store.cartSlice
  ) as cartSliceInitialStateInterface;

  const { products } = useSelector<RootState>(
    (store) => store.productSlice
  ) as productSliceInitialStateI;

  const product: (productCardI & cartDataInterface)[] = cartData.map((cart) => {
    const product = products.find((item) => item._id === cart.productId);

    return { ...product, ...cart };
  }) as (productCardI & cartDataInterface)[];

  const totalAmount = product.reduce((_, item) => {
    return _ + item.productCount * item.price;
  }, 0);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {product.map(
          ({
            name,
            description,
            price,
            productCount,
          }: productCardI & cartDataInterface) => (
            <ListItem key={name} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={name}
                secondary={`${description?.slice(0, 20)}...`}
              />
              <Typography variant="body2">
                {" "}
                {productCount} * {price}
              </Typography>
            </ListItem>
          )
        )}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "red" }}
          >
            {totalAmount}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
          <Typography gutterBottom>
            {[addressline, city, state, zipcode, country].join(", ")}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card type</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Visa</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardName}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardNumber}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiry date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{ExpiryDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
