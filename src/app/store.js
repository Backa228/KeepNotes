import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/api/authSlice";
import notesReducer from "../features/notes/api/notesSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notes: notesReducer
    }
});