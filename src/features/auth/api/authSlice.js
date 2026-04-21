import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authApi"

const authSlice = createSlice({
    name: 'auth',
    initialState: {//initial - початкові
        user: null,
        session: null,
        isAuth: false,
        isRefreshing: false,
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.session = action.payload.session
            state.isAuth = true
        })
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.session = action.payload.session
            state.isAuth = true
        })
        builder.addCase(logOut.fulfilled, (state) => {
            state.user = null
            state.session = null
            state.isAuth = false
        })
        builder.addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true
        })
        builder.addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.session = action.payload.session
            state.isRefreshing = false
            state.isAuth = true
        })
        builder.addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = true
        })
            
    }

})
export default authSlice.reducer;