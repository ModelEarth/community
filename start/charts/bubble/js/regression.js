console.log('test')
var parentId = "#graph-wrapper";
var animDuration = 1000;
var margin = {top: 20, right: 50, bottom: 50, left: 150};

var width = $(parentId).width() - margin.left - margin.right,
    height = $(parentId).height()  - margin.top - margin.bottom;

var xScale = d3.scale.linear()
    .range([0,width]);

var yScale = d3.scale.linear()
    .range([height, 0]);

var line = d3.svg.line();

var xAxis = d3.svg.axis()
    .scale(xScale)
    .tickSize(-height)
    .tickPadding(8)
    .tickFormat(d3.round)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .tickSize(-width)
    .tickPadding(8)
    .orient("left");

var svg = d3.select(parentId).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("id","svg-parent")
    .append("g")
      .attr("id","graph-plane")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (height) + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("  +0+ ",0)")
    .call(yAxis);

svg.append("path")
    .attr("class","trendline")
    .attr("stroke-width", 1)
    .style("stroke","steelblue")
    .style("fill","none");

d3.selectAll(".graph-picklist").on("change",function(){
  updateChart(d3.select("#graph-picklist-x")[0][0].value,
              d3.select("#graph-picklist-y")[0][0].value);
});

// For rollover popup
var div = d3.select(parentId).append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);


function getDimensions(x,y){
  var returnX=[];
  var returnY=[];
  var returnPairs = [];
  allData.forEach(function(d){
    var pair = {x: d[x],y: d[y],year: d["year"],city: d["city"], wind_mph: d["wind_mph"], storm: d["storm"], date: d["cityimpactday"], step_type: d["step_type"], norm_step_count: d["norm_step_count"], impact_step_count: d["impact_step_count"], impact_displacement_total_km: d["impact_displacement_total_km"], norm_displacement_total_km: d["norm_displacement_total_km"], change_displacement_total_km: d["change_displacement_total_km"], norm_count_total: d["norm_count_total"], impact_count_total: d["impact_count_total"] }; // CUSTOM, appended year for chart, the rest for popup
    returnPairs.push(pair);
    returnX.push(d[x]);
    returnY.push(d[y]);
  });
  return {x:returnX,y:returnY,pairs:returnPairs};
}

function updateTitle(x,y){
  //var title = d3.select("#title").text("Linear Regression:");
  //var subtitle = d3.select("#subtitle").text(x+" vs "+y);
  var title = d3.select("#title").html(x+" <b>VS</b> "+y);
}

