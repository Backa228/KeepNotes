import { supabase } from "../../../shared/api/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";


// LOGIN
export const logIn = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
    const { data, error} = await supabase
        .auth
        .signInWithPassword({ 
            email, 
            password 
        });
    
      if (error) throw error;

      return data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// LOGOUT
export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      return;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

// REGISTER
export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, firstName, lastName, birthDate }, thunkAPI) => {
    try {
    const { data, error} = await supabase
        .auth
        .signUp({ 
            email, 
            password,
            options: {
                data: {
                    firstName,
                    lastName,
                    birthDate,
                }
            }, 
        });


      console.log("DATA:", data);
      console.log("ERROR:", error);
    
      if (error) throw error;

      return data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// REFRESH USER
export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error) throw error;

      if (!data.session) {
        return thunkAPI.rejectWithValue("No active session");
      };
    
      return {
        user: data.session.user,
        session: data.session,
      };

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }           
});