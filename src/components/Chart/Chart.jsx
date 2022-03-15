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
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Chart = ({data:{confirmed,recovered,deaths} , country}) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);


  const data1 = {
    labels: dailyData.map(({date}) => new Date(date).toLocaleDateString()),
    datasets: [
      {
        label : 'Infected',
        borderColor : '#3333ff',
        fill: true,
        backgroundColor: 'rgba(75,192,192,1)',
        data:dailyData.map((data) => data.confirmed)

      },
    
      {
        label : 'Deaths',
        borderColor : 'red',
        fill: true,
        backgroundColor: 'rgba(255,0,0,0.5)',
        data:dailyData.map((data) => data.deaths)

      }
    ]
  }

  const lineChart = dailyData.length ? (

    <Line    
    data={data1}
    
    />
  ) : null;
  const data2 ={
    
    labels:['infected','recovered','deaths'],
          datasets:[{
            label: 'people',
            backgroundColor:[
            'rgba(0,0,255, 0.5)',
            'rgba(0,255,0, 0.5)',
            'rgba(255,0,0, 0.5)',],
            data: [confirmed.value,recovered.value,deaths.value]
          }]
  }
    const barChart = (
      confirmed?(
        <Bar
          data = {data2}
        options = {{
          legend: {display: false},
          title : {display:true, text:`current state in ${country}`}

        }}
        
        />
      ):null
     
    )
  return <div className={styles.container}>
    {country?barChart:lineChart}
    </div>;
}

export default Chart;
