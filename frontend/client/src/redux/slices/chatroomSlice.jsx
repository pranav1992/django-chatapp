import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatroom : {
        created_at: "",
        created_by:"",
        created_with:"",
        id:"",
        is_group:"",
        name:"",
        updated_at:""
    }
}

export const chatroomSlice = createSlice({
    name: 'chatroom',
    initialState,
    reducers: {
        setChatroom: (state, action) => {
            state.chatroom = action.payload
        }
    }
});

export const {setChatroom} = chatroomSlice.actions
export default chatroomSlice.reducer
