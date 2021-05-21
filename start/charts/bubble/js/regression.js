//getting the listof indicators and populating the x and y dropdown options
let dropdown = $('#graph-picklist-x');

dropdown.empty();

//dropdown.append('<option selected="true" disabled>Select Indicator</option>');
//dropdown.prop('selectedIndex', 1);

const url = './data/indicators.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.code).text(entry.name));
  })
});
//dropdown.value="ENRG";
//dropdown.prop('selectedIndex', 10);

let dropdown2 = $('#graph-picklist-y');

dropdown2.empty();

//dropdown2.append('<option selected="true" disabled>Select Indicator</option>');
//dropdown2.prop('selectedIndex', 1);


// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown2.append($('<option></option>').attr('value', entry.code).text(entry.name));
  })
});

let dropdown3 = $('#graph-picklist-z');

dropdown3.empty();

//dropdown2.append('<option selected="true" disabled>Select Indicator</option>');
//dropdown2.prop('selectedIndex', 1);


// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown3.append($('<option></option>').attr('value', entry.code).text(entry.name));
  })
});

var parentId = "#graph-wrapper";
var animDuration = 1000;
var margin = {top: 20, right: 50, bottom: 50, left: 150};

var width = $(parentId).width() - margin.left - margin.right,
    height = $(parentId).height()  - margin.top - margin.bottom;

var xScale = d3.scale.linear()
    .range([0,width]);

var yScale = d3.scale.linear()
    .range([height, 0]);

var line = d3.line();

var zScale = d3.scale.linear()
    .range([2,100]);

var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(-height)
    .tickPadding(8)
    .tickFormat(d3.round);

var yAxis = d3.axisLeft()
    .scale(yScale)
    .tickSize(-width)
    .tickPadding(8)
    .tickFormat(d3.round);

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
    .call(xAxis.ticks(20));

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("  +0+ ",0)")
    .call(yAxis);

svg.append("path")
    .attr("class","trendline")
    .attr("stroke-width", 1)
    .style("stroke","steelblue")
    .style("fill","none");

/*
// Breaks with v3 to v4 (v5)
d3.selectAll(".graph-picklist").on("change",function(){
  updateChart(d3.select("#graph-picklist-x")[0][0].value,
              d3.select("#graph-picklist-y")[0][0].value);
});

// Also works
d3.selectAll(".graph-picklist").on("change",function(){
  updateChart(d3.select("#graph-picklist-x").property("value"),
              d3.select("#graph-picklist-y").property("value"));
});
*/

// 
d3.selectAll(".graph-picklist").on("change",function(){
  updateChart(d3.select("#graph-picklist-x").node().value,
              d3.select("#graph-picklist-y").node().value,
              d3.select("#graph-picklist-z").node().value);
});

d3.selectAll(".graph-picklist2").on("change",function(){
  updateChart2(d3.select("#graph-picklist-x").node().value,
              d3.select("#graph-picklist-y").node().value,
              d3.select("#graph-picklist-z").node().value);
});


// For rollover popup
var div = d3.select(parentId).append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);


function getDimensions(x,y,z){
  var returnX=[];
  var returnY=[];
  var returnZ=[];
  var returnPairs = [];
  allData.forEach(function(d){
    var pair = {x: d[x],y: d[y],z:d[z],industry_detail:d["industry_detail"],industry_code:d["industry_code"],ACID:d["ACID"],
    ENRG:d["ENRG"],ETOX:d["ETOX"],EUTR:d["EUTR"],FOOD:d["FOOD"],GCC:d["GCC"],HAPS:d["HAPS"],
    HAZW:d["HAZW"],HC:d["HC"],HNC:d["HNC"],HRSP:d["HRSP"],HTOX:d["HTOX"],JOBS:d["JOBS"],
    LAND:d["LAND"],METL:d["METL"],MINE:d["MINE"],MSW:d["MSW"],NREN:d["NREN"],OZONE:d["OZONE"],
    PEST:d["PEST"],REN:d["REN"],SMOG:d["SMOG"],VADD:d["VADD"],WATR:d["WATR"]}; // CUSTOM, appended year for chart, the rest for popup
    returnPairs.push(pair);
    returnX.push(d[x]);
    returnY.push(d[y]);
    returnZ.push(d[z]);
  });
  return {x:returnX,y:returnY,z:returnZ,pairs:returnPairs};
}

