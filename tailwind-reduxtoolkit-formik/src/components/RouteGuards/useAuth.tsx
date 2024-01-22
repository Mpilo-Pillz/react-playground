import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const useAuth = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return { isLoggedIn };
};

export default useAuth;
