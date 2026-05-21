import axios from "axios";

const backend_url = "https://be-washed-md.onrender.com"

const api = axios.create({
  baseURL: backend_url
});

export default api;