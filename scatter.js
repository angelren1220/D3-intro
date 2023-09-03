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


// scales
const xScale = d3.scaleLinear()
  .domain([0, d3.max(scatterDataset, (d) => d[0])])
  .range([padding, sw - padding]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(scatterDataset, (d) => d[1])])
  .range([sh - padding, padding]);

// axis
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// plot area
const scatterSvg = d3.select("#scatterContainer")
  .append("svg")
  .attr("width", sw)
  .attr("height", sh);

// plot axis with scales
scatterSvg.append("g")
  .attr("transform", "translate(0," + (sh - padding) + ")")
  .call(xAxis);
scatterSvg.append("g")
  .attr("transform", "translate(" + padding + "," + 0 + ")")
  .call(yAxis);

// plot data points
scatterSvg.selectAll("circle")
  .data(scatterDataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", 5);

// plot data labels
scatterSvg.selectAll(".scatterLabel")
  .data(scatterDataset)
  .enter()
  .append("text")
  .attr("class", "scatterLabel")
  .text((d) => (d[0] + ", " + d[1]))
  .attr("x", (d) => xScale(d[0] + 10))
  .attr("y", (d) => yScale(d[1]));