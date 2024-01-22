import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logOut } from "../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Auth/Login/Login";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    navigate(Login.route);
  };
  return { isLoggedIn, handleLogout };
};

export default useAuth;
