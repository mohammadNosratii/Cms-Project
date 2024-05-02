import React, { memo, useRef, useState } from "react";
import ProductsBox from "./ProductsBox";
import useProducts from "../../../hooks/useProducts/useProducts";
import ErrorBox from "../../Module/ErrorBox/ErrorBox";
import useModal from "../../../hooks/useModal/useModal";
import DeleteModal from "../../Module/DeleteModal/DeleteModal";
import DetailsModal from "../../Template/DetailsModal/DetailsModal";
import EditModal from "../../Module/EditModal/EditModal";

export default function AllProducts() {
  const { data: products, isLoading, isError } = useProducts();

  const { showModal: deleteModal, triggerModal: triggerDelModal } = useModal();
  const { showModal: editModal, triggerModal: triggerEditModal } = useModal();
  const { showModal: detailsModal, triggerModal: triggerDetailsModal } =
    useModal();

  const productIdForDelete = useRef(null);

  // const [productIdForDelete, setProductIdForDelete] = useState(null)

  if (isLoading)
    return (
      <div>
        <h1>درحال بارگزاری ...</h1>
      </div>
    );

  if (isError)
    return (
      <div>
        <ErrorBox errMessage="محصولی" />
      </div>
    );

  const handleDeleteProduct = (productId) => {
    productIdForDelete.current = productId;
    // setProductIdForDelete(productId)
  };

  return (
    <>
      <div className="shadow-normal rounded-md py-5">
        <table className="w-full">
          <thead>
            <tr>
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
              <th>تغییرات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductsBox
                onDelete={() => handleDeleteProduct(product.id)}
                triggerDelModal={triggerDelModal}
                triggerDetailsModal={triggerDetailsModal}
                triggerEditModal={triggerEditModal}
                key={product.id}
                {...product}
              />
            ))}
          </tbody>
        </table>
      </div>
      <DeleteModal
        deleteModal={deleteModal}
        triggerDelModal={triggerDelModal}
        productIdForDelete={productIdForDelete.current}
      />
      <DetailsModal
        detailsModal={detailsModal}
        triggerDetailsModal={triggerDetailsModal}
      />
      <EditModal editModal={editModal} triggerEditModal={triggerEditModal}>
        <div className="grid grid-cols-2 gap-5 child:bg-gray-200 child:ps-2 child:rounded-md child:py-2 child:outline-none">
          <input type="text" placeholder="اسم" />
          <input type="text" placeholder="قیمت" />
          <input type="text" placeholder="موجودی" />
        </div>
      </EditModal>
    </>
  );
}
