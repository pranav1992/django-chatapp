import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import chatroomReducer  from './slices/chatroomSlice'

export const store = configureStore({
  reducer: {user: userReducer, chatroom: chatroomReducer},
})

