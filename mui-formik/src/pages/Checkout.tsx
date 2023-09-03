import React from "react";
import useStore from "../store/store";
import { Formik } from "formik";
import useCheckout from "../components/product/useCheckout";
import CheckoutForm from "../components/product/CheckoutForm";

const Checkout = () => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    userAddresses,
    subscriptionSuccessful,
    navigate,
  } = useCheckout();

  return (
    <Formik<any>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return (
          <CheckoutForm
            userAddresses={userAddresses}
            subscriptionSuccessful={subscriptionSuccessful}
            navigate={navigate}
          />
        );
      }}
    </Formik>
  );
};

export default Checkout;
