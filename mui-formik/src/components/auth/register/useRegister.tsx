import { useCallback, useMemo } from "react";
import * as Yup from "yup";

const useRegister = () => {
  const initialValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password").min(8),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });

  const handleSubmit = useCallback(() => {
    alert("Not Implemented");
  }, []);

  return { initialValues, validationSchema, handleSubmit };
};

export default useRegister;
