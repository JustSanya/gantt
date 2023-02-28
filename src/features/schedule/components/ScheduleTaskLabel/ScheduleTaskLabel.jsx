import React from 'react'
import styles from './ScheduleTaskLabel.module.scss';

const ScheduleTaskLabel = ({ name }) => {
  return (
    <div className={styles.label}>{ name }</div>
  )
}

export default ScheduleTaskLabel