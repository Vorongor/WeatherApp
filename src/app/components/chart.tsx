import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export interface LineChartProps {
  labels: string[];
  values: number[];
  color: string;
}

const LineChart: React.FC<LineChartProps> = (data: LineChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current && data) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.labels,
            datasets: [
              {
                label: "— Temperature, C°",
                data: data.values,
                borderColor: `${data.color}`,
                tension: 0.1,
              },
            ],
          },
        });
      }
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
