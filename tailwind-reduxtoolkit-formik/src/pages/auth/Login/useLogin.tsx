import { useCallback, useMemo } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useHttpClient } from "../../../hooks/useHttpClient";
import { setCredentials } from "../../../store/slice/authSlice";
import { LoginRequest, LoginResponse } from "./types";

const useLogin = () => {
  const { sendRequest } = useHttpClient();

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
    loginCredentials: LoginRequest
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

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      dispatch(setCredentials({ token: data.token }));
    },
  });

  const handleSubmit = useCallback((formValues: LoginRequest) => {
    // login(formValues);
    mutate(formValues);
  }, []);

  return { initialValues, validationSchema, handleSubmit };
};

export default useLogin;
