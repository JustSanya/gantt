import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { resetTasks } from '../scheduleSlice';
import ScheduleToggler from './ScheduleToggler';
import ScheduleTasksList from './ScheduleTasksList';
import Schedule from './Schedule';

const ScheduleContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('/tasksData.json');
        const data = await result.json();
  
        dispatch(resetTasks(data));
      } catch(error) {
        console.error(error);
      }
    }

    fetchData();
  }, [dispatch])

  return (
    <>
      <div className="App-sidebar">
        <ScheduleToggler />
        <ScheduleTasksList />
      </div>
      <div className="App-body">
        <Schedule />
      </div>
    </>
  )
}

export default ScheduleContainer