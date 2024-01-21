import axios from "axios";
import {BASE_API_URL} from "../../environment/environment";
import tokenService from "../services/tokenService";

const axiosInstance = axios.create({
	baseURL: BASE_API_URL,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(config => {
	const token = tokenService.getToken();
	config.headers.Authorization = "Bearer " + token;
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return error;
	},
);

export default axiosInstance;
