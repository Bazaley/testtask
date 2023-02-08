import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/usersSlice';
import { registerReducer } from './register/registerSlice';
import { positionsReducer } from './positions/positionsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    register: registerReducer,
    positions: positionsReducer,
  },
});
