import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, useFormikContext } from "formik";
import { useEffect } from "react";
import { useProductStore } from "../../store/store";
import useAddress from "../user/useAddress";
import useCheckout from "./useCheckout";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CheckoutForm = () => {
  const { getUserAddresses } = useAddress();
  const { values, setFieldValue, errors } = useFormikContext();
  const { userAddresses } = useCheckout();
  const selectedProduct = useProductStore(
    (state: any) => state.selectedProduct
  );

  useEffect(() => {
    getUserAddresses();

    setFieldValue("monthlyFee", selectedProduct.price);
    setFieldValue("plan", selectedProduct.name);
    setFieldValue("description", selectedProduct.description);
  }, []);

  return (
    <Container sx={{ m: 3 }}>
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
            alt={selectedProduct.name}
            image={selectedProduct?.image}
          />
          <Grid mt={16} container spacing={3} flexDirection={"column"}>
            <Grid item>
              {/* {!!error && <Alert severity="error">{error}</Alert>} */}
              <Typography textAlign={"center"} variant="h4">
                Select Address for installation
              </Typography>
            </Grid>
            <Grid item>
              <Field
                as={Select}
                type="select"
                name="address"
                fullWidth
                label="Address"
                id="fullWidth"
              >
                {userAddresses?.addresses?.map((address: any) => {
                  return (
                    <MenuItem key={address._id} value={address._id}>
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
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  onChange={(date) => {
                    setFieldValue("startDate", date);
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>Charge:</span> E{" "}
                  {selectedProduct?.price} p/m
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {selectedProduct?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedProduct?.description}
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
                Add to Invoice
              </Button>
              <pre>{JSON.stringify(values)}</pre>
              <pre>{JSON.stringify(errors)}</pre>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </Container>
  );
};

export default CheckoutForm;
