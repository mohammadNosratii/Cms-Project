import React from "react";

export default function UsersBox({
  firsname,
  lastname,
  username,
  password,
  phone,
  email,
  triggerUserDelModal,
  onUserId,
  triggerUserEditModal
}) {
  const delUserModal = () => {
    onUserId();
    triggerUserDelModal(true);
  };

  return (
    <tr className="child:text-center h-14">
      <td>
        {firsname} {lastname}
      </td>
      <td>{username}</td>
      <td>{password}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <div className="changesBtn text-white">
          <button>جزئیات</button>
          <button onClick={delUserModal}>حذف</button>
          <button onClick={() => {
            onUserId();
            triggerUserEditModal(true)
          }}>ویرایش</button>
        </div>
      </td>
    </tr>
  );
}
