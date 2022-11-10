import React, { useEffect, useState } from "react";

import ProductTableView from "../../ProductTableView/ProductTableView";

const AllProducts = () => {
  const [items, seTitems] = useState([]);
  // const pathName = window.location.pathname;

  useEffect(() => {
    fetch("https://game-of-nature-backend.vercel.app/")
      .then((res) => res.json())
      .then((data) => seTitems(data));
  }, []);
  // let item = 4;
  return (
    <div className=" w-full overflow-y-auto">
      <div className="flex justify-between items-center p-5">
        <h1 className=" font-serif font-bold text-xl text-left">All product</h1>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="flex justify-between border-2 m-1 px-3">
            Sort
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu divide-y-2 p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <a>Less than 20 Items</a>
            </li>
            <li>
              <a>Out-of-stock</a>
            </li>
            <li>
              <a>In-stock</a>
            </li>
            <li>
              <a>Hair Care</a>
            </li>
            <li>
              <a>Facial Care</a>
            </li>
            <li>
              <a>Baby Care</a>
            </li>
            <li>
              <a>Body Care</a>
            </li>
            <li>
              <a>Spa & Massage</a>
            </li>
            <li>
              <a>Perfume & Attar</a>
            </li>
            <li>
              <a>Daily Needs</a>
            </li>
            <li>
              <a>Groceries</a>
            </li>
          </ul>
        </div>
        {/* Search box */}
      </div>
      <div className="  ">
        <ProductTableView props={items}></ProductTableView>
      </div>
    </div>
  );
};

export default AllProducts;
