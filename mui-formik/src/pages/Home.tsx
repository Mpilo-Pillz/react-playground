import React from "react";
import useProduct from "../components/product/useProduct";
import ProductCard from "../components/shared/ProductCard";
import { IProduct } from "../components/product/productTypes";

const Home = () => {
  const { products } = useProduct();
  console.log(products);

  return products?.products?.map((product: IProduct) => {
    return <ProductCard product={product} />;
  });
};

export default Home;
