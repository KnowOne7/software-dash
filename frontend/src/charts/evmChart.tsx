import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

type EvmProject = {
  project: string;
  plannedDays: number;
  earnedDays: number;
  actualCostDays: number;
};

const evmData: EvmProject[] = [
  { project: 'P1', plannedDays: 60, earnedDays: 39, actualCostDays: 72 },
  { project: 'P2', plannedDays: 45, earnedDays: 38.25, actualCostDays: 50 },
  { project: 'P3', plannedDays: 30, earnedDays: 16.5, actualCostDays: 40 },
  { project: 'P4', plannedDays: 75, earnedDays: 67.5, actualCostDays: 78 },
  { project: 'P5', plannedDays: 50, earnedDays: 20, actualCostDays: 65 },
  { project: 'P6', plannedDays: 40, earnedDays: 30, actualCostDays: 48 },
  { project: 'P7', plannedDays: 65, earnedDays: 39, actualCostDays: 70 },
];

const option: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['Planned Days', 'Earned Days', 'Actual Cost Days'],
    top: 0,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: evmData.map((item) => item.project),
    axisLabel: {
      rotate: 0,
    },
  },
  yAxis: {
    type: 'value',
    name: 'Days',
  },
  series: [
    {
      name: 'Planned Days',
      type: 'bar',
      data: evmData.map((item) => item.plannedDays),
      itemStyle: {
        color: '#4f46e5',
      },
    },
    {
      name: 'Earned Days',
      type: 'bar',
      data: evmData.map((item) => item.earnedDays),
      itemStyle: {
        color: '#14b8a6',
      },
    },
    {
      name: 'Actual Cost Days',
      type: 'bar',
      data: evmData.map((item) => item.actualCostDays),
      itemStyle: {
        color: '#f59e0b',
      },
    },
  ],
};

const EvmChart = () => {
  return (
    <div style={{ width: '100%', height: 420 }}>
      <ReactECharts
        option={option}
        style={{ height: '100%', width: '100%' }}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

export default EvmChart;