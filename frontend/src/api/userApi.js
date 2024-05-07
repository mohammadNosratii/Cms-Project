import axios from "axios";

export async function userGetApi() {
  const response = await axios.get("http://localhost:3000/api/users");
  if (response.status === 200) {
    return response.data;
  }
}

export async function userDelApi(userId) {
  const response = await axios.delete(
    `http://localhost:3000/api/users/${userId}`
  );
  if (response.status === 200) {
    return response.data;
  }
}

export async function userUpdateApi(payload) {
  const response = await axios.put(
    `http://localhost:3000/api/users/${payload.userId}`,
    payload.data
  );
  if (response.status === 200) {
    return response.data;
  }
}
