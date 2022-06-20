import axios from "axios";

const api = axios.create({
  baseURL: "https://site-coletivo-unicas-backend.herokuapp.com/",
});

export default api;