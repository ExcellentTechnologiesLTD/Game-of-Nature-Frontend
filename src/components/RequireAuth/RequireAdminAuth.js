import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import auth from "../../firebase.init";

const RequireAdminAuth = ({ children }) => {
  const userData = JSON.parse(
    localStorage.getItem("currentUserDetails")
  )?.currentUserInfo;
  const [userGoogle] = useAuthState(auth);
  const location = useLocation();
  if (userData?.User_Type != "Admin") {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  console.log("children: ", children);
  return children;
};

export default RequireAdminAuth;
