var dataParameters = []; 
var dp = {};
var layerControl = {}; // Object containing one control for each map on page.

  // Set your own Mapbox access token below.
  // Restrict which domains your token is loaded through.
  // https://blog.mapbox.com/url-restrictions-for-access-tokens-5f7f7eb90092
var mbAttr = '<a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWUyZGV2IiwiYSI6ImNqaWdsMXJvdTE4azIzcXFscTB1Nmcwcm4ifQ.hECfwyQtM7RtkBtydKpc5g';


// Note: light_nolabels does not work on https. Remove if so. Was positron_light_nolabels.
var basemaps = {
  'Grayscale' : L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
  'Satellite' : L.tileLayer(mbUrl, {maxZoom: 25, id: 'mapbox.satellite', attribution: mbAttr}),
  'Streets' : L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr}),
  'OpenStreetMap' : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }),
}
var basemaps2 = {
  'Grayscale' : L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
  'Satellite' : L.tileLayer(mbUrl, {maxZoom: 25, id: 'mapbox.satellite', attribution: mbAttr}),
  'Streets' : L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr}),
  'OpenStreetMap' : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }),
}
var baselayers = {
  'Rail' : L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
      minZoom: 2, maxZoom: 19, tileSize: 256, attribution: '<a href="https://www.openrailwaymap.org/">OpenRailwayMap</a>'
  }),
}
/*
  'Positron' : L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attributionX: 'positron_lite_rainbow'
  }),
  'Litegreen' : L.tileLayer('//{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
      attribution: 'Tiles <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a>'
  }),
  'EsriSatellite' : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP'
  }),
  'Dark' : L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
      attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
  }),
*/

//////////////////////////////////////////////////////////////////
// Usage:
//
// data: csv file with 
//  lon, lat for position
//  one numerical or categorical attribute to be visualized
//  + (optional) one attribute calles "address" to be shown in tooltip
// 
// 1. set class of aside element above to match the name of the data
// 2. insert data into aside element
// 3. specify the following dp (data parameters) 
// 4. initialize map center with [lat, lon]
// 5. Load Layers Asynchronously
//
// options for scales:
// "scaleThreshold", "scaleOrdinal", "scaleOrdinal" or "scaleQuantile"
//////////////////////////////////////////////////////////////////

/////////// LOAD FROM HTML ///////////

// INTERMODAL PORTS - was here

// Recall existing map https://github.com/Leaflet/Leaflet/issues/6298
// https://plnkr.co/edit/iCgbRjW4aymAjoVoicZQ?p=preview&preview
L.Map.addInitHook(function () {
  // Store a reference of the Leaflet map object on the map container,
  // so that it could be retrieved from DOM selection.
  // https://leafletjs.com/reference-1.3.4.html#map-getcontainer
  this.getContainer()._leaflet_map = this;
});

