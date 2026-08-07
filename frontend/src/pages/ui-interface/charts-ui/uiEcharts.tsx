import { type FC } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

type ChartCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const ChartCard: FC<ChartCardProps> = ({ title, description, children }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <div className="mb-3">
      <h6 className="m-0 text-lg font-semibold">{title}</h6>
      <p className="m-0 text-sm text-gray-500">{description}</p>
    </div>
    {children}
  </div>
);

const chartStyle = {
  height: 280,
  width: '100%',
};

const lineOption: EChartsOption = {
  tooltip: { trigger: 'axis' },
  legend: { data: ['Sales', 'Target'] },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Sales',
      type: 'line',
      smooth: true,
      data: [120, 132, 101, 134, 90, 230],
      lineStyle: { color: '#4f46e5' },
      itemStyle: { color: '#4f46e5' },
    },
    {
      name: 'Target',
      type: 'line',
      smooth: true,
      data: [100, 120, 110, 125, 95, 200],
      lineStyle: { color: '#f59e0b' },
      itemStyle: { color: '#f59e0b' },
    },
  ],
};

const barOption: EChartsOption = {
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  yAxis: { type: 'value' },
  series: [
    {
      type: 'bar',
      data: [23, 45, 39, 50, 48, 62],
      itemStyle: { color: '#14b8a6' },
    },
  ],
};

const pieOption: EChartsOption = {
  tooltip: { trigger: 'item' },
  legend: {
    top: 'bottom',
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      data: [
        { value: 35, name: 'Design' },
        { value: 25, name: 'Development' },
        { value: 20, name: 'Marketing' },
        { value: 20, name: 'Support' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
  ],
};

const scatterOption: EChartsOption = {
  tooltip: {},
  xAxis: {},
  yAxis: {},
  series: [
    {
      type: 'scatter',
      symbolSize: 16,
      data: [
        [10, 8],
        [20, 12],
        [30, 14],
        [40, 20],
        [50, 25],
        [60, 30],
      ],
      itemStyle: { color: '#dc2626' },
    },
  ],
};

const radarOption: EChartsOption = {
  tooltip: {},
  radar: {
    indicator: [
      { name: 'Speed', max: 100 },
      { name: 'Quality', max: 100 },
      { name: 'UX', max: 100 },
      { name: 'Support', max: 100 },
      { name: 'Growth', max: 100 },
    ],
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [80, 70, 90, 60, 85],
          name: 'Score',
        },
      ],
    },
  ],
};

const gaugeOption: EChartsOption = {
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '70%'],
      radius: '90%',
      progress: {
        show: true,
        round: true,
        width: 12,
      },
      axisLine: {
        lineStyle: {
          width: 12,
          color: [
            [0.3, '#ef4444'],
            [0.7, '#f59e0b'],
            [1, '#10b981'],
          ],
        },
      },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      pointer: { show: true },
      detail: {
        valueAnimation: true,
        formatter: '{value}%',
      },
      data: [{ value: 78 }],
    },
  ],
};

const UiEcharts: FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h4 className="text-2xl font-semibold">Charts UI</h4>
        <p className="text-sm text-gray-500">
          A landing page showcasing common ECharts options with dummy data.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard title="Line Chart" description="Smooth trend over time">
          <ReactECharts option={lineOption} style={chartStyle} />
        </ChartCard>

        <ChartCard title="Bar Chart" description="Simple vertical comparison">
          <ReactECharts option={barOption} style={chartStyle} />
        </ChartCard>

        <ChartCard title="Pie Chart" description="Distribution by category">
          <ReactECharts option={pieOption} style={chartStyle} />
        </ChartCard>

        <ChartCard title="Scatter Plot" description="Point-based relationship">
          <ReactECharts option={scatterOption} style={chartStyle} />
        </ChartCard>

        <ChartCard title="Radar Chart" description="Multi-dimension comparison">
          <ReactECharts option={radarOption} style={chartStyle} />
        </ChartCard>

        <ChartCard title="Gauge Chart" description="Single KPI progress">
          <ReactECharts option={gaugeOption} style={chartStyle} />
        </ChartCard>
      </div>
    </div>
  );
};

export default UiEcharts;