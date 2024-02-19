import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import {
  AddressInterface,
  checkOuSliceInitialStateInterface,
} from "../../Redux/CheckOutSlice/module/intialState";
import { onChangeCheckoutReducer } from "../../Redux/CheckOutSlice/slice";

export default function AddressForm() {
  const { address } = useSelector<RootState>(
    (store) => store.CheckoutSlice
  ) as checkOuSliceInitialStateInterface;

  const dispatch = useDispatch<AppDispatch>();
  const { firstName, addressline, city, country, lastName, state, zipcode } =
    address;

  const onChange = ({
    key,
    value,
  }: {
    key: keyof AddressInterface;
    value: string;
  }) => {
    dispatch(
      onChangeCheckoutReducer({
        address: {
          ...address,
          [key]: value,
        },
      })
    );
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={firstName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "firstName",
                value: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "lastName",
                value: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line "
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            defaultValue={addressline}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "addressline",
                value: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            defaultValue={city}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "city",
                value: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            defaultValue={state}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "state",
                value: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            defaultValue={zipcode}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "zipcode",
                value: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            defaultValue={country}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "country",
                value: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
