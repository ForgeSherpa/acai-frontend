import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartJSPie = ({ dataUIB }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [], // Warna yang akan bervariasi
      },
    ],
  });

  useEffect(() => {
    if (dataUIB) {
      if (typeof dataUIB === "object" && !Array.isArray(dataUIB)) {
        const labels = Object.keys(dataUIB);
        const values = Object.values(dataUIB);

        // Generate warna acak atau pilih warna dari array warna
        const colors = generateRandomColors(values.length);

        setChartData({
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: colors, // Gunakan warna yang telah di-generate
            },
          ],
        });
      } else {
        // Default case: single number (e.g., { "data": 149 })
        setChartData({
          labels: ["DATA"],
          datasets: [
            {
              data: [dataUIB],
              backgroundColor: ["rgba(75, 192, 192, 0.5)"], // Default color
            },
          ],
        });
      }
    }
  }, [dataUIB]);

  // Fungsi untuk generate warna secara acak
  const generateRandomColors = (numColors) => {
    const colors = [];
    const colorPalette = [
      "rgba(75, 192, 192, 0.5)",
      "rgba(255, 99, 132, 0.5)",
      "rgba(54, 162, 235, 0.5)",
      "rgba(255, 159, 64, 0.5)",
      "rgba(153, 102, 255, 0.5)",
      "rgba(255, 159, 64, 0.5)",
      "rgba(100, 150, 255, 0.5)",
      "rgba(200, 100, 100, 0.5)",
      "rgba(255, 205, 86, 0.5)",
      "rgba(75, 192, 192, 0.5)",
    ];

    // Gunakan warna yang sudah ada dari colorPalette dan sesuaikan jumlahnya dengan numColors
    for (let i = 0; i < numColors; i++) {
      colors.push(colorPalette[i % colorPalette.length]); // Ulangi jika warna habis
    }

    return colors;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pie Chart Example",
      },
    },
  };

  return (
    <div className="w-[400px] h-[400px] mx-auto sm:w-[80%]">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default ChartJSPie;
