// Updates originate in community/js/common/common.js

function loadParams(paramStr,hashStr) {
  // Priority: 1st hash, 2nd url search
    var request = {};
    var pairs = paramStr.substring(paramStr.indexOf('?') + 1).split('&');
    for (var i = 0; i < pairs.length; i++) {
        if(!pairs[i])
            continue;
        var pair = pairs[i].split('=');
        request[decodeURIComponent(pair[0]).toLowerCase()] = decodeURIComponent(pair[1]);
     }
     // Next we override with the Hash for older browser that cannot update the URL from script.
     // And for embedding where URL variables may not be usable.
    var hashPairs = hashStr.substring(hashStr.indexOf('#') + 1).split('&');
    for (var i = 0; i < hashPairs.length; i++) {
        if(!hashPairs[i])
            continue;
        if (i==0 && hashPairs[i].indexOf("=") == -1) {
          request[""] = hashPairs[i];  // Allows for initial # param without =.
          continue;
        }
        var hashPair = hashPairs[i].split('=');
        request[decodeURIComponent(hashPair[0]).toLowerCase()] = decodeURIComponent(hashPair[1]);
     }
     return request;
}
var param = loadParams(location.search,location.hash);

function loadMarkupPage(pagePath, divID, target) {
  d3.text(pagePath).then(function(data) {
    var converter = new showdown.Converter({tables:true}),
    html = converter.makeHtml(data);
    document.getElementById(divID).innerHTML = html;
  });
}
function consoleLog(text,value) {

  $("#ds_command").show();
  if (value) {
    $("#ds_command textarea").append(text + " " + value + "\n");
  } else {
    $("#ds_command textarea").append(text + "\n");
  }

  var dsconsole = $("#ds_command textarea");
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
      $('#ds_command').hide();
    }
  }, false);
});