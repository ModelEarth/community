
/*
// EMBED MAP
// Generate the script below by pasting index.html into:
// http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
// Final version resides in embed-map.js
*/

var strVar="";
strVar += "<!-- Top Map -->";
strVar += "<style>";
strVar += "  #allLegends {";
strVar += "    color:#fff !important; ";
strVar += "  }";
strVar += "  #allLegends > .label {";
strVar += "    color:#fff !important; ";
strVar += "  }";
strVar += "  #map {";
strVar += "    height:400px;";
strVar += "  }";
strVar += "<\/style>";
strVar += "<aside class=\"Intermodal_Ports\">";
strVar += "group,lat,lon,value,address,city,state,zip";
strVar += "Inman Rail Yard,33.795735,-84.439278,NS,1600 Marietta Rd NW,Atlanta,GA,30318";
strVar += "Savannah Yard,32.069578,-81.142174,CSX,3000 Tremont Ave,Savannah,GA,31405";
strVar += "James D. Mason ICTF,32.123934,-81.150914,NS,3 North Main St,Garden City,GA,31408";
strVar += "Fairburn Industry Yard,33.554907,-84.595026,CSX,6700 McLarin Rd,Fairburn,GA,30213";
strVar += "Whitaker Rail Yard,33.80944,-84.655451,NS,6000 Westside Rd,Austell,GA,30106";
strVar += "Chatham ICTF,32.125311,-81.151331,CSX,2 Main St,Garden City,GA,31408";
strVar += "Savannah,32.10035,-81.169963,NS,1 Charlie Gay Drive,Savannah,GA,31408";
strVar += "Cordele Intermodal Center,31.966779,-83.755101,Heart GA,2902 East 13th Ave.,Cordele,GA,31010";
strVar += "Port of Savannah Ocean Terminal,32.093702,-81.111692,\"Ro\/Ro, Breakbulk\",55 N Lathrop Ave,Savannah,GA,31415";
strVar += "Port of Brunswick,31.125887,-81.541194,\"Ro\/Ro, Agri-Bulk\",157 Penniman Cir,Brunswick,GA,31523";
strVar += "Port of Savannah,32.125,-81.151,Container,2 Main St,Savannah,GA,31407";
strVar += "Port of Brunswick Mayor's Point Terminal,31.143373,-81.494753,Breakbulk,1100 Bay Street,Brunswick,GA,31520";
strVar += "Port of Columbus,32.448734,-84.984038,Liquid Bulk,800 Lumpkin Blvd,Columbus,GA,31901";
strVar += "Port of Bainbridge,30.902867,-84.606259,Liquid\/Dry Bulk,1321 Spring Creek Road,Bainbridge,GA,39817";
strVar += "<\/aside>";
strVar += "<div class=\"displayOnload\" style=\"display:none;position:relative;\">";
strVar += "  <div id=\"map\"><\/div>";
strVar += "  <div id=\"legendHolder\">";
strVar += "    <div id=\"allLegends\"><\/div>";
strVar += "  <\/div>";
strVar += "<\/div>";
strVar += "<\/section>";
strVar += "<div style=\"clear:both\"><\/div>";
strVar += "<!-- END Top Map -->";


strVar += "<!-- Start HTML -->";
strVar += "  <section id=\"data\" style=\"overflow:auto\">";
strVar += "    <div class=\"content displayOnload\" style=\"display:none\">";
strVar += "      <div id=\"flexwrapper\">";
strVar += "        <div id=\"hublist\">";
strVar += "";
strVar += "          <h1>Data Driven Decision&nbsp;Making<\/h1>";
strVar += "          <h2 style=\"font-size: 18px; margin-bottom:0px; font-weight: 600\">Smart & Sustainable Movement of <span style=\"white-space: nowrap\">Goods & Services<\/span><\/h2><br>";
strVar += "          ";
strVar += "            <!--";
strVar += "            <input type=\"button\" onclick=\"location.href='..\/..\/samples\/feed';\" ";
strVar += "            value=\"Add your data feeds\" style=\"margin-top:20px; padding:10px\" \/>";
strVar += "            <br><br>";
strVar += "            -->";
strVar += "";
strVar += "          <div id=\"detaillist\"><\/div>";
strVar += "          <div id=\"narrowlist\" style=\"display:none\"><\/div>";
strVar += "        <\/div>";
strVar += "";
strVar += "        <a name=\"gomap\"><\/a>";
strVar += "        <div id=\"mapHolder\">";
strVar += "          <div class=\"mapHolderInner\">";
strVar += "            <div class=\"mapHolderCard card\">";
strVar += "              <div id=\"maptop\">";
strVar += "                <div style=\"position:absolute; left:0; padding:4px 4px 4px 10px\">";
strVar += "                  Connected Communities";
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

