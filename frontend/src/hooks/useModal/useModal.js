import { useState } from "react";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);

  const triggerModal = (value) => {
    setShowModal(value)
  }

  return {showModal, triggerModal}
}

