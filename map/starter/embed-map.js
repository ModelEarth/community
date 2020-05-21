
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
strVar += "    height:600px;";
strVar += "  }";
strVar += "  #hublist-padding {";
strVar += "    padding-right: 30px;";
strVar += "  }";
strVar += "<\/style>";
strVar += "";
strVar += "<div class=\"displayOnload\" style=\"display:none;position:relative;\">";
strVar += "  <div style=\"display:block;position:relative\" id=\"map1\"><\/div>";
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

/*
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
strVar += "              <input type=\"button\" onclick=\"location.href='..\/..\/start\/feed';\" ";
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
*/


strVar += "<!-- Start HTML -->";
strVar += "  <a name=\"gomap\"><\/a>";
strVar += "  <section id=\"data\" style=\"overflow:auto\">";
strVar += "    <div class=\"content displayOnload\" style=\"display:none\">";
strVar += "      <div id=\"flexwrapperX\">";
strVar += "        ";
strVar += "        <a name=\"gomap\"><\/a>";
strVar += "        <div id=\"mapHolder\">";
strVar += "          <div class=\"mapHolderInner\">";
strVar += "            <div id=\"sidemapCard\" class=\"mapHolderCard card\">";
strVar += "              <div id=\"sidemapbar\">";
strVar += "                <div id=\"sidemapName\" style=\"position:absolute; left:0; padding:4px 4px 4px 10px\">";
strVar += "                <\/div>";
strVar += "              <\/div>";
strVar += "              <div style=\"clear:both\">  ";
strVar += "                <div id=\"map2\"><\/div>";
strVar += "              <\/div>";
strVar += "            <\/div>";
strVar += "          <\/div>";
strVar += "        <\/div>";
strVar += "      ";
strVar += "        <div id=\"hublist\">";
strVar += "          <div id=\"hublist-padding\">";

strVar += "            <h1>Data Driven Decision Making<\/h1>";
strVar += "            <h2 style=\"font-size: 18px; margin-bottom:0px; font-weight: 600\">Smart & Sustainable Movement of <span style=\"white-space: nowrap\">Goods &amp; Services</span><\/h2><br>";

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
strVar += "  #legendHolder {";
strVar += "    min-width: 270px;";
strVar += "  }";
strVar += "<\/style>";

strVar += "<style>";
strVar += "#legendHolder {min-width: 270px;}";
//strVar += "#mapHolder {display:none !important}";
//strVar += "#hublist{width:100% !important}";
strVar += "  <\/style>";

document.write("<div style=\"display:block;position:relative\">" + strVar + "<\/div> ");

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
function mix(incoming, target) { // Combine two objects, priority to incoming. Delete blanks indicated by incoming.
   for(var key in incoming) {
     if (incoming.hasOwnProperty(key)) {
        if (incoming[key] === null || incoming[key] === undefined || incoming[key] === '') {
          delete target[key];
        } else {
          target[key] = incoming[key];
        }
     }
   }
   return target;
}
// END COMMON

// UNIQUE TO PAGE
function jsLoaded(root) {	
	//loadScript(root + 'js/common/common.js');
	if (location.host.indexOf('localhost') >= 0) {
		// Causing map points to shift right, maybe due to later loading.
		//loadScript(root + 'js/common/navigation.js');
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

	

	// MAP 2
	let dp2 = {
      dataset: root + "tools/map.csv"
    }
    // Georgia
    dp2.latitude = 32.9;
    dp2.longitude = -83.4;
    
    dp2.markerType = "google";
	loadFromCSV('map1','map2', dp2, function(results) {
		//alert("back");
	//loadFromCSV('map1', 'map2', "/community/tools/map.csv", function(results) {
        // This function gets called by the geocode function on success
        //makeMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
        layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers
           
    });
}


/*
loadFromCSV('map1', 'map2', "/community/tools/map.csv", function(results) {
    // This function gets called by the geocode function on success
    //makeMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());

    layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers      
});
*/




