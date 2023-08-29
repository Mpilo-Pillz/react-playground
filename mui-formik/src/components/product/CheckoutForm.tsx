import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  Modal,
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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const CheckoutForm = () => {
  const { getUserAddresses } = useAddress();
  const { values, setFieldValue, errors } = useFormikContext();
  const { userAddresses, isOpen, handleClose } = useCheckout();
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
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Container sx={{ mt: 3, maxWidth: "400px" }}>
        <Card sx={{ p: 2 }}>
          <Form>
            <Box
              sx={{
                maxWidth: "100%",
                margin: "auto",
              }}
            >
              <CardMedia
                component="img"
                alt={selectedProduct.name}
                image={selectedProduct?.image}
              />
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
                    fullWidth
                    label="MOMO Cellphone Number"
                    id="fullWidth"
                    as={TextField}
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
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    style={{ backgroundColor: "#0E2954" }}
                  >
                    Add to Invoice
                  </Button>
                  {/* <pre>{JSON.stringify(values)}</pre>
                <pre>{JSON.stringify(errors)}</pre> */}
                </Grid>
              </Grid>
            </Box>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default CheckoutForm;