function loadFromCSV(whichmap,dataset,callback) {

  let map = document.querySelector('#' + whichmap)._leaflet_map; // Recall existing map
  var container = L.DomUtil.get(map);
  if(container == null) { // Initialize map
    map = L.map(whichmap, {
      center: mapCenter,
      scrollWheelZoom: false,
      zoom: 7
    });
  }

  // 5. Load Layers Asynchronously
  //var dataset = "../community/map/zip/basic/places.csv";

  // Change below
  // latColumn: "lat",
  //      lonColumn: "lon",
  //var dataset = "https://datascape.github.io/community/map/zip/basic/places.csv";

  d3.csv(dataset).then(function(data) {
    
      dp = {
        numColumns: ["zip","lat","lon"],
        valueColumn: "name",
        latColumn: "lat",
        lonColumn: "lon",
        //scaleType: "scaleQuantile",
        scaleType: "scaleOrdinal",
      }
      dp.name = "Smart Data Projects"; // Must match "map.addLayer(overlays" below.
      //dp.name2 = "Intermodal Ports";
      dp.data = readCsvData(data, dp.numColumns, dp.valueColumn);
      dp.scale = getScale(dp.data, dp.scaleType, dp.valueColumn);
      dp.group = L.layerGroup();
      //dp.group2 = L.layerGroup();
      dp.iconName = 'star';
      //dataParameters.push(dp);
      overlays2[dp.name] = dp.group; // Allows for use of dp.name with removeLayer and addLayer
      //overlays2[dp.name] = dp.group2;

      // Still causes jump
      //overlays2["Intermodal Ports 2"] = overlays["Intermodal Ports"];

      //if(layerControl[whichmap] == undefined) {
      //  layerControl[whichmap] = L.control.layers(baseLayers, overlays).addTo(map);
      //}
      if(layerControl[whichmap] == undefined) {
        layerControl[whichmap] = L.control.layers(basemaps2, overlays2).addTo(map); // Push multple layers
        basemaps2["Grayscale"].addTo(map); // Set the initial baselayer.
      } else {
        layerControl[whichmap].addOverlay(dp.group, dp.name); // Appends to existing layers
      }

      //if(layerControl[whichmap] == undefined) {
        
      //}

      addIcons(dp);
      //addLegend(dp.scale, dp.scaleType, dp.name); // Reactivate

      showList(dp);

      // All layers reside in this object:
      console.log("dataParameters:");
      console.log(dataParameters);

      // Remove from control and background.
      //layerControl[whichmap].removeLayer(grayscale);
      //map.removeLayer(grayscale);

      
      //layerControl[whichmap].removeLayer(overlays["myDataset"]); // Remove from control 
      //map.removeLayer(overlays["myDataset"]); // Remove from map

      //map.addLayer(overlays["Intermodal Ports"]);

      map.addLayer(overlays2[dp.name]);
      callback(map); // Sends to function(results).  map might not be needed as paramter
      //return map;
  })
  .catch(function(error){ 
       alert("Data loading error: " + error)
  })
}

/////////// MAP SETTINGS ///////////

// 33.863516,-84.368775
var mapCenter = [32.90,-83.35]; // [latitude, longitude]

// Add above to include overlays WITHOUT showing in legend:
// layers: [dataParameters[0].group]

// If added both baseLayers and overlays WITHOUT showing in legend:
// layers: [grayscale, dataParameters[0].group]

// Avoid layers: [grayscale] above 
// - two sets of tiles would be loaded when upper baseLayer is changed using radio buttons.

// Two sets prevents one map from changing the other


var overlays = {};
var overlays2 = {};
dataParameters.forEach(function(ele) {
  overlays[ele.name] = ele.group; // Add to layer menu
  //overlays2[ele.name] = ele.group; // Add to layer menu
})

function populateMap(whichmap, dp) {

    var map = L.map(whichmap, {
      center: mapCenter,
      scrollWheelZoom: false,
      zoom: 6,
      zoomControl: false
    });
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    overlays[dp.name] = dp.group; // Allows for use of dp.name with removeLayer and addLayer

    // Adds checkbox, but unselects other map on page
    //overlays2[dp.name] = dp.group;


    /*
    if(layerControl[whichmap] == undefined) {
      baseLayers["Streets"].addTo(map); // Set the initial baselayer.

      //layerControl[whichmap] = L.control.layers(baseLayers, overlays).addTo(map);

    }
    */

    if(layerControl[whichmap] == undefined) {
      layerControl[whichmap] = L.control.layers(basemaps, overlays).addTo(map); // Push multple layers
      //basemaps["Satellite"].addTo(map);
      basemaps["Streets"].addTo(map);
    } else {
      layerControl[whichmap].addOverlay(dp.group, dp.name); // Appends to existing layers
    }
    


      // Sample of single icon - place in addIcons function
      // Create a semi-transparent bus icon
      var busIcon = L.IconMaterial.icon({
        icon: 'local_shipping',            // Name of Material icon
        iconColor: '#fff',              // Material icon color (could be rgba, hex, html name...)
        markerColor: 'rgba(255,0,0,0.5)',  // Marker fill color
        outlineColor: 'rgba(255,0,0,0.5)',            // Marker outline color
        outlineWidth: 1,                   // Marker outline width 
      })
      
      // Attach the icon to the marker and add to the map
      //L.marker([33.74,-84.38], {icon: busIcon}).addTo(map)
      
      // Set .my-div-icon styles in CSS
      //var myIcon = L.divIcon({className: 'my-div-icon'});
      //L.marker([32.90,-83.83], {icon: myIcon}).addTo(map);

    
    map.addLayer(overlays[dp.name]);

    return map;
}







