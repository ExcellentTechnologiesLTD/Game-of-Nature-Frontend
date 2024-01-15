import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../App";
import OrderTable from "../../OrderHistory/OrderTable/OrderTable";

const ManageDeliveries = () => {
  const [userdetails] = useContext(CartContext);

  const [orders, setOrders] = useState([]);
  //   let ordersToDeliver = orders.filter(
  //     (order) => order.order_status != "processing"
  //   );

  const userType = userdetails?.User_Type;

  useEffect(() => {
    fetch(`https://game-of-nature-backend.vercel.app/getallorders`)
      .then((res) => res.json())
      .then((data) => {
        let ordersToDeliver = data.filter(
          (data) =>
            data.order_status === "Packaging in process." ||
            data.order_status === "Package with Delivery Guy"
        );
        setOrders(ordersToDeliver);
        // console.log(data);
      });
  }, []);

  return (
    <div className="bg-base-100">
      <div className=" overflow-x-auto w-full">
        <h1 className=" font-serif font-bold text-xl text-center p-5">
          {" "}
          Manage Deliveries{" "}
        </h1>
        <OrderTable userType={userType} orders={orders}></OrderTable>
      </div>
    </div>
  );
};

export default ManageDeliveries;
