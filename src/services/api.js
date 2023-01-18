import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.cosmos.bluesoft.com.br",
    headers: { 'X-Cosmos-Token': "kE3OdctnwL3IrT3c_ZVILw" },
    validateStatus: () => true
});