import { createSlice } from '@reduxjs/toolkit';
import { fetchToken, addUser } from './register-operations';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    token: null,
    success: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchToken.fulfilled, (state, { payload }) => {
        state.token = payload.token;
      })
      .addCase(addUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, { payload: { success } }) => {
        state.isLoading = false;
        state.error = null;
        state.success = success;
      })
      .addCase(addUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const registerReducer = registerSlice.reducer;
