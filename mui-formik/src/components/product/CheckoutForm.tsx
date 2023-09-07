import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, useFormikContext } from "formik";
import React, { useEffect } from "react";
import { useProductStore } from "../../store/store";
import useAddress from "../user/useAddress";
import useCheckout from "./useCheckout";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ISubscription } from "./productTypes";
import LoadingButton from "@mui/lab/LoadingButton";

interface Props {
  userAddresses: any;
  subscriptionSuccessful: boolean;
  navigate: (route: string) => void;
}
const CheckoutForm: React.FC<Props> = ({
  userAddresses,
  subscriptionSuccessful,
  navigate,
}) => {
  const { getUserAddresses } = useAddress();
  const { values, setFieldValue, touched, errors, isSubmitting } =
    useFormikContext<Partial<ISubscription>>();
  const selectedProduct = useProductStore(
    (state: any) => state.selectedProduct
  );

  const buttonColor =
    isSubmitting || !!errors.cellphone ? "#f6f6f6" : "#0E2954";

  useEffect(() => {
    getUserAddresses();

    setFieldValue("monthlyFee", selectedProduct.price);
    setFieldValue("plan", selectedProduct.name);
    setFieldValue("description", selectedProduct.description);
  }, []);

  return (
    <>
      <Container sx={{ mt: 3, maxWidth: "400px" }}>
        {subscriptionSuccessful ? (
          <Card sx={{ p: 5 }}>
            <Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: "#1A5D1A" }}
              >
                Subscription Successful 🎉
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h1"
                component="h1"
                textAlign={"center"}
                sx={{ color: "#1A5D1A" }}
              >
                <ThumbUpIcon />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                You have successfully subscribed for this product ✅
              </Typography>
              <Box textAlign={"center"}>
                <Link
                  sx={{ mt: 2 }}
                  component="button"
                  variant="body2"
                  onClick={() => {
                    navigate("/account");
                  }}
                >
                  Go to Bills
                </Link>
              </Box>
            </Box>
          </Card>
        ) : (
          <Card sx={{ p: 2 }}>
            <Form>
              <Box
                sx={{
                  maxWidth: "100%",
                  margin: "auto",
                }}
              >
                <Box textAlign={"center"}>
                  <img
                    height={350}
                    width={350}
                    alt={selectedProduct.name}
                    src={selectedProduct?.image}
                  />
                </Box>

                <Grid container spacing={3} flexDirection={"column"}>
                  <Grid item>
                    {/* {!!error && <Alert severity="error">{error}</Alert>} */}
                    <Typography textAlign={"center"} variant="h4">
                      Select Address for installation
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
                    <Field
                      name="cellphone"
                      type="number"
                      fullWidth
                      label="MOMO Cellphone Number"
                      id="fullWidth"
                      as={TextField}
                      error={errors.cellphone}
                      helperText={
                        errors.cellphone && touched ? errors.cellphone : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Start Date"
                        onChange={(date) => {
                          setFieldValue("startDate", date);
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                          Charge:
                        </span>{" "}
                        E {selectedProduct?.price} p/m
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        {selectedProduct?.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedProduct?.description}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={12}>
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      style={{ backgroundColor: buttonColor }}
                      loading={isSubmitting}
                    >
                      Add to Invoice
                    </LoadingButton>
                    {/* <pre>{JSON.stringify(values)}</pre>
                <pre>{JSON.stringify(errors)}</pre> */}
                  </Grid>
                </Grid>
              </Box>
            </Form>
          </Card>
        )}
      </Container>
    </>
  );
};

export default CheckoutForm;
