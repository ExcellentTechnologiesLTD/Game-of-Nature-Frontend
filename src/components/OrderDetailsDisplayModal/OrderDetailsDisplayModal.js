import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import Invoice from "../Invoice/Invoice";
import OrderitemDisplay from "../OrderItemDisplay/OrderitemDisplay";
import PDFFile from "../PDFFile/PDFFile";

const OrderDetailsDisplayModal = (props) => {
  const { order } = props;
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
  const handleDownloadInvoice = (orderID) => {};

  return (
    <div className="">
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
          <p className="">
            <span className=" font-semibold">User ID: </span>
            <span className="font-sans">{order?.user_id}</span>
          </p>
          <p>
            <span className="font-semibold">Name: </span>
            {order?.full_name}
          </p>
          <p className=" whitespace-normal">
            <span className="font-semibold">Address: </span>
            {order?.address}
          </p>
          <div className="flex justify-between">
            <p>
              <span className="font-semibold">City:</span> {order?.city}
            </p>
            <p>
              <span className="font-semibold ">Postal code: </span>
              {order?.postal_code}
            </p>
          </div>
          <p>
            <span className="font-semibold">Contact number: </span>
            {order?.phone}
          </p>
          <div className="flex gap-2">
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
          </div>
          <p>
            <span className="font-semibold">Shipping charge BDT. </span>
            {order?.shipping_charge}
            {/* {order?.city == "Dhaka" || order?.city == "dhaka" ? 70 : 160} */}
          </p>
          {/* <p className="border-2">
            <span className="font-semibold">Voucher: </span>
            {order?.voucher_name}
          </p> */}
          {/* <p>
            <span className="font-semibold">Discount BDT. </span>
            {order?.voucher_amount}
          </p> */}
        </div>
      </div>
      <div>
        <h1 className=" w-40 mx-auto bg-yellow-500 text-white mt-10 font-mono text-lg italic">
          {order?.voucher_name}
        </h1>
        <h1 className="font-mono text-lg italic">
          Discount BDT. {order?.voucher_amount}.00
        </h1>
        <h1 className=" font-mono text-lg italic">
          Total Amount BDT. {order?.total_amount}.00
        </h1>
      </div>
      {order?.order_status === "processing" ? (
        <button
          onClick={() => {
            handleOrderDelete(order?.order_id);
          }}
          className="btn bg-red-500 hover:bg-red-600 px-20 normal-case italic text-lg  font-normal mt-2"
        >
          {" "}
          Cancel Order
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OrderDetailsDisplayModal;

{
  //   <a
  //   // href=
  //   download="Example-PDF-document"
  //   target="_blank"
  //   rel="noreferrer"
  // >
  //   <button>Download .pdf file</button>
  // </a>
  /* <button
          onClick={() => {
            handleDownloadInvoice(order?.order_id);
          }}
        >
          Download Invoice
        </button> */
}
