import { configureStore } from '@reduxjs/toolkit';
import favsReducer from '../features/favSlice';
// Create and export the store

const store = configureStore({
  reducer: {
    favorites: favsReducer
  },
});

export default store;