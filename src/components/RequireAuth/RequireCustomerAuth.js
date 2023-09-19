import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import { CartContext } from "../../App";
import auth from "../../firebase.init";

const RequireCustomerAuth = ({ children }) => {
  const [userDetails] = useContext(CartContext);
  const userData = userDetails;
  const location = useLocation();

  if (userData?.User_Type === "Customer") {
    return children;
  } else {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
};

export default RequireCustomerAuth;