/////////////////////////////////////////
// helper functions
/////////////////////////////////////////
function addLegend(scale, scaleType, title) {
  var svg = d3.select("#allLegends")
    .append("div")
      .attr("class", "legend "  + title)
    .append("svg")
      .style("width", 200);
      // .styleX("height", 300)

  svg.append("g")
      .attr("class", "legend")
      .attr("transform", "translate(20,20)");

  var legend = d3.legendColor()
    .labelFormat(d3.format(".2f"))
    .title(title);

  if (scaleType === "scaleThreshold") {
    legend = legend.labels(d3.legendHelpers.thresholdLabels);
  }

  legend.scale(scale);  

  svg.select("g.legend")
    .call(legend);
}

function hex2rgb(hex) {
  // long version
  r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (r) {
    return r.slice(1,4).map(function(x) { return parseInt(x, 16); });
  }
  // short version
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (r) {
    return r.slice(1,4).map(function(x) { return 0x11 * parseInt(x, 16); });
  }
  return null;
}


function addIcons(dp) {
  var circle,circle2;
  var iconColor, iconColorRGB, iconName;
  var colorScale = dp.scale;
  dp.data.forEach(function(element) {
    iconColor = colorScale(element[dp.valueColumn]);
    if (dp.color) { 
      iconColor = dp.color;
    }
    // How to make element always lowercase?
    console.log("element " + element + " iconColor: " + iconColor)
    if (typeof dp.latColumn == "undefined") {
      dp.latColumn = "lat";
    }
    if (typeof dp.lonColumn == "undefined") {
      dp.lonColumn = "lon";
    }
    iconColorRGB = hex2rgb(iconColor);
    iconName = dp.iconName;
    var busIcon = L.IconMaterial.icon({
      icon: iconName,            // Name of Material icon - star
      iconColor: '#fff',         // Material icon color (could be rgba, hex, html name...)
      markerColor: 'rgba(' + iconColorRGB + ',0.7)',  // Marker fill color
      outlineColor: 'rgba(' + iconColorRGB + ',0.7)', // Marker outline color
      outlineWidth: 1,                   // Marker outline width 
    })
  
    // Attach the icon to the marker and add to the map
    //L.marker([element[dp.latColumn], element[dp.lonColumn]], {icon: busIcon}).addTo(map)
    if (location.host == 'georgia.org' || location.host == 'www.georgia.org') {
      circle = L.marker([element[dp.latColumn], element[dp.lonColumn]]).addTo(dp.group);
    } else {
      circle = L.marker([element[dp.latColumn], element[dp.lonColumn]], {icon: busIcon}).addTo(dp.group); // Works, but not in Drupal site.
    }

    var output = "<b>" + element[dp.valueColumn] + "</b><br>" + element.address + "<br>" + element.city + " " + element.state + " " + element.zip + "<br>";
    if (element.phone || element.phone_afterhours) {
      output += element.phone + " " + element.phone_afterhours + "<br>";
    }

    if (element.schedule) {
      output += "Hours: " + element.schedule + "<br>";
    }
    if (element.website) {
      output += "<a href='" + element.website + "' target='_blank'>Website</a>";
    }
    if (element.website && element[dp.latColumn]) {
      output += " | ";
    }
    if (element[dp.latColumn]) {
        output += "<a href='https://www.waze.com/ul?ll=" + element[dp.latColumn] + "%2C" + element[dp.lonColumn] + "&navigate=yes&zoom=17'>Waze Directions</a><br>";
    }
    circle.bindPopup(output);
    //circle2.bindPopup(output);
  });
}

