import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});

