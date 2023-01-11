import axios from "axios";

export const beersApi = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
});
