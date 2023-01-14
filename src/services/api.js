import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWFjYzE5YmVmZGMxODE4YjFhMjllYzhlNjc3ZWZkOCIsInN1YiI6IjYyNzUzYjZlOWNhNzU5MDBhMGMxYTA4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pwcz0Od2s4XyXXg_tOlI8HNQo0RvoylSiCUnohJ8DHE`,
    "Content-Type": "application/json;charset=utf-8",
  },
});
