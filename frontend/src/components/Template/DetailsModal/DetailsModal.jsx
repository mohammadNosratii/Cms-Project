import React, { useEffect } from "react";

export default function DetailsModal({ detailsModal, triggerDetailsModal }) {
  useEffect(() => {
    const closeDetailModal = (event) => {
      if (event.key === "Escape") {
        triggerDetailsModal(false);
      }
    };
    if (detailsModal) {
      window.addEventListener("keydown", closeDetailModal);
    } else {
      window.removeEventListener("keydown", closeDetailModal);
    }
  }, [detailsModal]);

  return (
    <>
      {detailsModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
          <div className="bg-white w-96 py-4 rounded-md space-y-5">
            <table className="w-full">
              <thead>
                <tr className="child:text-xl">
                  <th>اسم</th>
                  <th>قیمت</th>
                  <th>محبوبیت</th>
                </tr>
              </thead>
              <tbody>
                <tr className="child:text-center child:text-sm">
                  <td>شارژر</td>
                  <td>90000تومن</td>
                  <td>90%</td>
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
      )}
    </>
  );
}
