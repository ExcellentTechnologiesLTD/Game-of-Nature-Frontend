import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import logo from "../../Assets/image/logo.jpg";
import facialPic from "../../Assets/image/facial-care.jpg";
import hairCarePic from "../../Assets/image/hair-care.jpg";
import bodyCarePic from "../../Assets/image/body-care.jpg";
import babyCarePic from "../../Assets/image/baby-care.jpg";
import spaPic from "../../Assets/image/spa.jpg";
import dailyNeedsPic from "../../Assets/image/daily-needs.jpg";
import perfumePic from "../../Assets/image/perfume.jpg";
import groceriesPic from "../../Assets/image/groceries.jpg";
import "./NavbarStyles.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useSignOut } from "react-firebase-hooks/auth";
import "../../js/commonJs";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [userGoogle] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  const [myCartItemsJson, setMyCartItems] = useState(
    JSON.parse(localStorage.getItem("myCartItems"))
  );

  // console.log("Size: ", myCartItemsJson?.length);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/signin`;

  const userData = JSON.parse(
    localStorage.getItem("currentUserDetails")
  )?.currentUserInfo;
  // console.log(userData);

  const handleLogOutBtn = () => {
    localStorage.removeItem("currentUserDetails");
    window.location.reload(true);
  };

  const googleSignOut = async () => {
    const success = await signOut();
    if (success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="sticky top-0 z-50 font-serif bg-white">
      <div className=" shadow-2xl lg:pb-0 md:pb-5 pb-5">
        <div className="bg-green-500 flex justify-between items-center px-5 py-2">
          <div className="flex justify-start font-bold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mr-2 xs:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <h1>(+880) 1816-560458</h1>
          </div>
          <div className="flex gap-4">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              stroke="white"
            >
              {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
            </svg>
          </div>
        </div>
        <div className="navbar flex justify-between">
          <div className=" flex-none">
            <div className="navbar-start w-auto lg:hidden ">
              <div className="dropdown">
                <label
                  tabIndex="0"
                  className="btn bg-white hover:bg-slate-200 border-0 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                {userData?.User_Type == "Customer" ||
                userData == null ||
                userGoogle != null ? (
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow-2xl border-green-200 border-2 bg-green-50 rounded-b-box w-60"
                  >
                    <li>
                      <a
                        href="/facial-care"
                        className="hover:bg-green-100 z-50"
                      >
                        <img
                          className="w-10 h-10 rounded-2xl"
                          src={facialPic}
                          alt=""
                        />
                        Facial care
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hair-care"
                        className="hover:bg-green-100 cursor-pointer"
                      >
                        <img
                          className="w-10 h-10 rounded-2xl"
                          src={hairCarePic}
                          alt=""
                        />
                        Hair care
                      </a>
                    </li>
                    <li>
                      <a href="/body-care" className="hover:bg-green-100">
                        <img
                          className="w-10 h-10 rounded-2xl"
                          src={bodyCarePic}
                          alt=""
                        />
                        Body care
                      </a>
                    </li>
                    <li>
                      <a href="/baby-care" className="hover:bg-green-100">
                        <img
                          className="w-10 h-10 rounded-2xl"
                          src={babyCarePic}
                          alt=""
                        />
                        Baby care
                      </a>
                    </li>
                    <li>
                      <a href="/spa&massage" className="hover:bg-green-100">
                        <img
                          className="w-10 h-10 rounded-2xl"
                          src={spaPic}
                          alt=""
                        />
                        Spa & Massage
                      </a>
                    </li>
                    <li>
                      <a href="/daily-needs" className="hover:bg-green-100">
                        <img
                          className="w-10 h-10 rounded-2xl"
                          src={dailyNeedsPic}
                          alt=""
                        />
                        Daily needs
                      </a>
                    </li>
                    <li>
                      <a href="/perfumes&attar" className="hover:bg-green-100">
                        <img
                          className="w-10 h-10 rounded-2xl"
                          src={perfumePic}
                          alt=""
                        />
                        Perfumes & Attar
                      </a>
                    </li>
                    <li>
                      <a href="/groceries" className="hover:bg-green-100">
                        <img
                          className="w-10 h-10 rounded-2xl"
                          src={groceriesPic}
                          alt=""
                        />
                        Groceries
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul
                    tabIndex="0"
                    className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52 shadow-2xl"
                  >
                    <li className="flex">
                      <a href="/admin-dashboard/addproducts">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="black"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>{" "}
                        Add a product
                      </a>
                    </li>
                    <li>
                      <a href="/admin-dashboard">
                        {" "}
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
                            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                          />
                        </svg>
                        All products
                      </a>
                    </li>
                    <li>
                      <a href="/admin-dashboard/manage-deliveries">
                        {" "}
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
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                        Manage Deliveries
                      </a>
                    </li>
                    <li>
                      <a href="/admin-dashboard/manage-orders">
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
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                        Manage Orders
                      </a>
                    </li>
                    <li>
                      <a href="/admin-dashboard/manage-vouchers">
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
                            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                          />
                        </svg>
                        Manage Vouchers
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="font-bold text-xl">
              <a href="/" className="flex  items-center">
                <img
                  className="w-20 h-20"
                  src={logo}
                  alt="Game of Nature Logo"
                />
                <h1 className="hidden-items">
                  Game of <span className="text-green-500"> Nature </span>
                </h1>
              </a>
            </div>
          </div>
          {userData?.User_Type == "Customer" ||
          userData?.User_Type == null ||
          userGoogle != null ? (
            <div className="hidden_items flex w-96 border-2 border-green-400 rounded-3xl px-3 py-2">
              {" "}
              <input className="w-full" type="text" placeholder="Search..." />
              <a href="">
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </a>
            </div>
          ) : (
            <></>
          )}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="flex justify-center items-center hover:scale-105 hover:ease-in-out hover:duration-300 mr-2"
              >
                {userGoogle?.photoURL ? (
                  <img
                    className={`w-10 rounded-full`}
                    src={userGoogle.photoURL}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
                <h6 className="hidden_items ml-2" href="/signin">
                  {userGoogle?.displayName || userData?.First_Name || "Account"}
                </h6>
              </label>

              {userData || userGoogle ? (
                <ul
                  tabIndex="0"
                  className="dropdown-content w-100 menu p-2 shadow bg-base-100 rounded-box lg:w-96 md:w-80 xs:w-72 border-t-2 "
                >
                  <li className="mt-5 font-semibold">
                    {userData?.First_Name || userGoogle?.displayName}
                  </li>
                  <li className="flex justify-center items-center text-sm">
                    {userGoogle?.email || userData?.Email}
                  </li>
                  <div className="divider"></div>
                  {userData?.User_Type == "Admin" ? (
                    <li>
                      <a href="/admin-dashboard">Dashboard</a>
                    </li>
                  ) : (
                    <li>
                      <a href="/dashboard/order-history">Order History</a>
                    </li>
                  )}

                  <li className="pb-4">
                    <a>My profile</a>
                  </li>
                  <li className=" border-t-2">
                    <a
                      onClick={userGoogle ? googleSignOut : handleLogOutBtn}
                      // onClick={userGoogle ? signOut : handleLogOutBtn}
                      className=" block mt-1.5"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              ) : (
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="/signin">Sign in</a>
                  </li>
                </ul>
              )}
            </div>

            {userData?.User_Type == "Customer" ||
            userData?.User_Type == null ||
            userGoogle != null ? (
              <div
                onClick={(event) => {
                  navigate(from, { replace: true });
                }}
                className={`dropdown dropdown-hover dropdown-end  mx-2 hover:underline ${
                  userData?.User_Type == "Admin" ? "hidden" : ""
                }`}
              >
                <div className="flex items-center">
                  <a
                    href="/dashboard/checkout"
                    tabIndex="0"
                    className={`ml-1 indicator`}
                  >
                    <span
                      className={`${
                        myCartItemsJson?.length == undefined ||
                        myCartItemsJson?.length == 0
                          ? "hidden"
                          : "indicator-item text-white font-regular text-lg -top-1 -left-1.5 badge bg-green-600 border-0 pt-2 pb-3 h-6"
                      }`}
                    >
                      {myCartItemsJson?.length}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-7 h-7 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </a>
                  <h1 className="hidden_items">Shopping Bag</h1>
                </div>

                <div
                  tabIndex="0"
                  className="z-50 rounded-xl dropdown-content p-2 shadow bg-slate-200 w-96 h-96 overflow-auto"
                >
                  {/* <Cart></Cart> */}
                  <Cart></Cart>
                  <div className="divider my-0"></div>

                  <a
                    href="dashboard/checkout"
                    className={`${
                      myCartItemsJson == null ? "hidden" : ""
                    } btn w-full bg-green-500 hover:bg-green-600`}
                  >
                    {" "}
                    Checkout
                  </a>
                  {/* No items in cart. */}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className=" ">
          {userData?.User_Type == "Admin" ? (
            <div
              id="Categories"
              className="h-10 grid grid-cols-5 items-center border-t-2 border-green-100"
            >
              <a
                href="/admin-dashboard/addproducts"
                className="hover:bg-green-100"
              >
                Add a Product
              </a>
              <a href="/admin-dashboard" className="hover:bg-green-100">
                All Products
              </a>
              <a
                href="/admin-dashboard/manage-deliveries"
                className="hover:bg-green-100"
              >
                Manage Deliveries
              </a>
              <a
                href="/admin-dashboard/manage-orders"
                className="hover:bg-green-100"
              >
                Manage Orders
              </a>
              <a
                href="/admin-dashboard/manage-vouchers"
                className="hover:bg-green-100"
              >
                Manage Vouchers
              </a>
            </div>
          ) : (
            <div
              id="Categories"
              className="h-10 grid grid-cols-8 items-center border-t-2 border-green-100"
            >
              <a href="/facial-care" className="hover:bg-green-100">
                Facial care
              </a>
              <a href="/hair-care" className="hover:bg-green-100">
                Hair care
              </a>
              <a href="/body-care" className="hover:bg-green-100">
                Body care
              </a>
              <a href="/baby-care" className="hover:bg-green-100">
                Baby care
              </a>
              <a href="/spa&massage" className="hover:bg-green-100">
                Spa & Massage
              </a>
              <a href="/daily-needs" className="hover:bg-green-100">
                Daily needs
              </a>
              <a href="/perfumes&attar" className="hover:bg-green-100">
                Perfumes & Attar
              </a>
              <a href="/groceries" className="hover:bg-green-100">
                Groceries
              </a>
            </div>
          )}
        </div>
        {userData?.User_Type == "Customer" ||
        userData?.User_Type == null ||
        userGoogle ? (
          <div className="lg:hidden flex border-2 border-green-400 rounded-3xl px-3 py-2 mx-5 mt-2">
            {" "}
            <input
              className="w-full px-2"
              type="text"
              placeholder="Search..."
            />
            <a href="">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
