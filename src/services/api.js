import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.cosmos.bluesoft.com.br",
    headers: { 'X-Cosmos-Token': "aMLH5bIfXrSIZkfjs6c7YQ" },
    validateStatus: () => true
});