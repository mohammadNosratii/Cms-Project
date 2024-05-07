import React from "react";

export default function CommentText({ triggerCommentTextModal, commentText }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[600px] bg-white rounded-lg py-3 px-5 space-y-5">
        <p className="text-center text-xl">{commentText}</p>
        <button
          className="bg-gray-500 text-white py-1 px-4 rounded-md"
          onClick={() => triggerCommentTextModal(false)}
        >
          بستن
        </button>
      </div>
    </div>
  );
}
