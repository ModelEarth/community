
// Dual Map Library - A global namespace singleton
// If dual_map library exists then use it, else define a new object.
var dual_map = dual_map || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        helloWorld : function() {
            alert('Hello World! -' + _args[0]);
        },
        community_root : function() {
            // or sendfeedback
            let root = location.protocol + '//' + location.host + '/community/';
            if (location.host.indexOf('localhost') < 0) {
              root = "https://modelearth.github.io/community/";
            }
            return (root);
        },
        absolute_root : function() {
          // Curently only used for feedback form
          let root = "https://map.georgia.org/community/"
          return (root);
        }
    };
}());


var dataParameters = [];
var dp = {};
var layerControl = {}; // Object containing one control for each map on page.

  // Set your own Mapbox access token below.
  // Restrict which domains your token is loaded through.
  // https://blog.mapbox.com/url-restrictions-for-access-tokens-5f7f7eb90092
var mbAttr = '<a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWUyZGV2IiwiYSI6ImNqaWdsMXJvdTE4azIzcXFscTB1Nmcwcm4ifQ.hECfwyQtM7RtkBtydKpc5g';

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

function loadFromCSV(whichmap,whichmap2,dp,basemaps1,basemaps2,callback) {

  let defaults = {};
  defaults.zoom = 7;
  defaults.numColumns = ["zip","lat","lon"];
  defaults.nameColumn = "name";
  defaults.valueColumn = "name"; // For color coding
  defaults.latColumn = "latitude";
  defaults.lonColumn = "longitude";
  //defaults.scaleType = "scaleQuantile";
  defaults.scaleType = "scaleOrdinal";
  defaults.dataTitle = "Data Projects"; // Must match "map.addLayer(overlays" below.
  if (dp.latitude && dp.longitude) {
      mapCenter = [dp.latitude,dp.longitude]; 
  }
  dp = mix(dp,defaults); // Gives priority to dp
  if (dp.addLink) {
    //console.log("Add Link: " + dp.addLink)
  }
  let map = document.querySelector('#' + whichmap)._leaflet_map; // Recall existing map
  var container = L.DomUtil.get(map);
  if (container == null) { // Initialize map
    map = L.map(whichmap, {
      center: mapCenter,
      scrollWheelZoom: false,
      zoom: dp.zoom,
      dragging: !L.Browser.mobile, 
      tap: !L.Browser.mobile
    });
    
    
    // setView does not seem to have an effect triggering map.on below
    /*
    map = L.map(whichmap,{
      center: mapCenter,
      scrollWheelZoom: false,
      zoom: dp.zoom,
      zoomControl: false
    });
    // Placing map.whenReady or map.on('load') here did not resolve
    map.setView(mapCenter,dp.zoom);
    */
  }
  let map2 = {};
  if (whichmap2) {
    map2 = document.querySelector('#' + whichmap2)._leaflet_map; // Recall existing map
    var container2 = L.DomUtil.get(map2);
    if (container2 == null) { // Initialize map
      map2 = L.map(whichmap2, {
        center: mapCenter,
        scrollWheelZoom: false,
        zoom: 5,
        dragging: !L.Browser.mobile, 
        tap: !L.Browser.mobile
      });
    }
  }

  // 5. Load Layers Asynchronously
  //var dataset = "../community/map/zip/basic/places.csv";

  // Change below
  // latColumn: "lat",
  //      lonColumn: "lon",
  //var dataset = "https://datascape.github.io/community/map/zip/basic/places.csv";

  // ADD DATASET TO DUAL MAPS

  // We are currently loading dp.dataset from a CSV file.
  // Later we will check if the filename ends with .csv

  d3.csv(dp.dataset).then(function(data) {
      //console.log("To do: store data in browser to avoid repeat loading from CSV.");

      dp.data = readCsvData(data, dp.numColumns, dp.valueColumn);
      // Make element key always lowercase

      dp.data_lowercase_key

      dp.scale = getScale(dp.data, dp.scaleType, dp.valueColumn);
      dp.group = L.layerGroup();
      dp.group2 = L.layerGroup();
      dp.iconName = 'star';
      //dataParameters.push(dp);

      // Remove the markers from the map for the layer
       if (map.hasLayer(overlays1[dp.dataTitle])){
          overlays1[dp.dataTitle].remove();
       }
       if (map2.hasLayer(overlays2[dp.dataTitle])){
          overlays2[dp.dataTitle].remove();
       }

       // Prevents dups of layer from appearing
       // Each dup shows a data subset when filter is being applied.
       if (overlays1[dp.dataTitle]) {
          layerControl[whichmap].removeLayer(overlays1[dp.dataTitle]);
       }
       if (overlays2[dp.dataTitle]) {
          // Not working, multiple checkboxes appear
          layerControl[whichmap2].removeLayer(overlays2[dp.dataTitle]); // Not sure why, but 1 needs to be used instead of 2
          //controlLayers.removeLayer(overlays2[dp.dataTitle]);
       }

      // Allows for use of dp.dataTitle with removeLayer and addLayer
      overlays1[dp.dataTitle] = dp.group;
      overlays2[dp.dataTitle] = dp.group2;

      if (layerControl[whichmap] != undefined) {
        // Remove existing instance of layer
        //layerControl[whichmap].removeLayer(overlays[dp.dataTitle]); // Remove from control 
        //map.removeLayer(overlays[dp.dataTitle]); // Remove from map
      }

      if (layerControl[whichmap] != undefined && dp.group) {
          //layerControl[whichmap].removeLayer(dp.group);
      }


      // Still causes jump
      //overlays2["Intermodal Ports 2"] = overlays["Intermodal Ports"];

      // ADD BACKGROUND BASEMAP
      if (layerControl[whichmap] == undefined) {
        layerControl[whichmap] = L.control.layers(basemaps1, overlays1).addTo(map); // Init layer checkboxes
        basemaps1["Grayscale"].addTo(map); // Set the initial baselayer.
      } else {
        layerControl[whichmap].addOverlay(dp.group, dp.dataTitle); // Add layer checkbox
      }
      // ADD BACKGROUND BASEMAP to Side Map
      if (layerControl[whichmap2] == undefined) {
        layerControl[whichmap2] = L.control.layers(basemaps2, overlays2).addTo(map2); // Init layer checkboxes
        basemaps2["OpenStreetMap"].addTo(map2); // Set the initial baselayer.
      } else {
        layerControl[whichmap2].addOverlay(dp.group2, dp.dataTitle); // Add layer checkbox
      }

      if (dp.showLegend != false) {
        //addLegend(dp.scale, dp.scaleType, dp.name); // To big and d3-legend.js file is not available in embed, despite 
      }
  
      // ADD ICONS TO MAP
      // All layers reside in this object:
      //console.log("dataParameters:");
      //console.log(dataParameters);

      if (dp.showLayer != false) {
        $("#widgetTitle").text(dp.dataTitle);
        dp = showList(dp,map); // Reduces list based on filters
        addIcons(dp,map,map2);
        // These do not effect the display of layer checkboxes
        map.addLayer(overlays1[dp.dataTitle]);
        map2.addLayer(overlays2[dp.dataTitle]);
      }
      $("#activeLayer").text(dp.dataTitle); // Resides after showList

      //callback(map); // Sends to function(results).  "var map =" can be omitted when calling this function


      // Runs too soon, unless placed within d3.csv.
      // Otherwise causes: Cannot read property 'addOverlay' of undefined

      //map.whenReady(function(){ 
      //map.on('load',function(){ // Never runs
        //alert("loaded")
        callback(dp)
      //});

      // Neigher map.whenReady or map.on('load') seems to require SetView()
      if (document.body.clientWidth > 500) { // Since map tiles do not fully load when below list. Could use a .5 sec timeout perhaps.
        setTimeout( function() {
          $("#sidemapCard").hide(); // Hide after size is available for tiles.
        }, 20 );
      }
  })
  //.catch(function(error){ 
  //     alert("Data loading error: " + error)
  //})



}

