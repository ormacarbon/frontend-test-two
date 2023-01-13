import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "17e22726173ad18e73404feb4ca6c964",
    language: "en-US",
    page: 1,
  },
});
