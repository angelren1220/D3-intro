const scatterDataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];


const sw = 500;
const sh = 500;

const scatterSvg = d3.select("#scatterContainer")
  .append("svg")
  .attr("width", sw)
  .attr("height", sh);

scatterSvg.selectAll("circle")
.data(scatterDataset)
.enter()
.append("circle")
.attr("cx", (d) => d[0])
.attr("cy", (d) => sh - d[1])
.attr("r", 5)