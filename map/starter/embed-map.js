
/*
// EMBED MAP
// Generate the script below by pasting index.html into:
// http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
// Final version resides in embed-map.js
*/

var strVar="";
strVar += "<!-- Start HTML -->";
strVar += "  <section id=\"data\" class=\"litePanel\">";
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
	alert ('Loaded: ' + url);
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
	includeCSS(root + 'css/community.css',root);
	includeCSS(root + 'css/leaflet/leaflet.css',root);
	includeCSS('https://fonts.googleapis.com/icon?family=Material+Icons',root);
	includeCSS(root + 'css/leaflet/leaflet.icon-material.css',root);
	includeCSS(root + 'css/map.css',root);

	//setTimeout(function(){
		let requires = [root + 'js/jquery/jquery-1.12.4.min.js','test'];
		loadScript2(root + 'js/common/common.js',requires);

		//loadScript(root + 'js/jquery/jquery-1.12.4.min.js', function(results) {
		//	jsLoaded(root);
		//});

		// Resides AFTER css/leaflet/leaflet.css
		loadScript(root + 'js/leaflet/leaflet.js', function(results) {
			leafletLoaded(root);
		});
		loadScript(root + 'js/d3/d3.v5.min.js', function(results) {
			d3Loaded(root);
		});
	//}, 1000);
}
//var L;

lazyLoadFiles();

function dualmapLoaded() {
	loadFromCSV('map2', "/community/tools/map.csv", function(results) {
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





