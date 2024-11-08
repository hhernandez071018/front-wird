import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

interface PokemonStatsChartProps {
  stats: Stat[];
}

const PokemonStatsChart = ({ stats }: PokemonStatsChartProps): JSX.Element => {
  const data = {
    labels: stats.map(
      (stat) => stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)
    ),
    datasets: [
      {
        label: "Base Stats",
        data: stats.map((stat) => stat.base_stat),
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default PokemonStatsChart;
