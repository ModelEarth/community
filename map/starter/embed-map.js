
/*
// EMBED MAP
// Generate the script below by pasting index.html into:
// http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
// Final version resides in embed-map.js
*/

// Add \r to end of aside rows manually.
var strVar="";
strVar += "<!-- Top Map -->";
strVar += "<style>";
strVar += "  #allLegends {";
strVar += "    color:#fff !important; ";
strVar += "  }";
strVar += "  #allLegends > .label {";
strVar += "    color:#fff !important; ";
strVar += "  }";
strVar += "  #map1 {";
strVar += "    height:400px;";
strVar += "  }";
strVar += "  #hublist-padding {";
strVar += "    padding-right: 30px;";
strVar += "  }";
strVar += "<\/style>";
strVar += "<aside class=\"Intermodal_Ports\" style=\"display:none\">";
strVar += "group,lat,lon,value,address,city,state,zip\r";
strVar += "Inman Rail Yard,33.795735,-84.439278,NS,1600 Marietta Rd NW,Atlanta,GA,30318\r";
strVar += "Savannah Yard,32.069578,-81.142174,CSX,3000 Tremont Ave,Savannah,GA,31405\r";
strVar += "James D. Mason ICTF,32.123934,-81.150914,NS,3 North Main St,Garden City,GA,31408\r";
strVar += "Fairburn Industry Yard,33.554907,-84.595026,CSX,6700 McLarin Rd,Fairburn,GA,30213\r";
strVar += "Whitaker Rail Yard,33.80944,-84.655451,NS,6000 Westside Rd,Austell,GA,30106\r";
strVar += "Chatham ICTF,32.125311,-81.151331,CSX,2 Main St,Garden City,GA,31408\r";
strVar += "Savannah,32.10035,-81.169963,NS,1 Charlie Gay Drive,Savannah,GA,31408\r";
strVar += "Cordele Intermodal Center,31.966779,-83.755101,Heart GA,2902 East 13th Ave.,Cordele,GA,31010\r";
strVar += "Port of Savannah Ocean Terminal,32.093702,-81.111692,\"Ro\/Ro, Breakbulk\",55 N Lathrop Ave,Savannah,GA,31415\r";
strVar += "Port of Brunswick,31.125887,-81.541194,\"Ro\/Ro, Agri-Bulk\",157 Penniman Cir,Brunswick,GA,31523\r";
strVar += "Port of Savannah,32.125,-81.151,Container,2 Main St,Savannah,GA,31407\r";
strVar += "Port of Brunswick Mayor's Point Terminal,31.143373,-81.494753,Breakbulk,1100 Bay Street,Brunswick,GA,31520\r";
strVar += "Port of Columbus,32.448734,-84.984038,Liquid Bulk,800 Lumpkin Blvd,Columbus,GA,31901\r";
strVar += "Port of Bainbridge,30.902867,-84.606259,Liquid\/Dry Bulk,1321 Spring Creek Road,Bainbridge,GA,39817\r";
strVar += "<\/aside>";
strVar += "<div class=\"displayOnload\" style=\"display:none;position:relative;\">";
strVar += "  <div id=\"map1\" style=\"display:none\"><\/div>";
strVar += "  <div id=\"legendHolder\">";
strVar += "    <div id=\"allLegends\"><\/div>";
strVar += "  <\/div>";
strVar += "<\/div>";
strVar += "<\/section>";
strVar += "<div style=\"clear:both\"><\/div>";
strVar += "<!-- END Top Map -->";

////document.body.prepend(strVar); // This displayed as HTML tags
//let div = document.createElement("div");
//div.innerHTML = strVar;
//document.body.append(div);
//strVar = "";

// Replace afer updating:
// Data Driven Decision Making
// Smart & Sustainable Movement of <span style=\"white-space: nowrap\">Goods &amp; Services</span>

