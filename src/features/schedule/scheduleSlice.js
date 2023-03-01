import { createSlice, createSelector } from '@reduxjs/toolkit';
import { calculateDuration } from './utils';

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
    resetTasks: (state, { payload }) => {
      state.tasks = payload.map(task => {
        const durationInDays = calculateDuration(task.start_date, task.end_date);

        return {
          ...task,
          duration: durationInDays
        }
      });
    },
    updateTimeslot: (state, { payload }) => {
      const task = state.tasks.find(task => task.name === payload.name);

      task.start_date = payload.start_date;
      task.end_date = payload.end_date;
      task.duration = calculateDuration(payload.start_date, payload.end_date);
    }
  },
});

export const { updateTimeslot, toggleMode, resetTasks } = scheduleSlice.actions;

export const selectMode = (state) => state.schedule.mode;
export const selectTasks = (state) => state.schedule.tasks;
export const selectDateRange = createSelector([selectTasks], (tasks) => {
  const minDate = Math.min(...tasks.map(task => new Date(task.start_date).getTime()));
  const maxDate = Math.max(...tasks.map(task => new Date(task.end_date).getTime()));

  return [new Date(minDate), new Date(maxDate)];
})

export default scheduleSlice.reducer;
