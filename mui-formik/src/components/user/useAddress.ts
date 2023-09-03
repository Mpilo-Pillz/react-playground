import { useCallback, useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { IAddress } from "./types";
import { Region } from "../../enum";
import useStore, { useAddressStore } from "../../store/store";

const useAddress = () => {
  const userData = useStore((state) => state.userData);

  const { sendRequest, error } = useHttpClient();
  const [addresses, setAddress] = useState<IAddress[]>([]);
  const [responseData, setResponseData] = useState<any>({});
  const { setUserAddresses } = useAddressStore();

  const initialValues = useMemo(
    () => ({
      streetNumber: "",
      streetName: "",
      postalCode: "",
      region: Region.HHOHHO,
      town: "",
    }),
    []
  );

  const validationSchema = Yup.object({
    streetNumber: Yup.string(),
    streetName: Yup.string().required("Please enter your street name"),
    postalCode: Yup.string().required("Please enter your postal code"),
    town: Yup.string().required("Please enter your town"),
    region: Yup.string().required(
      "Please enter either Highveld, Lowveld, Middleveld or Hhohho"
    ),
  });

  const handleSubmit = useCallback(
    async (
      { streetNumber, streetName, postalCode, region }: Partial<IAddress>,
      { resetForm }: any
    ) => {
      const body = { streetNumber, streetName, postalCode, region };

      const response = await sendRequest(
        `${import.meta.env.VITE_API_URL}/api/portal/address/create-address`,
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

      if (response.address.streetName) {
        setResponseData(response.address);
        resetForm();
      }
    },
    [sendRequest, setResponseData]
  );

  const getUserAddresses = useCallback(async () => {
    const addressResponse = await sendRequest(
      `${import.meta.env.VITE_API_URL}/api/portal/address/${userData?.userId}`,
      "GET",
      null,
      {
        // TODO: get token from central place
        Authorization: `Bearer ${userData?.token}`,
        "Content-Type": "application/json",
      }
    );

    setAddress(addressResponse);
    setUserAddresses(addressResponse);
  }, []);

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    error,
    getUserAddresses,
    addresses,
    responseData,
  };
};

export default useAddress;
