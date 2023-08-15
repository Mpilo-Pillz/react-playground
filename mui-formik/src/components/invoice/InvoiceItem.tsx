import { Card, CardContent, Typography } from "@mui/joy";
import React from "react";
import { IInvoice } from "./invoiceTypes";

interface Props {
  invoice: IInvoice;
}
const InvoiceCard: React.FC<Props> = ({ invoice }) => {
  return (
    <Card variant="solid" sx={{ m: 2 }}>
      <CardContent>
        <Typography level="title-md" textColor="inherit">
          Service Type
        </Typography>
        <Typography textColor="inherit">{invoice.serviceType}</Typography>
        <Typography level="title-md" textColor="inherit">
          Date
        </Typography>
        <Typography textColor="inherit">{invoice.date}</Typography>
        <Typography level="title-md" textColor="inherit">
          Usage
        </Typography>
        <Typography textColor="inherit">{invoice.usage}</Typography>
        <Typography level="title-md" textColor="inherit">
          Charge
        </Typography>
        <Typography textColor="inherit">{invoice.charge}</Typography>
      </CardContent>
    </Card>
  );
};

export default InvoiceCard;
