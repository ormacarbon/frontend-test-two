import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.cosmos.bluesoft.com.br",
    headers: { 'X-Cosmos-Token': "qwbOLARThPUoG21lEhmE3w" },
    validateStatus: () => true
});