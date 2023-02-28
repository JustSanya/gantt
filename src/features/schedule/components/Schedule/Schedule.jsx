import React from 'react'
import { useSelector } from 'react-redux';

import { selectTasks } from '../../scheduleSlice';
import ScheduleTask from '../ScheduleTask';
import ScheduleRuler from '../ScheduleRuler';

import styles from './Schedule.module.scss';


const Schedule = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div className={styles.wrapper}>
      <ScheduleRuler />
      {tasks.map(task => (
        <ScheduleTask key={task.name} task={task} />
      ))}
    </div>
  )
}

export default Schedule