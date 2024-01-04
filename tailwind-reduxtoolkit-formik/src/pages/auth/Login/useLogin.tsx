import React, { useCallback, useMemo } from "react";
import * as Yup from "yup";

const useLogin = () => {
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

  const handleSubmit = useCallback(() => {
    alert("TODO implement api call");
  }, []);
  return { initialValues, validationSchema, handleSubmit };
};

export default useLogin;
