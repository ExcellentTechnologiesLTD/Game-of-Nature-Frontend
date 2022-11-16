import React from "react";
import { useLocation, useNavigate } from "react-router";
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

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/signin`;

  return (
    <div className="sticky top-0 z-50 font-serif">
      <div className=" bg-base-100 shadow-2xl lg:pb-0 md:pb-5 pb-5">
        <div className="bg-green-500 flex justify-between items-center px-5 py-2">
          <div className="flex justify-start font-bold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
            <div className="navbar-start w-auto lg:hidden">
              <div className="dropdown">
                <label
                  tabIndex="0"
                  className="btn bg-white border-0 text-black hover:bg-green-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52 shadow-2xl"
                >
                  <li>
                    <label tabindex="0" class="lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                      Categories
                    </label>
                    <ul
                      tabindex="0"
                      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80"
                    >
                      <li>
                        <a href="/facial-care" className="hover:bg-green-100">
                          <img
                            className="w-16 h-12 rounded-2xl"
                            src={facialPic}
                            alt=""
                          />
                          Facial care
                        </a>
                        <a
                          href="/hair-care"
                          className="hover:bg-green-100 cursor-pointer"
                        >
                          <img
                            className="w-16 h-12 rounded-2xl"
                            src={hairCarePic}
                            alt=""
                          />
                          Hair care
                        </a>
                        <a href="/body-care" className="hover:bg-green-100">
                          <img
                            className="w-16 h-12 rounded-2xl"
                            src={bodyCarePic}
                            alt=""
                          />
                          Body care
                        </a>
                        <a href="/baby-care" className="hover:bg-green-100">
                          <img
                            className="w-16 h-12 rounded-2xl"
                            src={babyCarePic}
                            alt=""
                          />
                          Baby care
                        </a>
                        <a href="/spa&massage" className="hover:bg-green-100">
                          <img
                            className="w-16 h-12 rounded-2xl"
                            src={spaPic}
                            alt=""
                          />
                          Spa & Massage
                        </a>
                        <a href="/daily-needs" className="hover:bg-green-100">
                          <img
                            className="w-16 h-12 rounded-2xl"
                            src={dailyNeedsPic}
                            alt=""
                          />
                          Daily needs
                        </a>
                        <a
                          href="/perfumes&attar"
                          className="hover:bg-green-100"
                        >
                          <img
                            className="w-16 h-12 rounded-2xl"
                            src={perfumePic}
                            alt=""
                          />
                          Perfumes & Attar
                        </a>
                        <a href="/groceries" className="hover:bg-green-100">
                          <img
                            className="w-16 h-12 rounded-2xl"
                            src={groceriesPic}
                            alt=""
                          />
                          Groceries
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="font-bold text-xl">
              <div className="flex  items-center">
                <img
                  className="w-20 h-20"
                  src={logo}
                  alt="Game of Nature Logo"
                />
                <a className=" " href="/">
                  Game of <span className="text-green-500"> Nature </span>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden_items flex w-96 border-2 border-green-400 rounded-3xl px-3 py-2">
            {" "}
            <input className="w-full" type="text" placeholder="Search..." />
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </a>
          </div>

          <div className="lex-none">
            <button
              onClick={(event) => {
                navigate(from, { replace: true });
              }}
              className="btn bg-white text-black border-0 hover:bg-green-200"
            >
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <a className="hidden_items ml-2" href="/signin">
                  Account
                </a>
              </div>
            </button>

            <button
              onClick={(event) => {
                navigate(from, { replace: true });
              }}
              className="btn bg-white text-black border-0 hover:bg-green-200"
            >
              <div className=" flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <a className="hidden_items ml-2" href="/cart">
                  Cart
                </a>
              </div>
            </button>
          </div>
        </div>
        <div className=" ">
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
        </div>
        <div className="lg:hidden flex border-2 border-green-400 rounded-3xl px-3 py-2 mx-5 mt-2">
          {" "}
          <input className="w-full px-2" type="text" placeholder="Search..." />
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
