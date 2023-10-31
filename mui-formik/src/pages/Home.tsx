import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { IProduct } from "../components/product/productTypes";
import useProduct from "../components/product/useProduct";
import CardSkeletonLoader from "../components/shared/CardSkeletonLoader";
import ProductCard from "../components/shared/ProductCard";

const Home = () => {
  const { products, getProducts, isLoading } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} justifyItems={"center"}>
        {isLoading
          ? Array.from({ length: 6 }).map(() => <CardSkeletonLoader />)
          : products?.products?.map((product: IProduct) => {
              return <ProductCard key={product._id} product={product} />;
            })}
      </Grid>
    </Container>
  );
};

export default Home;
