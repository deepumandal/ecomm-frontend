export interface filterSliceInitialStateI {
  category?: string;
  subcategory?: string;
  brand?: string;
  averageRating?: number;
  avgtype?: string;
  name?: string;
  querry?: string;
  minPrice?: string;
  maxPrice?: string;
  _id?:string
}

export const filterSliceInitialState: filterSliceInitialStateI = {};
