import {
  Box,
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import Review from "../Review";
import { cartSliceInitialStateInterface } from "../../Redux/CartSlice/module/initialState";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { OrderedProductInterface } from "../../Redux/OrderSlice/module/initialState";
import {
  setOrderErrorReducer,
  setOrderLoadingReducer,
  setOrdertDataReducer,
} from "../../Redux/OrderSlice/slice";
import {
  ClearCartDataApiService,
  OrderProductApiService,
  apiResponse,
} from "../../api/apiService";
import {
  setCartDataReducer,
  setCartErrorReducer,
  setCartLoadingReducer,
} from "../../Redux/CartSlice/slice";
import { steps } from "../../utils/constants";
import { userSliceInitialStateInterface } from "../../Redux/UserSlice/module/initialState";

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const CheckoutData: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [orderID, setorderID] = useState<string>("");

  const { cartData } = useSelector<RootState>(
    (store) => store.cartSlice
  ) as cartSliceInitialStateInterface;

  const { userData } = useSelector<RootState>(
    (store) => store.UserSlice
  ) as userSliceInitialStateInterface;

  const dispatch = useDispatch<AppDispatch>();

  const handleCartOrder = async () => {
    const OrderId = `ORD_${Date.now()}`;
    setorderID(orderID);
    const ExpectedDelivery = `${Date.now() + 48 * 60 * 60 * 1000}`;

    const ProductDetails: OrderedProductInterface[] = cartData.map((cart) => ({
      ...cart,
      ExpectedDelivery,
      OrderId,
    }));

    dispatch(setOrderLoadingReducer());
    const response: apiResponse = await OrderProductApiService({
      payload: {
        userId: userData.userId,
        requestOrders: ProductDetails,
      },
      headers: {
        Authorization: userData.token,
      },
    });
    if (response.status) {
      dispatch(setOrdertDataReducer(response));
    } else {
      dispatch(setOrderErrorReducer(response));
    }
    // clear cart data as item purchaged
    dispatch(setCartLoadingReducer());
    const clearCartResponse: apiResponse = await ClearCartDataApiService({
      userId: userData.userId,
      headers: {
        Authorization: userData.token,
      },
    });

    if (clearCartResponse.status) {
      dispatch(setCartDataReducer(clearCartResponse));
    } else {
      dispatch(setCartErrorReducer(clearCartResponse));
    }
  };
  const handleNext = async () => {
    // product order api call
    if (activeStep === steps.length - 1) {
      await handleCartOrder();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Stack
      sx={{
        width: "45%",
      }}
      margin={1}
    >
      <Typography variant="h5" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* steps */}

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <Typography variant="subtitle1">
            Your order number is {orderID}. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Stack>
  );
};

export default CheckoutData;
