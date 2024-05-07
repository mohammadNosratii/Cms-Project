import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  commentDelApi,
  commentGetApi,
  commentPostApi,
  commentUpdateApi,
} from "../../api/commentApi";
import { toast } from "react-toastify";

export default function useComments() {
  return useQuery({
    queryKey: ["Comments"],
    queryFn: commentGetApi,
  });
}

export function useDelCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentDelApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["Comments"]);
      toast("کامنت با موفقیت حذف شد");
    },
    onError: (error) => {
      console.log("Error can't delete comment", error);
    },
  });
}

export function usePutCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentUpdateApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["Comments"]);
    },
    onError: (error) => {
      console.log("Error can't delete comment", error);
    },
  });
}

export function usePostCommentMutation() {
  return useMutation({
    mutationFn: commentPostApi,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log("Error can't delete comment", error);
    },
  });
}
