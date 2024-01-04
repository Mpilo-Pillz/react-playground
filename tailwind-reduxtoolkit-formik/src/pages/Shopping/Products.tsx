import React from "react";
import ProductCard from "../../components/Shopping/ProductCard";

const Products = () => {
  return (
    <ProductCard
      src={
        "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmVzfGVufDB8fDB8fHww"
      }
      alt={"ear phones"}
      productName={"Head sets"}
      price={699.99}
      buttonText={"Subscribe"}
    />
  );
};

export default Products;
