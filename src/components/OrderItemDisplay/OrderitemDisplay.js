import React from "react";

const OrderitemDisplay = (props) => {
  const { item } = props;
  return (
    <div className="flex items-center justify-between text-base font-normal my-5 ">
      <div className="flex items-center gap-2">
        <figure>
          <img className="w-14 rounded" src={item.photo_url} />
        </figure>

        <h1>{item.itemName}</h1>
      </div>
      <div className="flex items-center text-base font-normal">
        <span>
          <span className="font-normal text-2xs ">Qnty:</span>
          {item.orderQnty}
        </span>{" "}
        <span className="mx-3"> x </span>{" "}
        <span>
          <span className="font-normal text-2xs">BDT.</span>
          {item.price}
        </span>
      </div>
    </div>
  );
};

export default OrderitemDisplay;
