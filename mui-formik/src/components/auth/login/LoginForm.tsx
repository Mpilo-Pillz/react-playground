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
  responseError: string;
}
const LoginForm: React.FC<Props> = ({ responseError }) => {
  const { navigate } = useShared();
  const { isSubmitting, errors, touched } =
    useFormikContext<Partial<AuthRequest>>();

  const buttonColor =
    isSubmitting || !!errors.email || !!errors.password ? "#f6f6f6" : "#0E2954";

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
          <Grid item>
            {!!responseError && <Alert severity="error">{responseError}</Alert>}
            <Typography textAlign={"center"} variant="h3">
              Login
            </Typography>
          </Grid>
          <Grid item>
            <Typography textAlign={"center"}>
              If you have an account please enter your login details
            </Typography>
          </Grid>
          <Grid item>
            <Field
              name="email"
              fullWidth
              label="Email"
              id="fullWidth"
              as={TextField}
              error={errors.email}
              helperText={errors.email && touched ? errors.email : ""}
            />
          </Grid>
          <Grid item>
            <Field
              name="password"
              fullWidth
              label="Password"
              id="fullWidth"
              as={TextField}
              error={errors.password}
              helperText={errors.password && touched ? errors.password : ""}
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              style={{ backgroundColor: buttonColor }}
              disabled={isSubmitting || !!errors.email || !!errors.password}
            >
              Login
            </Button>
            <Box textAlign={"center"}>
              <Link
                sx={{ mt: 2 }}
                component="button"
                variant="body2"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Don't have an Account? Click here to Register
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

export default LoginForm;
