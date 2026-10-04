import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'https://dummyjson.com'

export const AuthCurrent = createAsyncThunk(
    "auth/getCurrent",
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const token = state.auth.token;

            if (!token) {
              return thunkAPI.rejectWithValue("Токен відсутній");
            }
            const { data } = await axios.get(`${baseURL}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
  }
);
export const AuthLogin = createAsyncThunk(
  "auth/Login",
    async (userData, { rejectWithValue }) => {
      try {

    const { data } = await axios.post(`${baseURL}/auth/login`, userData);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register"
);