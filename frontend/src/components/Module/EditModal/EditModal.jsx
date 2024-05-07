import React from "react";

export default function EditModal({ children, triggerEditModal }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
      <div className="bg-white p-4 rounded-md space-y-5 flex flex-col justify-center items-center">
        <h3 className="text-2xl">اطلاعات جدید را وارد کنید</h3>
        {children}
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-md"
          onClick={() => triggerEditModal(false)}
        >
          بستن
        </button>
      </div>
    </div>
  );
}
