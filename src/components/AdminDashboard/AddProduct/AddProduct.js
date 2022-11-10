import React from "react";
import ProductForm from "../../ProductForm/ProductForm";

const AddProduct = () => {
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="mt-10 font-bold text-xl"> Add a product </h1>{" "}
      <ProductForm> </ProductForm>
      <br />
    </div>
  );
};

export default AddProduct;
