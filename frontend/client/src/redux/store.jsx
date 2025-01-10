import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import chatroomReducer  from './slices/chatroomSlice'
import authReducer  from './slices/authSlice'
import messageReducer from './slices/chatMessagesSlice'

export const store = configureStore({
  reducer: {user: userReducer, chatroom: chatroomReducer,
            auth: authReducer, messages: messageReducer },
})