function updateTitle(x,y,z){
  //var title = d3.select("#title").text("Linear Regression:");
  //var subtitle = d3.select("#subtitle").text(x+" vs "+y);
  var title = d3.select("#title").html(x+" <b>VS</b> "+y+" <b>based on</b> "+z);
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
  // Initially uses data/toy.csv",function(data){ from wind study
    //data = d3.csvParse("data/indicators_sectors.csv", d3.autoType);
  d3.csv("data/indicators_sectors.csv").then(function(data){

    data.forEach(function(d) {

        d.ACID = +d.ACID;
        
        d.ENRG= +d.ENRG;
        d.ETOX=+d.ETOX
        d.EUTR=+d.EUTR
        d.FOOD=+d.FOOD
        d.GCC=+d.GCC
        d.HAPS=+d.HAPS
        d.HAZW=+d.HAZW
        d.HC=+d.HC
        d.HNC=+d.HNC
        d.HRSP=+d.HRSP
        d.HTOX=+d.HTOX
        d.JOBS=+d.JOBS
        d.LAND=+d.LAND
        d.METL=+d.METL
        d.MINE=+d.MINE
        d.MSW=+d.MSW
        d.NREN=+d.NREN
        d.OZONE=+d.OZONE
        d.PEST=+d.PEST
        d.REN=+d.REN
        d.SMOG=+d.SMOG
        d.VADD=+d.VADD
        d.WATR=+d.WATR
        //console.log(d.ENRG)




      });

    allData = data;
    //updateChart("Count","Rating");
    //
    // updateChart("wind_mph","change_displacement_percent","year");
    updateChart("ACID","ACID","ACID");
  });
});


var ordinalDomain = ["1-100m", "100-500m", "500m-1km", "1-5km", "5-10km", "Over 10km"];
var ordinal = d3.scale.ordinal() // Becomes scaleOrdinal in v4
  .domain(ordinalDomain)
  .range(["blue","#7479BC","#BDE7AE","#ECF809","orange","magenta"]); // Not in use here, from wind/js/regression.js

