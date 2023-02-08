import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPositions = createAsyncThunk(
  'positions/fetchPositions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/positions');
      return data;
    } catch (error) {
      return rejectWithValue('not');
    }
  }
);
