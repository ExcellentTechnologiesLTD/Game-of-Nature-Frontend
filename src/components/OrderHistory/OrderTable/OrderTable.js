import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import OrderDetailsDisplayModal from "../../OrderDetailsDisplayModal/OrderDetailsDisplayModal";
import OrderitemDisplay from "../../OrderItemDisplay/OrderitemDisplay";

const OrderTable = (props) => {
  let orders;
  let userType = null;

  if (window.location.pathname.endsWith("/manage-orders")) {
    orders = props.orders;
    userType = props.userType;
  } else {
    orders = props.myOrders;
    // setuserData(JSON.parse(localStorage.getItem("currentUserDetails")));
  }

  const userGoogle = useAuthState(auth);

  return (
    <div className="">
      <table className=" overflow-x-auto text-center table table-zebra w-full border-2">
        {/* <!-- head --> */}
        <thead>
          <tr className="">
            <th>
              <label>SL</label>
            </th>
            <th>Order ID</th>
            {userType == "Admin" ? <th>User ID</th> : <></>}
            <th>Total Amount (BDT.)</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Action Buttons</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.order_id}>
              {/* {console.log("Items: \n", order)} */}
              <th>
                <label className="text-black">{index + 1}</label>
              </th>
              <td>
                {/* Order ID */}
                {order?.order_id}
              </td>
              {userType == "Admin" ? (
                <td>
                  {/* Order ID */}
                  {order?.user_id}
                </td>
              ) : (
                <></>
              )}
              <td>
                {/* Total Amount */}
                {order?.total_amount}
              </td>
              <td>
                {/* P. Method */}
                {order?.payment_method}
              </td>
              <th>
                {/* status */}
                {order?.order_status}
              </th>
              <th className="grid">
                {userType != "Admin" ? (
                  <div>
                    <label
                      htmlFor={order?.order_id}
                      className="font-normal hover:text-blue-700 hover:underline"
                    >
                      Details
                    </label>
                  </div>
                ) : (
                  <div className="grid">
                    <label
                      htmlFor={order?.order_id}
                      className="font-normal hover:text-blue-700 hover:underline"
                    >
                      Details
                    </label>
                    <button className="btn bg-green-500 text-white border-0 mt-2 hover:bg-green-600">
                      Proceed to delivery
                    </button>
                  </div>
                )}
                {/******************************************* Order Details Display modal *******************************************/}
                <input
                  type="checkbox"
                  id={order?.order_id}
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <OrderDetailsDisplayModal
                      key={order.user_id}
                      // userData={userData}
                      order={order}
                    ></OrderDetailsDisplayModal>
                  </div>
                </div>
                {/******************************************* Order Details Display modal *******************************************/}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
