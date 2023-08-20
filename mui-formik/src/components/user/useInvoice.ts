import React, { useCallback, useEffect, useState } from "react";
import { useHttpClient } from "../shared/hooks/useHttpClient";
import { IInvoice } from "../invoice/invoiceTypes";

const useInvoice = () => {
  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  const { sendRequest, error } = useHttpClient();
  const getUserInvoices = useCallback(async () => {
    const addressResponse = await sendRequest(
      `${import.meta.env.VITE_API_URL}/api/portal/invoice/${
        JSON.parse(localStorage.getItem("userData") as string).userId
      }`,
      "GET",
      null,
      {
        // TODO: get token from central place
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userData") as string).token
        }`,
        "Content-Type": "application/json",
      }
    );

    setInvoices(addressResponse.addresses);
  }, [setInvoices, invoices]);

  useEffect(() => {
    getUserInvoices();
  }, [getUserInvoices]);
  return { invoices };
};

export default useInvoice;
