// PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode; // Define children prop type
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken"); // Check for access token cookie

  return accessToken ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
