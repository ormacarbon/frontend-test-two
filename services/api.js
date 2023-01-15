import axios from "axios";

const api = axios.create({
    baseURL: 'https://github.com/'
})

export default api