strVar += "<!-- Start HTML -->";
strVar += "  <a name=\"gomap\"><\/a>";
strVar += "  <section id=\"data\" style=\"overflow:auto\">";
strVar += "    <div class=\"content displayOnload\" style=\"display:none\">";
strVar += "      <div id=\"flexwrapperX\">";
strVar += "        ";
strVar += "        <div id=\"mapHolder\">";
strVar += "          <div class=\"mapHolderInner\">";
strVar += "            <div class=\"mapHolderCard card\">";
strVar += "              <div id=\"sidemapbar\">";
strVar += "                <div style=\"position:absolute; left:0; padding:4px 4px 4px 10px\">";
strVar += "                  ";
strVar += "                  <div id=\"widgetTitle\">Connected Communities<\/div>";
strVar += "                <\/div>";
strVar += "              <\/div>";
strVar += "";
strVar += "              <div style=\"clear:both\">  ";
strVar += "                <div id=\"map2\"><\/div>";
strVar += "              <\/div>";
strVar += "";
strVar += "            <\/div>";
strVar += "          <\/div>";
strVar += "        <\/div>";
strVar += "      ";
strVar += "        <div id=\"hublist\">";
strVar += "          <div id=\"hublist-padding\">";
strVar += "            <h1>Data Driven Decision Making<\/h1>";
strVar += "            <h2 style=\"font-size: 18px; margin-bottom:0px; font-weight: 600\">Smart & Sustainable Movement of <span style=\"white-space: nowrap\">Goods &amp; Services</span><\/h2><br>";
strVar += "            ";
strVar += "              <!--";
strVar += "              <input type=\"button\" onclick=\"location.href='..\/..\/samples\/feed';\" ";
strVar += "              value=\"Add your data feeds\" style=\"margin-top:20px; padding:10px\" \/>";
strVar += "              <br><br>";
strVar += "              -->";
strVar += "";
strVar += "            <div id=\"detaillist\"><\/div>";
strVar += "            <div id=\"narrowlist\" style=\"display:none\"><\/div>";
strVar += "          <\/div>";
strVar += "        <\/div>";
strVar += "";
strVar += "      <\/div><!-- flexwrapper -->";
strVar += "    <\/div>  ";
strVar += "";
strVar += "  <\/section>";
strVar += "<!-- End HTML -->";



strVar += "<style>";
//strVar += "#mapHolder {display:none !important}";
//strVar += "#hublist{width:100% !important}";
strVar += "  <\/style>";

document.write(strVar);

