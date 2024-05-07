import React from "react";

const columns = [
  { label: "محبوبیت" },
  { label: "میزان فروش" },
  { label: "رنگ بندی" },
];

export default function ProductDetailsContent({mainProductInfo, triggerDetailsModal}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
      <div className="bg-white w-96 py-4 rounded-md space-y-5">
        <table className="w-full">
          <thead>
            <tr className="child:text-xl">
              {columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="child:text-center child:text-sm">
              <td>{mainProductInfo.popularity}%</td>
              <td>{mainProductInfo.sale.toLocaleString()} تومن</td>
              <td>{mainProductInfo.colors}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end px-5">
          <button
            onClick={() => triggerDetailsModal(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
