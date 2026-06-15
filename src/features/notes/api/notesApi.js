import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../../shared/api/supabase";

//READ notes
export const fetchNotes = createAsyncThunk(
    "notes/fetchNotes",
    async (_, thunkAPI) => {
        try {
            const { data, error } = await supabase
                .from("notes")
                .select("*")
                .order("created_at", { ascending: false });
                
            if (error) throw error;

            return data;// [ { id, title, content, user_id }, ... ]
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

//CREATE note
export const createNote = createAsyncThunk(
    "notes/createNote",
    async ({ title, content, userId }, thunkAPI) => {
        try {
            const { data, error } = await supabase
                .from("notes")
                .insert ([
                    {
                        title,
                        content,
                        user_id: userId,
                    },
                ]) 
                .select();
    
            if (error) throw error;

            return data[0];// { id:3729372, title:список продутів, content:молоко,..., user_id:3729372 } = action.payload
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }

    }
)

//DELETE note
export const deleteNote = createAsyncThunk(
    "notes/deleteNote",
    async (id, thunkAPI) => {
         try {
            const { error } = await supabase
                .from("notes")
                .delete()
                .eq("id", id);
    
            if (error) throw error;

            return id;// id = action.payload
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

//UPDATE note
export const updateNote = createAsyncThunk(
    "notes/updateNote",
    async ({ id, title, content }, thunkAPI) => {
        try {
            const { data, error } = await supabase
                .from("notes")
                .update({ title, content })
                .eq("id", id)
                .select();
                    
            if (error) throw error;
            return data[0]; //{ id, title, content } = action.payload
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)