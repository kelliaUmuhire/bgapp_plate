import axios from "axios";
const baseUrl = "http://localhost:3050/api";

export async function createUser(data) {
  try {
    const user = await axios.post(`${baseUrl}/user/signup`, data);
    return user;
  } catch (err) {
    console.log(err);
  }
}

export async function signIn(data) {
  const res = await axios.post(`${baseUrl}/user/signin`, data);
  return res;
}
