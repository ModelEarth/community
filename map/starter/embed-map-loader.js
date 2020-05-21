
/*
// This experiment didn't work because "loaded" attribute was not added to script until function exited.

// EMBED MAP
// Generate the script below by pasting index.html into:
// http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
// Final version resides in embed-map.js
*/

var strVar="";
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
strVar += "            <input type=\"button\" onclick=\"location.href='..\/..\/start\/feed';\" ";
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
strVar += "              <div id=\"sidemapbar\">";
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
           //var head = document.getElementsByTagName('head')[0];
	       //head.appendChild(script);
	       document.getElementsByTagName('head')[0].appendChild(script);
        //});
        consoleLog("loadScript loaded: " + url);
	} else {
		consoleLog("loadScript script already available: " + url);
	}
}
function flagScriptAsLoaded(id) {
	document.getElementById(id).setAttribute('loaded', 1);
	console.log('Add loaded to: ' + id);
}
function QuerySelectors() {
  return (document['querySelector']&&document['querySelectorAll'])!=null;
}
function loadRequirements(url, root, attempts, requires, callback)
{
	let pendingRequirements = 0;
	if (requires.length > 0) {
		console.log("CHECKING REQUIREMENS FOR " + url)
		let pendingRequirements = 0;
		// Intiate loading of multile required scripts.
		console.log('requires ' + requires.length)
		requires.forEach(function(entry) {
		    let entryID = getUrlID(entry,root);
		    if (document.getElementById(entryID) && document.getElementById(entryID).getAttribute("loaded") == "1") {
		    	
		    	// requirementSatisfied
		    	console.log('Found loaded ' + attempts + ' attempts:' + entry)
		    //} else if(!script.readyState) { // Omits Explorer <9 since it does not support querySelector
		    } else if (document.getElementById(entryID)) { // We assume by the unique entryID that is was not from another module. Each module could add also a random attribute.
		    	// No loaded indicator. Keep trying. 
		    	//console.log("try again"); 
		    	pendingRequirements++;
		    } else if(QuerySelectors()) { // Omits Explorer <9 since it does not support querySelector
		    	//alert(entry)
		    	//alert('Use QuerySelectors : ' + document.querySelector("[src=" + CSS.escape(entry) + "]").src);
		    	// Find existing script by src
		    	if (document.querySelector("[src=" + CSS.escape(entry) + "]")) {
		    		//alert('src for ' + entry + ' is: ' + document.querySelector("[src=" + CSS.escape(entry) + "]").src)

		    		// PREEXISTING SCRIPT BUT NOT FLAGGED AS LOADED. If it has no id and is not yet indicated as loaded.
		    		if (!document.querySelector("[src=" + CSS.escape(entry) + "]").getAttribute("loaded") >= 1) { 
		    		//if (document.querySelector("[src=" + CSS.escape(entry) + "]").loaded <= 0) { // Didn't work
		    			//var elems = document.querySelectorAll('[src=entry]');
		    			//alert(elems.length);
						//for(var i = 0; i < elems.length; i ++) { // Should we only set the first one.
						//    elems[0].setAttribute('id', entryID);
						//    elems[0].setAttribute('loaded', 1);
						//}
		    			document.querySelector("[src=" + CSS.escape(entry) + "]").id = entryID;
		    			console.log('Found by src, but not yet indicated as loaded.\r' + attempts + ' attempts: ' + document.querySelector("[src=" + CSS.escape(entry) + "]").id)
		    			
		    			// Since it had no ID, it was added outside the loadScript process. 
		    			// So we will assume it has already loaded.
		    			// Perhaps loading could be checked for the JQuery script and others, which have known parameters.
		    			if (entryID.includes("jquery")) {
		    				console.log("include jquery");
		    				//if (typeof jQuery != 'undefined') { // Seems to wait until DOM ready.
		    				//	console.log("window.jQuery yes");
		    					flagScriptAsLoaded(entryID);
		    				//}
		    			} else {
		    				flagScriptAsLoaded(entryID);
		    			}
		    			loadScript2(entry, root, attempts++, [], function(results) {});
		    			pendingRequirements++;
		    		} else if (document.getElementById(entryID)) { // Find by id
		    			console.log('Found by id ' + attempts + ' attempts:' + entry);
		    			loadScript2(entry, root, attempts++, [], function(results) {});
		    			pendingRequirements++;
		    		}
		    	} else { // SRC NOT FOUND
		    		console.log("SRC NOT FOUND");
		    		loadScript2(entry, root, attempts++, [], function(results) {});
		    		pendingRequirements++;
		    	}
		    } else {
		    	console.log('Using Old Version of Explorer.')
		    	callback();
				loadScript2(entry, root, attempts++, [], function(results) {}); // Might not be first attempt for this required script.
				pendingRequirements++;
			}
		});
	}
}
function loadScript2(url, root, attempts, requires, callback)
{
	// The root is removed in the id because the root differs based on the level the script is called from.
	// Using an ID also allows parameters to be removed to avoid duplicate loads.
	let urlID = getUrlID(url,root);
	let pendingRequirements = requires.length;
	setTimeout(function(){
			
		if (requires.length > 0) {
			while (pendingRequirements > 0) {
				console.log('Waiting for ' + pendingRequirements + ' pending requirements - ' + urlID);
				pendingRequirements = 0;
			 	requires.forEach(function(entry) { // Loop until all requirements have loaded, if not call all again.
			 		entryID = getUrlID(entry,root);
			 		if (document.getElementById(entryID) && document.getElementById(entryID).getAttribute("loaded") != "1") {
			 			pendingRequirements++;
			 		}
				});
				if (attempts > 30) {
					console.log('Canceled after ' + attempts++ + ' attempts. Not loaded: ' + url);
					return;
				}
				attempts++;
			}
		}
		if(QuerySelectors()) { // For newer browsers, fetch the ID using src
			if (document.querySelector("[src=" + CSS.escape(url) + "]")) {
				urlID = document.querySelector("[src=" + CSS.escape(url) + "]").getAttribute("id");
			}
		}
		if (!document.getElementById(urlID)) { // Check if script's ID tag doesn't exist yet. The script's id can exist before loading completes. Prevents multiple loads.
			var script = document.createElement('script');
		    script.type = 'text/javascript';
		    script.src = url;
			script.id = urlID; // Used to prevent multiple loads.
		    
	        //$(document).ready(function () { // Only needed if appending to body
	           var head = document.getElementsByTagName('head')[0];
		       head.appendChild(script);
	        //});
	        consoleLog("loadScript2 placed on page: " + url);

	        // Then bind the event to the callback function. Cross browser compatibility.
		    if(script.readyState) {  // only called for IE <9
		    	console.log('script.readyState ' + url)
			    script.onreadystatechange = function() {
			      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
			        script.onreadystatechange = null;
			        
			        flagScriptAsLoaded(script.id);
			        callback();
			      }
			    };
			 } else { // All other browsers
			    script.onload = function() {
			    	console.log('script.onload ' + url)
			    	
			    	flagScriptAsLoaded(script.id);
			    	callback();
			    };
			 }

	        
		} else {
			consoleLog("loadScript2 script already available: " + url);
		}
	}, 1); // 1 tick
}
function getUrlID(url,root) {
	let urlID = url.replace(root,"").replace("https://","").replace(/\//g,"-").replace(/\./g,"-").toLowerCase();
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

function docReady(fn) { // From from IE9 forward
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
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

// https://books.google.com/books?id=ZOtVCgAAQBAJ&pg=PA6&lpg=PA6&dq=script.onload+does+not+execute+while+the+function+that+called+it+is+still+active&source=bl&ots=2qz2fkyM4u&sig=ACfU3U1Zr2JIJnn8PZoA0aYOAZyniuOeRw&hl=en&sa=X&ved=2ahUKEwj-prSIqaPoAhVKTt8KHYomDawQ6AEwC3oECBMQAQ#v=onepage&q=script.onload%20does%20not%20execute%20while%20the%20function%20that%20called%20it%20is%20still%20active&f=false
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

		let requires = [];

		requires = [root + 'js/jquery/jquery-1.12.4.min.js'];
		loadRequirements('', root, 0, requires, function(results) {});
		loadScript2(root + 'js/common/common.js', root, 0, requires, function(results) {});

		requires = [root + 'js/d3/d3.v5.min.js'];
		loadRequirements('', root, 0, requires, function(results) {});
		loadScript2(root + 'js/d3/d3-legend.js', root, 0, requires, function(results) {});

		//loadScript(root + 'js/jquery/jquery-1.12.4.min.js', function(results) {
		//	jsLoaded(root);
		//});

		// Required by leafletLoaded that follows
		//loadScript(root + 'js/d3/d3.v5.min.js', function(results) {
			//d3Loaded(root);
		//});

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
	let dp1 = {
	  dataset: root + "tools/map.csv",
	  latitude: 31.6074,
	  longitude: -81.8854
	}
	loadFromCSV('map1', 'map2', dp1, function(results) {
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