function showList(dp) {

  var colorScale = dp.scale;
  dp.data.forEach(function(element) {


    var output = "<div style='width:15px;height:15px;margin-right:8px;margin-top:3px;background:" + colorScale(element[dp.valueColumn]) + ";float:left'></div><div style='overflow:auto'>"
    output += "<b style='font-size:16px;color:#333'>" + element[dp.valueColumn] + "</b><br>" + element.address + "<br>" + element.city + " " + element.state + " " + element.zip + "<br>";
    if (element.phone || element.phone_afterhours) {
     output += element.phone + " " + element.phone_afterhours + "<br>";
    }
    if (element.schedule) {
     output += "Hours: " + element.schedule + "<br>";
    }
    if (element.website) {
      output += "<a href='" + element.website + "' target='_blank'>Website</a><br>";
    }
    if (element.website && element[dp.latColumn]) {
      output += " | ";
    }
    if (element[dp.latColumn]) {
        output += "<a href='https://www.waze.com/ul?ll=" + element[dp.latColumn] + "%2C" + element[dp.lonColumn] + "&navigate=yes&zoom=17'>Waze Directions</a>";
    }
     output += "<br></div><div style='clear:both'></div>";

    $("#narrowlist").append(output);

    // Detail List with Descriptions
    output = "<div style='width:15px;height:15px;margin-right:8px;margin-top:3px;background:" + colorScale(element[dp.valueColumn]) + ";float:left'></div><div style='overflow:auto'>"
    output += "<b style='font-size:16px;color:#333'>" + element.title + "</b><br>";

    output += element.description + "<br>";

    /*
    output += "<b>" + element.name + "</b> " + element.address + ", " + element.city + " " + element.state + " " + element.zip + " ";
    if (element.phone || element.phone_afterhours) {
     output += element.phone + " " + element.phone_afterhours + "<br>";
    }
    if (element.schedule) {
     output += "Hours: " + element.schedule + "<br>";
    }
     if (element[dp.latColumn]) {
        output += " - <a href='https://www.waze.com/ul?ll=" + element[dp.latColumn] + "%2C" + element[dp.lonColumn] + "&navigate=yes&zoom=17'>Waze Directions</a><br>";
    }
    */

    if (element.website) {
      // Learn More:
      output += "<a href='" + element.website + "' style='display:block;margin-top:5px' target='_blank'>" + element.website.replace("https://","").replace("http://","").replace("www.","") + "</a><br>";
    }
    output += "</div><div style='clear:both'></div>";

    $("#detaillist").append(output);


  });
}
//Hey, if any of my friends and relatives don't suvive this virus thing, just know I love you as you breath your final breaths. 

// Scales: http://d3indepth.com/scales/
function getScale(data, scaleType, valueCol) {
  var scale;
  if (scaleType === "scaleThreshold") {
    var min = d3.min(data, function(d) { return d[valueCol]; });
    var max = d3.max(data, function(d) { return d[valueCol]; });
    var d = (max-min)/7;
    scale = d3.scaleThreshold()
      .domain([min+1*d,min+2*d,min+3*d,min+4*d,min+5*d,min+6*d])
      .range(['#ffffe0','#ffd59b','#ffa474','#f47461','#db4551','#b81b34','#8b0000']);
  } else if (scaleType === "scaleQuantize") {
    scale = d3.scaleQuantize()
      .domain(d3.extent(data, function(d) { return d[valueCol]; }))
      .range(['#ffffe0','#ffd59b','#ffa474','#f47461','#db4551','#b81b34','#8b0000']);
  } else if (scaleType === "scaleQuantile") {
    scale = d3.scaleQuantile()
      .domain(data.map(function(d) { return d[valueCol]; }).sort(function(a, b){return a-b}))
      .range(['#ffffe0','#ffd59b','#ffa474','#f47461','#db4551','#b81b34','#8b0000']);            
  } else if (scaleType === "scaleOrdinal") {
    scale = d3.scaleOrdinal()
      .domain(data.map(function(d) { return d[valueCol]; }))
      .range(d3.schemePaired);
  }
  return scale;
}

