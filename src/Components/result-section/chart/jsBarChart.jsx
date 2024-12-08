import React from "react";
import { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartJSBar = ({ dataUIB }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  });


  useEffect(() => {
    if (dataUIB) {
      // Check if dataUIB is an object with years as keys
      if (typeof dataUIB === 'object' && !Array.isArray(dataUIB)) {
        const labels = Object.keys(dataUIB);
        const values = Object.values(dataUIB);

        setChartData({
          labels: labels, // Use the keys as labels
          datasets: [
            {
              data: values, // Use the values as data
              backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
          ],
        });
      } else {
        // Default case: single number (e.g., { "data": 149 })
        setChartData({
          labels: ["DATA"], // Default label
          datasets: [
            {
              data: [dataUIB], // Single value as data
              backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
          ],
        });
      }
    }
  }, [dataUIB]);


  const options = {
    responsive: true, // Secara bawaan sudah responsif
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return (
    <div className="w-[400px] h-[400px] mx-auto sm:w-[80%]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartJSBar;
