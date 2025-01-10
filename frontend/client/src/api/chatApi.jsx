import { apiClient } from "./apiClient";

export const fetchMessages = (chatId) => apiClient.get(`get-chats-messages/${chatId}/`)
export const setMessage = (payload) => apiClient.post(`set-message/`, payload)