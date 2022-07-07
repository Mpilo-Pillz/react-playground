import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const LoginForm = () => {
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
            Login
          </Typography>
        </Grid>
        <Grid item>
          <Typography textAlign={"center"}>
            If you have an account please enter your login details
          </Typography>
        </Grid>
        <Grid item>
          <TextField name="email" fullWidth label="Email" id="fullWidth" />
        </Grid>
        <Grid item>
          <TextField
            name="password"
            fullWidth
            label="Password"
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
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
