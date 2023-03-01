import { createSlice, createSelector } from '@reduxjs/toolkit';
import { calculateDifference } from './utils';

const initialState = {
  mode: 'days',
  dayWidth: 30,
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
        const durationInDays = calculateDifference(task.start_date, task.end_date);

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
      task.duration = calculateDifference(payload.start_date, payload.end_date);
    }
  },
});

export const { updateTimeslot, toggleMode, resetTasks } = scheduleSlice.actions;

export const selectMode = (state) => state.schedule.mode;
export const selectTasks = (state) => state.schedule.tasks;
export const selectDayWidth = (state) => state.schedule.dayWidth;
export const selectDateRange = createSelector([selectTasks], (tasks) => {
  const minDate = new Date(Math.min(...tasks.map(task => new Date(task.start_date).getTime())));
  const maxDate = new Date(Math.max(...tasks.map(task => new Date(task.end_date).getTime())));

  const rangeStart = new Date(minDate.setDate(minDate.getDate() - 3));
  const rangeEnd = new Date(maxDate.setDate(maxDate.getDate() + 3));
  const rangeLength = calculateDifference(rangeStart, rangeEnd);

  return [rangeStart, rangeEnd, rangeLength];
})

export default scheduleSlice.reducer;
