import { useCallback, useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { AuthRequest } from "../types";
import { useHttpClient } from "../../shared/hooks/useHttpClient";
import { USERDATA } from "../../../constants/constants";
import useShared from "../../shared/hooks/useShared";
import useStore from "../../../store/store";
import { shallow } from "zustand/shallow";

const useLogin = () => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date | null>();
  const [userId, setUserId] = useState<string | null>(null);

  const { navigate } = useShared();
  const [setIsLoggedIn, setIsLoggedOut] = useStore(
    (state) => [state.setIsLoggedIn, state.setIsLoggedOut],
    shallow
  );

  const { setUserData } = useStore();

  const { sendRequest, error } = useHttpClient();

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

  const login = useCallback(
    (userId: string, token: string, expirationDate?: Date) => {
      setToken(token);
      setUserId(userId);

      const timeTokenExpires =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

      setTokenExpirationDate(timeTokenExpires);

      localStorage.setItem(
        USERDATA,
        JSON.stringify({
          userId,
          token,
          expiration: timeTokenExpires.toISOString(),
        })
      );
    },
    [setToken]
  );

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem(USERDATA);
    setIsLoggedOut();
    navigate("/");
  }, [setToken]);

  // useEffect(() => {
  //   // Retrieve access token from local storage
  //   const loggedInUser = localStorage.getItem(USERDATA);
  //   if (loggedInUser) {
  //     setToken(loggedInUser);
  //   }
  // }, []);

  const handleSubmit = useCallback(
    async ({ email, password }: Partial<AuthRequest>) => {
      const body = { email, password };
      try {
        const loginResponse = await sendRequest(
          `${import.meta.env.VITE_API_URL}/api/portal/users/login`,
          "POST",
          JSON.stringify(body),
          {
            "Content-Type": "application/json",
          }
        );
        const { userId, token, expirationDate } = loginResponse;
        login(userId, token);
        setIsLoggedIn();
        setUserData(loginResponse);
        navigate("/");
      } catch (error) {
        // setLoginError(true);
        console.error("Implement Invalid Login");
      }
    },
    []
  );

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    logout,
    login,
    error,
  };
};

export default useLogin;
