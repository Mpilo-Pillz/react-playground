import { useCallback, useMemo } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../../shared/hooks/useHttpClient";
import { AuthRequest } from "../types";

const useRegister = () => {
  const { sendRequest } = useHttpClient();

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

  const handleSubmit = useCallback(
    async ({ email, password, firstName, lastName }: Partial<AuthRequest>) => {
      const body = { email, password, firstName, lastName };

      await sendRequest(
        "http://localhost:8080/api/portal/users/register",
        "POST",
        JSON.stringify(body),
        {
          "Content-Type": "application/json",
        }
      );
    },
    [sendRequest]
  );

  return { initialValues, validationSchema, handleSubmit };
};

export default useRegister;
