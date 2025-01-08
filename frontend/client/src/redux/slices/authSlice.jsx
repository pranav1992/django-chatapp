import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
const initialState = {
    isLoading : false,
    authToken : localStorage.getItem("authTokens") ?
                JSON.parse(localStorage.getItem("authTokens")) : {},
    user:       localStorage.getItem("authTokens") ?
                jwtDecode(localStorage.getItem("authTokens")) : null

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        'setuser': (state, action) => {
            state.user = action.payload
        },
        'setAuth': (state, action) =>{
            state.authToken = action.payload
        },
        'setisloading': (state, action)=>{
            state.isLoading = action.payload
        } 
    }
})
export const {setuser, setAuth, setisloading} = authSlice.actions
export default authSlice.reducer

