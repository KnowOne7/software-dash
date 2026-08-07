import { useMemo, type FC } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';
import { parseCsv } from './parseCsv';
import evmCsvData from '../../imported_data/evm.csv?raw';

type EvmPoint = {
  project: string;
  plannedDays: number;
  earnedDays: number;
  actualCostDays: number;
};

const normalizeHeader = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '');

const getCell = (row: Record<string, string>, candidates: string[]) => {
  for (const candidate of candidates) {
    const key = Object.keys(row).find(
      (header) => normalizeHeader(header) === normalizeHeader(candidate)
    );
    if (key) return row[key];
  }
  return '';
};

const parseCsvData = (csvText: string): EvmPoint[] => {
  const { rows } = parseCsv(csvText);

  return rows.map((row) => ({
    project:
      getCell(row, ['project', 'name', 'projectname', 'project_name']) || 'Project',
    plannedDays: Number(
      getCell(row, ['planned_days', 'planneddays', 'planned', 'planned_days_used']) || 0
    ),
    earnedDays: Number(
      getCell(row, ['earned_days', 'earneddays', 'earned']) || 0
    ),
    actualCostDays: Number(
      getCell(row, ['actual_cost_days', 'actualcostdays', 'actual_cost', 'actualcost']) || 0
    ),
  }));
};

const EvmStack: FC = () => {
  const data = useMemo(() => parseCsvData(evmCsvData), []);

  const projects = data.map((item) => item.project);
  const planned = data.map((item) => item.plannedDays);
  const earned = data.map((item) => item.earnedDays);
  const actual = data.map((item) => item.actualCostDays);

  const totals = planned.map((_, index) => {
    const total = planned[index] + earned[index] + actual[index];
    return total > 0 ? total : 1;
  });

  const option: EChartsOption = {
    legend: {
      selectedMode: false,
      top: 0,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    yAxis: {
      type: 'value',
      name: 'Share of total',
    },
    xAxis: {
      type: 'category',
      data: projects,
      name: 'Project',
    },
    series: [
      {
        name: 'Planned',
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        label: {
          show: true,
          formatter: (params: any) => `${Math.round(params.value * 1000) / 10}%`,
        },
        data: planned.map((value, index) => value / totals[index]),
      },
      {
        name: 'Earned',
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        label: {
          show: true,
          formatter: (params: any) => `${Math.round(params.value * 1000) / 10}%`,
        },
        data: earned.map((value, index) => value / totals[index]),
      },
      {
        name: 'Actual Cost',
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        label: {
          show: true,
          formatter: (params: any) => `${Math.round(params.value * 1000) / 10}%`,
        },
        data: actual.map((value, index) => value / totals[index]),
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
