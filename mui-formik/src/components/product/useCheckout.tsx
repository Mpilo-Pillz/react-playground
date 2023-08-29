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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { sendRequest, isSuccess } = useHttpClient();
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
      startDate: dayjs(), //tz('Africa/Kigali'),
    }),
    [initialSelectedAddressId]
  );
  const validationSchema = Yup.object({
    cellphone: Yup.string(),
    startDate: Yup.date().required("Please select a date"),
    // addresses: Yup.string().required("Please enter your street name"),
  });

  const handleClose = useCallback(() => {
    setIsOpen(false);
    navigate("/address"); //change to profile
  }, []);

  const handleSubmit = useCallback(
    async (values: ISubscription) => {
      // const body = { streetNumber, streetName, postalCode, region };

      const request = await sendRequest(
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

      console.log("requ-->", request);
      console.log("isSucc-->", isSuccess);

      setIsOpen(isSuccess);
    },
    [sendRequest, isSuccess, setIsOpen]
  );

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    userAddresses,
    selectedProduct,
    isOpen,
    handleClose,
  };
};

export default useCheckout;
