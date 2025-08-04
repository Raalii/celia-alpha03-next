"use client";
import { blue500, blue700 } from "@/lib/chart-color";
import "@/lib/charts";
import { Bar } from "react-chartjs-2";

export default function ProductivityBar() {
  const values = [1, 2, 3, 1.5, 0.5, 0.3, 1];
  const labels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: labels.map((_, i) => (i === 2 ? blue700 : blue500)),
        borderRadius: 6,
        barThickness: 30,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        plugins: { legend: { display: true } },
        scales: {
          y: {
            min: 0,
            max: 4,
            grid: {
              display: true,
              color: "#f5f5f5",
            },
          },
          x: {
            display: true,
            grid: { display: false },
            border: {
              display: false, // 👈 Ajoute ceci pour être sûr que la ligne disparaisse !
            },
          },
        },
      }}
    />
  );
}
