import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[]; // the 4 sprint ids in desired order
  sprint_summary: Row[];
};

export default function ChartVelocity({ sprintIds, sprint_summary }: Props) {
  const option = useMemo(() => {
    const bySprint = sprintIds.map((id) => {
      const row = sprint_summary.find((r) => r.sprint_id === id);
      return {
        id,
        velocity: num(row?.velocity_points ?? 0),
        completed: num(row?.completed_points ?? 0),
        committed: num(row?.committed_points ?? 0),
      };
    });

    return {
      title: { text: "1) Velocity & Completed (points)", left: 10 },
      tooltip: { trigger: "axis" },
      legend: { top: 30 },
      grid: { left: 50, right: 20, top: 70, bottom: 40 },
      xAxis: { type: "category", data: bySprint.map((x) => x.id) },
      yAxis: { type: "value", name: "points ~ days" },
      series: [
        { name: "Completed", type: "bar", data: bySprint.map((x) => x.completed) },
        { name: "Committed", type: "bar", data: bySprint.map((x) => x.committed) },
        { name: "Velocity (basis)", type: "line", data: bySprint.map((x) => x.velocity) },
      ],
    };
  }, [sprintIds, sprint_summary]);

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