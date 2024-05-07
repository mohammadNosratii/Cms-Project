import { useQuery } from "react-query";
import { productGetApi, productDelApi, productUpdateApi, productPostApi,
} from "../../api/productApi";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export default function UseProducts() {
  return useQuery({
    queryKey: ["Products"],
    queryFn: productGetApi,
  });
}

export function useDelProductMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productIdForDelete) => productDelApi(productIdForDelete),
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      toast("محصول با موفقیت حذف شد");
    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });
}

export function usePutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => productUpdateApi(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      toast("اطلاعات محصول با موفقیت آپدیت شد");
    },
    onError: (error) => {
      console.error("Error Putting product:", error);
    },
  });
}

export function usePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => productPostApi(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["Products"]);
      console.log("Success");
    },
    onError: (error) => {
      console.error("Error Posting product:", error);
    },
  });
}
