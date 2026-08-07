import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[];
  per_person: Row[];
};

export default function ChartWorkloadProxy({ sprintIds, per_person }: Props) {
  const option = useMemo(() => {
    if (!sprintIds.length) return { title: { text: "9) Workload Proxy by Person" }, series: [] };

    const lastSprint = sprintIds[sprintIds.length - 1];
    const subset = per_person.filter((r) => r.sprint_id === lastSprint);

    const people = Array.from(new Set(subset.map((r) => r.person))).filter(Boolean);

    const days = people.map((p) => num(subset.find((r) => r.person === p)?.estimated_work_days_used ?? 0));
    const points = people.map((p) => num(subset.find((r) => r.person === p)?.story_points_completed ?? 0));

    return {
      title: { text: `9) Workload Proxy by Person (latest sprint: ${lastSprint})`, left: 10 },
      tooltip: { trigger: "axis" },
      legend: { top: 30 },
      grid: { left: 60, right: 20, top: 70, bottom: 50 },
      xAxis: { type: "category", data: people },
      yAxis: { type: "value", name: "days / points" },
      series: [
        { name: "Estimated Work Days Used", type: "bar", data: days },
        { name: "Story Points Completed", type: "line", data: points },
      ],
    };
  }, [sprintIds, per_person]);

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