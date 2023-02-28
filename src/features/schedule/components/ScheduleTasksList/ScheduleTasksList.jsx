import React from 'react'
import { useSelector } from 'react-redux';
import { selectTasks } from '../../scheduleSlice';
import ScheduleTaskLabel from '../ScheduleTaskLabel';

import styles from './ScheduleTasksList.module.scss';

const ScheduleTasksList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div className={styles.wrapper}>
      {tasks.map(task => (
        <ScheduleTaskLabel key={task.name} name={task.name} />
      ))}
    </div>
  )
}

export default ScheduleTasksList