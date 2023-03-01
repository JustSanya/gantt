import React from 'react'
import styles from './ScheduleTaskBar.module.scss';
import StartBorder from './StartBorder';
import EndBorder from './EndBorder';

const ScheduleTaskBar = ({ task, offset, width }) => {
  const handleDragStart = (dateType) => {
    return (e) => {
      e.dataTransfer.setData('taskName', task.name);
      e.dataTransfer.setData('dateType', dateType);
    }
  }

  return (
    <div 
      style={{ left: `${offset}px`, width: `${width}px` }}
      className={styles.bar}
      title={`Start: ${task.start_date}; End: ${task.end_date}; Duration: ${task.duration}`}
    >
      <StartBorder handleDragStart={handleDragStart('start')} />
      { task.name }
      <EndBorder handleDragStart={handleDragStart('end')} />
    </div>
  )
}

export default ScheduleTaskBar