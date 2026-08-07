import { type FC } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

export type EvmPoint = {
  project: string;
  plannedDays: number;
  earnedDays: number;
  actualCostDays: number;
};

type Props = {
  data: EvmPoint[];
};

const EvmStack: FC<Props> = ({ data }) => {
  const projects = data.map((item) => item.project);
  const planned = data.map((item) => item.plannedDays);
  const earned = data.map((item) => item.earnedDays);
  const actual = data.map((item) => item.actualCostDays);

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    legend: {
      top: 0,
    },
    xAxis: {
      type: 'category',
      data: projects,
      name: 'Project',
    },
    yAxis: {
      type: 'value',
      name: 'Days',
    },
    series: [
      {
        name: 'Planned',
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        data: planned,
        itemStyle: { color: '#60a5fa' },
      },
      {
        name: 'Earned',
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        data: earned,
        itemStyle: { color: '#34d399' },
      },
      {
        name: 'Actual Cost',
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        data: actual,
        itemStyle: { color: '#f87171' },
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: 360 }}>
      <ReactECharts
        option={option}
        style={{ height: '100%', width: '100%' }}
        notMerge
        lazyUpdate
      />
    </div>
  );
};

export default EvmStack;