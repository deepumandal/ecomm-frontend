export interface productCard {
  id: string;
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
  products: productCard[];
}

export const productsInitialState: productSliceInitialStateI = {
  loading: false,
  message: "",
  products: [],
  status: true,
};
