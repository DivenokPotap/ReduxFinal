import { createSlice } from "@reduxjs/toolkit"
import { AuthCurrent, AuthLogin } from "./authOperatins";

const handlePending = (state) => {
    state.isLoading = true;
    state.error = null
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        error: null,
    },
    reducers: { 
        AuthLogOut: (state) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
    }},
    extraReducers: (builder) => {
        builder
            .addCase(AuthCurrent.pending, (state) => {
                  state.isRefreshing=true
                  state.isLoading = true;
                  state.error = null;
          })
            .addCase(AuthCurrent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isRefreshing = false;
                state.user = action.payload;
                state.error = null
                state.isLoggedIn = true
          })
            .addCase(AuthCurrent.rejected, (state, action) => {
                state.isRefreshing = false;
                state.isLoading = false;
                state.isLoggedIn = false;
                state.error = action.payload;
            })
          .addCase(AuthLogin.pending, handlePending)
          .addCase(AuthLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload
            state.token = action.payload.accessToken;
            state.isLoggedIn = true;
            state.isRefreshing = false;
          })
          .addCase(AuthLogin.rejected, handleRejected)
    }
})

export const authReducer = authSlice.reducer

export const { AuthLogOut } = authSlice.actions;