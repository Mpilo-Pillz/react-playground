import { Form, Formik } from "formik";
import LoginForm from "../../../components/Forms/Auth/LoginForm";
import useLogin from "./useLogin";
import { LoginRequest } from "./types";

const Login = () => {
  const { initialValues, validationSchema, handleSubmit } = useLogin();
  return (
    <Formik<LoginRequest>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => {
        return (
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Join the alliance today!
              </h1>

              <p className="mt-4 text-gray-500">
                A new era of transaparency. It's lifetime
              </p>
            </div>
            <Form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <LoginForm loading={false} isValid={isValid} />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

Login.route = "/login";
export default Login;
