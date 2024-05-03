import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export default function usePutMutation() {
  const queryClient = useQueryClient();

  const updateProduct = useMutation(
    async ( payload ) => {
      console.log(
        payload
      );
      let response = await axios.put(
        `http://localhost:3000/api/products/${payload.productId}`,
        payload.data
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["Products"]);
      },
      onError: (error) => {
        console.error("Error Putting product:", error);
      },
    }
  );
  return updateProduct;
}
