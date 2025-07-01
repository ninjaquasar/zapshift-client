import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:5100",
});

export default apiClient;
