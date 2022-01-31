import axios from "axios";
import router from "../router/routes.js";

const http = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3000",
});

http.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("Token")) {
      config.headers["Authorization"] = localStorage.getItem("Token");
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      localStorage.removeItem("Token");
      router.push("/login");
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http;
