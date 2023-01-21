import React, { useEffect, useState } from "react";
import OrderTable from "../../OrderHistory/OrderTable/OrderTable";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  //   console.log(
  //     "user details: \n",
  //     JSON.parse(localStorage.getItem("currentUserDetails")).currentUserInfo
  //       .User_Type
  //   );
  const userType = JSON.parse(localStorage.getItem("currentUserDetails"))
    .currentUserInfo.User_Type;
  // console.log(userID);
  useEffect(() => {
    // fetch(`https://game-of-nature-backend.vercel.app/getallorders`)
    fetch(`https://game-of-nature-backend.vercel.app/getallorders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="h-screen bg-base-100">
      <div className=" overflow-x-auto w-full">
        <OrderTable userType={userType} orders={orders}></OrderTable>
      </div>
    </div>
  );
};

export default ManageOrders;
