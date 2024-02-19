import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import {
  setUserDataReducer,
  setUserErrorReducer,
  setUserLoadingReducer,
} from "../../Redux/UserSlice/slice";
import { SignInApiService, apiResponse } from "../../api/apiService";
import { userSliceInitialStateInterface } from "../../Redux/UserSlice/module/initialState";
import { useNavigate } from "react-router-dom";

interface pageProps {
  toggle: () => void;
}

const SignInPage: React.FC<pageProps> = ({ toggle }) => {
  const dispatch = useDispatch<AppDispatch>();

  const route = useNavigate();

  const { userData } = useSelector<RootState>(
    (store) => store.UserSlice
  ) as userSliceInitialStateInterface;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    if (!data.get("email")) {
      alert("Please Enter Email");
      return;
    }
    if (!data.get("password")) {
      alert("Please Enter password");
      return;
    }

    dispatch(setUserLoadingReducer());
    const response: apiResponse = await SignInApiService({
      email: data.get("email") as string,
      password: data.get("password") as string,
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link onClick={toggle} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;
