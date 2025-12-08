import axios from "axios";
import { store } from "../store/store";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": import.meta.env.VITE_X_API_KEY,
    Accept: "application/json",
    "X-Nonce": import.meta.env.VITE_X_NONCE,
    "X-Signature": import.meta.env.VITE_X_SIGNATURE,
    lang: store.getState().language.lang || "en",
  },
});

export default api;
