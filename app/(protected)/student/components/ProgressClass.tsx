"use client";
import { blue500 } from "@/lib/chart-color";
import { lineGradient } from "@/lib/chart-gradient";
import "@/lib/charts";
import { useRef } from "react";
import { Line } from "react-chartjs-2";

export default function ProgressClass() {
  const chartRef = useRef<any>(null);

  const data = {
    labels: ["08h", "10h", "12h", "14h", "16h"],
    datasets: [
      {
        data: [55, 65, 50, 40, 45],
        borderColor: blue500,
        borderWidth: 2,
        // Points invisibles mais interactifs :
        pointRadius: 3,
        pointHoverRadius: 10,
        pointBackgroundColor: "white",
        pointBorderColor: blue500,
        fill: true,
        tension: 0.35,
        backgroundColor: (ctx: any) => {
          const chart = ctx.chart;
          const area = chart.chartArea;
          if (!area) return blue500;
          return lineGradient(ctx.chart.ctx, area);
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#FFF",
        titleColor: () => blue500,
        bodyColor: () => blue500,
        borderColor: blue500,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        padding: 12,
        callbacks: {
          title: () => "", // No title
          label: (context) => `${context.parsed.y}%`,
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        display: true,
        grid: {
          display: true,
          drawBorder: true,
          color: "#f5f5f5",
          borderDash: [9, 9],
        },
        min: 0,
        max: 100,
        ticks: {
          display: true,
          stepSize: 20,
          family: "var(--font-made)",
        },
      },
      x: {
        display: true,
        grid: { display: false, drawBorder: false },
        border: {
          display: false, // 👈 Ajoute ceci pour être sûr que la ligne disparaisse !
        },
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
}
