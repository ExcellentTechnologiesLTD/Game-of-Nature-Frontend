import React, { useEffect, useState } from "react";
import OrderTable from "../../OrderHistory/OrderTable/OrderTable";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  // setOrders(orders.filter((order) => order.order_status == "processing"));

  const [loading, setLoading] = useState(false);

  const userType = JSON.parse(localStorage.getItem("currentUserDetails"))
    .currentUserInfo.User_Type;

  useEffect(() => {
    fetch(`https://game-of-nature-backend.vercel.app/getallorders`)
      .then((res) => res.json())
      .then((data) => {
        let newOrders = data.filter(
          (data) => data.order_status === "processing"
        );
        setOrders(newOrders);
        // console.log(data);
      });
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
