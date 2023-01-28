import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { CartContext } from "../../App";

const RequireAdminAuth = ({ children }) => {
  const [userDetails] = useContext(CartContext);
  const userData = userDetails;
  const location = useLocation();
  if (userData?.User_Type != "Admin") {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default RequireAdminAuth;
