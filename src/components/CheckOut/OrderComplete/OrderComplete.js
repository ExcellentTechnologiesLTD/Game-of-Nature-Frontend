import React from "react";

const OrderComplete = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-20 mb-40">
      <h1 className="font-semibold">Order Placed with ID: {data.order_id}</h1>
      <p className="text-sm ">
        Check the status of the order in the order history.
      </p>
      <p className="italic mt-2 ">
        Thank you for shopping with us. Hope to see you soon!!
      </p>
      <a href="/" className="btn px-5  rounded-2xl mt-10">
        Home
      </a>
    </div>
  );
};

export default OrderComplete;
