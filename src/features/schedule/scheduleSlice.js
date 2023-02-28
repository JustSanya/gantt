import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'days',
  tasks: [],
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    toggleMode: (state, { payload }) => {
      state.mode = payload;
    },
    updateTimeslot: (state, { payload }) => {
      const task = state.tasks.find(task => task.name === payload.name);

      task.start_date = payload.start_date;
      task.end_date = payload.end_date;
    }
  },
});

export const { updateTimeslot, toggleMode } = scheduleSlice.actions;

export const selectMode = (state) => state.schedule.mode;
export const selectTasks = (state) => state.schedule.tasks;

export default scheduleSlice.reducer;
