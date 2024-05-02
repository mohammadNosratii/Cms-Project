import React from "react";

export default function AddNewProduct() {

  return (
    <div>
      <h1 className="text-3xl mb-5">افزودن محصول جدید</h1>
      <div className="shadow-normal p-5 rounded-md flex flex-col gap-5">
        <form className="grid grid-cols-2 gap-5 child:outline-none child:rounded-md child:bg-gray-200 child:py-2 child:ps-2">
          <input type="text" placeholder="اسم محصول" />
          <input type="text" placeholder="قیمت محصول" />
          <input type="text" placeholder="موجودی محصول" />
          <input type="text" placeholder="آدرس عکس محصول" />
          <input type="text" placeholder="محبوبیت محصول" />
          <input type="text" placeholder="میزان فروش محصول" />
          <input type="text" placeholder="رنگ بندی های موجود" />
        </form>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-md self-end">افزودن محصول</button>
      </div>
    </div>
  );
}
