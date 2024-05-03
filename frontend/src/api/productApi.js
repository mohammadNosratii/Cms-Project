import axios from "axios";

export async function productGetApi() {
  const response = await axios.get(`http://localhost:3000/api/products/`);
  if (response.status === 200) {
    return response.data;
  }
}

export async function productDelApi(productIdForDelete) {
  const response = await axios.delete(
    `http://localhost:3000/api/products/${productIdForDelete}`
  );
  if (response.status === 200) {
    return response.data;
  }
}
