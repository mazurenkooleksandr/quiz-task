import axios from "axios";

const API_BASE_URL = "./quiz";

export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("Error: ", error);

    return Promise.reject(error);
  }
);
