import { useCallback, useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { IProduct, ProductResponse } from "./productTypes";
import useShared from "../shared/hooks/useShared";
import { useProductStore } from "../../store/store";

const useProduct = () => {
  const { sendRequest, error } = useHttpClient();
  const [products, setProducts] = useState<ProductResponse>();
  const [selectedProduct, setSelectedProductLocal] = useState({});
  const { setSelectedProduct } = useProductStore();
  const { navigate } = useShared();

  const getProducts = useCallback(async () => {
    const productResponse = await sendRequest(
      `http://localhost:8080/api/portal/products/get-products?pageNumber=1`
    );

    setProducts(productResponse);
  }, []);

  const purchaseProduct = useCallback((product: any) => {
    setSelectedProduct(product);
    setSelectedProductLocal(product);
    navigate("/checkout");
  }, []);

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
