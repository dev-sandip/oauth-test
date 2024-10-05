import a from "axios";

const axios = a.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/v1",
  withCredentials: true,
});

export default axios;
