import React, { useEffect, useState } from "react";
import useProduct from "../components/product/useProduct";
import ProductCard from "../components/shared/ProductCard";
import { IProduct } from "../components/product/productTypes";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/joy";

const Home = () => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} justifyItems={"center"}>
        {products?.products?.map((product: IProduct) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </Grid>
    </Container>
  );
};

export default Home;
