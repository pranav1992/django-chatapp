import { apiClient } from "./apiClient";

export const fetchUser = () =>  apiClient.get("user/");
export const fetchUsersChatroom = (id) => apiClient.get(`get_user_chat/${id}`)
export const fetchProfile = (id) => apiClient.get(`user/get-profile/${id}`)
