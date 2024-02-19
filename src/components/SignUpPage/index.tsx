import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/ReduxStore";
import {
  setUserDataReducer,
  setUserErrorReducer,
  setUserLoadingReducer,
} from "../../Redux/UserSlice/slice";
import { SignUpApiService, apiResponse } from "../../api/apiService";
import { Route, useNavigate } from "react-router-dom";

interface pageProps {
  toggle: () => void;
}

const SignUpPage: React.FC<pageProps> = ({ toggle }) => {
  const dispatch = useDispatch<AppDispatch>();
  const route = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      name: `${data.get("firstName")} ${data.get("lastName")}`,
    });
    if (!data.get("email")) {
      alert("Please Enter Email");
      return;
    }
    if (!data.get("password")) {
      alert("Please Enter password");
      return;
    }
    if (!data.get("firstName")) {
      alert("Please Enter firstName");
      return;
    }
    if (!data.get("lastName")) {
      alert("Please Enter lastName");
      return;
    }

    dispatch(setUserLoadingReducer());

    const response: apiResponse = await SignUpApiService({
      email: data.get("email") as string,
      password: data.get("password") as string,
      name: `${data.get("firstName") as string} ${
        data.get("lastName") as string
      }`,
    });

    if (response.status) {
      dispatch(setUserDataReducer(response));
      route("/");
    } else {
      dispatch(setUserErrorReducer(response));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={toggle} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
