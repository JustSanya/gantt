import React from 'react'
import styles from './ScheduleTaskBar.module.scss';

const ScheduleTaskBar = ({ task, offset, width }) => {
  return (
    <div 
      style={{ left: `${offset}px`, width: `${width}px` }}
      className={styles.bar}
      title={`Start: ${task.start_date}; End: ${task.end_date}; Duration: ${task.duration}`}
    >
      { task.name }
    </div>
  )
}

export default ScheduleTaskBar