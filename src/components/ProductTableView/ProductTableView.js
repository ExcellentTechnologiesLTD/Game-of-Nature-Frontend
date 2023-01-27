import React, { useEffect, useState } from "react";
import itemImg from "../../Assets/image/item_pic.jpeg";

const ProductTableView = (props) => {
  const items = props.props;

  const handleDeleteItem = (ItemID) => {
    fetch(`https://game-of-nature-backend.vercel.app/delete-item/${ItemID}`, {
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
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead className="font-serif">
            <tr>
              <th className="text-center w-1 normal-case  text-sm"> SL </th>
              <th className="text-center w-1 normal-case text-sm">
                {" "}
                Product ID{" "}
              </th>
              <th className="text-left pl-10 normal-case text-sm">
                Product Name
              </th>
              <th className="text-center normal-case text-sm">
                Stock quantity
              </th>
              <th className="text-center normal-case text-sm">Restock Qnty </th>
              <th className="text-center normal-case text-sm">Delete item </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {items.map((item, index) => (
              <tr key={item.product_id}>
                <th className="text-center"> {index + 1} </th>
                <th className="text-center font-normal"> {item.product_id} </th>
                <td className="hover:cursor-pointer hover:underline">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.photo_url || itemImg}
                          alt="product pic"
                        />
                      </div>
                    </div>
                    <div>
                      <a
                        href={`/edit/${item.product_id}`}
                        className="font-bold"
                      >
                        {" "}
                        {item.product_name}{" "}
                      </a>
                      <div className="text-sm opacity-50">
                        {" "}
                        {item.category}{" "}
                      </div>
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
                    className={`btn btn-xs ${
                      item.quantity_in_stock < 20 ? "" : "hidden"
                    }`}
                  >
                    Restock
                  </button>
                </td>
                <th className="text-center">
                  <button
                    onClick={() => handleDeleteItem(item.product_id)}
                    className="btn bg-base-100 border-0 text-red-500 btn-xs"
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
