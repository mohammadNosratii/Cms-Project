import React, { useRef } from "react";
import useUsers, {
  useDelUsers,
  usePutUsers,
} from "../../../hooks/useUsers/useUsers";
import UsersBox from "./UsersBox";
import ErrorBox from "../../Module/ErrorBox/ErrorBox";
import DeleteModal from "../../Module/DeleteModal/DeleteModal";
import useModal from "../../../hooks/useModal/useModal";
import EditModal from "../../Module/EditModal/EditModal";
import { useForm } from "react-hook-form";

export default function AllUsers() {
  const { data: users, isError, isLoading } = useUsers();
  const { showModal: userDelModal, triggerModal: triggerUserDelModal } =
    useModal();
  const { showModal: userEditModal, triggerModal: triggerUserEditModal } =
    useModal();
  const deleteUser = useDelUsers();
  const userId = useRef(null);

  const updateUserInfo = usePutUsers();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const fillFormWithUserData = (user) => {
    setValue("firsname", user.firsname),
      setValue("lastname", user.lastname),
      setValue("username", user.username),
      setValue("password", user.password),
      setValue("phone", user.phone),
      setValue("city", user.city),
      setValue("email", user.email),
      setValue("address", user.address),
      setValue("score", user.score),
      setValue("buy", user.buy);
  };

  const getUserId = (userID) => {
    userId.current = userID;
  };

  const formSubmitHandler = (data) => {
    updateUserInfo.mutate({
      userId: userId.current,
      data,
    });
    triggerUserEditModal(false);
  };

  if (isLoading) {
    return <h1>درحال بارگزاری...</h1>;
  }

  if (isError) {
    return <ErrorBox errMessage="کاربری" />;
  }

  return (
    <>
      <div className="shadow-normal rounded-md py-5">
        <table className="w-full">
          <thead>
            <tr className="h-10">
              <th>نام و نام خانوادگی</th>
              <th>نام کاربری</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
              <th>تغییرات</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UsersBox
                key={user.id}
                {...user}
                onUserId={() => getUserId(user.id)}
                triggerUserDelModal={triggerUserDelModal}
                triggerUserEditModal={() => {
                  fillFormWithUserData(user);
                  triggerUserEditModal(true);
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
      {userDelModal && (
        <DeleteModal
          triggerDelModal={triggerUserDelModal}
          title="آیا از حذف کاربر اطمینان دارید؟"
          Id={userId.current}
          action={deleteUser.mutate}
        />
      )}
      {userEditModal && (
        <EditModal triggerEditModal={triggerUserEditModal}>
          <form
            onSubmit={handleSubmit(formSubmitHandler)}
            className="flex flex-col items-center gap-5"
          >
            <div className="grid grid-cols-2 gap-5 child:rounded-md child:flex child:flex-col">
              <div>
                <input
                  {...register("firsname", {
                    required: "واردن کردن نام الزامی می باشد",
                    minLength: {
                      value: 3,
                      message: "نام حداقل باید 3 کرکتر باشد",
                    },
                    maxLength: {
                      value: 12,
                      message: "نام حداکثر باید 12 کرکتر باشد",
                    },
                  })}
                  className="editInput"
                  type="text"
                  placeholder="نام"
                />
                <span className="editErrorMessage">
                  {errors.firsname && errors.firsname.message}
                </span>
              </div>
              <div>
                <input
                  {...register("lastname", {
                    required: "واردن کردن نام خانوادگی الزامی می باشد",
                    minLength: {
                      value: 4,
                      message: "نام خانوادگی حداقل باید 4 کرکتر باشد",
                    },
                    maxLength: {
                      value: 12,
                      message: "نام خانوادگی حداکثر باید 12 کرکتر باشد",
                    },
                  })}
                  className="editInput"
                  type="text"
                  placeholder="نام خانوادگی"
                />
                <span className="editErrorMessage">
                  {errors.lastname && errors.lastname.message}
                </span>
              </div>
              <div>
                <input
                  {...register("username", {
                    required: "واردن کردن نام کاربری الزامی می باشد",
                    minLength: {
                      value: 3,
                      message: "نام کاربری حداقل باید 3 کرکتر باشد",
                    },
                    maxLength: {
                      value: 15,
                      message: "نام کاربری حداکثر باید 15 کرکتر باشد",
                    },
                  })}
                  className="editInput"
                  type="text"
                  placeholder="نام کاربری"
                />
                <span className="editErrorMessage">
                  {errors.username && errors.username.message}
                </span>
              </div>
              <div>
                <input
                  {...register("password", {
                    required: "واردن کردن رمز عبور الزامی می باشد",
                  })}
                  className="editInput"
                  type="text"
                  placeholder="رمز عبور"
                />
                <span className="editErrorMessage">
                  {errors.password && errors.password.message}
                </span>
              </div>
              <div>
                <input
                  {...register("phone", {
                    required: "واردن کردن شماره تلفن الزامی می باشد",
                  })}
                  className="editInput"
                  type="text"
                  placeholder="موبایل"
                />
                <span className="editErrorMessage">
                  {errors.phone && errors.phone.message}
                </span>
              </div>
              <div>
                <input
                  {...register("city", {
                    required: "واردن کردن نام شهر الزامی می باشد",
                  })}
                  className="editInput"
                  type="text"
                  placeholder="شهر"
                />
                <span className="editErrorMessage">
                  {errors.city && errors.city.message}
                </span>
              </div>
              <div>
                <input
                  {...register("email", {
                    required: "واردن کردن ایمیل الزامی می باشد",
                  })}
                  className="editInput"
                  type="text"
                  placeholder="ایمیل"
                />
                <span className="editErrorMessage">
                  {errors.email && errors.email.message}
                </span>
              </div>
              <div>
                <input
                  {...register("address", {
                    required: "واردن کردن آدرس الزامی می باشد",
                  })}
                  className="editInput"
                  type="text"
                  placeholder="آدرس"
                />
                <span className="editErrorMessage">
                  {errors.address && errors.address.message}
                </span>
              </div>
              <div>
                <input
                  {...register("score", {
                    required: "واردن کردن امتیاز کاربر الزامی می باشد",
                  })}
                  className="editInput"
                  type="text"
                  placeholder="امتیاز"
                />
                <span className="editErrorMessage">
                  {errors.score && errors.score.message}
                </span>
              </div>
              <div>
                <input
                  {...register("buy", {
                    required: "واردن کردن میزان خرید کاربر الزامی می باشد",
                  })}
                  className="editInput"
                  type="text"
                  placeholder="میزان خرید کاربر"
                />
                <span className="editErrorMessage">
                  {errors.buy && errors.buy.message}
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
