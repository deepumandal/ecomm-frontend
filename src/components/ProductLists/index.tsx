import { Stack } from "@mui/material";
import React, { memo } from "react";
import SelectFilter from "../SelectFilter";
import { priceRangeI } from "../../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import { filterSliceInitialStateI } from "../../Redux/FilterSlice/modules/initialState";
import { CategoryLists } from "../../utils/CatSubcatBrands";
import CategoryFilter from "../Categoryfilter";
import SubCategoryFilter from "../SubCategoryFilter";
import { productSliceInitialStateI } from "../../Redux/ProductsSlice/modules/initialState";
import ProductCard from "../ProductCard";
import { cartSliceInitialStateInterface } from "../../Redux/CartSlice/module/initialState";

const ProductLists: React.FC = () => {
  const { products } = useSelector<RootState>(
    (store) => store.productSlice
  ) as productSliceInitialStateI;

  const { cartData } = useSelector<RootState>(
    (store) => store.cartSlice
  ) as cartSliceInitialStateInterface;
  return (
    <Stack
      sx={{
        width: "100%",
      }}
      flexDirection={"column"}
    >
      <Stack
        margin={1}
        flexDirection={"row"}
        justifyContent={"space-between"}
        gap={1}
      >
        {/* Category & subcategory filter */}
        <CategoryFilter />
        <SubCategoryFilter />
      </Stack>
      <Stack flexDirection={"row"} flexWrap={"wrap"}>
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              productCount={
                cartData.find((cart) => cart.productId == product._id)
                  ?.productCount || 0
              }
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default memo(ProductLists);
