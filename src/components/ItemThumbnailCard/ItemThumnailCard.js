import React from "react";
// import RatingStar from "../RatingStar/RatingStar";
import itemimg from "../../Assets/image/item_pic.jpeg";

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
  //   console.log(props.props.rating);
  //   console.log(rating);
  return (
    <div className=" ">
      <div class=" card bg-base-100 shadow-2xl h-full">
        <h1 className="absolute right-4 top-1">ID: {product_id}</h1>
        <figure class="">
          <img
            src={photo_url || itemimg}
            alt="Shoes"
            class="rounded-t-xl w-full h-52"
          />
        </figure>
        <div className="p-5">
          <div class="">
            <div className="flex justify-start text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="green"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="green"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <h1 className="text-sm ml-1">{rating}.0</h1>
            </div>
            <a
              href={`/item-details/${product_id}`}
              class="my-1 hover:underline hover:cursor-pointer card-title text-sm text-left font-bold"
            >
              {product_name}
            </a>
            <small className=" flex justify-between text-xs text-left text-gray-400">
              {category}
              {quantity_in_stock < 20 ? (
                <h1 className="text-xs text-white bg-red-500 px-3 rounded-2xl">
                  {quantity_in_stock} items left
                </h1>
              ) : (
                <h1 className=" text-green-500 text-xs">
                  {quantity_in_stock} items left
                </h1>
              )}
            </small>
          </div>
          <h6 className="my-4 font-bold text-xl text-green-500 text-center">
            <span className="font-bold text-2xl">৳</span> {price}.00
          </h6>

          <div className=" capitalize flex justify-center gap-2 items-center btn bg-orange-500 hover:bg-green-500">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemThumnailCard;
