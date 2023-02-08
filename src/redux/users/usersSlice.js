import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './users-operations';

const initialState = {
  users: [],
  totalPages: null,
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, { payload: { users, total_pages, page } }) => {
          state.isLoading = false;
          state.totalPages = total_pages;
          if (page === 1) {
            state.users = [...users];
            return;
          }

          state.users = [...state.users, ...users];
        }
      )
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
