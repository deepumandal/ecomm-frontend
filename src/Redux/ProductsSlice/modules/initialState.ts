export interface productCardI {
  _id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
  quantityAvailable: number;
  image: string;
  averageRating: number;
  totalRatings: number;
  comments: [
    {
      userId: string;
      username: string;
      comment: string;
      rating: number;
      timestamp: string;
    }
  ];
}
export interface productSliceInitialStateI {
  loading: boolean;
  message: string;
  status: boolean;
  products: productCardI[];
  productCache: {
    [key: string]: productCardI; // optimised
  };
}

export const productsInitialState: productSliceInitialStateI = {
  loading: false,
  message: "",
  products: [],
  productCache: {},
  status: true,
};
