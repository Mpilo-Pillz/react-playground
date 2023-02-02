import React from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import useShared from "../../shared/hooks/useShared";

const RegisterForm = () => {
  const { navigate } = useShared();

  return (
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
            Register
          </Typography>
        </Grid>
        <Grid item>
          <Typography textAlign={"center"}>
            Please enter your details below to open an account
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            name="firstName"
            fullWidth
            label="First Name"
            id="fullWidth"
          />
        </Grid>
        <Grid item>
          <TextField
            name="lastName"
            fullWidth
            label="Last Name"
            id="fullWidth"
          />
        </Grid>
        <Grid item>
          <TextField name="email" fullWidth label="Email" id="fullWidth" />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            name="password"
            fullWidth
            label="Password"
            id="fullWidth"
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            name="confirmPassword"
            fullWidth
            label="Confirm Password"
            id="fullWidth"
          />
        </Grid>
        <Grid item>
          <Button
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
  );
};

export default RegisterForm;
