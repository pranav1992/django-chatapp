import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [  ]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers : (state, action) => {
            let dummy = [...action.payload]
            state.user = dummy
        }
    }
})

export const { setUsers } = userSlice.actions
export default userSlice.reducer