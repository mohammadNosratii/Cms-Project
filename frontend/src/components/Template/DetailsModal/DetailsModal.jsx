import React, { useEffect } from "react";

export default function DetailsModal({
  detailsModal,
  triggerDetailsModal,
  children
}) {
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

  return <>
  {detailsModal && (
    children
  )}</>;
}