// returns slope, intercept and r-square of the line
//Pulled from http://bl.ocks.org/benvandyke/8459843
function leastSquares(xSeries, ySeries) {
  var reduceSumFunc = function(prev, cur) { return prev + cur; };
  
  var xBar = xSeries.reduce(reduceSumFunc) * 1.0 / xSeries.length;
  var yBar = ySeries.reduce(reduceSumFunc) * 1.0 / ySeries.length;

  var ssXX = xSeries.map(function(d) { return Math.pow(d - xBar, 2); })
    .reduce(reduceSumFunc);
  
  var ssYY = ySeries.map(function(d) { return Math.pow(d - yBar, 2); })
    .reduce(reduceSumFunc);
    
  var ssXY = xSeries.map(function(d, i) { return (d - xBar) * (ySeries[i] - yBar); })
    .reduce(reduceSumFunc);
    
  var slope = ssXY / ssXX;
  var intercept = yBar - (xBar * slope);
  var rSquare = Math.pow(ssXY, 2) / (ssXX * ssYY);
  
  return [slope, intercept, rSquare];
}
//http://snipplr.com/view/37687/random-number-float-generator/
function randomFloatBetween(minValue,maxValue,precision){
    if(typeof(precision) == 'undefined'){
        precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
}

//"draw" the line with many points respecting the calculated equation
function calculateLineData(leastSquares,xRange,iterations){
  var returnData = [];
  for(var i=0; i<iterations; i++){
    var randomX = randomFloatBetween(xRange[0],xRange[1]);
    returnData.push({
      xVal:randomX,
      yVal: (randomX*leastSquares[0])+leastSquares[1]
    });
  }
  return returnData;
}




var allData
$( document ).ready(function() {
  // iniattly toy if from perturbation-discrete-6-steps.csv
  d3.csv("data/toy.csv",function(data){
    
    console.log('loaded')
    data.forEach(function(d) {
        // Change strings to numbers
        d.year = +d.year;

        // Integers required for R calculation.
        d.change_displacement_percent = +d.change_displacement_percent; // x axis
        d.change_displacement_percent_abs = +d.change_displacement_percent_abs;
        d.change_count_percent = +d.change_count_percent;

        d.change_displacement_total_km = +d.change_displacement_total_km;
        d.change_displacement_total_degree = +d.change_displacement_total_degree;
        d.change_displacement_total_degree_abs = +d.change_displacement_total_degree_abs;


        d.change_displacement_km = +d.change_displacement_km;
        d.change_displacement_km_abs = +d.change_displacement_km_abs;
        d.change_displacement_degrees = +d.change_displacement_degrees;
        d.change_displacement_degrees_abs = +d.change_displacement_degrees_abs;
        d.change_step_displacement_percent = +d.change_step_displacement_percent;
        d.change_step_displacement_percent_abs = +d.change_step_displacement_percent_abs;
        d.change_step_avg_km_abs = +d.change_step_avg_km_abs;
        d.change_step_avg_km = +d.change_step_avg_km;
        d.change_step_avg_degrees_abs = +d.change_step_avg_degrees_abs; // x axis
        d.change_step_avg_degrees = +d.change_step_avg_degrees; // x axis
        d.change_step_count_percent = +d.change_step_count_percent;

        d.wind_mph = +d.wind_mph; // y axis
        d.wind_kmph = +d.wind_kmph; // y axis
        //d.y = +d.WinsNoms; // y axis
      });
    allData = data;
    //updateChart("Count","Rating");
    // 
    updateChart("wind_mph","change_displacement_percent","year");
  });
});


var ordinalDomain = ["30-400m", "400m-1km", "1-5km", "5-10km", "10-50km", "Over 50km"];
var ordinal = d3.scale.ordinal() // Becomes scaleOrdinal in v4
  .domain(ordinalDomain)
  .range(["blue","#7479BC","#BDE7AE","#ECF809","orange","magenta"]); // Not in use here, from wind/js/regression.js

function updateChart(x,y,year){

  updateTitle(x,y);
  //Fetch data
  var records = getDimensions(x,y);

  //Reset scale
  yScale.domain(d3.extent(records.y));
  xScale.domain(d3.extent(records.x));

  //re-assign data (or assign new data)
  var selectedCircles = d3.select("#graph-plane")
                          .selectAll(".circles")
                          .data(records.pairs)

  //give a transition on the existing elements
  selectedCircles
    .transition().duration(animDuration)
    .attr("transform",function(d){return "translate("+xScale(d.x)+","+yScale(d.y)+")";})
    

    .style("fill", function (d) { 

            if (d.year > 2014) {
              return "steelblue";
            } else {
              return "red";
            }

          })

  //Append any new elements and transition them as well
  selectedCircles.enter()
                .append("circle")

                    .on("mouseover", function(d) {
                       div.transition()
                         .duration(200)
                         .style("opacity", .9);
                            // "<br/>Step distance: " + ordinalDomain[d.step_type-1] + "<br/>Norm count: " + d.norm_step_count + "<br/>Impact count: " + d.impact_step_count + 
                            //div.html("<b style='font-size:1.3em'>" + d.city + "</b><br/>Storm: " + d.storm +  " (" + d.wind_mph + " mph)<br/>Impact date: " + d.date + "<br/>Normal Travel: " + Math.round(d.norm_displacement_total_km) + " km<br/>Impact Travel: " + Math.round(d.impact_displacement_total_km) + " km<br/>Change: " + Math.round(d.change_displacement_total_km) + " km<br/>Normal Tweet Count: " + d.norm_count_total + "<br/>Impact Tweet Count: " + d.impact_count_total)
                            // + "<br/>Total change: " + d.change_displacement_degrees
                            
                            div.html("<b style='font-size:1.3em'>" + d.city + "</b><br/>Storm: " + d.storm +  " (" + d.wind_mph + " mph)<br/>Impact date: " + d.date + "<br/>Normal Travel: " + Math.round(d.norm_displacement_total_km) + " km<br/>Impact Travel: " + Math.round(d.impact_displacement_total_km) + " km<br/>Change: " + Math.round(d.change_displacement_total_km) + " km<br/>Normal Tweet Count: " + d.norm_count_total + "<br/>Impact Tweet Count: " + d.impact_count_total + "<br/>Step Norm Count: " + d.norm_step_count + "<br/>Step Impact Count: " + d.impact_step_count + "<br/>Step distance: " + ordinalDomain[d.step_type-1] )
                            

                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY - 28) + "px");
                         
                       })
                     .on("mouseout", function(d) {
                        
                       div.transition()
                         .duration(500)
                         .style("opacity", 0);
                        
                    })

                    .attr("class","circles")
                    .attr("r",5)
                    .style("fill", function (d) {
                      if (d.year > 2014) {
                        return "steelblue";
                      } else {
                        return "red";
                      }

                    })
                    .transition().duration(animDuration)
                    .attr("transform",function(d){return "translate("+xScale(d.x)+","+yScale(d.y)+")";})



                ;

  //Remove any dom elements which are no longer data bound
  selectedCircles.exit().remove();
                  
  //Update Axes
  d3.select(parentId).select(".x.axis").transition().duration(animDuration).call(xAxis);
  d3.select(parentId).select(".y.axis").transition().duration(animDuration).call(yAxis);

  //Update Regression
  line.x(function(d) { return xScale(d.xVal); })
      .y(function(d) { return yScale(d.yVal); });

  var leastSquaresCoeff = leastSquares(records.x, records.y);
  var lineData = calculateLineData(leastSquaresCoeff,d3.extent(records.x),200);

  var trendline = d3.selectAll(".trendline")
                        .transition().delay(1000).duration(500)
                        .attr("d",line(lineData));

                        //was toFixed(2) for all 6:
  d3.select("#equation").html(function(){
    return (leastSquaresCoeff[1]<0)?
      "y="+leastSquaresCoeff[0].toFixed(4)+"x"+
          leastSquaresCoeff[1].toFixed(4)+" rSquared: "+
          leastSquaresCoeff[2].toFixed(4)+"<br><span style='color:red'>Red indicates storms prior to 2015</span>" 
          :
      "y="+leastSquaresCoeff[0].toFixed(4)+"x"+"+"+
          leastSquaresCoeff[1].toFixed(4)+" rSquared: "+
          leastSquaresCoeff[2].toFixed(4)+"<br><span style='color:red'>Red indicates storms prior to 2015</span>";
  });
}
