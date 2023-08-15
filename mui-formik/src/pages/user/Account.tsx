import React from "react";
import InvoiceItem from "../../components/invoice/invoiceItem";
import { IInvoice } from "../../components/invoice/invoiceTypes";
import useInvoice from "../../components/user/useInvoice";

const Account = () => {
  const { invoices } = useInvoice();

  return invoices.map((invoice: IInvoice) => {
    return <InvoiceItem invoice={invoice} />;
  });
};

export default Account;
