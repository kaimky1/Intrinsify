import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

const Graph = () => {
  return (
    <div style={{height:'800px', width:'50%'}}>
      <Line
        const data = {{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: 'My First Dataset',
              data: [10, 5, 3, 7, 8, , 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }}
          options={{
            maintainAspectRatio: false,
          }}
          
      />
    </div>
  );
};

export default Graph;
