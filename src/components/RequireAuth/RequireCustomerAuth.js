import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import auth from "../../firebase.init";

const RequireCustomerAuth = ({ children }) => {
  const userData = JSON.parse(
    localStorage.getItem("currentUserDetails")
  )?.currentUserInfo;
  const [userGoogle, loading, error] = useAuthState(auth);
  // console.log("from require cust auth: ", userData);
  // console.log("from require google auth: ", userGoogle);
  const location = useLocation();
  if (loading) {
    return <div>loading.....</div>;
  }
  if (error) {
    return (
      <div>
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (userData != null) {
    return children;
  } else if (userGoogle != null) {
    return children;
  } else {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
};

export default RequireCustomerAuth;
