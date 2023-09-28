import axios from "axios";
import { API_URL } from "./apiRoute";
import Cookies from "js-cookie";
import { toastError } from "@/toastMessages/index";
const httpService = axios.create({
    baseURL: API_URL,
    timeout: 1000 * 20, // timeout süresi
    headers: { "Content-Type": "application/json" },
  });


  httpService.interceptors.request.use(
    function (config) {
      const token = Cookies.get("authToken");
      if (token && token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  httpService.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
        toastError("İşlem zaman aşımına uğradı");
      }
      return Promise.reject(error);
    }
  
  )
  export {httpService};