/////////// MAP SETTINGS ///////////

// 33.863516,-84.368775
//var mapCenter = [32.90,-83.35]; // [latitude, longitude]
var mapCenter = [33.7490,-84.3880]; // [latitude, longitude]

// Add above to include overlays WITHOUT showing in legend:
// layers: [dataParameters[0].group]

// If added both baseLayers and overlays WITHOUT showing in legend:
// layers: [grayscale, dataParameters[0].group]

// Avoid layers: [grayscale] above 
// - two sets of tiles would be loaded when upper baseLayer is changed using radio buttons.

// Two sets prevents one map from changing the other


var overlays1 = {};
var overlays2 = {};
dataParameters.forEach(function(ele) {
  overlays1[ele.name] = ele.group; // Add to layer menu
  overlays2[ele.name] = ele.group2; // Add to layer menu
})

function populateMap(whichmap, dp, callback) { // From JSON within page
    var circle;
    let defaults = {};
    defaults.zoom = 7;
    if (dp.latitude && dp.longitude) {
      mapCenter = [dp.latitude,dp.longitude]; 
    } else {
      mapCenter = [33.74,-84.38];
    }

    dp = mix(dp,defaults); // Gives priority to dp

    var map = L.map(whichmap,{
      center: mapCenter,
      scrollWheelZoom: false,
      zoom: dp.zoom,
      zoomControl: false,
      dragging: !L.Browser.mobile, 
      tap: !L.Browser.mobile
    });

    map.setView(mapCenter,dp.zoom);

    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    overlays1[dp.dataTitle] = dp.group; // Allows for use of dp.name with removeLayer and addLayer

    // Adds checkbox, but unselects other map on page
    //overlays2[dp.dataTitle] = dp.group;
    overlays2[dp.dataTitle ] = dp.group2; //Haven't test switch to this

    /*
    if (layerControl[whichmap] == undefined) {
      baseLayers["Streets"].addTo(map); // Set the initial baselayer.

      //layerControl[whichmap] = L.control.layers(baseLayers, overlays).addTo(map);

    }
    */

    if (layerControl[whichmap] == undefined) {
      layerControl[whichmap] = L.control.layers(basemaps1, overlays1).addTo(map); // Push multple layers
      //basemaps1["Satellite"].addTo(map);
      basemaps1["Streets"].addTo(map);
    } else {
      layerControl[whichmap].addOverlay(dp.group, dp.dataTitle); // Appends to existing layers
    }
    
    // Attach the icon to the marker and add to the map
    //L.marker([33.74,-84.38], {icon: busIcon}).addTo(map)
    
    // Set .my-div-icon styles in CSS
    //var myIcon = L.divIcon({className: 'my-div-icon'});
    //L.marker([32.90,-83.83], {icon: myIcon}).addTo(map);

    addIcons(dp, map);
    map.addLayer(overlays1[dp.dataTitle]);
    
    // Both work
    map.on('load',function(){

      // Sample of single icon - place in addIcons function
      // Create a semi-transparent bus icon
      var busIcon = L.IconMaterial.icon({
        icon: 'local_shipping',            // Name of Material icon
        iconColor: '#fff',              // Material icon color (could be rgba, hex, html name...)
        markerColor: 'rgba(255,0,0,0.5)',  // Marker fill color
        outlineColor: 'rgba(255,0,0,0.5)',            // Marker outline color
        outlineWidth: 1,                   // Marker outline width 
      });

      callback(map)
    }); //  event handler before you load the map
    //map.whenReady(callback(map)); //  event handler before you load the map with SetView()
    
}