function consoleLog(text)
{
    console.log(text);
    //alert(text);
    //consoleMash = consoleMash + '\r' + text;
}
function loadScript(url, callback)
{
	if (!document.getElementById(url)) { // Prevents multiple loads.
		var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;
		script.id = url; // Prevents multiple loads.
	    // Then bind the event to the callback function. Two events for cross browser compatibility.
	    script.onreadystatechange = callback;
	    script.onload = callback;
        //$(document).ready(function () { // Only needed if appending to body
            var head = document.getElementsByTagName('head')[0];
	       head.appendChild(script);
        //});
        consoleLog("loadScript loaded: " + url);
	} else {
		consoleLog("loadScript script already available: " + url);
	}
}
function flagScriptAsLoaded(url,callback) {
	document.getElementById(url).loaded = '1';
	//alert ('Loaded: ' + url);
	return 1;
}
function loadScript2(url, requires, callback)
{
	if (requires) {
		let pendingRequirements = 0;
		requires.forEach(function(entry) {
		    
		    if (document.getElementById(entry)) {
		    	// requirementSatisfied
		    } else {
		    	pendingRequirements++;
		    	//alert(entry);
				loadScript2(entry);
			}
		});
		if (pendingRequirements > 0) {
			//alert('Call again. ' + pendingRequirements + ' pending Requirements');
			loadScript2(url, requires)
			return;
		}
	}

	if (!document.getElementById(url)) { // Prevents multiple loads.
		var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;
		script.id = url; // Used to prevent multiple loads.
	    
        //$(document).ready(function () { // Only needed if appending to body
           var head = document.getElementsByTagName('head')[0];
	       head.appendChild(script);
        //});

        // Then bind the event to the callback function. Two events for cross browser compatibility.
        // BUGBUG - Calls twice.
	    script.onreadystatechange = flagScriptAsLoaded(script.id,callback);
	    script.onload = flagScriptAsLoaded(script.id,callback);

        consoleLog("loadScript loaded: " + url);
	} else {
		consoleLog("loadScript script already available: " + url);
	}
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
function jsLoaded(root) {
	let scriptCount = 0;
	loadScript(root + 'js/common/common.js',scriptCount++);

	if (location.host.indexOf('localhost') >= 0) {
		loadScript(root + 'js/common/navigation.js',scriptCount++);
	}

	//alert(scriptCount);
}
function leafletLoaded(root) {
	let scriptCount = 0;
	
	loadScript(root + 'js/leaflet/leaflet.icon-material.js',scriptCount++);
	loadScript(root + 'js/common/dual-map.js', function(results) {
		dualmapLoaded();
	});
	//alert(scriptCount);
}
function d3Loaded(root) {
	let scriptCount = 0;

	loadScript(root + 'js/d3/d3-legend.js',scriptCount++);

	//alert(scriptCount);
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

	
		
		// To activate
		//let requires = [root + 'js/jquery/jquery-1.12.4.min.js','test'];
		//loadScript2(root + 'js/common/common.js',requires);

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

function dualmapLoaded() {
	let root = "https://modelearth.github.io/community/";
	//root = "https://model.earth/community/"; // CORS would need to be adjusted on server
	//alert(root + "tools/map.csv");

	if (1==1) {

		// INTERMODAL PORTS
	    dp = {
	      selector: "aside.Intermodal_Ports",
	      delimiter: ",",
	      numColumns: ["lat","lon"],
	      valueColumn: "value",
	      scaleType: "scaleOrdinal",
	      //scaleType: "scaleQuantile",
	      //scaleType: "scaleThreshold",
	    }
	    //dp.name = dp.selector.split(".").pop(); // name: Intermodal_Ports
	    dp.name = "Intermodal Ports"
	    dp.data = readData(dp.selector, dp.delimiter, dp.numColumns, dp.valueColumn);
	    //dp.color = '#0033ff'; // Alternative to scale
	    dp.scale = getScale(dp.data, dp.scaleType, dp.valueColumn);

	    dp.group = L.layerGroup();
	    //dp.group2 = L.layerGroup();
	    //dp.iconName = 'device_hub';
	    dp.iconName = 'language';
	    //dataParameters.push(dp);
	    addIcons(dp);

	    // Reactivate once colors differ
	    //addLegend(dp.scale, dp.scaleType, dp.name);
	    var map1 = populateMap('map', dp);
	    //basemaps["Rail"].addTo(map1);

	    layerControl['map'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers


	}

	loadFromCSV('map2', root + "tools/map.csv", function(results) {
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




