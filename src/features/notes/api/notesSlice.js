import { createSlice } from "@reduxjs/toolkit";
import { fetchNotes, createNote, deleteNote, updateNote } from "./notesApi";
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
        builder
            //READ notes
            .addCase(fetchNotes.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.items = action.payload
                state.isLoading = false
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            //CREATE note
            .addCase(createNote.fulfilled, (state, action) => {
                state.items.unshift(action.payload)
            })
            
            .addCase(createNote.rejected, (state, action) => {
                state.error = action.payload;
            })

            //DELETE note
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.items = state.items.filter(note => note.id !== action.payload)
            })
            
            .addCase(deleteNote.rejected, (state, action) => {
                state.error = action.payload
            })
        
            //UPDATE note
            .addCase(updateNote.fulfilled, (state, action) => {
                const index = state.items.findIndex(note => note.id === action.payload.id)

                if (index !== 1) {
                    state.items[index] = action.payload 
                }
                
            })
            
            .addCase(updateNote.rejected, (state, action) => {
                state.error = action.payload
            })
        }
    })


// export const { } = slice.actions;
export default notesSlice.reducer;