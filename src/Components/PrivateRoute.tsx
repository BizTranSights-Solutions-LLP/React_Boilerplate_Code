import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const isAllowedToVisit = false; // Your Logic Here
  return isAllowedToVisit ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
