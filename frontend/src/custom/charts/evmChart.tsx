import { useMemo, type FC } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

type EvmChartProps = {
  csvData: string;
};

type EvmProject = {
  project: string;
  plannedDays: number;
  earnedDays: number;
  actualCostDays: number;
};

const parseCsvData = (csvText: string): EvmProject[] => {
  const rows = csvText
    .trim()
    .split(/\r?\n/)
    .map((row) => row.split(',').map((cell) => cell.trim()));

  if (rows.length < 2) return [];

  const [header, ...dataRows] = rows;
  const normalizedHeader = header.map((cell) => cell.toLowerCase().replace(/\s+/g, ''));

  const projectIndex = normalizedHeader.findIndex(
    (cell) => cell === 'project' || cell === 'name' || cell === 'projectname'
  );
  const plannedIndex = normalizedHeader.findIndex((cell) => cell.includes('planned'));
  const earnedIndex = normalizedHeader.findIndex((cell) => cell.includes('earned'));
  const actualIndex = normalizedHeader.findIndex(
    (cell) => cell.includes('actual') && cell.includes('cost')
  );

  return dataRows
    .filter((row) => row.some((cell) => cell.length > 0))
    .map((row) => ({
      project: row[projectIndex] || row[0] || 'Project',
      plannedDays: Number(row[plannedIndex] || 0),
      earnedDays: Number(row[earnedIndex] || 0),
      actualCostDays: Number(row[actualIndex] || 0),
    }));
};

const EvmChart: FC<EvmChartProps> = ({ csvData }) => {
  const evmData = useMemo(() => parseCsvData(csvData), [csvData]);

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
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
        itemStyle: { color: '#4f46e5' },
      },
      {
        name: 'Earned Days',
        type: 'bar',
        data: evmData.map((item) => item.earnedDays),
        itemStyle: { color: '#14b8a6' },
      },
      {
        name: 'Actual Cost Days',
        type: 'bar',
        data: evmData.map((item) => item.actualCostDays),
        itemStyle: { color: '#f59e0b' },
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



export default EvmChart;