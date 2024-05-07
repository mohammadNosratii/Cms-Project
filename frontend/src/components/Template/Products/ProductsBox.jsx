import React from "react";

export default function ProductsBox({
  onDelete,
  onDetail,
  img,
  id,
  title,
  price,
  count,
  triggerDelModal,
  triggerDetailsModal,
  triggerEditModal,
}) {
  const deletProductHandler = () => {
    onDelete(id);
    triggerDelModal(true);
  };

  const detailProductHandler = () => {
    onDetail();
    triggerDetailsModal(true);
  };

  const editProductInfoHandler = () => {
    onDelete(id);
    triggerEditModal(true);
  };

  return (
    <tr>
      <td>
        <img className="w-20 h-20 object-cover mx-auto" src={img} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">{price.toLocaleString()} تومان</td>
      <td className="text-center">{count}</td>
      <td className="text-white ">
        <div className="changesBtn">
          <button onClick={detailProductHandler}>جزئیات</button>
          <button onClick={deletProductHandler}>حذف</button>
          <button onClick={editProductInfoHandler}>ویرایش</button>
        </div>
      </td>
    </tr>
  );
}
