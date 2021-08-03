height = 400
width = 300
gap = 20

n = 20
main = d3.range(n)
data = main.map(function(i) {
    x = Math.random()*(width-10)+5;
    y = x*0.3 + Math.random()*height/2;
    z = x*0.4 + Math.random()*height/2;
    return {x:x, y:y, z:z};
})

svg = d3.select("body")
    .append("svg")
    .attr("id", "mainsvg")
    .attr("height", height)
    .attr("width", width*2 + gap)

svg1 = d3.select("svg#mainsvg")
    .append("svg")
    .attr("id", "svg1")
    .attr("height", height)
    .attr("width", width)

svg2 = d3.select("svg#mainsvg")
    .append("g")
      .attr("transform", "translate(" + (width+gap) + ")")
      .append("svg")
      .attr("id", "svg2")
      .attr("height", height)
      .attr("width", width)

svg1.append("rect")
    .attr("height", height)
    .attr("width", width)
    .attr("stroke", "purple")
    .attr("fill", "#FFEBCD")
    .attr("stroke-width", 2)
svg2.append("rect")
    .attr("height", height)
    .attr("width", width)
    .attr("stroke", "purple")
    .attr("fill", "#FFEBCD")
    .attr("stroke-width", 2)

svg1.selectAll("empty")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return height-d.y+10; })
    .attr("class", function(d,i) { return "pt" + i; })
    .attr("r", 5)
    .attr("stroke", "purple")
    .attr("fill", "steelblue")
    .on("mouseover", function(d, i) {
        console.log(i)
        d3.selectAll("circle.pt" + i)
          .attr("fill", "Orchid")
          .attr("r", 10)
    })
    .on("mouseout", function(d, i) {
        d3.selectAll("circle.pt" + i)
          .attr("fill", "steelblue")
          .attr("r", 5)
    })

svg2.selectAll("empty")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return height-d.z+10; })
    .attr("class", function(d,i) { return "pt" + i; })
    .attr("r", 5)
    .attr("stroke", "black")
    .attr("fill", "slateblue")
    .on("mouseover", function(d, i) {
        console.log(i)
        d3.selectAll("circle.pt" + i)
          .attr("fill", "Orchid")
          .attr("r", 10)
    })
    .on("mouseout", function(d, i) {
        d3.selectAll("circle.pt" + i)
          .attr("fill", "slateblue")
          .attr("r", 5)
    })
