import React, { useRef } from "react";
import ErrorBox from "../../Module/ErrorBox/ErrorBox";
import CommentsBox from "../../Template/Comments/CommentsBox";
import useComments, {
  useDelCommentMutation,
  usePutCommentMutation,
} from "../../../hooks/useComments/useComments";
import CommentText from "../../Template/Comments/CommentText";
import useModal from "../../../hooks/useModal/useModal";
import DeleteModal from "../../Module/DeleteModal/DeleteModal";
import EditModal from "../../Module/EditModal/EditModal";
import { useForm } from "react-hook-form";

export default function AllComments() {
  const { data: comments, isError, isLoading } = useComments();
  const { showModal: commentTextModal, triggerModal: triggerCommentTextModal } =
    useModal();
  const { showModal: commentDelModal, triggerModal: triggerCommentDelModal } =
    useModal();
  const { showModal: commentEditModal, triggerModal: triggerCommentEditModal } =
    useModal();
  const deleteComment = useDelCommentMutation();
  const updateComment = usePutCommentMutation();
  const commentText = useRef("");
  const commentId = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const getCommentText = (commentBody) => {
    commentText.current = commentBody;
    setValue("body", commentText.current);
  };

  const getCommentId = (commentID) => {
    commentId.current = commentID;
  };

  const changeCommentTextHandler = (data) => {
    updateComment.mutate({
      commentId: commentId.current,
      data,
    });
    triggerCommentEditModal(false);
  };

  if (isLoading) {
    return (
      <div>
        <h1>درحال بارگزاری...</h1>
      </div>
    );
  }

  if (isError) {
    return <ErrorBox errMessage="کامنتی" />;
  }

  return (
    <>
      <div className="shadow-normal rounded-md py-5">
        <table className="w-full">
          <thead>
            <tr className="child:h-12">
              <th>نام کاربر</th>
              <th>نام محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
              <th>تغییرات</th>
            </tr>
          </thead>
          <tbody>
            {comments?.map((comment) => (
              <CommentsBox
                key={comment.id}
                {...comment}
                triggerCommentTextModal={triggerCommentTextModal}
                onCommentText={() => getCommentText(comment.body)}
                onCommentId={() => getCommentId(comment.id)}
                triggerCommentDelModal={triggerCommentDelModal}
                triggerCommentEditModal={triggerCommentEditModal}
              />
            ))}
          </tbody>
        </table>
      </div>
      {commentTextModal && (
        <CommentText
          commentText={commentText.current}
          triggerCommentTextModal={triggerCommentTextModal}
        />
      )}

      {commentDelModal && (
        <DeleteModal
          title="آیا از حذف کامنت اطمینان دارید؟"
          Id={commentId.current}
          triggerDelModal={triggerCommentDelModal}
          action={deleteComment.mutate}
        />
      )}
      {commentEditModal && (
        <EditModal triggerEditModal={triggerCommentEditModal}>
          <form
            onSubmit={handleSubmit(changeCommentTextHandler)}
            className="flex flex-col gap-3"
          >
            <textarea
              {...register("body", {
                required: "پر کردن متن کامنت الزامیست",
                minLength: {
                  value: 10,
                  message: "وارد کردن حداقل 10 کرکتر الزامیست",
                },
                maxLength: {
                  value: 1000,
                  message: "وارد کردن حداکثر 1000 کرکتر الزامیست",
                },
              })}
              className="border rounded-md px-2 outline-none"
              cols="30"
              rows="3"
            ></textarea>
            <span className="text-red-600">
              {errors.body && errors.body.message}
            </span>
            <button className="bg-gray-500 text-white p-2 px-4 rounded-md">
              ثبت تغییرات
            </button>
          </form>
        </EditModal>
      )}
    </>
  );
}
