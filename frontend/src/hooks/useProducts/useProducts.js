import { useQuery } from "react-query";
import { productGetApi, productDelApi } from "../../api/productApi";
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
