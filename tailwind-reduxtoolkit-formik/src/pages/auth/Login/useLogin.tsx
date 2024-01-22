import React, { useCallback, useMemo } from "react";
import * as Yup from "yup";
import { useHttpClient } from "../../../hooks/useHttpClient";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { setCredentials } from "../../../store/slice/authSlice";

interface LoginResponse {
  token: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}

const useLogin = () => {
  const { sendRequest, error: httpClientError } = useHttpClient();

  const dispatch = useDispatch();

  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

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
    return response;
  };

  const handleSubmit = useCallback((formValues: LoginCredentials) => {
    // login(formValues);
    mutate(formValues);
  }, []);

  const { mutate, isLoading, error } = useMutation(login, {
    onSuccess: (data) => {
      dispatch(setCredentials({ token: data.token }));
    },
  });

  return { initialValues, validationSchema, handleSubmit };
};

export default useLogin;
