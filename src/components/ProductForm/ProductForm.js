import React, { useState } from "react";

const ProductForm = (props) => {
  const { itemData } = props;
  console.log(itemData);

  const imgStorageKey = "29ddb5c3f1924fa5b37d8c1f1a90e4a2";

  const [ItemName, setItemName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imgFile, setImgFile] = useState([]);
  const [imgError, setImageError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleItemNameBlur = (event) => {
    setItemName(event.target.value);
  };
  const handleSelectedCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleQuantityBlur = (event) => {
    setQuantity(event.target.value);
  };
  const handlePriceBlur = (event) => {
    setPrice(event.target.value);
  };
  const handleDescriptionBlur = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveBtn = (event) => {
    event.preventDefault();
    setLoading(true);
    const image = imgFile[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imgUrl = result.data.url;
          const item = {
            itemName: ItemName,
            category: selectedCategory,
            quantity: quantity,
            price: price,
            description: description,
            imgUrl: imgUrl,
          };
          fetch("https://game-of-nature-backend.vercel.app/add-item", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              //   console.log(data);
              if (inserted.status == "Success" && inserted.product_id) {
                alert(inserted.msg);
                window.location.reload(true);
              } else {
                setLoading(false);
                alert(inserted.msg);
              }
            });
        } else {
        }
      });
    // }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    // setImageError("");
    setImgFile(e.target.files);
  };

  const handleFileUploadBlur = (e) => {
    e.preventDefault();
    setImgFile([]);
    setImgFile(e.target.files);
  };

  // if (window.location.pathname.includes("/edit/")) {
  //   setItemName(itemData.product_name);
  // }

  return (
    <div className="px-4">
      <form
        onSubmit={handleSaveBtn}
        className="border-2 bg-green-50 lg:w-1/2 p-5 lg:mx-auto mt-10 rounded-3xl"
      >
        <div className="">
          <label className="label">
            <span className="label-text">
              Item Name <span className="text-red-500"> * </span>
            </span>
          </label>
          <input
            value={
              window.location.pathname.includes("/edit/")
                ? itemData.product_name
                : ""
            }
            required
            onBlur={handleItemNameBlur}
            type="text"
            className="input input-bordered w-full"
          />
        </div>
        <br />
        <div className="lg:flex lg:gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Item Category </span>
            </label>
            <select
              className="select select-bordered"
              value={selectedCategory}
              onChange={handleSelectedCategory}
            >
              <option value="Select" disabled selected>
                Select
              </option>
              <option> Facial care </option> <option> Hair care </option>
              <option> Body care </option> <option> Baby care </option>
              <option> Spa & Massage </option> <option> Daily needs </option>
              <option> Perfumes & Attar </option> <option> Groceries </option>
            </select>
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">
                Item Stock Quantity <span className="text-red-500"> * </span>
              </span>
            </label>
            <input
              required
              onBlur={handleQuantityBlur}
              type="text"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <br />
        <div className="lg:flex lg:gap-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">
                Price(BDT.) per item
                <span className="text-red-500"> * </span>
              </span>
            </label>
            <input
              required
              onBlur={handlePriceBlur}
              type="text"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text"> Item image </span>
            </label>
            <input
              type="file"
              accept=".jpg, .png, .bmp, .gif, .tif, .webp, .heic"
              onBlur={handleFileUploadBlur}
              onChange={handleFileChange}
              className="input py-1.5 input-bordered w-full"
            />
            {/* <span className="text-red-500 text-xs">
              ** * Image size must be less than 1.5 MB ** *
            </span> */}
          </div>
        </div>
        <br />
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Item Description <span className="text-red-500"> * </span>
            </span>
          </label>
          <textarea
            required
            onBlur={handleDescriptionBlur}
            className="textarea textarea-bordered h-24"
            placeholder="Add description...."
          ></textarea>
        </div>
        <input
          // value="Save"
          disabled={loading}
          type="submit"
          className={` capitalize btn border-0 text-white my-5 focus:ring focus:ring-green-500 bg-green-400 hover:bg-green-500`}
        />
        {/* <input
          // class style
          // ${
          //     imgFile[0]?.size > 1500000 ? "hover:hidden" : ""
          //   }

          c
          onClick={handleSaveBtn}
        >
          Save item
        </input> */}
        {/* <progress
          className={`${
            loading ? "" : "hidden"
          } progress w-56 block my-5 mx-auto`}
        ></progress> */}
      </form>
    </div>
  );
};

export default ProductForm;
