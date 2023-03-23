import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "content-type": "multipart/form-data" },
  withCredentials: true,
});

export default instance;
