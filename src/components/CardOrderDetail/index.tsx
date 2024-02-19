import React from "react";
import { productCardI } from "../../Redux/ProductsSlice/modules/initialState";
import { cartDataInterface } from "../../Redux/CartSlice/module/initialState";
import { OrderedProductInterface } from "../../Redux/OrderSlice/module/initialState";

interface componentInterface {
  product: productCardI & cartDataInterface & OrderedProductInterface;
}
const CardOrderDetail: React.FC<componentInterface> = ({ product }) => {
  const { ExpectedDelivery } = product;
  return (
    <div>
      {" "}
      CardOrderDetail:{" "}
      {Date.now() >= parseInt(ExpectedDelivery)
        ? "Order Delivered"
        : "Dispatched/shipped"}
    </div>
  );
};

export default CardOrderDetail;
