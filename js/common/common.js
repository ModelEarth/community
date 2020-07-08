// Updates originate in community/js/common/common.js
// To do: dynamically add target _parent to external link when in an iFrame, and no existing target

// common.js does NOT use jquery, so it can be used before jquery loads.

// USE params (plural) to isolate within functions when creating embedable widgets.
// USE param for any html page using common.js.
var param = loadParams(location.search,location.hash);

// Loads params with priority given to:
// 1. Hash values on URL.
// 2. Parameters on URL.
// 3. Parameters on javascript include file.
function loadParams(paramStr,hashStr) {
  // NOTE: Hardcoded to pull params from last script, else 'embed-map.js' only
  // Get Script - https://stackoverflow.com/questions/403967/how-may-i-reference-the-script-tag-that-loaded-the-currently-executing-script
  let scripts = document.getElementsByTagName('script'); 
  let myScript = scripts[ scripts.length - 1 ]; // Last script on page, typically the current script common.js
  //let myScript = null;
  // Now try to find one containging embed-map
  for (var i = 0; i < scripts.length; ++i) {
      if(scripts[i].src && scripts[i].src.indexOf('embed-map.js') !== -1){
        myScript = scripts[i];
      }
  }
  //alert(myScript.src);

  let params = {};
  let includepairs = myScript.src.substring(myScript.src.indexOf('?') + 1).split('&');
  for (let i = 0; i < includepairs.length; i++) {
    let pair = includepairs[i].split('=');
    params[pair[0].toLowerCase()] = decodeURIComponent(pair[1]);
    //console.log("Param from javascript include: " + pair[0].toLowerCase() + " " + decodeURIComponent(pair[1]));
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
function getHash() {
      return (function (a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i) {
            var p = a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
      })(window.location.hash.substr(1).split('&'));
  }
function updateHash(addToHash) {

    let hash = getHash(); // Include all existing
    hash = mix(addToHash,hash); // Gives priority to addToHash

    // Reside in mix. DELETE
        //for (var i in hash) { // Remove blank attributes
        //  if (hash[i] === null || hash[i] === undefined || hash[i] === '') {
        //    delete hash[i];
        //  }
        //}

    var hashString = decodeURIComponent($.param(hash)); // decode to display commas in URL

        // findCompany

    

    var pathname = window.location.pathname;
    var queryString = "";
    if (window.location.search) { // Existing, for parameters that are retained as hash changes.
      queryString += window.location.search; // Contains question mark (?)
    }

    //var hsHash = '';
    //hsHash = $('[name="hs"]:checked').map(function() {return this.value;}).get().join(',');
    //if (hsHash) { // Remove the hash here if adding to other 
    //  queryString += "#hs=" + hsHash;
    //}
    //$("#productCodes").val(hsHash);
    //$("#productCodes").width("200px");

    if (hashString) { // Remove the hash here if adding to other 
      queryString += "#" + hashString;
    }
    
    let searchTitle = 'Page ' + hashString;
    window.history.pushState("", searchTitle, pathname + queryString);
    //refreshMain();
}
function clearHash(toClear) {
  let hash = getHash(); // Include all existing
  let clearArray = toClear.split(/\s*,\s*/);
  for(var i = 0; i < clearArray.length; i++) {
    delete hash[clearArray[i]]; 
  }
  var hashString = decodeURIComponent($.param(hash)); // decode to display commas in URL
  var pathname = window.location.pathname;
  var queryString = "";
  if (window.location.search) { // Existing, for parameters that are retained as hash changes.
    queryString += window.location.search; // Contains question mark (?)
  }
  let searchTitle = 'Page';
  if (hashString) { // Remove the hash here if adding to other 
    queryString += "#" + hashString;
    searchTitle = 'Page ' + hashString;
  }
  window.history.pushState("", searchTitle, pathname + queryString);
}
// Serialize a key/value object.
//var params = { width:1680, height:1050 };
//var str = jQuery.param( params );
//alert( str ); // Returns:  width=1680&height=1050

function consoleLog(text,value) {

  $("#log_display").show();
  if (value) {
    $("#log_display textarea").append(text + " " + value + "\n");
  } else {
    $("#log_display textarea").append(text + "\n");
  }

  var dsconsole = $("#log_display textarea");
    if(dsconsole.length)
       dsconsole.scrollTop(dsconsole[0].scrollHeight - dsconsole.height() - 17); // Adjusts for bottom alignment

  console.log(text, value);
}

// Convert json to html
var selected_array=[];
var omit_array=[];
function formatRow(key,value,level,item) {
  var addHtml = '';
  if (key == 'color') {
    // JQuery uses this attribute to set the bar color where class level1 immediately above this div.
    addHtml += "<div class='colorHolder' currentlevel='" + level + "' currentitem='" + item + "' color='" + value + "'></div>"
  }

  if (level==1 && selected_array.length > 0 && !selected_array.includes(key) )  {
    return addHtml;
  }
  if (level==1 && omit_array.length > 0 && omit_array.includes(key) )  {
    return addHtml;
  }

  level = level + 1;
  //if (level==1) { // Span rightcell
  //  level=2;
  //  addHtml += "<div class='hidden titlecell level1' style='width:100%'>" + key + "</div><div style='clear:both' class='hidden level" + level + "'>"
  //} else {
    addHtml += "<div class='hidden titlecell level" + level + "'>" + key + "</div><div class='hidden rightcell level" + level + "'>"
  //}
  
  //if (value.length == 0) {
  //    addHtml += "<div class='level" + level + "'>&nbsp;</div>\n";
  //    console.log("Blank: " + key + " " + value);
  //} else 
  if (isObject(value)) {
      for (c in value) {

        console.log("isObject: " + key + " " + value);
        
        //if (json.data[a].constructor === Array && selected_array.includes(a) )  {
        if (isObject(value[c])) {

          // NEVER REACHED?
          console.log("This code is reached for location: " + key + " " + value);
        if (value[c].length >1){

          for (d in value[c]){  
              
              if (isObject(value[c][d])) {
              //addHtml += "<b>Add something else here</b>\n";
              for (e in value[c][d]){
                //addHtml += "<div class='level" + level + "'>" + e + ":: " + value[c][d][e] + "</div>\n";
                addHtml += formatRow(e,"-- " + value[c][d][e],level);
              }
            } else {
              //addHtml += "<div class='level" + level + "'>" + d + "::: " + value[c][d] + "</div>\n";
              addHtml += formatRow(d,"---- " + value[c][d],level);
            }

          }
        }

      } else {
        addHtml += formatRow(c,value[c],level);
          //addHtml += "<div class='level'>" + c + ":::: " + value[c] + "</div>\n";
        }
      }       
    } 
    
    /*if (Object.keys(value).length >1){
      console.log(b);
    }*/

      // value.constructor === Array

    else if (isArray(value))  { // was b.   && selected_array.includes(key)  seems to prevent overload for DiffBot. Need to identify why.
      //console.log(value.length);

      console.log("isArray: " + key + " " + value + " " + value.length);
      if (value.length > 0) {

        for (c in value) {
          curLine=""            
          //console.log(value[c],b,c); //c is 0,1,2 index
          
          if (isObject(value[c]) || isArray(value[c])) {
            for (d in value[c]){
            
              if (isObject(value[c][d])) { // Error in Drupal json
                //addHtml += "<b>Add something else here</b>\n";
                for (e in value[c][d]){
                  addHtml += formatRow(e,value[c][d][e],level);
                  //addHtml += "<div class='level5'>" + e + ": " + value[c][d][e] + "</div>\n";
                }
              } else {
                //console.log("Found: " + value[c][d])
                addHtml += formatRow(d,value[c][d],level);
                //addHtml += "<div class='level4'>" + d + ":: " + value[c][d] + "</div>\n";
              }

              // if (value[c].constructor === Array && selected_array.includes(c) )  {
              //  addHtml += "<b>Add loop here</b>\n";
              // }
              // if (isArray(value[c][d])) {
              //  addHtml += "<b>Add something here</b>\n";
              // }
              
            }
          /*
          } else if (isArray(value[c])) {
            for (d in value[c]) {
              if (isObject(value[c][d])) {
                //addHtml += "<b>Add something else here</b>\n";
                for (e in value[c][d]){
                  addHtml += formatRow(e,value[c][d][e],level);
                  //addHtml += "<div class='level5'>" + e + ": " + value[c][d][e] + "</div>\n";
                }
              } else {
                //console.log("Found: " + value[c][d]); // Returns error since not object
                console.log("Found: " + d);
                //addHtml += formatRow(d,d,level); // BUG
                addHtml += "<div class='level4'>" + d + "</div>\n";
              }

              //addHtml += "<div class='level" + level + "'>" + value[c] + "</div>\n";
            }
            */
          } else {
              // For much of first level single names.
              addHtml += "<div class='level" + level + "'>" + value[c] + "</div>\n";
          }
            
                        
        
          }
    } else {
      console.log("Array of 0: " + key + " " + value);
      //addHtml += formatRow(c,value[c],level);
      addHtml += "<div class='level" + level + "'>" + value + "&nbsp;</div>\n";
    }
  } else if (key == "url") {
      addHtml += "<a href='" + value + "'>" + value + "</a>"
  } else if (key.indexOf("Uri")>=0) {
      uriLink = (value.indexOf("http")==0) ? value : "https://" + value; // Brittle
      addHtml += "<a href='" + uriLink + "'>" + value + "</a>"
  } else if (key == "logo") {
      addHtml += "<img src='" + value + "' class='rightlogo'><br>"
    } else if (key.toLowerCase().includes("timestamp")) {
      addHtml += "<div class='level" + level + "'>" +  new Date(value) + "</div>\n";
  } else {
      //console.log("Last: " + key + " " + value);
      addHtml += "<div class='level" + level + "'>" + value + "</div>\n";
  }
  addHtml += "</div>\n";

    //result.innerHTML = result.innerHTML + addHtml;

  return addHtml;
}
isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};
function isArray(obj){
  //return !!obj && obj.constructor === Array;
  //return Array.isArray(obj);
  //if (obj.toString.indexOf("[") != 0) {
  if (typeof obj == "string") {
    //return false; // no effect
  }
  return $.isArray(obj);
}
Object.size = function(obj) {
    return Object.keys(obj).length;
}
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

addEventListener("load", function(){
  var getParentAnchor = function (element) {
    while (element !== null && element.tagName !== undefined) {
      if (element.tagName.toUpperCase() === "A") {
        return element;
      }
      element = element.parentNode;
    }
    return null;
  };
  document.querySelector("body").addEventListener('click', function(e) {
    //consoleLog('click ' + Date.now())
    var anchor = getParentAnchor(e.target);
    if(anchor !== null) {
      $('#log_display').hide();
    }
  }, false);
});




/*
<link rel="stylesheet" href="css/reveal.css">
<link rel="stylesheet" href="css/theme/night.css">

*/



/*  placed before loadMarkdown 

Configuration
https://github.com/hakimel/reveal.js#markdown
*/
/*
<script src="js/reveal.js"></script>
<script>
  Reveal.initialize();

  // For long slides
  function resetSlideScrolling(slide) {
      slide.classList.remove('scrollable-slide');
  }

  function handleSlideScrolling(slide) {
      if (slide.scrollHeight >= 800) {
          slide.classList.add('scrollable-slide');
      }
  }
  Reveal.addEventListener('ready', function (event) {
      handleSlideScrolling(event.currentSlide);
  });

  Reveal.addEventListener('slidechanged', function (event) {
      if (event.previousSlide) {
          resetSlideScrolling(event.previousSlide);
      }
      handleSlideScrolling(event.currentSlide);
  });

</script>
*/