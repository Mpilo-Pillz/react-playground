import React, { useCallback, useEffect, useMemo, useState } from "react";
import useProduct from "./useProduct";
import useAddress from "../user/useAddress";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import useStore, { useAddressStore, useProductStore } from "../../store/store";
import dayjs from "dayjs";
import { ISubscription } from "./productTypes";
import useShared from "../shared/hooks/useShared";

const useCheckout = () => {
  const { sendRequest } = useHttpClient();
  const [subscriptionSuccessful, setSubscriptionSuccessful] =
    useState<boolean>(false);
  const { userAddresses }: any = useAddressStore();
  const { navigate } = useShared();
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
      startDate: dayjs(),
    }),
    [initialSelectedAddressId]
  );
  const validationSchema = Yup.object({
    cellphone: Yup.number().required("Please enter a valid Swazi number"),
    startDate: Yup.date().required("Please select a date"),
    // addresses: Yup.string().required("Please enter your street name"),
  });

  const handleClose = useCallback(() => {
    navigate("/address"); //change to profile
  }, []);

  const handleSubmit = useCallback(
    async (values: ISubscription) => {
      // const body = { streetNumber, streetName, postalCode, region };

      const response = await sendRequest(
        `${import.meta.env.VITE_API_URL}/api/portal/subscription/${
          userData?.userId
        }/subscribe`,
        "POST",
        JSON.stringify(values),

        {
          Authorization: `Bearer ${userData?.token}`,
          "Content-Type": "application/json",
        }
      );

      if (!!response.message) {
        setSubscriptionSuccessful(true);
      }
      console.log(response);
    },
    [sendRequest, setSubscriptionSuccessful]
  );

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    userAddresses,
    selectedProduct,
    subscriptionSuccessful,
    handleClose,
    navigate,
  };
};

export default useCheckout;
