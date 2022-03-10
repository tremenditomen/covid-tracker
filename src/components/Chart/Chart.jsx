import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  // const data = {
  //   labels: ['January', 'February', 'March',
  //          'April', 'May'],
  // datasets: [
  //   {
  //     label: 'Rainfall',
  //     fill: false,
  //     lineTension: 0.5,
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: [65, 59, 80, 81, 56]
  //   }
  // ]
  // }

  const data = {
    labels: dailyData?.map(({date}) => new Date(date).toLocaleDateString()),
    datasets: [
      {
        label : 'Infected',
        borderColor : '#3333ff',
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        data:dailyData?.map((data) => data.confirmed)

      },
    
      {
        label : 'Deaths',
        borderColor : 'red',
        fill: true,
        backgroundColor: 'rgba(255,0,0,0.5)',
        data:dailyData?.map((data) => data.deaths)

      }
    ]
  }

  const lineChart = dailyData[0] ? (
    <Line    
    data={data}
    
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
}

export default Chart;
