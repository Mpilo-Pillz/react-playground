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
import { Field, Form } from "formik";

interface Props {
  error?: string;
}
const RegisterForm: React.FC<Props> = ({ error }) => {
  const { navigate } = useShared();

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
          {!!error && (
            <Alert severity="error">
              Registration Failed. Please Try again
            </Alert>
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
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              name="lastName"
              fullWidth
              label="Last Name"
              id="fullWidth"
            />
          </Grid>
          <Grid item>
            <Field
              as={TextField}
              name="email"
              fullWidth
              label="Email"
              id="fullWidth"
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
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              style={{ backgroundColor: "#0E2954" }}
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
