export interface userDataInterface {
  email: string;
  name: string;
  token: string;
  userId: string;
}

export interface userSliceInitialStateInterface {
  loading: boolean;
  status: boolean;
  message: string;
  userData: userDataInterface;
}

export const userSliceInitialState: userSliceInitialStateInterface = {
  loading: false,
  message: "",
  status: false,
  userData: {
    email: "",
    name: "",
    token: "",
    userId: "",
  },
};
