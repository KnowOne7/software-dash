import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[];
  sprint_summary: Row[];
};

export default function ChartScopeImpact({ sprintIds, sprint_summary }: Props) {
  const option = useMemo(() => {
    const bySprint = sprintIds.map((id) => {
      const row = sprint_summary.find((r) => r.sprint_id === id);
      const sc = num(row?.scope_change_points ?? 0);
      return {
        id,
        scopeAdded: Math.max(0, sc),
        scopeRemoved: Math.max(0, -sc),
        carryover: num(row?.carryover_points ?? 0),
      };
    });

    return {
      title: { text: "3) Scope Change & Carryover Impact", left: 10 },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: { top: 30 },
      grid: { left: 50, right: 20, top: 70, bottom: 40 },
      xAxis: { type: "category", data: bySprint.map((x) => x.id) },
      yAxis: { type: "value", name: "points ~ days" },
      series: [
        { name: "Scope Added", type: "bar", data: bySprint.map((x) => x.scopeAdded) },
        { name: "Scope Removed", type: "bar", data: bySprint.map((x) => x.scopeRemoved) },
        { name: "Carryover", type: "bar", data: bySprint.map((x) => x.carryover) },
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