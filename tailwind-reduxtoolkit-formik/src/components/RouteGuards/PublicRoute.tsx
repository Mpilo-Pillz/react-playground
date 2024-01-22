import React from "react";
import { RouteGuardProps } from "./types";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const PublicRoute: React.FC<RouteGuardProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  debugger;
  return !isLoggedIn ? <>{children}</> : <Navigate to="/" />;
};

export default PublicRoute;
