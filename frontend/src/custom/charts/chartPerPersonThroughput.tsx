import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { Row } from "./parseCsv";
import { num } from "./parseCsv";

type Props = {
  sprintIds: string[];
  per_person: Row[];
};

export default function ChartPerPersonThroughput({ sprintIds, per_person }: Props) {
  const option = useMemo(() => {
    if (!sprintIds.length) return { title: { text: "8) Per-Person Throughput" }, series: [] };

    const lastSprint = sprintIds[sprintIds.length - 1];
    const subset = per_person.filter((r) => r.sprint_id === lastSprint);

    const people = Array.from(new Set(subset.map((r) => r.person))).filter(Boolean);

    const completed = people.map((p) => num(subset.find((r) => r.person === p)?.completed_issues ?? 0));
    const points = people.map((p) => num(subset.find((r) => r.person === p)?.story_points_completed ?? 0));

    return {
      title: { text: `8) Per-Person Throughput (latest sprint: ${lastSprint})`, left: 10 },
      tooltip: { trigger: "axis" },
      legend: { top: 30 },
      grid: { left: 60, right: 20, top: 70, bottom: 50 },
      xAxis: { type: "category", data: people },
      yAxis: { type: "value", name: "completed issues" },
      series: [
        { name: "Completed Issues", type: "bar", data: completed },
        { name: "Story Points Completed (line)", type: "line", data: points, yAxisIndex: 0 },
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