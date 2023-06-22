import axios from "axios";

// URL бэкэнда
const BASE_URL = "http://localhost:5187/api";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
})
