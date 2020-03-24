// MAP POPUP 2 - where is this used?
    var output = "<div style='width:15px;height:15px;margin-right:8px;margin-top:3px;background:" + colorScale(element[dp.valueColumn]) + ";float:left'></div><div style='overflow:auto'>"
    output += "<b style='font-size:16px;color:#333'>" + element[dp.nameColumn] + "</b><br>" + element[dp.valueColumn] + "<br>" + element.address + "<br>" + element.city + " " + element.state + " " + element.zip + "<br>";
    if (element.phone || element.phone_afterhours) {
     output += element.phone + " " + element.phone_afterhours + "<br>";
    }
    if (element.schedule) {
     output += "Hours: " + element.schedule + "<br>";
    }
    if (element.website) {
      output += "<a href='" + element.website.replace(/\/$/, "") + "' target='_blank'>Website</a><br>";
    }
    if (element.website && element[dp.latColumn]) {
      output += " | ";
    }
    if (element[dp.latcolumn]) {
        output += "<a href='https://www.waze.com/ul?ll=" + element[dp.latcolumn] + "%2C" + element[dp.loncolumn] + "&navigate=yes&zoom=17'>Waze Directions</a>";
    }
     output += "<br></div><div style='clear:both'></div>";

    $("#narrowlist").append(output);