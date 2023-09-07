import React, { useEffect, useState } from "react";
import InvoiceItem from "../../components/invoice/InvoiceItem";
import { IInvoice } from "../../components/invoice/invoiceTypes";
import useInvoice from "../../components/user/useInvoice";
import { Container, Typography } from "@mui/material";
import RequestResponseScreen from "../../components/shared/RequestResponseScreen";

const Account = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState<boolean>(false);
  const { invoices, getUserInvoices } = useInvoice();

  useEffect(() => {
    getUserInvoices();
  }, []);

  return (
    <>
      <Typography variant="h4" textAlign={"center"} margin={3}>
        My Bills
      </Typography>
      {paymentSuccessful ? (
        <Container sx={{ mt: 3, maxWidth: "400px" }}>
          <RequestResponseScreen
            heading={"Payment Successful 🎉"}
            bodyText={"Payment Completed Successfully ✅"}
            navigationLink={"/"}
          />
        </Container>
      ) : invoices.length === 0 ||
        invoices.every((allInvoices: IInvoice) => allInvoices.isPaid) ? (
        <Container sx={{ mt: 3, maxWidth: "400px" }}>
          <RequestResponseScreen
            heading={"No outstanding Bills Found"}
            bodyText={"No Bills linked to account please subscribe 📲"}
            navigationLink={"/"}
          />
        </Container>
      ) : (
        invoices
          .filter((allInvoices: IInvoice) => !allInvoices.isPaid)
          .map((invoice: IInvoice) => {
            return (
              <InvoiceItem
                key={invoice._id}
                invoice={invoice}
                setPaymentSuccessful={setPaymentSuccessful}
              />
            );
          })
      )}
    </>
  );
};

export default Account;