//function updateChart(x,y,year){
function updateChart(x,y,z){

  updateTitle(x,y,z);
  //Fetch data
  var records = getDimensions(x,y,z);

  //Reset scale
  yScale.domain(d3.extent(records.y));
  xScale.domain(d3.extent(records.x));
zScale.domain(d3.extent(records.z));
  //re-assign data (or assign new data)
  var selectedCircles = d3.select("#graph-plane")
                          .selectAll(".circles")
                          .data(records.pairs)

  //give a transition on the existing elements
  selectedCircles
    .transition().duration(animDuration)
    .attr("transform",function(d){return "translate("+xScale(d.x)+","+yScale(d.y)+")";})
    .attr("r",function(d){
                      //console.log(d.ACID)
                      //console.log(zScale(d.z)+5)
                      return zScale(d.z)+5
                    })
    .style("fill", function (d) { 

            if (d.year > 2014) {
              return "steelblue";
            } else {
              return "red";
            }

          })
    .style("opacity", .5)

  //Append any new elements and transition them as well
  selectedCircles.enter()
                .append("circle")

                    .on("mouseover", function(d) {
                       div.transition()
                         .duration(200)
                         .style("opacity", .9);
                            // "<br/>Step distance: " + ordinalDomain[d.step_type-1] + "<br/>Norm count: " + d.norm_step_count + "<br/>Impact count: " + d.impact_step_count + 
                            //div.html("<b style='font-size:1.3em'>" + d.industry_detail + "</b><br/>Industry Code: " + d.industry_code )
                            // + "<br/>Total change: " + d.change_displacement_degrees
                            div.html("<b style='font-size:1.3em'>" + d.industry_detail + "</b><br/> " +"x: "+ d.x+ "</b><br/> " +"y: "+ d.y + "</b><br/> " +"z: "+ d.z)
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY - 28) + "px");
                         
                       })
                     .on("mouseout", function(d) {
                        
                       div.transition()
                         .duration(500)
                         .style("opacity", 0);
                        
                    })

                    .attr("class","circles")
                    .attr("r",function(d){
                      //console.log(d.ACID)
                      //console.log(zScale(d.z)+5)
                      return zScale(d.z)+5
                    })
                    .style("fill", function (d) {
                      if (d.year > 2014) {
                        return "steelblue";
                      } else {
                        return "red";
                      }

                    })
    .style("opacity", .5)

                    .transition().duration(animDuration)
                    .attr("transform",function(d){return "translate("+xScale(d.x)+","+yScale(d.y)+")";})



                ;

  //Remove any dom elements which are no longer data bound
  selectedCircles.exit().remove();
                  
  //Update Axes
  d3.select(parentId).select(".x.axis").transition().duration(animDuration).call(xAxis);
  

  //BUGBUG invalid format: ,.-4f  AND   invalid format: ,.-2f
  // Started after v3 to v5 when node added when selecting:  d3.select("#graph-picklist-y").node().value
  //d3.select(parentId).select(".y.axis").transition().duration(animDuration).call(yAxis);
  d3.select(parentId).select(".y.axis").transition().duration(animDuration).call(yAxis);
  //Update Regression
  /*
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
          leastSquaresCoeff[2].toFixed(4)+"<br><span style='color:red'>Red indicates events prior to 2015</span>" 
          :
      "y="+leastSquaresCoeff[0].toFixed(4)+"x"+"+"+
          leastSquaresCoeff[1].toFixed(4)+" rSquared: "+
          leastSquaresCoeff[2].toFixed(4)+"<br><span style='color:red'>Red indicates events prior to 2015</span>";
  });*/
}




function updateChart2(x,y,z){

  updateTitle(x,y,z);
  //Fetch data
  var records = getDimensions(x,y,z);

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
                            div.html("<b style='font-size:1.3em'>" + d.industry_detail + "</b><br/>d.zz " + d.z )
                            // + "<br/>Total change: " + d.change_displacement_degrees
                            
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY - 28) + "px");
                         
                       })
                     .on("mouseout", function(d) {
                        
                       div.transition()
                         .duration(500)
                         .style("opacity", 0);
                        
                    })

                    .attr("class","circles")
                    //.attr("r",function(d){
                      //console.log(d.ACID)
                    //  return d.z*1000+100
                    //})
                    .style("fill", function (d) {
                      if (d.year > 2014) {
                        return "steelblue";
                      } else {
                        return "red";
                      }

                    })
    //.style("opacity", 0.)

                    .transition().duration(animDuration)
                    .attr("transform",function(d){return "translate("+xScale(d.x)+","+yScale(d.y)+")";})



                ;

  //Remove any dom elements which are no longer data bound
  selectedCircles.exit().remove();
                  
  //Update Axes
  d3.select(parentId).select(".x.axis").transition().duration(animDuration).call(xAxis);
  

  //BUGBUG invalid format: ,.-4f  AND   invalid format: ,.-2f
  // Started after v3 to v5 when node added when selecting:  d3.select("#graph-picklist-y").node().value
  //d3.select(parentId).select(".y.axis").transition().duration(animDuration).call(yAxis);
  d3.select(parentId).select(".y.axis").transition().duration(animDuration).call(yAxis);
  //Update Regression
  /*
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
          leastSquaresCoeff[2].toFixed(4)+"<br><span style='color:red'>Red indicates events prior to 2015</span>" 
          :
      "y="+leastSquaresCoeff[0].toFixed(4)+"x"+"+"+
          leastSquaresCoeff[1].toFixed(4)+" rSquared: "+
          leastSquaresCoeff[2].toFixed(4)+"<br><span style='color:red'>Red indicates events prior to 2015</span>";
  });*/
}
