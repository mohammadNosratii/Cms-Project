import React from "react";
import AddNewProduct from "../../components/Template/AddNewProduct/AddNewProduct";
import AllProducts from "../../components/Template/Products/AllProducts";

export default function Products() {
  return (
    <div className="flex flex-col gap-10">
      <AddNewProduct />
      <AllProducts />
    </div>
  );
}
