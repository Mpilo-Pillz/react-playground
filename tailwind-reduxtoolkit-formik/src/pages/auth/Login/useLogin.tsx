import { useCallback, useMemo } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useHttpClient } from "../../../hooks/useHttpClient";
import { setCredentials } from "../../../store/slice/authSlice";

interface LoginResponse {
  token: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

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

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      dispatch(setCredentials({ token: data.token }));
    },
  });

  return { initialValues, validationSchema, handleSubmit };
};

export default useLogin;
