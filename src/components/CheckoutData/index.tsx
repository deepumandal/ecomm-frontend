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
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import { cartSliceInitialStateInterface } from "../../Redux/CartSlice/module/initialState";
import { productSliceInitialStateI } from "../../Redux/ProductsSlice/modules/initialState";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import Review from "../Review";

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
const steps = ["Shipping address", "Payment details", "Review your order"];
const CheckoutData: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
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
            Your order number is #2001539. We have emailed your order
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
