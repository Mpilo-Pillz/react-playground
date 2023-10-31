import { useCallback, useState } from "react";
import { useProductStore } from "../../store/store";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import useShared from "../shared/hooks/useShared";
import { ProductResponse } from "./productTypes";

const useProduct = () => {
  const { sendRequest, error, isLoading } = useHttpClient();
  const [products, setProducts] = useState<ProductResponse>();
  const [selectedProduct, setSelectedProductLocal] = useState({});
  const { setSelectedProduct } = useProductStore();
  const { navigate } = useShared();

  const getProducts = useCallback(async () => {
    const productResponse = await sendRequest(
      `${
        import.meta.env.VITE_API_URL
      }/api/portal/products/get-products?pageNumber=1`
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
    isLoading,
    // selectedProduct,
  };
};

export default useProduct;
