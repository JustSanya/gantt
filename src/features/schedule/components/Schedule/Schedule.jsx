import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectTasks, selectDayWidth, selectDateRange, updateTimeslot } from '../../scheduleSlice';

import ScheduleTask from '../ScheduleTask';
import ScheduleRuler from '../ScheduleRuler';

import styles from './Schedule.module.scss';


const Schedule = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const dayWidth = useSelector(selectDayWidth);
  const [ startDate ] = useSelector(selectDateRange);
  const schedule = useRef(null);    

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleOnDrop = (e) => {
    const task = tasks.find(task => task.name === e.dataTransfer.getData('taskName'));
    const dateType = e.dataTransfer.getData('dateType');

    const distanceFromStart =  e.clientX - schedule.current.offsetLeft + schedule.current.scrollLeft;
    const daysFromStart = Math.floor(distanceFromStart / dayWidth);
    const targetDate = new Date(startDate);
    targetDate.setDate(startDate.getDate() + daysFromStart);

    const targetDateFomatted = new Intl.DateTimeFormat('en-US').format(targetDate) + ' 00:00';
    const updatedTask = {
      ...task,
      [`${dateType}_date`]: targetDateFomatted
    }
    dispatch(updateTimeslot(updatedTask));
  }

  return (
    <div ref={schedule} className={styles.wrapper} onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <ScheduleRuler />
      {tasks.map(task => (
        <ScheduleTask key={task.name} task={task} />
      ))}
    </div>
  )
}

export default Schedule