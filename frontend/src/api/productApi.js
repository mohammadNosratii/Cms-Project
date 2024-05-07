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

export async function productUpdateApi(payload) {
  const response = await axios.put(
    `http://localhost:3000/api/products/${payload.productId}`,
    payload.data
  );
  if (response.status === 200) {
    console.log(response);
    return response.data;
  }
}

export function productPostApi(payload) {
  return axios.post(`http://localhost:3000/api/products/`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
