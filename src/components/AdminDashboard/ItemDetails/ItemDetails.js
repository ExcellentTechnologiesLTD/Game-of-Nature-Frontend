import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemDetails = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [orderQuantity, setOrderQuantity] = useState(1);

  // const [itemQuantity, setItemQuantity] = useState();

  const url = `https://game-of-nature-backend.vercel.app/get-details/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <div
        className={`flex px-10 py-5 bg-gradient-to-b from-slate-100 to-white`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-5 h-5 mr-1 hover:cursor-pointer hover:scale-110 ease-in-out duration-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span className="mr-1 text-sm">
          {" "}
          /{" "}
          <span className="text-sm font-serif hover:underline hover:cursor-pointer">
            categories
          </span>{" "}
          /{" "}
          <span className="lowercase text-sm font-serif hover:underline hover:cursor-pointer">
            {item.category}
          </span>
        </span>
      </div>
      {/* Details Item */}
      <div className="grid lg:grid-cols-2  px-20">
        <figure className="w-1/2 mx-auto ">
          <img
            className=" mx-auto rounded-xl"
            src={item.photo_url}
            alt="item pic"
          />
          <small className="text-red-700 text-2xs">
            Disclaimer: The image is for representation purposes only. The
            packaging you receive might vary.
          </small>
        </figure>
        <div className=" overflow-scroll text-justify bg-slate-100 p-5 ">
          <h1 className="font-serif font-semibold text-3xl text-left">
            {item.product_name}
          </h1>
          <h1 className="text-2xl font-semibold">৳ {item.price}.00</h1>
          <small>(MRP INCLUSIVE OF ALL TAXES)</small>
          {/* order quantity to cart buttons */}
          <div className="flex gap-1 items-center mt-5">
            <button className="bg-red-50 hover:bg-red-200 px-5 py-1.5 font-semibold text-2xl rounded-lg">
              -
            </button>
            <div className=" bg-white px-10 py-2.5 rounded-lg">
              {orderQuantity}
            </div>
            <button className="bg-green-100 hover:bg-green-200 px-5 py-1.5 text-2xl rounded-lg">
              +
            </button>
            <div className="ml-4 capitalize flex justify-center gap-2 items-center btn bg-orange-500 hover:bg-green-500">
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
          <div className="grid mt-2 w-1/2">
            <a className="hover:text-red-600 text-sm" href="">
              Term & Conditions
            </a>
            <a className="hover:text-red-600 text-sm" href="">
              No Return or Return Policy
            </a>
          </div>
          <div class="collapse  rounded-xl">
            <input type="checkbox" class="peer" />
            <div class="flex collapse-title pl-0 peer-checked:bg-slate-100 peer-checked:pl-3 peer-checked:mt-5">
              <h1 className="font-bold mr-10 ">Description</h1>
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div class="collapse-content peer-checked:bg-slate-100">
              <p className="overflow-scroll h-40">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, excepturi. Pariatur debitis assumenda, numquam minus
                amet tenetur quod enim ratione tempore odit corrupti commodi
                fugiat error eaque qui fuga accusamus facere cupiditate
                veritatis maxime reprehenderit veniam. Dicta ipsam
                exercitationem officia, earum quo ad illum ab consequuntur
                pariatur voluptatum numquam qui dolor, tenetur id atque sequi
                porro facilis sapiente. Id, suscipit commodi. Itaque, ad magnam
                cum dolor voluptatum reiciendis sequi alias cupiditate, quis
                facere eaque veniam doloribus aperiam. Ad ipsum officiis nam
                tenetur possimus illo iste delectus mollitia vitae, cumque
                ratione in asperiores quos natus facere ab, error illum iure
                fugit sunt similique eligendi. Iste eaque dolorum minima impedit
                vero sapiente hic, qui mollitia, modi ea iure inventore magni.
                Voluptatum quae modi sint nam adipisci rem quos quaerat nulla,
                aliquid provident rerum excepturi officiis iure maiores!
                Architecto quis quos saepe laudantium numquam quia ex dolorum
                perspiciatis dignissimos! Adipisci, pariatur dolorum mollitia
                reiciendis nostrum ea, ad eaque sint nihil consequuntur rerum
                dolor neque quasi unde earum cum accusantium aperiam totam
                facere voluptates? Dolorem aliquam facilis eveniet vitae
                consequuntur laudantium rem provident laboriosam asperiores eos
                at reiciendis dicta natus quaerat sunt ipsum, qui sapiente
                reprehenderit placeat totam ducimus esse quae! Facilis, quas.
                Dolore!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-green-300 border-2 my-10"></div>
      <div className="text-left px-10">
        <h1 className="font-semibold text-lg mt-5">Reviews</h1>
        <h1 className="font-semibold text-lg mt-5">Suggested products</h1>
      </div>
    </div>
  );
};

export default ItemDetails;
