import React from 'react'
import styles from './ScheduleTaskBar.module.scss';

const ScheduleTaskBar = ({ title, offset, width }) => {
  return (
    <div style={{ left: `${offset}px`, width: `${width}px` }} className={styles.bar}>{ title }</div>
  )
}

export default ScheduleTaskBar