import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatMessages : {}
}

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setChatroomMessages: (state, action) => {
            const { roomId, messages } = action.payload;
            state.chatMessages[roomId] = messages;
        }
    }
});

export const {setChatroomMessages} = messageSlice.actions
export default messageSlice.reducer
