import axios from "axios";
import {BASE_API_URL} from "../../environment/environment";
import tokenService from "../services/tokenService";
import {store} from "../../store/configureStore";
import {addRequest, removeRequest} from "../../store/loading/loadingSlice";

const axiosInstance = axios.create({
	baseURL: BASE_API_URL,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(config => {
	store.dispatch(addRequest());

	const token = tokenService.getToken();
	config.headers.Authorization = "Bearer " + token;
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		store.dispatch(removeRequest());
		return response;
	},
	error => {
		store.dispatch(removeRequest());
		return error;
	},
);

export default axiosInstance;
