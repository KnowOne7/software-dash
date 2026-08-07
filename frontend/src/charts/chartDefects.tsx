import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[];
  sprint_summary: Row[];
};

export default function ChartDefects({ sprintIds, sprint_summary }: Props) {
  const option = useMemo(() => {
    const bySprint = sprintIds.map((id) => {
      const row = sprint_summary.find((r) => r.sprint_id === id);
      return {
        id,
        defects: num(row?.defects_in_sprint ?? 0),
        escape: num(row?.defect_escape_rate ?? 0),
      };
    });

    return {
      title: { text: "5) Defects in Sprint & Escape Rate", left: 10 },
      tooltip: { trigger: "axis" },
      legend: { top: 30 },
      grid: { left: 50, right: 20, top: 70, bottom: 40 },
      xAxis: { type: "category", data: bySprint.map((x) => x.id) },
      yAxis: [{ type: "value", name: "defects" }, { type: "value", name: "escape rate" }],
      series: [
        { name: "Defects in Sprint", type: "bar", data: bySprint.map((x) => x.defects), yAxisIndex: 0 },
        { name: "Defect Escape Rate", type: "line", data: bySprint.map((x) => x.escape), yAxisIndex: 1 },
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