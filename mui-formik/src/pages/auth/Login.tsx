import { Form, Formik } from "formik";
import React from "react";
import useLogin from "../../components/auth/login/useLogin";
import { AuthRequest } from "../../components/auth/types";

const Login = () => {
  const { initialValues, validationSchema, handleSubmit } = useLogin();

  return (
    <Formik<Partial<AuthRequest>>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return (
          <Form>
            <LoginForm />
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
