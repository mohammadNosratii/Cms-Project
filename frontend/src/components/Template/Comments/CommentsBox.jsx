import React from "react";

export default function CommentsBox({
  id,
  date,
  hour,
  userID,
  productID,
  body,
  triggerCommentTextModal,
  onCommentText,
  onCommentId,
  triggerCommentDelModal,
  triggerCommentEditModal,
}) {
  const showCommentTextHandler = () => {
    onCommentText(body);
    triggerCommentTextModal(true);
  };

  const commentIdHandler = () => {
    onCommentId(id);
    triggerCommentDelModal(true);
  };
  const changeCommentHandler = () => {
    onCommentText(body);
    onCommentId(id);
    triggerCommentEditModal(true);
  };

  return (
    <tr className="child:text-center h-12">
      <td>{userID}</td>
      <td>{productID}</td>
      <td>
        <button
          onClick={showCommentTextHandler}
          className="bg-gray-500 text-white py-1 px-4 rounded-md"
        >
          دیدن کامنت
        </button>
      </td>
      <td>{date}</td>
      <td>{hour}</td>
      <td>
        <div className="flex items-center justify-center gap-5 child:bg-gray-500 text-white  child:py-1 child:px-4 child:rounded-md">
          <button>پاسخ</button>
          <button onClick={commentIdHandler}>حذف</button>
          <button onClick={changeCommentHandler}>ویرایش</button>
        </div>
      </td>
    </tr>
  );
}
