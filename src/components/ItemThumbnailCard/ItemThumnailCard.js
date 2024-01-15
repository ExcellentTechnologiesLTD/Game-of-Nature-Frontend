import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../App";
import itemimg from "../../Assets/image/item_pic.jpeg";
// import "../../Sytles/commonStyles.css";

const ItemThumnailCard = (props) => {
  const {
    product_id,
    rating,
    product_name,
    quantity_in_stock,
    price,
    category,
    photo_url,
  } = props.props;

  // const [
  //   cartItems,
  //   setCartItems,
  //   totalCartItemCost,
  //   setTotalCartItemCost,
  //   setReload,
  // ] = useContext(CartContext);

  const navigate = useNavigate();

  // const handleAddToCart = (e) => {
  //   e.preventDefault();
  //   setReload(false);

  //   const newItem = {
  //     itemID: product_id,
  //     itemName: product_name,
  //     photo_url: photo_url,
  //     price: price,
  //     orderQnty: 1,
  //     quantity_in_stock: quantity_in_stock,
  //   };

  //   console.log("cartItems mmmm: ", cartItems);

  //   if (cartItems == null) {
  //     const newArray = [];
  //     let tempTotalCost = 0;
  //     newArray.push(newItem);
  //     const xx = JSON.stringify(newArray);
  //     console.log("xx\n\n", xx);
  //     // // Save items and total cost to local storage
  //     setCartItems(newArray);
  //     localStorage.setItem("myCartItems", xx);
  //     tempTotalCost += parseInt(newItem.price) * newItem.orderQnty;
  //     setTotalCartItemCost(tempTotalCost);
  //     localStorage.setItem("totalCartItemCost", tempTotalCost);
  //   } else {
  //     let found = false;
  //     cartItems.map((i) => {
  //       if (i.itemID === product_id) {
  //         i.orderQnty += newItem.orderQnty;
  //         found = true;
  //         setCartItems(cartItems);
  //         const jsonArrayObjectToString = JSON.stringify(cartItems);
  //         localStorage.setItem("myCartItems", jsonArrayObjectToString);
  //         let tempTotal =
  //           totalCartItemCost + parseInt(newItem.price) * newItem.orderQnty;
  //         setTotalCartItemCost(tempTotal);
  //         localStorage.setItem("totalCartItemCost", tempTotal);
  //         // Send Alert
  //         alert("item Added Successfully");
  //       }
  //     });
  //     if (found != true) {
  //       const newCartArray = [...cartItems, newItem];
  //       const jsonArrayObjectToString = JSON.stringify(newCartArray);
  //       setCartItems(newCartArray);
  //       localStorage.setItem("myCartItems", jsonArrayObjectToString);
  //       let tempTotal =
  //         totalCartItemCost + parseInt(newItem.price) * newItem.orderQnty;
  //       setTotalCartItemCost(tempTotal);
  //       localStorage.setItem("totalCartItemCost", tempTotal);
  //     }
  //   }
  // };

  return (
    <div className="">
      <div
        onClick={() => {
          navigate(`/item-details/${product_id}`, { replace: true });
        }}
        className="relative bg-base-100 shadow-2xl "
      >
        <h1 className="absolute top-1 left-2 text-sm"> ID: {product_id} </h1>
        <figure className="">
          <img
            src={photo_url || itemimg}
            alt="Shoes"
            className="w-full mx-auto h-72"
          />
        </figure>
        <div className="p-5">
          <div className="">
            <div className="flex justify-start text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="green"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="green"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <h1 className="text-sm ml-1">
                {rating}
                .0
              </h1>
            </div>
            <a
              href={`/item-details/${product_id}`}
              className="my-1 hover:underline hover:cursor-pointer card-title text-sm text-left font-bold"
            >
              {product_name}
            </a>
          </div>
          <h6 className="mt-4 font-bold text-xl text-green-500 text-center">
            <span className="font-bold text-2xl"> ৳ </span> {price}.00
          </h6>
        </div>
      </div>
      {/* <button
        onClick={handleAddToCart}
        className=" capitalize flex justify-center gap-2 items-center btn border-0 rounded-t-none rounded-b-box w-full bg-orange-500 hover:bg-green-500"
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
      </button> */}
    </div>
  );
};

export default ItemThumnailCard;
