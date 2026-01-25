// LH Note: 
// 
// https://observablehq.com/@cesandoval/observable-vs-regular-flavor-javascript

// Go back to the mbostock source
// https://github.com/d3/d3-sankey

// Then add the interactivity and popups here:
// https://www.npmjs.com/package/skd3


// https://observablehq.com/@dralla666/d3-sankey-diagram@464
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# D3 Sankey Diagram

[Sankey diagrams](https://github.com/d3/d3-sankey) visualize the magnitude of flow between nodes in a network.`
)});
  main.variable(observer("viewof edgeColor")).define("viewof edgeColor", ["html"], function(html){return(
html`<select>
  <option value=input>Color by input
  <option value=output>Color by output
  <option value=path selected>Color by input-output
  <option value=grey
</select>`
)});
  main.variable(observer("edgeColor")).define("edgeColor", ["Generators", "viewof edgeColor"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3","DOM","width","height","sankey","data1","format","edgeColor","color"], function(d3,DOM,width,height,sankey,data1,format,edgeColor,color)
{
  const svg = d3.select(DOM.svg(width, height))
      .style("width", "100%")
      .style("height", "auto");

  const {nodes, links} = sankey(data1);

  nodes.forEach(function(node) {
    if(node.xAnchor) { console.log("node:", node) }
    node.y = (node.yAnchor) ? parseInt(node.yAnchor) : node.y;
    node.x = (node.xAnchor) ? parseInt(node.xAnchor) : node.x;
  });
  
//  var {nodes, links} = sankey(data2);

  
  svg.append("g")
    //.attr("stroke", "#000")
    .selectAll("rect") 
    .data(nodes)
    .enter().append("rect") // Resides behind text.
      .attr("x", d => d.x0 + 10)
      .attr("y", d => d.y0)
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0 - 20)
      //.attr("fill", d => color(d.name))
      .attr("fill", "gray")
  
    .append("title")
      .text(d => `${d.name}\n${format(d.value)}`);
  
  const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.5)
    .selectAll("g")
    .data(links)
    .enter().append("g")
      .style("mix-blend-mode", "multiply");

  if (edgeColor === "path") {
    const gradient = link.append("linearGradient")
        .attr("id", d => (d.uid = DOM.uid("link")).id)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", d => d.source.x1)
        .attr("x2", d => d.target.x0);

    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", d => color(d.source.name));

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", d => color(d.target.name));
  }

  link.append("path")
//      .sort(function(a, b) { return b.dy - a.dy; })
      .attr("d", d3.sankeyLinkHorizontal())
  
      .attr("stroke", d => edgeColor === "path" ? d.uid 
          : edgeColor === "input" ? color(d.source.name) 
          : edgeColor === "grey" ? d3.color("lightgray")
            
          : color(d.target.name))
      .attr("stroke-width", d => Math.max(1, d.width));

  link.append("title")
      .text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)}`);

  svg.append("g")
      .style("font", "14px sans-serif")
    .selectAll("text")
    .data(nodes)
    .enter().append("text")
      .attr("x", d => d.x0 + 16)
      .attr("y", d => d.y0 + 10)
      .attr("fill", "white")
      .attr("dy", "0.35em")
      .attr("text-anchor", "start")
      .text(d => d.name);
/*      .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
      .attr("y", d => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
      .text(d => d.name);
*/      

  return svg.node();
}
);
  main.variable(observer("sankey")).define("sankey", ["d3","width","height"], function(d3,width,height)
{
  let sankey = d3.sankey()
      .nodeWidth(100)
      .nodePadding(70)
      .nodeAlign(d3.sankeyJustify) // is default?
      .iterations(50)
      .extent([[1, 1], [width - 1, height - 5]]);
  
  return ({nodes, links}) => sankey({
    nodes: nodes.map(d => Object.assign({}, d)),
    links: links.map(d => Object.assign({}, d))
  });
}
);
  main.variable(observer("format")).define("format", ["d3"], function(d3)
{
  const f = d3.format(",.0f");
  return d => `${f(d)} TWh`;
}
);
  main.variable(observer("color0")).define("color0", ["d3"], function(d3)
{
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  return name => color(name.replace(/ .*/, ""));
}
);
  main.variable(observer("color")).define("color", ["d3"], function(d3){return(
d3.scaleOrdinal(d3.schemeBlues[9])
)});
  main.variable(observer("data0")).define("data0", ["d3"], function(d3){return(
d3.json("https://gist.githubusercontent.com/mbostock/ca9a0bb7ba204d12974bca90acc507c0/raw/398136b7db83d7d7fd89181b080924eb76041692/energy.json")
)});
  main.variable(observer("data1")).define("data1", function(){return(
{"nodes":[{"name":"Paper<br>Production"},{"name":"Biogas"},{"name":"Output1"},{"name":"Output4"},{"name":"Output2"},{"name":"Gas"},{"name":"Nano\nWood"},{"name":"Output3"}],
"links":[{"source":0,"target":1,"value":42},{"source":1,"target":2,"value":10},{"source":6,"target":3,"value":26.862},{"source":1,"target":4,"value":100},{"source":5,"target":7,"value":62},{"source":6,"target":7,"value":80.322}]}
)});
  main.variable(observer("data2")).define("data2", function(){return(
{"nodes":[{"name":"Gas0"},{"name":"input1"},{"name":"input2"},//{"name":"TEST", "xAnchor": 1},
                   {"name":"Process3"},{"name":"Process4"},{"name":"Process5"},
                   {"name":"Output6"},{"name":"Output7"},{"name":"Output8"}],
          
          "links":[{"source":0,"target":3,"value":4},{"source":0,"target":4,"value":1},
                   {"source":1,"target":4,"value":3},{"source":2,"target":5,"value":2},
                   {"source":3,"target":6,"value":2},{"source":5,"target":7,"value":2},
                   {"source":3,"target":7,"value":2},{"source":4,"target":6,"value":2},
                   {"source":4,"target":7,"value":5},{"source":5,"target":8,"value":2}]}
)});
  main.variable(observer("width")).define("width", function(){return(
964
)});
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5", "d3-sankey@0.7")
)});
  return main;
}
