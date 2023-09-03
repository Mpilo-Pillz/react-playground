import React from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useShared from "../shared/hooks/useShared";
import { Field, Form, useFormikContext } from "formik";
import { Region } from "../../enum";
import { IAddress } from "./types";

interface Props {
  errorResponse?: string;
  responseData: { streetName: string };
}
const AddressForm: React.FC<Props> = ({ errorResponse, responseData }) => {
  const { navigate } = useShared();
  const { isSubmitting, errors, touched } =
    useFormikContext<Partial<IAddress>>();

  const buttonColor =
    isSubmitting || !!errors.streetName || !!errors.postalCode || !!errors.town
      ? "#f6f6f6"
      : "#0E2954";

  return (
    <Form>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        <Grid mt={16} container spacing={3} flexDirection={"column"}>
          {!!errorResponse && (
            <Alert severity="error">
              Couldnt add Address. Please try again
            </Alert>
          )}

          {!!responseData.streetName && (
            <Alert severity="success">Address added Successfully</Alert>
          )}

          <Grid item>
            <Typography textAlign={"center"} variant="h3">
              Enter Your Address
            </Typography>
          </Grid>
          <Grid item>
            <Typography textAlign={"center"}>
              Please enter your address details below to verify your account
            </Typography>
          </Grid>
          <Grid item>
            <Field
              name="streetNumber"
              fullWidth
              label="Street Number"
              id="fullWidth"
              as={TextField}
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              name="streetName"
              fullWidth
              label="Street Name"
              id="fullWidth"
              error={errors.streetName}
              helperText={errors.streetName && touched ? errors.streetName : ""}
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              name="town"
              fullWidth
              label="Town"
              id="fullWidth"
              error={errors.town}
              helperText={errors.town && touched ? errors.town : ""}
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              type="text"
              name="postalCode"
              fullWidth
              label="Postal Code"
              id="fullWidth"
              error={errors.postalCode}
              helperText={errors.postalCode && touched ? errors.postalCode : ""}
            />
          </Grid>
          <Grid item>
            <Field
              as={Select}
              type="select"
              name="region"
              fullWidth
              label="Region"
              id="fullWidth"
            >
              <MenuItem value={Region.HHOHHO}>{Region.HHOHHO}</MenuItem>
              <MenuItem value={Region.LUBOMBO}>{Region.LUBOMBO}</MenuItem>
              <MenuItem value={Region.MANZINI}>{Region.MANZINI}</MenuItem>
              <MenuItem value={Region.SHISELWENI}>{Region.SHISELWENI}</MenuItem>
            </Field>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              style={{ backgroundColor: buttonColor }}
            >
              Add Address
            </Button>
            <Box textAlign={"center"}>
              <Link
                sx={{ mt: 2 }}
                component="button"
                variant="body2"
                onClick={() => {
                  navigate("/");
                }}
              >
                Go Back
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

export default AddressForm;
