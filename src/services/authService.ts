import axiosInstance from "../core/interceptors/axiosInceptor";

class AuthService {
	// modelleme
	register(model: any) {
		return axiosInstance.post("Auth/register", model);
	}
}

export default new AuthService();
