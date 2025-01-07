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
            console.log(action.payload)
            state.chatroom = action.payload
            console.log(state.chatroom)
            console.log("chatroom ==>")
        }
    }
});

export const {setChatroom} = chatroomSlice.actions
export default chatroomSlice.reducer
