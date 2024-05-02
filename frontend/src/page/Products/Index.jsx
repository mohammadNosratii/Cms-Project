import React from "react";
import AddNewProduct from "../../components/Template/AddNewProduct/AddNewProduct";
import AllProducts from "../../components/Template/Products/AllProducts";
import DeleteModal from "../../components/Module/DeleteModal/DeleteModal";
import DetailsModal from "../../components/Template/DetailsModal/DetailsModal";
import EditModal from "../../components/Module/EditModal/EditModal";

export default function Products() {
  return (
    <div className="flex flex-col gap-10">
      <AddNewProduct />
      <AllProducts />
      
    </div>
  );
}
