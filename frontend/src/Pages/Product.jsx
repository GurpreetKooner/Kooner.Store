import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrums/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";

export const Product = () => {
  const { all_products } = useContext(ShopContext);
  // console.log("Products are #######", all_products);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum props={product} />
      <ProductDisplay product={product}/>
    </div>
  );
};
