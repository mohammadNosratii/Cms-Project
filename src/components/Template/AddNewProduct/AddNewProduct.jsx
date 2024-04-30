import React from "react";

export default function AddNewProduct() {
  return (
    <div>
      <h1 className="text-3xl mb-5">Add New Product</h1>
      <div className="shadow-normal p-5 rounded-md flex flex-col gap-5">
        <form className="grid grid-cols-2 gap-5 child:outline-none child:rounded-md child:bg-gray-200 child:py-2 child:ps-2">
          <input type="text" placeholder="Product Name" />
          <input type="text" placeholder="Product Price" />
          <input type="text" placeholder="Product Inventory" />
          <input type="text" placeholder="Product Image" />
          <input type="text" placeholder="Product Popularity" />
          <input type="text" placeholder="Product Sales Amount" />
          <input type="text" placeholder="Product Colors" />
        </form>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-md self-end">Add Product</button>
      </div>
    </div>
  );
}
