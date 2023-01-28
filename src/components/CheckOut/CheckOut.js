import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CartContext } from "../../App";
import auth from "../../firebase.init";
import Cart from "../Cart/Cart";

import CheckOutInfo from "./CheckOutInfo/CheckOutInfo";
import OrderComplete from "./OrderComplete/OrderComplete";

const CheckOut = () => {
  const [
    userDetails,
    setUserDetails,
    cartItems,
    setCartItems,
    totalCartItemCost,
    setTotalCartItemCost,
    shippingCost,
    setShippingCost,
    voucherName,
    setVoucherName,
    discount,
    setDiscount,
    discountApplied,
    setDiscountApplied,
    reload,
    setReload,
  ] = useContext(CartContext);

  const userData = JSON.parse(localStorage.getItem("currentUserDetails"));
  const [userGoogle, loading, error] = useAuthState(auth);
  const [checkOutComplete, setCheckOutComplete] = useState({});

  return (
    <div>
      {checkOutComplete.success == true ? (
        <OrderComplete data={checkOutComplete}></OrderComplete>
      ) : (
        <div className="lg:flex">
          <label
            htmlFor="my-modal-6"
            className="lg:hidden px-10 py-4 flex justify-between bg-gradient-to-b from-slate-300 to-base-100 w-full text-black rounded-none"
          >
            <span>Cart Items</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="w-6 h-6 hover:stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span>
              Total: BDT. {totalCartItemCost - discount + shippingCost}
            </span>
          </label>
          {/* Modal */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-slate-200 p-0">
              <div className="modal-action ml-auto w-fit bg-green-500 m-0 rounded-bl-2xl">
                <label
                  htmlFor="my-modal-6"
                  className="py-2  bg-green-500 border-0 rounded-full px-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              </div>
              <Cart></Cart>
            </div>
          </div>
          <div className="hidden-items  bg-slate-200">
            <Cart></Cart>
          </div>
          <div className="w-full ">
            <CheckOutInfo
              // userInfo={userInfo}
              setCheckOutComplete={setCheckOutComplete}
            ></CheckOutInfo>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
