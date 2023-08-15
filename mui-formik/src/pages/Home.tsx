import React from "react";
import useProduct from "../components/product/useProduct";
import ProductCard from "../components/shared/ProductCard";
import { IProduct } from "../components/product/productTypes";

const Home = () => {
  const { products } = useProduct();

  return products?.products?.map((product: IProduct) => {
    return <ProductCard key={product._id} product={product} />;
  });
};

export default Home;
