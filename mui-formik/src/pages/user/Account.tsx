import React, { useEffect } from "react";
import InvoiceItem from "../../components/invoice/InvoiceItem";
import { IInvoice } from "../../components/invoice/invoiceTypes";
import useInvoice from "../../components/user/useInvoice";
import { Typography } from "@mui/material";

const Account = () => {
  const { invoices, getUserInvoices } = useInvoice();

  useEffect(() => {
    getUserInvoices();
  }, []);

  return (
    <>
      <Typography variant="h4" textAlign={"center"} margin={3}>
        My Bills
      </Typography>
      {invoices.map((invoice: IInvoice) => {
        return <InvoiceItem invoice={invoice} />;
      })}
    </>
  );
};

export default Account;
