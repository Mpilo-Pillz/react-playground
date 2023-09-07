import React, { useCallback, useMemo, useState } from "react";
import { useHttpClient } from "./useHttpClient";
import * as Yup from "yup";
import useStore from "../../../store/store";

// completely messed this up need to revisit
export interface MomoRequest {
  amount: string;
  cellphone: string;
  invoice?: any;
  invoiceId: string;
}
const useMomo = (amount: string, onSuccess: any, invoice: any) => {
  const userData = useStore((state) => state.userData);
  const [invoicePaidSuccessful, setInvoicePaidSuccessful] =
    useState<boolean>(false);

  const { sendRequest, error } = useHttpClient();

  const initialValues = useMemo(
    () => ({
      invoiceId: invoice._id ?? "",
      amount: amount ?? "",
      cellphone: "",
    }),
    [amount, invoice]
  );

  const validationSchema = Yup.object({
    amount: Yup.number().required("amount is Required"),
    cellphone: Yup.string()
      .min(10, "Please add a valid Swazi cellphone number")
      .required("Cellphone number is required!"),
  });

  const handleSubmit = useCallback(
    async ({ amount, cellphone }: Partial<MomoRequest>) => {
      const body = { amount, cellphone, invoiceId: invoice._id };

      try {
        const response = await sendRequest(
          `${import.meta.env.VITE_API_URL}/api/portal/invoice/${
            userData?.userId
          }`,
          "PATCH",
          JSON.stringify(body),
          {
            Authorization: `Bearer ${userData?.token}`,
            "Content-Type": "application/json",
          }
        );

        if (!!response.message) {
          setInvoicePaidSuccessful(true);
          onSuccess(true);
        }
        console.log(response);
      } catch (error) {
        console.error("Implement Payment Failed");
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
