import React, { useEffect } from "react";
import useProduct from "./useProduct";
import useAddress from "../user/useAddress";

const useCheckout = () => {
  const { selectedProduct } = useProduct();
  const { getUserAddresses, addresses } = useAddress();

  useEffect(() => {
    getUserAddresses();
  }, []);

  return {
    selectedProduct,
    addresses,
  };
};

export default useCheckout;
