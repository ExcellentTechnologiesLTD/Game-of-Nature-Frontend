import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../App";
import OrderTable from "../../OrderHistory/OrderTable/OrderTable";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [userDetails] = useContext(CartContext);
  // setOrders(orders.filter((order) => order.order_status == "processing"));

  const [loading, setLoading] = useState(false);

  const userType = userDetails?.User_Type;
  //   .currentUserInfo.User_Type;

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
    <div className="bg-base-100">
      <div className=" overflow-x-auto w-full">
        <h1 className=" font-serif font-bold text-xl text-center p-5">
          {" "}
          Manage Orders{" "}
        </h1>
        <OrderTable userType={userType} orders={orders}>
          {" "}
        </OrderTable>{" "}
      </div>{" "}
    </div>
  );
};

export default ManageOrders;
