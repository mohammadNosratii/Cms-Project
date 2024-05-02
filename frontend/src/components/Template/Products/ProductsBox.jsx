import React from "react";

export default function ProductsBox({
  onDelete,
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
    onDelete(id)
    triggerDelModal(true);
  };

  return (
    <tr>
      <td>
        <img className="w-20 h-20 object-cover mx-auto" src={img} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">{price}تومان</td>
      <td className="text-center">{count}</td>
      <td className="text-white ">
        <div className="child:bg-gray-500 child:w-20 child:py-2 child:rounded-md flex justify-center items-center gap-5">
          <button onClick={() => triggerDetailsModal(true)}>جزئیات</button>
          <button onClick={deletProductHandler}>حذف</button>
          <button onClick={() => triggerEditModal(true)}>ویرایش</button>
        </div>
      </td>
    </tr>
  );
}
