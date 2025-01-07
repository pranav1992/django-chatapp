import axios from "axios";
import { API_TIMEOUT, BASE_URL } from "../utils/constants";

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: API_TIMEOUT
})

export const fetchUser = () =>  apiClient.get("user/");
export const fetchUsersChatroom = (id) => apiClient.get(`get_user_chat/${id}`)
export const fetchToken = (payload) => apiClient.post('user/token/refresh/',payload)
export const fetchLogin = (payload) => apiClient.post('user/signin/', payload)
