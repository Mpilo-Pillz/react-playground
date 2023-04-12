import { useCallback, useMemo } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { Address } from "./types";

const useAddress = () => {
  const { sendRequest, error } = useHttpClient();

  const initialValues = useMemo(
    () => ({
      streetNumber: "",
      streetName: "",
      postalCode: "",
      region: "",
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
    }: Partial<Address>) => {
      const body = { streetNumber, streetName, postalCode, region };

      await sendRequest(
        "http://localhost:8080/api/portal/users/address",
        "POST",
        JSON.stringify(body),
        {
          "Content-Type": "application/json",
        }
      );
    },
    [sendRequest]
  );

  return { initialValues, validationSchema, handleSubmit, error };
};

export default useAddress;
