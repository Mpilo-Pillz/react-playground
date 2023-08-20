import React, { useCallback, useEffect, useMemo } from "react";
import useProduct from "./useProduct";
import useAddress from "../user/useAddress";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { useAddressStore } from "../../store/store";

const useCheckout = () => {
  const { sendRequest } = useHttpClient();
  const { userAddresses }: any = useAddressStore();
  const initialSelectedAddressId =
    userAddresses?.addresses?.length > 0 ? userAddresses?.addresses[0].id : "";

  const initialValues = useMemo(
    () => ({
      cellphone: "",
      address: initialSelectedAddressId,
    }),
    [initialSelectedAddressId]
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
    userAddresses,
  };
};

export default useCheckout;
