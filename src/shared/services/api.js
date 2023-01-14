import axios from "axios";

export const SIMPLE_CACHE_MAP = new Map();

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
