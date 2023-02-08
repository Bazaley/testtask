import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users', {
        params: {
          page,
          count: 6,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue('not');
    }
  }
);
