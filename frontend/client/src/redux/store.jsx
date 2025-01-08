import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import chatroomReducer  from './slices/chatroomSlice'
import authReducer  from './slices/authSlice'

export const store = configureStore({
  reducer: {user: userReducer, chatroom: chatroomReducer, auth: authReducer},
})

