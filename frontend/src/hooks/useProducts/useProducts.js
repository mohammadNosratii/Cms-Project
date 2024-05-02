import { useQuery } from "react-query";
import axios from "axios";

export default function UseProducts() {
  return useQuery("Products", async () => {
    const response = await axios.get("http://localhost:3000/api/products/");
    if (response.status === 200) {
      return response.data;
    }
  });
}
