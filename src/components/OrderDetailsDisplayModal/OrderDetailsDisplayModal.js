import React, { useEffect, useState } from "react";
import OrderitemDisplay from "../OrderItemDisplay/OrderitemDisplay";

const OrderDetailsDisplayModal = (props) => {
  const { order } = props;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (window.location.pathname.endsWith("/manage-orders")) {
      fetch(
        `https://game-of-nature-backend.vercel.app/getuser-infobyid/${order?.user_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          setUserData(data);
        });
    } else {
      setUserData(JSON.parse(localStorage.getItem("currentUserDetails")));
    }
  }, []);

  return (
    <div>
      <label
        htmlFor={order?.order_id}
        className="btn btn-sm btn-circle absolute right-2 top-2"
      >
        ✕
      </label>
      <h3 className="text-lg font-bold inline bg-black text-white px-20 py-1.5 rounded-xl">
        Order Details
      </h3>
      <div className="font-normal text-sm flex justify-between mt-4">
        <span>Order ID: {order?.order_id}</span>
        <span className="italic">
          Status: <span className="text-red-700">{order?.order_status}</span>
        </span>
      </div>
      <div className="flex gap-4 justify-end font-normal text-xs">
        <span>{order?.ordered_date}</span>
        <span>{order?.ordered_time}</span>
      </div>
      {/* Items */}
      <div>
        {JSON.parse(order.items).map((item, index) => (
          <OrderitemDisplay
            // key={order?.order_id.toString() + "ke"}
            key={index}
            item={item}
          ></OrderitemDisplay>
        ))}
      </div>
      {/* shipping detail */}
      <div className="font-serif">
        <h1 className="text-white bg-black rounded-xl">Shipping Details</h1>
        <div className="font-normal text-base text-left mt-5">
          <p>
            <span className="font-semibold">Name: </span>
            {userData?.First_Name + " " + userData?.Last_Name}
          </p>
          <p>
            <span className="font-semibold">Address: </span>
            {userData?.Address}
          </p>
          <div className="flex justify-between">
            <p>
              <span className="font-semibold">City:</span> {userData?.city}
            </p>
            <p>
              <span className="font-semibold ">Postal code: </span>
              {userData?.postal_code}
            </p>
          </div>
          <p>
            <span className="font-semibold">Contact number: </span>
            {userData?.Mobile}
          </p>
          <p>
            <span className="font-semibold">Payment method: </span>
            <span>
              {order?.payment_method == "BKASH" ? (
                <div>
                  {order?.payment_method} (
                  {order?.online_payment_trxID
                    ? order?.online_payment_trxID
                    : "Unpaid"}
                  )
                </div>
              ) : (
                order?.payment_method
              )}
            </span>
          </p>
          <p>
            <span className="font-semibold">Shipping charge BDT. </span>
            {userData?.city == "Dhaka" || userData?.city == "dhaka" ? 60 : 100}
          </p>
        </div>
      </div>
      <div>
        <h1 className="mt-10 font-mono text-lg italic">
          Total Amount BDT. {order?.total_amount}.00
        </h1>
      </div>
    </div>
  );
};

export default OrderDetailsDisplayModal;
