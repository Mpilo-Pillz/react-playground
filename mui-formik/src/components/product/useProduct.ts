import { useCallback, useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { IProduct, ProductResponse } from "./productTypes";

const useProduct = () => {
  const { sendRequest, error } = useHttpClient();
  const [products, setProducts] = useState<ProductResponse>();

  const getProducts = useCallback(async () => {
    const productResponse = await sendRequest(
      `http://localhost:8080/api/portal/products/get-products?pageNumber=1`
    );

    setProducts(productResponse);
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return {
    error,
    getProducts,
    products,
  };
};

export default useProduct;
