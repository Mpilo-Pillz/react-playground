import React, { useCallback, useEffect, useMemo } from "react";
import useProduct from "./useProduct";
import useAddress from "../user/useAddress";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { addressStore } from "../../store/store";

const useCheckout = () => {
  const addresses = addressStore((state: any) => state.userAddresses);
  const { sendRequest } = useHttpClient();

  const initialValues = useMemo(
    () => ({
      cellphone: "",
      addresses: addresses,
    }),
    [addresses]
  );
  const validationSchema = Yup.object({
    cellphone: Yup.string(),
    // addresses: Yup.string().required("Please enter your street name"),
  });
  const handleSubmit = useCallback(
    async ({ streetNumber, streetName, postalCode, region }: Partial<any>) => {
      const body = { streetNumber, streetName, postalCode, region };

      await sendRequest(
        "http://localhost:8080/api/portal/address/create-address",
        "POST",
        JSON.stringify(body),
        {
          // TODO: get token from central place
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userData") as string).token
          }`,
          "Content-Type": "application/json",
        }
      );
    },
    [sendRequest]
  );

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    addresses,
  };
};

export default useCheckout;
