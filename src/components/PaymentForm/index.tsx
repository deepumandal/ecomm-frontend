import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import {
  checkOuSliceInitialStateInterface,
  paymentsInterface,
} from "../../Redux/CheckOutSlice/module/intialState";
import { onChangeCheckoutReducer } from "../../Redux/CheckOutSlice/slice";

export default function PaymentForm() {
  const { payment } = useSelector<RootState>(
    (store) => store.CheckoutSlice
  ) as checkOuSliceInitialStateInterface;
  const { ExpiryDate, cardNumber, cvv, cardName } = payment;

  const dispatch = useDispatch<AppDispatch>();

  const onChange = ({
    key,
    value,
  }: {
    key: keyof paymentsInterface;
    value: string;
  }) => {
    dispatch(
      onChangeCheckoutReducer({
        payment: {
          ...payment,
          [key]: value,
        },
      })
    );
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "cardName",
                value: event.target.value,
              })
            }
            defaultValue={cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "cardNumber",
                value: event.target.value,
              })
            }
            defaultValue={cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "ExpiryDate",
                value: event.target.value,
              })
            }
            defaultValue={ExpiryDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "cvv",
                value: event.target.value,
              })
            }
            defaultValue={cvv}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
