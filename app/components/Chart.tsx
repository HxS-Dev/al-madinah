'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  value: number;
  total: number;
  label: string;
}

interface ChartProps {
  data: ChartData;
  chartType: 'chart-1' | 'chart-2' | 'chart-3';
  size?: number;
}

export default function Chart({ data, chartType, size = 160 }: ChartProps) {
  const getChartColors = (type: string) => {
    switch (type) {
      case 'chart-1':
        return {
          backgroundColor: '#8379FE', 
        };
      case 'chart-2':
        return {
          backgroundColor: '#0DC2F8',
        };
      case 'chart-3':
        return {
          backgroundColor: '#FFDADC', 
        };
      default:
        return {
          backgroundColor: '#6B7280', 
        };
    }
  };

  const colors = getChartColors(chartType);
  const percentage = data.total > 0 ? (data.value / data.total) * 100 : 0;

  const chartData = {
    datasets: [
      {
        data: [data.value, data.total - data.value],
        backgroundColor: [colors.backgroundColor, '#F3F4F6'], 
        cutout: '65%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
} 