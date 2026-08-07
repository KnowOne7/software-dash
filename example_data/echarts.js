<!-- 1) Planned vs Earned Days (Points) by Project (clustered bars) -->
html


<div id="evm-1" style="width: 100%; height: 420px;"></div>

<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
<script>
  const projects = ["P1","P2","P3","P4","P5","P6","P7"];

  const plannedDays = [60,45,30,75,50,40,65];
  const earnedDays  = [39,38.25,16.5,67.5,20,30,39];

  const chart1 = echarts.init(document.getElementById('evm-1'));

  const option1 = {
    title: { text: 'EVM in Days (Points): Planned vs Earned' },
    tooltip: {
      trigger: 'axis',
      valueFormatter: (v) => `${v} days`
    },
    legend: { data: ['PlannedDays', 'EarnedDays'] },
    grid: { left: 50, right: 20, top: 60, bottom: 70 },
    xAxis: {
      type: 'category',
      data: projects,
      axisLabel: { interval: 0 }
    },
    yAxis: {
      type: 'value',
      name: 'Days (Points)'
    },
    series: [
      {
        name: 'PlannedDays',
        type: 'bar',
        data: plannedDays
      },
      {
        name: 'EarnedDays',
        type: 'bar',
        data: earnedDays
      }
    ]
  };

  chart1.setOption(option1);
  window.addEventListener('resize', () => chart1.resize());
</script>

<!-- 2) Schedule Variance in Days (SV = Earned − Planned)
This shows ahead/behind:

SV > 0 = earned more days than planned (ahead)
SV < 0 = earned fewer days (behind) -->

html


<div id="evm-2" style="width: 100%; height: 420px;"></div>

<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
<script>
  const projects = ["P1","P2","P3","P4","P5","P6","P7"];

  const plannedDays = [60,45,30,75,50,40,65];
  const earnedDays  = [39,38.25,16.5,67.5,20,30,39];

  const svDays = earnedDays.map((e, i) => +(e - plannedDays[i]).toFixed(2));

  const chart2 = echarts.init(document.getElementById('evm-2'));

  const option2 = {
    title: { text: 'Schedule Variance (SV_days = Earned − Planned)' },
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const p = params[0];
        const v = p.value;
        const status = v >= 0 ? 'Ahead' : 'Behind';
        return `${p.axisValue}<br/>SV: ${v} days (${status})`;
      }
    },
    grid: { left: 50, right: 20, top: 60, bottom: 70 },
    xAxis: {
      type: 'category',
      data: projects
    },
    yAxis: {
      type: 'value',
      name: 'Days (Points)'
    },
    series: [
      {
        name: 'SV_days',
        type: 'bar',
        data: svDays,
        itemStyle: {
          color: function(params) {
            return params.value >= 0 ? '#2E7D32' : '#C62828'; // green ahead, red behind
          }
        }
      }
    ]
  };

  chart2.setOption(option2);
  window.addEventListener('resize', () => chart2.resize());
</script>


<!-- Optional (recommended): show zero line for SV
If you want a clear “on schedule” reference, add this under yAxis or as a graphic line. In many cases the easiest is adding markLine: -->
js


markLine: {
  symbol: 'none',
  lineStyle: { color: '#666' },
  label: { formatter: 'On schedule (0)' },
  data: [{ yAxis: 0 }]
}

<!-- and include it in the SV series: -->
 js


series: [{ ..., markLine: { ... } }]