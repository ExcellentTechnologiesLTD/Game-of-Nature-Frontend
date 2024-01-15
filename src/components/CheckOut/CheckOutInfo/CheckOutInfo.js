import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CartContext } from "../../../App";
import BkashLogo from "../../../Assets/icons/bKash-logo-vector.png";
import PaymentCards from "../../../Assets/icons/payment-cards.png";
import auth from "../../../firebase.init";

const CheckOutInfo = ({ setCheckOutComplete }) => {
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
  // console.log("userDetails: ", userDetails);
  const [userGoogle] = useAuthState(auth);
  const [paymentMethod, setPaymentMethod] = useState("BKASH");
  const [email, setEmail] = useState(userDetails?.Email);
  const [firstName, setFirstName] = useState(userDetails?.First_Name);
  const [lastName, setLastName] = useState(userDetails?.Last_Name);
  const [address, setAddress] = useState(userDetails?.Address);
  const [city, setCity] = useState(userDetails?.city);
  const [postalCode, setPostalCode] = useState(userDetails?.postal_code);
  const [phone, setPhone] = useState(userDetails?.Mobile);
  const [loading, setLoading] = useState(false);
  const [userFound, setUserFound] = useState(userDetails ? true : false);
  const [keepShippingDetails, setKeepShippingDetails] = useState(true);

  const [insideDhakaDeliveryCost, setInsideDhakaDeliveryCost] = useState(0);
  const [outsideDhakaDeliveryCost, setOutsideDhakaDeliveryCost] = useState(0);

  const getCurentDate = () => {
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    return date;
  };
  const getCurentTime = () => {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;

    return strTime;
  };
  useEffect(() => {
    if (keepShippingDetails) {
      setFirstName(userDetails?.First_Name);
      setLastName(userDetails?.Last_Name);
      setAddress(userDetails?.Address);
      setCity(userDetails?.city);
      setPostalCode(userDetails?.postal_code);
      setPhone(userDetails?.Mobile);
    }
  }, [keepShippingDetails]);

  useEffect(() => {
    fetch("https://game-of-nature-backend.vercel.app/get-policies")
      .then((res) => res.json())
      .then((data) => {
        setInsideDhakaDeliveryCost(data.info.Inside_Dhaka_Delivery_Cost);
        setOutsideDhakaDeliveryCost(data.info.Outside_Dhaka_Delivery_Cost);

        if (city == "Dhaka" || city == "dhaka") {
          setShippingCost(data.info.Inside_Dhaka_Delivery_Cost);
          console.log(
            "insideDhakaDeliveryCost: ",
            data.info.Inside_Dhaka_Delivery_Cost
          );
          localStorage.setItem(
            "shippingCost",
            data.info.Inside_Dhaka_Delivery_Cost
          );
        } else {
          setShippingCost(data.info.Outside_Dhaka_Delivery_Cost);
          console.log(
            "outsideDhakaDeliveryCost: ",
            data.info.Outside_Dhaka_Delivery_Cost
          );
          localStorage.setItem(
            "shippingCost",
            data.info.Outside_Dhaka_Delivery_Cost
          );
        }
      });
  }, [city]);

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleEmailBlur = (e) => {
    if (e.target.value != "") {
      setEmail(e.target.value);
    }
  };
  const handleFirstNameBlur = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameBlur = (e) => {
    setLastName(e.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handleCityBlur = (e) => {
    if (e.target.value != "") {
      if (e.target.value === "Dhaka" || e.target.value === "dhaka") {
        setShippingCost(70);
      } else {
        setShippingCost(160);
      }
    }
    setCity(e.target.value);
  };
  const handlePostalCodeBlur = (e) => {
    setPostalCode(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  // Save Confirm Button
  const handleCheckoutInfoSubmitBtn = (e) => {
    e.preventDefault();
    let orderInfo;
    let total;

    if (city == "Dhaka" || (city == "dhaka" && city != null)) {
      total = totalCartItemCost - discount + shippingCost;
    } else {
      total = totalCartItemCost - discount + shippingCost;
    }
    let agree = window.confirm(
      "By clicking OK you agree to Game of Nature's Terms & Condition and Refund Policy."
    );
    if (agree) {
      //*********Date & Time******************************************************

      var date = getCurentDate();
      var time = getCurentTime();

      //*********Date & Time******************************************************
      setTimeout(() => {
        if (userFound) {
          // With existing user details
          if (keepShippingDetails) {
            orderInfo = {
              user_id: userDetails?.user_id,
              email: email,
              paymentMethod: paymentMethod,
              orderedItems: JSON.stringify(cartItems),
              totalAmount: total,
              discountAmount: discount,
              voucherName: voucherName,
              full_name: firstName + " " + lastName,
              address: userDetails?.Address,
              city: userDetails?.city,
              shipping_charge: shippingCost,
              postal_code: userDetails?.postal_code,
              phoneNumber: userDetails?.Mobile,
              date: date,
              time: time,
            };
          }
          // with new Entered details.
          else {
            orderInfo = {
              user_id: userDetails?.user_id,
              email: email,
              paymentMethod: paymentMethod,
              orderedItems: JSON.stringify(cartItems),
              totalAmount: total,
              discountAmount: discount,
              voucherName: voucherName,
              full_name: firstName + " " + lastName,
              address: address,
              city: city,
              shipping_charge: shippingCost,
              postal_code: postalCode,
              phoneNumber: phone,
              date: date,
              time: time,
            };
          }
          console.log(
            "orderInfo.shipping_charge => ",
            orderInfo.shipping_charge
          );

          if (
            orderInfo.user_id &&
            orderInfo.email &&
            orderInfo.paymentMethod &&
            orderInfo.orderedItems &&
            orderInfo.totalAmount &&
            // &&
            // orderInfo.discountAmount
            // orderInfo.voucherName &&
            orderInfo.full_name &&
            orderInfo.address &&
            orderInfo.city &&
            orderInfo.postal_code &&
            orderInfo.phoneNumber &&
            orderInfo.date &&
            orderInfo.time &&
            orderInfo.shipping_charge
          ) {
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderInfo }),
            };

            console.log(
              "order Going: >>>>>> \n ",
              JSON.parse(requestOptions.body)
            );

            fetch(
              "https://game-of-nature-backend.vercel.app/confirm-order",
              // "http://localhost:3300/confirm-order",

              requestOptions
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.status == 200 && data.success) {
                  // Change UI to Thankyou for ordering. With Home Button & orderID
                  console.log("Order Placed: ", data.success);
                  // Delete Local Storages Discount, vouchers, cart
                  localStorage.removeItem("discountVoucherAmount");
                  localStorage.removeItem("discountVoucherName");
                  localStorage.removeItem("discountApplied");
                  setVoucherName("");
                  setDiscount(0);
                  // cart
                  localStorage.removeItem("myCartItems");
                  localStorage.removeItem("totalCartItemCost");
                  localStorage.removeItem("totalAmount");
                  setCartItems([]);
                  setTotalCartItemCost(0);
                  // Done
                  setCheckOutComplete(data);
                } else {
                  alert(`Error Order cannot be placed. Call support.`);
                }
              });
          } else {
            alert("Enter all details to place order.");
          }
        }
      }, 500);
    }
  };

  const handleCheckBoxChange = () => {
    setKeepShippingDetails(!keepShippingDetails);
  };

  return (
    <div className="lg:w-3/4 mx-auto text-2xl pt-10 px-4">
      <h1 className="pb-5">Checkout Information</h1>
      <form
        onSubmit={handleCheckoutInfoSubmitBtn}
        className=" lg:px-10 xs:px-3 mb-16"
      >
        {/* Contact Information */}
        <div className="form-control w-full">
          <label className="label px-0">
            <span className="label-text font-semibold">
              Current User Contact Information
            </span>
          </label>
          <div className="flex justify-between">
            <input
              required
              disabled={userDetails ? true : false}
              defaultValue={userGoogle?.email} // user google or userData or null
              type="text"
              onBlur={handleEmailBlur}
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          <progress
            className={`${loading ? "" : "hidden"} progress w-20 mx-auto mt-3`}
          ></progress>
        </div>

        {/* Delivery option */}
        <div className="my-6">
          <h1 className="label-text text-left font-semibold mb-2">
            Payment Method
          </h1>
          <div>
            <div className="form-control border-t-2 border-x-2 rounded-t-lg">
              <label className="label cursor-pointer flex justify-start gap-2 ">
                <input
                  required
                  type="radio"
                  name="radio-10"
                  value="BKASH"
                  onChange={handlePaymentMethod}
                  className="radio checked:bg-red-500"
                />
                <span className="label-text flex gap-2 items-center ">
                  <figure className="w-14 h-8 flex items-center rounded-full p-1.5 ">
                    <img className="h-6  mx-auto" src={BkashLogo} />
                  </figure>
                  <div>Pay with BKASH</div>
                </span>
              </label>
            </div>
            {/* <div className="form-control border-t-2 border-x-2 ">
              <label className="label cursor-pointer flex justify-start gap-2 ">
                <input
                  type="radio"
                  name="radio-10"
                  value="Credit/Debit Card"
                  onChange={handlePaymentMethod}
                  className="radio checked:bg-red-500"
                />
                <span className="label-text flex items-center gap-2 ">
                  <figure className="w-14 h-8 flex items-center ">
                    <img src={PaymentCards} />
                  </figure>
                  <div>Pay with credit or debit card</div>
                </span>
              </label>
            </div> */}
            {city == "Dhaka" || city == "dhaka" ? (
              <div className={` form-control border-t-2 border-x-2`}>
                <label className="label cursor-pointer flex justify-start gap-2 ">
                  <input
                    type="radio"
                    name="radio-10"
                    value="COD"
                    onChange={handlePaymentMethod}
                    className="radio checked:bg-red-500"
                  />
                  <span className="flex items-center gap-2 label-text">
                    <div className="w-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="green"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>
                    </div>
                    <div>Cash on Delivery</div>
                  </span>
                </label>
              </div>
            ) : (
              <></>
            )}
            <div className="form-control border-2 rounded-b-lg">
              <label className="label cursor-pointer flex justify-start gap-2">
                <input
                  disabled
                  type="radio"
                  name="radio-10"
                  value="PICKUP"
                  onChange={handlePaymentMethod}
                  className="radio checked:bg-blue-500 border-2 border-gray-600"
                />
                <span className="label-text text-gray-400 h-8 flex items-center gap-3">
                  <div className="w-14 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                      />
                    </svg>
                  </div>
                  <div>Pick up from store</div>
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* Shipping Details */}
        <div className="">
          <span className="flex justify-between">
            <span className="label-text text-left font-semibold mb-2">
              Shipping Details
            </span>
            <span className="flex items-center gap-2 label-text text-left font-semibold mb-2">
              <small className="text-xs ">keep existing shipping details</small>
              <input
                type="checkbox"
                checked={keepShippingDetails}
                onChange={handleCheckBoxChange}
                className="checkbox checkbox-primary"
              />
            </span>
          </span>
          <div>
            <input
              type="text"
              placeholder="Country"
              disabled
              value="Bangladesh"
              className="input input-bordered w-full"
            />
            {keepShippingDetails ? (
              <div>
                <div className="flex justify-between gap-4 my-3">
                  <input
                    required
                    type="text"
                    disabled={userFound && keepShippingDetails}
                    value={userDetails?.First_Name}
                    onBlur={handleFirstNameBlur}
                    placeholder="First Name"
                    className="input input-bordered w-full"
                  />

                  <input
                    required
                    type="text"
                    disabled={userFound && keepShippingDetails == true}
                    value={userDetails?.Last_Name}
                    onBlur={handleLastNameBlur}
                    placeholder="Last Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <input
                  required
                  type="text"
                  disabled={userFound && keepShippingDetails == true}
                  value={userDetails?.Address}
                  onBlur={handleAddressBlur}
                  placeholder="Address"
                  className="input input-bordered w-full"
                />
                <div className="flex justify-between gap-4 mt-3">
                  <input
                    required
                    type="text"
                    disabled={userFound && keepShippingDetails == true}
                    value={userDetails?.city}
                    onBlur={handleCityBlur}
                    placeholder="City"
                    className="input input-bordered w-full"
                  />
                  <input
                    required
                    type="text"
                    disabled={userFound && keepShippingDetails == true}
                    value={userDetails?.postal_code}
                    onBlur={handlePostalCodeBlur}
                    placeholder="Postal code"
                    className="input input-bordered w-full"
                  />
                </div>
                <input
                  required
                  type="text"
                  disabled={userFound && keepShippingDetails == true}
                  value={userDetails?.Mobile}
                  onBlur={handlePhoneBlur}
                  placeholder="Phone"
                  className="input input-bordered w-full mt-3"
                />
              </div>
            ) : (
              <div>
                <div className="flex justify-between gap-4 my-3">
                  <input
                    required
                    type="text"
                    disabled={userFound && keepShippingDetails}
                    defaultValue={firstName}
                    onBlur={handleFirstNameBlur}
                    placeholder="First Name"
                    className="input input-bordered w-full"
                  />

                  <input
                    required
                    type="text"
                    disabled={userFound && keepShippingDetails == true}
                    defaultValue={lastName}
                    onBlur={handleLastNameBlur}
                    placeholder="Last Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <input
                  required
                  type="text"
                  disabled={userFound && keepShippingDetails == true}
                  defaultValue={address}
                  onBlur={handleAddressBlur}
                  placeholder="Address"
                  className="input input-bordered w-full"
                />
                <div className="flex justify-between gap-4 mt-3">
                  <input
                    required
                    type="text"
                    disabled={userFound && keepShippingDetails == true}
                    defaultValue={city}
                    onBlur={handleCityBlur}
                    placeholder="City"
                    className="input input-bordered w-full"
                  />
                  <input
                    required
                    type="text"
                    disabled={userFound && keepShippingDetails == true}
                    defaultValue={postalCode}
                    onBlur={handlePostalCodeBlur}
                    placeholder="Postal code"
                    className="input input-bordered w-full"
                  />
                </div>
                <input
                  required
                  type="text"
                  disabled={userFound && keepShippingDetails == true}
                  defaultValue={phone}
                  onBlur={handlePhoneBlur}
                  placeholder="Phone"
                  className="input input-bordered w-full mt-3"
                />
              </div>
            )}
          </div>
        </div>
        {(city == "Dhaka" || city == "dhaka") &&
        paymentMethod == "COD" &&
        cartItems ? (
          <button
            type="submit"
            className={` ml-auto flex justify-between gap-4 btn normal-case mt-4`}
          >
            Confirm Order{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        ) : (
          <div>
            {paymentMethod == "BKASH" ? (
              <button
                type="submit"
                className="ml-auto flex justify-between gap-4 btn normal-case mt-4"
              >
                Pay with Bkash
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto flex justify-between gap-4 btn normal-case mt-4"
              >
                Pay with Card
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckOutInfo;
