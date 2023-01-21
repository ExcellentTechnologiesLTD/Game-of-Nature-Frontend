import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderTable from "./OrderTable/OrderTable";

const OrderHistory = () => {
  const [userGoogle] = useAuthState(auth);
  const userID = localStorage.getItem("userID");

  const [myOrders, setMyOrders] = useState([]);

  // console.log(userID);
  useEffect(() => {
    fetch(`https://game-of-nature-backend.vercel.app/getmyorders/${userID}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  useEffect(() => {
    fetch("https://game-of-nature-backend.vercel.app/check-existence", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: userGoogle.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("my data: \n\n", data, "\n");
        if (data.success) {
          // console.log("UserData: \n", data.info);
          localStorage.setItem("currentUserDetails", JSON.stringify(data.info));
          // localStorage.setItem("userID", data.user_id);
          // setUserInfo(data.info);
        } else {
        }
      });
  }, []);
  return (
    <div className="h-screen bg-base-100">
      <div className=" overflow-x-auto w-full">
        <OrderTable myOrders={myOrders}></OrderTable>
      </div>
    </div>
  );
};

export default OrderHistory;
