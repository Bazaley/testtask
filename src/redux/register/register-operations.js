import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchToken = createAsyncThunk(
  'register/fetchToken',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/token');

      return data;
    } catch (error) {
      return rejectWithValue('not');
    }
  }
);

export const addUser = createAsyncThunk(
  'register/addUser',
  async (user, { rejectWithValue, getState }) => {
    const tokenls = getState().register.token;

    try {
      const { data } = await axios.post('/users', user, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Token: tokenls,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue('not');
    }
  }
);
