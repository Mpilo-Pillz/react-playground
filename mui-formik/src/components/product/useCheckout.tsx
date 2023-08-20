import React, { useCallback, useEffect, useMemo } from "react";
import useProduct from "./useProduct";
import useAddress from "../user/useAddress";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import useStore, { useAddressStore, useProductStore } from "../../store/store";
import dayjs from "dayjs";
import { ISubscription } from "./productTypes";

const useCheckout = () => {
  const { sendRequest } = useHttpClient();
  const { userAddresses }: any = useAddressStore();
  const selectedProduct = useProductStore(
    (state: any) => state.selectedProduct
  );
  const initialSelectedAddressId =
    userAddresses?.addresses?.length > 0 ? userAddresses?.addresses[0].id : "";
  const userData = useStore((state) => state.userData);

  const initialValues = useMemo(
    () => ({
      cellphone: "",
      address: initialSelectedAddressId,
      startDate: dayjs(), //tz('Africa/Kigali'),
    }),
    [initialSelectedAddressId]
  );
  const validationSchema = Yup.object({
    cellphone: Yup.string(),
    startDate: Yup.date().required("Please select a date"),
    // addresses: Yup.string().required("Please enter your street name"),
  });
  const handleSubmit = useCallback(
    async (values: ISubscription) => {
      // const body = { streetNumber, streetName, postalCode, region };

      await sendRequest(
        `${import.meta.env.VITE_API_URL}/api/portal/subscription/${
          userData?.userId
        }/subscribe`,
        "POST",
        JSON.stringify(values),

        {
          // TODO: get token from central place
          Authorization: `Bearer ${userData?.token}`,
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
    selectedProduct,
  };
};

export default useCheckout;
