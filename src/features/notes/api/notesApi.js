import { createAsyncThunk } from "@reduxjs/toolkit"
import { supabase } from "../../../shared/api/supabase";

//READ NOTES
export const fetchNotes = createAsyncThunk(
    "notes/fetchNotes",
    async (_, thunkAPI) => {
        try {
            const { data, error } = await supabase
                .from("notes")
                .select("*")
                .order("created_at", { ascending: false })
            
            if (error) throw error
            
            return data
         }
        catch (e) {
            return thunkAPI.rejectedWithValue(e.message)
        }
    }
)

//CREATE NOTE
export const createNote = createAsyncThunk(
    "notes/createNote",
    async ({ title, content, userId }, thunkAPI) => {
        try {
            const { data, error } = await supabase
                .from("notes")
                .insert([
                    {
                        title,
                        content,
                        user_id: userId,
                    },
                ])
                .select()
            
            if (error) throw error
            
            return data[0]
         }
        catch (e) {
            return thunkAPI.rejectedWithValue(e.message)
        }
    }
)

//DELETE NOTE
export const deleteNote = createAsyncThunk(
    "notes/deleteNote",
    async (id, thunkAPI) => {
        try {
            const { error } = await supabase
                .from("notes")
                .delete()
                .eq("id", id)
            
            if (error) throw error
            
            return id
         }
        catch (e) {
            return thunkAPI.rejectedWithValue(e.message)
        }
    }
)

//UPDATE NOTE
export const updateNote = createAsyncThunk(
    "notes/updateNote",
    async ({ id, title, content }, thunkAPI) => {
        try {
            const { data, error } = await supabase
                .from("notes")
                .update({ title, content })
                .eq("id", id)
                .select()
        
            if (error) throw error
            return data[0]
        }
        catch (e) {
            return thunkAPI.rejectedWithValue(e.message)
        }
    }
)