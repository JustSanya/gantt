import React from 'react'
import styles from './ScheduleTaskBar.module.scss';

const EndBorder = ({ handleDragStart }) => {
  return (
    <div  draggable onDragStart={handleDragStart} className={`${styles.border} ${styles['border-right']}`}></div>
  )
}

export default EndBorder