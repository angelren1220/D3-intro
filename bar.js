const barDataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const bw = 500;
const bh = 150;

const barSvg = d3.select("#barContainer")
  .append("svg")
  .attr("width", bw)
  .attr("height", bh);

barSvg.selectAll("rect")
  .data(barDataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => bh - d * 3)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  .attr("fill", "navy")
  .attr("class", "bar")
  .append("title")
  .text((d) => (d));

  barSvg.selectAll("text")
  .data(barDataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => bh - d * 3 - 3)
  .text((d) => (d));