import React from 'react'
import { useSelector } from 'react-redux';

import ScheduleTaskBar from '../ScheduleTaskBar';
import { calculateDifference } from '../../utils';
import { selectDayWidth, selectDateRange } from '../../scheduleSlice'


import styles from './ScheduleTask.module.scss';

const ScheduleTask = ({ task }) => {
  const dayWidth = useSelector(selectDayWidth);
  const [rangeStart] = useSelector(selectDateRange);
  const offset = calculateDifference(rangeStart, new Date(task.start_date)) * dayWidth;

  return (
    <div className={styles.wrapper}>
      <ScheduleTaskBar task={task} offset={offset} width={task.duration * dayWidth}/>
    </div>
  )
}

export default ScheduleTask