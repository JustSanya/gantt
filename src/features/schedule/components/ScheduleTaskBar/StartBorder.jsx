import React from 'react'
import styles from './ScheduleTaskBar.module.scss';

const StartBorder = ({ handleDragStart }) => {
  return (
    <div draggable onDragStart={handleDragStart} className={`${styles.border} ${styles['border-left']}`}></div>
  )
}

export default StartBorder