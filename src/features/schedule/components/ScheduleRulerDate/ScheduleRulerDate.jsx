import React from 'react'
import styles from './ScheduleRulerDate.module.scss';

const ScheduleRulerDate = ({date}) => {
  return (
    <div className={styles.item}>{`${date.getDate()}/${date.getMonth() + 1}`}</div>
  )
}

export default ScheduleRulerDate