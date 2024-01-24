import { useCallback, useMemo } from "react";
import * as Yup from "yup";
import { RegisterRequest, RegisterResponse } from "./types";
import { useMutation } from "react-query";
import { useHttpClient } from "../../../hooks/useHttpClient";
import { setCredentials } from "../../../store/slice/authSlice";
import { useDispatch } from "react-redux";

const useRegister = () => {
  const { sendRequest } = useHttpClient();
  const dispatch = useDispatch();

  const initialValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }),
    []
  );

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    password: Yup.string().required("Required!"),
  });

  const register = async (
    registrationDetails: RegisterRequest
  ): Promise<RegisterResponse> => {
    const response = await sendRequest(
      `${import.meta.env.VITE_API_URL}/api/portal/users/register`,
      "POST",
      JSON.stringify(registrationDetails),
      {
        "Content-Type": "application/json",
      }
    );
    return response;
  };

  const { mutate } = useMutation(register, {
    onSuccess: (data) => {
      alert("Registration successful");
      dispatch(setCredentials({ token: data.token }));
    },
  });

  const handleSubmit = useCallback((formValues: RegisterRequest) => {
    debugger;
    mutate(formValues);
  }, []);
  return { initialValues, validationSchema, handleSubmit };
};

export default useRegister;
