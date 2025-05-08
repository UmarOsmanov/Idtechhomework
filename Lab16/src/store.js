import { configureStore } from '@reduxjs/toolkit';
import fruitsReducer from './features/fruitsSlice';

export const store = configureStore({
  reducer: {
    fruits: fruitsReducer
  }
});
