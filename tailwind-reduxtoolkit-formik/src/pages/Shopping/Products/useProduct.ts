import { useCallback } from "react";
import { useQuery } from "react-query";
import { useHttpClient } from "../../../hooks/useHttpClient";

const useProduct = () => {
  const { sendRequest } = useHttpClient();

  const getProducts = useCallback(async () => {
    const productResponse = await sendRequest(
      `${
        import.meta.env.VITE_API_URL
      }/api/portal/products/get-products?pageNumber=1`
    );

    return productResponse.products;
  }, []);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery("products", getProducts);

  return {
    error,
    getProducts,
    isLoading,
    products,
  };
};

export default useProduct;
