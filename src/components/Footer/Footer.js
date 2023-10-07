import React from "react";
import logo from "../../Assets/image/logo.jpg";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-gradient-to-b from-gray-200 to-green-600 footer footer-center p-10 ">
        <div>
          {/* Logo */}
          <div className="block lg:mr-auto lg:mb-auto">
            <img
              className="w-16 h-16 rounded-2xl mx-auto"
              src={logo}
              alt="Game of Nature Logo"
            />
            <p className="text-center font-bold">
              Game of <span className="text-green-600"> Nature </span>{" "}
            </p>{" "}
            {/* <p className={` text-xs font-bold mr-auto lg:visible invisible`}>
              Copyright© 2022 - All right reserved
            </p> */}
          </div>
        </div>
        <div className="px-5 text-left grid lg:grid-cols-4 grid-cols-2 justify-start w-full">
          {/* Categories */}
          <div className=" w-40">
            <h1 className="text-base font-bold mb-2">Categories</h1>
            <div className="grid grid-cols-1 gap-1">
              <a href="/facial-care">Facial Care</a>
              <a href="/hair-care">Hair Care</a>
              <a href="/body-care">Body care</a>
              <a href="/baby-care">Baby Care</a>
              <a href="">Groceries</a>
              <a href="">Daily Needs</a>
              <a href="/spa&massage">Spa & Massage</a>
              <a href="/perfumes&attar">Perfumes & Attar</a>
              {/* <a href="">Packs</a> */}
            </div>
          </div>
          {/* Compnay */}
          <div className="mb-auto w-48">
            <h1 className="text-base font-bold mb-2">Company</h1>
            <div className="grid grid-cols-1 gap-1">
              <a href="">About Us</a>
              <a href="/terms&Conditions">Term and Conditions</a>
              <a href="/return_or_refund_policy">Refund and Return Policy</a>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-auto w-40">
            <h1 className="text-base font-bold mb-2">Contact</h1>
            <div className="grid grid-cols-1 gap-1">
              <a href="">+880-1816-560458</a>
              <a target="_blank" href="https://www.facebook.com/GameofNature99">
                Facebook
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/game_of_nature/"
              >
                Instagram
              </a>
              <a target="_blank" href="">
                Youtube
              </a>
            </div>
          </div>
          {/* Tech Support */}
          <div className="mb-auto w-40">
            <h1 className="text-base font-bold mb-2">Tech Support</h1>
            <div className="grid grid-cols-1 gap-1">
              <a href="">+880 1766-620839</a>
              <a href="">+880 1857-130439</a>
            </div>
          </div>
        </div>
        {/* white divider  */}
        <div className="border-t-2 w-full"></div>
        {/* copyright */}
        <div className="w-full lg:flex lg:justify-between">
          <div className="mx-auto">
            <p className={`text-center font-bold mr-auto`}>
              Copyright © 2022 - All right reserved
            </p>
            <a>
              Designed & Developed by{" "}
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100086219595502"
                className="hover:underline font-bold"
              >
                Excellent Technologies BD{" "}
              </a>{" "}
            </a>{" "}
          </div>
          <div className=" flex gap-4">
            <a target="_blank" href="https://www.facebook.com/GameofNature99">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/game_of_nature/">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                stroke="white"
              >
                {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      {/* <footer className=" bg-gradient-to-b from-gray-200 to-green-600 footer footer-center p-10 ">
        <div>
          <img
            className="w-16 h-16 rounded-2xl"
            src={logo}
            alt="Game of Nature Logo"
          />
          <p className="font-bold">
            Game of <span className="text-green-600"> Nature </span>{" "}
          </p>{" "}
          <br />
          <p className="font-bold">
            Copyright© 2022 - All right reserved by Game of Nature{" "}
          </p>{" "}
          <p>
            Developed by{" "}
            <span className="hover:underline font-bold">
              Excellent Technologies BD{" "}
            </span>{" "}
          </p>{" "}
        </div>{" "}
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                  {" "}
                </path>{" "}
              </svg>{" "}
            </a>{" "}
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                  {" "}
                </path>{" "}
              </svg>{" "}
            </a>{" "}
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                  {" "}
                </path>{" "}
              </svg>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "} */}
    </div>
  );
};

export default Footer;
