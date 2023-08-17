import React from "react";
import useStore from "../store/store";
import { Formik } from "formik";
import useCheckout from "../components/product/useCheckout";
import CheckoutForm from "../components/product/CheckoutForm";

const Checkout = () => {
  const { addresses, initialValues, validationSchema, handleSubmit } =
    useCheckout();

  //   console.log("SELECTED-->", selectedProduct);
  console.log("Adddress-->", addresses);

  return (
    <Formik<Partial<any>>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return <CheckoutForm />;
      }}
    </Formik>
  );
};

export default Checkout;
