import React from "react";
import { Outlet } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default CustomerDashboard;
