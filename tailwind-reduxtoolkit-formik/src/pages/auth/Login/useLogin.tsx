import React, { useCallback, useMemo } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../../../hooks/useHttpClient";

interface LoginResponse {
  token: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}

const useLogin = () => {
  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

  const { sendRequest, error } = useHttpClient();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required!"),
  });

  const login = async (
    loginCredentials: LoginCredentials
  ): Promise<LoginResponse> => {
    const response = await sendRequest(
      `${import.meta.env.VITE_API_URL}/api/portal/users/login`,
      "POST",
      JSON.stringify(loginCredentials),
      {
        "Content-Type": "application/json",
      }
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  };

  const handleSubmit = useCallback((formValues: LoginCredentials) => {
    login(formValues);
  }, []);
  return { initialValues, validationSchema, handleSubmit };
};

export default useLogin;
