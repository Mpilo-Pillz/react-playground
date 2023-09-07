import { Field, Formik, Form } from "formik";
import React from "react";
import useMomo, { MomoRequest } from "../shared/hooks/useMomo";
import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { ObjectSchema } from "yup";

interface Props {
  amount: string;
  handleSubmit: any;

  validationSchema: ObjectSchema<{
    amount: number;
    cellphone: string;
  }>;
  initialValues: MomoRequest;
}
const MobileMoneyForm: React.FC<Props> = ({
  handleSubmit,

  validationSchema,
  initialValues,
}) => {
  return (
    <Formik<MomoRequest>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => {
        return (
          <Form>
            <Box display={"flex"} flexDirection={"column"}>
              <Field
                sx={{ backgroundColor: "#fff", maxWidth: "350px", my: 1 }}
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
                sx={{ backgroundColor: "#fff", maxWidth: "350px", my: 1 }}
                name="cellphone"
                type="number"
                label="MOMO Cellphone Number"
                id="fullWidth"
                as={TextField}
                error={errors.cellphone}
                helperText={errors.cellphone && touched ? errors.cellphone : ""}
              />
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ color: "#fff", maxWidth: "350px", my: 1 }}
                size="medium"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Pay
              </LoadingButton>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MobileMoneyForm;
