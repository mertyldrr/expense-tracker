import React from 'react';
import ChartBar from './ChartBar';
import styles from './Chart.module.css';

const Chart = ({ dataPoints }) => {
  const valueArray = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...valueArray); // Math.max requires multiple arguments instead of an array
  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart;