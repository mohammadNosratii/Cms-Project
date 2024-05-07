import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteModal({
  title,
  confirmBtn,
  triggerDelModal,
  productID,
  action,
}) {
  const confirmModalHandler = () => {
    action(productID);
    triggerDelModal(false);
  };

  const CloseModalHandler = () => {
    triggerDelModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[600px] bg-white rounded-lg py-3 px-5 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl">توجه</h2>
          <CloseIcon
            className="cursor-pointer"
            onClick={() => triggerDelModal(false)}
          />
        </div>
        <hr />
        <p className="text-lg">{title}</p>
        <hr />
        <div className="flex justify-end gap-5 child:text-white child:w-20 child:py-2 child:rounded-md">
          <button
            className={`${
              confirmBtn === "حذف" ? "bg-red-600" : "bg-green-600"
            }`}
            onClick={confirmModalHandler}
          >
            {confirmBtn}
          </button>
          <button className="bg-gray-500" onClick={CloseModalHandler}>
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
