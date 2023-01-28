import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CartContext } from "../../App";
import auth from "../../firebase.init";
import OrderTable from "./OrderTable/OrderTable";

const OrderHistory = () => {
  const [userDetails] = useContext(CartContext);
  const userID = userDetails.user_id;
  console.log("UserID : ", userID);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`https://game-of-nature-backend.vercel.app/getmyorders/${userID}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  return (
    <div className="h-screen bg-base-100">
      <div className=" h-28 flex justify-center items-center text-white font-serif font-semibold text-3xl bg-gradient-to-b from-green-700 to-green-600">
        My Order History
      </div>
      <div className=" overflow-x-auto w-full">
        <OrderTable myOrders={myOrders}></OrderTable>
        {/* {myOrders.length == 0 ? <h1>No orders.</h1> : <></>} */}
      </div>
    </div>
  );
};

export default OrderHistory;
