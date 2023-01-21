import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import OrderitemDisplay from "../../OrderItemDisplay/OrderitemDisplay";

const OrderTable = (props) => {
  const orders = props.myOrders;
  console.log(orders);
  const googleUser = useAuthState(auth);
  const userData = JSON.parse(localStorage.getItem("currentUserDetails"));
  //   console.log("My UserData\n", userData);

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
            <th>Total Amount (BDT.)</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Action Buttons</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order?.order_id}>
              {/* {console.log("Items: \n", order)} */}
              <th>
                <label className="text-black">{index + 1}</label>
              </th>
              <td>
                {/* Order ID */}
                {order?.order_id}
              </td>
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
                {googleUser ? (
                  <div>
                    <label
                      htmlFor={order?.order_id}
                      className="font-normal hover:text-blue-700 hover:underline"
                    >
                      Details
                    </label>
                    {/* Order Details Display modal */}
                    <input
                      type="checkbox"
                      id={order?.order_id}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative">
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
                            Status:{" "}
                            <span className="text-red-700">
                              {order?.order_status}
                            </span>
                          </span>
                        </div>
                        <div className="flex gap-4 justify-end font-normal text-xs">
                          <span>{order?.ordered_date}</span>
                          <span>{order?.ordered_time}</span>
                        </div>
                        {/* Items */}
                        <div>
                          {JSON.parse(order.items).map((item) => (
                            <OrderitemDisplay
                              key={order?.order_id}
                              item={item}
                            ></OrderitemDisplay>
                          ))}
                        </div>
                        {/* shipping detail */}
                        <div className="font-serif">
                          <h1 className="text-white bg-black rounded-xl">
                            Shipping Details
                          </h1>
                          <div className="font-normal text-base text-left mt-5">
                            <p>
                              <span className="font-semibold">Address: </span>
                              {userData?.Address}
                            </p>
                            <div className="flex justify-between">
                              <p>
                                <span className="font-semibold">City:</span>{" "}
                                {userData?.city}
                              </p>
                              <p>
                                <span className="font-semibold ">
                                  Postal code:{" "}
                                </span>
                                {userData?.postal_code}
                              </p>
                            </div>
                            <p>
                              <span className="font-semibold">
                                Contact number:{" "}
                              </span>
                              {userData?.Mobile}
                            </p>
                            <p>
                              <span className="font-semibold">
                                Payment method:{" "}
                              </span>
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
                              <span className="font-semibold">
                                Shipping charge BDT.{" "}
                              </span>
                              {userData?.city == "Dhaka" ||
                              userData?.city == "dhaka"
                                ? 60
                                : 100}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h1 className="mt-10 font-mono text-lg italic">
                            Total Amount BDT. {order?.total_amount}.00
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <button className="btn-xs">details</button>
                    <button className="btn-xs">Proceed to delivery</button>
                  </div>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
