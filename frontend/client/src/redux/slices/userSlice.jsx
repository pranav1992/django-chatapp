import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [  ],
    searchUserOpen: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers : (state, action) => {
            let dummy = [...action.payload]
            state.user = dummy
        },

        setSearchUser : (state, action) => {
            state.searchUserOpen = !state.searchUserOpen
        }
    }
})

export const { setUsers, setSearchUser } = userSlice.actions
export default userSlice.reducer