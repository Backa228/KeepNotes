import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/api/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});