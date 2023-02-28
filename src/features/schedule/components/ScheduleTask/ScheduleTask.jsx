import React from 'react'
import styles from './ScheduleTask.module.scss';

import ScheduleTaskBar from '../ScheduleTaskBar';

const ScheduleTask = ({ task }) => {
  return (
    <div className={styles.wrapper}>
      <ScheduleTaskBar title={task.name} offset={0} width={100}/>
    </div>
  )
}

export default ScheduleTask