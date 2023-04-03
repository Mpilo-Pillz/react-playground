import { Formik } from "formik";
import React from "react";
import useLogin from "../../components/auth/login/useLogin";
import { AuthRequest } from "../../components/auth/types";
import LoginForm from "../../components/auth/login/LoginForm";

const Login = () => {
  const { initialValues, validationSchema, handleSubmit, error } = useLogin();

  return (
    <Formik<Partial<AuthRequest>>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return <LoginForm error={error as string} />;
      }}
    </Formik>
  );
};

export default Login;
