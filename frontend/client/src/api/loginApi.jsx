import { apiClient } from "./apiClient";

export const fetchToken = (payload) => apiClient.post('user/token/refresh/',payload)
export const fetchLogin = (payload) => apiClient.post('user/signin/', payload)
