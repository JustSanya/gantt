import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMode, toggleMode, selectDateRange } from '../../scheduleSlice'
import styles from './ScheduleToggler.module.scss'

const ScheduleToggler = () => {
  const mode = useSelector(selectMode);
  const range = useSelector(selectDateRange);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(toggleMode(event.target.value));
  }

  console.log(range);

  return (
    <div className={styles.wrapper}>
      <select className={styles.select} value={mode} onChange={handleChange}>
        <option value="days">Days</option>
        <option value="months">Months</option>
      </select>
    </div>
  )
}

export default ScheduleToggler