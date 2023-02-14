import { Field, Form, Formik } from "formik";
import React from "react";
import useRegister from "../../components/auth/register/useRegister";
import { AuthRequest } from "../../components/auth/types";
import RegisterForm from "../../components/auth/register/RegisterForm";

const Register = () => {
  const { initialValues, validationSchema, handleSubmit } = useRegister();

  return (
    <Formik<Partial<AuthRequest>>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return <RegisterForm />;
      }}
    </Formik>
  );
};

export default Register;
