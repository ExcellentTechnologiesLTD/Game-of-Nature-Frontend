import React, { useEffect, useState } from "react";
// import cartItems from "./cartArray";

const Cart = (props) => {
  const { shippingCost } = props;
  const [myCartItemsJson, setMyCartItems] = useState(
    JSON.parse(localStorage.getItem("myCartItems"))
  );

  const [totalCartItemCost, setTotalCartItemCost] = useState(
    parseInt(localStorage.getItem("totalCartItemCost"))
  );
  // const myCartItems = localStorage.getItem("myCartItems");
  // const myCartItemsJson = JSON.parse(myCartItems);
  // console.log("mycartItems : ", myCartItemsJson);

  const handleIncreaseBtnClick = (itemID) => {
    let subTotal = totalCartItemCost;
    myCartItemsJson.map((item) => {
      if (item.itemID === itemID) {
        if (item.orderQnty >= 1) {
          item.orderQnty++;
          subTotal += parseInt(item.price);
          setMyCartItems(myCartItemsJson);
          localStorage.setItem("myCartItems", JSON.stringify(myCartItemsJson));
          setTotalCartItemCost(subTotal);
          localStorage.setItem("totalCartItemCost", subTotal.toString());
        }
      }
    });
    // setTotalCartItemCost(totalCartItemCost);
  };
  const handleDecreaseBtnClick = (itemID) => {
    let subTotal = totalCartItemCost;
    myCartItemsJson.map((item) => {
      if (item.itemID === itemID) {
        if (item.orderQnty > 1) {
          item.orderQnty--;
          subTotal -= parseInt(item.price);
          setMyCartItems(myCartItemsJson);
          localStorage.setItem("myCartItems", JSON.stringify(myCartItemsJson));
          setTotalCartItemCost(subTotal);
          localStorage.setItem("totalCartItemCost", subTotal.toString());
        }
      }
    });
    // setTotalCartItemCost(totalCartItemCost);
  };

  const deleteItem = (itemID) => {
    let cartArray = [];
    let subTotal = totalCartItemCost;
    const xx = myCartItemsJson.filter((item) => item.itemID == itemID);

    // Re-calculating total
    subTotal -= xx[0].orderQnty * parseInt(xx[0].price);

    // re-organizing cart without that item.
    cartArray = myCartItemsJson.filter((item) => item.itemID != itemID);
    // setting values to its places.
    localStorage.setItem("myCartItems", JSON.stringify(cartArray));
    localStorage.setItem("totalCartItemCost", subTotal.toString());
    setMyCartItems(cartArray);
    setTotalCartItemCost(subTotal);
  };

  return (
    <div
      // className=""
      className={`${
        window.location.pathname.endsWith("/dashboard/checkout")
          ? " bg-slate-200 py-5"
          : ""
      }`}
    >
      <div className={`py-5 px-5 flex justify-between`}>
        <h1 className="text-xl font-semibold font-serif">Order Summary</h1>
        <button
          className={`text-red-600 hover:underline ${
            myCartItemsJson == null ? "hidden" : ""
          }`}
          onClick={() => {
            setMyCartItems(localStorage.removeItem("myCartItems"));
            setTotalCartItemCost(localStorage.removeItem("totalCartItemCost"));
          }}
        >
          Reset cart
        </button>
      </div>
      <div className="h-96 overflow-auto">
        {myCartItemsJson == null ? <div>No items in cart.</div> : <div></div>}

        {myCartItemsJson?.map((myItem) => (
          <div
            key={myItem.itemID}
            className="flex items-center justify-between gap-4 px-4 mb-5"
          >
            {/* {setQnty(myItem.orderQnty)} */}
            <div className="flex justify-between items-center gap-4 w-full">
              <figure className="w-36 h-24">
                <img className=" w-36 h-24 rounded-xl" src={myItem.photo_url} />
              </figure>
              <div className="text-left w-full">
                <h1 className="font-bold">{myItem.itemName}</h1>
                <div className="text-xl">BDT. {myItem.price}</div>
              </div>
            </div>
            {/* Cart Buttons */}
            <div className="flex items-center gap-4 ">
              <div className="flex justify-center items-center border-2">
                <button
                  onClick={() => handleDecreaseBtnClick(myItem.itemID)}
                  className="bg-red-50 hover:bg-red-200 px-2 font-semibold text-2xl"
                >
                  -
                </button>
                <div className=" bg-white px-4 py-1 "> {myItem.orderQnty}</div>
                <button
                  onClick={() => handleIncreaseBtnClick(myItem.itemID)}
                  className="bg-green-100 hover:bg-green-200 px-2 text-2xl "
                >
                  +
                </button>
              </div>
              <button onClick={() => deleteItem(myItem.itemID)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-6 h-6 hover:bg-red-500 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

            {/* <div className="divider"></div> */}
          </div>
        ))}
      </div>
      {/* Calculations */}
      <div className="">
        <div className="divider my-0 px-2"></div>
        <div>
          <div className=" px-5 flex justify-between">
            <h1 className="">Sub total: </h1>
            <h1 className="  flex justify-between gap-2 items-center w-32">
              <span className="">BDT.</span>{" "}
              <span>
                {totalCartItemCost}
                .00{" "}
              </span>
            </h1>
          </div>
          <div className=" px-5 flex justify-between">
            <h1 className="">Shipping: </h1>
            <h1 className=" flex gap-2 justify-between items-center w-32">
              <span className="">BDT.</span>
              <span className="">{shippingCost}.00</span>
            </h1>
          </div>
        </div>
        <div className="divider my-0 px-2"></div>
        <div>
          <div className=" px-5 flex justify-between ">
            <h1 className="font-semibold text-2xl">Total: </h1>
            <h1 className=" flex justify-between gap-2 items-center ">
              <span className="">BDT.</span>{" "}
              <span className="text-2xl">
                {totalCartItemCost + shippingCost}
                .00{" "}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
