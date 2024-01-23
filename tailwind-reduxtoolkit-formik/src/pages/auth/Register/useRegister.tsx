import { useCallback, useMemo } from "react";
import * as Yup from "yup";

const useRegister = () => {
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

  const handleSubmit = useCallback(() => {
    alert("TODO implement api call");
  }, []);
  return { initialValues, validationSchema, handleSubmit };
};

export default useRegister;
