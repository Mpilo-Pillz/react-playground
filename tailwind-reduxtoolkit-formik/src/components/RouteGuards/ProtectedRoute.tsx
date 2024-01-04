import React from "react";
import { Navigate } from "react-router-dom";
import { RouteGuardProps } from "./types";
import Login from "../../pages/Auth/Login/Login";
import useAuth from "./useAuth";

const ProtectedRoute: React.FC<RouteGuardProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <>{children}</> : <Navigate to={Login.route} />;
};

export default ProtectedRoute;
