import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[];
  cycle_time_bins: Row[];
};

export default function ChartCycleTimeBins({ sprintIds, cycle_time_bins }: Props) {
  const option = useMemo(() => {
    if (!sprintIds.length) {
      return { title: { text: "7) Cycle Time Distribution (no sprint ids)" }, xAxis: { data: [] }, series: [] };
    }

    const lastSprint = sprintIds[sprintIds.length - 1];
    const subset = cycle_time_bins
      .filter((r) => r.sprint_id === lastSprint)
      .map((r) => ({ ...r }))
      .filter(Boolean);

    const binOrder = ["0-2", "3-5", "6-8", "9-12", "13+"];

    const bins = binOrder.filter((b) => subset.some((r) => r.cycle_bin_days === b));
    const counts = bins.map((b) => num(subset.find((r) => r.cycle_bin_days === b)?.count_completed ?? 0));

    return {
      title: { text: `7) Cycle Time Distribution (latest sprint: ${lastSprint})`, left: 10 },
      tooltip: { trigger: "axis" },
      grid: { left: 60, right: 20, top: 70, bottom: 45 },
      xAxis: { type: "value", name: "count completed" },
      yAxis: { type: "category", data: bins, name: "cycle bin (days)" },
      series: [{ name: "Completed", type: "bar", data: counts, barWidth: 18 }],
    };
  }, [sprintIds, cycle_time_bins]);

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