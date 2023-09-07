import { Card, CardContent } from "@mui/joy";
import React, { useCallback, useState } from "react";
import { IInvoice } from "./invoiceTypes";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Alert, Box, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import MobileMoneyForm from "./MobileMoneyForm";
import useMomo from "../shared/hooks/useMomo";

interface Props {
  invoice: IInvoice;
  setPaymentSuccessful: any;
}
const InvoiceCard: React.FC<Props> = ({ invoice, setPaymentSuccessful }) => {
  const {
    handleSubmit,
    invoicePaidSuccessful,
    validationSchema,
    initialValues,
  } = useMomo(invoice?.charge?.toString(), setPaymentSuccessful, invoice); // TODO: sned object only
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [toggleIsComingSoon, setToggleIsComingSoon] = useState<boolean>(false);

  const handleToggleIsComingSoon = useCallback(() => {
    setToggleIsComingSoon(!toggleIsComingSoon);
    setIsPaying(false);
  }, [setToggleIsComingSoon, toggleIsComingSoon]);

  const toggleIsPaying = useCallback(() => {
    setIsPaying(!isPaying);
    setToggleIsComingSoon(false);
  }, [setIsPaying, isPaying]);

  return (
    <Card variant="solid" sx={{ m: 2, minWidth: 275 }}>
      <CardContent>
        <Box display={"flex"}>
          <Typography variant="body1" fontWeight={"bold"}>
            Service Type:
          </Typography>{" "}
          <Typography marginLeft={2}>{invoice.serviceType}</Typography>
        </Box>
        <Box display={"flex"}>
          <Typography fontWeight={"bold"}>Date:</Typography>
          <Typography marginLeft={2}>
            {dayjs(invoice.date).format("dddd, MMMM D, YYYY")}
          </Typography>
        </Box>
        <Box display={"flex"}>
          <Typography fontWeight={"bold"}>Usage:</Typography>
          <Typography marginLeft={2}>{invoice.usage}</Typography>
        </Box>
        <Box display={"flex"}>
          <Typography fontWeight={"bold"}>Current Balance:</Typography>
          <Typography marginLeft={2}>E {invoice.charge}</Typography>
        </Box>
      </CardContent>
      {toggleIsComingSoon && (
        <Alert severity="info">This Payment Method is coming soon!</Alert>
      )}
      <CardActions>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
            <Button
              variant="contained"
              sx={{ color: "#fff" }}
              size="medium"
              fullWidth
              onClick={toggleIsPaying}
            >
              Pay With MoMo
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
            <Button
              color="secondary"
              variant="contained"
              sx={{ color: "#fff" }}
              size="medium"
              fullWidth
              onClick={handleToggleIsComingSoon}
            >
              Pay With Card
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
            <Button
              color="error"
              variant="contained"
              sx={{ color: "#fff" }}
              size="medium"
              fullWidth
              onClick={handleToggleIsComingSoon}
            >
              Pay Using EFT
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
            <Button
              color="success"
              variant="contained"
              sx={{ color: "#fff" }}
              size="medium"
              fullWidth
              onClick={handleToggleIsComingSoon}
            >
              Debit Order
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
            <Button
              color="warning"
              variant="contained"
              sx={{ color: "#fff" }}
              size="medium"
              fullWidth
              onClick={handleToggleIsComingSoon}
            >
              Send PoP
            </Button>
          </Grid>
        </Grid>
      </CardActions>
      {isPaying && (
        <MobileMoneyForm
          handleSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
          amount={invoice.charge.toString()}
        />
      )}
    </Card>
  );
};

export default InvoiceCard;
