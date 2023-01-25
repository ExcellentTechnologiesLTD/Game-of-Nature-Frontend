import React, { useEffect, useState } from "react";

const Cart = ({
  voucher,
  setVoucher,
  discount,
  setDiscount,
  shippingCost,
  totalCartItemCost,
  setTotalCartItemCost,
  cartItems,
  setCartItems,
}) => {
  const [discountApplied, setDiscountApplied] = useState(
    voucher ? true : false
  );
  const [subTotal, setSubTotal] = useState(totalCartItemCost);
  const [showTotal, setShowTotal] = useState(
    discountApplied ? subTotal - discount : subTotal
  );

  useEffect(() => {
    setShowTotal(subTotal - discount);
  }, [subTotal, discountApplied == true]);

  const handleVoucherBlur = (e) => {
    setVoucher(e.target.value);
  };
  const handleVoucherApplyBtn = () => {
    console.log("Voucher: ", voucher);
    if (discountApplied) {
      alert("Discount already applied");
    } else {
      if (voucher == null) {
      } else {
        fetch(`http://game-of-nature-backend.vercel.app/get-voucher/${voucher}`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.status != 404 && data?.success != false) {
              setVoucher(voucher);
              setDiscount(data.discount_amount);
              setDiscountApplied(true);
              //   calculations
              //   Save in local Storage
              localStorage.setItem("discountVoucherName", voucher);
              localStorage.setItem(
                "discountVoucherAmount",
                data.discount_amount
              );
              localStorage.setItem("discountApplied", true);
            } else {
              alert(data.msg);
            }
          });
      }
    }
  };

  const handleRemoveVoucherBtn = () => {
    let prevTotal = showTotal + discount;
    if (subTotal == prevTotal) {
      console.log("true");
      setShowTotal(prevTotal);
      setDiscount(0);
      setVoucher("");
      setDiscountApplied(false);
      //    clean Local storage
      localStorage.removeItem("discountVoucherAmount");
      localStorage.removeItem("discountVoucherName");
      localStorage.removeItem("discountApplied");
      //   reload for voucher name to disappear
      window.location.reload(true);
    } else {
      //   console.log("false");
      alert("Error removing voucher. Call developer.");
    }
  };

  const handleDecreaseBtnClick = (itemID) => {
    let tempSubTotal = subTotal;
    cartItems.map((item) => {
      if (item.itemID === itemID) {
        if (item.orderQnty > 1) {
          item.orderQnty--;
          tempSubTotal -= parseInt(item.price);
          setCartItems(cartItems);
          localStorage.setItem("myCartItems", JSON.stringify(cartItems));
          setSubTotal(tempSubTotal);
          setTotalCartItemCost(tempSubTotal);
          localStorage.setItem("totalCartItemCost", tempSubTotal.toString());
        }
      }
    });
  };

  const handleIncreaseBtnClick = (itemID) => {
    let tempSubTotal = subTotal;
    cartItems.map((item) => {
      if (item.itemID === itemID) {
        if (item.orderQnty >= 1) {
          item.orderQnty++;
          tempSubTotal += parseInt(item.price);
          setCartItems(cartItems);
          localStorage.setItem("myCartItems", JSON.stringify(cartItems));
          setSubTotal(tempSubTotal);
          setTotalCartItemCost(tempSubTotal);
          localStorage.setItem("totalCartItemCost", tempSubTotal.toString());
        }
      }
    });
  };

  const deleteItem = (itemID) => {
    let cartArray = [];

    let tempSubTotal = subTotal;

    console.log("before: ", tempSubTotal);
    const xx = cartItems.filter((item) => item.itemID == itemID);

    // // Re-calculating total
    tempSubTotal -= xx[0].orderQnty * parseInt(xx[0].price);
    console.log("after: ", tempSubTotal);
    // // re-organizing cart without that item.
    cartArray = cartItems.filter((item) => item.itemID != itemID);
    // // setting values to its places.
    localStorage.setItem("myCartItems", JSON.stringify(cartArray));
    localStorage.setItem("totalCartItemCost", tempSubTotal.toString());

    setCartItems(cartArray);
    setTotalCartItemCost(tempSubTotal);
    setSubTotal(tempSubTotal);
  };

  return (
    <div
      className={`${
        window.location.pathname.endsWith("/dashboard/checkout")
          ? " bg-slate-200 py-5"
          : ""
      } w-96`}
    >
      <div className={`py-5 px-5 flex justify-between`}>
        <h1 className="text-xl font-semibold font-serif">Order Summary</h1>
        <button
          className={`text-red-600 hover:underline ${
            cartItems == null ? "hidden" : ""
          }`}
          onClick={() => {
            //    voucher & discount
            localStorage.removeItem("discountVoucherAmount");
            localStorage.removeItem("discountVoucherName");
            localStorage.removeItem("discountApplied");
            setVoucher("");
            setDiscountApplied(false);
            setDiscount(0);
            // cart
            localStorage.removeItem("myCartItems");
            localStorage.removeItem("totalCartItemCost");
            setCartItems([]);
            setSubTotal(0);
            setShowTotal(0);
            setTotalCartItemCost(0);
            // change UI
            window.location.replace("/");
          }}
        >
          Reset cart
        </button>
      </div>
      <div className="h-96 overflow-auto">
        {cartItems == null ? <div>No items in cart.</div> : <div></div>}

        {cartItems?.map((myItem) => (
          <div
            key={myItem.itemID}
            className="flex items-center justify-between gap-4 px-4 mb-5"
          >
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
          </div>
        ))}
      </div>
      {/* Calculations */}
      <div className="">
        <div className="divider my-0 px-2"></div>
        <div className="max-w-full flex justify-between gap-2 px-5 py-2">
          <input
            onBlur={handleVoucherBlur}
            className="w-full px-2 rounded-xl"
            defaultValue={voucher}
            type="text"
            placeholder="Apply Voucher"
          />
          {discountApplied == false && discount == 0 ? (
            <button
              onClick={() => {
                handleVoucherApplyBtn();
              }}
              className="btn"
            >
              Apply
            </button>
          ) : (
            <button
              onClick={() => {
                handleRemoveVoucherBtn();
              }}
              className="btn"
            >
              Remove
            </button>
          )}
        </div>
        <div className="divider my-0 px-2"></div>
        <div>
          <div className=" px-5 flex justify-between">
            <h1 className="">Sub total: </h1>
            <h1 className="  flex justify-between gap-2 items-center w-32">
              <span className="">BDT.</span> <span>{subTotal}.00 </span>
            </h1>
          </div>
          <div className=" px-5 flex justify-between">
            <h1 className="">
              Discount: (
              <span className="text-sm">
                {localStorage.getItem("discountVoucherName")}
              </span>
              ){" "}
            </h1>
            <h1 className=" flex gap-2 justify-between items-center w-32">
              <span className="">BDT.</span>
              <span className="">
                - {discount}
                .00
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
          <div className="text-2xs text-left px-5 text-red-600">
            <h6>**Inside Dhaka: BDT. 70**</h6>
            <h6>**Outside Dhaka: BDT. 160**</h6>
          </div>
        </div>
        <div className="divider my-0 px-2"></div>
        <div>
          <div className=" px-5 flex justify-between ">
            <h1 className="font-semibold text-2xl">Total: </h1>
            <h1 className=" flex justify-between gap-2 items-center ">
              <span className="">BDT.</span>{" "}
              <span className="text-2xl">
                {showTotal + shippingCost}
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
