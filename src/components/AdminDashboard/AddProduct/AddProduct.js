import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductForm from "../../ProductForm/ProductForm";

const AddProduct = () => {
  const { id } = useParams();
  const forEdit = window.location.pathname.includes("/edit/");

  const [itemData, setItemData] = useState({});
  // if (forEdit) {
  //   fetch(`http://localhost:3300/get-details/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setItemData(data));
  // }

  // useEffect(() => {

  // }, [forEdit == true]);

  return forEdit ? (
    <div className="w-full overflow-y-auto">
      <h1 className="mt-10 font-bold text-xl"> Edit product </h1>
      <ProductForm key={itemData.product_id} itemData={itemData}></ProductForm>
      <br />
    </div>
  ) : (
    <div className="w-full overflow-y-auto">
      <h1 className="mt-10 font-bold text-xl"> Add a product </h1>
      <ProductForm> </ProductForm>
      <br />
    </div>
  );
};

export default AddProduct;
