import { Formik } from "formik";
import React from "react";
import AddressForm from "../../components/user/AddressForm";
import useAddress from "../../components/user/useAddress";
import { Address } from "../../components/user/types";

const Address = () => {
  const { initialValues, validationSchema, handleSubmit, error } = useAddress();

  return (
    <Formik<Partial<Address>>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return <AddressForm error={error as string} />;
      }}
    </Formik>
  );
};

export default Address;
