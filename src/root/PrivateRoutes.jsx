import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <span>Loading</span>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
