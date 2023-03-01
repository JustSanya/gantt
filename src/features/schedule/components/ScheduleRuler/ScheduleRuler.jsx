import React from 'react'
import { useSelector } from 'react-redux';
import { selectDateRange } from '../../scheduleSlice';
import ScheduleRulerDate from '../ScheduleRulerDate';

import styles from './ScheduleRuler.module.scss';

const ScheduleRuler = () => {
  const [rangeStart, __, rangeLength] = useSelector(selectDateRange);

  const rulerDates = [];

  for (let i=0; i <= rangeLength; i++) {
    const currentDate = new Date(rangeStart);
    currentDate.setDate(rangeStart.getDate() + i);

    rulerDates.push(<ScheduleRulerDate key={currentDate.getTime()} date={currentDate} />)
  }

  return (
    <div className={styles.wrapper}>
      {rulerDates}
    </div>
  )
}

export default ScheduleRuler