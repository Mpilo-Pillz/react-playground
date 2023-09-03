import { Formik } from "formik";
import React from "react";
import AddressForm from "../../components/user/AddressForm";
import useAddress from "../../components/user/useAddress";
import { IAddress } from "../../components/user/types";

const Address = () => {
  const { initialValues, validationSchema, handleSubmit, error, responseData } =
    useAddress();

  return (
    <Formik<Partial<IAddress>>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return (
          <AddressForm
            errorResponse={error as string}
            responseData={responseData}
          />
        );
      }}
    </Formik>
  );
};

export default Address;
