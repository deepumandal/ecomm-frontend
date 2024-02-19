export type AddressInterface = {
  firstName: string;
  lastName: string;
  addressline: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
};
export interface paymentsInterface {
  cardNumber: string;
  cardName: string;
  ExpiryDate: string;
  cvv: string;
}

export interface checkOuSliceInitialStateInterface {
  loading: boolean;
  status: boolean;
  message: string;
  address: AddressInterface;
  payment: paymentsInterface;
}

export const CheckoutInitialState: checkOuSliceInitialStateInterface = {
  address: localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address") as string)
    : {
        addressline: "Indranager, Bangalore",
        city: "Bangalore",
        country: "INDIA",
        firstName: "Deepak",
        lastName: "Mandal",
        state: "Karnataka",
        zipcode: "560075",
      },
  loading: false,
  message: "",
  payment: localStorage.getItem("payment")
    ? JSON.parse(localStorage.getItem("payment") as string)
    : {
        cardName: "Deepak Mandal",
        cardNumber: "1111 2222 3333",
        cvv: 123,
        ExpiryDate: "24/04",
      },
  status: false,
};