/////////////////////////////////////////
// helper functions
/////////////////////////////////////////
function addLegend(scale, scaleType, title) {

  $("#allLegends").text(""); // Clear prior results
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

  //alert($(".legendCells .cell").length)
  $("#legendHolder").height(80 + $(".legendCells .cell").length * 19);
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
function addIcons(dp,map,map2) {
  var circle,circle2;
  var iconColor, iconColorRGB, iconName;
  var colorScale = dp.scale;
  dp.data.forEach(function(element) {
    
    // Add a lowercase instance of each column name
    var key, keys = Object.keys(element);
    var n = keys.length;
    //var element={};
    while (n--) {
      key = keys[n];
      element[key.toLowerCase()] = element[key];
    }

    iconColor = colorScale(element[dp.valueColumn]);
    if (dp.color) { 
      iconColor = dp.color;
    }

    //console.log("element state " + element.state + " iconColor: " + iconColor)
    if (typeof dp.latColumn == "undefined") {
      dp.latColumn = "lat";
    }
    if (typeof dp.lonColumn == "undefined") {
      dp.lonColumn = "lon";
    }

    iconColorRGB = hex2rgb(iconColor);
    iconName = dp.iconName;
    var busIcon = L.IconMaterial.icon({ /* Cannot read property 'icon' of undefined */
      icon: iconName,            // Name of Material icon - star
      iconColor: '#fff',         // Material icon color (could be rgba, hex, html name...)
      markerColor: 'rgba(' + iconColorRGB + ',0.7)',  // Marker fill color
      outlineColor: 'rgba(' + iconColorRGB + ',0.7)', // Marker outline color
      outlineWidth: 1,                   // Marker outline width 
    })

    // Attach the icon to the marker and add to the map
    //L.marker([element[dp.latColumn], element[dp.lonColumn]], {icon: busIcon}).addTo(map)

    if (dp.markerType == "google") {
        if (1==2 && param["show"] != "suppliers" && (location.host == 'georgia.org' || location.host == 'www.georgia.org')) {
          // Show an old-style marker when Google Material Icon version not supported
          circle = L.marker([element[dp.latColumn], element[dp.lonColumn]]).addTo(dp.group);
          circle2 = L.marker([element[dp.latColumn], element[dp.lonColumn]]).addTo(dp.group2);
        } else {
          // If this line returns an error, try setting dp1.latColumn and dp1.latColumn to the names of your latitude and longitude columns.
          circle = L.marker([element[dp.latColumn], element[dp.lonColumn]], {icon: busIcon}).addTo(dp.group); // Works, but not in Drupal site.
          //circle2 = L.marker([element[dp.latColumn], element[dp.lonColumn]], {icon: busIcon}).addTo(dp.group2);

          // Display a small circle on small side map2
          circle2 = L.circle([element[dp.latColumn], element[dp.lonColumn]], {
                color: colorScale(element[dp.valueColumn]),
                fillColor: colorScale(element[dp.valueColumn]),
                fillOpacity: 1,
                radius: markerRadius(1,map2) // was 50.  Aiming for 1 to 10
            }).addTo(dp.group2);
        }
    } else {
      circle = L.circle([element[dp.latColumn], element[dp.lonColumn]], {
                color: colorScale(element[dp.valueColumn]),
                fillColor: colorScale(element[dp.valueColumn]),
                fillOpacity: 1,
                radius: markerRadius(1,map) // was 50.  Aiming for 1 to 10
            }).addTo(dp.group);
      circle2 = L.circle([element[dp.latColumn], element[dp.lonColumn]], {
                color: colorScale(element[dp.valueColumn]),
                fillColor: colorScale(element[dp.valueColumn]),
                fillOpacity: 1,
                radius: markerRadius(1,map2) // was 50.  Aiming for 1 to 10
            }).addTo(dp.group2);
    }

    // MAP POPUP
    var output = "<b>" + element[dp.nameColumn] + "</b><br>";
    if (element[dp.addressColumn]) {
      output +=  element[dp.addressColumn] + "<br>";
    } else if (element.address || element.city || element.state || element.zip) { 
      if (element.address) {
        output += element.address + "<br>";
      }
      if (element.city) {
        output += element.city;
      }
      if (element.state || element.zip) {
        output += ", ";
      }
      if (element.state) {
        output += element.state + " ";
      }
      if (element.zip) {
        output += element.zip;
      }
      output += "<br>";
    }

    if (element.phone || element.phone_afterhours) {
      if (element.phone) {
        output += element.phone + " ";
      }
      if (element.phone_afterhours) {
       output += element.phone_afterhours;
      }
      output += "<br>";
    }
    if (element[dp.valueColumn]) {
      if (dp.valueColumnLabel) {
        output += "<b>" + dp.valueColumnLabel + ":</b> " + element[dp.valueColumn].replace(/,/g,", ") + "<br>";
      } else if (element[dp.valueColumn] != element.name) {
        output += element[dp.valueColumn].replace(/,/g,", ") + "<br>";
      }
    }
    if (element.schedule) {
      output += "Hours: " + element.schedule + "<br>";
    }
    if (element.items) {
      output += "<b>Items:</b> " + element.items + "<br>";
    }
    if (element.website) {
      if (element.website.length <= 50) {
        output += "<b>Website:</b> <a href='" + element.website + "' target='_blank'>" + element.website.replace("https://","").replace("http://","").replace("www.","").replace(/\/$/, "") + "</a>";
      } else {
        // To Do: Display domain only
        output += "<b>Website:</b> <a href='" + element.website + "' target='_blank'>" + element.website.replace("https://","").replace("http://","").replace("www.","").replace(/\/$/, "") + "</a>"; 
      }
    }
    if (dp.listLocation != false) {
      if (element[dp.latColumn]) {
        if (element.website) {
          output += " | ";
        }
        //console.log("latitude2: " + dp.latColumn + " " + element.latitude);
        //output += "<div class='detail' latitude='" + element[dp.latColumn] + "' longitude='" + element[dp.lonColumn] + "'>Zoom In</div> | ";
        output += "<a href='https://www.waze.com/ul?ll=" + element[dp.latColumn] + "%2C" + element[dp.lonColumn] + "&navigate=yes&zoom=17'>Waze Directions</a><br>";
      }
    } else if (element.website) {
      output += "<br>";
    }
    
    // ADD POPUP BUBBLES TO MAP POINTS
    circle.bindPopup(output);
    circle2.bindPopup(output);

    /*
    map.on('zoomend', function() {
      console.log('zoomend',map.getZoom())
      circle.setRadius(markerRadius(1,map));
    });
    */

  });

  // Also see community-forecasting/map/leaflet/index.html for sample of svg layer that resizes with map
  map.on('zoomend', function() { // zoomend
    //L.layerGroup().eachLayer(function (marker) {
    dp.group.eachLayer(function (marker) { // This hits every point individually. A CSS change might be less script processing intensive
      //console.log('zoom ' + map.getZoom());
      if (marker.setRadius) {
        // Only reached when circles are used instead of map points.
        marker.setRadius(markerRadius(1,map));
      }
    });
  });
  map2.on('zoomend', function() { // zoomend
    // Resize the circle to avoid large circles on close-ups
    dp.group2.eachLayer(function (marker) { // This hits every point individually. A CSS change might be less script processing intensive
      //console.log('zoom ' + map.getZoom());
      if (marker.setRadius) {
        marker.setRadius(markerRadius(1,map2));
      }
    });
    $(".leaflet-interactive").show();
  });
  map2.on('zoom', function() {
    // Hide the circles so they don't fill screen. Set small to hide.
    $(".leaflet-interactive").hide();
    $(".l-icon-material").show();
  });

  $('.detail').click(
    function() {

      $("#sidemapCard").show(); // map2 - show first to maximize time tiles have to see full size of map div.

      // Reduce the size of all circles - to do: when zoom is going in 
      /* No effect
      dp.group2.eachLayer(function (marker) { // This hits every point individually. A CSS change might be less script processing intensive
        //console.log('zoom ' + map.getZoom());
        if (marker.setRadius) {
          console.log("marker.setRadius" + markerRadiusSmall(1,map2));
          marker.setRadius(markerRadiusSmall(1,map2));
        }
      });
      */
      

      $('.detail').css("border","none");
      $('.detail').css("background-color","inherit");
      $('.detail').css("padding","12px 0 12px 4px");

      console.log("detail click");
      $('#sidemapName').text($(this).attr("name"));

      $(this).css("border","1px solid #ccc");
      $(this).css("background-color","rgb(250, 250, 250)");
      $(this).css("padding","15px");

      

      popMapPoint(dp, map2, $(this).attr("latitude"), $(this).attr("longitude"), $(this).attr("name"));

      window.scrollTo({
        top: $("#sidemapCard").offset().top - 140,
        left: 0
      });
      $(".go_local").show();
    }
  );
  $('.showItemMenu').click(function () {
    $("#itemMenu").show();

    $("#itemMenu").prependTo($(this).parent());

    event.stopPropagation();
    //$("#map").show();
    // $(this).css('border', 'solid 1px #aaa');
  });
  $('.showLocMenu').click(function () {
    $(".locMenu").show();
    //event.stopPropagation();
  });
  $('#hideSideMap').click(function () {
    $("#sidemapCard").hide(); // map2
  });

}

function markerRadiusSmall(radiusValue,map) {
  return .00001;
}
function markerRadius(radiusValue,map) {
  //return 100;
  // Standard radiusValue = 1
  let mapZoom = map.getZoom();
  let smallerWhenClose = 30;
  if (mapZoom >= 5) { smallerWhenClose = 20};
  if (mapZoom >= 8) { smallerWhenClose = 15};
  if (mapZoom >= 9) { smallerWhenClose = 10};
  if (mapZoom >= 10) { smallerWhenClose = 4};
  if (mapZoom >= 11) { smallerWhenClose = 1.8};
  if (mapZoom >= 12) { smallerWhenClose = 1.4};
  if (mapZoom >= 13) { smallerWhenClose = 1};
  if (mapZoom >= 14) { smallerWhenClose = .8};
  if (mapZoom >= 15) { smallerWhenClose = .4};
  if (mapZoom >= 17) { smallerWhenClose = .3};
  if (mapZoom >= 18) { smallerWhenClose = .2};
  if (mapZoom >= 20) { smallerWhenClose = .1};
  let radiusOut = (radiusValue * 2000) / mapZoom * smallerWhenClose;

  //console.log("mapZoom:" + mapZoom + " radiusValu:" + radiusValue + " radiusOut:" + radiusOut);
  return radiusOut;
}

// MAP 1
// var map1 = {};
function loadMap1(dp) { // Also called by search-filters.js
  console.log('loadMap1');

  // Note: light_nolabels does not work on https. Remove if so. Was positron_light_nolabels.
  var basemaps1 = {
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

  // This was outside of functions, but caused error because L was not available when dual-map.js loaded before leaflet.
  // Not sure if it was working, or if it will contine to work here.
  // Recall existing map https://github.com/Leaflet/Leaflet/issues/6298
  // https://plnkr.co/edit/iCgbRjW4aymAjoVoicZQ?p=preview&preview
  L.Map.addInitHook(function () {
    // Store a reference of the Leaflet map object on the map container,
    // so that it could be retrieved from DOM selection.
    // https://leafletjs.com/reference-1.3.4.html#map-getcontainer
    this.getContainer()._leaflet_map = this;
  });

  let community_root = dual_map.community_root();

  let dp1 = {}
  // Might use when height it 280px
  dp1.latitude = 31.6074;
  dp1.longitude = -81.8854;

  // Georgia
  dp1.latitude = 32.9;
  dp1.longitude = -83.4;
  dp1.zoom = 7;
  dp1.listLocation = false; // Hides Waze direction link in list, remains in popup.

  if (dp) { // Paraters set in page or layer json
    dp1 = dp;
  } else if (param["show"] == "smart" || param["data"] == "smart") {
    dp1.listTitle = "Data Driven Decision Making";
    dp1.listSubtitle = "Smart & Sustainable Movement of Goods & Services";
    // Green Locations offer <span style="white-space: nowrap">prepared food<br>Please call ahead to arrange pickup or delivery</span>

    
    //community_root = "https://model.earth/community/"; // CORS would need to be adjusted on server
    //alert(community_root + "tools/map.csv");

    dp1.shortTitle = "Communities";
    dp1.dataset =  community_root + "tools/map.csv";
    dp1.listInfo = "Includes Georgia Smart Community Projects";
    dp1.search = {"In Title": "title", "In Description": "description", "In Website URL": "website", "In Address": "address", "In City Name": "city", "In Zip Code" : "zip"};

    // Georgia
    dp1.latitude = 32.9;
    dp1.longitude = -83.4;
    
    dp1.markerType = "google";
     

  } else if (param["show"] == "logistics") { // "http://" + param["domain"]

    dp1.listTitle = "Logistics";

    dp1.listInfo = "Select a category to filter your results.";
    //dp1.dataset = "https://georgiadata.github.io/display/data/logistics/coi_with_cognito.csv";
    dp1.dataset = "../../display/data/logistics/coi_with_cognito.csv";

    dp1.dataTitle = "Manufacturers and Distributors";
    dp1.itemsColumn = "items";
    dp1.valueColumn = "type";
    dp1.valueColumnLabel = "Type";
    dp1.markerType = "google";
    //dp1.keywords = "items";
    // "In Business Type": "type", "In State Name": "state", "In Postal Code" : "zip"
    dp1.search = {"In Items": "items", "In Website URL": "website", "In City Name": "city", "In Zip Code" : "zip"};
    dp1.nameColumn = "title";
    dp1.latColumn = "lat_rand";
    dp1.lonColumn = "lon_rand";

    dp1.nameColumn = "company";
    dp1.latColumn = "latitude";
    dp1.lonColumn = "longitude";
    dp1.showLegend = false;

    dp1.listLocation = false;
    dp1.addLink = "https://www.georgia.org/covid19response"; // Not yet used
  } else if (param["show"] == "suppliers") { // "http://" + param["domain"]

    dp1.listTitle = "Georgia COVID-19 Response";
    dp1.listTitle = "Georgia Suppliers of&nbsp;Critical Items <span style='white-space:nowrap'>to Fight COVID-19</span>"; // For iFrame site

    dp1.listInfo = "Select a category to the left to filter results. View&nbsp;<a href='https://www.georgia.org/sites/default/files/2020-07/ga-suppliers_list.pdf' target='_parent'>PDF&nbsp;version</a>&nbsp;of&nbsp;the&nbsp;complete&nbsp;list.";
    dp1.dataset = "https://georgiadata.github.io/display/products/suppliers/us_ga_suppliers_ppe_2020_07_01.csv";
    //dp1.dataset = "/display/products/suppliers/us_ga_suppliers_ppe_2020_06_17.csv";

    dp1.dataTitle = "Manufacturers and Distributors";
    dp1.itemsColumn = "items";
    dp1.valueColumn = "type";
    dp1.valueColumnLabel = "Type";
    dp1.markerType = "google";
    //dp1.keywords = "items";
    // "In Business Type": "type", "In State Name": "state", "In Postal Code" : "zip"
    dp1.search = {"In Items": "items", "In Website URL": "website", "In City Name": "city", "In Zip Code" : "zip"};
    dp1.nameColumn = "title";
    dp1.latColumn = "lat_rand";
    dp1.lonColumn = "lon_rand";

    if (param["initial"] != "response") {
      dp1.nameColumn = "company";
      dp1.latColumn = "latitude";
      dp1.lonColumn = "longitude";
      dp1.showLegend = false;
    }

    dp1.listLocation = false;
    dp1.addLink = "https://www.georgia.org/covid19response"; // Not yet used

  } else if (param["show"] == "restaurants") {
    // Fulton County 5631 restaurants
    
    dp1 = {};
    dp1.listTitle = "Restaurant Ratings";
    dp1.dataTitle = "Restaurant Ratings";
    dp1.dataset = "/community/tools/map.csv";
    dp1.latitude = 32.9;
    dp1.longitude = -83.4;

    //dp1.showLayer = false;
    dp1.name = "Fulton County Restaurants";
    dp1.titleColumn = "restaurant";
    dp1.nameColumn = "restaurant";

    dp1.valueColumnLabel = "Health safety score";
    dp1.valueColumn = "score";
    dp1.scale = "scaleThreshold";

    dp1.latColumn = "latitude";
    dp1.lonColumn = "longitude";

    dp1.dataset = "/community/farmfresh/usa/georgia/fulton_county_restaurants.csv"; // Just use 50
    dp1.dataTitle = "Restaurant Scores";
    dp1.titleColumn = "restaurant";
    dp1.listInfo = "Fulton County";
  } else if (param["show"] == "pickup") {
    // Atlanta Pickup
    dp1.latitude = 33.76;
    dp1.longitude = -84.3880;
    dp1.zoom = 14;

    // CURBSIDE PICKUP
    dp1.listTitle = "Restaurants with Curbside Pickup";
    dp1.listInfo = "Data provided by coastapp.com. <a href='https://coastapp.com/takeoutcovid/atl/' target='_blank'>Make Updates</a>";
    dp1.dataset = "/community/places/usa/ga/restaurants/atlanta-coastapp.csv";
    dp1.dataTitle = "Curbside Pickup";
    // 
    dp1.markerType = "google";
    dp1.search = {"In Restaurant Name": "Name", "In Description": "Description", "In City Name": "City", "In Address" : "Address"};
    dp1.nameColumn = "Name";
    dp1.titleColumn = "Description";
    //dp1.addressColumn = "Address";
    //dp1.website = "Link";
    dp1.valueColumnLabel = "Delivery";
    dp1.valueColumn = "Delivery";
    dp1.listLocation = true;
  //} else if (param["show"] == "produce" || param["design"]) {
  } else { // || param["show"] == "mockup"
    dp1.listTitle = "USDA Farm Produce (mockup)";
    dp1.dataset = community_root + "map/starter/farmersmarkets-ga.csv";
    dp1.name = "Local Farms"; // To remove
    dp1.dataTitle = "Farm Fresh Produce";
    dp1.markerType = "google";
    dp1.search = {"In Market Name": "MarketName","In County": "County","In City": "city","In Street": "street","In Zip": "zip","In Website": "Website"};
    dp1.nameColumn = "marketname";
    dp1.titleColumn = "marketname";
    dp1.searchFields = "marketname";
    dp1.addressColumn = "street";
    dp1.valueColumn = "Prepared";
    //dp1.valueColumn = "type";
    dp1.valueColumnLabel = "Prepared Food";
    dp1.latColumn = "y";
    dp1.lonColumn = "x";
    dp1.stateColumn = "state";

    dp1.addlisting = "https://www.ams.usda.gov/services/local-regional/food-directories-update";

    dp1.listInfo = "Green locations offer <span style='white-space: nowrap'>prepared food<br>Please call ahead to arrange pickup or delivery.</span><br>You can help keep this data current. <a style='white-space: nowrap' href='../farmfresh'>Learn about data</a>";
  }

  // Load the map using settings above
  loadFromCSV('map1','map2', dp1, basemaps1, basemaps2, function(results) {
      
      // CALLED WHENEVER FILTERS CHANGE

      //loadFromCSV('map1', 'map2', "/community/tools/map.csv", basemaps1, basemaps2, function(results) {
      // This function gets called by the geocode function on success
      //makeMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());

      // AVOID HERE - would create duplicate checkboxes
      // Could check if overlay already exists
      //layerControl['map1'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers
      //layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers
         
  });

  // MAP 2 - INTERMODAL PORTS - Includes Railroads layer
  if (1==2) {
      let dp2 = {
        selector: "aside.Intermodal_Ports",
        delimiter: ",",
        numColumns: ["lat","lon"],
        valueColumn: "value",
        scaleType: "scaleOrdinal",
        //scaleType: "scaleQuantile",
        //scaleType: "scaleThreshold",
      }
      //dp2.name = dp2.selector.split(".").pop(); // name: Intermodal_Ports
      dp2.name = "Intermodal Ports";
      dp2.listLocation = false;

      dp2.latitude = 31.6074;
      dp2.longitude = -81.8854;
      // Bruswick GA - Jesup was not centering
      dp2.latitude = 31.1500;
      dp2.longitude =  -81.4915;

      dp2.zoom = 8;
      dp2.markerType = "google";
      dp2.data = readData(dp2.selector, dp2.delimiter, dp2.numColumns, dp2.valueColumn);
      //dp2.color = '#0033ff'; // Alternative to scale
      dp2.scale = getScale(dp2.data, dp2.scaleType, dp2.valueColumn);

      dp2.group = L.layerGroup();
      //dp2.group2 = L.layerGroup();
      //dp2.iconName = 'device_hub';
      dp2.iconName = "language";
      dp2.nameColumn = "group";
      

      //dataParameters.push(dp2);

      // Legend needs to reside below map on left, or in side popup
      //addLegend(dp2.scale, dp2.scaleType, dp2.name);

      populateMap('map2', dp2, function(map) { // Called on success

        // Add another layer to existing map
        dp2 = {}
        dp2.name = "Communities";
        dp2.dataset = "/community/tools/map.csv";
        loadFromCSV('map1', 'map2', dp2, basemaps1, basemaps2, function(results) {
          // Add Railroad layer
          layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers
        });
      });
  }

  // Return to top for mobile users on search.
  if (document.body.clientWidth <= 500) {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }
}



function showList(dp,map) {
  var iconColor, iconColorRGB;
  var colorScale = dp.scale;
  let count = 0;

  var productMatchFound = 0;
  var dataMatchCount = 0;
      // Keyword Search
  var keyword = "";
  var products = "";
  var productcodes = "";
  var products_array = [];
  var productcode_array = [];

  if (dp.shortTitle) {$(".shortTitle").html(dp.shortTitle); $(".shortTitle").show()};
  if (dp.listTitle) {$(".listTitle").html(dp.listTitle); $(".listTitle").show()};
  if (dp.listSubtitle) {$(".listSubtitle").html(dp.listSubtitle); $(".listSubtitle").show()};

  // Add checkboxes
  if (dp.search && $("#activeLayer").text() != dp.dataTitle) { // Only set when active layer changes, otherwise selection overwritten on change.
    
    let search = [];
    if (param["search"]) {
      search = param["search"].split(",");
    }

    let checkCols = "";
    let checked = "";
    $.each(dp.search, function( key, value ) {
      checked = "";
      if (search.length == 0) {
        checked = "checked"; // No hash value limiting to specific columns.
      } else if(jQuery.inArray(value, search) !== -1) {
        checked = "checked";
      }

      checkCols += '<div><input type="checkbox" class="selected_col" name="in" id="' + value + '" ' + checked + '><label for="' + value + '" class="filterCheckboxTitle"> ' + key + '</label></div>';
    });
    $("#selected_col_checkboxes").html(checkCols);

    // BUGBUG - When toggling the activeLayer is added, this will need to be cleared to prevent multiple calls to loadMap1
     
    $('.selected_col[type=checkbox]').change(function() {
        //$('#topPanel').hide();
        let search = $('.selected_col:checked').map(function() {return this.id;}).get().join(','); 
        //alert(search)
        /* delete
        var hash = getHash(); 
        if (hash["q"]) {
          alert(hash["q"])
        }
        */
        if ($("#keywordsTB").val()) {
          updateHash({"search":search});
          loadMap1();
        }
        event.stopPropagation();
    });

  }


  var allItemsPhrase = "all categories";
  if ($("#keywordsTB").val()) {
    keyword = $("#keywordsTB").val().toLowerCase();
  }
  if ($("#catSearch").val()) {
    products = $("#catSearch").val().replace(" AND ",";").toLowerCase().replace(allItemsPhrase,"");
    products_array = products.split2(/\s*;\s*/);
  }
  if ($("#productCodes").val()) {
    // For each product ID - Still to implement, copied for search-filters.js
    productcodes = $("#productCodes").val().replace(";",",");
    productcode_array = productcodes.split2(/\s*,\s*/); // Removes space when splitting on comma
  }

  let selected_col = [];
  selected_col = $('.selected_col:checked').map(function() {return this.id;});
  //let selected_columns_object = {}; // For count of each

  if (selected_col.length == 0 && keyword && keyword != allItemsPhrase && products_array.length == 0) {
    $("#keywordFields").show();
    alert("Please check at least one column to search.")
  }
  var data_out = []; // An array of objects

  $("#detaillist").text(""); // Clear prior results

  dp.data.forEach(function(elementRaw) {
    count++;
    foundMatch = 0;
    productMatchFound = 0;
    /*
    if (keyword == allItemsPhrase) { // Use a div argument instead
        keyword == ""; products = "";
        $("#keywordsTB").text(""); // Not working
        foundMatch++;
    } else 
    */
    
    /*
    if (products == allItemsPhrase) {
        console.log("products == allItemsPhrase")
        productMatchFound++;
    } else 
    */

    //if (keyword.length > 0 || products_array.length > 0 || productcode_array.length > 0) {

          if (products_array.length > 0) {
            for(var p = 0; p < products_array.length; p++) { // A list from #catSearch field
              if (products_array[p].length > 0) {

                  if (elementRaw[dp.itemsColumn] && elementRaw[dp.itemsColumn].toLowerCase().indexOf(products_array[p].toLowerCase()) >= 0) {

                    productMatchFound++;

                    //console.log("foundMatch: " + elementRaw[dp.itemsColumn] + " contains: " + products_array[p]);
                    
                  } else {
                    //console.log("No Match: " + elementRaw[dp.itemsColumn] + " does not contain: " + products_array[p]);
                  }
              }
            }
          } else {
            productMatchFound = 1; // Matches all products
          }

          if (keyword.length > 0) {

            //console.log("Search for " + keyword);

            
            if (typeof dp.search != "undefined") { // An object containing interface labels and names of columns to search.
              //var selected_col = {};

              $.each(selected_col, function( key, value ) { // Works for arrays and objects. key is the index value for arrays.
                //selected_columns_object[key] = 0;
                if (elementRaw[value]) {
                  if (elementRaw[value].toString().toLowerCase().indexOf(keyword) >= 0) {
                    //console.log("FoundMatch for " + value);

                    // Write this tighter
                    /*
                    if (selected_columns_object[key]) {
                     selected_columns_object[key] = selected_columns_object[key]+1;
                     selected_col[key].count = selected_col[key].count+1;
                    } else {
                      selected_columns_object[key] = 1;
                      selected_columns_object[key]["value"] = value;

                      selected_col[key].count = 1;
                      selected_col[key].value = value;
                    }
                    */

                    foundMatch++;
                  }
                }

              });

              
            } else { // dp.search is not defined, so try titlecolumn
              //console.log("no dp.search, try: " + elementRaw[dp.titleColumn]);
              if (elementRaw[dp.titleColumn] && elementRaw[dp.titleColumn].toLowerCase().indexOf(keyword) >= 0) {
                console.log("foundMatch in title");
                foundMatch++;
              }
              if (elementRaw[dp.valueColumn] && elementRaw[dp.valueColumn].toLowerCase().indexOf(keyword) >= 0) {
                console.log("foundMatch in value");
                foundMatch++;
              }

              // MIGHT REMOVE
              if ($("#findKeywords").is(":checked") > 0 && elementRaw[dp.keywords] && elementRaw[dp.keywords].toLowerCase().indexOf(keyword) >= 0) {
                console.log("SWITCH TO SEACH OBJECT - foundMatch keywords");
                foundMatch++;
              }

            }

            

            /*
            //if ($(dataSet[i][0].length > 0)) {
              if ($("#findCompany").is(":checked") > 0 && dataSet[i][0].toString().toLowerCase().indexOf(keyword) >= 0) {
                console.log("foundMatch A");
                foundMatch++;
              }
            //}
            if ($("#findWebsite").is(":checked") > 0 && dataSet[i][1].toString().toLowerCase().indexOf(keyword) >= 0) {
              console.log("foundMatch B");
              foundMatch++;
            }
            if ($("#findDetails").is(":checked") > 0 && dataSet[i][2].toString().toLowerCase().indexOf(keyword) >= 0) {
              console.log("foundMatch C");
              foundMatch++;
            }
            if ($("#findProduct").is(":checked") > 0 && dataSet[i][3].toString().toLowerCase().indexOf(keyword) >= 0) {
              console.log("foundMatch D");
              foundMatch++;
            }
            if ($("#findProduct").is(":checked") > 0 && dataSet[i][4].toString().toLowerCase().indexOf(keyword) >= 0) { // Description
              console.log("foundMatch E");
              foundMatch++;
            }
            */

          } else {
            foundMatch++; // No keyword filter
          }

          if (1==2) { // Not yet tested here
            console.log("Check if listing's product HS codes match.");
            for(var pc = 0; pc < productcode_array.length; pc++) { 
              if (productcode_array[pc].length > 0) {
                if (isInt(productcode_array[pc])) { // Int
                  //var codesArray = $(this.childNodes[3]).text().replace(";",",").split(/\s*,\s*/);
                  var codesArray = dataSet[i][5].toString().replace(";",",").split2(/\s*,\s*/);
                  for(var j = 0; j < codesArray.length; j++) {
                    if (isInt(codesArray[j])) {
                      if (codesArray[j].startsWith(productcode_array[pc])) { // If columns values start with search values.
                        console.log("codesArray " + j + " " + codesArray[j] + " starts with " + productcode_array[pc]);
                      
                        console.log("foundMatch D");
                        productMatchFound++; // Might not be needed here
                        foundMatch++;
                        //$(this).show();
                      }
                    }
                  }
                } else {
                  console.log("productcode not int")
                  // TO DO: Match the product description instead.

                    //productMatchFound++;

                }
              }
            }
          }

    //} else {
    //  // Automatically find match since there are no filters
    //  //console.log("foundMatch - since no filters");
    //  foundMatch++;
    //}

    //console.log("foundMatch: " + foundMatch + ", productMatchFound: " + productMatchFound);

    if (foundMatch > 0 && productMatchFound > 0) {
      dataMatchCount++;
    //if (count <= 500) {

      data_out.push(elementRaw);
      var key, keys = Object.keys(elementRaw);
      var n = keys.length;
      var element={};
      while (n--) {
        key = keys[n];
        //element[key] = elementRaw[key]; // Also keep uppercase for element["Prepared"]
        element[key.toLowerCase()] = elementRaw[key];
      }

      iconColor = colorScale(element[dp.valueColumn]);
      if (dp.color) { 
        iconColor = dp.color;
      }
      //iconColorRGB = hex2rgb(iconColor);

      //console.log("element state2 " + element.state + " iconColor: " + iconColor)


      /*
      // Make dp lowercase and add element.
      var key, keys = Object.keys(dp);
      var n = keys.length;
      var element={};
      while (n--) {
        key = keys[n];
        if (key != "data") { // Skip dp.data
          element[key.toLowerCase()] = dp[key];
          // BUGBUG, did I accidentally leave off second () here:
          dp[key.toLowerCase()] = dp[key].toLowerCase; // Creates some dups, but fastest that way. Lowercase values then match below
        }
      }
      */

      // Bug, this overwrote element.latitude and element.longitude
      //element = mix(dp,element); // Adds existing column names, giving priority to dp assignments made within calling page.
      
      let name = element.name;
      if (element[dp.nameColumn]) {
        name = element[dp.nameColumn];
      } else if (element.title) {
        name = element.title;
      }

      // TO INVESTIGATE - elementRaw (not element) has to be used here for color scale.

      // DETAILS LIST
      // colorScale(element[dp.valueColumn])
      //console.log("iconColor test here: " + iconColor)
      //console.log("color test here: " + colorScale(elementRaw[dp.valueColumn]))

      if (element[dp.latColumn] && element[dp.lonColumn]) {
        output = "<div class='detail' name='" + name.replace(/'/g,'&#39;') + "' latitude='" + element[dp.latColumn] + "' longitude='" + element[dp.lonColumn] + "'>";
      } else {
        output = "<div class='detail' name='" + name.replace(/'/g,'&#39;') + "'>";
      }

      output += "<div class='showItemMenu' style='float:right'>&mldr;</div>"; 
      output += "<div style='padding-bottom:4px'><div style='width:15px;height:15px;margin-right:6px;margin-top:8px;background:" + colorScale(elementRaw[dp.valueColumn]) + ";float:left'></div>";

      //output += "<div style='position:relative'><div style='float:left;min-width:28px;margin-top:2px'><input name='contact' type='checkbox' value='" + name + "'></div><div style='overflow:auto'><div>" + name + "</div>";
                
      //output += "<div style='overflow:auto'>";
      
      output += "<b style='font-size:20px; font-weight:400; color:#333;'>" + name + "</b></div>";
      if (element[dp.description]) {
        output += "<div style='padding-bottom:8px'>" + element[dp.description] + "</div>";
      } else if (element.description) {
        output += "<div style='padding-bottom:8px'>" + element.description + "</div>";
      }

      // Lower
      output += "<div style='font-size:0.95em;line-height:1.5em'>";

      if (element[dp.valueColumn]) {
        if (dp.valueColumnLabel) {
          output += "<b>" + dp.valueColumnLabel + ":</b> " + element[dp.valueColumn] + "<br>";
        } else if (element[dp.valueColumn] != element.name) {
          output += element[dp.valueColumn] + "<br>";
        }
      }
      if (element.items) {
        output += "<b>Items:</b> " + element.items + "<br>";
      }
      
      if (element[dp.addressColumn]) { 
          output +=  element[dp.addressColumn] + "<br>"; 
      } else if (element.address || element.city || element.state || element.zip) { 
        output += "<b>Location:</b> ";
        if (element.address) {
          output += element.address + "<br>";
        }
        if (element.city) {
          output += element.city;
        }
        if (element.state || element.zip) {
          output += ", ";
        }
        if (element.state) {
          output += element.state + " ";
        }
        if (element.zip) {
          output += element.zip;
        }
        if (element.city || element.state || element.zip) {
          output += "<br>";
        }
      }

      if (element.phone || element.phone_afterhours) {
        if (element.phone) {
          output += element.phone + " ";
        }
        if (element.phone_afterhours) {
         output += element.phone_afterhours;
        }
        output += "<br>";
      }

      if (element.schedule) {
        output += "<b>Hours:</b> " + element.schedule + "<br>";
      }

      //alert(dp.listLocation)
      if (dp.listLocation != false) {
        
        if (element[dp.latColumn]) {
            output += "<a href='https://www.waze.com/ul?ll=" + element[dp.latColumn] + "%2C" + element[dp.lonColumn] + "&navigate=yes&zoom=17'>Waze Directions</a>";
        }
      }

      if (element.facebook) {
        if (element.facebook.toLowerCase().indexOf('facebook.com') < 0) {
          element.facebook = 'https://facebook.com/search/top/?q=' + element.facebook.replace(/'/g,'%27').replace(/ /g,'%20')
        }
        if (element[dp.latColumn] && dp.listLocation != false) {
          output += " | ";
        }
        output += "<a href='" + element.facebook + "' target='_blank'>Facebook</a>";
      }
      if (element.twitter) {
        if (element[dp.latColumn] || element.facebook) {
          output += " | ";
        }
        output += "<a href='" + element.twitter + "' target='_blank'>Twitter</a>";
      }
      if ((element[dp.latColumn] && dp.listLocation != false) || element.facebook || element.twitter) {
        output += "<br>";
      }

      if (element.county) {
        output += element.county + " County<br>";
      }

      if (element.website) {
        if (element.website.length <= 50) {
          output += "<b>Website:</b> <a href='" + element.website + "' target='_blank'>" + element.website.replace("https://","").replace("http://","").replace("www.","").replace(/\/$/, "") + "</a><br>";
        } else {
          // To Do: Display domain only
          output += "<b>Website:</b> <a href='" + element.website + "' target='_blank'>" + element.website.replace("https://","").replace("http://","").replace("www.","").replace(/\/$/, "") + "</a><br>"; 
        }
      }

      output += "</div>"; // End Lower
      output += "</div>"; // End detail

      $("#detaillist").append(output);
    }
    

  });
  
  // BUGBUG - May need to clear first to avoid multiple calls.
  $('.detail').mouseover(
      function() { 
        //popMapPoint(dp, map, $(this).attr("latitude"), $(this).attr("longitude"));
      }
  );

  var imenu = "<div style='display:none'>";
  imenu += "<div id='itemMenu' class='popMenu filterBubble'>";
  imenu += "<div>View On Map</div>";
  imenu += "<div class='localonly mock-up' style='display:none'>Supplier Impact</div>";
  imenu += "<div class='localonly mock-up' style='display:none'>Production Impact</div>";
  imenu += "<div class='localonly mock-up' style='display:none'>Add to Collections</div>";
  imenu += "<hr class='localonly mock-up' style='display:none;padding:0px !important'>";
  imenu += "<div class='localonly mock-up' style='display:none' id='showLocalNews'>Submit Updates</div>";
  imenu += "</div>";
  imenu += "</div>";
  $("body").append(imenu);

  var locmenu = "<div class='showLocMenu' style='float:right;font-size: 24px;cursor: pointer;'>…</div>";
  locmenu += "<div class='locMenu popMenu filterBubble' style='float:right;display:none'>";
  locmenu += "<div class='filterBubble'>";
  locmenu += "<div id='hideSidemap' class='close-X' style='position:absolute;right:0px;top:8px;padding-right:10px;color:#999'>&#10005; Close Map</div>";
  locmenu += "</div>";
  locmenu += "</div>";
  //$("#sidemapbar").prepend(locmenu);

  if (dataMatchCount > 0) {
      let searchFor = "";
      if ($("#catSearch").val()) {
        searchFor = "<b>" + $("#catSearch").val() + "</b> - "; // was twice BUGBUG
      }
      if (dataMatchCount == count) {
        searchFor += dataMatchCount + " records. " + dp.listInfo + "<br>";
      } else if (count==1) {
        searchFor += dataMatchCount + " matching results within " + count + " records. " + dp.listInfo + "<br>";
      } else {
        searchFor += dataMatchCount + " matching results within " + count + " records. " + dp.listInfo + "<br>";
      }
      $("#dataList").html(searchFor);
      $("#resultsPanel").show();
      $("#dataList").show();

      //console.log(selected_col);
      //alert(selected_columns_object[2].value)
  } else {
      $("#dataList").html("No match found in " + count + " records. <a href='#' onclick='clickClearButton();return false;'>Clear Filters</a><br>");
          
    var noMatch = "<div>No match found in " + (dataSet.length - 1) + " records. <a href='#' onclick='clickClearButton();return false;'>Clear filters</a>.</div>"
    $("#nomatchText").html(noMatch);
    $("#nomatchPanel").show();
  }

  $(document).click(function(event) { // Hide open menus
      $('#itemMenu').hide();
      $('#locMenu').hide();
  });

  dp.data = data_out;
  return dp;
}

function popMapPoint(dp, map, latitude, longitude, name) {
  let center = [latitude,longitude];
  map.flyTo(center, 15); // 19 in lake

  // Add a single map point
  var iconColor, iconColorRGB, iconName;
  var colorScale = dp.scale;

  iconColor = "#440";
  if (dp.color) {
    iconColor = dp.color;
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

  //dp.group2.clearLayers();

  // Attach the icon to the marker and add to the map
  //dp.group2 = 

  // To do: Make this point clickable. Associate popup somehow.
  circle = L.marker([latitude,longitude], {icon: busIcon}).addTo(map)
  circle.bindPopup(name);


  //var markerGroup = L.layerGroup().addTo(map);
  //L.marker([latitude,longitude]).addTo(markerGroup);

  // Didn't work here
  /*
  if (dp.markerType == "google") {
      if (location.host == 'georgia.org' || location.host == 'www.georgia.org') {
        circle = L.marker([element[dp.latColumn], element[dp.lonColumn]]).addTo(dp.group);
      } else {
        // If this line returns an error, try setting dp1.latColumn and dp1.latColumn to the names of your latitude and longitude columns.
        circle = L.marker([latitude,longitude], {icon: busIcon}).addTo(dp.group); // Works, but not in Drupal site.
      }
  } else {
    circle = L.circle([element[dp.latColumn], element[dp.lonColumn]], {
              color: colorScale(element[dp.valueColumn]),
              fillColor: colorScale(element[dp.valueColumn]),
              fillOpacity: 1,
              radius: markerRadius(1,map) // was 50.  Aiming for 1 to 10
          }).addTo(dp.group);
  }
  */
  if (param["initial"] == "response") {
    if (dp.public == "Yes") {
      $(".suppliers_pre_message").hide();
    } else {
      //alert(dp.public)
      $(".suppliers_pre_message").show();
    }
  }
}
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
  //console.log(_data); // Careful, this can overwhelm browser
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
    $('.headerOffset').hide();
    revealHeader = true; // For next manual scroll
  } else if ($(window).scrollTop() > previousScrollTop) { // Scrolling Up
    if ($(window).scrollTop() > previousScrollTop + 20) { // Scrolling Up fast
      $('.headerbar').hide();
      $('.headerOffset').hide();
    }
  } else { // Scrolling Down
    if ($(window).scrollTop() < (previousScrollTop - 20)) { // Reveal if scrolling down fast
      $('.headerbar').show();
      $('.headerOffset').show();
    } else if ($(window).scrollTop() == 0) { // At top
      $('.headerbar').show();
      $('.headerOffset').show();
    }
  }
  previousScrollTop = $(window).scrollTop();

  lockSidemap(mapFixed);
});
function lockSidemap() {
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
  } else if (topReached('#hublist')) {
    if (mapFixed==false) {
      let mapHolderInner = $('.mapHolderInner').width();
      //alert(mapHolderInner)
      $('.mapHolderInner').addClass('mapHolderFixed');
      $(".mapHolderInner").css("width",mapHolderInner);
      $('.mapHolderInner').removeClass('mapHolderBottom');
      //alert("fixed position")
      mapFixed = true;
    }
  } else if(!topReached('#hublist') && mapFixed == true) { // Not top reached (scrolling down)
    $('.mapHolderInner').removeClass('mapHolderFixed');
    mapFixed = false;
  }
}
console.log('hello from dual map');