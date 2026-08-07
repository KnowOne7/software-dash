```vega-lite
{
  "\$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"values": [
    {"Project":"P1","CPI":0.9231,"SPI":1.0667},
    {"Project":"P2","CPI":1.0508,"SPI":1.0333},
    {"Project":"P3","CPI":0.9459,"SPI":0.9722},
    {"Project":"P4","CPI":1.0227,"SPI":0.9783},
    {"Project":"P5","CPI":0.9111,"SPI":0.9762},
    {"Project":"P6","CPI":1.0405,"SPI":1.0132},
    {"Project":"P7","CPI":0.9180,"SPI":1.0566}
  ]},
  "title": "EVM Indices by Project (CPI vs SPI)",
  "width": 500,
  "height": 350,
  "mark": {"type":"point","filled":true,"size":110},
  "encoding": {
    "x": {
      "field": "CPI",
      "type": "quantitative",
      "title": "CPI (EV/AC)",
      "scale": {"domain": [0.85, 1.10]}
    },
    "y": {
      "field": "SPI",
      "type": "quantitative",
      "title": "SPI (EV/PV)",
      "scale": {"domain": [0.90, 1.10]}
    },
    "color": {
      "field": "Project",
      "type": "nominal",
      "legend": {"title":"Project"}
    },
    "tooltip": [
      {"field":"Project","type":"nominal","title":"Project"},
      {"field":"CPI","type":"quantitative","title":"CPI"},
      {"field":"SPI","type":"quantitative","title":"SPI"}
    ]
  },
  "layer": [
    {
      "mark": {"type":"rule","color":"#666"},
      "encoding": {"x": {"value": 1.0}}
    },
    {
      "mark": {"type":"rule","color":"#666"},
      "encoding": {"y": {"value": 1.0}}
    },
    {
      "transform": [],
      "mark": {"type":"point","filled":true,"size":110},
      "encoding": {
        "x": {"field":"CPI","type":"quantitative"},
        "y": {"field":"SPI","type":"quantitative"},
        "color": {"field":"Project","type":"nominal"},
        "tooltip": [
          {"field":"Project","type":"nominal"},
          {"field":"CPI","type":"quantitative"},
          {"field":"SPI","type":"quantitative"}
        ]
      }
    }
  ]
}



  <!-- ## 2. Preview the Markdown in VS Code
- **Windows/Linux**: Press `Ctrl + Shift + V`
- **Mac**: Press `Cmd + Shift + V`
- Or click **View → Preview** from the menu.
- For **side-by-side editing**, press:
  - `Ctrl + K V` (Windows/Linux)
  - `Cmd + K V` (Mac) -->##