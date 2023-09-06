import React, { useCallback, useMemo, useState } from "react";
import { useHttpClient } from "./useHttpClient";
import * as Yup from "yup";
import useStore from "../../../store/store";

export interface MomoRequest {
  amount: string;
  cellphone: string;
}
const useMomo = (amount: string) => {
  const userData = useStore((state) => state.userData);
  const [invoicePaidSuccessful, setInvoicePaidSuccessful] = useState(true);

  const { sendRequest, error } = useHttpClient();

  const initialValues = useMemo(
    () => ({
      amount: amount ?? "",
      cellphone: "",
    }),
    [amount]
  );

  const validationSchema = Yup.object({
    amount: Yup.number().required("amount is Required"),
    cellphone: Yup.string()
      .min(10, "Please add a valid Swazi cellphone number")
      .required("Cellphone number is required!"),
  });

  const handleSubmit = useCallback(
    async ({ amount, cellphone }: Partial<MomoRequest>) => {
      const body = { amount, cellphone };
      try {
        const response = await sendRequest(
          `${import.meta.env.VITE_API_URL}api/portal/invoice/${
            userData?.userId
          }`,
          "POST",
          JSON.stringify(body),
          {
            Authorization: `Bearer ${userData?.token}`,
            "Content-Type": "application/json",
          }
        );

        if (!!response.message) {
          setInvoicePaidSuccessful(true);
        }
        console.log(response);
      } catch (error) {
        console.error("Implement Invalid Login");
      }
    },
    []
  );

  return {
    handleSubmit,
    invoicePaidSuccessful,
    validationSchema,
    initialValues,
  };
};

export default useMomo;