// COMMON
function loadScript(url, callback)
{
	if (!document.getElementById(url)) { // Prevents multiple loads.
		var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;
		script.id = url; // Prevents multiple loads.
	    // Bind the event to the callback function. Two events for cross browser compatibility.
	    script.onreadystatechange = callback;
	    script.onload = callback;
        //$(document).ready(function () { // Only needed if appending to body
           var head = document.getElementsByTagName('head')[0];
	       head.appendChild(script);
        //});
        console.log("loadScript loaded: " + url);
	} else {
		console.log("loadScript script already available: " + url);
		callback();
	}
	// Nested calls are described here: https://books.google.com/books?id=ZOtVCgAAQBAJ&pg=PA6&lpg=PA6
}
function getUrlID(url,root) {
	let urlID = url.replace(root,"").replace("https://","").replace(/\//g,"-").replace(/\./g,"-");
	if (urlID.indexOf('?') > 0) {
        urlID = urlID.substring(0,urlID.indexOf('?')); // Remove parameter so ?v=1 is not included in id.
    }
    return urlID;
}
function includeCSS(url,root) {
    let urlID = getUrlID(url,root);
    if (!document.getElementById(urlID)) { // Prevents multiple loads.
        var link  = document.createElement('link');
        link.id   = urlID;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        //$(document).ready(function () { /* Not necessary if appending to head */
            //var body  = document.getElementsByTagName('body')[0];
            //body.appendChild(link);
        //});
        var head  = document.getElementsByTagName('head')[0];
        
        // Not using because css needs to follow site.css.
        //head.insertBefore(link, head.firstChild);
        // Beaware, not all html pages contain a head tag. https://www.stevesouders.com/blog/2010/05/11/appendchild-vs-insertbefore/
        // Also see "postscribe" use in this page.
        head.appendChild(link); // Since site-narrow.css comes after site.css
    }
}
var param = {};
param = loadParam(location.search,location.hash);
window.onhashchange = function() { // Refresh params values when user changes URL hash after #.
	params = loadParams(location.search,location.hash);	
	//alert(params.data);  
}
// Loads params with priority given to:
// 1. Hash values on URL.
// 2. Parameters on URL.
// 3. Parameters on javascript include file.
function loadParam(paramStr,hashStr) {
  let scripts = document.getElementsByTagName('script');
  let myScript = scripts[ scripts.length - 1 ];
  //let params = getParams(myScript.src); // Object

  let params = {};
  let includepairs = myScript.src.substring(myScript.src.indexOf('?') + 1).split('&');
  for (let i = 0; i < includepairs.length; i++) {
    let pair = includepairs[i].split('=');
    params[pair[0].toLowerCase()] = decodeURIComponent(pair[1]);
  }

  let pairs = paramStr.substring(paramStr.indexOf('?') + 1).split('&');
  for (let i = 0; i < pairs.length; i++) {
      if(!pairs[i])
          continue;
      let pair = pairs[i].split('=');
      params[decodeURIComponent(pair[0]).toLowerCase()] = decodeURIComponent(pair[1]);
   }

  let hashPairs = hashStr.substring(hashStr.indexOf('#') + 1).split('&');
  for (let i = 0; i < hashPairs.length; i++) {
      if(!hashPairs[i])
          continue;
      if (i==0 && hashPairs[i].indexOf("=") == -1) {
        params[""] = hashPairs[i];  // Allows for initial # params without =.
        continue;
      }
      let hashPair = hashPairs[i].split('=');
      params[decodeURIComponent(hashPair[0]).toLowerCase()] = decodeURIComponent(hashPair[1]);
   }
   return params;
}
// END COMMON

// UNIQUE TO PAGE
function jsLoaded(root) {	
	//loadScript(root + 'js/common/common.js');
	if (location.host.indexOf('localhost') >= 0) {
		loadScript(root + 'js/common/navigation.js');
	}
}
function leafletLoaded(root) {	
	loadScript(root + 'js/leaflet/leaflet.icon-material.js');
	loadScript(root + 'js/common/dual-map.js', function(results) {
		
		dualmapLoaded(param);
		
	});
}
function d3Loaded(root) {
	loadScript(root + 'js/d3/d3-legend.js');
}
function lazyLoadFiles() {
	let root = location.protocol + '//' + location.host + '/community/';
	if (location.host.indexOf('localhost') < 0) {
		root = "https://model.georgia.org/community/";
	}
	includeCSS(root + 'css/community.css',root);
	includeCSS(root + 'css/leaflet/leaflet.css',root);
	includeCSS('https://fonts.googleapis.com/icon?family=Material+Icons',root);
	includeCSS(root + 'css/leaflet/leaflet.icon-material.css',root);
	includeCSS(root + 'css/map.css',root);

	loadScript(root + 'js/jquery/jquery-1.12.4.min.js', function(results) {
		jsLoaded(root);
	});

	// Required by leafletLoaded that follows
	loadScript(root + 'js/d3/d3.v5.min.js', function(results) {
		d3Loaded(root);
	});

	// Resides AFTER css/leaflet/leaflet.css
	loadScript(root + 'js/leaflet/leaflet.js', function(results) {
		leafletLoaded(root);
	});
}
//var L;

lazyLoadFiles();

function dualmapLoaded(param) {
	let root = "https://modelearth.github.io/community/";
	//root = "https://model.earth/community/"; // CORS would need to be adjusted on server
	//alert(root + "tools/map.csv");

	if (param.data != "smart") {
		document.getElementById("map1").style.display = "block";
		// INTERMODAL PORTS
	    let dp1 = {
	      selector: "aside.Intermodal_Ports",
	      delimiter: ",",
	      numColumns: ["lat","lon"],
	      valueColumn: "value",
	      scaleType: "scaleOrdinal",
	      //scaleType: "scaleQuantile",
	      //scaleType: "scaleThreshold",
	    }
	    //dp1.name = dp.selector.split(".").pop(); // name: Intermodal_Ports
	    dp1.dataTitle = "Intermodal Ports"
	    dp1.markerType = "google";
	    dp1.data = readData(dp1.selector, dp1.delimiter, dp1.numColumns, dp1.valueColumn);
	    //dp1.color = '#0033ff'; // Alternative to scale
	    dp1.scale = getScale(dp1.data, dp1.scaleType, dp1.valueColumn);

	    // Atlanta
    	dp1.latitude = 33.7490;
    	dp1.longitude = -84.3880;

	    dp1.group = L.layerGroup();
	    //dp1.group2 = L.layerGroup();
	    //dp1.iconName = 'device_hub';
	    dp1.iconName = 'language';
	    //dataParameters.push(dp1);
	    dp1.nameColumn = "group";
	    
	    populateMap('map1', dp1, function(results) {
		    loadScript(root + 'js/d3/d3-legend.js', function(results){
		    	addLegend(dp1.scale, dp1.scaleType, dp1.name);
		    });

		    layerControl['map1'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers
	    });
	}

	// MAP 2
	let dp2 = {
      dataset: root + "tools/map.csv"
    }
    // Georgia
    dp2.latitude = 32.9;
    dp2.longitude = -83.4;
    
    dp2.markerType = "google";
	loadFromCSV('map2', dp2, function(results) {
		//alert("back");
	//loadFromCSV('map2', "/community/tools/map.csv", function(results) {
        // This function gets called by the geocode function on success
        //makeMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
        layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers
           
    });
}


/*
loadFromCSV('map2', "/community/tools/map.csv", function(results) {
    // This function gets called by the geocode function on success
    //makeMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());

    layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers      
});
*/




