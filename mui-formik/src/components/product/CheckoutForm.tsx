import React, { useEffect } from "react";
import useProduct from "./useProduct";
import useCheckout from "./useCheckout";
import { Field, Form, useFormikContext } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useAddress from "../user/useAddress";
import { productStore } from "../../store/store";
import { IProduct } from "./productTypes";

const CheckoutForm = () => {
  const { getUserAddresses } = useAddress();
  const { values }: any = useFormikContext();
  //   const { selectedProduct }: any = productStore();
  const selectedProduct = productStore((state: any) => state.selectedProduct);
  //   const { products: selectedProduct } = useProduct();
  console.log("val-->", values);

  useEffect(() => {
    getUserAddresses();
  }, []);

  return (
    <Card>
      <Form>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: "auto",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={selectedProduct?.image}
          />
          <Grid mt={16} container spacing={3} flexDirection={"column"}>
            <Grid item>
              {/* {!!error && <Alert severity="error">{error}</Alert>} */}
              <Typography textAlign={"center"} variant="h3">
                Select Address for installation
              </Typography>
            </Grid>
            <Grid item>
              <Field
                as={Select}
                type="select"
                name="addresses"
                fullWidth
                label="Address"
                id="fullWidth"
              >
                {values?.addresses?.map((address: any) => {
                  console.log("ADd-->", address);

                  return (
                    <MenuItem value={address}>
                      {`${address.streetNumber} ${address.streetName}`}
                    </MenuItem>
                  );
                })}
              </Field>
            </Grid>
            <Grid item>
              <Field
                name="cellphone"
                fullWidth
                label="MOMO Cellphone Number"
                id="fullWidth"
                as={TextField}
              />
            </Grid>
            <Grid item>Type</Grid>
            <Grid item>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {selectedProduct?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedProduct?.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedProduct?.price}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                style={{ backgroundColor: "#0E2954" }}
              >
                Pay
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </Card>
  );
};

export default CheckoutForm;
