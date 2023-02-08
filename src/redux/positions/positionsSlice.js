import { createSlice } from '@reduxjs/toolkit';
import { fetchPositions } from './positions-operations';

const positionsSlice = createSlice({
  name: 'positions',
  initialState: {
    positions: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPositions.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchPositions.fulfilled,
        (state, { payload: { positions } }) => {
          state.isLoading = false;
          state.error = null;
          state.positions = positions;
        }
      )
      .addCase(fetchPositions.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const positionsReducer = positionsSlice.reducer;
