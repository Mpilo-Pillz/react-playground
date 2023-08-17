import { useCallback, useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { IProduct, ProductResponse } from "./productTypes";
import useShared from "../shared/hooks/useShared";
import { productStore } from "../../store/store";

const useProduct = () => {
  const { sendRequest, error } = useHttpClient();
  const [products, setProducts] = useState<ProductResponse>();
  const [selectedProduct, setSelectedProductLocal] = useState({});
  const { setSelectedProduct } = productStore();
  const { navigate } = useShared();

  const getProducts = useCallback(async () => {
    const productResponse = await sendRequest(
      `http://localhost:8080/api/portal/products/get-products?pageNumber=1`
    );

    setProducts(productResponse);
  }, [setProducts]);

  const purchaseProduct = useCallback(
    (product: any) => {
      console.log("==========Product-------------", product);
      setSelectedProduct(product);
      setSelectedProductLocal(product);
      navigate("/checkout");
    },
    [setSelectedProduct, selectedProduct, setSelectedProductLocal, navigate]
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log("selectedProd", selectedProduct);

  return {
    error,
    getProducts,
    products,
    purchaseProduct,
    selectedProduct,
    // selectedProduct,
  };
};

export default useProduct;
