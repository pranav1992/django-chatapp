import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
const initialState = {
    isLoading : false,
    authToken : localStorage.getItem("authTokens") ?
                JSON.parse(localStorage.getItem("authTokens")) : {},
    user:       localStorage.getItem("authTokens") ?
                jwtDecode(localStorage.getItem("authTokens")) : null,
    profile:    localStorage.getItem("profile") ? 
                JSON.parse(localStorage.getItem('profile')) : {}

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
        },
        'setProfile': (state, action)=>{
            state.profile = action.payload
        }
    }
})
export const {setuser, setAuth, setisloading, setProfile} = authSlice.actions
export default authSlice.reducer

