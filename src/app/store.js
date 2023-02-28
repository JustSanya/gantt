import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from '../features/schedule/scheduleSlice';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
});