function readData(selector, delimiter, columnsNum, valueCol) {
  var psv = d3.dsvFormat(delimiter);
  var initialData = psv.parse(removeWhiteSpaces(d3.select(selector).text())); 
  _data = initialData.filter(function(e) { return e[valueCol].length !== 0; });
  console.log("Skipped: " + (initialData.length - _data.length) + " rows.");
  
  if (typeof columnsNum !== "undefined") {
    _data.forEach( function (row) {
      convertToNumber(row, columnsNum);
    });
  }
  //console.log(_data);
  return _data;
}
function readCsvData(_data, columnsNum, valueCol) {
  //console.log(_data);
  
  // 'for of' loop is more efficient than forEach. 
  // Also works on objects. You can call it like this 'for let d of Object.entries(data){ }'

  if (typeof columnsNum !== "undefined") {
    _data.forEach( function (row) {
      //row = removeWhiteSpaces(row);
      convertToNumber(row, columnsNum);
    });
  }
  console.log(_data);
  return _data;
}
function convertToNumber(d, _columnsNum) {
  for (var perm in d) {
    if (_columnsNum.indexOf(perm) > -1)
      if (Object.prototype.hasOwnProperty.call(d, perm)) {
        d[perm] = +d[perm];
      }
    }  
  return d;
} 

function removeWhiteSpaces (str) {
  return str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
}


var revealHeader = true;
$('#sidecolumnContent a').click(function(event) {
  revealHeader = false;
  /*
  setTimeout(function(){ 
    var y = $(window).scrollTop();  //your current y position on the page
    //$(window).scrollTop(y-50); // Adjust for fixed header.

  }, 10);
  */
});


// FIXED MAP POSITION ON SCROLL
function elementScrolled(elem) { // scrolled into view
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}
function bottomReached(elem) { // bottom scrolled into view
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var hangover = 10; // Extend into the next section, so map remains visible.
  //var elemTop = $(elem).offset().top;
  var elemBottom = $(elem).offset().top + $(elem).height() + hangover - docViewBottom;
  //console.log('offset: ' + $(elem).offset().top + ' height:' + $(elem).height() + ' docViewBottom:' + docViewBottom + ' elemBottom: ' + elemBottom);
  //console.log('bottomReached elemBottom: ' + elemBottom);
  return (elemBottom < 0);
}
function topReached(elem) { // top scrolled out view
  var docViewTop = $(window).scrollTop();
  //var docViewBottom = docViewTop + $(window).height();
  var pretop = 80; // Extend into the next section, so map remains visible.
  //var elemTop = $(elem).offset().top;
  var elemTop = $(elem).offset().top - docViewTop - pretop;
  //console.log('offset: ' + $(elem).offset().top + ' height:' + $(elem).height() + ' docViewBottom:' + docViewBottom + ' elemBottom: ' + elemBottom);
  //console.log('topReached elemTop: ' + elemTop);
  return (elemTop < 0);
}


 // Anchors corresponding to menu items

/*
var scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
});
var topMenuHeight = 150;
*/




var mapFixed = false;
var previousScrollTop = $(window).scrollTop();

$(window).scroll(function() {
  if (revealHeader == false) {
    $('.headerbar').hide();
    revealHeader = true; // For next manual scroll
  } else if ($(window).scrollTop() > previousScrollTop) { // Scrolling Up
    if ($(window).scrollTop() > previousScrollTop + 20) { // Scrolling Up fast
      $('.headerbar').hide();
    }
  } else { // Scrolling Down
    if ($(window).scrollTop() < (previousScrollTop - 20)) { // Reveal if scrolling down fast
      $('.headerbar').show();
    }
  }
  previousScrollTop = $(window).scrollTop();

  // Detect when #hublist is scrolled into view and add class mapHolderFixed.
  // Include mapHolderBottom when at bottom.
  if (bottomReached('#hublist')) {
    if (mapFixed==true) { // Only unstick when crossing thresehold to minimize interaction with DOM.
      //console.log('bottom Visible');
      $('.mapHolderInner').removeClass('mapHolderFixed');
      $('.mapHolderInner').addClass('mapHolderBottom');
      // Needs to be at bottom of dev
      mapFixed = false;
    }
  } else if(topReached('#hublist')) {
    if (mapFixed==false) {
      $('.mapHolderInner').addClass('mapHolderFixed');
      $('.mapHolderInner').removeClass('mapHolderBottom');
      //alert("fixed position")
      mapFixed = true;
    }
  } else if(!topReached('#hublist') && mapFixed == true) { // Not top reached (scrolling down)
    $('.mapHolderInner').removeClass('mapHolderFixed');
    mapFixed = false;
  }
});
console.log('hello from dual map')