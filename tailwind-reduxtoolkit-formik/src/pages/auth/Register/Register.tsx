import { Form, Formik } from "formik";
import RegisterForm from "../../../components/Forms/Auth/RegisterForm";
import { RegisterRequest } from "./types";
import useRegister from "./useRegister";

const Register = () => {
  const { initialValues, validationSchema, handleSubmit } = useRegister();

  return (
    <Formik<RegisterRequest>
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
              <RegisterForm loading={false} isValid={isValid} />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

Register.route = "/register";
export default Register;
