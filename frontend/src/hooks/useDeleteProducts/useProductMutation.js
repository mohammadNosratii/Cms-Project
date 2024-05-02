import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export default function useProductMutation() {
  const queryClient = useQueryClient();

  const deleteProduct = useMutation(
    async (productIdForDelete) => {
      let response = await axios.delete(
        `http://localhost:3000/api/products/${productIdForDelete}`
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
      onError: (error) => {
        console.error("Error deleting product:", error);
      },
    }
  );

  return deleteProduct;
}
