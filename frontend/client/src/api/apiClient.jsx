import axios from "axios";
import { API_TIMEOUT, BASE_URL } from "../utils/constants";
import { store } from "../redux/store";
import { setAuth } from "../redux/slices/authSlice";
import {fetchToken} from "./loginApi"

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: API_TIMEOUT,
})

// Add a request interceptor to dynamically set headers
apiClient.interceptors.request.use((config) => {
    const state = store.getState(); // Get the current Redux state
    const token = state.auth?.authToken?.access_token; // Access the token from state
   
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // Add a response interceptor to handle token refresh
apiClient.interceptors.response.use(
  (response) => response, // Pass through successful responses

  async (error) => {
    const originalRequest = error.config;
    // Check if the error is due to token expiration and retry only once
    if (
      error.response?.status === 401 && // Unauthorized error
      !originalRequest._retry // Custom flag to avoid infinite retries
    ) {

      originalRequest._retry = true;

      try {
        // Fetch the refresh token from the Redux store
        const state = store.getState();
        const refreshToken = state.auth?.authToken?.refresh_token;
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }
        const response = await fetchToken({refresh: refreshToken})
        const newAccessToken = response.data.access;
        const authCred =  {
          ...state.auth.authToken,
          "access_token": newAccessToken  
        }
        store.dispatch(setAuth(authCred));
        localStorage.setItem("authTokens", JSON.stringify(authCred))
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Clear tokens and redirect to login if refreshing fails
        store.dispatch(clearAuthToken());
        console.error("Token refresh failed:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);