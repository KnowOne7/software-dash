import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[];
  burn_proxy: Row[];
  // assumes burn_proxy has: sprint_id, day_label, actual_cumulative_points, ideal_burn_points
};

export default function ChartBurnProxy({ sprintIds, burn_proxy }: Props) {
  const option = useMemo(() => {
    if (!burn_proxy.length) {
      return { title: { text: "2) Burn Proxy (no data)" }, xAxis: { data: [] }, series: [] };
    }

    const anchorSprint = sprintIds[sprintIds.length - 1];
    const anchor = burn_proxy
      .filter((r) => r.sprint_id === anchorSprint)
      .sort((a, b) => num(a.day_of_sprint) - num(b.day_of_sprint));

    const x = anchor.map((r) => r.day_label);

    const series: any[] = sprintIds.map((sid) => {
      const subset = burn_proxy
        .filter((r) => r.sprint_id === sid)
        .sort((a, b) => num(a.day_of_sprint) - num(b.day_of_sprint));
      return {
        name: `Actual (${sid})`,
        type: "line",
        data: subset.map((r) => num(r.actual_cumulative_points ?? 0)),
        showSymbol: false,
      };
    });

    if (anchorSprint) {
      series.push({
        name: `Ideal (${anchorSprint})`,
        type: "line",
        data: burn_proxy
          .filter((r) => r.sprint_id === anchorSprint)
          .sort((a, b) => num(a.day_of_sprint) - num(b.day_of_sprint))
          .map((r) => num(r.ideal_burn_points ?? 0)),
        showSymbol: false,
        lineStyle: { type: "dashed" },
      });
    }

    return {
      title: { text: "2) Plan/Burn Proxy Over Time (cumulative)", left: 10 },
      tooltip: { trigger: "axis" },
      legend: { top: 30 },
      grid: { left: 45, right: 20, top: 70, bottom: 45 },
      xAxis: { type: "category", data: x, axisLabel: { interval: 1 } },
      yAxis: { type: "value", name: "cumulative points ~ days" },
      series,
    };
  }, [sprintIds, burn_proxy]);

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