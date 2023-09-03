import { Field, Form, Formik } from "formik";
import React from "react";
import useRegister from "../../components/auth/register/useRegister";
import { AuthRequest } from "../../components/auth/types";
import RegisterForm from "../../components/auth/register/RegisterForm";

const Register = () => {
  const { initialValues, validationSchema, handleSubmit, error, responseData } =
    useRegister();

  return (
    <>
      <Formik<Partial<AuthRequest>>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <RegisterForm
              responseError={error as string}
              responseData={responseData}
            />
          );
        }}
      </Formik>
    </>
  );
};

export default Register;
