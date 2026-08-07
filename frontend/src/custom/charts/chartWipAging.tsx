import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[];
  wip_aging: Row[];
};

export default function ChartWipAging({ sprintIds, wip_aging }: Props) {
  const option = useMemo(() => {
    const bucketOrder = ["0-3_days", "4-7_days", "8-14_days", "15+_days"];

    const bucketKey = (b: string) => {
      const s = (b ?? "").toLowerCase();
      if (s.includes("0-3")) return "0-3_days";
      if (s.includes("4-7")) return "4-7_days";
      if (s.includes("8-14")) return "8-14_days";
      if (s.includes("15+")) return "15+_days";
      return b;
    };

    const bucketsPresent = Array.from(new Set(wip_aging.map((r) => bucketKey(r.wip_bucket))));

    const displayName = (bk: string) =>
      bk.replace("_", " ").replace("days", "days");

    const series = bucketOrder
      .filter((bk) => bucketsPresent.includes(bk))
      .map((bk) => ({
        name: displayName(bk),
        type: "bar",
        stack: "wip",
        data: sprintIds.map((sid) => {
          const r = wip_aging.find((row) => row.sprint_id === sid && bucketKey(row.wip_bucket) === bk);
          return num(r?.count_issues ?? 0);
        }),
      }));

    return {
      title: { text: "6) WIP Aging Distribution (counts)", left: 10 },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: { top: 30 },
      grid: { left: 50, right: 20, top: 70, bottom: 40 },
      xAxis: { type: "category", data: sprintIds },
      yAxis: { type: "value", name: "issues in bucket" },
      series,
    };
  }, [sprintIds, wip_aging]);

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