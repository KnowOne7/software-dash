import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[];
  throughput_by_type: Row[];
};

export default function ChartThroughputByCategory({ sprintIds, throughput_by_type }: Props) {
  const option = useMemo(() => {
    const categories = Array.from(new Set(throughput_by_type.map((r) => r.category))).sort();
    const series = categories.map((cat) => ({
      name: cat,
      type: "bar",
      stack: "total",
      data: sprintIds.map((sid) => {
        const row = throughput_by_type.find((r) => r.sprint_id === sid && r.category === cat);
        return num(row?.completed_count ?? 0);
      }),
    }));

    return {
      title: { text: "4) Throughput by Category (completed issues)", left: 10 },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: { top: 30 },
      grid: { left: 50, right: 20, top: 70, bottom: 40 },
      xAxis: { type: "category", data: sprintIds, name: "Sprint" },
      yAxis: { type: "value", name: "count" },
      series,
    };
  }, [sprintIds, throughput_by_type]);

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