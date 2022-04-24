import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ values, chartLabels, variant }) {
  console.log(chartLabels);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          variant === "average"
            ? "Average Price by Brand"
            : "Products Under 40 EUR",
      },
    },
  };

  const labels = [...chartLabels];

  const data = {
    labels,
    datasets: [
      {
        label: variant === "average" ? "Average Price" : "Products",
        data: [...values],
        backgroundColor:
          variant === "average"
            ? "rgba(25, 158, 152, 0.6)"
            : "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;
