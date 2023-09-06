import { Field, Formik, useFormikContext } from "formik";
import React from "react";
import useMomo, { MomoRequest } from "../shared/hooks/useMomo";
import { Button, TextField } from "@mui/material";

interface Props {
  amount: string;
}
const MobileMoneyForm: React.FC<Props> = ({ amount }) => {
  const {
    handleSubmit,
    invoicePaidSuccessful,
    validationSchema,
    initialValues,
  } = useMomo(amount);

  return (
    <Formik<MomoRequest>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => {
        return (
          <>
            <Field
              sx={{ backgroundColor: "#fff", maxWidth: "350px" }}
              backgroundColor={"#fff"}
              name="amount"
              type="number"
              disabled
              label="Amount to pay"
              id="fullWidth"
              as={TextField}
              error={errors.amount}
              helperText={errors.amount && touched ? errors.amount : ""}
            />
            <Field
              sx={{ backgroundColor: "#fff", maxWidth: "350px" }}
              name="cellphone"
              type="number"
              label="MOMO Cellphone Number"
              id="fullWidth"
              as={TextField}
              error={errors.cellphone}
              helperText={errors.cellphone && touched ? errors.cellphone : ""}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "#fff", maxWidth: "350px" }}
              size="medium"
            >
              Pay
            </Button>
          </>
        );
      }}
    </Formik>
  );
};

export default MobileMoneyForm;
