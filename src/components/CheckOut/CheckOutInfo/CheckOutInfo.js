import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import BkashLogo from "../../../Assets/icons/bKash-logo-vector.png";
import auth from "../../../firebase.init";
import OrderComplete from "../OrderComplete/OrderComplete";

const CheckOutInfo = ({
  userInfo,
  shippingCost,
  setShippingCost,
  setCheckOutComplete,
}) => {
  const [userGoogle] = useAuthState(auth);
  const [paymentMethod, setPaymentMethod] = useState("BKASH");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [userFound, setUserFound] = useState(userInfo ? true : false);

  //   const [userFound, setUserFound] = useState(userInfo ? true : false);
  const [password, setPassword] = useState("");
  const [passMatch, setPassMatch] = useState(false);
  //   After Checkout complete
  //   const [checkOutComplete, setCheckOutComplete] = useState({});

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleEmailBlur = (e) => {
    console.log("value: ??", e.target.value);
    if (e.target.value != "") {
      setEmail(e.target.value);
      setLoading(true);
      fetch("http://localhost:3300/check-existence", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: e.target.value }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log("Data: >>\n", data);
          if (data.success != true) {
            setUserFound(false);
          } else {
            setUserFound(true);
            setFirstName(data?.info?.First_Name);
            setLastName(data?.info?.Last_Name);
            setAddress(data?.info?.Address);
            setPhone(data?.info?.Mobile);
            setCity(data?.info?.city);
            setPostalCode(data?.info?.postal_code);
          }
        });
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
  const handleApartmentBlur = (e) => {
    setApartment(e.target.value);
  };
  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };
  //   const handleRePassBlur = (e) => {
  //     if (password === e.target.value) {
  //       setPassMatch(true);
  //     }
  //   };

  const handleCityBlur = (e) => {
    // e.preventDefault();s
    // console.log("target value: : ", e.target.value);

    if (e.target.value != "") {
      if (e.target.value === "Dhaka" || e.target.value === "dhaka") {
        setShippingCost(60);
      } else {
        setShippingCost(100);
      }
    }
    setCity(e.target.value);
    // console.log("City: ", city);
  };

  const handlePostalCodeBlur = (e) => {
    setPostalCode(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };

  // For saving
  //   const handleCheckoutInfoSubmitBtn = (e) => {
  //     e.preventDefault();

  //     console.log("User ID: ", localStorage.getItem("userID"));
  //     //   if user found
  //     setEmail(userGoogle?.email);
  //     let orderInfo;
  //     if (userFound) {
  //       orderInfo = {
  //         email: email,
  //         user_id: localStorage.getItem("userID"),
  //         orderedItems: localStorage.getItem("myCartItems"),
  //         totalAmount: localStorage.getItem("totalCartItemCost"),
  //         paymentMethod: paymentMethod,
  //       };
  //     } else {
  //       //   if user not found
  //       orderInfo = {
  //         email: email,
  //         paymentMethod: paymentMethod,
  //         orderedItems: localStorage.getItem("myCartItems"),
  //         totalAmount: localStorage.getItem("totalCartItemCost"),
  //         firstName: firstName,
  //         lastName: lastName,
  //         address: address,
  //         city: city,
  //         postal_code: postalCode,
  //         phoneNumber: phone,
  //         password: password,
  //       };
  //     }
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ orderInfo }),
  //     };

  //     if (paymentMethod != "BKASH") {
  //       console.log("orderInfo\n");
  //       console.log(orderInfo);

  //       // Save info to orderTable
  //       //   console.log(orderInfo);
  //       //   fetch("http://localhost:3300/confirm-order", requestOptions)
  //       //     .then((res) => res.json())
  //       //     .then((data) => {
  //       //       if (data.status == 200 && data.success) {
  //       //         // alert(
  //       //         //   `Order placed with Order ID: ${data.order_id}. Login To know the status of the order.`
  //       //         // );
  //       //         console.log("Order Placed: ", data.success);
  //       //         localStorage.removeItem("myCartItems");
  //       //         localStorage.removeItem("totalCartItemCost");
  //       //         setCheckOutComplete(data);
  //       //       } else {
  //       //         alert(`Error Order cannot be placed. Call support.`);
  //       //       }
  //       //     });
  //       // Change UI to Thankyou for ordering. With Home Button & orderID
  //     }
  //   };

  const handleCheckoutInfoSubmitBtn = (e) => {
    e.preventDefault();
    let orderInfo;
    let total;

    if (city == "Dhaka" || (city == "dhaka" && city != null)) {
      total = parseInt(localStorage.getItem("totalCartItemCost")) + 60;

      setShippingCost(60);
    } else {
      total = parseInt(localStorage.getItem("totalCartItemCost")) + 100;

      setShippingCost(100);
    }

    setTimeout(() => {
      if (userFound != true) {
        orderInfo = {
          email: email,
          paymentMethod: paymentMethod,
          orderedItems: localStorage.getItem("myCartItems"),
          totalAmount: total,
          firstName: firstName,
          lastName: lastName,
          address: address,
          city: city,
          postal_code: postalCode,
          phoneNumber: phone,
        };
      } else {
        orderInfo = {
          email: email,
          user_id: localStorage.getItem("userID"),
          orderedItems: localStorage.getItem("myCartItems"),
          totalAmount: total,
          paymentMethod: paymentMethod,
        };
      }

      console.log("Payment hobe ki: >>>\n");
      console.log(orderInfo);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderInfo }),
      };

      fetch("http://localhost:3300/confirm-order", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.status == 200 && data.success) {
            // Change UI to Thankyou for ordering. With Home Button & orderID

            console.log("Order Placed: ", data.success);
            localStorage.removeItem("myCartItems");
            localStorage.removeItem("totalCartItemCost");
            localStorage.removeItem("totalAmount");
            setCheckOutComplete(data);
          } else {
            alert(`Error Order cannot be placed. Call support.`);
          }
        });
    }, 2000);
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
              Contact Information
            </span>
            {!userGoogle ? (
              <span className="label-text-alt">
                Already have an account?{" "}
                <span>
                  <a href="">Log in</a>
                </span>
              </span>
            ) : (
              <></>
            )}
          </label>
          <div className="flex justify-between">
            <input
              required
              //   disabled={userFound ? true : false}
              autoFocus
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
                  type="radio"
                  name="radio-10"
                  value="BKASH"
                  onChange={handlePaymentMethod}
                  className="radio checked:bg-red-500"
                />
                <span className="label-text">
                  {" "}
                  <figure className="w-14 h-8 flex items-center">
                    <img src={BkashLogo} />
                  </figure>{" "}
                </span>
              </label>
            </div>
            <div className="form-control border-t-2 border-x-2">
              <label className="label cursor-pointer flex justify-start gap-2 ">
                <input
                  type="radio"
                  name="radio-10"
                  value="COD"
                  onChange={handlePaymentMethod}
                  className="radio checked:bg-red-500"
                />
                <span className="flex items-center gap-2 label-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="Green"
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
                  Cash on Delivery
                </span>
              </label>
            </div>
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
                <span className="label-text text-gray-400 h-8 flex items-center gap-2">
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
                  Pick up
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* Shipping Details */}
        <div className="">
          <h1 className="label-text text-left font-semibold mb-2">
            Shipping Details
          </h1>
          <div>
            <input
              type="text"
              placeholder="Country"
              disabled
              value="Bangladesh"
              className="input input-bordered w-full"
              autoFocus
            />
            <div className="flex justify-between gap-4 my-3">
              <input
                required
                type="text"
                autoFocus
                disabled={userFound}
                defaultValue={userInfo.First_Name}
                onBlur={handleFirstNameBlur}
                placeholder="First Name"
                className="input input-bordered w-full"
              />
              <input
                required
                type="text"
                autoFocus
                disabled={userFound}
                defaultValue={userInfo.Last_Name}
                onBlur={handleLastNameBlur}
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>
            <input
              required
              type="text"
              autoFocus
              disabled={userFound}
              defaultValue={userInfo.Address}
              onBlur={handleAddressBlur}
              placeholder="Address"
              className="input input-bordered w-full"
            />
            {/* <input
              type="text"
              onBlur={handleApartmentBlur}
              autoFocus
              placeholder="Apartment, suite,etc. (optional)"
              className="input input-bordered w-full my-3"
            /> */}
            <div className="flex justify-between gap-4 mt-3">
              <input
                required
                type="text"
                disabled={userFound}
                defaultValue={userInfo.city}
                autoFocus
                onBlur={handleCityBlur}
                placeholder="City"
                className="input input-bordered w-full"
              />
              <input
                required
                type="text"
                autoFocus
                disabled={userFound}
                defaultValue={postalCode}
                onBlur={handlePostalCodeBlur}
                placeholder="Postal code"
                className="input input-bordered w-full"
              />
            </div>
            <input
              required
              type="text"
              disabled={userFound}
              //   disabled={userFound?.user_id ? "true" : "false"}
              autoFocus
              defaultValue={phone}
              onBlur={handlePhoneBlur}
              placeholder="Phone"
              className="input input-bordered w-full mt-3"
            />
            {/* <div className={`${userFound ? "hidden" : ""}`}>
              <input
                // required={userFound}
                type="password"
                onBlur={handlePassBlur}
                placeholder="Set password"
                className={`${
                  passMatch ? "border-2 border-green-400" : ""
                } input input-bordered w-full mt-3`}
              />
              <input
                // required={userFound}
                type="password"
                onBlur={handleRePassBlur}
                placeholder="Re-type password"
                className={`${
                  passMatch ? "border-2 border-green-400" : ""
                } input input-bordered w-full my-3`}
              />
            </div> */}
          </div>
        </div>
        {/* <div></div> */}
        {paymentMethod == "BKASH" ? (
          <button
            autoFocus
            type="submit"
            className="ml-auto flex justify-between gap-4 btn normal-case mt-4"
          >
            Proceed to payment{" "}
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
            autoFocus
            className="ml-auto flex justify-between gap-4 btn normal-case mt-4"
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
        )}
      </form>
    </div>
  );
};

export default CheckOutInfo;