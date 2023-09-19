import React, { useEffect, useState } from "react";
import ItemThumnailCard from "../ItemThumbnailCard/ItemThumnailCard";
import facialPic from "../../Assets/image/facial-care.jpg";
import hairCarePic from "../../Assets/image/hair-care.jpg";
import bodyCarePic from "../../Assets/image/body-care.jpg";
import babyCarePic from "../../Assets/image/baby-care.jpg";
import spaPic from "../../Assets/image/spa.jpg";
import perfumePic from "../../Assets/image/perfume.jpg";
import testPik from "../../Assets/image/test.jpg";
import fastDelivery from "../../Assets/image/fast-delivery.jpg";
import organicProduct from "../../Assets/image/organic.jpg";
import consultation from "../../Assets/image/consultation.jpg";
import customerSupport from "../../Assets/image/customer-support.jpg";
import groceriesPic from "../../Assets/image/groceries.jpg";
import dailyNeedsPic from "../../Assets/image/daily-needs.jpg";

import slide1 from "../../Assets/image/slide-1.png";
import "./home.css";
const Home = () => {
  const [items, seTitems] = useState([]);

  useEffect(() => {
    fetch("https://game-of-nature-backend.vercel.app/")
      .then((res) => res.json())
      .then((data) => seTitems(data));
  }, []);

  const [showModal, setShowModal] = useState(
    sessionStorage.getItem("modalShown") ? true : false
  );

  return (
    <div className="">
      {showModal == false ? (
        <div>
          <input
            defaultChecked
            type="checkbox"
            id="my-modal-3"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <h3 className="text-lg font-bold"> Welcome to Game of Nature </h3>{" "}
              <p className="py-4 text-justify">
                If you are a{" "}
                <span className="font-semibold"> new customer </span>, you are
                advised to take the{" "}
                <span className="font-semibold"> consultation </span> from our
                expert{" "}
                <span className="font-semibold"> before placing an order </span>
                . Our specialist will recommened you the best product for your
                need.{" "}
              </p>
              <p className="text-red-500">
                NOTE: "Orders placed without consultation does not gurantee
                significant benefits from specific problems "{" "}
              </p>{" "}
              <div className="mt-10 flex justify-between">
                <a
                  className="bg-blue-500 text-white px-4 py-1 rounded-2xl flex justify-center items-center hover:cursor-pointer hover:scale-10"
                  href="https://www.facebook.com/GameofNature99"
                >
                  Get Consultation{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    stroke="black"
                    className="w-5 h-5 ml-2"
                  >
                    <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
                  </svg>{" "}
                </a>{" "}
                <label
                  onClick={() => {
                    sessionStorage.setItem("modalShown", true);
                  }}
                  htmlFor="my-modal-3"
                  className="hover:cursor-pointer"
                >
                  Continue browsing{" "}
                </label>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* carrosel */}{" "}
      <div className="carousel h-96 ">
        <div id="slide1" className="carousel-item relative w-full slides">
          {/* <img
            src={slide1}
            className="bg-cover bg-blend-screen mx-auto "
            //  className=" w-min h-80 my-auto mx-auto"
          /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              {" "}
              ❮
            </a>{" "}
            <a href="#slide2" className="btn btn-circle">
              {" "}
              ❯
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div id="slide2" className="carousel-item relative w-full slides">
          <img
            src="https://scontent.fdac13-1.fna.fbcdn.net/v/t1.6435-9/57038424_577504946065534_3582367973177819136_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFjBKIi41HVxJDXWh18SxDjBj8-cwuWZAAGPz5zC5ZkAI7OU_U2cEayMdMeU-L_XKpamHGdKIvRED6m6RFJSF8l&_nc_ohc=kkPNOCl_31EAX9QDDm9&_nc_ht=scontent.fdac13-1.fna&oh=00_AT_Y8OP4kvvm83EnSpzCEKHrp1QxqUvJxJurKUR5bI4UmA&oe=637A6D28"
            className=" bg-gradient-to-b from-slate-300 to bg-slate-500 lg:px-40 px-20 mx-auto w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className=" btn-circle">
              {" "}
              ❮
            </a>{" "}
            <a href="#slide3" className="btn btn-circle">
              {" "}
              ❯
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={testPik} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              {" "}
              ❮
            </a>{" "}
            <a href="#slide4" className="btn btn-circle">
              {" "}
              ❯
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              {" "}
              ❮
            </a>{" "}
            <a href="#slide1" className="btn btn-circle">
              {" "}
              ❯
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Tags */}{" "}
      <div className="my-10 grid lg:grid-cols-4 grid-cols-2 divide-x-2 gap-2 lg:mx-36 mx-5 p-5 justify-center rounded-2xl bg-gray-50">
        <div className="grid grid-cols-2 justify-item-center p-2 ">
          <img className="w-28 h-28 mx-auto" src={fastDelivery} />{" "}
          <h1 className="text-sm font-serif  my-auto"> Fast Delivery </h1>{" "}
        </div>{" "}
        <div className="grid grid-cols-2 justify-item-center p-2 ">
          <img
            className="w-28 h-28 mx-auto rounded-full"
            src={organicProduct}
          />{" "}
          <h1 className="text-sm font-serif  my-auto"> 100 % Organic </h1>{" "}
        </div>{" "}
        <div className="grid grid-cols-2 justify-item-center p-2">
          <img className="w-28 h-28 mx-auto" src={consultation} alt="" />
          <h1 className="text-sm font-serif  my-auto"> Consultation </h1>{" "}
        </div>{" "}
        <div className="grid grid-cols-2 justify-item-center p-2 ">
          <img className="w-28 h-28 mx-auto" src={customerSupport} />{" "}
          <h1 className="text-sm font-serif my-auto"> Customer Service </h1>{" "}
        </div>{" "}
      </div>
      {/* Popular Categories */}{" "}
      <div className="p-10 border-y-2 border-green-300">
        <h1 className="text-left font-serif font-semibold text-xl mb-10">
          Our Categories{" "}
        </h1>{" "}
        <div className="grid gap-5 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center">
          <a
            href="/facial-care"
            className="  bg-gray-100 shadow-2xl rounded-2xl hover:scale-105"
          >
            <img
              className="rounded-full w-40 h-40 p-5"
              src={facialPic}
              alt=""
            />
            <h1 className="font-serif"> Facial Care </h1>{" "}
          </a>{" "}
          <a
            href="/hair-care"
            className="  bg-gray-100 shadow-2xl rounded-2xl hover:scale-105"
          >
            <img
              className="rounded-full w-40 h-40 p-5"
              src={hairCarePic}
              alt=""
            />
            <h1 className="font-serif "> Hair Care </h1>{" "}
          </a>{" "}
          <a
            href="/body-care"
            className="  bg-gray-100 shadow-2xl rounded-2xl hover:scale-105"
          >
            <img
              className="rounded-full w-40 h-40 p-5"
              src={bodyCarePic}
              alt=""
            />
            <h1 className="font-serif "> Body Care </h1>{" "}
          </a>{" "}
          <a
            href="/baby-care"
            className="  bg-gray-100 shadow-2xl rounded-2xl hover:scale-105"
          >
            <img
              className="rounded-full w-40 h-40 p-5"
              src={babyCarePic}
              alt=""
            />
            <h1 className="font-serif "> Baby Care </h1>{" "}
          </a>{" "}
          <a
            href="/spa&massage"
            className="  bg-gray-100 shadow-2xl rounded-2xl hover:scale-105"
          >
            <img className="rounded-full w-40 h-40 p-5" src={spaPic} alt="" />
            <h1 className="font-serif "> Spa & Massage </h1>{" "}
          </a>{" "}
          <a
            href="/perfumes&attar"
            className="  bg-gray-100 shadow-2xl rounded-2xl hover:scale-105"
          >
            <img
              className="rounded-full w-40 h-40 p-5"
              src={perfumePic}
              alt=""
            />
            <h1 className="font-serif "> Perfumes & Attar </h1>{" "}
          </a>{" "}
          <a
            href="/perfumes&attar"
            className="  bg-gray-100 shadow-2xl rounded-2xl hover:scale-105"
          >
            <img
              className="rounded-full w-40 h-40 p-5"
              src={dailyNeedsPic}
              alt=""
            />
            <h1 className="font-serif "> Daily Needs </h1>{" "}
          </a>{" "}
          <a
            href="/perfumes&attar"
            className="  bg-gray-100 shadow-2xl rounded-2xl hover:scale-105"
          >
            <img
              className="rounded-full w-40 h-40 p-5"
              src={groceriesPic}
              alt=""
            />
            <h1 className="font-serif "> Groceries </h1>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
      {/* All Products */}{" "}
      <div className="px-10 mt-10 text-xl">
        <div className="flex justify-between">
          <h1 className="font-serif font-semibold text-left">
            Best Selling products{" "}
          </h1>
          <a className="font-serif text-lg hover:text-green-400 text-left">
            View All{" "}
          </a>{" "}
        </div>
        <div className="py-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
          {" "}
          {items.slice(0, 10).map((item) =>
            item.rating == 5 ? (
              <ItemThumnailCard
                key={item.product_id}
                props={item}
              ></ItemThumnailCard>
            ) : (
              <div className="hidden" key={item.product_id}>
                {" "}
              </div>
            )
          )}{" "}
        </div>{" "}
      </div>
      {/* faq */}
      <div className="lg:px-32 px-10 mb-10">
        <h1 className="text-left text-base font-semibold mb-5">
          Frequently Asked Questions (FAQ){" "}
        </h1>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-t-xl"
        >
          <div className="collapse-title text-xl font-medium">Question 1</div>
          <div className="collapse-content">
            <p>Answer 1</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">Question 2</div>
          <div className="collapse-content">
            <p>Answer 2</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">Question 3</div>
          <div className="collapse-content">
            <p>Answer 3</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">Question 4</div>
          <div className="collapse-content">
            <p>Answer 4</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">Question 5</div>
          <div className="collapse-content">
            <p>Answer 5</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">Question 6</div>
          <div className="collapse-content">
            <p>Answer 6</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">Question 7</div>
          <div className="collapse-content">
            <p>Answer 7</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">Question 8</div>
          <div className="collapse-content">
            <p>Answer 8</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 "
        >
          <div className="collapse-title text-xl font-medium">Question 9</div>
          <div className="collapse-content">
            <p>Answer 9</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-b-xl"
        >
          <div className="collapse-title text-xl font-medium">Question 10</div>
          <div className="collapse-content">
            <p>Answer 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
