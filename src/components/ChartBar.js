import React from 'react';
import styles from './ChartBar.module.css';

const ChartBar = ({ value, label, maxValue }) => {

  let fillHeight = '0%';

  if (maxValue > 0)
    fillHeight = Math.round((value / maxValue) * 100) + '%';

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div className={styles["chart-bar__fill"]} style={{ height: fillHeight }}></div>
      </div>
      <div className={styles["chart-bar__label"]}>{label}</div>
    </div>
  )
}

export default ChartBar;