import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.cosmos.bluesoft.com.br",
    headers: { 'X-Cosmos-Token': "rsTaQyQlnf-0ldY78mFScg" },
    validateStatus: () => true
});