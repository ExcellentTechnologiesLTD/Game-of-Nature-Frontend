import React, { useEffect, useState } from "react";
import ItemThumnailCard from "../../ItemThumbnailCard/ItemThumnailCard";
import Filter from "../Filter/Filter";
import "../../../Sytles/commonStyles.css";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const SpaMassage = () => {
  const [spaItems, setSpaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://game-of-nature-backend.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        setSpaItems(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {" "}
      {/* Route */}{" "}
      <div className="bg-slate-200">
        <div className="flex px-10 py-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-5 h-5 mr-1 hover:cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>{" "}
          <span className="mr-1 text-sm">
            {" "}
            /{" "}
            <span className="text-sm font-serif hover:underline hover:cursor-pointer">
              categories{" "}
            </span>{" "}
            /{" "}
          </span>{" "}
        </div>{" "}
        <div className=" pb-10 ">
          <h1 className="text-3xl font-serif text-left ml-20">
            {" "}
            Spa & Massage{" "}
          </h1>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex gap-4 my-4">
        <Filter> </Filter>{" "}
        <div className="w-full py-5 bg-gradient-to-br from-slate-200 to-slate-100 rounded-xl">
          <div className="flex justify-between px-5 absolute sticky top-0 ">
            <div className="flex gap-5">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:scale-110 lg:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>{" "} */}
              Products{" "}
            </div>{" "}
            {/* <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="flex justify-between border-2 m-1 px-3"
              >
                Sort{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>{" "}
              </label>{" "}
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a> Item 1 </a>{" "}
                </li>{" "}
                <li>
                  <a> Item 2 </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "} */}
          </div>{" "}
          {/* product Display */}{" "}
          {loading ? (
            <div>
              <LoadingSpinner></LoadingSpinner>
              <h1>Loading</h1>
            </div>
          ) : (
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-4 mt-5 px-5 rounded-tl-2xl">
              {" "}
              {spaItems.map((item) =>
                item.category == "Spa & Massage" ? (
                  <ItemThumnailCard key={item.product_id} props={item}>
                    {" "}
                  </ItemThumnailCard>
                ) : (
                  <></>
                )
              )}{" "}
            </div>
          )}
          {/* <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 mt-5  rounded-tl-2xl">
            {" "}
            {spaItems.map((item) =>
              item.category == "Spa & Massage" ? (
                <ItemThumnailCard props={item}> </ItemThumnailCard>
              ) : (
                <></>
              )
            )}{" "}
          </div>{" "} */}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default SpaMassage;
