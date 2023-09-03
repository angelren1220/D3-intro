const scatterDataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123]
];


const sw = 500;
const sh = 500;
const padding = 60;

const xScale = d3.scaleLinear()
  .domain([0, d3.max(scatterDataset, (d) => d[0])])
  .range([padding, sw - padding]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(scatterDataset, (d) => d[1])])
  .range([sh - padding, padding]);

const scatterSvg = d3.select("#scatterContainer")
  .append("svg")
  .attr("width", sw)
  .attr("height", sh);

scatterSvg.selectAll("circle")
  .data(scatterDataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", 5);

scatterSvg.selectAll(".scatterLabel")
  .data(scatterDataset)
  .enter()
  .append("text")
  .attr("class", "scatterLabel")
  .text((d) => (d[0] + ", " + d[1]))
  .attr("x", (d, i) => xScale(d[0] + 10))
  .attr("y", (d, i) => yScale(d[1]));