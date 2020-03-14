
/*
// EMBED MAP
// Generate the script below by pasting index.html into:
// http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
// Final version resides in embed-map.js
*/

var strVar="";
strVar += "<section id=\"data\" class=\"litePanel\">";
strVar += "    <div class=\"content\">";
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

document.write(strVar);

loadFromCSV('map2', "/community/tools/map.csv", function(results) {
    // This function gets called by the geocode function on success
    //makeMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());

    layerControl['map2'].addOverlay(baselayers["Rail"], "Railroads"); // Appends to existing layers      
});






