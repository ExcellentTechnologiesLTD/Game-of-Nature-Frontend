import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import OrderDetailsDisplayModal from "../../OrderDetailsDisplayModal/OrderDetailsDisplayModal";
import OrderitemDisplay from "../../OrderItemDisplay/OrderitemDisplay";

const OrderTable = (props) => {
  let orders;
  let userType = null;
  // console.log("props: \n", props);
  if (
    window.location.pathname.endsWith("/manage-orders") ||
    window.location.pathname.endsWith("/manage-deliveries")
  ) {
    orders = props.orders;
    userType = props.userType;
  } else {
    orders = props.myOrders;
  }

  const userGoogle = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [orderID, setOrderID] = useState();

  const handleBtnToDeliveryGuy = (orderID) => {
    setLoading(true);
    setOrderID(orderID);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const handleProceedToDelivery = (orderID) => {
    // Update order status
    setLoading(true);
    setOrderID(orderID);
    fetch("https://game-of-nature-backend.vercel.app/update-order", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        orderID: orderID,
        status: "Packaging in process.",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200 && data.success) {
          // alert("Status updated");
          window.location.reload(true);
          setOrderID(orderID);
        } else {
          alert(data.msg);
        }
        setLoading(false);
      });

    // Send Order shipping details to Delivery company
  };

  return (
    <div className="">
      <table className=" overflow-x-auto text-center table table-zebra w-full border-2">
        {/* <!-- head --> */}
        <thead className="bg-green-100">
          <tr className="bg-green-50">
            <th>
              <label>SL</label>
            </th>
            <th>Order ID</th>
            {userType == "Admin" ? <th>User ID</th> : <></>}
            <th>Total Amount (BDT.)</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th className="w-96">Action Buttons</th>
            {/* <th></th> */}
          </tr>
        </thead>

        <tbody>
          {orders?.map((order, index) => (
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
              <th className="grid grid-cols-1 w-60">
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
                  <div className="grid grid-cols-1">
                    <label
                      htmlFor={order?.order_id}
                      className="font-normal hover:text-blue-700 hover:underline"
                    >
                      Details
                    </label>
                    {window.location.pathname.endsWith("/manage-orders") ? (
                      <button
                        onClick={() => {
                          handleProceedToDelivery(order?.order_id);
                        }}
                        className=" gap-3 normal-case btn bg-green-500 text-white border-0 mt-2 hover:bg-green-600"
                      >
                        Proceed to delivery
                        {loading && order.order_id == orderID ? (
                          <LoadingSpinner></LoadingSpinner>
                        ) : (
                          <></>
                        )}
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleBtnToDeliveryGuy(order?.order_id);
                        }}
                        className=" gap-3 normal-case btn bg-green-500 text-white border-0 mt-2 hover:bg-green-600"
                      >
                        Handover to delivery guy
                        {loading && order.order_id == orderID ? (
                          <LoadingSpinner></LoadingSpinner>
                        ) : (
                          <></>
                        )}
                      </button>
                    )}
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
      {orders?.length == 0 ? (
        <div>
          <h1 className="mt-3 mb-2">You have no orders.</h1>
          <a href="/" className="btn normal-case">
            Browse to order
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OrderTable;
