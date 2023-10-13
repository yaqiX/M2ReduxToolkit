// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import stringReducer from './slices/stringSlice';

const store = configureStore({
  reducer: {
    string: stringReducer,
  },
});

export default store;
