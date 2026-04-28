import { createSlice } from "@reduxjs/toolkit";
import { fetchNotes, createNote, deleteNote } from "./notesApi";
// import { logIn } from "./operations";

const notesSlice = createSlice({
    name: 'notes',
    initialState: {// initial - початкові стани
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
    
    },
    extraReducers: builder => {
        builder.addCase(fetchNotes.pending, (state) => {
            state.isLoading = true
            state.error = null
        })   
        builder.addCase(fetchNotes.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchNotes.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })   
    }
})
// export const { } = slice.actions;
export default notesSlice.reducer;