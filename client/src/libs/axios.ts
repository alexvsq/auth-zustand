import axios from "axios";
import { useAuthStore } from "../store/auth.ts";

const authApi = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

authApi.interceptors.request.use((config: any) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };

  return config;
});

export default authApi;
