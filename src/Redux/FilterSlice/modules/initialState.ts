export interface filterSliceInitialStateI {
  category?: string;
  subcategory?: string;
  brand?: string;
  averageRating?: number;
  avgtype?: "gt" | "lte";
  name?: string;
  querry?: string;
  minPrice?: number;
  maxPrice?: number;
}

export const filterSliceInitialState: filterSliceInitialStateI = {};
