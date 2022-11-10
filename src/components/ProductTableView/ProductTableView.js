import React, { useEffect, useState } from "react";
import itemImg from "../../Assets/image/item_pic.jpeg";

const ProductTableView = (props) => {
  const items = props.props;

  const handleDeleteItem = (ItemID) => {
    // const requestOptions = {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     pid: item.product_id,
    //   }),
    // };

    fetch(`http://localhost:3300/delete-item/${ItemID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleted == true) {
          alert(data.msg);
          window.location.reload(true);
        } else {
          alert("Cannot Delete Item!");
        }
      });
  };
  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead className="">
            <tr>
              <th className="text-center">SL</th>
              <th className="text-left pl-10">Product</th>
              <th className="text-center">Stock quantity</th>
              <th className="text-center">Restock quantity</th>
              <th className="text-center">Delete item</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {items.map((item, index) => (
              <tr>
                <th className="text-center">{index + 1}</th>
                <td className="hover:cursor-pointer hover:underline">
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={item.photo_url || itemImg}
                          alt="product pic"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{item.product_name}</div>
                      <div class="text-sm opacity-50">{item.category}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1
                    className={`text-center ${
                      item.quantity_in_stock < 20
                        ? " bg-red-500 text-white rounded-3xl"
                        : "  rounded-3xl"
                    }`}
                  >
                    {item.quantity_in_stock} items left
                  </h1>
                </td>
                <td className="text-center">
                  <button
                    class={`btn btn-xs ${
                      item.quantity_in_stock < 20 ? "" : "hidden"
                    }`}
                  >
                    Restock
                  </button>
                </td>
                <th className="text-center">
                  <button
                    onClick={() => handleDeleteItem(item.product_id)}
                    class="btn bg-base-100 border-0 text-red-500 btn-xs"
                  >
                    delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTableView;
