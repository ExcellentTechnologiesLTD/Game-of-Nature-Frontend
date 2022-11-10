import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="">
      <div class="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  flex">
          {/* <!-- Page content here --> */}
          <label
            for="my-drawer-2"
            className=" bg-gradient-to-b from-green-600 to-gray-200 flex pt-3 px-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-10 w-10 rounded-full border-2 border-white p-2 hover:scale-110 duration-200 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="White"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {
            /* {window.location.pathname.endsWith("/my-products") ? (
            <AddedProducts></AddedProducts>
          ) : (
            <></>
          )}
*/

            <Outlet></Outlet>
          }
        </div>

        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="bg-gradient-to-b from-green-600 to-gray-200 divide-y text-white menu p-4 rounded-tr-2xl overflow-y-auto w-56 ">
            {/* <!-- Sidebar content here --> */}
            <li className="mx-auto w-full pb-1">
              <a
                className="hover:bg-white hover:text-black"
                href="/admin-dashboard/addproducts"
              >
                Add a products
              </a>
            </li>
            <li className="mx-auto w-full py-1">
              <a
                className="hover:bg-white hover:text-black"
                href="/admin-dashboard/all-products"
              >
                All products
              </a>
            </li>
            <li className="mx-auto w-full py-1">
              <a
                className="hover:bg-white hover:text-black"
                href="/admin-dashboard/deliveries"
              >
                Deliveries
              </a>
            </li>
            <li className="mx-auto w-full pt-1">
              <a
                className="hover:bg-white hover:text-black"
                href="/admin-dashboard/orders"
              >
                Orders
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
