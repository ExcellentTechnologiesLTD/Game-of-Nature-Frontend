import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CartContext } from "../../../App";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import OrderDetailsDisplayModal from "../../OrderDetailsDisplayModal/OrderDetailsDisplayModal";
import OrderitemDisplay from "../../OrderItemDisplay/OrderitemDisplay";

const OrderTable = (props) => {
  const [userDetails] = useContext(CartContext);
  let orders;
  let userType = userDetails?.User_Type;

  if (
    window.location.pathname.endsWith("/manage-orders") ||
    window.location.pathname.endsWith("/manage-deliveries") ||
    window.location.pathname.endsWith("/completed-orders")
  ) {
    orders = props.orders;
  } else {
    orders = props.myOrders;
  }

  const [loading, setLoading] = useState(false);
  const [orderID, setOrderID] = useState();

  const handleOrderDelete = (orderID) => {
    console.log("Order Id: ", orderID);
    const xx = window.confirm("Are you sure you want to delete the order?");
    if (xx) {
      fetch(
        `https://game-of-nature-backend.vercel.app/delete-order/${orderID}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success && data.status == 200) {
            alert(data.msg);
            window.location.reload(true);
          } else {
            alert("Cannot Delete Item!");
          }
        });
    }
  };

  const handleBtnCompleteOrder = (orderID) => {
    setLoading(true);
    setOrderID(orderID);

    fetch("https://game-of-nature-backend.vercel.app/update-order", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        orderID: orderID,
        status: "Order Delivered",
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
  };

  const handleBtnToDeliveryGuy = (orderID) => {
    setLoading(true);
    setOrderID(orderID);

    fetch("https://game-of-nature-backend.vercel.app/update-order", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        orderID: orderID,
        status: "Package with Delivery Guy",
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

    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
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
      <table className=" overflow-x-auto text-center table table-zebra w-full">
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
            <th className="">Actions</th>
            {/* <th></th> */}
          </tr>
        </thead>

        <tbody>
          {orders?.map((order, index) => (
            <tr className="bg-red-200" key={order.order_id}>
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
              <th className="grid grid-cols-1 w-full">
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
                    {/* <label
                      htmlFor={order?.order_id}
                      className="font-normal hover:text-blue-700 hover:underline"
                    >
                      Details
                    </label> */}
                    <div className="grid justify-items-center grid-cols-3">
                      {/* See details */}
                      <label
                        className="relative group"
                        htmlFor={order?.order_id}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-8 h-8 hover:border-2 border-black p-0.5 rounded-lg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p className="text-xs px-2 py-0.5 absolute invisible group-hover:visible  bg-gray-500 text-white ">
                          View details
                        </p>
                      </label>

                      {/* Edit details */}
                      {order?.order_status === "Package with Delivery Guy" ||
                      order?.order_status === "Order Delivered" ||
                      order?.order_status === "Packaging in process." ? (
                        <></>
                      ) : (
                        <div className="relative group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 hover:border-2 border-black p-0.5 rounded-lg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                          <p className="text-xs px-2 py-0.5 absolute invisible group-hover:visible  bg-gray-500 text-white ">
                            Edit
                          </p>
                        </div>
                      )}

                      {/* Delete */}

                      {order?.order_status === "processing" ? (
                        <div
                          onClick={() => {
                            handleOrderDelete(order?.order_id);
                          }}
                          className="relative group"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 hover:border-2 border-black p-0.5 rounded-lg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                          <p className="text-xs px-2 py-0.5 absolute invisible group-hover:visible  bg-gray-500 text-white ">
                            Delete
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    {/* Action buttons */}
                    {order?.order_status === "processing" ? (
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
                    ) : order?.order_status === "Packaging in process." ? (
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
                    ) : order?.order_status === "Package with Delivery Guy" ? (
                      <button
                        onClick={() => {
                          handleBtnCompleteOrder(order?.order_id);
                        }}
                        className=" gap-3 normal-case btn bg-green-500 text-white border-0 mt-2 hover:bg-green-600"
                      >
                        Complete Order
                        {loading && order.order_id == orderID ? (
                          <LoadingSpinner></LoadingSpinner>
                        ) : (
                          <></>
                        )}
                      </button>
                    ) : null}
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

// {window.location.pathname.endsWith("/manage-orders") ? (
//   <button
//     onClick={() => {
//       handleProceedToDelivery(order?.order_id);
//     }}
//     className=" gap-3 normal-case btn bg-green-500 text-white border-0 mt-2 hover:bg-green-600"
//   >
//     Proceed to delivery
//     {loading && order.order_id == orderID ? (
//       <LoadingSpinner></LoadingSpinner>
//     ) : (
//       <></>
//     )}
//   </button>
// ) : (
//   <button
//     onClick={() => {
//       handleBtnToDeliveryGuy(order?.order_id);
//     }}
//     className=" gap-3 normal-case btn bg-green-500 text-white border-0 mt-2 hover:bg-green-600"
//   >
//     Handover to delivery guy
//     {loading && order.order_id == orderID ? (
//       <LoadingSpinner></LoadingSpinner>
//     ) : (
//       <></>
//     )}
//   </button>
// )}
