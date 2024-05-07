import React from "react";
import { useForm } from "react-hook-form";
import { usePostMutation } from "../../../hooks/useProducts/useProducts";

export default function AddNewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postNewProduct = usePostMutation();

  const formSubmitHandler = (data) => {
    postNewProduct.mutate(data);
  };

  return (
    <div>
      <h1 className="text-3xl mb-5">افزودن محصول جدید</h1>
      <div className="shadow-normal p-5 rounded-md flex flex-col gap-5">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(formSubmitHandler)}
        >
          <div className="grid grid-cols-2 gap-5 child:rounded-md child:flex child:flex-col child:gap-3">
            <div>
              <input
                className="editInput"
                {...register("title", {
                  required: "وارد کردن نام محصول الزامیست",
                  minLength: {
                    value: 3,
                    message: "نام محصول حداقل باید 3 کاراکتر داشته باشد",
                  },
                  maxLength: {
                    value: 15,
                    message: "نام محصول حداکثر باید 15 کاراکتر داشته باشد",
                  },
                })}
                type="text"
                placeholder="اسم محصول"
              />
              <span className="text-red-600">
                {errors.title && errors.title.message}
              </span>
            </div>
            <div>
              <input
                className="editInput"
                {...register("price", {
                  required: "وارد کردن قیمت محصول الزامیست",
                })}
                type="text"
                placeholder="قیمت محصول"
              />
              <span className="text-red-600">
                {errors.price && errors.price.message}
              </span>
            </div>
            <div>
              <input
                className="editInput"
                {...register("count", {
                  required: "وارد کردن موجودی محصول الزامیست",
                })}
                type="text"
                placeholder="موجودی محصول"
              />
              <span className="text-red-600">
                {errors.count && errors.count.message}
              </span>
            </div>
            <div>
              <input
                className="editInput"
                {...register("img", {
                  required: "وارد کردن آدرس عکس محصول الزامیست",
                })}
                type="text"
                placeholder="آدرس عکس محصول"
              />
              <span className="text-red-600">
                {errors.img && errors.img.message}
              </span>
            </div>
            <div>
              <input
                className="editInput"
                {...register("popularity", {
                  required: "وارد کردن میزان محبوبیت محصول الزامیست",
                })}
                type="text"
                placeholder="محبوبیت محصول"
              />
              <span className="text-red-600">
                {errors.popularity && errors.popularity.message}
              </span>
            </div>
            <div>
              <input
                className="editInput"
                {...register("sale", {
                  required: "وارد کردن میزان فروش محصول الزامیست",
                })}
                type="text"
                placeholder="میزان فروش محصول"
              />
              <span className="text-red-600">
                {errors.sale && errors.sale.message}
              </span>
            </div>
            <div>
              <input
                className="editInput"
                {...register("colors", {
                  required: "وارد کردن تعداد رنگ بندی محصول الزامیست",
                })}
                type="text"
                placeholder="رنگ بندی های موجود"
              />
              <span className="text-red-600">
                {errors.colors && errors.colors.message}
              </span>
            </div>
          </div>
          <button className="bg-gray-500 text-white py-2 px-4 rounded-md self-end">
            افزودن محصول
          </button>
        </form>
      </div>
    </div>
  );
}
