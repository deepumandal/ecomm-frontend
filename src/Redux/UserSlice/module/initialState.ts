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
    // email: "dev.workwithdeepak@gmail.com",
    // name: "Deepak Mandal",
    // token:
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldi53b3Jrd2l0aGRlZXBha0BnbWFpbC5jb20iLCJuYW1lIjoiRGVlcGFrIE1hbmRhbCIsInVzZXJJZCI6IjY1ZDM5YWY1MzYzNGJkZmExNzllYWVjNyIsImlhdCI6MTcwODM3MTAyNSwiZXhwIjoxNzA4NDU3NDI1fQ.s5Tw7oNE6A9jcI0jOvsmNBlS2PLQED1xAlTbOzt4zZ8",
    // userId: "65d39af53634bdfa179eaec7",
  },
};
