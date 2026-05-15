import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL

console.log(backend_url)

const api = axios.create({
  baseURL: backend_url
});

export default api;