import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.cosmos.bluesoft.com.br",
    headers: { 'X-Cosmos-Token': "MkjGKs44ffFJ6DSXfG4Acw" },
    validateStatus: () => true
});