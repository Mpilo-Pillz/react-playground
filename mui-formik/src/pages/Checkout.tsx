import React from "react";
import useStore from "../store/store";
import { Formik } from "formik";
import useCheckout from "../components/product/useCheckout";
import CheckoutForm from "../components/product/CheckoutForm";

const Checkout = () => {
  const { addresses } = useCheckout();

  //   console.log("SELECTED-->", selectedProduct);
  console.log("Adddress-->", addresses);
  return <CheckoutForm />;
  //   return (
  //     <Formik<Partial<IAddress>>
  //       initialValues={initialValues}
  //       validationSchema={validationSchema}
  //       onSubmit={handleSubmit}
  //     >
  //       {() => {
  //         return <CheckoutForm error={error as string} />;
  //       }}
  //     </Formik>
  //   );
};

export default Checkout;
