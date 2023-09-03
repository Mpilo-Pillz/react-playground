import React from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import useShared from "../../shared/hooks/useShared";
import { Field, Form, useFormikContext } from "formik";
import { AuthRequest } from "../types";

interface Props {
  responseError?: string;
  responseData?: { email: string };
}
const RegisterForm: React.FC<Props> = ({ responseError, responseData }) => {
  const { navigate } = useShared();
  const { isSubmitting, errors, touched } = useFormikContext<AuthRequest>();

  const { firstName, lastName, email, password, confirmPassword } = errors;
  const formIsInvalid =
    isSubmitting ||
    !!email ||
    !!password ||
    !!firstName ||
    !!lastName ||
    !!confirmPassword;

  const buttonColor = formIsInvalid ? "#f6f6f6" : "#0E2954";

  return (
    <Form>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "auto",
          padding: 2,
        }}
      >
        <Grid mt={16} container spacing={3} flexDirection={"column"}>
          {!!responseError && <Alert severity="error">{responseError}</Alert>}
          {!!responseData?.email && (
            <Alert severity="success">{`Registration for ${responseData.email} successful`}</Alert>
          )}

          <Grid item>
            <Typography textAlign={"center"} variant="h3">
              Register
            </Typography>
          </Grid>
          <Grid item>
            <Typography textAlign={"center"}>
              Please enter your details below to open an account
            </Typography>
          </Grid>
          <Grid item>
            <Field
              name="firstName"
              fullWidth
              label="First Name"
              id="fullWidth"
              as={TextField}
              error={errors.firstName}
              helperText={errors.firstName && touched ? errors.firstName : ""}
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              name="lastName"
              fullWidth
              label="Last Name"
              id="fullWidth"
              error={errors.lastName}
              helperText={errors.lastName && touched ? errors.lastName : ""}
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              name="email"
              fullWidth
              label="Email"
              id="fullWidth"
              error={errors.email}
              helperText={errors.email && touched ? errors.email : ""}
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              type="password"
              name="password"
              fullWidth
              label="Password"
              id="fullWidth"
              error={errors.password}
              helperText={errors.password && touched ? errors.password : ""}
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              type="password"
              name="confirmPassword"
              fullWidth
              label="Confirm Password"
              id="fullWidth"
              error={errors.confirmPassword}
              helperText={
                errors.confirmPassword && touched ? errors.confirmPassword : ""
              }
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              style={{ backgroundColor: buttonColor }}
              disabled={formIsInvalid}
            >
              Register
            </Button>
            <Box textAlign={"center"}>
              <Link
                sx={{ mt: 2 }}
                component="button"
                variant="body2"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Already have an Account? Click here to Login
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

export default RegisterForm;
