import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stats = ({ taskList, stats }) => {
  const data = {
    labels: [...taskList.map((t) => t.text), "Total Sessions"],
    datasets: [
      {
        label: "Pomodoros Completed",
        data: [...taskList.map((t) => t.pomodoros), stats.sessions || 0],
        backgroundColor: "#3b82f6",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#1e40af",
        hoverBackgroundColor: "#2563eb",
      },
      {
        label: "Work Minutes",
        data: [...taskList.map(() => null), stats.workMinutes || 0],
        backgroundColor: "#f87171",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#b91c1c",
        hoverBackgroundColor: "#dc2626",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Pomodoro Stats" },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#f9fafb",
        bodyColor: "#f9fafb",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { stepSize: 1, color: "#374151" },
        grid: { color: "#e5e7eb" },
      },
      y: {
        ticks: { color: "#374151" },
        grid: { color: "#f3f4f6" },
      },
    },
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="font-bold mb-2">Stats</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Stats;