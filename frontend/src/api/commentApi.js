import axios from "axios";

export async function commentGetApi() {
  const response = await axios.get("http://localhost:3000/api/comments/");
  if (response.status === 200) {
    return response.data;
  }
}

export async function commentDelApi(commentId) {
  const response = await axios.delete(
    `http://localhost:3000/api/comments/${commentId}`
  );
  if (response.status === 200) {
    return response.data;
  }
}

export async function commentUpdateApi(payload) {
  const response = await axios.put(
    `http://localhost:3000/api/comments/${payload.commentId}`,
    payload.data
  );
  if (response.status === 200) {
    return response.data;
  }
}

export function commentPostApi(productID) {
 return axios.post(`http://localhost:3000/api/comments/accept/${productID}`);
}
