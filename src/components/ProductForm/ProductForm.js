import React, { useState } from "react";

const ProductForm = () => {
  const imgStorageKey = "29ddb5c3f1924fa5b37d8c1f1a90e4a2";

  const [ItemName, setItemName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imgFile, setImgFile] = useState([]);
  const [imgError, setImageError] = useState("");

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

    const image = imgFile[0];
    // console.log(image.size);
    // if (image.size > 1500000) {
    //   setImageError("Image size cannot be more than 1.5 MB.");
    // } else {
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
          fetch("http://localhost:3300/add-item", {
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
              } else {
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
    // console.log("blur: ", imgFile);
    // if (imgFile[0]?.size < 1500000) {
    //   console.log("cholbe");
    //   setImageError("");
    // } else {
    //   // console.log("cholbe na");
    //   // setImageError("Image size cannot be more than 1.5 MB.");
    // }
  };

  return (
    <div>
      <form
        onSubmit={handleSaveBtn}
        className="border-2 bg-green-50 lg:w-1/2 w-3/4  p-5 mx-auto mt-10 rounded-3xl"
      >
        <div class="">
          <label class="label">
            <span class="label-text">
              Item Name <span className="text-red-500"> * </span>
            </span>
          </label>
          <input
            required
            onBlur={handleItemNameBlur}
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <br />
        <div className="lg:flex lg:gap-4">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text"> Category </span>
            </label>
            <select
              class="select select-bordered"
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
            <label class="label">
              <span class="label-text">
                Quantity <span className="text-red-500"> * </span>
              </span>
            </label>
            <input
              required
              onBlur={handleQuantityBlur}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
        </div>
        <br />
        <div className="lg:flex lg:gap-4">
          <div className="w-full">
            <label class="label">
              <span class="label-text">
                Price(BDT.) per quantity
                <span className="text-red-500"> * </span>
              </span>
            </label>
            <input
              required
              onBlur={handlePriceBlur}
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </div>
          <div className="w-full">
            <label class="label">
              <span class="label-text"> Product image </span>
            </label>
            <input
              type="file"
              accept=".jpg, .png, .bmp, .gif, .tif, .webp, .heic"
              onBlur={handleFileUploadBlur}
              onChange={handleFileChange}
              class="input py-1.5 input-bordered w-full"
            />
            <span className="text-red-500 text-xs">
              ** * Image size must be less than 1.5 MB ** *
            </span>
          </div>
        </div>
        <br />
        <div class="form-control">
          <label class="label">
            <span class="label-text">
              Product Description <span className="text-red-500"> * </span>
            </span>
          </label>
          <textarea
            required
            onBlur={handleDescriptionBlur}
            class="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <button
          className={`${
            imgFile[0]?.size > 1500000 ? "hover:hidden" : ""
          } btn border-0 text-white my-5 bg-green-400 hover:bg-green-500`}
        >
          Save Item
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
