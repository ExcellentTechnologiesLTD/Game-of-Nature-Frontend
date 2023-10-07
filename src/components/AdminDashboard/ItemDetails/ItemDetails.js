import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemThumnailCard from "../../ItemThumbnailCard/ItemThumnailCard";
import "../../../Sytles/commonStyles.css";
import cartItems from "../../Cart/cartArray";
import { CartContext } from "../../../App";

export const ADDToCartContext = createContext("addToCartFunction");

const ItemDetails = () => {
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

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("myCartItems")));
    setTotalCartItemCost(parseInt(localStorage.getItem("totalCartItemCost")));
  }, []);
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [suggestedItem, setSuggestedItem] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(1);

  const handleIncreaseOrderQuantity = () => {
    let increasedQnty = parseInt(orderQuantity) + 1;
    if (increasedQnty <= parseInt(item.quantity_in_stock)) {
      setOrderQuantity(increasedQnty);
    }
  };
  const handleDecreaseOrderQuantity = () => {
    let decreasedQnty = parseInt(orderQuantity) - 1;
    if (decreasedQnty >= 1) {
      setOrderQuantity(decreasedQnty);
    }
  };

  const url = `https://game-of-nature-backend.vercel.app/get-details/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data1) => setItem(data1));
  }, [id]);

  // get suggested items
  const SuggestedItemsUrl = `https://game-of-nature-backend.vercel.app/get-detailsby/${item.category}`;
  useEffect(() => {
    fetch(SuggestedItemsUrl)
      .then((res) => res.json())
      .then((data) => setSuggestedItem(data));
  }, [item?.category]);

  const handleReviewSubmitClick = (e) => {};
  const handleRestockbtnClick = (e) => {
    // comming soon
    alert("Comming Soon");
  };

  const handleAddToBagClick = (e) => {
    e.preventDefault();
    setReload(false);

    const newItem = {
      itemID: item.product_id,
      itemName: item.product_name,
      photo_url: item.photo_url,
      price: item.price,
      orderQnty: orderQuantity,
      quantity_in_stock: item.quantity_in_stock,
    };

    if (cartItems == null) {
      const newArray = [];
      let tempTotalCost = 0;
      newArray.push(newItem);
      const xx = JSON.stringify(newArray);
      // // Save items and total cost to local storage
      setCartItems(newArray);
      localStorage.setItem("myCartItems", xx);
      tempTotalCost += parseInt(newItem.price) * newItem.orderQnty;
      setTotalCartItemCost(tempTotalCost);
      localStorage.setItem("totalCartItemCost", tempTotalCost);
    } else {
      let found = false;
      cartItems.map((i) => {
        if (i.itemID === item.product_id) {
          i.orderQnty += newItem.orderQnty;
          found = true;
          setCartItems(cartItems);
          const jsonArrayObjectToString = JSON.stringify(cartItems);
          localStorage.setItem("myCartItems", jsonArrayObjectToString);
          let tempTotal =
            totalCartItemCost + parseInt(newItem.price) * newItem.orderQnty;
          setTotalCartItemCost(tempTotal);
          localStorage.setItem("totalCartItemCost", tempTotal);
          // Send Alert
          alert("item Added Successfully");
        }
      });
      if (found != true) {
        const newCartArray = [...cartItems, newItem];
        const jsonArrayObjectToString = JSON.stringify(newCartArray);
        setCartItems(newCartArray);
        localStorage.setItem("myCartItems", jsonArrayObjectToString);
        let tempTotal =
          totalCartItemCost + parseInt(newItem.price) * newItem.orderQnty;
        setTotalCartItemCost(tempTotal);
        localStorage.setItem("totalCartItemCost", tempTotal);
      }
    }
  };

  return (
    <div className={``}>
      <div
        className={`flex px-10 py-5 bg-gradient-to-b from-slate-100 to-white`}
      >
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
          <span className="lowercase text-sm font-serif hover:underline hover:cursor-pointer">
            {" "}
            {item.category}
          </span>
        </span>
      </div>
      {/* Details Item */}
      <div className="lg:flex lg:gap-10 items-center bg-slate-100 lg:px-40">
        <figure className="lg:w-1/3 w-1/2 mx-auto">
          <img
            className=" mx-auto rounded-xl"
            src={item.photo_url}
            alt="item pic"
          />
        </figure>
        {/* <div className="flex-none w-1/2 bg-blue-400">
          <small className="text-red-700 text-2xs">
            Disclaimer: The image is for representation purposes only. The
            packaging you receive might vary.
          </small>
        </div> */}
        <div className="lg:w-3/4 text-justify lg:p-4 px-10 py-5 lg:mt-0 rounded-xl mt-5">
          <h1 className="font-serif font-semibold text-3xl text-left">
            {" "}
            {item.product_name}
          </h1>
          <h1 className="text-2xl font-semibold"> ৳{item.price}.00 </h1>
          <small> (MRP INCLUSIVE OF ALL TAXES) </small>
          <br />
          <small> In Stock: {item.quantity_in_stock} </small>
          {/* order quantity to cart buttons */}
          {item.quantity_in_stock >= 10 ? (
            <div className="flex gap-1 items-center mt-5">
              <button
                onClick={handleDecreaseOrderQuantity}
                className="bg-red-50 hover:bg-red-200 px-5 py-1.5 font-semibold text-2xl rounded-lg"
              >
                -
              </button>
              <div className=" bg-white px-10 py-2.5 rounded-lg">
                {" "}
                {orderQuantity}
              </div>
              <button
                onClick={handleIncreaseOrderQuantity}
                className="bg-green-100 hover:bg-green-200 px-5 py-1.5 text-2xl rounded-lg"
              >
                +
              </button>

              <button
                onClick={handleAddToBagClick}
                className="ml-4 capitalize flex justify-center gap-2 items-center btn bg-orange-500 hover:bg-green-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="white"
                  stroke="black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM252 160c0-11 9-20 20-20h44V96c0-11 9-20 20-20s20 9 20 20v44h44c11 0 20 9 20 20s-9 20-20 20H356v44c0 11-9 20-20 20s-20-9-20-20V180H272c-11 0-20-9-20-20z" />
                </svg>
                Add to bag
              </button>
            </div>
          ) : (
            <button
              onClick={handleRestockbtnClick}
              className="block my-5 w-40 capitalize hover:text-white hover:bg-orange-500 border-black border-2 px-4 py-1 rounded-xl"
            >
              Restock request
            </button>
          )}{" "}
          <div className="grid mt-2 w-1/2 max-w-fit">
            <a className="hover:text-red-600 text-sm" href="/terms&Conditions">
              Term & Conditions
            </a>
            <a
              className="hover:text-red-600 text-sm"
              href="/return_or_refund_policy"
            >
              Return or Return Policy
            </a>
          </div>
          <div className="mt-5 rounded-xl">
            <h1 className="font-bold mb-4"> Description </h1>
            <div className="">
              <p className="overflow-scroll h-40 ">{item.description}</p>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
      <div className="text-left px-5 lg:px-10 mb-10">
        <h1 className="divider font-semibold text-lg mt-20 mb-10 lg:mx-28">
          See what our users have to say
        </h1>{" "}
        <div>
          <div className="grid lg:grid-cols-4 grid-cols-2 bg-red-300"> </div>{" "}
          <div className="flex justify-center gap-1">
            <label
              htmlFor="my-modal-6"
              className="border-2 px-5 py-2 rounded-xl"
            >
              Write a review{" "}
            </label>{" "}
            <button className="border-2 px-5 py-2 rounded-xl">
              View all reviews{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="">
          <h1 className="divider font-semibold text-lg mt-14 mb-10 lg:mx-28">
            {" "}
            Suggested products {suggestedItem.length}
          </h1>
          <div className="lg:px-28 lg:py-5 grid lg:grid-cols-4 grid-cols-2 lg:gap-7 gap-3">
            {suggestedItem.slice(0, 4).map((item) => (
              <ItemThumnailCard
                key={item.product_id}
                props={item}
              ></ItemThumnailCard>
            ))}
          </div>
        </div>
      </div>
      {/* modal for reviews */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="font-bold text-lg divider"> Review </h1>{" "}
          <div className="flex justify-between mb-10">
            <div className="flex items-center">
              <img className="w-10 rounded-xl" src={item.photo_url} />
              <h3 className=" text-left font-semibold ml-2">
                {" "}
                {item.product_name}{" "}
              </h3>{" "}
            </div>{" "}
            <h3 className="text-left"> Item ID: {item.product_id} </h3>{" "}
          </div>{" "}
          <form>
            <label className="input-group">
              <span> Rating </span>{" "}
              <input
                type="number"
                className=" w-full border-y-2 border-r-2 px-2"
                min="1"
                max="5"
              />
            </label>{" "}
            <br />
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Your feedback on this item </span>{" "}
              </label>{" "}
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Type here.."
              ></textarea>{" "}
            </div>{" "}
          </form>{" "}
          <div className=" modal-action">
            <label
              onClick={handleReviewSubmitClick}
              htmlFor="my-modal-6"
              className="btn capitalize"
            >
              Submit{" "}
            </label>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ItemDetails;
