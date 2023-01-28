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
          (data) => data.order_status != "processing"
        );
        setOrders(ordersToDeliver);
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

export default ManageDeliveries;
