import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import ProductsBox from "./ProductsBox";
import useProducts, {
  useDelProductMutation,
} from "../../../hooks/useProducts/useProducts";
import ErrorBox from "../../Module/ErrorBox/ErrorBox";
import useModal from "../../../hooks/useModal/useModal";
import DeleteModal from "../../Module/DeleteModal/DeleteModal";
import DetailsModal from "../../Template/DetailsModal/DetailsModal";
import EditModal from "../../Module/EditModal/EditModal";
import { usePutMutation } from "../../../hooks/useProducts/useProducts";

export default function AllProducts() {
  // All Products

  const { data: products, isLoading, isError } = useProducts();

  // Modals

  const { showModal: deleteModal, triggerModal: triggerDelModal } = useModal();
  const { showModal: editModal, triggerModal: triggerEditModal } = useModal();
  const { showModal: detailsModal, triggerModal: triggerDetailsModal } =
    useModal();

  const deleteProduct = useDelProductMutation();

  // Delete Product

  const productID = useRef(null);

  // Show product info

  const mainProductInfo = useRef();

  // Update Product info

  const updateProduct = usePutMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const fillFormWithProductData = (product) => {
    setValue("title", product.title);
    setValue("price", product.price);
    setValue("count", product.count);
    setValue("img", product.img);
    setValue("popularity", product.popularity);
    setValue("sale", product.sale);
    setValue("colors", product.colors);
  };

  const handleDeleteProduct = (productId) => {
    productID.current = productId;
  };

  const detailProductHandler = (product) => {
    mainProductInfo.current = product;
  };

  const formSubmitting = (data) => {
    updateProduct.mutate({
      productId: productID.current,
      data,
    });
    triggerEditModal(false);
  };

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

  return (
    <>
      {/* Show All Product With map on products */}

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
            {products.reverse().map((product) => (
              <ProductsBox
                onDelete={() => handleDeleteProduct(product.id)}
                onDetail={() => detailProductHandler(product)}
                triggerEditModal={() => {
                  fillFormWithProductData(product);
                  triggerEditModal(true);
                }}
                triggerDelModal={triggerDelModal}
                triggerDetailsModal={triggerDetailsModal}
                key={product.id}
                {...product}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {deleteModal && (
        <DeleteModal
          title="آیا از حذف محصول اطمینان دارید؟"
          confirmBtn="حذف"
          deleteModal={deleteModal}
          triggerDelModal={triggerDelModal}
          productID={productID.current}
          action={deleteProduct.mutate}
        />
      )}

      <DetailsModal
        mainProductInfo={mainProductInfo.current}
        detailsModal={detailsModal}
        triggerDetailsModal={triggerDetailsModal}
      />
      {editModal && (
        <EditModal triggerEditModal={triggerEditModal}>
          {/* Form Validation and Submitation */}

          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit(formSubmitting)}
          >
            <div className="grid grid-cols-2 gap-5 child:rounded-md child:flex child:flex-col">
              <div>
                <input
                  className="editInput"
                  {...register("title", {
                    required: "اسم محصول را وارد کنید",
                    minLength: {
                      value: 3,
                      message: "نام محصول حداقل باید 3 کارکتر داشته باشد",
                    },
                    maxLength: {
                      value: 12,
                      message: "نام محصول حداکثر باید 12 کارکتر داشته باشد",
                    },
                  })}
                  type="text"
                  placeholder="اسم"
                />
                <span className="editErrorMessage">
                  {errors.title && errors.title.message}
                </span>
              </div>
              <div>
                <input
                  className="editInput"
                  {...register("price", {
                    required: "قیمت محصول را وارد کنید",
                  })}
                  type="text"
                  placeholder="قیمت"
                />
                <span className="editErrorMessage">
                  {errors.price && errors.price.message}
                </span>
              </div>
              <div>
                <input
                  className="editInput"
                  {...register("count", {
                    required: "تعداد موجودی محصول را وارد کنید",
                  })}
                  type="text"
                  placeholder="موجودی"
                />
                <span className="editErrorMessage">
                  {errors.count && errors.count.message}
                </span>
              </div>
              <div>
                <input
                  className="editInput"
                  {...register("img", {
                    required: "آدرس عکس محصول را وارد کنید",
                  })}
                  type="text"
                  placeholder="آدرس عکس"
                />
                <span className="editErrorMessage">
                  {errors.img && errors.img.message}
                </span>
              </div>
              <div>
                <input
                  className="editInput"
                  {...register("popularity", {
                    required: "مقدار محبوبیت محصول را وارد کنید",
                  })}
                  type="text"
                  placeholder="محبوبیت"
                />
                <span className="editErrorMessage">
                  {errors.popularity && errors.popularity.message}
                </span>
              </div>
              <div>
                <input
                  className="editInput"
                  {...register("sale", {
                    required: "اسم محصول را وارد کنید",
                  })}
                  type="text"
                  placeholder="میزان فروش"
                />
                <span className="editErrorMessage">
                  {errors.sale && errors.sale.message}
                </span>
              </div>
              <div>
                <input
                  className="editInput"
                  {...register("colors", {
                    required: "تعداد رنگ بندی محصول را وارد کنید",
                  })}
                  type="text"
                  placeholder="رنگ بندی"
                />
                <span className="editErrorMessage">
                  {errors.colors && errors.colors.message}
                </span>
              </div>
            </div>

            <button className="bg-gray-500 text-white py-2 px-4 rounded-md">
              ثبت اطلاعات جدید
            </button>
          </form>
        </EditModal>
      )}
    </>
  );
}
