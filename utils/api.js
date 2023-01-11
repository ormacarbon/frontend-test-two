import axios from "axios";

const api = axios.create({
	baseURL: "http://universities.hipolabs.com",
});

export default api;
