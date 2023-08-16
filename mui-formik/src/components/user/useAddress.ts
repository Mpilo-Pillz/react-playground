import { useCallback, useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { IAddress } from "./types";
import { Region } from "../../enum";
import useStore from "../../store/store";

const useAddress = () => {
  const userData = useStore((state) => state.userData);

  const { sendRequest, error } = useHttpClient();
  const [addresses, setAddress] = useState<IAddress[]>([]);

  const initialValues = useMemo(
    () => ({
      streetNumber: "",
      streetName: "",
      postalCode: "",
      region: Region.HHOHHO,
    }),
    []
  );

  const validationSchema = Yup.object({
    streetNumber: Yup.string(),
    streetName: Yup.string().required("Please enter your street name"),
    postalCode: Yup.string().required("Please enter your email"),
    region: Yup.string().required(
      "Please enter either Highveld, Lowveld, Middleveld or Hhohho"
    ),
  });

  const handleSubmit = useCallback(
    async ({
      streetNumber,
      streetName,
      postalCode,
      region,
    }: Partial<IAddress>) => {
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

  const getUserAddresses = useCallback(async () => {
    const addressResponse = await sendRequest(
      `http://localhost:8080/api/portal/address/${userData?.userId}`,
      "GET",
      null,
      {
        // TODO: get token from central place
        Authorization: `Bearer ${userData?.token}`,
        "Content-Type": "application/json",
      }
    );

    setAddress(addressResponse.addresses);
  }, []);

  // useEffect(() => {
  //   getUserAddresses();
  // }, [getUserAddresses]);

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    error,
    getUserAddresses,
    addresses,
  };
};

export default useAddress;
