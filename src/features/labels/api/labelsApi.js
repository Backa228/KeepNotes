import { supabase } from "../../../shared/api/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLabels = createAsyncThunk(
  "labels/fetchLabels",
  async ( _, thunkAPI) => {
    try {
    const { data, error} = await supabase
        .from("labels")
        .select("*")
        .order("created_at", { ascending: false });
    
        console.log("LABELS DATA:", data);
        console.log("LABELS ERROR:", error);

      if (error) throw error;

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createLabel = createAsyncThunk(
    "labels/createLabels",
    async ({name, userId}, thunkAPI) => {
        try { 
            const { data, error } = await supabase
                .from("labels")
                .insert([
                    {
                        name,
                        user_id: userId
                    }
                ])
                .select()
            
            console.log(name, userId)
            
            if (error) throw error;

            console.log(data[0])

            return data[0]

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

// export const addLabelToNote = createAsyncThunk(
//     "labels/addLabelToNote",
//     async ({noteId, labelId}, thunkAPI) => {
//         try {
//             const { data, error } = await supabase
//                 .from("note_labels")
//                 .insert([
//                     {
//                         note_Id: noteId,
//                         label_Id: labelId
//                     }
//                 ])
//                 .select()
            
//             if (error) throw error;

//             return data[0]

//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// )

export const updateNoteLabels = createAsyncThunk(
    "labels/addLabelToNote",
    async ({noteId, labelIds}, thunkAPI) => {
        try { 
            if (labelIds.lenght === 0) return []

            const rows = labelIds.map(labelId => ({
                note_Id: noteId,
                label_Id: labelIds
            }))
            
            const { data, error } = await supabase
                .from("note_labels")
                .insert([
                    {
                       
                    }
                ])
                .select()
            
            if (error) throw error;

            return data[0]

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)