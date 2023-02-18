import React from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import useShared from "../../shared/hooks/useShared";
import { Field, Form } from "formik";

const LoginForm = () => {
  const { navigate } = useShared();

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
          <Grid item>
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
            />
          </Grid>
          <Grid item>
            <Field
              name="password"
              fullWidth
              label="Password"
              id="fullWidth"
              as={TextField}
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
